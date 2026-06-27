'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { heroDetailsData } from '@/lib/data';

interface UserProfile {
  id: string;
  email: string;
  name?: string | null;
  nickname?: string | null;
  image?: string | null;
  avatarUrl?: string | null;
}

type Tab = 'avatar' | 'collection';

export default function ProfileSettingsPage() {
  const { data: session, status, update } = useSession();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [nickname, setNickname] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [favoritePins, setFavoritePins] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('avatar');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const allPins = useMemo(() => {
    const pins = new Set<string>();
    Object.values(heroDetailsData).forEach((hero) => {
      hero.pins?.forEach((pin) => pins.add(pin));
    });
    return Array.from(pins);
  }, []);

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;

    async function init() {
      try {
        const [profileRes, pinsRes] = await Promise.all([
          fetch('/api/user/profile'),
          fetch('/api/user/pins'),
        ]);

        if (profileRes.ok) {
          const data = (await profileRes.json()) as { user?: UserProfile };
          if (data?.user) {
            setProfile(data.user);
            setNickname(data.user.nickname || '');
            setSelectedAvatar(data.user.avatarUrl || null);
          }
        }
        if (pinsRes.ok) {
          const data = (await pinsRes.json()) as { pins?: string[] };
          setFavoritePins(data.pins || []);
        }
      } catch (error) {
        console.error('获取资料失败:', error);
      }
    }

    init();
  }, [session, status]);

  async function handleSave() {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: nickname.trim(),
          avatarUrl: selectedAvatar,
        }),
      });
      if (!res.ok) throw new Error('保存失败');
      const data = (await res.json()) as { user: UserProfile };
      setProfile(data.user);
      await update({
        user: {
          nickname: data.user.nickname,
          avatarUrl: data.user.avatarUrl,
        },
      });
      setMessage('资料已保存');
    } catch (error) {
      console.error(error);
      setMessage('保存失败，请重试');
    } finally {
      setSaving(false);
    }
  }

  async function togglePin(pinUrl: string) {
    try {
      const res = await fetch('/api/user/pins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pinUrl }),
      });
      if (!res.ok) throw new Error('同步失败');
      const data = (await res.json()) as { favorited: boolean };
      setFavoritePins((prev) =>
        data.favorited ? [...prev, pinUrl] : prev.filter((p) => p !== pinUrl)
      );
    } catch (error) {
      console.error('切换表情收藏失败:', error);
    }
  }

  if (status === 'loading' || (!profile && session?.user)) {
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
            href="/login?callbackUrl=/profile/settings"
            className="inline-block px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors"
          >
            去登录
          </Link>
        </div>
      </main>
    );
  }

  const displayName = profile?.nickname || profile?.name || profile?.email || '玩家';
  const currentAvatar = selectedAvatar || profile?.avatarUrl || profile?.image;

  return (
    <main className="min-h-screen bg-[#1a1a2e] pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">⚙️ 个人资料设置</h1>
            <p className="text-zinc-400">定制你的昵称与头像，管理喜欢的英雄表情</p>
          </div>
          <Link
            href="/profile/card"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm hover:opacity-90 transition-opacity text-center"
          >
            🎴 生成分享卡片
          </Link>
        </div>

        {message && (
          <div className={`mb-6 px-4 py-3 rounded-xl font-bold text-sm ${
            message === '资料已保存'
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : 'bg-red-500/20 border border-red-500/30 text-red-300'
          }`}>
            {message}
          </div>
        )}

        {/* 当前资料预览 */}
        <section className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-black text-white mb-4">当前资料</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-yellow-400 overflow-hidden flex items-center justify-center">
              {currentAvatar ? (
                <img src={currentAvatar} alt="头像" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl">🎮</span>
              )}
            </div>
            <div>
              <p className="text-white font-black text-lg">{displayName}</p>
              <p className="text-zinc-400 text-sm">{profile?.email}</p>
            </div>
          </div>
        </section>

        {/* 昵称设置 */}
        <section className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-black text-white mb-4">📝 昵称</h2>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="给自己起个酷炫的昵称"
            maxLength={20}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          />
          <p className="text-zinc-500 text-xs mt-2">{nickname.length}/20 字符</p>
        </section>

        {/* 表情标签页 */}
        <section className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab('avatar')}
              className={`text-lg font-black pb-2 border-b-4 transition-colors ${
                activeTab === 'avatar'
                  ? 'text-yellow-400 border-yellow-400'
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              🎭 选择头像
            </button>
            <button
              onClick={() => setActiveTab('collection')}
              className={`text-lg font-black pb-2 border-b-4 transition-colors ${
                activeTab === 'collection'
                  ? 'text-yellow-400 border-yellow-400'
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              ❤️ 我的表情库 ({favoritePins.length})
            </button>
          </div>

          {activeTab === 'avatar' && (
            <>
              <p className="text-zinc-400 text-sm mb-4">
                点击表情即可设为头像，点击右上角心形可收藏到表情库。
              </p>
              <PinGrid
                pins={allPins}
                favoritePins={favoritePins}
                selectedPin={selectedAvatar}
                onSelect={setSelectedAvatar}
                onToggleFavorite={togglePin}
              />
            </>
          )}

          {activeTab === 'collection' && (
            <>
              {favoritePins.length === 0 ? (
                <p className="text-zinc-400 text-center py-8">你还没有收藏任何表情，去「选择头像」里点心形收藏吧！</p>
              ) : (
                <>
                  <p className="text-zinc-400 text-sm mb-4">
                    这里是你收藏的表情，点击即可快速设为头像，再次点击心形取消收藏。
                  </p>
                  <PinGrid
                    pins={favoritePins}
                    favoritePins={favoritePins}
                    selectedPin={selectedAvatar}
                    onSelect={setSelectedAvatar}
                    onToggleFavorite={togglePin}
                  />
                </>
              )}
            </>
          )}
        </section>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-all disabled:opacity-60"
          >
            {saving ? '保存中...' : '保存资料'}
          </button>
          <Link
            href="/"
            className="px-8 py-3 rounded-2xl bg-white/10 text-white font-black hover:bg-white/20 transition-all"
          >
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}

function PinGrid({
  pins,
  favoritePins,
  selectedPin,
  onSelect,
  onToggleFavorite,
}: {
  pins: string[];
  favoritePins: string[];
  selectedPin: string | null;
  onSelect: (pin: string) => void;
  onToggleFavorite: (pin: string) => void;
}) {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
      {pins.map((pin) => {
        const isFavorited = favoritePins.includes(pin);
        const isSelected = selectedPin === pin;
        return (
          <div key={pin} className="relative group">
            <button
              onClick={() => onSelect(pin)}
              className={`w-full aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-110 ${
                isSelected ? 'border-yellow-400 ring-2 ring-yellow-400/50' : 'border-transparent'
              }`}
            >
              <img src={pin} alt="表情" className="w-full h-full object-contain bg-neutral-800" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(pin);
              }}
              className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md transition-all ${
                isFavorited ? 'bg-red-500 text-white' : 'bg-black/60 text-white opacity-0 group-hover:opacity-100'
              }`}
              title={isFavorited ? '取消收藏' : '收藏表情'}
            >
              {isFavorited ? '♥' : '♡'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
