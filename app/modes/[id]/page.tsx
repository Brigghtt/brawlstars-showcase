'use client';

import { useParams, useRouter } from 'next/navigation';
import { modeData } from '@/lib/data';
import { useRecordView } from '@/hooks/useRecordView';
import ModeHero from '@/components/mode-detail/ModeHero';
import ModeOverview from '@/components/mode-detail/ModeOverview';
import ModeFeatureSections from '@/components/mode-detail/ModeFeatureSections';
import ModeTips from '@/components/mode-detail/ModeTips';

export default function ModeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const mode = modeData[id as keyof typeof modeData];

  useRecordView('mode', id as string | undefined, mode?.title, mode?.banner);

  if (!mode) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0B0F1A]">
        <div className="text-center">
          <div className="text-6xl font-black text-white/20 mb-4">404</div>
          <p className="text-xl text-white/60 mb-8">模式不存在</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bold
              hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const c = mode.color;

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white relative overflow-x-hidden">
      {/* ── 全页背景渐变（非固定，跟随内容） ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        background: `radial-gradient(ellipse at 30% 20%, ${c}15 0%, transparent 50%),
                     radial-gradient(ellipse at 70% 80%, ${c}08 0%, transparent 50%)`,
      }} />

      {/* ── 英雄区 ── */}
      <ModeHero mode={mode} modeId={id as string} />

      {/* ── 概览信息 ── */}
      <ModeOverview mode={mode} modeId={id as string} />

      {/* ── 分隔装饰 ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="h-[1px]"
          style={{
            background: `linear-gradient(to right, transparent, ${c}33 30%, ${c}22 50%, ${c}33 70%, transparent)`,
          }}
        />
      </div>

      {/* ── 特征图文区 ── */}
      <ModeFeatureSections sections={mode.sections} color={c} />

      {/* ── 分隔装饰 ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="h-[1px]"
          style={{
            background: `linear-gradient(to right, transparent, ${c}33 30%, ${c}22 50%, ${c}33 70%, transparent)`,
          }}
        />
      </div>

      {/* ── 策略要点 ── */}
      <ModeTips sections={mode.sections} color={c} />

      {/* ── 底部留白 ── */}
      <div className="h-16 md:h-24" />


    </div>
  );
}
