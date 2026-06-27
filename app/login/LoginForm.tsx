'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/favorites';
  const justRegistered = searchParams.get('registered') === '1';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('请输入邮箱和密码');
      return;
    }

    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email: email.trim(),
        password,
        redirect: false,
      });

      setLoading(false);

      if (result?.error) {
        setError('邮箱或密码错误');
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch {
      setLoading(false);
      setError('登录失败，请稍后重试');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-zinc-300 mb-1.5">
          邮箱
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-bold text-zinc-300 mb-1.5">
          密码
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="至少 6 位密码"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          required
        />
      </div>

      {justRegistered && (
        <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-bold">
          注册成功，请登录
        </div>
      )}

      {error && (
        <div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-bold">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-2xl bg-yellow-400 text-black font-black text-base hover:bg-yellow-300 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? '登录中...' : '登录'}
      </button>
    </form>
  );
}
