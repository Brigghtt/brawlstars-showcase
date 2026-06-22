/**
 * 抓取 BrawlAPI 英雄数据并生成 lib/data/heroDetails.ts
 * 运行: node scripts/fetch-heroes.mjs
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// 前 36 位英雄的本地 id / API id / 中文名 / 角色定位（与旧数据对齐）
const KNOWN_HEROES = [
  { localId: '1', apiId: 16000000, cnName: '雪莉', role: '输出' },
  { localId: '2', apiId: 16000001, cnName: '柯尔特', role: '输出' },
  { localId: '3', apiId: 16000007, cnName: '杰西', role: '控场' },
  { localId: '4', apiId: 16000002, cnName: '公牛', role: '坦克' },
  { localId: '5', apiId: 16000003, cnName: '布洛克', role: '射手' },
  { localId: '6', apiId: 16000022, cnName: '迪克', role: '投弹手' },
  { localId: '7', apiId: 16000027, cnName: '8比特', role: '输出' },
  { localId: '8', apiId: 16000030, cnName: '艾魅', role: '控场' },
  { localId: '9', apiId: 16000006, cnName: '巴利', role: '投弹手' },
  { localId: '10', apiId: 16000013, cnName: '波克', role: '辅助' },
  { localId: '11', apiId: 16000024, cnName: '罗莎', role: '坦克' },
  { localId: '12', apiId: 16000009, cnName: '爆破麦克', role: '投弹手' },
  { localId: '13', apiId: 16000008, cnName: '妮塔', role: '输出' },
  { localId: '14', apiId: 16000019, cnName: '潘妮', role: '控场' },
  { localId: '15', apiId: 16000015, cnName: '佩佩', role: '射手' },
  { localId: '16', apiId: 16000004, cnName: '瑞科', role: '输出' },
  { localId: '17', apiId: 16000005, cnName: '斯派克', role: '输出' },
  { localId: '18', apiId: 16000014, cnName: '阿渤', role: '输出' },
  { localId: '19', apiId: 16000010, cnName: '艾尔·普里莫', role: '坦克' },
  { localId: '20', apiId: 16000018, cnName: '达里尔', role: '坦克' },
  { localId: '21', apiId: 16000025, cnName: '卡尔', role: '输出' },
  { localId: '22', apiId: 16000034, cnName: '雅琪', role: '坦克' },
  { localId: '23', apiId: 16000016, cnName: '帕姆', role: '辅助' },
  { localId: '24', apiId: 16000020, cnName: '弗兰肯', role: '坦克' },
  { localId: '25', apiId: 16000026, cnName: '比比', role: '坦克' },
  { localId: '26', apiId: 16000029, cnName: '贝亚', role: '射手' },
  { localId: '27', apiId: 16000011, cnName: '莫提斯', role: '刺客' },
  { localId: '28', apiId: 16000017, cnName: '塔拉', role: '输出' },
  { localId: '29', apiId: 16000021, cnName: '吉恩', role: '辅助' },
  { localId: '30', apiId: 16000032, cnName: '麦克斯', role: '辅助' },
  { localId: '31', apiId: 16000031, cnName: 'P先生', role: '控场' },
  { localId: '32', apiId: 16000037, cnName: '芽芽', role: '投弹手' },
  { localId: '33', apiId: 16000012, cnName: '黑鸦', role: '刺客' },
  { localId: '34', apiId: 16000023, cnName: '里昂', role: '刺客' },
  { localId: '35', apiId: 16000028, cnName: '沙迪', role: '控场' },
  { localId: '36', apiId: 16000035, cnName: '格尔', role: '控场' },
];

// 37 位及以后英雄的中文名（社区常见译名 / 音译，后续可按官方更新）
const CN_NAME_MAP = {
  'Nani': '纳妮',
  'Sprout': '芽芽',
  'Surge': '瑟奇',
  'Colette': '科莱特',
  'Amber': '琥珀',
  'Lou': '小罗',
  'Byron': '拜伦',
  'Edgar': '艾德加',
  'Ruffs': '拉夫上校',
  'Stu': '斯图',
  'Belle': '贝尔',
  'Squeak': '史魁克',
  'Grom': '格罗姆',
  'Buzz': '巴兹',
  'Griff': '格里夫',
  'Ash': '阿拾',
  'Meg': '梅格',
  'Lola': '萝拉',
  'Fang': '阿方',
  'Eve': '伊芙',
  'Janet': '珍妮特',
  'Bonnie': '邦妮',
  'Otis': '奥蒂斯',
  'Sam': '山姆',
  'Gus': '格斯',
  'Buster': '巴斯特',
  'Chester': '切斯特',
  'Gray': '格雷',
  'Mandy': '曼迪',
  'R-T': '阿尔缇',
  'Willow': '薇洛',
  'Maisie': '麦茜',
  'Hank': '汉克',
  'Cordelius': '科迪琉斯',
  'Doug': '道格',
  'Pearl': '珀尔',
  'Chuck': '查克',
  'Charlie': '查莉',
  'Mico': '米科',
  'Kit': '凯特',
  'Larry & Lawrie': '拉里和劳里',
  'Melodie': '麦乐迪',
  'Angelo': '安吉洛',
  'Draco': '德拉科',
  'Lily': '莉莉',
  'Berry': '拜瑞',
  'Clancy': '克兰西',
  'Moe': '阿萌',
  'Kenji': '健次',
  'Shade': '谢德',
  'Juju': '珠珠',
  'Buzz Lightyear': '巴斯光年',
  'Meeple': '谜宝',
  'Ollie': '奥利',
  'Lumi': '露米',
  'Finx': '芬克斯',
  'Jae-Yong': '载勇',
  'Kaze': '风姬',
  'Alli': '阿利',
  'Trunk': '查克',
  'Mina': '蜜娜',
  'Ziggy': '兹奇',
  'Pierce': '皮尔斯',
  'Gigi': '琪琪',
  'Glowy': '格洛薇',
  'Sirius': '西里乌斯',
  'Najia': '娜吉亚',
  'Damian': '达米安',
  'Starr Nova': '丝塔诺娃',
  'Bolt': '博尔特',
};

// BrawlAPI class -> 站点筛选用中文定位
const CLASS_TO_ROLE = {
  'Damage Dealer': '输出',
  'Marksman': '射手',
  'Artillery': '投弹手',
  'Tank': '坦克',
  'Support': '辅助',
  'Controller': '控场',
  'Assassin': '刺客',
  'Unknown': '输出',
};

// API class 不准确时的强制覆盖
/** @type {Record<string, string>} */
const ROLE_OVERRIDES = {
  'Jae-Yong': '辅助',
  'Bolt': '坦克',
};

const knownByApiId = new Map(KNOWN_HEROES.map(k => [k.apiId, k]));

const RARITY_CN = {
  'Common': '普通',
  'Starting Brawler': '初始英雄',
  'Super Rare': '超稀有',
  'Epic': '史诗',
  'Mythic': '神话',
  'Legendary': '传奇',
  'Chromatic': '流彩',
  'Special': '特殊',
  'Exclusive': '专属',
};

function localizeText(text) {
  if (!text) return text;
  // 先替换英雄名，再替换通用游戏术语
  const entries = Object.entries(CN_NAME_MAP).sort((a, b) => b[0].length - a[0].length);
  for (const [en, cn] of entries) {
    text = text.split(en).join(cn);
  }
  return localizeGameTerms(text);
}

function cleanHyperchargeDesc(desc) {
  if (!desc) return '';
  return desc
    .split(/==/)[0]
    .replace(/\[\[File:[^\]]+\]\]/g, '')
    .replace(/\[\[([^\]|]+)\|?[^\]]*\]\]/g, '$1')
    .replace(/\{\{[^}]+\}\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const GAME_TERM_CN = {
  'Star Power': '星辉之力',
  'Hypercharge': '极限充能',
  'Gadget': '随身妙具',
  'Brawler': '乱斗英雄',
  'Super': '超级技能',
  'Gear': '装备',
  'Attack': '普通攻击',
  'Health': '生命值',
  'Damage': '伤害',
  'Shield': '护盾',
  'Speed': '速度',
};

function localizeGameTerms(text) {
  if (!text) return text;
  const entries = Object.entries(GAME_TERM_CN).sort((a, b) => b[0].length - a[0].length);
  for (const [en, cn] of entries) {
    text = text.replace(new RegExp(`\\b${en}\\b`, 'g'), cn);
  }
  return text;
}

const STAT_TERM_CN = {
  'Very Long': '极远',
  'Long': '远',
  'Normal': '普通',
  'Short': '近',
  'Very Short': '极近',
  'Very Fast': '极快',
  'Fast': '快',
  'Slow': '慢',
  'Very Slow': '极慢',
};

function balanceParens(str) {
  let open = 0;
  let out = '';
  for (const ch of String(str)) {
    if (ch === '(') open++;
    else if (ch === ')') open--;
    out += ch;
  }
  while (open > 0) {
    out += ')';
    open--;
  }
  return out;
}

function cnStatText(text) {
  if (!text) return text;
  let s = balanceParens(String(text)).replace(/\bseconds?\b/g, '秒');
  for (const [en, cn] of Object.entries(STAT_TERM_CN)) {
    s = s.replace(new RegExp(`\\b${en}\\b`, 'g'), cn);
  }
  // 兜底：处理中英文混合的 Very/Fast/Slow 截断残留
  s = s.replace(/Very 慢/g, '极慢');
  s = s.replace(/Very 快/g, '极快');
  s = s.replace(/Very Long/g, '极远');
  // 括号内混有其他说明（如 jump; Very 慢）时，翻译其中的英文术语
  s = s.replace(/\(([^)]*Very[^)]*)\)/g, (m, inner) => {
    let out = inner;
    const terms = { 'Very Long': '极远', 'Very Short': '极近', 'Very Fast': '极快', 'Very Slow': '极慢' };
    for (const [en, cn] of Object.entries(terms)) {
      out = out.replace(new RegExp(`\\b${en}\\b`, 'g'), cn);
    }
    return `(${out})`;
  });
  // 单独被截断的 Very
  s = s.replace(/\(Very\)/g, '(极远)');
  return s;
}

function cnCooldown(cd) {
  if (!cd) return cd;
  return cnStatText(cd);
}

async function loadJsonSafe(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function enNameToFolder(enName) {
  // 与 public/gadgets、public/starpowers 等目录命名保持一致
  return enName.replace(/&/g, '').replace(/\s+/g, ' ').trim();
}

function slugify(enName) {
  return enName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function cleanDesc(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/<!card\.[^>]+>/g, 'x')
    .replace(/&nbsp;/g, ' ')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function resolveIcon({ type, enName, id, name, index = 0 }) {
  // type: 'gadget' | 'starpower' | 'pin' | 'buffy'
  const folder = enNameToFolder(enName);
  const publicDir = type === 'starpower' ? 'starpowers' : `${type}s`;
  const dir = path.join(ROOT, 'public', publicDir, folder);
  if (await fileExists(dir)) {
    const files = (await fs.readdir(dir).catch(() => []))
      .filter(f => f.toLowerCase().endsWith('.png'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    if (files.length > 0) {
      // 优先按名称匹配
      const lowerName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const matched = files.find(f => {
        const base = f.toLowerCase().replace(/[^a-z0-9]/g, '');
        return base.includes(lowerName);
      });
      const file = matched || files[index] || files[0];
      return `/${publicDir}/${folder}/${file}`;
    }
  }
  if (type === 'gadget') return `https://cdn.brawlify.com/gadgets/regular/${id}.png`;
  if (type === 'starpower') return `https://cdn.brawlify.com/star-powers/regular/${id}.png`;
  return '';
}

async function resolveFolderImages({ type, enName, limit = 0 }) {
  const folder = enNameToFolder(enName);
  const publicDir = `${type}s`;
  const dir = path.join(ROOT, 'public', publicDir, folder);
  if (!(await fileExists(dir))) return [];
  const files = (await fs.readdir(dir).catch(() => []))
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const picked = limit > 0 ? files.slice(0, limit) : files;
  return picked.map(f => `/${publicDir}/${folder}/${f}`);
}

const BUFFY_TYPE_MAP = {
  'gadget': { name: '妙具芭菲', desc: '强化该英雄的随身妙具效果。' },
  'star': { name: '星辉芭菲', desc: '强化该英雄的星辉之力效果。' },
  'hc': { name: '极限充能芭菲', desc: '强化该英雄的极限充能效果。' },
  'bling': { name: '闪耀芭菲', desc: '芭菲挂件展示效果。' },
};

async function resolveBuffies(enName) {
  const folder = enNameToFolder(enName);
  const dir = path.join(ROOT, 'public', 'buffies', folder);
  if (!(await fileExists(dir))) return [];
  const files = (await fs.readdir(dir).catch(() => []))
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const buffies = [];
  for (const file of files) {
    const lower = file.toLowerCase();
    // 提取后缀：emoji_{hero}_buffy_<type>.png
    const match = lower.match(/_buffy_([a-z0-9]+)\.png$/);
    const type = match ? match[1] : 'bling';
    const meta = BUFFY_TYPE_MAP[type] || BUFFY_TYPE_MAP['bling'];
    buffies.push({
      name: meta.name,
      desc: meta.desc,
      icon: `/buffies/${folder}/${file}`,
    });
  }
  return buffies;
}

const GEARS = [
  { key: 'damage', name: '伤害装备', desc: '英雄生命值低于 50% 时，造成的伤害提升 15%。' },
  { key: 'heal', name: '恢复装备', desc: '英雄的生命恢复速度提升 50%。' },
  { key: 'reload', name: '装弹装备', desc: '弹药槽为空时，装弹速度提升 15%。' },
  { key: 'shield', name: '护盾装备', desc: '英雄生命值低于 50% 时，获得 15% 的减伤护盾。' },
  { key: 'speed', name: '速度装备', desc: '在草丛中移动速度提升 20%。' },
  { key: 'vision', name: '视野装备', desc: '在草丛中的视野范围提升 75%。' },
];

function resolveGears() {
  return GEARS.map(g => ({
    name: g.name,
    desc: g.desc,
    icon: `/gears/gear_superrare_${g.key}.png`,
  }));
}

async function resolveHypercharge(enName, cnName) {
  const folder = enNameToFolder(enName);
  const dir = path.join(ROOT, 'public', 'hypercharges', folder);
  if (!(await fileExists(dir))) return null;
  const files = (await fs.readdir(dir).catch(() => []))
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  // 优先选择包含 hypercharge 但排除 button/spray 的图标
  const preferred = files.find(f => {
    const lower = f.toLowerCase();
    return lower.includes('hypercharge') && !lower.includes('button') && !lower.includes('spray');
  });
  const file = preferred || files[0];
  if (!file) return null;
  return {
    name: `${cnName}·极限充能`,
    desc: '激活后强化超级技能效果，让英雄在关键时刻爆发出更强战力。',
    icon: `/hypercharges/${folder}/${file}`,
  };
}

async function resolveHeroImage(localId, apiId) {
  const spriteDir = path.join(ROOT, 'public', 'Usedinheroes', 'Sprite');
  for (const ext of ['webp', 'png']) {
    const p = path.join(spriteDir, `${localId}.${ext}`);
    if (await fileExists(p)) return `/Usedinheroes/Sprite/${localId}.${ext}`;
  }
  return `https://cdn.brawlify.com/brawlers/model/${apiId}.png`;
}

async function main() {
  console.log('Fetching brawlers from BrawlAPI...');
  let list = [];
  try {
    const res = await fetch('https://api.brawlapi.com/v1/brawlers');
    if (!res.ok) throw new Error(`BrawlAPI error: ${res.status}`);
    list = (await res.json()).list;
  } catch (err) {
    console.warn(`BrawlAPI fetch failed: ${err.message}, falling back to brawlers_api.json`);
    const raw = await fs.readFile(path.join(ROOT, 'brawlers_api.json'), 'utf-8');
    list = JSON.parse(raw).list;
  }

  // 读取旧 36 位英雄的中文数据（按 apiId 索引，方便重新排序）
  let oldHeroes = {};
  const oldJsonPath = path.join(ROOT, 'old_heroes.json');
  try {
    const raw = await fs.readFile(oldJsonPath, 'utf-8');
    const parsed = JSON.parse(raw);
    // old_heroes 以 localId 为 key，需转换为 apiId key
    const oldByApiId = new Map();
    for (const [localId, data] of Object.entries(parsed)) {
      const known = KNOWN_HEROES.find(k => k.localId === localId);
      if (known) oldByApiId.set(known.apiId, data);
    }
    oldHeroes = Object.fromEntries(oldByApiId);
    console.log(`Loaded ${oldByApiId.size} old heroes by apiId`);
  } catch {
    console.warn('old_heroes.json not found or invalid, skipping merge');
  }

  // 加载机器翻译映射（旧数据优先）
  const gadgetCn = await loadJsonSafe(path.join(ROOT, 'lib', 'data', 'gadget_cn.json'));
  const starPowerCn = await loadJsonSafe(path.join(ROOT, 'lib', 'data', 'starpower_cn.json'));
  const heroDescCn = await loadJsonSafe(path.join(ROOT, 'lib', 'data', 'heroDesc_cn.json'));
  const hyperchargeDescCn = await loadJsonSafe(path.join(ROOT, 'lib', 'data', 'hyperchargeDesc_cn.json'));
  console.log(`Loaded gadget translations: ${Object.keys(gadgetCn).length}, star power translations: ${Object.keys(starPowerCn).length}`);
  console.log(`Loaded desc translations: ${Object.keys(heroDescCn).length}, hypercharge translations: ${Object.keys(hyperchargeDescCn).length}`);

  // 加载 Fandom 本地缓存数据
  const fandomData = await loadJsonSafe(path.join(ROOT, 'lib', 'data', 'fandomStats.json'));
  const fandomStats = fandomData.stats || {};
  console.log(`Loaded Fandom stats: ${Object.keys(fandomStats).length} heroes`);

  // 按 API ID 升序排列，新英雄排在 36 位之后
  const sorted = [...list].sort((a, b) => a.id - b.id);

  let heroes = [];
  const usedLocalIds = new Set();
  let nextLocalId = 37;

  for (const b of sorted) {
    const known = knownByApiId.get(b.id);
    let localId;
    if (known) {
      localId = known.localId;
      usedLocalIds.add(localId);
    } else {
      while (usedLocalIds.has(String(nextLocalId))) nextLocalId++;
      localId = String(nextLocalId++);
      usedLocalIds.add(localId);
    }
    const enName = b.name;
    const cnName = known ? known.cnName : (CN_NAME_MAP[enName] || enName);
    const fandom = fandomStats[enName] || {};
    const old = oldHeroes[b.id];

    // 过滤掉混入其他英雄的妙具（如 Bolt 被错误附加了 Brock 的妙具）
    if (enName === 'Bolt' && b.gadgets) {
      b.gadgets = b.gadgets.filter(g => !['Rocket Laces', 'Rocket Fuel'].includes(g.name));
    }
    const role = known?.role || ROLE_OVERRIDES[enName] || CLASS_TO_ROLE[b.class?.name] || '输出';

    // 头像：优先本地 apiId，最后 CDN
    let avatar = `/HeroAvatars/${b.id}.png`;
    if (!(await fileExists(path.join(ROOT, 'public', 'HeroAvatars', `${b.id}.png`)))) {
      avatar = `https://cdn.brawlify.com/brawlers/borders/${b.id}.png`;
    }

    // 星辉：旧数据中文 > 机器翻译 > 英文原文，用 Fandom 数值填充 x 占位符
    const starPowers = [];
    for (let i = 0; i < (b.starPowers || []).length; i++) {
      const sp = b.starPowers[i];
      const oldSp = old?.skills?.[i + 2];
      const cnSp = starPowerCn[sp.name];
      const spValues = getAbilityValues(fandom, sp.name);
      let desc = oldSp?.desc || cleanDesc(cnSp?.cnDesc) || cleanDesc(sp.descriptionHtml || sp.description);
      desc = localizeText(desc);
      if (spValues.length) {
        desc = fillPlaceholders(desc, spValues);
      }
      // 硬编码：Fandom 未提供但已知的关键数值
      if (enName === 'Bolt' && sp.name === 'Unstoppaball') {
        desc = desc.replace(/x%/g, '15%');
      }
      starPowers.push({
        id: sp.id,
        name: oldSp?.name || cnSp?.cnName || sp.name,
        desc,
        icon: await resolveIcon({ type: 'starpower', enName, id: sp.id, name: sp.name, index: i }),
      });
    }

    // 妙具：机器翻译 > 英文原文，用 Fandom 数值填充 x 占位符，并追加冷却时间
    const gadgets = [];
    for (let i = 0; i < (b.gadgets || []).length; i++) {
      const g = b.gadgets[i];
      const cnG = gadgetCn[g.name];
      const fandomCd = findFandomEntry(fandom.gadgetCooldowns, g.name) || fandom.gadgetCooldowns?.[g.name];
      const gadgetValues = getAbilityValues(fandom, g.name);
      let desc = cleanDesc(cnG?.cnDesc) || cleanDesc(g.descriptionHtml || g.description);
      desc = localizeText(desc);
      if (gadgetValues.length) {
        desc = fillPlaceholders(desc, gadgetValues);
      }
      if (fandomCd) {
        desc = `${desc}（冷却：${cnCooldown(fandomCd)}）`;
      }
      gadgets.push({
        id: g.id,
        name: cnG?.cnName || g.name,
        desc,
        icon: await resolveIcon({ type: 'gadget', enName, id: g.id, name: g.name, index: i }),
      });
    }

    // 表情 / 芭菲 / 装备 / 极限充能
    const pins = await resolveFolderImages({ type: 'pin', enName, limit: 12 });
    const buffies = await resolveBuffies(enName);
    const gears = resolveGears();
    let hypercharge = await resolveHypercharge(enName, cnName);
    if (fandom.hypercharge) {
      const fandomHc = fandom.hypercharge;
      if (!hypercharge) {
        hypercharge = {
          name: `${cnName}·极限充能`,
          desc: '',
          icon: '',
        };
      }
      const cleanedHc = cleanHyperchargeDesc(fandomHc.desc || hypercharge.desc);
      hypercharge.desc = localizeText(cleanHyperchargeDesc(hyperchargeDescCn[enName]) || cleanedHc);
      if (fandomHc.multiplier) {
        hypercharge.desc = `倍率：${fandomHc.multiplier}。${hypercharge.desc}`;
      }
    }

    heroes.push({
      id: localId,
      apiId: b.id,
      name: cnName,
      enName,
      slug: slugify(enName),
      role,
      class: b.class?.name || 'Unknown',
      rarity: {
        name: RARITY_CN[b.rarity?.name] || b.rarity?.name || 'Unknown',
        color: b.rarity?.color || '#ffffff',
      },
      desc: old?.desc || localizeText(cleanDesc(heroDescCn[enName] || b.descriptionHtml || b.description)),
      story: old?.story || '',
      avatar,
      image: await resolveHeroImage(localId, b.id),
      modelImage: `https://cdn.brawlify.com/brawlers/model/${b.id}.png`,
      bgImage: '/Usedinheroes/bg/3.png',
      stats: {
        health: fandom.health || 0,
        damage: fandom.damage || 0,
        range: cnStatText(fandom.range) || '-',
        reload: cnStatText(fandom.reload) || '-',
        speed: cnStatText(fandom.speed) || '-',
      },
      attack: resolveAttackDesc(enName, fandom, old?.skills?.[0]),
      super: resolveSuperDesc(enName, fandom, old?.skills?.[1]),
      starPowers,
      gadgets,
      gears,
      hypercharge,
      skins: [],
      pins,
      buffies,
    });
  }

  // 按 localId 排序
  heroes.sort((a, b) => Number(a.id) - Number(b.id));

  // 过滤掉不希望在站点展示的英雄（如联动/特殊英雄）
  heroes = heroes.filter(h => h.enName !== 'Glowy' && h.name !== '格洛薇');

  // 输出 TS 文件
  const outputPath = path.join(ROOT, 'lib', 'data', 'heroDetails.ts');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const ts = `// 由 scripts/fetch-heroes.mjs 自动生成，请勿手动编辑
export interface HeroRarity {
  name: string;
  color: string;
}

export interface HeroStats {
  health: number;
  damage: number;
  range: string;
  reload: string;
  speed: string;
}

export interface HeroSkill {
  id?: number;
  name: string;
  desc: string;
  icon: string;
}

export interface HeroSkin {
  name: string;
  image: string;
}

export interface HeroDetailV2 {
  id: string;
  apiId: number;
  slug: string;
  name: string;
  enName: string;
  role: string;
  class: string;
  rarity: HeroRarity;
  desc: string;
  story: string;
  avatar: string;
  image: string;
  modelImage: string;
  bgImage: string;
  stats: HeroStats;
  attack: HeroSkill;
  super: HeroSkill;
  starPowers: HeroSkill[];
  gadgets: HeroSkill[];
  gears: HeroSkill[];
  hypercharge: HeroSkill | null;
  skins: HeroSkin[];
  pins: string[];
  buffies: HeroSkill[];
}

export const heroDetailsData: Record<string, HeroDetailV2> = {
${heroes.map(h => `  "${h.id}": ${JSON.stringify(h, null, 2).replace(/\n/g, '\n  ')},`).join('\n')}
};

export const heroListV2 = Object.values(heroDetailsData).map(h => ({
  id: h.id,
  name: h.name,
  slug: h.slug,
  enName: h.enName,
  apiId: h.apiId,
  image: h.avatar,
  role: h.role,
}));
`;

  await fs.writeFile(outputPath, ts, 'utf-8');
  console.log(`Wrote ${heroes.length} heroes to ${outputPath}`);
}

function normalizeName(name) {
  return String(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function findFandomEntry(map, name) {
  if (!map) return undefined;
  const key = Object.keys(map).find(k => normalizeName(k) === normalizeName(name));
  return key ? map[key] : undefined;
}

function getAbilityValues(fandom, name) {
  // 优先使用 infobox 中的 gadget/starPower 数值
  const gadgetEntry = findFandomEntry(fandom.gadgetValues, name);
  if (gadgetEntry?.values?.length) return gadgetEntry.values;
  const spEntry = findFandomEntry(fandom.starPowerValues, name);
  if (spEntry?.values?.length) return spEntry.values;
  // fallback：从 Quote 描述文本中提取的数字
  const nums = findFandomEntry(fandom.abilityDescNumbers, name);
  if (Array.isArray(nums) && nums.length) return nums.map(v => ({ value: v, label: '' }));
  return [];
}

function fillPlaceholders(desc, values) {
  if (!desc || !values?.length) return desc;
  const items = values.map(v => (typeof v === 'string' ? { value: v, label: '' } : v));
  let remaining = items.slice();
  return desc.replace(/x(%?)/g, (match, suffix) => {
    if (!remaining.length) return match;
    let idx = -1;
    if (suffix === '%') {
      idx = remaining.findIndex(v => String(v.value).endsWith('%'));
    } else {
      idx = remaining.findIndex(v => !String(v.value).endsWith('%'));
    }
    if (idx === -1) idx = 0;
    const item = remaining[idx];
    remaining.splice(idx, 1);
    let replacement = String(item.value);
    if (suffix === '%' && !replacement.endsWith('%')) replacement += '%';
    return replacement;
  });
}

function resolveAttackDesc(enName, fandom, oldSkill) {
  const fallback = { name: '普通攻击', desc: '', icon: '/Usedinheroes/skills/skill0.png' };
  if (oldSkill?.name) {
    fallback.name = oldSkill.name;
    fallback.icon = oldSkill.icon || fallback.icon;
    if (oldSkill.desc) fallback.desc = oldSkill.desc;
  }
  if (enName === 'Bolt') {
    const min = fandom.attackMin ?? (fandom.damage ? Math.round(fandom.damage * 0.5) : 540);
    const max = fandom.attackMax ?? (fandom.damage || 900);
    fallback.name = '滚动撞击';
    fallback.desc = `博尔特向前滚动撞击敌人，移动速度越快造成的伤害越高，最低 ${min}，最高 ${max}。消耗弹药可让本次伤害翻倍。`;
  }
  return fallback;
}

function resolveSuperDesc(enName, fandom, oldSkill) {
  const fallback = { name: '超级技能', desc: '', icon: '/Usedinheroes/skills/skill01.png' };
  if (oldSkill?.name) {
    fallback.name = oldSkill.name;
    fallback.icon = oldSkill.icon || fallback.icon;
    if (oldSkill.desc) fallback.desc = oldSkill.desc;
  }
  if (enName === 'Bolt') {
    const dps = fandom.superDamage || fandom.super || 550;
    fallback.name = '超速过载';
    fallback.desc = `博尔特进入超速状态，获得移速提升与减伤护盾，并在身后留下闪电轨迹，对触碰的敌人每秒造成 ${dps} 伤害。`;
  }
  return fallback;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});