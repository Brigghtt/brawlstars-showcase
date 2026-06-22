/**
 * 从 Brawl Stars Wiki (Fandom) 抓取英雄基础数值、妙具 CD、星辉数值、极充倍率等
 * 运行: node scripts/scrape-fandom.mjs
 * 输出: lib/data/fandomStats.json
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function refreshCookie() {
  const res = await fetch('https://brawlstars.fandom.com/wiki/Shelly', {
    method: 'HEAD',
    headers: { 'User-Agent': USER_AGENT },
  });
  const setCookie = res.headers.get('set-cookie') || '';
  const m = setCookie.match(/__cf_bm=([^;]+)/);
  return m ? `__cf_bm=${m[1]}` : '';
}

async function fetchParse(page, cookie) {
  const url = `https://brawlstars.fandom.com/api.php?action=parse&page=${encodeURIComponent(page)}&prop=wikitext%7Ctext&format=json&redirects=1`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      'Cookie': cookie,
      'Accept': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`Fandom HTTP ${res.status} for ${page}`);
  const data = await res.json();
  return {
    wikitext: data.parse.wikitext['*'],
    html: data.parse.text['*'],
  };
}

// ============================================================
// 修复：支持多种模板名变体，并正确处理嵌套模板
// ============================================================
function parseInfobox(wikitext) {
  // 尝试多种模板名变体（空格、下划线、换行、大小写）
  const patterns = [
    /\{\{\s*Brawler\s*Infobox\s*[\|\n]/i,
    /\{\{\s*Brawler_Infobox\s*[\|\n]/i,
    /\{\{\s*BrawlerInfobox\s*[\|\n]/i,
    /\{\{\s*Infobox\s*Brawler\s*[\|\n]/i,
  ];
  
  let start = -1;
  let matchLen = 0;
  for (const p of patterns) {
    const m = wikitext.match(p);
    if (m) {
      start = m.index;
      matchLen = m[0].length;
      break;
    }
  }
  
  if (start === -1) return null;
  
  // 找到对应的结束 }}
  let depth = 2;
  let i = start + matchLen;
  while (i < wikitext.length && depth > 0) {
    if (wikitext[i] === '{' && wikitext[i + 1] === '{') {
      depth++;
      i += 2;
    } else if (wikitext[i] === '}' && wikitext[i + 1] === '}') {
      depth--;
      i += 2;
    } else {
      i++;
    }
  }
  
  // 提取内部内容（去掉末尾的 }}）
  const inner = wikitext.slice(start + matchLen, i - 2).trim();
  
  const params = {};
  // 按顶层 | 分割，忽略嵌套 {{ }} 内的 |
  const parts = splitTemplateParams(inner);
  for (const part of parts) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    let val = part.slice(eq + 1).trim();
    val = val.replace(/<br\s*\/?>/gi, ' ').replace(/&nbsp;/g, ' ');
    params[key] = val;
  }
  return params;
}

// 辅助：按顶层 | 分割模板参数，正确处理嵌套 {{ }}
function splitTemplateParams(inner) {
  const parts = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (ch === '{' && inner[i + 1] === '{') {
      depth++;
      current += ch;
    } else if (ch === '}' && inner[i + 1] === '}') {
      depth--;
      current += ch;
    } else if (ch === '|' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current) parts.push(current);
  return parts;
}

// 兜底：如果 wikitext 方式失败，从 HTML 的 portable-infobox 提取
function parseInfoboxFromHtml(html) {
  const $ = cheerio.load(html);
  const infobox = $('.portable-infobox');
  if (!infobox.length) return null;
  
  const params = {};
  infobox.find('[data-source]').each((_, el) => {
    const key = $(el).attr('data-source');
    const val = $(el).text().trim();
    if (key) params[key] = val;
  });
  
  // 尝试提取标题
  const title = infobox.find('.pi-title').text().trim();
  if (title) params.Title = title;
  
  return Object.keys(params).length > 0 ? params : null;
}

function parseLevelTables(html) {
  const $ = cheerio.load(html);
  const tables = {};
  $('h2').each((_, el) => {
    const title = $(el).text().trim();
    if (!['Health', 'Attack', 'Super'].includes(title)) return;
    const section = $(el).closest('section');
    const levels = {};
    section.children('section').each((_, child) => {
      const cells = $(child).find('tr').first().find('td,th')
        .map((_, td) => $(td).text().trim()).get();
      if (cells.length === 2) {
        const lvl = parseInt(cells[0], 10);
        if (!isNaN(lvl)) levels[lvl] = cells[1];
      }
    });
    tables[title] = levels;
  });
  return tables;
}

function firstNum(str) {
  const m = String(str).match(/[\d,.]+/);
  return m ? parseFloat(m[0].replace(/,/g, '')) : 0;
}

function firstToken(str) {
  // 取第一个 "数值 (单位/描述)"，例如 "7.67 (Long)"、"770 (Fast)"
  // 允许描述中再出现一层括号，如 "3 seconds (full ammo bar; Very Slow)"
  const text = String(str).trim();
  const m = text.match(/[\d.]+[^()]*\([^()]+\)/);
  return m ? m[0] : text.split(/\s+/)[0] || '-';
}

function cleanQuote(text) {
  return String(text)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\{\{[^}]+\}\}/g, '')
    .replace(/Cooldown:\s*[\d.]+\s*seconds?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractNumbersFromDesc(text) {
  return [...text.matchAll(/[\d,.]+%?/g)]
    .map(m => m[0])
    .filter(v => /\d/.test(v));
}

function extractAbilityNumbers(wikitext, name) {
  if (!name) return [];
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`===\\s*${escaped}\\s*===`, 'i');
  const m = wikitext.match(re);
  if (!m) return [];
  const after = m.index + m[0].length;
  let end = wikitext.length;
  const next3 = wikitext.indexOf('\n===', after);
  const next2 = wikitext.indexOf('\n==', after);
  if (next3 !== -1) end = Math.min(end, next3);
  if (next2 !== -1) end = Math.min(end, next2);
  const section = wikitext.slice(after, end);
  const quote = section.match(/\{\{Quote\|([\s\S]*?)(?:\|[^\|]*?)?\}\}/);
  const desc = quote ? cleanQuote(quote[1]) : cleanQuote(section.split('\n')[0] || '');
  return extractNumbersFromDesc(desc);
}

async function parseHero(enName, cookie) {
  const { wikitext, html } = await fetchParse(enName, cookie);
  
  // 先尝试 wikitext 解析
  let params = parseInfobox(wikitext);
  
  // 失败则尝试 HTML 兜底
  if (!params) {
    console.warn(`  wikitext infobox 未找到，尝试 HTML fallback...`);
    params = parseInfoboxFromHtml(html);
  }
  
  if (!params) throw new Error(`No Brawler Infobox for ${enName}`);

  const levels = parseLevelTables(html);
  const healthL11 = levels.Health?.[11] || params.Health;
  const attackL11 = levels.Attack?.[11] || params.Attack;
  const superL11 = levels.Super?.[11] || params.Super;

  const gadgetCooldowns = {};
  const gadgetValues = {};
  for (let i = 1; i <= 3; i++) {
    const name = params[`Gadget${i}Name`];
    if (!name) continue;
    const cd = params[`Gadget${i}Cooldown`];
    gadgetCooldowns[name] = cd || '';

    const values = [];
    const mainVal = params[`Gadget${i}`];
    const mainLabel = params[`Gadget${i}Label`];
    if (mainVal !== undefined && String(mainVal).toLowerCase() !== 'x') values.push({ value: mainVal, label: mainLabel || '' });
    for (let j = 2; j <= 5; j++) {
      const v = params[`Gadget${i}${j}`];
      const l = params[`Gadget${i}Label${j}`];
      if (v !== undefined && String(v).toLowerCase() !== 'x') values.push({ value: v, label: l || '' });
    }
    // 合并 infobox 数值与 Quote 描述中的数字，以覆盖多个 x 占位符
    const quoteNums = extractAbilityNumbers(wikitext, name);
    const seen = new Set(values.map(v => String(v.value)));
    for (const n of quoteNums) {
      if (!seen.has(n)) values.push({ value: n, label: '' });
    }
    if (values.length) {
      gadgetValues[name] = { values, cooldown: cd || '', range: params[`Gadget${i}Range`] || '' };
    }
  }

  const starPowerValues = {};
  for (let i = 1; i <= 3; i++) {
    const name = params[`StarPower${i}Name`];
    if (!name) continue;

    const values = [];
    const mainVal = params[`StarPower${i}`];
    const mainLabel = params[`StarPower${i}Label`];
    if (mainVal !== undefined && String(mainVal).toLowerCase() !== 'x') values.push({ value: mainVal, label: mainLabel || '' });
    for (let j = 2; j <= 5; j++) {
      const v = params[`StarPower${i}${j}`];
      const l = params[`StarPower${i}Label${j}`];
      if (v !== undefined && String(v).toLowerCase() !== 'x') values.push({ value: v, label: l || '' });
    }
    const quoteNums = extractAbilityNumbers(wikitext, name);
    const seen = new Set(values.map(v => String(v.value)));
    for (const n of quoteNums) {
      if (!seen.has(n)) values.push({ value: n, label: '' });
    }
    if (values.length) {
      starPowerValues[name] = { values };
    }
  }

  // 从所有能力标题（gadget/star power）的 Quote 描述中提取数字，用于名称不在 infobox 中的情况
  const abilityDescNumbers = {};
  const headings = [...wikitext.matchAll(/===\s*([^=]+?)\s*===/g)].map(m => m[1].trim());
  for (const h of [...new Set(headings)]) {
    const nums = extractAbilityNumbers(wikitext, h);
    if (nums.length) abilityDescNumbers[h] = nums;
  }

  // 极充描述在 infobox 外，取 {{Hypercharge}} 后第一个非模板文本
  let hyperDesc = '';
  const hcIdx = wikitext.indexOf('{{Hypercharge}}');
  if (hcIdx !== -1) {
    const after = wikitext.slice(hcIdx + '{{Hypercharge}}'.length);
    const nextTemplate = after.search(/\{\{/);
    hyperDesc = (nextTemplate === -1 ? after : after.slice(0, nextTemplate)).trim();
    hyperDesc = hyperDesc.replace(/\{\{[^}]+\}\}/g, '').trim();
  }

  return {
    health: firstNum(healthL11),
    damage: firstNum(attackL11),
    attackMin: params.Attack2 ? firstNum(params.Attack) : undefined,
    attackMax: params.Attack2 ? firstNum(params.Attack2) : firstNum(attackL11),
    superDamage: firstNum(superL11),
    range: params.AttackRange ? firstToken(params.AttackRange) : '-',
    reload: params.Reload || '-',
    speed: params.MovementSpeed ? firstToken(params.MovementSpeed) : '-',
    gadgetCooldowns,
    gadgetValues,
    starPowerValues,
    abilityDescNumbers,
    hypercharge: {
      multiplier: params.HyperchargeMultiplier || '',
      desc: hyperDesc,
    },
  };
}

async function main() {
  console.log('Refreshing Fandom cookie...');
  const cookie = await refreshCookie();
  if (!cookie) throw new Error('Failed to obtain Fandom __cf_bm cookie');

  console.log('Fetching brawler list from BrawlAPI...');
  let list = [];
  try {
    const res = await fetch('https://api.brawlapi.com/v1/brawlers', {
      headers: { 'User-Agent': USER_AGENT },
    });
    if (res.ok) {
      const data = await res.json();
      list = data.list;
    }
  } catch (err) {
    console.warn('BrawlAPI fetch failed, falling back to heroDetails.ts:', err.message);
  }
  if (!list.length) {
    const ts = await fs.readFile(path.join(ROOT, 'lib', 'data', 'heroDetails.ts'), 'utf-8');
    const names = [...ts.matchAll(/"enName":\s*"([^"]+)"/g)].map(m => m[1]);
    list = names.map(name => ({ name }));
  }

  const stats = {};
  const errors = [];
  const CONCURRENCY = 4;
  for (let i = 0; i < list.length; i += CONCURRENCY) {
    const batch = list.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(async (b) => {
      console.log(`[${list.indexOf(b) + 1}/${list.length}] ${b.name}`);
      try {
        stats[b.name] = await parseHero(b.name, cookie);
      } catch (err) {
        console.warn(`  failed: ${err.message}`);
        errors.push({ name: b.name, error: err.message });
      }
    }));
    if (i + CONCURRENCY < list.length) await sleep(200);
  }

  const outPath = path.join(ROOT, 'lib', 'data', 'fandomStats.json');
  await fs.writeFile(outPath, JSON.stringify({ stats, errors }, null, 2), 'utf-8');
  console.log(`\nWrote ${Object.keys(stats).length} heroes to ${outPath}`);
  if (errors.length) console.log(`Errors: ${errors.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});