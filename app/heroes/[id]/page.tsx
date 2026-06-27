'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { heroDetailsData } from '@/lib/data';
import { useRecordView } from '@/hooks/useRecordView';
import HeroHeader from '@/components/hero-detail/HeroHeader';
import HeroDetailTOC from '@/components/hero-detail/HeroDetailTOC';
import GuideSection from '@/components/hero-detail/GuideSection';
import StatusSection from '@/components/hero-detail/StatusSection';
import SkillGrid from '@/components/hero-detail/SkillGrid';
import PinsSection from '@/components/hero-detail/PinsSection';
import BuffiesSection from '@/components/hero-detail/BuffiesSection';

type Props = { params: Promise<{ id: string }> };

function slugify(enName: string) {
  return enName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function HeroDetail({ params }: Props) {
  const { id } = use(params);
  const decodedId = decodeURIComponent(id);
  const { data: session, status } = useSession();
  const [favoriteHeroes, setFavoriteHeroes] = useState<string[]>([]);

  const hero = Object.values(heroDetailsData).find((h) =>
    h.id === decodedId ||
    String(h.apiId) === decodedId ||
    h.enName.toLowerCase() === decodedId.toLowerCase() ||
    slugify(h.enName) === decodedId
  );

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;
    fetch('/api/user/heroes')
      .then((res) => (res.ok ? res.json() : { favorites: [] }))
      .then((data: { favorites?: string[] }) => setFavoriteHeroes(data.favorites || []))
      .catch((error) => console.error('获取英雄收藏失败:', error));
  }, [session, status]);

  useRecordView('hero', hero?.id, hero?.name, hero?.image);

  if (!hero) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1c65e6] via-[#1a5ad4] to-[#1547a8] text-white flex items-center justify-center">
        <div className="text-3xl font-black">英雄不存在</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c65e6] via-[#1a5ad4] to-[#1547a8] text-white" suppressHydrationWarning>
      {/* 闪屏遮罩（入场白色闪光） */}
      <div
        className="animate-flash-overlay fixed inset-0 z-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(255,213,0,0.25) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)' }}
      />

      <HeroHeader hero={hero} favorited={favoriteHeroes.includes(hero.id)} />

      {/* 下方内容区 */}
      <div className="px-6 md:px-12 lg:px-20 pt-28 pb-16 bg-gradient-to-b from-[#1547a8] via-[#0d3a8f] to-[#0a2d73]">
        <div className="flex gap-8 max-w-[1600px] mx-auto">
          {/* 左侧/主内容 */}
          <div className="flex-1 space-y-8 min-w-0">
            {/* 移动端简介（桌面端在 HeroHeader 已显示） */}
            <div className="lg:hidden space-y-4 animate-val-slam-up val-init-hidden">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
                <h2 className="text-2xl font-black border-l-4 border-[#FFD500] pl-3 mb-2">角色简介</h2>
                <p className="text-white/95 text-sm leading-relaxed">{hero.desc}</p>
              </div>
              {hero.story && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
                  <h2 className="text-2xl font-black border-l-4 border-[#FFD500] pl-3 mb-2">背景故事</h2>
                  <p className="text-white/95 text-sm leading-relaxed">{hero.story}</p>
                </div>
              )}
            </div>

            <GuideSection title="属性 / 普攻 & 大招" id="status" defaultOpen delay={0.5}>
              <StatusSection hero={hero} />
            </GuideSection>

            <GuideSection title="随身妙具 Gadgets" id="gadgets" delay={0.55}>
              <SkillGrid items={hero.gadgets} emptyText="暂无随身妙具数据" />
            </GuideSection>

            <GuideSection title="星辉之力 Star Powers" id="starpowers" delay={0.6}>
              <SkillGrid items={hero.starPowers} emptyText="暂无星辉之力数据" />
            </GuideSection>

            <GuideSection title="极限充能 Hypercharge" id="hypercharge" delay={0.65}>
              {hero.hypercharge ? (
                <SkillGrid items={[hero.hypercharge]} />
              ) : (
                <div className="text-white/60 text-center py-8 bg-white/5 rounded-xl border border-white/10">
                  该英雄暂无极限充能
                </div>
              )}
            </GuideSection>

            <GuideSection title="装备 Gears" id="gears" delay={0.7}>
              <SkillGrid items={hero.gears} emptyText="暂无装备数据" />
            </GuideSection>

            <GuideSection title="芭菲 Buffies" id="buffies" delay={0.75}>
              <BuffiesSection buffies={hero.buffies} />
            </GuideSection>

            <GuideSection title="表情 Pins" id="pins" delay={0.85}>
              <PinsSection pins={hero.pins} />
            </GuideSection>

            {/* 返回按钮 */}
            <div
              className="animate-val-slam-up val-init-hidden"
              style={{ animationDelay: '0.9s' }}
            >
              <Link
                href="/#hero"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD500] via-[#FFC300] to-[#FFB300] text-black px-10 py-5 rounded-xl font-black text-xl hover:from-[#FFE140] hover:to-[#FFD500] hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,213,0,0.5)] transition-all duration-300 border-3 border-black/20 shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
                返回英雄图鉴
              </Link>
            </div>
          </div>

          {/* 右侧目录（桌面端） */}
          <div className="hidden xl:block w-44 shrink-0">
            <HeroDetailTOC />
          </div>
        </div>
      </div>
    </main>
  );
}
