'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface EventFavoriteButtonProps {
  itemType: 'team' | 'player' | 'match';
  itemId: string;
  title: string;
  imageUrl?: string;
  className?: string;
  showLabel?: boolean;
}

export default function EventFavoriteButton({
  itemType,
  itemId,
  title,
  imageUrl,
  className = '',
  showLabel = true,
}: EventFavoriteButtonProps) {
  const { status } = useSession();
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/user/favorites/events')
      .then(res => res.json())
      .then(data => {
        const list = data.favorites || [];
        setFavorited(list.some((f: { itemType: string; itemId: string }) => f.itemType === itemType && f.itemId === itemId));
      })
      .catch(() => {});
  }, [status, itemType, itemId]);

  async function toggle() {
    if (status !== 'authenticated') return;
    setLoading(true);
    try {
      const res = await fetch('/api/user/favorites/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemType, itemId, title, imageUrl }),
      });
      const data = await res.json();
      setFavorited(data.favorited);
    } finally {
      setLoading(false);
    }
  }

  if (status === 'unauthenticated') return null;

  return (
    <button
      onClick={toggle}
      disabled={loading || status === 'loading'}
      className={`inline-flex items-center justify-center gap-1.5 transition-all duration-300 ${
        favorited
          ? 'text-yellow-400 hover:text-yellow-300'
          : 'text-white/40 hover:text-yellow-400'
      } ${className}`}
      title={favorited ? '取消收藏' : '收藏'}
    >
      <span className="text-lg leading-none">{favorited ? '★' : '☆'}</span>
      {showLabel && <span className="text-sm font-bold">{favorited ? '已收藏' : '收藏'}</span>}
    </button>
  );
}
