import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ follows: [] });
  const rows = await prisma.followedTeam.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    select: { teamId: true },
  });
  return NextResponse.json({ follows: rows.map((r) => r.teamId) });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: '未登录' }, { status: 401 });
  const { teamId } = await req.json();
  const existing = await prisma.followedTeam.findUnique({
    where: { userId_teamId: { userId: session.user.id, teamId } },
  });
  if (existing) {
    await prisma.followedTeam.delete({ where: { id: existing.id } });
    return NextResponse.json({ followed: false });
  }
  await prisma.followedTeam.create({ data: { userId: session.user.id, teamId } });
  return NextResponse.json({ followed: true });
}
