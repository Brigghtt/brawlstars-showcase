'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { navMenus } from '@/lib/data';
import UserMenu from '@/components/auth/UserMenu';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const mobileRef = useRef<HTMLDivElement>(null);
  const isOnHome = pathname === '/';

  // 滚动检测
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('scroll', onScroll);
    };
  }, []);

  // IntersectionObserver：监听首页各 section 的可见区域，动态切换底部高亮条
  useEffect(() => {
    if (!isOnHome) return;

    const sectionIds = ['banner', 'hero', 'mode', 'map', 'events'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const topId = visible[0].target.id;
          setActiveSection(topId === 'banner' ? '/' : `/#${topId}`);
        }
      },
      {
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isOnHome]);

  // 移动端菜单打开时禁止 body 滚动
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => { document.body.style.overflowY = ''; };
  }, [mobileOpen]);

  // 点击菜单外部关闭
  useEffect(() => {
    if (!mobileOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [mobileOpen]);

  // 路由变化时关闭移动菜单
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // 判断某个导航项是否应高亮
  const isHighlighted = (path: string): boolean => {
  if (isOnHome) {
    return activeSection === path;
  }
  if (path === '/') return pathname === '/';
  if (path === '/#hero') return pathname.startsWith('/heroes');
  if (path === '/#mode') return pathname.startsWith('/modes');
  if (path === '/#map') return pathname.startsWith('/maps');
  // 新增：赛事中心及其所有子页面都高亮
  if (path === '/events') return pathname.startsWith('/events');
  // 新增：我的地图 / 我的英雄页面高亮
  if (path === '/favorites') return pathname === '/favorites';
  if (path === '/heroes/favorites') return pathname === '/heroes/favorites';
  return pathname === path;
};

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FFD500] shadow-[0_6px_28px_rgba(0,0,0,0.25)]'
            : 'bg-[#FFD500]/95 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center relative">
          {/* ===== 左侧：Logo ===== */}
          <Link
            href="/"
            className="relative flex-shrink-0 group -mb-6 z-10"
            style={{ marginTop: '-4px' }}
          >
            <div
              className="relative w-30 h-30 transition-all duration-300"
              style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
            >
              <Image
                src="/glo/logo.png"
                alt="荒野乱斗"
                fill
                className="object-contain pt-3 group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] transition-all duration-300"
                style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
                sizes="64px"
              />
            </div>
          </Link>

          {/* ===== 中间：桌面端导航 ===== */}
          <div className="hidden md:flex items-center justify-evenly flex-1 px-8">
            {navMenus.map((item) => {
              const active = isHighlighted(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 text-lg font-extrabold tracking-wide transition-all duration-300 select-none ${
                    active
                      ? 'text-[#1A3A8A] scale-105'
                      : 'text-[#1A3A8A]/60 hover:text-[#1A3A8A]/85'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.textShadow = '0 0 12px rgba(255,213,0,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.textShadow = '';
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* 底部高亮横线 */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[5px] rounded-full bg-[#1A3A8A] transition-all duration-400 ${
                      active
                        ? 'w-5/6 opacity-100 shadow-[0_2px_8px_rgba(26,58,138,0.35)]'
                        : 'w-0 opacity-0'
                    }`}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ===== 右侧用户菜单 ===== */}
          <div className="hidden md:flex items-center justify-end flex-shrink-0 gap-3">
            {session?.user && (
              <span className="text-sm font-bold text-[#1A3A8A]/80 truncate max-w-[120px]">
                欢迎，{session.user.nickname || session.user.name || session.user.email}
              </span>
            )}
            <UserMenu />
          </div>
          <div className="md:hidden ml-auto" />

          {/* ===== 移动端汉堡按钮 ===== */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="切换菜单"
          >
            <span
              className={`block w-6 h-[3px] bg-[#1A3A8A] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-[#1A3A8A] rounded-full transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-[#1A3A8A] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ===== 移动端全屏菜单 ===== */}
      <div
        ref={mobileRef}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 flex flex-col ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        {/* 黄色卡通背景 */}
        <div
          className={`absolute inset-0 bg-[#FFD500] transition-opacity duration-400 ${
            mobileOpen ? 'opacity-98' : 'opacity-0'
          }`}
        />

        {/* 深蓝色装饰波纹 */}
        <div
          className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#1A3A8A]/30 to-transparent rounded-b-full transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: mobileOpen ? '0.15s' : '0s' }}
        />

        {/* 菜单内容 */}
        <div className="relative flex flex-col items-center justify-center flex-1 gap-3 px-6">
          {navMenus.map((item, idx) => {
            const active = isHighlighted(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`w-full max-w-xs text-center text-xl font-black tracking-wider py-4 rounded-2xl transition-all duration-400 ${
                  mobileOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  active
                    ? 'bg-[#1A3A8A]/12 text-[#1A3A8A] shadow-[0_0_20px_rgba(26,58,138,0.15)]'
                    : 'text-[#1A3A8A]/55 hover:bg-[#1A3A8A]/8 hover:text-[#1A3A8A]/80'
                }`}
                style={{ transitionDelay: mobileOpen ? `${0.1 + idx * 0.07}s` : '0s' }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* 底部装饰圆点 */}
        <div
          className={`relative pb-8 flex justify-center transition-all duration-400 ${
            mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: mobileOpen ? '0.5s' : '0s' }}
        >
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#1A3A8A] animate-nav-dot-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-[#1A3A8A]/60 animate-nav-dot-bounce" style={{ animationDelay: '0.15s' }} />
            <div className="w-2 h-2 rounded-full bg-[#1A3A8A]/30 animate-nav-dot-bounce" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </div>
    </>
  );
}
