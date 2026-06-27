'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (status === 'loading') {
    return (
      <div className="w-9 h-9 rounded-full bg-[#1A3A8A]/10 animate-pulse" />
    );
  }

  if (!session?.user) {
    return (
      <Link
        href="/login"
        className="px-4 py-2 rounded-xl bg-[#1A3A8A] text-[#FFD500] font-black text-sm hover:bg-[#122a66] transition-colors"
      >
        登录
      </Link>
    );
  }

  const userName = session.user.nickname || session.user.name || session.user.email || '玩家';
  const userImage = session.user.avatarUrl || session.user.image;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-[#1A3A8A]/10 hover:bg-[#1A3A8A]/20 transition-colors"
      >
        {userImage ? (
          <img
            src={userImage}
            alt={userName}
            className="w-7 h-7 rounded-full object-cover"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-[#1A3A8A] text-[#FFD500] flex items-center justify-center text-xs font-black">
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm font-black text-[#1A3A8A] max-w-[80px] truncate hidden sm:inline">
          {userName}
        </span>
        <svg
          className={`w-4 h-4 text-[#1A3A8A] transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden z-50 border-2 border-[#FFD500]">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-xs text-gray-500">当前登录</p>
            <p className="text-sm font-black text-[#1A3A8A] truncate">{userName}</p>
          </div>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>🏠</span>
            个人中心
          </Link>
          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>⭐</span>
            我的地图
          </Link>
          <Link
            href="/heroes/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>🦸</span>
            我的英雄
          </Link>
          <Link
            href="/events/my"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>🏆</span>
            我的赛事
          </Link>
          <Link
            href="/profile/card"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>🎴</span>
            分享卡片
          </Link>
          <Link
            href="/profile/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1A3A8A] hover:bg-[#FFD500]/20 transition-colors"
          >
            <span>⚙️</span>
            资料设置
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              signOut({ callbackUrl: '/' });
            }}
            className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors text-left"
          >
            <span>🚪</span>
            退出登录
          </button>
        </div>
      )}
    </div>
  );
}
