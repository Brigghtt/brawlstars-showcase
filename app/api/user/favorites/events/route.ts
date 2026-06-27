import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ favorites: [] });
  const rows = await prisma.eventFavorite.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ favorites: rows });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: '未登录' }, { status: 401 });
  const { itemType, itemId, title, imageUrl } = await req.json();
  if (!itemType || !itemId || !title) {
    return NextResponse.json({ error: '参数不完整' }, { status: 400 });
  }
  const existing = await prisma.eventFavorite.findUnique({
    where: { userId_itemType_itemId: { userId: session.user.id, itemType, itemId } },
  });
  if (existing) {
    await prisma.eventFavorite.delete({ where: { id: existing.id } });
    return NextResponse.json({ favorited: false });
  }
  await prisma.eventFavorite.create({
    data: { userId: session.user.id, itemType, itemId, title, imageUrl },
  });
  return NextResponse.json({ favorited: true });
}
