import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const favorites = await prisma.favoriteHero.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    select: { heroId: true },
  });

  return NextResponse.json({ favorites: favorites.map((f) => f.heroId) });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const body = (await request.json()) as { heroId?: string };
  const heroId = body.heroId?.trim();

  if (!heroId) {
    return NextResponse.json({ error: '缺少英雄 ID' }, { status: 400 });
  }

  const existing = await prisma.favoriteHero.findUnique({
    where: { userId_heroId: { userId: session.user.id, heroId } },
  });

  if (existing) {
    await prisma.favoriteHero.delete({
      where: { userId_heroId: { userId: session.user.id, heroId } },
    });
    return NextResponse.json({ favorited: false, heroId });
  }

  await prisma.favoriteHero.create({
    data: { userId: session.user.id, heroId },
  });

  return NextResponse.json({ favorited: true, heroId });
}
