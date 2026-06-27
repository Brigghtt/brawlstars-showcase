import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ follows: [] });
  const rows = await prisma.followedPlayer.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    select: { playerId: true },
  });
  return NextResponse.json({ follows: rows.map((r) => r.playerId) });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: '未登录' }, { status: 401 });
  const { playerId } = await req.json();
  const existing = await prisma.followedPlayer.findUnique({
    where: { userId_playerId: { userId: session.user.id, playerId } },
  });
  if (existing) {
    await prisma.followedPlayer.delete({ where: { id: existing.id } });
    return NextResponse.json({ followed: false });
  }
  await prisma.followedPlayer.create({ data: { userId: session.user.id, playerId } });
  return NextResponse.json({ followed: true });
}
