'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { HeroDetailV2, HeroSkill } from '@/lib/data';
import { localizeHeroText, cleanHeroText } from '@/lib/i18n';

interface StatusSectionProps {
  hero: HeroDetailV2;
}

function SkillCard({ title, skill }: { title: string; skill: HeroSkill }) {
  return (
    <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-5 border border-white/10 shadow-lg flex gap-4 hover:from-white/20 hover:to-white/10 transition-all">
      <Image
        src={skill.icon}
        alt={skill.name}
        width={80}
        height={80}
        className="!w-20 !h-20 flex-shrink-0 object-contain rounded-md bg-black/20"
        unoptimized
      />
      <div>
        <h4 className="text-lg font-black text-[#FFD500] mb-1">{title}</h4>
        <h5 className="text-xl font-black mb-2">{localizeHeroText(skill.name)}</h5>
        <p className="text-white/85 text-sm leading-relaxed">{cleanHeroText(localizeHeroText(skill.desc)) || '暂无描述'}</p>
      </div>
    </div>
  );
}

const MAX_LEVEL = 11;

function scaleFromMax(max: number, level: number) {
  if (!max) return 0;
  // Fandom 表格中 11 级数值 = 1 级数值 × 2，每级固定 +10%
  const base = max / 2;
  return Math.round(base * (1 + 0.1 * (level - 1)));
}

export default function StatusSection({ hero }: StatusSectionProps) {
  const [level, setLevel] = useState(MAX_LEVEL);
  const scaledHealth = scaleFromMax(hero.stats.health, level);
  const scaledDamage = scaleFromMax(hero.stats.damage, level);
  const formatStat = (value: string | number) => {
    if (typeof value !== 'string') return value;
    return cleanHeroText(localizeHeroText(value))
      // 只在“非括号文本 + 空格 + 左括号”处换行，连续左括号不额外分隔
      .replace(/\s+([（(])/g, '\n$1')
      // 右括号后跟空格与下一个数字/左括号时换行，连续右括号不额外分隔
      .replace(/([)）])\s+(?=[\d（(])/g, '$1\n');
  };

  const stats = [
    { key: 'health', label: '生命值', value: scaledHealth || '-' },
    { key: 'damage', label: '伤害', value: scaledDamage || '-' },
    { key: 'range', label: '射程', value: formatStat(hero.stats.range) },
    { key: 'reload', label: '装弹速度', value: formatStat(hero.stats.reload) },
    { key: 'speed', label: '移动速度', value: formatStat(hero.stats.speed) },
  ];

  return (
    <div className="space-y-6">
      {/* 等级选择器 */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-white/90">英雄等级</span>
        <div className="flex items-center gap-2 bg-black/20 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setLevel(v => Math.max(1, v - 1))}
            className="w-8 h-8 rounded bg-white/10 hover:bg-[#FFD500] hover:text-black font-black transition-colors"
          >
            -
          </button>
          <span className="w-10 text-center font-black">{level}</span>
          <button
            type="button"
            onClick={() => setLevel(v => Math.min(MAX_LEVEL, v + 1))}
            className="w-8 h-8 rounded bg-white/10 hover:bg-[#FFD500] hover:text-black font-black transition-colors"
          >
            +
          </button>
        </div>
        <span className="text-sm text-white/60">等级 {level} / {MAX_LEVEL}</span>
      </div>

      {/* 属性面板 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {stats.map((s) => (
          <div
            key={s.key}
            className="bg-white/10 rounded-xl p-4 border border-white/10 text-center hover:bg-white/15 transition-all"
          >
            <p className="text-white/70 text-sm mb-1">{s.label}</p>
            <p className="text-2xl md:text-3xl font-black text-[#FFD500] whitespace-pre-line">{s.value}</p>
          </div>
        ))}
      </div>

      {/* 普攻 & 大招 */}
      <div className="grid md:grid-cols-2 gap-4">
        <SkillCard title="普通攻击" skill={hero.attack} />
        <SkillCard title="超级技能" skill={hero.super} />
      </div>
    </div>
  );
}
