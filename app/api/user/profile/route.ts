import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      name: true,
      nickname: true,
      image: true,
      avatarUrl: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: '用户不存在' }, { status: 404 });
  }

  return NextResponse.json({ user });
}

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const body = (await request.json()) as {
    nickname?: string;
    avatarUrl?: string;
  };

  const nickname = body.nickname?.trim();
  const avatarUrl = body.avatarUrl?.trim();

  if (nickname !== undefined && nickname.length > 20) {
    return NextResponse.json({ error: '昵称最多 20 个字符' }, { status: 400 });
  }

  const updated = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      ...(nickname !== undefined && { nickname: nickname || null }),
      ...(avatarUrl !== undefined && { avatarUrl: avatarUrl || null }),
    },
    select: {
      id: true,
      email: true,
      name: true,
      nickname: true,
      image: true,
      avatarUrl: true,
    },
  });

  return NextResponse.json({ user: updated });
}
