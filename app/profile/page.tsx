'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface ViewRecord {
  id: string;
  itemType: 'map' | 'hero' | 'mode';
  itemId: string;
  title: string;
  imageUrl?: string;
  viewedAt: string;
}

interface UserProfile {
  id: string;
  email: string;
  name?: string | null;
  nickname?: string | null;
  image?: string | null;
  avatarUrl?: string | null;
}

const typeLabels: Record<string, string> = {
  map: '地图',
  hero: '英雄',
  mode: '模式',
};

const typePaths: Record<string, (id: string) => string> = {
  map: () => '/#map',
  hero: (id) => `/heroes/${id}`,
  mode: (id) => `/modes/${id}`,
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [views, setViews] = useState<ViewRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const isLoading = status === 'loading' || dataLoading;

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;

    async function init() {
      setDataLoading(true);
      try {
        const [profileRes, viewsRes] = await Promise.all([
          fetch('/api/user/profile'),
          fetch('/api/user/views'),
        ]);

        if (profileRes.ok) {
          const data = (await profileRes.json()) as { user: UserProfile };
          setProfile(data.user);
        }
        if (viewsRes.ok) {
          const data = (await viewsRes.json()) as { views: ViewRecord[] };
          setViews(data.views);
        }
      } catch (error) {
        console.error('加载个人中心失败:', error);
      } finally {
        setDataLoading(false);
      }
    }

    init();
  }, [session, status]);

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
            href="/login?callbackUrl=/profile"
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
      <div className="max-w-5xl mx-auto">
        {/* 资料卡 */}
        <section className="bg-black/40 border border-white/10 rounded-3xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-neutral-800 border-4 border-yellow-400 overflow-hidden flex items-center justify-center">
              {avatarUrl ? (
                <img src={avatarUrl} alt="头像" className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl">🎮</span>
              )}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-black text-white mb-1">{displayName}</h1>
              <p className="text-zinc-400 mb-4">{profile?.email}</p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <Link
                  href="/favorites"
                  className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-black text-sm hover:bg-yellow-300 transition-colors"
                >
                  ⭐ 我的地图
                </Link>
                <Link
                  href="/heroes/favorites"
                  className="px-5 py-2 rounded-xl bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-colors"
                >
                  🦸 我的英雄
                </Link>
                <Link
                  href="/profile/settings"
                  className="px-5 py-2 rounded-xl bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-colors"
                >
                  ⚙️ 资料设置
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 最近浏览 */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">🕐 最近浏览</h2>
          {views.length === 0 ? (
            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-zinc-400">你还没有浏览记录，快去逛逛地图、英雄和模式吧！</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {views.map((view) => (
                <Link
                  key={view.id}
                  href={typePaths[view.itemType](view.itemId)}
                  className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-neutral-800">
                    {view.imageUrl ? (
                      <img
                        src={view.imageUrl}
                        alt={view.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
                        暂无图片
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <span className="text-xs font-bold text-yellow-400">{typeLabels[view.itemType]}</span>
                    <h3 className="text-sm font-black text-white truncate">{view.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      {new Date(view.viewedAt).toLocaleDateString('zh-CN')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
