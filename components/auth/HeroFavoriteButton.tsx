'use client';

import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

interface HeroFavoriteButtonProps {
  heroId: string;
  initialFavorited?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function HeroFavoriteButton({
  heroId,
  initialFavorited = false,
  size = 'md',
  className = '',
}: HeroFavoriteButtonProps) {
  const { data: session } = useSession();
  const [favorited, setFavorited] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  async function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.user) {
      signIn('credentials', { callbackUrl: window.location.href });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/user/heroes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ heroId }),
      });
      if (!res.ok) throw new Error('同步失败');
      const data = await res.json();
      setFavorited(data.favorited);
    } catch (error) {
      console.error('切换英雄收藏失败:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`rounded-full flex items-center justify-center font-black shadow-lg transition-all ${
        favorited
          ? 'bg-yellow-400 text-black'
          : 'bg-black/60 text-white hover:bg-black/80'
      } ${sizeClasses[size]} ${className}`}
      title={favorited ? '取消收藏' : '收藏英雄'}
    >
      {favorited ? '★' : '☆'}
    </button>
  );
}
