'use client'

import { useEffect, useMemo, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { getMapNameCn } from '@/lib/data/mapTranslations';
import { useRecordView } from '@/hooks/useRecordView';

interface BrawlGameMode {
  name?: string;
  imageUrl?: string;
}

interface BrawlMap {
  id: number | string;
  name: string;
  imageUrl?: string;
  gameMode?: BrawlGameMode;
}

interface RankedMapPool {
  source: string;
  url: string;
  updatedAt: string;
  pools: Record<string, string[]>;
  allMapNames: string[];
  error?: string;
}

// 核心游戏模式中文化映射表
const modeNameCnMap: Record<string, string> = {
  "Showdown": "荒野决斗",
  "Brawl Ball": "乱斗足球",
  "Brawl Ball 5v5": "乱斗足球5v5",
  "Knockout": "乱斗淘汰赛",
  "Knockout 5v5": "乱斗淘汰赛5v5",
  "Gem Grab": "宝石争霸",
  "Gem Grab 5v5": "宝石争霸5v5",
  "Heist": "金库攻防",
  "Bounty": "赏金猎人",
  "Hot Zone": "热区争夺",
  "Duels": "车轮擂台赛",
  "Hockey": "乱斗冰球",
  "Hockey Brawl": "乱斗冰球",
  "Brawl Hockey": "乱斗冰球",
  "Basket Brawl": "乱斗篮球",
  "Basket Brawl 5v5": "乱斗篮球5v5",
  "Hunters": "乱斗竞技场",
  "Brawl Arena": "乱斗竞技场",
  "Wipeout": "积分争夺赛",
  "Wipeout 5v5": "积分争夺赛5v5",
};

// 模式主题色（用于筛选栏药丸左侧色条）
const modeColorMap: Record<string, string> = {
  "Showdown": "#82d327",
  "Brawl Ball": "#8a9edc",
  "Brawl Ball 5v5": "#8a9edc",
  "Knockout": "#f5811e",
  "Knockout 5v5": "#f5811e",
  "Gem Grab": "#9c3ef4",
  "Gem Grab 5v5": "#9c3ef4",
  "Heist": "#d55cd3",
  "Bounty": "#07cefb",
  "Hot Zone": "#dc3c52",
  "Duels": "#d81c0f",
  "Hockey": "#1b4ec2",
  "Hockey Brawl": "#1b4ec2",
  "Brawl Hockey": "#1b4ec2",
  "Basket Brawl": "#31a3d1",
  "Basket Brawl 5v5": "#31a3d1",
  "Hunters": "#1278f1",
  "Brawl Arena": "#1278f1",
  "Wipeout": "#f5811e",
  "Wipeout 5v5": "#f5811e",
};

function getModeColor(modeName: string): string {
  return modeColorMap[modeName] || '#FFD500';
}

/* 把 Showdown 的单人/双人/三人等变体统一为 "Showdown"；
   Wipeout 与 Wipeout 5v5 统一为 "Wipeout" */
function normalizeModeName(name?: string): string {
  if (!name) return '';
  if (/showdown/i.test(name)) return 'Showdown';
  if (/wipeout/i.test(name)) return 'Wipeout';
  return name;
}

const FAVORITES_KEY = 'brawl-map-favorites';

function formatUpdatedAt(iso: string | undefined): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  } catch {
    return '';
  }
}

function loadFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(list: string[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

async function downloadImage(url: string, filename: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('下载地图图片失败:', error);
    // 降级：直接打开图片
    window.open(url, '_blank');
  }
}

export default function MapSection() {
  const [allMaps, setAllMaps] = useState<BrawlMap[]>([]);
  const [rankedPools, setRankedPools] = useState<RankedMapPool | null>(null);
  const [hasRankedData, setHasRankedData] = useState(false);
  const [loading, setLoading] = useState(true);

  const [poolFilter, setPoolFilter] = useState<'all' | 'ranked'>('all');
  const [selectedMode, setSelectedMode] = useState<string>('Brawl Ball');

  const { data: session, status: sessionStatus } = useSession();

  // 地图放大弹窗
  const [selectedMap, setSelectedMap] = useState<BrawlMap | null>(null);
  // 收藏列表（以地图 name 为唯一标识）
  const [favorites, setFavorites] = useState<string[]>(loadFavorites);

  // 记录地图浏览
  useRecordView(
    'map',
    selectedMap?.name,
    selectedMap ? getMapNameCn(selectedMap.name) : undefined,
    selectedMap?.imageUrl
  );

  useEffect(() => {
    async function initMapDashboard() {
      try {
        const [brawlRes, rankedRes] = await Promise.all([
          fetch("/api/brawl-data"),
          fetch("/api/ranked-maps").catch(() => null)
        ]);

        if (!brawlRes.ok) throw new Error("同步远程战术中心资产失败");
        const data = await brawlRes.json();

        const mapsData = data.maps;
        let actualMapsArray: BrawlMap[] = [];
        if (Array.isArray(mapsData)) {
          actualMapsArray = mapsData;
        } else if (mapsData && Array.isArray(mapsData.list)) {
          actualMapsArray = mapsData.list;
        } else if (mapsData && Array.isArray(mapsData.items)) {
          // Supercell 官方 API 返回 { items: [...] }
          actualMapsArray = mapsData.items;
        }

        // 规范化模式名：单/双/三人决斗统一为 Showdown
        actualMapsArray = actualMapsArray.map((map) => ({
          ...map,
          gameMode: map.gameMode
            ? { ...map.gameMode, name: normalizeModeName(map.gameMode.name) }
            : undefined,
        }));

        setAllMaps(actualMapsArray);

        let rankedData: RankedMapPool | null = null;
        if (rankedRes && rankedRes.ok) {
          rankedData = await rankedRes.json();
        }
        if (rankedData && !rankedData.error && Object.keys(rankedData.pools).length > 0) {
          setRankedPools(rankedData);
          setHasRankedData(true);
        } else {
          setRankedPools(rankedData);
          setHasRankedData(false);
        }

        if (actualMapsArray.length > 0) {
          const validModesInProps = Array.from(new Set(actualMapsArray.map((m) => m.gameMode?.name)))
            .filter((name): name is string => typeof name === 'string' && name in modeNameCnMap);
          if (validModesInProps.length > 0) {
            setSelectedMode((prev) => (validModesInProps.includes(prev) ? prev : validModesInProps[0]));
          }
        }
      } catch (error) {
        console.error("同步荒野乱斗大盘灾难级拦截:", error);
        setAllMaps([]);
        setRankedPools(null);
        setHasRankedData(false);
      } finally {
        setLoading(false);
      }
    }

    initMapDashboard();
  }, []);

  // 登录后从云端同步收藏，并缓存到 localStorage
  useEffect(() => {
    if (sessionStatus === 'loading' || !session?.user) return;

    fetch('/api/user/favorites')
      .then((res) => (res.ok ? res.json() : { favorites: [] }))
      .then((data: { favorites?: string[] }) => {
        const cloudFavorites = data.favorites || [];
        setFavorites(cloudFavorites);
        saveFavorites(cloudFavorites);
      })
      .catch((error) => {
        console.error('同步云端收藏失败:', error);
      });
  }, [session, sessionStatus]);

  // 按地图名去重
  const dedupedAllMaps = useMemo(() => {
    const seen = new Set<string>();
    return allMaps.filter((map) => {
      if (!map.name || seen.has(map.name)) return false;
      seen.add(map.name);
      return true;
    });
  }, [allMaps]);

  // 各模式下全部标准地图的去重数量
  const allMapCountByMode = useMemo(() => {
    const counts: Record<string, number> = {};
    dedupedAllMaps.forEach((map) => {
      const mode = map.gameMode?.name;
      if (mode) {
        counts[mode] = (counts[mode] || 0) + 1;
      }
    });
    return counts;
  }, [dedupedAllMaps]);

  // 所有模式全部标准地图的去重累计总数
  const totalAllMapCount = dedupedAllMaps.length;

  // 统一的模式展示顺序（与 ModeSection 保持一致）
  const MODE_ORDER = [
    'Showdown',
    'Gem Grab',
    'Gem Grab 5v5',
    'Brawl Ball',
    'Brawl Ball 5v5',
    'Knockout',
    'Knockout 5v5',
    'Hot Zone',
    'Bounty',
    'Heist',
    'Basket Brawl',
    'Brawl Hockey',
    'Duels',
    'Brawl Arena',
    'Wipeout',
  ];

  const uniqueModes = Array.isArray(dedupedAllMaps)
    ? Array.from(new Set(dedupedAllMaps.map((m: BrawlMap) => m.gameMode?.name)))
        .filter((name): name is string => typeof name === 'string' && name in modeNameCnMap)
        .sort((a, b) => {
          const idxA = MODE_ORDER.indexOf(a);
          const idxB = MODE_ORDER.indexOf(b);
          if (idxA === -1 && idxB === -1) return a.localeCompare(b);
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxA - idxB;
        })
    : [];

  // 每个模式取第一张地图的图标作为该模式图标
  const modeIconMap = useMemo(() => {
    const map = new Map<string, string>();
    dedupedAllMaps.forEach((m) => {
      const name = m.gameMode?.name;
      const url = m.gameMode?.imageUrl;
      if (name && url && !map.has(name)) {
        map.set(name, url);
      }
    });
    return map;
  }, [dedupedAllMaps]);

  // 排位池全部不重复地图的累计数
  const totalRankedMapCount = rankedPools?.allMapNames.length ?? 0;

  const filteredMaps = useMemo(() => {
    return Array.isArray(dedupedAllMaps)
      ? dedupedAllMaps.filter(map => {
          const modeName = map.gameMode?.name;
          if (!modeName || !(modeName in modeNameCnMap)) return false;

          if (poolFilter === 'ranked') {
            const modePool = rankedPools?.pools[modeName] ?? [];
            if (!modePool.includes(map.name)) return false;
          }

          return modeName === selectedMode;
        })
      : [];
  }, [dedupedAllMaps, poolFilter, rankedPools, selectedMode]);

  // 收藏地图优先展示
  const sortedFilteredMaps = useMemo(() => {
    return [...filteredMaps].sort((a, b) => {
      const aFav = favorites.includes(a.name);
      const bFav = favorites.includes(b.name);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
  }, [filteredMaps, favorites]);

  const isFavorited = (mapName: string) => favorites.includes(mapName);

  async function toggleFavorite(mapName: string) {
    if (!session?.user) {
      signIn('github', { callbackUrl: '/#map' });
      return;
    }

    const optimisticNext = isFavorited(mapName)
      ? favorites.filter((n) => n !== mapName)
      : [...favorites, mapName];
    setFavorites(optimisticNext);
    saveFavorites(optimisticNext);

    try {
      const res = await fetch('/api/user/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mapName }),
      });
      if (!res.ok) throw new Error('同步收藏失败');
      const data = await res.json();
      const confirmedNext = data.favorited
        ? [...favorites, mapName]
        : favorites.filter((n) => n !== mapName);
      setFavorites(confirmedNext);
      saveFavorites(confirmedNext);
    } catch (error) {
      console.error('切换收藏失败:', error);
      setFavorites(favorites);
    }
  }

  return (
    <section className="w-full h-screen relative overflow-hidden flex" id="map">
      {/* 视差全景底衬 */}
      <div
        className="parallax-bg bg-cover bg-center absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/PromoArt/image3.png)',
          filter: 'blur(12px) brightness(0.25) saturate(0.5)',
        }}
      />

      {/* ===== 左侧黄条 ===== */}
      <div
        className="relative w-[140px] shrink-0 flex flex-col items-center justify-center overflow-visible select-none h-screen z-10"
        style={{
          background: 'linear-gradient(180deg, #FFE135 0%, #FFD500 12%, #FFC300 40%, #FFB800 70%, #FFA800 100%)',
          boxShadow: '5px 0 0 rgba(0,0,0,0.1), 6px 0 14px rgba(0,0,0,0.08)',
          borderRadius: '0 12px 12px 0',
        }}
      >
        <img
          src="/glo/logo3.png"
          alt="对战地图"
          className="relative z-5 w-[72px] h-[72px] mb-5 object-contain"
        />
        <h2 className="relative z-5 font-black text-[#1A1A1A] leading-tight select-none" style={{ writingMode: 'vertical-rl', letterSpacing: '20px', fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}>
          对战地图
        </h2>
      </div>

      {/* ===== 右侧排版大盘区 ===== */}
      <div className="flex-1 h-full z-10 flex flex-col relative px-10 py-8 overflow-hidden">

        {/* 顶部控制舱 */}
        <div className="flex flex-col gap-5 mb-6 shrink-0 bg-black/60 p-6 rounded-2xl border-2 border-white/10 backdrop-blur-xl shadow-2xl">
          {/* 战区状态切换 */}
          <div className="flex items-center gap-4">
            <span className="text-base font-black text-yellow-400 italic tracking-wider shrink-0">🌐 战区生态：</span>
            <div className="flex bg-neutral-900 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setPoolFilter('all')}
                className={`px-5 py-2 rounded-lg font-black text-sm transition-all ${poolFilter === 'all' ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-lg scale-105' : 'text-zinc-400 hover:text-white'}`}
              >
                全部标准地图
              </button>
              <button
                onClick={() => setPoolFilter('ranked')}
                disabled={!hasRankedData}
                className={`px-5 py-2 rounded-lg font-black text-sm transition-all flex items-center gap-2 ${
                  poolFilter === 'ranked'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                    : hasRankedData
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 cursor-not-allowed'
                }`}
                title={hasRankedData ? '仅显示当前排位赛季地图池中的地图' : '当前未获取到排位地图池数据，请稍后重试'}
              >
                🏆 当前排位地图池 ({totalRankedMapCount})
                {!hasRankedData && <span className="text-[10px] font-normal opacity-70">(无数据)</span>}
              </button>
            </div>
          </div>

          {!hasRankedData && (
            <div className="text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              ℹ️ 当前未获取到排位地图池数据（数据来源：Brawl Stars Wiki - Ranked）。全部标准地图仍可正常浏览。
              {rankedPools?.error && <span className="block mt-1 text-red-400">错误：{rankedPools.error}</span>}
            </div>
          )}

          {hasRankedData && rankedPools?.updatedAt && (
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>
                数据来源：
                <a href={rankedPools.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                  {rankedPools.source}
                </a>
              </span>
              <span>更新时间：{formatUpdatedAt(rankedPools.updatedAt)}</span>
            </div>
          )}

          <div className="w-full h-[1px] bg-white/5" />

          {/* 核心游戏模式筛选 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-black text-yellow-400 italic tracking-wider">🕹️ 核心游戏模式筛选：</span>
              <span className="text-xs text-zinc-400 font-mono">当前分类下共计 {filteredMaps.length} 张地图</span>
            </div>
            <div
              onWheel={(e) => e.stopPropagation()}
              className="flex gap-3 overflow-x-auto pb-2 pr-2 custom-scrollbar scroll-smooth snap-x"
            >
              {uniqueModes.map((modeName: string) => {
                const isActive = selectedMode === modeName;
                const rankedCount = rankedPools?.pools[modeName]?.length ?? 0;
                return (
                  <button
                    key={modeName}
                    onClick={() => setSelectedMode(modeName)}
                    className={`group snap-start shrink-0 relative flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full text-sm font-black border transition-all overflow-hidden ${
                      isActive
                        ? 'bg-yellow-400 text-black border-yellow-300 shadow-[0_0_16px_rgba(255,212,0,0.45)] scale-[1.03]'
                        : 'bg-neutral-900/70 text-zinc-200 border-white/10 hover:border-white/30 hover:bg-neutral-800/70'
                    }`}
                  >
                    {/* 左侧模式色条 */}
                    <span
                      className="w-1.5 h-6 rounded-full shrink-0"
                      style={{ background: getModeColor(modeName) }}
                    />
                    {modeIconMap.get(modeName) && (
                      <img
                        src={modeIconMap.get(modeName)}
                        alt=""
                        className="w-5 h-5 object-contain shrink-0"
                      />
                    )}
                    {modeNameCnMap[modeName]}
                    {/* 排位池模式下显示该模式参与轮换的地图数 */}
                    {poolFilter === 'ranked' && rankedCount > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                        isActive ? 'bg-black/20 text-black' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        🏆{rankedCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 地图内容展示网格 */}
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center text-white gap-3">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="font-black italic text-yellow-400 text-lg animate-pulse">正在动态拉取全网最新中英沙盘资产...</p>
          </div>
        ) : filteredMaps.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-white/5 rounded-2xl bg-black/20">
            <span className="text-4xl mb-2">🏜️</span>
            <p className="font-bold text-sm tracking-widest">
              {poolFilter === 'ranked' && !hasRankedData
                ? '当前无排位地图池数据，无法筛选排位池地图'
                : poolFilter === 'ranked'
                  ? '当前模式暂无排位池地图'
                  : '当前状态下该模式暂无活跃地图'}
            </p>
          </div>
        ) : (
          <div onWheel={(e) => e.stopPropagation()} className="flex-1 overflow-y-auto pr-3 overflow-x-hidden custom-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-12">
              {sortedFilteredMaps.map((map) => {
                const isInRankedPool = rankedPools?.pools[map.gameMode?.name ?? '']?.includes(map.name) ?? false;
                const favorited = isFavorited(map.name);

                return (
                  <div
                    key={map.id}
                    onClick={() => setSelectedMap(map)}
                    className={`group cursor-pointer bg-neutral-900/90 rounded-xl border p-3 flex flex-col items-center justify-between shadow-xl transition-all duration-300 hover:scale-[1.04] ${isInRankedPool ? 'border-yellow-400 ring-2 ring-yellow-400/10' : 'border-white/10'}`}
                  >
                    {/* 地图沙盘预览区域 */}
                    <div className="w-full h-52 flex items-center justify-center relative bg-black/40 rounded-lg p-2.5 mb-3 overflow-hidden">
                      <img
                        src={map.imageUrl}
                        alt={getMapNameCn(map.name)}
                        className="max-w-full max-h-full object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300"
                      />
                      {isInRankedPool && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-black text-[9px] px-2 py-0.5 rounded italic animate-pulse shadow-lg">
                          🏆 排位池
                        </div>
                      )}
                      {favorited && (
                        <div className="absolute top-2 right-2 text-yellow-400 text-base">★</div>
                      )}
                    </div>

                    {/* 底部精炼视觉层 */}
                    <div className="w-full text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        {map.gameMode?.imageUrl && <img src={map.gameMode.imageUrl} alt="" className="w-3.5 h-3.5 object-contain" />}
                        <span className="text-yellow-400 text-[11px] font-black tracking-wider uppercase">
                          {map.gameMode?.name ? (modeNameCnMap[map.gameMode.name] || map.gameMode.name) : ''}
                        </span>
                      </div>

                      <h4 className={`font-black text-xs sm:text-sm tracking-wide truncate px-1 transition-colors ${favorited ? 'text-yellow-400' : 'text-white group-hover:text-yellow-300'}`} title={map.name}>
                        {favorited && '★ '}{getMapNameCn(map.name)}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 地图放大弹窗 */}
      {selectedMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedMap(null)}
        >
          <div
            className="relative bg-neutral-900 rounded-2xl border-2 border-yellow-400/30 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部 */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-yellow-400">
                  {getMapNameCn(selectedMap.name)}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {selectedMap.gameMode?.name ? (modeNameCnMap[selectedMap.gameMode.name] || selectedMap.gameMode.name) : ''}
                  {selectedMap.name !== getMapNameCn(selectedMap.name) && (
                    <span className="ml-2 text-zinc-500">{selectedMap.name}</span>
                  )}
                </p>
              </div>
              <button
                onClick={() => setSelectedMap(null)}
                className="text-zinc-400 hover:text-white text-2xl font-black transition-colors"
              >
                ✕
              </button>
            </div>

            {/* 大图区域 */}
            <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
              <img
                src={selectedMap.imageUrl}
                alt={getMapNameCn(selectedMap.name)}
                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* 操作按钮 */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
              <button
                onClick={() => toggleFavorite(selectedMap.name)}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
                  isFavorited(selectedMap.name)
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-neutral-800 text-zinc-300 hover:bg-neutral-700 border border-white/10'
                }`}
              >
                {isFavorited(selectedMap.name) ? '★ 已收藏' : '☆ 收藏'}
              </button>
              <button
                onClick={() => downloadImage(selectedMap.imageUrl || '', `${selectedMap.name}.png`)}
                className="px-5 py-2.5 rounded-xl font-black text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-400 hover:to-green-400 transition-all flex items-center gap-2"
              >
                ⬇ 下载地图
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
