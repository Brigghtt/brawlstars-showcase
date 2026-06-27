'use client';

import { useParams } from 'next/navigation';
import { teams, players } from '@/lib/data/esports';
import Link from 'next/link';
import Breadcrumb from '@/components/esports/Breadcrumb';
import TeamLogo from '@/components/esports/TeamLogo';
import FollowButton from '@/components/esports/FollowButton';
import EventFavoriteButton from '@/components/esports/EventFavoriteButton';
import { useRecordView } from '@/hooks/useRecordView';


export default function TeamDetailPage() {
  const { id } = useParams();
  const team = teams.find(t => t.id === id);
  useRecordView('team', team?.id, team?.name, team?.logo);

  if (!team) {
    return (
      <main className="min-h-screen pt-28 pb-20">
        <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image7.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} /><div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
          <div className="text-6xl mb-4">😵</div>
          <h1 className="text-3xl font-black text-white mb-3">战队未找到</h1>
          <Link href="/events/teams" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD500] text-[#1A3A8A] font-black hover:scale-105 transition-transform">
            返回战队列表
          </Link>
        </div>
      </main>
    );
  }

  const teamPlayers = players.filter(p => p.teamId === team.id);

  return (
    <main className="min-h-screen pt-28 pb-20">
      {/* 背景 — 与首页同款模糊海报图 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/PromoArt/image7.png)', filter: 'blur(12px) brightness(0.25) saturate(0.5)', transform: 'scale(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFD500]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#1E90FF]/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[
          { label: '战队档案', href: '/events/teams' },
          { label: team.name },
        ]} />

        {/* 战队信息主卡 */}
        <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD500]/[0.04] rounded-full blur-[80px]" />

          <div className="relative flex flex-col md:flex-row items-start gap-5 md:gap-8 mb-6">
            <TeamLogo src={team.logo} alt={team.name} size="xl" className="flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-2xl md:text-4xl font-black text-white mb-1.5">{team.name}</h1>
              <p className="text-white/45 font-bold text-sm mb-4">
                {team.nameEn} · {team.region || '未知赛区'}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <FollowButton type="team" id={team.id} />
                <EventFavoriteButton
                  itemType="team"
                  itemId={team.id}
                  title={team.name}
                  imageUrl={team.logo}
                  showLabel
                />
              </div>
            </div>
          </div>

        </div>

        {/* 现役选手 */}
        <div className="relative overflow-hidden rounded-3xl bg-black/35 backdrop-blur-2xl border border-white/[0.1] p-6 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#FFD500] rounded-full" />
            现役选手
          </h2>
          {teamPlayers.length === 0 ? (
            <p className="text-white/40 text-sm">暂无选手数据</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {teamPlayers.map((p, idx) => (
                <Link
                  key={p.id}
                  href={`/events/players/${p.id}`}
                  className="flex items-center gap-4 bg-black/30 rounded-xl p-4 hover:bg-black/40 transition-all duration-300 border border-white/[0.08] hover:border-[#FFD500]/20 group/player"
                  style={{ animationDelay: `${idx * 60}ms`, animation: 'fadeInUp 0.3s cubic-bezier(0.22,0.61,0.36,1) forwards', opacity: 0 }}
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/[0.1] to-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lg font-black text-white/25 group-hover/player:border-[#FFD500]/20 group-hover/player:text-[#FFD500]/40 transition-all duration-300 flex-shrink-0">
                    {p.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-white text-sm group-hover/player:text-[#FFD500] transition-colors duration-200">
                      {p.name}
                    </div>
                    <div className="text-[11px] text-white/35">{p.role}</div>
                  </div>
                  <svg className="w-4 h-4 text-white/15 group-hover/player:text-[#FFD500]/40 ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
