'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { heroList } from '@/lib/data';
import HeroFavoriteButton from '@/components/auth/HeroFavoriteButton';

// 英雄卡片组件
function HeroCard({
  heroId,
  name,
  avatarUrl,
  favorited,
}: {
  heroId: string;
  name: string;
  avatarUrl: string;
  favorited: boolean;
}) {
  // 雪莉、柯尔特替换为高清 portrait 图，需要放大裁剪以匹配其他头像的展示区域
  const portraitClass =
    name === '雪莉'
      ? 'scale-[1.5] object-[center_25%]'
      : name === '柯尔特'
      ? 'scale-[1.5] object-[80%_25%]'
      : '';
  return (
    <div className="relative w-full aspect-[3/2] border-3 border-black rounded-lg overflow-visible bg-white cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,213,0,0.4)] hover:z-10 hover:border-[#FFD500]">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={avatarUrl}
          alt={name}
          className={`w-full h-full object-cover ${portraitClass}`}
        />
      </div>
      <div
        className="absolute top-[-14px] right-[-4px] bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold px-3 py-1 text-sm border-2 border-black transition-all duration-300 hover:from-[#FFD500] hover:to-[#FFC300] hover:text-black"
        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        {name}
      </div>
      <div className="absolute top-2 left-2 z-10">
        <HeroFavoriteButton heroId={heroId} initialFavorited={favorited} size="sm" />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { data: session, status } = useSession();
  const [favoriteHeroes, setFavoriteHeroes] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('全部');
  const roles = ['全部', '输出', '射手', '投弹手', '坦克', '辅助', '控场', '刺客'];

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;
    fetch('/api/user/heroes')
      .then((res) => (res.ok ? res.json() : { favorites: [] }))
      .then((data: { favorites?: string[] }) => setFavoriteHeroes(data.favorites || []))
      .catch((error) => console.error('获取英雄收藏失败:', error));
  }, [session, status]);

  const filteredHeroes = useMemo(() => {
    if (activeFilter === '收藏') return heroList.filter((h) => favoriteHeroes.includes(h.id));
    if (activeFilter === '全部') return heroList;
    return heroList.filter((h) => h.role === activeFilter);
  }, [activeFilter, favoriteHeroes]);

  return (
    <section className="h-screen" id="hero">
      {/* 视差背景层 */}
      <div
        className="parallax-bg bg-cover bg-center"
        style={{
          backgroundImage: 'url(/PromoArt/image1.png)',
          filter: 'blur(12px) brightness(0.25) saturate(0.5)',
        }}
      />

      {/* 内容包裹层 */}
      <div className="snap-content-layer flex w-full h-full">
        {/* ===== 左侧黄条：荒野乱斗卡通渲染风格 ===== */}
        <div
          className="relative w-[140px] shrink-0 flex flex-col items-center justify-center overflow-visible select-none"
          style={{
            height: 'calc(100vh - 90px)',
            background: 'linear-gradient(180deg, #FFE135 0%, #FFD500 12%, #FFC300 40%, #FFB800 70%, #FFA800 100%)',
            boxShadow: '5px 0 0 rgba(0,0,0,0.1), 6px 0 14px rgba(0,0,0,0.08)',
            borderRadius: '0 12px 12px 0',
          }}
        >
          {/* 顶部高光条（替代 ::before） */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none z-2"
            style={{
              height: '35%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)',
              borderRadius: '0 12px 0 0',
            }}
          />
          {/* 底部暗角（替代 ::after） */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none z-2"
            style={{
              height: '18%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.05) 0%, transparent 100%)',
              borderRadius: '0 0 12px 0',
            }}
          />

          {/* logo1 → 英雄图鉴 */}
          <img
            src="/glo/logo1.png"
            alt="英雄图鉴"
            className="relative z-5 w-[72px] h-[72px] mb-5 object-contain"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))' }}
          />
          {/* 竖排标题 */}
          <h2
            className="relative z-5 font-black text-[#1A1A1A] leading-tight"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '20px',
              fontSize: 'clamp(1.5rem, 3vw, 3rem)',
              textShadow: '0 2px 3px rgba(255,255,255,0.35), 0 -1px 2px rgba(0,0,0,0.1)',
            }}
          >
            英雄图鉴
          </h2>
        </div>

        {/* 右侧卡片区域 — padding-top 补偿固定导航栏高度(80px) */}
        <div className="flex-1 p-8 overflow-y-auto hide-scrollbar bg-[#1a1a2e]/70 rounded-2xl backdrop-blur-md border border-white/10" style={{ paddingTop: 'calc(50px + 32px)' }}>
          {/* 筛选栏 */}
          <div className="flex gap-3 flex-wrap mb-6">
            {['收藏', ...roles].map((role) => (
              <button
                key={role}
                onClick={() => setActiveFilter(role)}
                className={`px-4 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
                  activeFilter === role
                    ? 'bg-gradient-to-r from-[#FFD500] to-[#FFC300] text-black font-bold shadow-md'
                    : 'bg-[#2D2A52] text-white font-bold hover:bg-gradient-to-r hover:from-[#FFD500] hover:to-[#FFC300] hover:text-black transition-all duration-300'
                }`}
              >
                {role === '收藏' ? `⭐ 收藏 (${favoriteHeroes.length})` : role}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-4">
            {filteredHeroes.map((hero) => (
              <Link href={`/heroes/${hero.slug}`} key={hero.id}>
                <HeroCard
                  heroId={hero.id}
                  name={hero.name}
                  avatarUrl={hero.image}
                  favorited={favoriteHeroes.includes(hero.id)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
