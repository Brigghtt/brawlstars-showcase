import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const pins = await prisma.favoritePin.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    select: { pinUrl: true, createdAt: true },
  });

  return NextResponse.json({ pins: pins.map((p) => p.pinUrl) });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const body = (await request.json()) as { pinUrl?: string };
  const pinUrl = body.pinUrl?.trim();

  if (!pinUrl) {
    return NextResponse.json({ error: '缺少表情地址' }, { status: 400 });
  }

  const existing = await prisma.favoritePin.findUnique({
    where: { userId_pinUrl: { userId: session.user.id, pinUrl } },
  });

  if (existing) {
    await prisma.favoritePin.delete({
      where: { userId_pinUrl: { userId: session.user.id, pinUrl } },
    });
    return NextResponse.json({ favorited: false, pinUrl });
  }

  await prisma.favoritePin.create({
    data: { userId: session.user.id, pinUrl },
  });

  return NextResponse.json({ favorited: true, pinUrl });
}
