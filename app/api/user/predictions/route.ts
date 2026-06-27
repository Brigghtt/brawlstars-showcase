import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ predictions: [] });
  const rows = await prisma.prediction.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ predictions: rows });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: '未登录' }, { status: 401 });
  const { matchId, predictedTeam, actualWinner } = await req.json();
  if (!matchId || !predictedTeam) {
    return NextResponse.json({ error: '参数不完整' }, { status: 400 });
  }
  const resolved = typeof actualWinner === 'string' ? actualWinner : undefined;
  const record = await prisma.prediction.upsert({
    where: { userId_matchId: { userId: session.user.id, matchId } },
    update: {
      predictedTeam,
      actualWinner: resolved,
      isCorrect: resolved ? resolved === predictedTeam : undefined,
      resolvedAt: resolved ? new Date() : undefined,
    },
    create: {
      userId: session.user.id,
      matchId,
      predictedTeam,
      actualWinner: resolved,
      isCorrect: resolved ? resolved === predictedTeam : undefined,
      resolvedAt: resolved ? new Date() : undefined,
    },
  });
  return NextResponse.json({ prediction: record });
}
