'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getMapNameCn } from '@/lib/data/mapTranslations';

interface BrawlGameMode {
  name?: string;
  imageUrl?: string;
}

interface BrawlMap {
  id: number | string;
  name: string;
  imageUrl?: string;
  gameMode?: BrawlGameMode;
}

const modeNameCnMap: Record<string, string> = {
  Showdown: '荒野决斗',
  'Brawl Ball': '乱斗足球',
  'Brawl Ball 5v5': '乱斗足球5v5',
  Knockout: '乱斗淘汰赛',
  'Knockout 5v5': '乱斗淘汰赛5v5',
  'Gem Grab': '宝石争霸',
  'Gem Grab 5v5': '宝石争霸5v5',
  Heist: '金库攻防',
  Bounty: '赏金猎人',
  'Hot Zone': '热区争夺',
  Duels: '车轮擂台赛',
  Hockey: '乱斗冰球',
  'Hockey Brawl': '乱斗冰球',
  'Brawl Hockey': '乱斗冰球',
  'Basket Brawl': '乱斗篮球',
  'Basket Brawl 5v5': '乱斗篮球5v5',
  Hunters: '乱斗竞技场',
  'Brawl Arena': '乱斗竞技场',
  Wipeout: '积分争夺赛',
  'Wipeout 5v5': '积分争夺赛5v5',
};

const modeColorMap: Record<string, string> = {
  Showdown: '#82d327',
  'Brawl Ball': '#8a9edc',
  'Brawl Ball 5v5': '#8a9edc',
  Knockout: '#f5811e',
  'Knockout 5v5': '#f5811e',
  'Gem Grab': '#9c3ef4',
  'Gem Grab 5v5': '#9c3ef4',
  Heist: '#d55cd3',
  Bounty: '#07cefb',
  'Hot Zone': '#dc3c52',
  Duels: '#d81c0f',
  Hockey: '#1b4ec2',
  'Hockey Brawl': '#1b4ec2',
  'Brawl Hockey': '#1b4ec2',
  'Basket Brawl': '#31a3d1',
  'Basket Brawl 5v5': '#31a3d1',
  Hunters: '#1278f1',
  'Brawl Arena': '#1278f1',
  Wipeout: '#f5811e',
  'Wipeout 5v5': '#f5811e',
};

function normalizeModeName(name?: string): string {
  if (!name) return '';
  if (/showdown/i.test(name)) return 'Showdown';
  if (/wipeout/i.test(name)) return 'Wipeout';
  return name;
}

export default function FavoritesPage() {
  const { data: session, status } = useSession();
  const [allMaps, setAllMaps] = useState<BrawlMap[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const [mapsRes, favRes] = await Promise.all([
          fetch('/api/brawl-data'),
          session?.user?.id ? fetch('/api/user/favorites') : Promise.resolve(null),
        ]);

        if (mapsRes.ok) {
          const data = await mapsRes.json();
          const mapsData = data.maps;
          let actualMapsArray: BrawlMap[] = [];
          if (Array.isArray(mapsData)) {
            actualMapsArray = mapsData;
          } else if (mapsData && Array.isArray(mapsData.list)) {
            actualMapsArray = mapsData.list;
          } else if (mapsData && Array.isArray(mapsData.items)) {
            actualMapsArray = mapsData.items;
          }
          actualMapsArray = actualMapsArray.map((map) => ({
            ...map,
            gameMode: map.gameMode
              ? { ...map.gameMode, name: normalizeModeName(map.gameMode.name) }
              : undefined,
          }));
          setAllMaps(actualMapsArray);
        }

        if (favRes && favRes.ok) {
          const favData = await favRes.json();
          setFavorites(favData.favorites || []);
        }
      } catch (error) {
        console.error('加载收藏页面失败:', error);
      } finally {
        setLoading(false);
      }
    }

    if (status !== 'loading') {
      init();
    }
  }, [session, status]);

  const dedupedAllMaps = useMemo(() => {
    const seen = new Set<string>();
    return allMaps.filter((map) => {
      if (!map.name || seen.has(map.name)) return false;
      seen.add(map.name);
      return true;
    });
  }, [allMaps]);

  const favoriteMaps = useMemo(
    () => dedupedAllMaps.filter((map) => favorites.includes(map.name)),
    [dedupedAllMaps, favorites]
  );

  const recentFavorites = useMemo(() => favoriteMaps.slice(0, 4), [favoriteMaps]);

  const modeStats = useMemo(() => {
    const counts: Record<string, number> = {};
    favoriteMaps.forEach((map) => {
      const mode = map.gameMode?.name;
      if (mode) counts[mode] = (counts[mode] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([mode, count]) => ({
        mode,
        cnName: modeNameCnMap[mode] || mode,
        color: modeColorMap[mode] || '#FFD500',
        count,
        percentage: favoriteMaps.length > 0 ? Math.round((count / favoriteMaps.length) * 100) : 0,
      }));
  }, [favoriteMaps]);

  const recommendedMaps = useMemo(() => {
    if (favoriteMaps.length === 0) return [];
    const modeCounts: Record<string, number> = {};
    favoriteMaps.forEach((map) => {
      const mode = map.gameMode?.name;
      if (mode) modeCounts[mode] = (modeCounts[mode] || 0) + 1;
    });

    const preferredModes = Object.entries(modeCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([mode]) => mode);

    const favoriteNames = new Set(favorites);
    const candidates = dedupedAllMaps.filter(
      (map) => !favoriteNames.has(map.name) && map.gameMode?.name && preferredModes.includes(map.gameMode.name)
    );

    candidates.sort((a, b) => {
      const idxA = preferredModes.indexOf(a.gameMode?.name || '');
      const idxB = preferredModes.indexOf(b.gameMode?.name || '');
      return idxA - idxB;
    });

    return candidates.slice(0, 8);
  }, [dedupedAllMaps, favoriteMaps, favorites]);

  async function toggleFavorite(mapName: string) {
    try {
      const res = await fetch('/api/user/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mapName }),
      });
      if (!res.ok) throw new Error('同步收藏失败');
      const data = await res.json();
      setFavorites((prev) =>
        data.favorited ? [...prev, mapName] : prev.filter((n) => n !== mapName)
      );
    } catch (error) {
      console.error('切换收藏失败:', error);
    }
  }

  if (status === 'loading' || loading) {
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
          <p className="text-zinc-400 mb-6">登录后查看你的地图收藏与个性化推荐。</p>
          <Link
            href="/login?callbackUrl=/favorites"
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
        {/* 欢迎 header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            👋 欢迎回来，{userName}
          </h1>
          <p className="text-zinc-400">
            你当前共收藏了 <span className="text-yellow-400 font-black">{favoriteMaps.length}</span> 张地图
          </p>
        </div>

        {favoriteMaps.length === 0 ? (
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 text-center mb-12">
            <p className="text-zinc-300 mb-4">你还没有收藏任何地图。</p>
            <Link
              href="/#map"
              className="inline-block px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors"
            >
              去地图板块逛逛
            </Link>
          </div>
        ) : (
          <>
            {/* 统计卡片 */}
            <section className="mb-10">
              <h2 className="text-xl font-black text-white mb-4">📊 你的收藏偏好</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <p className="text-zinc-400 text-sm font-bold mb-1">总收藏数</p>
                  <p className="text-3xl font-black text-yellow-400">{favoriteMaps.length}</p>
                </div>
                {modeStats.map((stat) => (
                  <div
                    key={stat.mode}
                    className="bg-black/40 border border-white/10 rounded-2xl p-5"
                    style={{ borderLeftWidth: '6px', borderLeftColor: stat.color }}
                  >
                    <p className="text-zinc-400 text-sm font-bold mb-1">{stat.cnName}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-black text-white">{stat.count}</p>
                      <p className="text-sm text-zinc-500 font-bold mb-1.5">张</p>
                    </div>
                    <div className="mt-2 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 最近收藏 */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black text-white">🕐 最近收藏</h2>
                <span className="text-xs text-zinc-500 font-bold">按收藏时间倒序</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recentFavorites.map((map) => (
                  <MapCard
                    key={map.name}
                    map={map}
                    favorited
                    onToggle={() => toggleFavorite(map.name)}
                  />
                ))}
              </div>
            </section>

            {/* 全部收藏 */}
            <section className="mb-12">
              <h2 className="text-xl font-black text-white mb-4">⭐ 全部收藏</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favoriteMaps.map((map) => (
                  <MapCard
                    key={map.name}
                    map={map}
                    favorited
                    onToggle={() => toggleFavorite(map.name)}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {recommendedMaps.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-white mb-2">🎯 猜你喜欢</h2>
            <p className="text-zinc-400 mb-6 text-sm">基于你收藏地图的模式偏好推荐</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedMaps.map((map) => (
                <MapCard
                  key={map.name}
                  map={map}
                  favorited={favorites.includes(map.name)}
                  onToggle={() => toggleFavorite(map.name)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function MapCard({
  map,
  favorited,
  onToggle,
}: {
  map: BrawlMap;
  favorited: boolean;
  onToggle: () => void;
}) {
  const modeName = map.gameMode?.name || '';
  const cnName = getMapNameCn(map.name);

  return (
    <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all">
      <div className="aspect-[16/10] overflow-hidden bg-neutral-800">
        {map.imageUrl ? (
          <img
            src={map.imageUrl}
            alt={cnName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">暂无图片</div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          {map.gameMode?.imageUrl && (
            <img src={map.gameMode.imageUrl} alt="" className="w-5 h-5 object-contain" />
          )}
          <span className="text-xs font-bold text-zinc-400">{modeNameCnMap[modeName] || modeName}</span>
        </div>
        <h3 className="text-sm font-black text-white truncate">{cnName}</h3>
      </div>
      <button
        onClick={onToggle}
        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-lg transition-all ${
          favorited ? 'bg-yellow-400 text-black' : 'bg-black/60 text-white hover:bg-black/80'
        }`}
        title={favorited ? '取消收藏' : '收藏'}
      >
        {favorited ? '★' : '☆'}
      </button>
    </div>
  );
}
