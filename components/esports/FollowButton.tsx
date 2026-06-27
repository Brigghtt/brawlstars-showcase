'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

type FollowType = 'team' | 'player';

interface FollowButtonProps {
  type: FollowType;
  id: string;
  className?: string;
}

export default function FollowButton({ type, id, className = '' }: FollowButtonProps) {
  const { status } = useSession();
  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const endpoint = type === 'team' ? '/api/user/follows/teams' : '/api/user/follows/players';

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => setFollowed(Array.isArray(data.follows) && data.follows.includes(id)))
      .catch(() => {});
  }, [status, endpoint, id]);

  async function toggle() {
    if (status !== 'authenticated') return;
    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(type === 'team' ? { teamId: id } : { playerId: id }),
      });
      const data = await res.json();
      setFollowed(data.followed);
    } finally {
      setLoading(false);
    }
  }

  if (status === 'unauthenticated') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-bold text-white/35 ${className}`}>
        登录后可关注
      </span>
    );
  }

  return (
    <button
      onClick={toggle}
      disabled={loading || status === 'loading'}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-black transition-all duration-300 ${
        followed
          ? 'bg-[#FFD500] text-[#1A3A8A] hover:bg-[#FFD500]/90 shadow-lg shadow-[#FFD500]/20'
          : 'bg-white/[0.08] text-white/80 border border-white/[0.12] hover:bg-[#FFD500]/15 hover:border-[#FFD500]/30 hover:text-[#FFD500]'
      } ${className}`}
    >
      {followed ? '★ 已关注' : '+ 关注'}
    </button>
  );
}
