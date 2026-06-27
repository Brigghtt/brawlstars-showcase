'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { heroDetailsData } from '@/lib/data';
import type { HeroDetailV2 } from '@/lib/data';

interface FavoriteRecord {
  heroId: string;
  createdAt: string;
}

export default function HeroFavoritesPage() {
  const { data: session, status } = useSession();
  const [favoriteRecords, setFavoriteRecords] = useState<FavoriteRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const isLoading = status === 'loading' || dataLoading;

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;

    async function init() {
      setDataLoading(true);
      try {
        const res = await fetch('/api/user/heroes');
        if (res.ok) {
          const data = (await res.json()) as { favorites?: string[] };
          const favorites = data.favorites || [];
          setFavoriteRecords(
            favorites.map((heroId) => ({
              heroId,
              createdAt: new Date().toISOString(),
            }))
          );
        }
      } catch (error) {
        console.error('加载英雄收藏失败:', error);
      } finally {
        setDataLoading(false);
      }
    }

    init();
  }, [session, status]);

  const favoriteHeroes = useMemo(() => {
    return favoriteRecords
      .map((record) => heroDetailsData[record.heroId])
      .filter(Boolean) as HeroDetailV2[];
  }, [favoriteRecords]);

  const recentFavorites = useMemo(() => favoriteHeroes.slice(0, 4), [favoriteHeroes]);

  const roleStats = useMemo(() => {
    const counts: Record<string, number> = {};
    favoriteHeroes.forEach((hero) => {
      if (hero.role) counts[hero.role] = (counts[hero.role] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([role, count]) => ({
        role,
        count,
        percentage: favoriteHeroes.length > 0 ? Math.round((count / favoriteHeroes.length) * 100) : 0,
      }));
  }, [favoriteHeroes]);

  const recommendedHeroes = useMemo(() => {
    if (favoriteHeroes.length === 0) return [];
    const roleCounts: Record<string, number> = {};
    favoriteHeroes.forEach((hero) => {
      if (hero.role) roleCounts[hero.role] = (roleCounts[hero.role] || 0) + 1;
    });

    const preferredRoles = Object.entries(roleCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([role]) => role);

    const favoriteIds = new Set(favoriteHeroes.map((h) => h.id));
    const candidates = Object.values(heroDetailsData).filter(
      (hero) => !favoriteIds.has(hero.id) && hero.role && preferredRoles.includes(hero.role)
    );

    candidates.sort((a, b) => {
      const idxA = preferredRoles.indexOf(a.role);
      const idxB = preferredRoles.indexOf(b.role);
      return idxA - idxB;
    });

    return candidates.slice(0, 8);
  }, [favoriteHeroes]);

  async function toggleFavorite(heroId: string) {
    try {
      const res = await fetch('/api/user/heroes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ heroId }),
      });
      if (!res.ok) throw new Error('同步失败');
      const refreshRes = await fetch('/api/user/heroes');
      if (refreshRes.ok) {
        const data = (await refreshRes.json()) as { favorites?: string[] };
        setFavoriteRecords(
          (data.favorites || []).map((id) => ({ heroId: id, createdAt: new Date().toISOString() }))
        );
      }
    } catch (error) {
      console.error('切换英雄收藏失败:', error);
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1a1a2e] pt-20">
        <div className="text-yellow-400 font-black text-xl animate-pulse">加载中...</div>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1a1a2e] pt-20 px-6">
        <div className="text-center max-w-md bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8">
          <h1 className="text-2xl font-black text-white mb-4">需要先登录</h1>
          <p className="text-zinc-400 mb-6">登录后查看你的英雄收藏与个性化推荐。</p>
          <Link
            href="/login?callbackUrl=/heroes/favorites"
            className="inline-block px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors"
          >
            去登录
          </Link>
        </div>
      </main>
    );
  }

  const userName = session.user.name || session.user.email || '玩家';

  return (
    <main className="min-h-screen bg-[#1a1a2e] pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            🦸 {userName} 的英雄收藏
          </h1>
          <p className="text-zinc-400">
            你当前共收藏了 <span className="text-yellow-400 font-black">{favoriteHeroes.length}</span> 位英雄
          </p>
        </div>

        {favoriteHeroes.length === 0 ? (
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 text-center mb-12">
            <p className="text-zinc-300 mb-4">你还没有收藏任何英雄。</p>
            <Link
              href="/#hero"
              className="inline-block px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors"
            >
              去英雄图鉴逛逛
            </Link>
          </div>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="text-xl font-black text-white mb-4">📊 你的英雄偏好</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <p className="text-zinc-400 text-sm font-bold mb-1">总收藏数</p>
                  <p className="text-3xl font-black text-yellow-400">{favoriteHeroes.length}</p>
                </div>
                {roleStats.map((stat) => (
                  <div
                    key={stat.role}
                    className="bg-black/40 border border-white/10 rounded-2xl p-5 border-l-[6px] border-l-[#FFD500]"
                  >
                    <p className="text-zinc-400 text-sm font-bold mb-1">{stat.role}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-black text-white">{stat.count}</p>
                      <p className="text-sm text-zinc-500 font-bold mb-1.5">位</p>
                    </div>
                    <div className="mt-2 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#FFD500]"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black text-white">🕐 最近收藏</h2>
                <span className="text-xs text-zinc-500 font-bold">按收藏时间倒序</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {recentFavorites.map((hero) => (
                  <HeroCard key={hero.id} hero={hero} favorited onToggle={() => toggleFavorite(hero.id)} />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-white mb-4">⭐ 全部收藏</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {favoriteHeroes.map((hero) => (
                  <HeroCard key={hero.id} hero={hero} favorited onToggle={() => toggleFavorite(hero.id)} />
                ))}
              </div>
            </section>
          </>
        )}

        {recommendedHeroes.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-white mb-2">🎯 猜你喜欢的英雄</h2>
            <p className="text-zinc-400 mb-6 text-sm">基于你收藏英雄的职位偏好推荐</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recommendedHeroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  hero={hero}
                  favorited={favoriteHeroes.some((h) => h.id === hero.id)}
                  onToggle={() => toggleFavorite(hero.id)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function HeroCard({
  hero,
  favorited,
  onToggle,
}: {
  hero: HeroDetailV2;
  favorited: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all">
      <Link href={`/heroes/${hero.slug}`}>
        <div className="aspect-[3/2] overflow-hidden bg-neutral-800">
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: hero.rarity.color, color: '#000' }}
          >
            {hero.rarity.name}
          </span>
        </div>
        <h3 className="text-sm font-black text-white truncate">{hero.name}</h3>
        <p className="text-xs text-zinc-500">{hero.role}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg transition-all ${
          favorited ? 'bg-yellow-400 text-black' : 'bg-black/60 text-white hover:bg-black/80'
        }`}
        title={favorited ? '取消收藏' : '收藏英雄'}
      >
        {favorited ? '★' : '☆'}
      </button>
    </div>
  );
}
