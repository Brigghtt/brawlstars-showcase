import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const favorites = await prisma.favoriteMap.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    select: { mapName: true },
  });

  return NextResponse.json({ favorites: favorites.map((f) => f.mapName) });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const body = (await request.json()) as { mapName?: string };
  const mapName = body.mapName?.trim();

  if (!mapName) {
    return NextResponse.json({ error: '缺少地图名称' }, { status: 400 });
  }

  const existing = await prisma.favoriteMap.findUnique({
    where: { userId_mapName: { userId: session.user.id, mapName } },
  });

  if (existing) {
    await prisma.favoriteMap.delete({
      where: { userId_mapName: { userId: session.user.id, mapName } },
    });
    return NextResponse.json({ favorited: false, mapName });
  }

  await prisma.favoriteMap.create({
    data: { userId: session.user.id, mapName },
  });

  return NextResponse.json({ favorited: true, mapName });
}
