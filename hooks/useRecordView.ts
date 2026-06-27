'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useRecordView(
  itemType: 'map' | 'hero' | 'mode' | 'team' | 'player' | 'match',
  itemId: string | undefined,
  title: string | undefined,
  imageUrl?: string
) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading' || !session?.user?.id || !itemId || !title) return;

    fetch('/api/user/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemType, itemId, title, imageUrl }),
    }).catch((error) => {
      console.error('记录浏览失败:', error);
    });
  }, [session, status, itemType, itemId, title, imageUrl]);
}
