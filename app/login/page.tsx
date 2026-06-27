import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a2e] relative overflow-hidden px-6 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/PromoArt/image3.png)' }}
      />
      <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-2">加入荒野战场</h1>
          <p className="text-zinc-400 text-sm">登录后即可收藏地图、查看个性化推荐</p>
        </div>

        <Suspense fallback={
          <div className="space-y-4">
            <div className="h-11 bg-white/10 rounded-xl animate-pulse" />
            <div className="h-11 bg-white/10 rounded-xl animate-pulse" />
            <div className="h-12 bg-yellow-400/30 rounded-xl animate-pulse" />
          </div>
        }>
          <LoginForm />
        </Suspense>

        <div className="mt-6 text-center text-sm text-zinc-400">
          还没有账号？
          <a href="/register" className="text-yellow-400 font-black hover:underline ml-1">
            立即注册
          </a>
        </div>
      </div>
    </main>
  );
}
