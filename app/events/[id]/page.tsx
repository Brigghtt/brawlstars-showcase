'use client';

import { useParams } from 'next/navigation';
import { tournaments, getHeroAvatar, modeIconMap, getMapImage, translateMapName } from '@/lib/data/esports';
import { getMapNameCn } from '@/lib/data/mapTranslations';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Breadcrumb from '@/components/esports/Breadcrumb';
import TeamLogo from '@/components/esports/TeamLogo';
import EventFavoriteButton from '@/components/esports/EventFavoriteButton';
import PredictionWidget from '@/components/esports/PredictionWidget';
import { useRecordView } from '@/hooks/useRecordView';

const MAP_FAVORITES_KEY = 'brawl-map-favorites';

function loadMapFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MAP_FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveMapFavorites(list: string[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MAP_FAVORITES_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

async function downloadImage(url: string, filename: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('下载地图图片失败:', error);
    window.open(url, '_blank');
  }
}

interface BrawlMap {
  id: number | string;
  name: string;
  imageUrl?: string;
  gameMode?: { name?: string };
}

export default function EventDetailPage() {
  const { id } = useParams();
  const [allMaps, setAllMaps] = useState<BrawlMap[]>([]);
  const [selectedMap, setSelectedMap] = useState<BrawlMap | null>(null);
  const [favorites, setFavorites] = useState<string[]>(loadMapFavorites);

  useEffect(() => {
    fetch('/api/brawl-data')
      .then(res => res.json())
      .then(data => {
        const list = data?.maps?.list || data?.maps?.items || data?.maps || [];
        setAllMaps(Array.isArray(list) ? list : []);
      })
      .catch(() => setAllMaps([]));
  }, []);

  const mapImageByName = useMemo(() => {
    const map = new Map<string, string>();
    allMaps.forEach(m => {
      if (m.imageUrl) {
        map.set(m.name, m.imageUrl);
        // 同时用中文名做 key，方便 translateMapName 后的匹配
        const cn = getMapNameCn(m.name);
        if (cn && cn !== m.name) map.set(cn, m.imageUrl);
      }
    });
    return map;
  }, [allMaps]);

  const isMapFavorited = (name: string) => favorites.includes(name);
  function toggleMapFavorite(name: string) {
    const next = isMapFavorited(name) ? favorites.filter(n => n !== name) : [...favorites, name];
    setFavorites(next);
    saveMapFavorites(next);
  }

  const t = tournaments.find(x => x.id === id);
  useRecordView('match', id as string | undefined, t?.name, t?.teamA?.logo);

  // 同赛事的其它场次，用于生成淘汰赛树状图
  const eventTournaments = useMemo(() => {
    if (!t) return [];
    const prefix = t.id.replace(/-[a-z]+-\d+$/, '-');
    return tournaments
      .filter(x => x.id.startsWith(prefix))
      .sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
  }, [t]);

  const bracketRounds = useMemo(() => {
    if (eventTournaments.length < 2) return [];
    const order = ['八强赛', '半决赛', '总决赛'];
    const rounds: { label: string; matches: typeof eventTournaments }[] = [];
    for (const label of order) {
      const matches = eventTournaments.filter(x => x.eliminationRound === label);
      if (matches.length) rounds.push({ label, matches });
    }
    // 如果没有 eliminationRound，按日期和场次数量推断轮次
    if (rounds.length === 0) {
      const byDate: Record<string, typeof eventTournaments> = {};
      eventTournaments.forEach(x => {
        byDate[x.date] = byDate[x.date] || [];
        byDate[x.date].push(x);
      });
      const dates = Object.keys(byDate).sort();
      const labels = dates.length === 1 ? ['淘汰赛'] : dates.map((d, i) => `第${i + 1}轮`);
      dates.forEach((d, i) => rounds.push({ label: labels[i], matches: byDate[d] }));
    }
    return rounds;
  }, [eventTournaments]);

  const isCurrentMatch = (matchId: string) => matchId === t?.id;

  if (!t) {
    return (
      <main className="min-h-screen pt-28 pb-20">
        <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image2.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} /><div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
          <div className="text-6xl mb-4">😵</div>
          <h1 className="text-3xl font-black text-white mb-3">赛事未找到</h1>
          <Link href="/events" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD500] text-[#1A3A8A] font-black hover:scale-105 transition-transform">
            返回赛事中心
          </Link>
        </div>
      </main>
    );
  }

  const getCatColor = (c: string) => {
    const map: Record<string, string> = {
      'LCQ': 'from-orange-500/20 to-orange-600/10 text-orange-400 border-orange-500/30',
      '全球总决赛': 'from-red-500/20 to-red-600/10 text-red-400 border-red-500/30',
      'brawlcup': 'from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30',
      '月赛': 'from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/30',
    };
    return map[c] || 'from-white/10 to-white/5 text-white/70 border-white/20';
  };

  const isTeamAWinner = t.winner === 'A';
  const isTeamBWinner = t.winner === 'B';

  return (
    <main className="min-h-screen pt-28 pb-20">
      {/* 背景 — 与首页同款模糊海报图 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image2.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFD500]/[0.04] rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1E90FF]/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: '赛事详情' }]} />

        {/* 赛事主卡 */}
        <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)] animate-fade-in-up">
          {/* 装饰光效 */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD500]/[0.04] rounded-full blur-[80px] pointer-events-none" />

          {/* 标签行 */}
          <div className="relative flex flex-wrap items-center gap-2 mb-5">
            <span className={`px-3 py-1 rounded-lg bg-gradient-to-r ${getCatColor(t.category)} text-xs font-black border shadow-sm`}>
              {t.category}
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.08] border border-white/[0.1] text-white/60 text-xs font-bold">
              {t.format}
            </span>
            <span className="text-xs text-white/40 font-mono tracking-wider">{t.version}</span>
            <div className="ml-auto">
              <EventFavoriteButton
                itemType="match"
                itemId={t.id}
                title={t.name}
                imageUrl={t.teamA.logo}
                showLabel
                className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08]"
              />
            </div>
          </div>

          {/* 赛事名称 */}
          <h1 className="relative text-2xl md:text-4xl font-black text-white mb-1.5 animate-val-slam-up">
            {t.name}
          </h1>
          <p className="relative text-white/50 font-bold text-sm mb-8">{t.date}</p>

          {/* 对战展示 */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 bg-black/40 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-white/[0.08]">
            {/* Team A */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className={`transition-all duration-500 ${isTeamAWinner ? 'scale-110' : 'opacity-70'}`}>
                <TeamLogo src={t.teamA.logo} alt={t.teamA.name} size="lg" />
              </div>
              <div>
                <div className={`text-base md:text-xl font-black transition-colors duration-300 ${isTeamAWinner ? 'text-[#FFD500]' : 'text-white'}`}>
                  {t.teamA.name}
                </div>
                <div className="text-[10px] md:text-xs text-white/45 font-medium mt-0.5">{t.teamA.nameEn}</div>
              </div>
              {isTeamAWinner && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFD500]/15 border border-[#FFD500]/25 text-[10px] font-black text-[#FFD500]">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  胜者
                </span>
              )}
            </div>

            {/* Score */}
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-6xl font-black text-[#FFD500] tabular-nums animate-score-bounce leading-none">
                {t.score}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/25 uppercase tracking-[0.2em] mt-2">
                Final Score
              </div>
            </div>

            {/* Team B */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className={`transition-all duration-500 ${isTeamBWinner ? 'scale-110' : 'opacity-70'}`}>
                <TeamLogo src={t.teamB.logo} alt={t.teamB.name} size="lg" />
              </div>
              <div>
                <div className={`text-base md:text-xl font-black transition-colors duration-300 ${isTeamBWinner ? 'text-[#FFD500]' : 'text-white'}`}>
                  {t.teamB.name}
                </div>
                <div className="text-[10px] md:text-xs text-white/45 font-medium mt-0.5">{t.teamB.nameEn}</div>
              </div>
              {isTeamBWinner && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFD500]/15 border border-[#FFD500]/25 text-[10px] font-black text-[#FFD500]">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  胜者
                </span>
              )}
            </div>
          </div>

          <PredictionWidget
            matchId={t.id}
            teamA={{ name: t.teamA.name, logo: t.teamA.logo }}
            teamB={{ name: t.teamB.name, logo: t.teamB.logo }}
            winner={t.winner}
            className="mt-6"
          />
        </div>

        {/* 淘汰赛进程树状图 */}
        {bracketRounds.length > 1 && (
          <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl md:text-2xl font-black text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-6 bg-[#FFD500] rounded-full" />
              淘汰赛进程
            </h2>
            <div className="overflow-x-auto pb-2">
              <div className="flex items-stretch gap-4 md:gap-6 min-w-[600px]">
                {bracketRounds.map((round) => (
                  <div key={round.label} className="flex-1 flex flex-col justify-center gap-3">
                    <div className="text-xs font-black text-[#FFD500]/70 uppercase tracking-wider text-center mb-1">
                      {round.label}
                    </div>
                    {round.matches.map((m) => {
                      const active = isCurrentMatch(m.id);
                      return (
                        <Link
                          key={m.id}
                          href={`/events/${m.id}`}
                          className={`relative block rounded-xl border p-2.5 transition-all duration-300 ${
                            active
                              ? 'bg-[#FFD500]/15 border-[#FFD500]/50 shadow-[0_0_20px_rgba(255,213,0,0.15)]'
                              : 'bg-black/30 border-white/[0.08] hover:border-white/20 hover:bg-black/40'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <TeamLogo src={m.teamA.logo} alt={m.teamA.name} size="sm" className="w-5 h-5 rounded-md text-[10px]" />
                              <span className={`truncate ${m.winner === 'A' ? 'text-[#FFD500]' : 'text-white/70'}`}>
                                {m.teamA.name}
                              </span>
                            </div>
                            <span className={m.winner === 'A' ? 'text-[#FFD500]' : 'text-white/50'}>{m.score.split(':')[0]}</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-bold">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <TeamLogo src={m.teamB.logo} alt={m.teamB.name} size="sm" className="w-5 h-5 rounded-md text-[10px]" />
                              <span className={`truncate ${m.winner === 'B' ? 'text-[#FFD500]' : 'text-white/70'}`}>
                                {m.teamB.name}
                              </span>
                            </div>
                            <span className={m.winner === 'B' ? 'text-[#FFD500]' : 'text-white/50'}>{m.score.split(':')[1]}</span>
                          </div>
                          {active && (
                            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#FFD500] text-[#1A3A8A] text-[9px] font-black flex items-center justify-center">
                              ★
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 对局详情 */}
        <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <h2 className="text-xl md:text-2xl font-black text-white mb-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-6 bg-[#FFD500] rounded-full" />
            对局详情
          </h2>
          <div className="space-y-3">
            {t.matches.map((m, idx) => {
              const mapImageUrl = mapImageByName.get(m.map) || mapImageByName.get(translateMapName(m.map)) || getMapImage(m.map, m.mode);
              const mapIsFavorited = isMapFavorited(m.map);
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl bg-black/30 border border-white/[0.08] p-4 md:p-5 hover:border-white/[0.14] transition-all duration-300"
                  style={{ animationDelay: `${idx * 80}ms`, animation: 'fadeInUp 0.4s cubic-bezier(0.22,0.61,0.36,1) forwards', opacity: 0 }}
                >
                  {/* 顶部信息 */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#FFD500]/15 border border-[#FFD500]/20 flex items-center justify-center text-xs font-black text-[#FFD500]">
                        {idx + 1}
                      </span>
                      {modeIconMap[m.mode] && (
                        <img src={modeIconMap[m.mode]} alt="" className="w-5 h-5 object-contain" />
                      )}
                      <span className="text-sm font-bold text-[#FFD500]">{m.mode}</span>
                    </div>
                    <span className={`text-xs font-medium ${mapIsFavorited ? 'text-yellow-400 font-black' : 'text-white/70'}`}>
                      {mapIsFavorited && '★ '}
                      {translateMapName(m.map)}
                    </span>
                  </div>

                  {/* 主体：左侧地图 + 右侧对阵 */}
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 relative z-10">
                    {/* 左侧地图 */}
                    <button
                      onClick={() => setSelectedMap({ id: idx, name: m.map, imageUrl: mapImageUrl, gameMode: { name: m.mode } })}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-yellow-400/50 transition-all duration-300"
                    >
                      <img
                        src={mapImageUrl}
                        alt={translateMapName(m.map)}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                        <span className="text-[10px] font-black text-yellow-400">点击放大</span>
                      </div>
                      {mapIsFavorited && (
                        <div className="absolute top-1.5 right-1.5 text-yellow-400 text-xs drop-shadow-md">★</div>
                      )}
                    </button>

                    {/* 右侧对阵 */}
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-start">
                      {/* Team A Heroes */}
                      <div className={`rounded-xl p-3 border transition-all duration-300 ${
                        m.teamA.win
                          ? 'bg-[#FFD500]/[0.08] border-[#FFD500]/25 shadow-[0_0_20px_rgba(255,213,0,0.08)]'
                          : 'bg-black/30 border-white/[0.08]'
                      }`}>
                        <div className="text-[10px] font-bold text-white/55 mb-2 text-center uppercase tracking-wider">
                          {t.teamA.name}
                        </div>
                        <div className="flex justify-center gap-2 flex-wrap">
                          {m.teamA.heroes.map(h => {
                            const avatar = getHeroAvatar(h);
                            return (
                              <div key={h} className="flex flex-col items-center gap-1">
                                {avatar ? (
                                  <img src={avatar} alt={h} className="w-10 h-10 rounded-lg border border-white/10 object-cover bg-black/20" />
                                ) : (
                                  <span className="px-2 py-1 rounded-md bg-white/[0.08] text-[11px] font-bold text-white/80 border border-white/[0.06]">
                                    {h}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {m.teamA.win && (
                          <div className="mt-2 text-center">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFD500]/15 border border-[#FFD500]/25 text-[10px] font-black text-[#FFD500] animate-live-pulse">
                              WIN
                            </span>
                          </div>
                        )}
                      </div>

                      {/* VS */}
                      <div className="flex items-center justify-center h-full pt-6">
                        <span className="text-white/25 font-black text-sm">VS</span>
                      </div>

                      {/* Team B Heroes */}
                      <div className={`rounded-xl p-3 border transition-all duration-300 ${
                        m.teamB.win
                          ? 'bg-[#FFD500]/[0.08] border-[#FFD500]/25 shadow-[0_0_20px_rgba(255,213,0,0.08)]'
                          : 'bg-black/30 border-white/[0.08]'
                      }`}>
                        <div className="text-[10px] font-bold text-white/55 mb-2 text-center uppercase tracking-wider">
                          {t.teamB.name}
                        </div>
                        <div className="flex justify-center gap-2 flex-wrap">
                          {m.teamB.heroes.map(h => {
                            const avatar = getHeroAvatar(h);
                            return (
                              <div key={h} className="flex flex-col items-center gap-1">
                                {avatar ? (
                                  <img src={avatar} alt={h} className="w-10 h-10 rounded-lg border border-white/10 object-cover bg-black/20" />
                                ) : (
                                  <span className="px-2 py-1 rounded-md bg-white/[0.08] text-[11px] font-bold text-white/80 border border-white/[0.06]">
                                    {h}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {m.teamB.win && (
                          <div className="mt-2 text-center">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFD500]/15 border border-[#FFD500]/25 text-[10px] font-black text-[#FFD500] animate-live-pulse">
                              WIN
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 地图/模式背景图 */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
                    style={{ backgroundImage: `url(${getMapImage(m.map, m.mode)})` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 地图放大弹窗 */}
        {selectedMap && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setSelectedMap(null)}
          >
            <div
              className="relative bg-neutral-900 rounded-2xl border-2 border-yellow-400/30 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* 标题 */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-black text-yellow-400">
                    {getMapNameCn(selectedMap.name)}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {selectedMap.gameMode?.name}
                    {selectedMap.name !== getMapNameCn(selectedMap.name) && (
                      <span className="ml-2 text-zinc-500">{selectedMap.name}</span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMap(null)}
                  className="text-zinc-400 hover:text-white text-2xl font-black transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* 大图区域 */}
              <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={selectedMap.imageUrl}
                  alt={getMapNameCn(selectedMap.name)}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* 操作按钮 */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                <button
                  onClick={() => toggleMapFavorite(selectedMap.name)}
                  className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
                    isMapFavorited(selectedMap.name)
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-neutral-800 text-zinc-300 hover:bg-neutral-700 border border-white/10'
                  }`}
                >
                  {isMapFavorited(selectedMap.name) ? '★ 已收藏' : '☆ 收藏'}
                </button>
                <button
                  onClick={() => downloadImage(selectedMap.imageUrl || '', `${selectedMap.name}.png`)}
                  className="px-5 py-2.5 rounded-xl font-black text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-400 hover:to-green-400 transition-all flex items-center gap-2"
                >
                  ⬇ 下载地图
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 小组赛积分榜 */}
        {t.groupStage && t.groupStage.length > 0 && (
          <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl md:text-2xl font-black text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-6 bg-[#FFD500] rounded-full" />
              小组赛积分榜
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.groupStage.map(group => (
                <div
                  key={group.name}
                  className="relative overflow-hidden rounded-2xl bg-black/30 border border-white/[0.08] p-4"
                >
                  <div className="text-sm font-black text-[#FFD500] mb-3">{group.name}</div>
                  <div className="space-y-2">
                    {group.teams.map(team => (
                      <div
                        key={team.nameEn}
                        className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.05] p-2.5"
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                          team.rank === 1
                            ? 'bg-[#FFD500] text-[#1A3A8A]'
                            : team.rank === 2
                            ? 'bg-white/15 text-white/70'
                            : 'bg-white/[0.06] text-white/40'
                        }`}>
                          {team.rank}
                        </span>
                        <TeamLogo src={team.logo} alt={team.name} size="sm" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-white truncate">{team.name}</div>
                          <div className="text-[10px] text-white/40 truncate">{team.nameEn}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-white tabular-nums">
                            {team.totalWins}-{team.totalLosses}
                          </div>
                          <div className="text-[10px] text-white/40">小分 {team.totalScoreDiff > 0 ? `+${team.totalScoreDiff}` : team.totalScoreDiff}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 视频回放 */}
        {t.videoUrl && (
          <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl md:text-2xl font-black text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-6 bg-[#FFD500] rounded-full" />
              视频回放
            </h2>
            <a
              href={t.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#FFD500] text-[#1A3A8A] font-black hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,213,0,0.3)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              观看回放
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
