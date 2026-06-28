'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { tournaments, type TournamentCategory, type TournamentRegion, type EliminationRound } from '@/lib/data/esports';

type CategoryFilter = TournamentCategory | '全部';
type RegionFilter = TournamentRegion | '全部';
type SubFilter = '全部' | '小组赛' | '淘汰赛';
type RoundFilter = EliminationRound | '全部';
type MonthFilter = string | '全部';
type YearFilter = '全部' | '2025' | '2026';

function TeamLogo({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  if (!src || error) {
    return <div className={`rounded-xl bg-white/10 ${className || ''}`} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-xl object-contain p-0.5 bg-white/[0.08] border border-white/[0.1] brightness-150 contrast-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.15)] ${className || ''}`}
      onError={() => setError(true)}
    />
  );
}

export default function EventsPage() {
  const [category, setCategory] = useState<CategoryFilter>('全部');
  const [region, setRegion] = useState<RegionFilter>('全部');
  const [sub, setSub] = useState<SubFilter>('全部');
  const [round, setRound] = useState<RoundFilter>('全部');
  const [month, setMonth] = useState<MonthFilter>('全部');
  const [year, setYear] = useState<YearFilter>('全部');

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: '全部', label: '全部' },
    { key: 'LCQ', label: 'LCQ' },
    { key: '全球总决赛', label: '全球总决赛' },
    { key: 'brawlcup', label: 'brawlcup' },
    { key: '月赛', label: '月赛' },
  ];

  const regions: RegionFilter[] = ['全部', '欧洲', '东亚', '大陆', '北美', '南美'];
  const subs: SubFilter[] = ['全部', '小组赛', '淘汰赛'];
  const rounds: RoundFilter[] = ['全部', '八强赛', '半决赛', '总决赛'];
  const months: MonthFilter[] = ['全部', '2025-05', '2025-10', '2025-11', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08'];
  const years: YearFilter[] = ['全部', '2025', '2026'];

  const filtered = useMemo(() => {
    return tournaments.filter(t => {
      if (category !== '全部' && t.category !== category) return false;
      if (region !== '全部' && t.region !== region) return false;
      if (sub !== '全部' && t.subCategory !== sub) return false;
      if (round !== '全部' && t.eliminationRound !== round) return false;
      if (month !== '全部' && !t.date.startsWith(month)) return false;
      if (year !== '全部' && !t.date.startsWith(year)) return false;
      return true;
    });
  }, [category, region, sub, round, month, year]);

  const showRegion = category === '月赛' || category === '全部';
  const showSub = category !== '全部';
  const showRound = sub === '淘汰赛' || (sub === '全部' && category !== '全部');
  const showMonth = category === '月赛' || category === '全部';
  const showYear = category === '全部' || category === 'LCQ' || category === '全球总决赛' || category === 'brawlcup';

  const getCategoryColor = (c: string) => {
    const map: Record<string, string> = {
      'LCQ': 'bg-orange-500',
      '全球总决赛': 'bg-red-500',
      'brawlcup': 'bg-purple-500',
      '月赛': 'bg-blue-500',
    };
    return map[c] || 'bg-gray-500';
  };

  return (
    <main className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* 与主页各功能分区一致的视差/全覆盖背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/Usedinheroes/bg/3.png)' }}
      />
      <div className="absolute inset-0 bg-black/35 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-[#FFD500] mb-8 drop-shadow-lg">赛事中心</h1>
        
        {/* 子分类入口 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {[
            { href: '/events/players', label: '选手档案', icon: '👤' },
            { href: '/events/teams', label: '战队档案', icon: '🛡️' },
            { href: '/events/stats', label: '数据洞察', icon: '📊' },
            { href: '/events/schedule', label: '赛程日历', icon: '📅' },
            { href: '/events/my', label: '我的赛事', icon: '🏆' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-[#FFD500]/50 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="font-black text-white group-hover:text-[#FFD500] transition-colors">{item.label}</div>
            </Link>
          ))}
        </div>

        {/* 筛选栏 */}
        <div className="space-y-3 mb-8">
          {/* 主分类 */}
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => { setCategory(c.key); setSub('全部'); setRound('全部'); setMonth('全部'); setYear('全部'); }}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-300 ${
                  category === c.key
                    ? 'bg-[#FFD500] text-[#1A3A8A] shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* 年份筛选（LCQ/全球总决赛/brawlcup/全部时显示） */}
          {showYear && (
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-bold text-white/50 py-2">年份:</span>
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    year === y
                      ? 'bg-white/25 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          )}

          {/* 月份筛选（月赛/全部时显示） */}
          {showMonth && (
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-bold text-white/50 py-2">月份:</span>
              {months.map(m => (
                <button
                  key={m}
                  onClick={() => setMonth(m)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    month === m
                      ? 'bg-white/25 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}

          {/* 赛区筛选（月赛/全部时显示） */}
          {showRegion && (
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-bold text-white/50 py-2">赛区:</span>
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    region === r
                      ? 'bg-white/25 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* 小组赛/淘汰赛 */}
          {showSub && (
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-bold text-white/50 py-2">阶段:</span>
              {subs.map(s => (
                <button
                  key={s}
                  onClick={() => { setSub(s); setRound('全部'); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    sub === s
                      ? 'bg-white/25 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* 淘汰赛轮次 */}
          {showRound && (
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-bold text-white/50 py-2">轮次:</span>
              {rounds.map(r => (
                <button
                  key={r}
                  onClick={() => setRound(r)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    round === r
                      ? 'bg-white/25 text-white border border-white/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(t => (
            <Link
              key={t.id}
              href={`/events/${t.id}`}
              className="group relative bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#FFD500]/50 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,213,0,0.15)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCategoryColor(t.category)}`}>
                    {t.category}
                  </span>
                  {t.region && (
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/70">
                      {t.region}
                    </span>
                  )}
                </div>
                <span className="text-xs text-white/50 font-mono">{t.version}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-white/60">
                  {t.subCategory}
                </span>
                {t.eliminationRound && (
                  <span className="px-2 py-0.5 rounded bg-[#FFD500]/15 text-[10px] font-bold text-[#FFD500]">
                    {t.eliminationRound}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#FFD500] transition-colors line-clamp-1">
                {t.name}
              </h3>
              <p className="text-sm text-white/60 mb-4">{t.date} · {t.format}</p>
              
              <div className="flex items-center justify-between bg-black/20 rounded-xl p-3">
                <div className="flex flex-col items-center">
                  <TeamLogo src={t.teamA.logo} alt={t.teamA.name} className="w-8 h-8 mb-1" />
                  <span className="text-[10px] font-bold text-white/80 truncate max-w-[60px]">{t.teamA.name}</span>
                </div>
                <div className="text-xl font-black text-[#FFD500]">{t.score}</div>
                <div className="flex flex-col items-center">
                  <TeamLogo src={t.teamB.logo} alt={t.teamB.name} className="w-8 h-8 mb-1" />
                  <span className="text-[10px] font-bold text-white/80 truncate max-w-[60px]">{t.teamB.name}</span>
                </div>
              </div>
              
              {t.winner && (
                <div className="mt-3 text-xs font-bold text-[#FFD500] text-center">
                  胜者: {t.winner === 'A' ? t.teamA.name : t.teamB.name}
                </div>
              )}
            </Link>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/50 font-bold">
            暂无符合条件的赛事
          </div>
        )}
      </div>
    </main>
  );
}