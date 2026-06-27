import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const views = await prisma.viewHistory.findMany({
    where: { userId: session.user.id },
    orderBy: { viewedAt: 'desc' },
    take: 20,
  });

  return NextResponse.json({ views });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const body = (await request.json()) as {
    itemType?: string;
    itemId?: string;
    title?: string;
    imageUrl?: string;
  };

  const { itemType, itemId, title, imageUrl } = body;

  if (!itemType || !itemId || !title) {
    return NextResponse.json({ error: '缺少必要字段' }, { status: 400 });
  }

  if (!['map', 'hero', 'mode'].includes(itemType)) {
    return NextResponse.json({ error: '不支持的类型' }, { status: 400 });
  }

  const existing = await prisma.viewHistory.findUnique({
    where: {
      userId_itemType_itemId: {
        userId: session.user.id,
        itemType,
        itemId,
      },
    },
  });

  if (existing) {
    await prisma.viewHistory.update({
      where: { id: existing.id },
      data: { viewedAt: new Date(), title, imageUrl },
    });
  } else {
    await prisma.viewHistory.create({
      data: {
        userId: session.user.id,
        itemType,
        itemId,
        title,
        imageUrl,
      },
    });
  }

  return NextResponse.json({ success: true });
}
