'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

/**
 * 根据当前路由精确设置 body.is-home，避免首页 scroll-snap 状态
 * 在客户端导航时残留到其他页面，导致详情页被滚动到底部。
 *
 * 使用 useLayoutEffect 在浏览器绘制前同步更新 class 并复位滚动位置，
 * 防止详情页先被吸附到底部再回弹。
 */
export default function BodyClass() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const isHome = pathname === '/';
    document.body.classList.toggle('is-home', isHome);

    if (!isHome) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
