import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    nickname?: string | null;
    avatarUrl?: string | null;
  }

  interface Session {
    user: {
      id: string;
      nickname?: string | null;
      avatarUrl?: string | null;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    nickname?: string | null;
    avatarUrl?: string | null;
  }
}
