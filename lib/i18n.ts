// lib/i18n.ts
// 英雄详情页英文 → 中文映射（渐进式补充）

export const HERO_EN_TO_CN: Record<string, string> = {
  // 稀有度
  'Rare': '稀有',
  'Ultra Legendary': '超传奇',

  // 职业（当前未显示，预留）
  'Damage Dealer': '输出',
  'Tank': '坦克',
  'Support': '支援',
  'Controller': '控场',
  'Assassin': '刺客',
  'Marksman': '射手',
  'Artillery': '炮兵',
  'Unknown': '未知',

  // 射程/装弹速度等级
  'Very Long': '极远',
  'Long': '远',
  'Normal': '普通',
  'Short': '近',
  'Very Short': '极近',
  'Very Fast': '极快',
  'Fast': '快',
  'Slow': '慢',
  'Very Slow': '极慢',
  'Very 慢': '极慢',
  'Very 快': '极快',
  'close range': '近身',
  'close': '近身',
  'throw': '投掷',
  'kick': '踢击',
  'min range': '最小射程',
  'min. range': '最小射程',
  'middle': '中段',
  'first sequence': '第一段',
  'jar': '罐子',
  'full ammo bar': '满弹药条',
  'max': '上限',

  // 通用游戏术语
  'Heal': '治疗量',
  'Shield': '护盾',
  'Speed': '速度',
  'Damage': '伤害',
  'Range': '射程',
  'Super Charge': '超级技能充能',
  'dash': '冲刺',
  'jump': '跳跃',
  'attached': '附着',
  'split': '分裂',

  // 装备/星辉/妙具前缀
  'with Reload Gear': '（装备：装弹速度）',
  'with Rolling Reload': '（星辉：滚动装弹）',
  'with Automa-Tick Reload': '（星辉：自动装弹）',
  'with Candy Beans': '（妙具：糖果豆）',
  "with Scorchin' Siphon": '（星辉：灼热虹吸）',
  'with Rule Bending': '（星辉：规则弯曲）',
  'with Berserker': '（星辉：狂战士）',
  'with Knuckle Busters': '（星辉：指虎）',
  'with full Rage and Mad As Heck': '（满怒气+狂怒）',
  "with Run n' Gun": '（星辉：边跑边打）',
  'with Toolbox': '（星辉：工具箱）',
  'with Super': '（超级技能）',
  'with Hypercharge': '（极限充能）',
  'with Sugar Rush': '（星辉：糖 rush）',
  'with You Better Run, You Better Take Cover': '（星辉：你最好跑）',
  'with Floor is Fine': '（星辉：地板不错）',

  // 状态描述
  'while Voodoo Chile is active': '（巫毒生效时）',
  'while Hyper Buffie is active': '（Hyper Buffie 生效时）',
  'while Mansions of Meeple is active': '（Mansions of Meeple 生效时）',

  // 特殊机制
  'Driller': '钻机',
  'Mecha': '机甲',
  'Clyde': '克莱德',
  'Bonnie': '邦妮',
};

/**
 * 对英雄文本做英文 → 中文替换。
 * 按 key 长度降序，避免短词先替换导致长词匹配失败。
 */
export function localizeHeroText(text: string | number | undefined | null): string {
  if (text === undefined || text === null) return '-';
  let result = String(text);

  const entries = Object.entries(HERO_EN_TO_CN).sort((a, b) => b[0].length - a[0].length);
  for (const [en, cn] of entries) {
    // 对特殊字符做转义，避免正则报错
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escaped, 'g'), cn);
  }

  return result;
}

/**
 * 清理数据里残留的转义字符（如 \n \t）以及无意义空白。
 */
export function cleanHeroText(text: string | number | undefined | null): string {
  if (text === undefined || text === null) return '-';
  return String(text)
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
