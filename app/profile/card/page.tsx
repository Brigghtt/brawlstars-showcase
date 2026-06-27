'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import html2canvas from 'html2canvas';
import { heroDetailsData } from '@/lib/data';

interface UserProfile {
  id: string;
  email: string;
  name?: string | null;
  nickname?: string | null;
  image?: string | null;
  avatarUrl?: string | null;
}

interface FavoriteHero {
  heroId: string;
}

interface FavoriteMap {
  mapName: string;
}

interface ViewRecord {
  itemType: string;
}

export default function ProfileCardPage() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [favoriteHeroes, setFavoriteHeroes] = useState<FavoriteHero[]>([]);
  const [favoriteMaps, setFavoriteMaps] = useState<FavoriteMap[]>([]);
  const [views, setViews] = useState<ViewRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isLoading = status === 'loading' || dataLoading;

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;

    async function init() {
      setDataLoading(true);
      try {
        const [profileRes, heroesRes, mapsRes, viewsRes] = await Promise.all([
          fetch('/api/user/profile'),
          fetch('/api/user/heroes'),
          fetch('/api/user/favorites'),
          fetch('/api/user/views'),
        ]);

        if (profileRes.ok) {
          const data = (await profileRes.json()) as { user: UserProfile };
          setProfile(data.user);
        }
        if (heroesRes.ok) {
          const data = (await heroesRes.json()) as { favorites?: string[] };
          setFavoriteHeroes((data.favorites || []).map((heroId) => ({ heroId })));
        }
        if (mapsRes.ok) {
          const data = (await mapsRes.json()) as { favorites?: string[] };
          setFavoriteMaps((data.favorites || []).map((mapName) => ({ mapName })));
        }
        if (viewsRes.ok) {
          const data = (await viewsRes.json()) as { views?: ViewRecord[] };
          setViews(data.views || []);
        }
      } catch (error) {
        console.error('加载分享卡片数据失败:', error);
      } finally {
        setDataLoading(false);
      }
    }

    init();
  }, [session, status]);

  const stats = useMemo(() => {
    const heroRoles: Record<string, number> = {};
    favoriteHeroes.forEach((fh) => {
      const hero = heroDetailsData[fh.heroId];
      if (hero?.role) heroRoles[hero.role] = (heroRoles[hero.role] || 0) + 1;
    });
    const topRole = Object.entries(heroRoles).sort((a, b) => b[1] - a[1])[0]?.[0];

    const viewTypes: Record<string, number> = {};
    views.forEach((v) => {
      viewTypes[v.itemType] = (viewTypes[v.itemType] || 0) + 1;
    });
    const topViewType = Object.entries(viewTypes).sort((a, b) => b[1] - a[1])[0]?.[0];

    const typeNames: Record<string, string> = {
      map: '地图',
      hero: '英雄',
      mode: '模式',
    };

    return {
      mapCount: favoriteMaps.length,
      heroCount: favoriteHeroes.length,
      viewCount: views.length,
      topRole,
      favoriteType: topViewType ? typeNames[topViewType] || topViewType : undefined,
    };
  }, [favoriteHeroes, favoriteMaps, views]);

  async function downloadCard() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `荒野资料站-${displayName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('生成卡片失败:', error);
      alert('生成图片失败，请重试');
    } finally {
      setDownloading(false);
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
          <Link
            href="/login?callbackUrl=/profile/card"
            className="inline-block px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors"
          >
            去登录
          </Link>
        </div>
      </main>
    );
  }

  const displayName = profile?.nickname || profile?.name || profile?.email || '玩家';
  const avatarUrl = profile?.avatarUrl || profile?.image;

  return (
    <main className="min-h-screen bg-[#1a1a2e] pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">🎴 个人分享卡片</h1>
        <p className="text-zinc-400 mb-8">生成一张属于你的荒野资料站名片，保存后分享给朋友</p>

        {/* 卡片预览 */}
        <div className="flex justify-center mb-8">
          <div
            ref={cardRef}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-8 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, #1c65e6 0%, #9c3ef4 50%, #f5811e 100%)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
          >
            {/* 装饰圆 */}
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white border-4 border-yellow-400 overflow-hidden flex items-center justify-center shadow-lg">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="头像" className="w-full h-full object-cover" crossOrigin="anonymous" />
                  ) : (
                    <span className="text-3xl">🎮</span>
                  )}
                </div>
                <div>
                  <p className="text-white/80 text-sm font-bold">荒野乱斗资料站</p>
                  <h2 className="text-3xl font-black text-white">{displayName}</h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <p className="text-white/70 text-xs font-bold mb-1">收藏地图</p>
                  <p className="text-3xl font-black text-yellow-400">{stats.mapCount}</p>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <p className="text-white/70 text-xs font-bold mb-1">收藏英雄</p>
                  <p className="text-3xl font-black text-yellow-400">{stats.heroCount}</p>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <p className="text-white/70 text-xs font-bold mb-1">最近浏览</p>
                  <p className="text-3xl font-black text-yellow-400">{stats.viewCount}</p>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <p className="text-white/70 text-xs font-bold mb-1">最爱职位</p>
                  <p className="text-lg font-black text-white truncate">{stats.topRole || '未知'}</p>
                </div>
              </div>

              {stats.favoriteType && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <p className="text-white/80 text-sm">
                    最近最爱看：<span className="text-yellow-400 font-black">{stats.favoriteType}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="relative z-10 mt-auto pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs font-bold">brawl-insights.example.com</p>
              <p className="text-white/50 text-xs">来荒野乱斗资料站发现更多</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={downloadCard}
            disabled={downloading}
            className="px-8 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-all disabled:opacity-60"
          >
            {downloading ? '生成中...' : '💾 保存为图片'}
          </button>
          <Link
            href="/profile/settings"
            className="px-8 py-3 rounded-2xl bg-white/10 text-white font-black hover:bg-white/20 transition-all"
          >
            修改资料
          </Link>
          <Link
            href="/profile"
            className="px-8 py-3 rounded-2xl bg-white/10 text-white font-black hover:bg-white/20 transition-all"
          >
            返回个人中心
          </Link>
        </div>
      </div>
    </main>
  );
}
