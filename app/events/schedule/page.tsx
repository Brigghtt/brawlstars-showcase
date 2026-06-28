'use client';

import { schedules, teams, type TournamentCategory, type TournamentRegion } from '@/lib/data/esports';
import { useState, useMemo, useEffect } from 'react';
import Breadcrumb from '@/components/esports/Breadcrumb';
import PageHeader from '@/components/esports/PageHeader';
import FilterPill from '@/components/esports/FilterPill';
import EventFavoriteButton from '@/components/esports/EventFavoriteButton';

type StatusFilter = 'all' | 'upcoming' | 'ended';
type CategoryFilter = TournamentCategory | '全部';
type RegionFilter = TournamentRegion | '全部';
type YearFilter = '全部' | '2025' | '2026';

const MONTHS = [
  '2025-05', '2025-10', '2025-11', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08',
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  'LCQ':       { bg: 'bg-orange-500/20',  text: 'text-orange-300',  border: 'border-orange-500/30', glow: 'shadow-orange-500/10' },
  '全球总决赛': { bg: 'bg-red-500/20',     text: 'text-red-300',     border: 'border-red-500/30',    glow: 'shadow-red-500/10' },
  'brawlcup':  { bg: 'bg-purple-500/20',  text: 'text-purple-300',  border: 'border-purple-500/30', glow: 'shadow-purple-500/10' },
  '月赛':       { bg: 'bg-cyan-500/20',    text: 'text-cyan-300',    border: 'border-cyan-500/30',   glow: 'shadow-cyan-500/10' },
};

function StatusBadge({ status }: { status: string }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500 text-white text-[11px] font-black animate-live-pulse shadow-lg shadow-red-500/30 ring-1 ring-red-400/50">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        LIVE
      </span>
    );
  }
  if (status === 'upcoming') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold backdrop-blur-sm">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        即将开始
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.1] text-white/45 text-[11px] font-bold">
      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      已结束
    </span>
  );
}

export default function SchedulePage() {
  const [status, setStatus] = useState<StatusFilter>('all');
  const [category, setCategory] = useState<CategoryFilter>('全部');
  const [region, setRegion] = useState<RegionFilter>('全部');
  const [month, setMonth] = useState<string>('全部');
  const [year, setYear] = useState<YearFilter>('全部');
  const [followedTeams, setFollowedTeams] = useState<string[]>([]);
  const [showOnlyFollowed, setShowOnlyFollowed] = useState(false);

  useEffect(() => {
    fetch('/api/user/follows/teams')
      .then(res => res.json())
      .then(data => setFollowedTeams(data.follows || []))
      .catch(() => {});
  }, []);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: '全部', label: '全部' },
    { key: 'LCQ', label: 'LCQ' },
    { key: '全球总决赛', label: '全球总决赛' },
    { key: 'brawlcup', label: 'brawlcup' },
    { key: '月赛', label: '月赛' },
  ];

  const filtered = useMemo(() => {
    return schedules.filter(s => {
      if (status !== 'all' && s.status !== status) return false;
      if (category !== '全部' && s.category !== category) return false;
      if (region !== '全部' && s.region !== region) return false;
      if (month !== '全部' && s.month !== month) return false;
      if (year !== '全部' && !s.month.startsWith(year)) return false;
      if (showOnlyFollowed) {
        const teamIds = new Set(teams.filter(t => followedTeams.includes(t.id)).map(t => t.name));
        if (!teamIds.has(s.teamA) && !teamIds.has(s.teamB)) return false;
      }
      return true;
    });
  }, [status, category, region, month, year, showOnlyFollowed, followedTeams]);

  return (
    <main className="min-h-screen pt-28 pb-24">
      {/* 背景 — 与首页同款模糊海报图 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image3.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: '赛程日历' }]} />
        <PageHeader title="赛程日历" subtitle="赛事直播与历史赛程回看" icon="📅" />

        {/* 筛选面板 — 高对比度毛玻璃 */}
        <div className="relative overflow-hidden rounded-2xl bg-black/35 backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-5 md:p-6 mb-10 space-y-5">
          {/* 面板顶部辉光 */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD500]/40 to-transparent" />

          {/* 状态筛选 */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-black text-[#FFD500]/60 uppercase tracking-[0.15em] min-w-[3em]">状态</span>
            {[
              { key: 'all', label: '全部赛事' },
              { key: 'upcoming', label: '即将开始' },
              { key: 'ended', label: '已结束' },
            ].map(f => (
              <FilterPill
                key={f.key}
                label={f.label}
                active={status === f.key}
                onClick={() => setStatus(f.key as StatusFilter)}
              />
            ))}
            <button
              onClick={() => setShowOnlyFollowed(v => !v)}
              className={`ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                showOnlyFollowed
                  ? 'bg-[#FFD500] text-[#1A3A8A] shadow-lg shadow-[#FFD500]/20'
                  : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.12] hover:text-white/80 border border-white/[0.08]'
              }`}
            >
              {showOnlyFollowed ? '★ 我的关注' : '☆ 我的关注'}
            </button>
          </div>

          {/* 赛事类型 */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-black text-[#FFD500]/60 uppercase tracking-[0.15em] min-w-[3em]">类型</span>
            {categories.map(c => (
              <FilterPill
                key={c.key}
                label={c.label}
                active={category === c.key}
                onClick={() => { setCategory(c.key); setMonth('全部'); setYear('全部'); }}
                size="sm"
              />
            ))}
          </div>

          {/* 赛区选择 */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-black text-[#FFD500]/60 uppercase tracking-[0.15em] min-w-[3em]">赛区</span>
            {(['全部', '欧洲', '东亚', '大陆', '北美', '南美'] as RegionFilter[]).map(r => (
              <FilterPill
                key={r}
                label={r}
                active={region === r}
                onClick={() => setRegion(r)}
                size="sm"
              />
            ))}
          </div>

          {/* 年份选择 */}
          {(category === '全部' || category === 'LCQ' || category === '全球总决赛' || category === 'brawlcup') && (
            <div className="pt-1 border-t border-white/[0.06]">
              <span className="text-[10px] font-black text-[#FFD500]/60 uppercase tracking-[0.15em] mb-2.5 block">年份</span>
              <div className="flex flex-wrap gap-1.5">
                {(['全部', '2025', '2026'] as YearFilter[]).map(y => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 ${
                      year === y
                        ? 'bg-[#FFD500] text-[#1A3A8A] shadow-lg shadow-[#FFD500]/20 scale-105'
                        : 'bg-white/[0.06] text-white/45 hover:bg-white/[0.12] hover:text-white/75 border border-white/[0.06] hover:border-white/[0.15]'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 月份选择 */}
          <div className="pt-1 border-t border-white/[0.06]">
            <span className="text-[10px] font-black text-[#FFD500]/60 uppercase tracking-[0.15em] mb-2.5 block">月份</span>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto hide-scrollbar">
              <button
                onClick={() => setMonth('全部')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  month === '全部'
                    ? 'bg-[#FFD500] text-[#1A3A8A] shadow-lg shadow-[#FFD500]/20 scale-105'
                    : 'bg-white/[0.06] text-white/45 hover:bg-white/[0.12] hover:text-white/75 border border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                全部月份
              </button>
              {MONTHS.map(m => (
                <button
                  key={m}
                  onClick={() => setMonth(m)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 ${
                    month === m
                      ? 'bg-[#FFD500] text-[#1A3A8A] shadow-lg shadow-[#FFD500]/20 scale-105'
                      : 'bg-white/[0.06] text-white/45 hover:bg-white/[0.12] hover:text-white/75 border border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* 结果计数 */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
              共 <span className="text-[#FFD500]/70">{filtered.length}</span> 场比赛
            </span>
          </div>
        </div>

        {/* 赛程列表 */}
        <div className="space-y-4">
          {filtered.map((s, idx) => {
            const catColors = CATEGORY_COLORS[s.category] || { bg: 'bg-white/10', text: 'text-white/50', border: 'border-white/10', glow: '' };
            return (
              <div
                key={s.id}
                className="group relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.08] p-5 md:p-6 hover:border-[#FFD500]/25 hover:bg-black/40 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(255,213,0,0.06)] hover:-translate-y-0.5"
                style={{ animationDelay: `${idx * 70}ms`, animation: 'fadeInUp 0.45s cubic-bezier(0.22,0.61,0.36,1) forwards', opacity: 0 }}
              >
                {/* 卡片顶部高光线 */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-[#FFD500]/30 transition-all duration-500" />

                {/* 左侧时间线 */}
                <div className="absolute left-5 top-8 bottom-8 w-0.5 hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FFD500]/20 via-transparent to-transparent group-hover:from-[#FFD500]/40 transition-colors duration-500" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FFD500]/30 border border-[#FFD500]/50 group-hover:bg-[#FFD500]/60 group-hover:border-[#FFD500] transition-all duration-500 shadow-[0_0_8px_rgba(255,213,0,0.3)]" />
                </div>

                <div className="md:ml-8">
                  {/* 头部信息行 */}
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-sm font-black text-white/65 tracking-wide">{s.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-xs font-bold text-white/45 font-mono">{s.time}</span>
                      {s.region && (
                        <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] text-[10px] font-bold text-white/35 border border-white/[0.08] backdrop-blur-sm">
                          {s.region}
                        </span>
                      )}
                    </div>
                    <StatusBadge status={s.status} />
                  </div>

                  {/* 分类标签 */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-lg ${catColors.bg} ${catColors.text} border ${catColors.border} text-[10px] font-black tracking-wide ${catColors.glow} shadow-sm`}>
                      {s.category}
                    </span>
                    <span className="text-[10px] text-white/35 font-mono tracking-wider">{s.month}</span>
                  </div>

                  {/* 赛事名称 */}
                  <h3 className="text-xl md:text-2xl font-black text-white mb-5 group-hover:text-[#FFD500] transition-colors duration-300 tracking-tight leading-tight">
                    {s.tournamentName}
                  </h3>

                  {/* 对战信息 — 加强对比度 */}
                  <div className="relative overflow-hidden rounded-xl bg-black/45 border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-300">
                    {/* 对战内部光泽 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD500]/[0.02] via-transparent to-[#FFD500]/[0.02] group-hover:from-[#FFD500]/[0.05] group-hover:to-[#FFD500]/[0.05] transition-all duration-500" />

                    <div className="relative flex items-center justify-between p-5">
                      {/* 队伍A */}
                      <div className="flex-1 text-center">
                        <span className="text-lg md:text-xl font-black text-white/90 transition-all duration-300 group-hover:text-white">
                          {s.teamA}
                        </span>
                      </div>

                      {/* VS 分隔 */}
                      <div className="flex flex-col items-center px-5 md:px-8">
                        <span className="text-[9px] font-black text-white/15 uppercase tracking-[0.3em] mb-1">VS</span>
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
                      </div>

                      {/* 队伍B */}
                      <div className="flex-1 text-center">
                        <span className="text-lg md:text-xl font-black text-white/90 transition-all duration-300 group-hover:text-white">
                          {s.teamB}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 直播链接 & 操作 */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {s.streamUrl && s.status !== 'ended' && (
                      <a
                        href={s.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#FFD500] text-[#1A3A8A] text-sm font-black hover:shadow-[0_8px_30px_rgba(255,213,0,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        观看直播
                      </a>
                    )}
                    {(followedTeams.some(tid => teams.find(t => t.id === tid)?.name === s.teamA) ||
                      followedTeams.some(tid => teams.find(t => t.id === tid)?.name === s.teamB)) && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FFD500]/15 border border-[#FFD500]/25 text-[#FFD500] text-xs font-black">
                        ★ 关注战队
                      </span>
                    )}
                    <EventFavoriteButton
                      itemType="match"
                      itemId={s.id}
                      title={s.tournamentName}
                      className="ml-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <div className="relative overflow-hidden rounded-2xl bg-black/25 backdrop-blur-xl border border-white/[0.06] text-center py-20">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <div className="text-6xl mb-5 opacity-20 select-none">📅</div>
            <div className="text-white/30 font-black text-lg mb-1.5">暂无符合条件的赛程</div>
            <p className="text-white/15 text-sm font-medium">尝试调整筛选条件查看更多赛事</p>
          </div>
        )}
      </div>
    </main>
  );
}
