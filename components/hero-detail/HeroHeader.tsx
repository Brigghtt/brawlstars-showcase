'use client';

import Image from 'next/image';
import HeroFavoriteButton from '@/components/auth/HeroFavoriteButton';
import type { HeroDetailV2 } from '@/lib/data';

interface HeroHeaderProps {
  hero: HeroDetailV2;
  favorited?: boolean;
}

export default function HeroHeader({ hero, favorited = false }: HeroHeaderProps) {
  return (
    <div className="relative h-[90vh] w-full overflow-visible">
      {/* 背景图 */}
      <Image
        src={hero.bgImage}
        alt="背景"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* 角色立绘：缩放爆裂入场 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-[40%] z-10"
        style={{ animationDelay: '0.15s' }}
      >
        <img
          src={hero.modelImage}
          alt={hero.name}
          className="h-[70vh] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-val-zoom-burst val-init-hidden"
        />
      </div>

      {/* 左下角英雄信息 */}
      <div className="absolute bottom-20 left-6 md:left-20 z-20 max-w-[60%]">
        <p className="text-white/80 text-lg font-bold mb-2 animate-val-slam-up val-init-hidden" style={{ animationDelay: '0.1s' }}>
          {hero.enName}
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-4 animate-val-glitch-text val-init-hidden">
          {hero.name}
        </h1>
        <div className="flex flex-wrap items-center gap-3 animate-val-slam-up val-init-hidden" style={{ animationDelay: '0.2s' }}>
          <span
            className="px-4 py-1.5 text-base md:text-xl font-bold rounded-md inline-block border-2 border-black/20 shadow-md"
            style={{ backgroundColor: hero.rarity.color, color: '#000' }}
          >
            {hero.rarity.name}
          </span>
          <span className="bg-[#FFD500] text-black px-4 py-1.5 text-base md:text-xl font-bold rounded-md inline-block border-2 border-black/20 shadow-md">
            {hero.role}
          </span>
          <HeroFavoriteButton heroId={hero.id} initialFavorited={favorited} size="lg" />
        </div>
      </div>

      {/* 右侧文字区域 */}
      <div className="absolute top-1/2 right-[4%] md:right-[8%] -translate-y-1/2 w-[320px] md:w-[380px] space-y-4 md:space-y-6 hidden lg:block">
        <div
          className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 animate-val-slash-in val-init-hidden"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-2xl md:text-3xl font-black border-l-4 border-[#FFD500] text-white pl-4 mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            角色简介
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/95">{hero.desc}</p>
        </div>
        {hero.story && (
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 animate-val-slash-in val-init-hidden"
            style={{ animationDelay: '0.4s' }}
          >
            <h2 className="text-2xl md:text-3xl font-black border-l-4 border-[#FFD500] text-white pl-4 mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              背景故事
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/95">{hero.story}</p>
          </div>
        )}
      </div>
    </div>
  );
}
