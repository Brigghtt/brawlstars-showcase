'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError('请输入有效的邮箱地址');
      return;
    }

    if (password.length < 6) {
      setError('密码长度至少为 6 位');
      return;
    }

    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok || data.error) {
        setError(data.error || '注册失败，请稍后重试');
        return;
      }

      router.push('/login?registered=1');
    } catch {
      setError('注册失败，请稍后重试');
    } finally {
      setLoading(false);
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

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-bold text-zinc-300 mb-1.5">
          确认密码
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="再次输入密码"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          required
        />
      </div>

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
        {loading ? '注册中...' : '注册'}
      </button>
    </form>
  );
}
