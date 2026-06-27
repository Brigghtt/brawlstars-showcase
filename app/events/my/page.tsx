'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { teams, players, schedules, tournaments } from '@/lib/data/esports';
import Breadcrumb from '@/components/esports/Breadcrumb';
import PageHeader from '@/components/esports/PageHeader';

interface FavoriteItem {
  id: string;
  itemType: 'team' | 'player' | 'match';
  itemId: string;
  title: string;
  imageUrl?: string;
  createdAt: string;
}

interface PredictionItem {
  id: string;
  matchId: string;
  predictedTeam: 'A' | 'B';
  actualWinner?: 'A' | 'B';
  isCorrect?: boolean;
}

export default function MyEventsPage() {
  const { status } = useSession();
  const [followedTeams, setFollowedTeams] = useState<string[]>([]);
  const [followedPlayers, setFollowedPlayers] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [predictions, setPredictions] = useState<PredictionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== 'authenticated') return;
    Promise.all([
      fetch('/api/user/follows/teams').then(r => r.json()),
      fetch('/api/user/follows/players').then(r => r.json()),
      fetch('/api/user/favorites/events').then(r => r.json()),
      fetch('/api/user/predictions').then(r => r.json()),
    ])
      .then(([t, p, f, pred]) => {
        setFollowedTeams(t.follows || []);
        setFollowedPlayers(p.follows || []);
        setFavorites(f.favorites || []);
        setPredictions(pred.predictions || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [status]);

  const followedTeamList = useMemo(
    () => teams.filter(t => followedTeams.includes(t.id)),
    [followedTeams]
  );
  const followedPlayerList = useMemo(
    () => players.filter(p => followedPlayers.includes(p.id)),
    [followedPlayers]
  );

  const mySchedule = useMemo(() => {
    const names = new Set(followedTeamList.map(t => t.name));
    return schedules
      .filter(s => names.has(s.teamA) || names.has(s.teamB))
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  }, [followedTeamList]);

  const resolvedPredictions = predictions.filter(p => typeof p.isCorrect === 'boolean');
  const correctCount = resolvedPredictions.filter(p => p.isCorrect).length;
  const accuracy = resolvedPredictions.length ? Math.round((correctCount / resolvedPredictions.length) * 100) : 0;

  if (status === 'loading') {
    return (
      <main className="min-h-screen pt-28 pb-24">
        <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image3.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
        <div className="text-center py-24 text-white/40 font-bold animate-pulse">加载中…</div>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <main className="min-h-screen pt-28 pb-24">
        <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image3.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center py-24">
          <div className="text-6xl mb-5">🔒</div>
          <h1 className="text-3xl font-black text-white mb-3">请先登录</h1>
          <p className="text-white/40 mb-8">登录后可查看你的关注、收藏与预测记录。</p>
          <Link href="/login" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD500] text-[#1A3A8A] font-black hover:scale-105 transition-transform">
            去登录
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image3.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: '赛事中心', href: '/events' }, { label: '我的赛事' }]} />
        <PageHeader title="我的赛事" subtitle="关注战队、收藏比赛与预测战绩一站式管理" icon="🏆" />

        {loading ? (
          <div className="text-center py-24 text-white/40 font-bold animate-pulse">加载中…</div>
        ) : (
          <>
            {/* 统计卡片 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: '关注战队', value: followedTeams.length },
                { label: '关注选手', value: followedPlayers.length },
                { label: '赛事收藏', value: favorites.length },
                { label: '预测准确率', value: `${accuracy}%` },
              ].map(stat => (
                <div key={stat.label} className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.08] p-5 text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#FFD500] mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 我的赛程 */}
            <section className="mb-10">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
                我的赛程
              </h2>
              {mySchedule.length === 0 ? (
                <div className="rounded-2xl bg-black/25 border border-white/[0.06] p-8 text-center text-white/40 text-sm">
                  暂无关注战队的赛程，去<Link href="/events/teams" className="text-[#FFD500] font-bold mx-1">战队档案</Link>关注喜欢的队伍吧。
                </div>
              ) : (
                <div className="space-y-3">
                  {mySchedule.slice(0, 8).map(s => (
                    <div
                      key={s.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.08] p-4 md:p-5 hover:border-[#FFD500]/25 transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-white/40 mb-1.5">
                          <span>{s.date}</span>
                          <span>{s.time}</span>
                          <span className="px-2 py-0.5 rounded bg-white/[0.06] text-white/50">{s.category}</span>
                          {s.status === 'live' && <span className="text-red-400">● LIVE</span>}
                        </div>
                        <div className="text-lg font-black text-white">
                          {s.teamA} <span className="text-white/30 mx-2">VS</span> {s.teamB}
                        </div>
                        <div className="text-xs text-white/40 mt-0.5">{s.tournamentName}</div>
                      </div>
                      {s.streamUrl && s.status !== 'ended' && (
                        <a
                          href={s.streamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD500] text-[#1A3A8A] text-sm font-black hover:scale-105 transition-transform"
                        >
                          ▶ 观看直播
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 我的关注 */}
            <section className="mb-10">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
                我的关注
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-white/50 mb-3">战队</h3>
                  {followedTeamList.length === 0 ? (
                    <p className="text-sm text-white/30">还没有关注任何战队。</p>
                  ) : (
                    <div className="space-y-2">
                      {followedTeamList.map(t => (
                        <Link
                          key={t.id}
                          href={`/events/teams/${t.id}`}
                          className="flex items-center gap-3 rounded-xl bg-black/30 border border-white/[0.08] p-3 hover:border-[#FFD500]/25 transition-all duration-300"
                        >
                          {t.logo ? <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain" /> : <div className="w-8 h-8 rounded-lg bg-white/10" />}
                          <div className="min-w-0">
                            <div className="font-bold text-white text-sm truncate">{t.name}</div>
                            <div className="text-[10px] text-white/40">{t.region || '未知赛区'}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white/50 mb-3">选手</h3>
                  {followedPlayerList.length === 0 ? (
                    <p className="text-sm text-white/30">还没有关注任何选手。</p>
                  ) : (
                    <div className="space-y-2">
                      {followedPlayerList.map(p => (
                        <Link
                          key={p.id}
                          href={`/events/players/${p.id}`}
                          className="flex items-center gap-3 rounded-xl bg-black/30 border border-white/[0.08] p-3 hover:border-[#FFD500]/25 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xs font-black text-white/50">
                            {p.name[0]}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-sm truncate">{p.name}</div>
                            <div className="text-[10px] text-white/40">{p.currentTeam || p.role}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* 我的收藏 */}
            <section className="mb-10">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
                我的收藏
              </h2>
              {favorites.length === 0 ? (
                <div className="rounded-2xl bg-black/25 border border-white/[0.06] p-8 text-center text-white/40 text-sm">
                  暂无收藏，在战队、选手或比赛详情页点击 ☆ 即可收藏。
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {favorites.map(f => {
                    const href =
                      f.itemType === 'team'
                        ? `/events/teams/${f.itemId}`
                        : f.itemType === 'player'
                        ? `/events/players/${f.itemId}`
                        : `/events/${f.itemId}`;
                    return (
                      <Link
                        key={f.id}
                        href={href}
                        className="flex items-center gap-3 rounded-xl bg-black/30 border border-white/[0.08] p-3 hover:border-[#FFD500]/25 transition-all duration-300"
                      >
                        {f.imageUrl ? (
                          <img src={f.imageUrl} alt={f.title} className="w-10 h-10 rounded-lg object-contain bg-black/20" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg text-white/30">{f.itemType === 'match' ? '⚔' : f.itemType === 'team' ? '🛡' : '👤'}</div>
                        )}
                        <div className="min-w-0">
                          <div className="font-bold text-white text-sm truncate">{f.title}</div>
                          <div className="text-[10px] text-white/40">
                            {f.itemType === 'team' ? '战队' : f.itemType === 'player' ? '选手' : '比赛'}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* 我的预测 */}
            <section>
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
                我的预测
              </h2>
              {predictions.length === 0 ? (
                <div className="rounded-2xl bg-black/25 border border-white/[0.06] p-8 text-center text-white/40 text-sm">
                  还没有预测记录，去<Link href="/events" className="text-[#FFD500] font-bold mx-1">赛事详情页</Link>参与预测小游戏吧。
                </div>
              ) : (
                <div className="space-y-3">
                  {predictions.map(p => {
                    const t = tournaments.find(x => x.id === p.matchId);
                    if (!t) return null;
                    return (
                      <div
                        key={p.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.08] p-4 md:p-5"
                      >
                        <div>
                          <div className="text-sm font-black text-white mb-1">{t.name}</div>
                          <div className="text-xs text-white/40">
                            预测 {p.predictedTeam === 'A' ? t.teamA.name : t.teamB.name} · 实际胜者 {p.actualWinner === 'A' ? t.teamA.name : t.teamB.name}
                          </div>
                        </div>
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-black ${p.isCorrect ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                          {p.isCorrect ? '✅ 正确' : '❌ 错误'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
