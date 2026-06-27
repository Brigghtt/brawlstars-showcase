'use client';

import { useParams } from 'next/navigation';
import { players, teams, getHeroAvatar } from '@/lib/data/esports';
import Link from 'next/link';
import Breadcrumb from '@/components/esports/Breadcrumb';
import StatCard from '@/components/esports/StatCard';
import FollowButton from '@/components/esports/FollowButton';
import EventFavoriteButton from '@/components/esports/EventFavoriteButton';
import { useRecordView } from '@/hooks/useRecordView';

export default function PlayerDetailPage() {
  const { id } = useParams();
  const player = players.find(p => p.id === id);
  useRecordView('player', player?.id, player?.name, player?.portrait);

  if (!player) {
    return (
      <main className="min-h-screen pt-28 pb-20">
        <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image5.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} /><div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative max-w-4xl mx-auto px-6 text-center py-24">
          <div className="text-6xl mb-4">😵</div>
          <h1 className="text-3xl font-black text-white mb-3">选手未找到</h1>
          <Link href="/events/players" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD500] text-[#1A3A8A] font-black hover:scale-105 transition-transform">
            返回选手列表
          </Link>
        </div>
      </main>
    );
  }

  const team = teams.find(t => t.id === player.teamId);

  return (
    <main className="min-h-screen pt-28 pb-20">
      {/* 背景 — 与首页同款模糊海报图 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image5.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#FFD500]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#1E90FF]/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[
          { label: '选手档案', href: '/events/players' },
          { label: player.name },
        ]} />

        {/* 选手主卡 */}
        <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 text-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] animate-fade-in-up">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD500]/[0.03] rounded-full blur-[80px]" />

          {/* 大头像 */}
          <div className="relative w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02] border-2 border-white/[0.1] flex items-center justify-center text-5xl font-black text-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <span className="bg-gradient-to-br from-white/40 to-white/10 bg-clip-text text-transparent">
              {player.name[0]}
            </span>
          </div>

          <h1 className="relative text-2xl md:text-4xl font-black text-white mb-2">{player.name}</h1>
          {player.realName && (
            <p className="relative text-sm text-white/50 font-medium mb-2">
              {player.realName}
            </p>
          )}
          <p className="relative text-white/50 font-bold mb-2">
            {team?.name || player.currentTeam || '自由选手'}
            {player.role ? ` · ${player.role}` : ''}
          </p>
          <p className="relative text-xs text-[#FFD500]/50 font-bold uppercase tracking-wider mb-5">
            {player.region} 赛区
          </p>

          <div className="relative flex items-center justify-center gap-3">
            <FollowButton type="player" id={player.id} />
            <EventFavoriteButton
              itemType="player"
              itemId={player.id}
              title={player.name}
              imageUrl={player.portrait}
              showLabel
            />
          </div>

          {/* 社交链接 */}
          {player.links && player.links.length > 0 && (
            <div className="flex items-center justify-center gap-3 mt-5">
              {player.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-bold text-white/70 hover:bg-[#FFD500]/20 hover:border-[#FFD500]/40 hover:text-[#FFD500] transition-all flex items-center gap-2"
                >
                  <span className="text-base">
                    {link.platform === 'twitter' && '🐦'}
                    {link.platform === 'youtube' && '▶'}
                    {link.platform === 'twitch' && '📺'}
                    {link.platform === 'tiktok' && '🎵'}
                    {link.platform === 'bilibili' && 'B'}
                    {link.platform === 'douyin' && '抖'}
                    {link.platform === 'douyu' && '🐟'}
                    {link.platform === 'huya' && '🐯'}
                    {link.platform === 'instagram' && '📷'}
                    {link.platform === 'discord' && '💬'}
                    {link.platform === 'other' && '🔗'}
                  </span>
                  <span className="capitalize">{link.platform}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 数据面板 */}
        {player.stats && player.stats.matches > 0 && (
          <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
              赛季数据
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <StatCard value={`${(player.stats.winRate * 100).toFixed(0)}%`} label="胜率" highlight />
              <StatCard value={String(player.stats.totalKills)} label="总击杀" />
              <StatCard value={String(player.stats.avgDamage)} label="场均伤害" />
              <StatCard value={String(player.stats.matches)} label="总场次" />
            </div>
          </div>
        )}

        {/* 擅长英雄 */}
        {player.topHeroes && player.topHeroes.length > 0 && (
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
              擅长英雄 Top 5
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {player.topHeroes.map((h, i) => (
              <div
                key={h}
                className="flex items-center gap-4 bg-black/30 rounded-xl px-5 py-3.5 border border-white/[0.08] hover:border-[#FFD500]/20 hover:bg-black/40 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms`, animation: 'fadeInUp 0.3s cubic-bezier(0.22,0.61,0.36,1) forwards', opacity: 0 }}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${
                  i === 0 ? 'bg-gradient-to-br from-[#FFD500] to-[#FFA000] text-[#1A3A8A] shadow-lg shadow-[#FFD500]/20' :
                  i === 1 ? 'bg-white/15 text-white/80' :
                  i === 2 ? 'bg-white/10 text-white/60' :
                  'bg-white/[0.06] text-white/40'
                }`}>
                  {i + 1}
                </div>
                {getHeroAvatar(h) && (
                  <img src={getHeroAvatar(h)} alt={h} className="w-10 h-10 rounded-lg border border-white/10 object-cover bg-black/20" />
                )}
                <div>
                  <div className="font-bold text-white">{h}</div>
                  <div className="text-[10px] text-white/40 capitalize">Rank #{i + 1}</div>
                </div>
                {/* 进度条装饰 */}
                <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden ml-auto max-w-[80px] hidden sm:block">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FFD500]/80 to-[#FFD500]/30"
                    style={{ width: `${100 - i * 18}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </main>
  );
}
