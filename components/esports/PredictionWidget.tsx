'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface PredictionWidgetProps {
  matchId: string;
  teamA: { name: string; logo?: string };
  teamB: { name: string; logo?: string };
  winner: 'A' | 'B';
  className?: string;
}

export default function PredictionWidget({ matchId, teamA, teamB, winner, className = '' }: PredictionWidgetProps) {
  const { status } = useSession();
  const [prediction, setPrediction] = useState<'A' | 'B' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/user/predictions')
      .then(res => res.json())
      .then(data => {
        const found = (data.predictions || []).find((p: { matchId: string }) => p.matchId === matchId);
        if (found) {
          setPrediction(found.predictedTeam);
          setIsCorrect(found.isCorrect ?? found.predictedTeam === winner);
        }
      })
      .catch(() => {});
  }, [status, matchId, winner]);

  async function submit(value: 'A' | 'B') {
    if (status !== 'authenticated') return;
    setLoading(true);
    try {
      const res = await fetch('/api/user/predictions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matchId, predictedTeam: value, actualWinner: winner }),
      });
      const data = await res.json();
      if (data.prediction) {
        setPrediction(data.prediction.predictedTeam);
        setIsCorrect(data.prediction.isCorrect ?? data.prediction.predictedTeam === winner);
      }
    } finally {
      setLoading(false);
    }
  }

  if (status === 'unauthenticated') {
    return (
      <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 ${className}`}>
        <h3 className="text-sm font-black text-white mb-2">🎮 比赛预测</h3>
        <p className="text-xs text-white/40">登录后即可参与预测，测试你的赛事直觉。</p>
      </div>
    );
  }

  if (prediction) {
    return (
      <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 ${className}`}>
        <h3 className="text-sm font-black text-white mb-3">🎮 比赛预测</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/60">你已选择</span>
          <span className="px-3 py-1 rounded-lg bg-[#FFD500]/15 text-[#FFD500] text-sm font-black">
            {prediction === 'A' ? teamA.name : teamB.name}
          </span>
        </div>
        <div className={`mt-3 text-xs font-black ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isCorrect ? '✅ 预测正确！' : '❌ 预测错误'}
        </div>
        <p className="mt-1 text-xs text-white/40">
          实际胜者：{winner === 'A' ? teamA.name : teamB.name}
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 ${className}`}>
      <h3 className="text-sm font-black text-white mb-3">🎮 比赛预测</h3>
      <p className="text-xs text-white/50 mb-4">你觉得谁会赢下这场比赛？</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => submit('A')}
          disabled={loading}
          className="flex flex-col items-center gap-2 rounded-xl bg-black/30 border border-white/[0.08] p-4 hover:border-[#FFD500]/30 hover:bg-[#FFD500]/5 transition-all duration-300 disabled:opacity-50"
        >
          {teamA.logo && <img src={teamA.logo} alt={teamA.name} className="w-8 h-8 object-contain" />}
          <span className="text-sm font-black text-white">{teamA.name}</span>
        </button>
        <button
          onClick={() => submit('B')}
          disabled={loading}
          className="flex flex-col items-center gap-2 rounded-xl bg-black/30 border border-white/[0.08] p-4 hover:border-[#FFD500]/30 hover:bg-[#FFD500]/5 transition-all duration-300 disabled:opacity-50"
        >
          {teamB.logo && <img src={teamB.logo} alt={teamB.name} className="w-8 h-8 object-contain" />}
          <span className="text-sm font-black text-white">{teamB.name}</span>
        </button>
      </div>
    </div>
  );
}
