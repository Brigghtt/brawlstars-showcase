import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a2e] relative overflow-hidden px-6 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/PromoArt/image3.png)' }}
      />
      <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-2">注册账号</h1>
          <p className="text-zinc-400 text-sm">创建一个账号，开始收藏你喜欢的地图</p>
        </div>

        <RegisterForm />

        <div className="mt-6 text-center text-sm text-zinc-400">
          已有账号？
          <a href="/login" className="text-yellow-400 font-black hover:underline ml-1">
            直接登录
          </a>
        </div>
      </div>
    </main>
  );
}
