import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compare } from 'bcryptjs';
import { prisma } from './lib/prisma';
import type { User, Session } from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: '邮箱密码',
      credentials: {
        email: { label: '邮箱', type: 'email' },
        password: { label: '密码', type: 'password' },
      },
      authorize: async (credentials): Promise<User | null> => {
        const email = (credentials?.email as string)?.trim().toLowerCase();
        const password = credentials?.password as string;

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) return null;

        const isValid = await compare(password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          nickname: user.nickname,
          avatarUrl: user.avatarUrl,
          image: user.image,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
      }
      // 当调用 useSession().update() 刷新资料时同步 token
      if (trigger === 'update' && session && typeof session === 'object') {
        const updatedSession = session as Partial<Session>;
        if (updatedSession.user?.nickname !== undefined) {
          token.nickname = updatedSession.user.nickname;
        }
        if (updatedSession.user?.avatarUrl !== undefined) {
          token.avatarUrl = updatedSession.user.avatarUrl;
        }
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.nickname = token.nickname as string | undefined;
        session.user.avatarUrl = token.avatarUrl as string | undefined;
      }
      return session;
    },
  },
});
