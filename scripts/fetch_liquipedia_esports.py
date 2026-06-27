#!/usr/bin/env python3
"""
从 Liquipedia Brawl Stars Wiki 抓取 2026 赛季赛事数据。
通过 Liquipedia MediaWiki API 直接获取页面 HTML，解析 bracket 比赛数据；
不再依赖 jina.ai reader，彻底规避其 429 限流。

用法：
    python scripts/fetch_liquipedia_esports.py
    python scripts/fetch_liquipedia_esports.py --refresh
    python scripts/fetch_liquipedia_esports.py --cache-only
    python scripts/fetch_liquipedia_esports.py --pages Chinese_Mainland/March/Monthly_Finals,Brawl_Cup
"""

import argparse
import gzip
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
CACHE_DIR = ROOT / "scripts" / ".cache" / "liquipedia"
TEAM_CACHE_DIR = CACHE_DIR / "teams"
PLAYER_CACHE_DIR = CACHE_DIR / "players"
PLAYER_PORTAL_CACHE_DIR = CACHE_DIR / "players"
OUT_JSON = ROOT / "lib" / "data" / "liquipediaTournaments.json"
TEAMS_JSON = ROOT / "lib" / "data" / "liquipediaTeams.json"
PLAYERS_JSON = ROOT / "lib" / "data" / "liquipediaPlayers.json"
HERO_DETAILS_TS = ROOT / "lib" / "data" / "heroDetails.ts"

# Liquipedia Portal:Players 各赛区页面
PLAYER_PORTAL_REGIONS: list[tuple[str, str]] = [
    ("EMEA", "欧洲"),
    ("Asia_Pacific", "东亚"),
    ("Chinese_Mainland", "大陆"),
    ("North_America", "北美"),
    ("South_America", "南美"),
]

# Liquipedia MediaWiki API endpoint
API_BASE = "https://liquipedia.net/brawlstars/api.php"
# Liquipedia 要求自定义 User-Agent 并遵守 API terms of use
LIQUIPEDIA_UA = "BrawlStarsWikiBot/1.0 (contact@example.com; personal project)"

# 并发 / 重试配置
DEFAULT_RETRIES = 3
DEFAULT_DELAY = 2  # Liquipedia API 建议不要过快，成功请求后休息 2 秒
MAX_RETRY_DELAY = 60

# 需要抓取的页面配置
PAGES: list[dict[str, Any]] = [
    # 东亚赛区：2-6 月月赛
    {
        "path": "Brawl_Stars_Championship/2026/Season_1/East_Asia/Monthly_Finals",
        "region": "东亚",
        "category": "月赛",
        "month": "2026-02",
        "name_prefix": "2026 月赛 东亚赛区 二月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_2/East_Asia/Monthly_Finals",
        "region": "东亚",
        "category": "月赛",
        "month": "2026-03",
        "name_prefix": "2026 月赛 东亚赛区 三月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_3/East_Asia/Monthly_Finals",
        "region": "东亚",
        "category": "月赛",
        "month": "2026-04",
        "name_prefix": "2026 月赛 东亚赛区 四月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_4/East_Asia/Monthly_Finals",
        "region": "东亚",
        "category": "月赛",
        "month": "2026-05",
        "name_prefix": "2026 月赛 东亚赛区 五月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_5/East_Asia/Monthly_Finals",
        "region": "东亚",
        "category": "月赛",
        "month": "2026-06",
        "name_prefix": "2026 月赛 东亚赛区 六月",
    },
    # 欧洲赛区：2-6 月月赛
    {
        "path": "Brawl_Stars_Championship/2026/Season_1/EMEA/Monthly_Finals",
        "region": "欧洲",
        "category": "月赛",
        "month": "2026-02",
        "name_prefix": "2026 月赛 欧洲赛区 二月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_2/EMEA/Monthly_Finals",
        "region": "欧洲",
        "category": "月赛",
        "month": "2026-03",
        "name_prefix": "2026 月赛 欧洲赛区 三月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_3/EMEA/Monthly_Finals",
        "region": "欧洲",
        "category": "月赛",
        "month": "2026-04",
        "name_prefix": "2026 月赛 欧洲赛区 四月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_4/EMEA/Monthly_Finals",
        "region": "欧洲",
        "category": "月赛",
        "month": "2026-05",
        "name_prefix": "2026 月赛 欧洲赛区 五月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_5/EMEA/Monthly_Finals",
        "region": "欧洲",
        "category": "月赛",
        "month": "2026-06",
        "name_prefix": "2026 月赛 欧洲赛区 六月",
    },
    # 中国大陆赛区：2-6 月月赛 + 总决赛
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/February/Monthly_Finals",
        "region": "大陆",
        "category": "月赛",
        "month": "2026-02",
        "name_prefix": "2026 月赛 大陆赛区 二月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/March/Monthly_Finals",
        "region": "大陆",
        "category": "月赛",
        "month": "2026-03",
        "name_prefix": "2026 月赛 大陆赛区 三月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/April/Monthly_Finals",
        "region": "大陆",
        "category": "月赛",
        "month": "2026-04",
        "name_prefix": "2026 月赛 大陆赛区 四月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/May/Monthly_Finals",
        "region": "大陆",
        "category": "月赛",
        "month": "2026-05",
        "name_prefix": "2026 月赛 大陆赛区 五月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/June/Monthly_Finals",
        "region": "大陆",
        "category": "月赛",
        "month": "2026-06",
        "name_prefix": "2026 月赛 大陆赛区 六月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Chinese_Mainland/Finals",
        "region": "大陆",
        "category": "决赛",
        "month": "2026-08",
        "name_prefix": "2026 大陆赛区 总决赛",
    },
    # 2025 大型赛事
    {
        "path": "Brawl_Stars_Championship/2025/Last_Chance_Qualifier",
        "region": None,
        "category": "LCQ",
        "month": "2025-10",
        "name_prefix": "2025 全球总决赛 LCQ",
    },
    {
        "path": "Brawl_Stars_World_Finals/2025",
        "region": None,
        "category": "全球总决赛",
        "month": "2025-11",
        "name_prefix": "2025 全球总决赛",
    },
    {
        "path": "Brawl_Stars_Championship/2025/Brawl_Cup",
        "region": None,
        "category": "brawlcup",
        "month": "2025-05",
        "name_prefix": "2025 BrawlCup",
    },
    # 北美赛区：2-8 月月赛
    {
        "path": "Brawl_Stars_Championship/2026/Season_1/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-02",
        "name_prefix": "2026 月赛 北美赛区 二月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_2/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-03",
        "name_prefix": "2026 月赛 北美赛区 三月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_3/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-04",
        "name_prefix": "2026 月赛 北美赛区 四月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_4/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-06",
        "name_prefix": "2026 月赛 北美赛区 六月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_5/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-07",
        "name_prefix": "2026 月赛 北美赛区 七月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_6/North_America/Monthly_Finals",
        "region": "北美",
        "category": "月赛",
        "month": "2026-08",
        "name_prefix": "2026 月赛 北美赛区 八月",
    },
    # 南美赛区：2-8 月月赛
    {
        "path": "Brawl_Stars_Championship/2026/Season_1/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-02",
        "name_prefix": "2026 月赛 南美赛区 二月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_2/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-03",
        "name_prefix": "2026 月赛 南美赛区 三月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_3/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-04",
        "name_prefix": "2026 月赛 南美赛区 四月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_4/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-06",
        "name_prefix": "2026 月赛 南美赛区 六月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_5/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-07",
        "name_prefix": "2026 月赛 南美赛区 七月",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Season_6/South_America/Monthly_Finals",
        "region": "南美",
        "category": "月赛",
        "month": "2026-08",
        "name_prefix": "2026 月赛 南美赛区 八月",
    },
    # 2026 大型赛事
    {
        "path": "Brawl_Stars_Championship/2026/Brawl_Cup",
        "region": None,
        "category": "brawlcup",
        "month": "2026-05",
        "name_prefix": "2026 BrawlCup",
    },
    {
        "path": "Brawl_Stars_Championship/2026/Last_Chance_Qualifier",
        "region": None,
        "category": "LCQ",
        "month": "2026-09",
        "name_prefix": "2026 全球总决赛 LCQ",
    },
    {
        "path": "Brawl_Stars_Championship/2026/World_Finals",
        "region": None,
        "category": "全球总决赛",
        "month": "2026-11",
        "name_prefix": "2026 全球总决赛",
    },
]

MODE_MAP = {
    "Gem Grab": "宝石争霸",
    "Brawl Ball": "乱斗足球",
    "Bounty": "赏金猎人",
    "Heist": "金库攻防",
    "Hot Zone": "积分争夺赛",
    "Knockout": "乱斗淘汰赛",
    "Showdown": "荒野决斗",
    "Basket Brawl": "乱斗篮球",
    "Volley Brawl": "排球乱斗",
    "Trophy Thieves": "奖杯大盗",
    "Hold the Trophy": "夺杯飞逃",
    "Wipeout": "围歼",
    "Big Game": "首领之战",
    "Robo Rumble": "机甲入侵",
    "Siege": "机甲攻坚战",
    "Present Plunder": "礼物狂欢",
    "Duels": "车轮擂台赛",
}

ROUND_LABELS = {
    "quarter": "八强赛",
    "semi": "半决赛",
    "final": "总决赛",
    "elimination": "淘汰赛",
}


def build_hero_en_to_cn() -> dict[str, str]:
    """从 lib/data/heroDetails.ts 提取 enName -> name 映射，并补充 Liquipedia 特殊名称。"""
    text = HERO_DETAILS_TS.read_text(encoding="utf-8")
    objects = re.findall(r'"\d+":\s*\{.*?\}(?=,\s*"\d+":|\s*\})', text, re.S)
    mapping: dict[str, str] = {}
    for obj in objects:
        name_m = re.search(r'"name":\s*"([^"]+)"', obj)
        en_m = re.search(r'"enName":\s*"([^"]+)"', obj)
        if name_m and en_m:
            mapping[en_m.group(1)] = name_m.group(1)
    # Liquipedia 中部分英雄图片 alt 使用了非官方英文名/选手名，需要手动映射
    mapping.update({
        "Jae-yong": "载勇",
        "Glowbert": "荧光怪",
    })
    return mapping


HERO_EN_TO_CN = build_hero_en_to_cn()


def _img_to_url(img) -> str:
    src = img.get("src", "")
    if src.startswith("/"):
        return f"https://liquipedia.net{src}"
    return src


def fetch_liquipedia_page(
    title: str,
    cache_dir: Path,
    refresh: bool = False,
    retries: int = DEFAULT_RETRIES,
    delay: int = DEFAULT_DELAY,
) -> str | None:
    """通过 Liquipedia API 获取任意页面 HTML；可指定缓存目录。"""
    cache_dir.mkdir(parents=True, exist_ok=True)
    safe_name = re.sub(r"[^\w\-]", "_", title)
    cache_file = cache_dir / f"{safe_name}.html"

    if not refresh and cache_file.exists() and cache_file.stat().st_size > 0:
        print(f"[cache] {title}")
        return cache_file.read_text(encoding="utf-8")

    url = f"{API_BASE}?action=parse&page={urllib.parse.quote(title)}&prop=text&format=json"

    last_exc: Exception | None = None
    for attempt in range(retries):
        print(f"[api] {title} (attempt {attempt + 1}/{retries})")
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": LIQUIPEDIA_UA,
                    "Accept-Encoding": "gzip",
                    "Accept": "application/json",
                },
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                raw = resp.read()
                if raw[:2] == b"\x1f\x8b":
                    data = gzip.decompress(raw).decode("utf-8", errors="replace")
                else:
                    data = raw.decode("utf-8", errors="replace")
            parsed = json.loads(data)
            html = parsed["parse"]["text"]["*"]
            cache_file.write_text(html, encoding="utf-8")
            print(f"  -> ok, sleep {delay}s")
            time.sleep(delay)
            return html
        except Exception as exc:
            last_exc = exc
            print(f"  -> error: {exc}")
            wait = min(delay * (2**attempt) + 1, MAX_RETRY_DELAY)
            print(f"  -> retry in {wait}s")
            time.sleep(wait)

    if cache_file.exists() and cache_file.stat().st_size > 0:
        print(f"  -> fallback to cache after {retries} retries")
        return cache_file.read_text(encoding="utf-8")
    print(f"  -> failed to fetch {title}: {last_exc}")
    return None


def fetch_html(
    path: str,
    refresh: bool = False,
    retries: int = DEFAULT_RETRIES,
    delay: int = DEFAULT_DELAY,
) -> str | None:
    """通过 Liquipedia API 获取页面 HTML；优先读取缓存，失败时回退缓存。"""
    safe_name = path.replace("/", "_")
    cache_file = CACHE_DIR / f"{safe_name}.html"

    if not refresh and cache_file.exists() and cache_file.stat().st_size > 0:
        print(f"[cache] {path}")
        return cache_file.read_text(encoding="utf-8")

    title = path.replace("_", " ")
    url = f"{API_BASE}?action=parse&page={urllib.parse.quote(title)}&prop=text&format=json"

    last_exc: Exception | None = None
    for attempt in range(retries):
        print(f"[api] {path} (attempt {attempt + 1}/{retries})")
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": LIQUIPEDIA_UA,
                    "Accept-Encoding": "gzip",
                    "Accept": "application/json",
                },
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                raw = resp.read()
                if raw[:2] == b"\x1f\x8b":
                    data = gzip.decompress(raw).decode("utf-8", errors="replace")
                else:
                    data = raw.decode("utf-8", errors="replace")
            parsed = json.loads(data)
            html = parsed["parse"]["text"]["*"]
            CACHE_DIR.mkdir(parents=True, exist_ok=True)
            cache_file.write_text(html, encoding="utf-8")
            print(f"  -> ok, sleep {delay}s")
            time.sleep(delay)
            return html
        except Exception as exc:
            last_exc = exc
            print(f"  -> error: {exc}")
            wait = min(delay * (2**attempt) + 1, MAX_RETRY_DELAY)
            print(f"  -> retry in {wait}s")
            time.sleep(wait)

    if cache_file.exists() and cache_file.stat().st_size > 0:
        print(f"  -> fallback to cache after {retries} retries")
        return cache_file.read_text(encoding="utf-8")
    return None


def _extract_team_name(entry) -> str:
    """从 bracket opponent entry 提取战队名；优先用完整名称。"""
    # entry 自身的 aria-label 通常最完整（例如 "ABC (EA Team)"）
    aria = entry.get("aria-label")
    if aria:
        return aria
    name_el = entry.select_one(".team-name-dynamic")
    if name_el:
        for attr in ("data-team-name", "data-team-bracketname", "data-team-shortname"):
            v = name_el.get(attr)
            if v:
                return v
    a = entry.select_one(".name a")
    if a:
        return a.get_text(strip=True)
    return "Unknown"


def _extract_team_logo(entry) -> str:
    """从 bracket opponent entry 提取战队 logo URL。"""
    img = entry.select_one(".block-team img")
    if img:
        return _img_to_url(img)
    return ""


def _extract_score(entry) -> int | None:
    """从 bracket opponent entry 提取大比分。"""
    score_el = entry.select_one(".brkts-opponent-score-inner")
    if score_el:
        text = score_el.get_text(strip=True)
        m = re.search(r"\d+", text)
        if m:
            return int(m.group())
    return None


def _extract_datetime(match) -> datetime | None:
    """从 match popup 提取比赛时间（UTC）。"""
    timer = match.select_one(".timer-object")
    if timer:
        ts = timer.get("data-timestamp")
        if ts:
            try:
                return datetime.utcfromtimestamp(int(ts))
            except (ValueError, OSError):
                pass
        text = timer.get_text(strip=True)
        m = re.search(r"(\w+ \d+, \d{4}) - (\d{2}:\d{2})", text)
        if m:
            try:
                return datetime.strptime(m.group(1) + " " + m.group(2), "%B %d, %Y %H:%M")
            except ValueError:
                pass
    return None


MODE_SLUGS = {
    "Gem_Grab", "Brawl_Ball", "Bounty", "Heist", "Hot_Zone", "Knockout",
    "Showdown", "Basket_Brawl", "Volley_Brawl", "Trophy_Thieves",
    "Hold_the_Trophy", "Wipeout", "Big_Game", "Robo_Rumble", "Siege",
    "Present_Plunder", "Duels",
}

# 比赛禁用英雄：从赛事数据中完全排除
BANNED_HEROES = {"Buzz Lightyear", "巴斯光年", "Glowy", "格洛薇"}


def _filter_banned_heroes(heroes: list[str]) -> list[str]:
    return [h for h in heroes if h not in BANNED_HEROES]


def _extract_game(game_el) -> dict[str, Any] | None:
    """从 popup 中的一局提取英雄、模式、地图、比分。"""
    sides = game_el.select(".brkts-popup-body-element-thumbs")
    if len(sides) < 2:
        return None
    left_imgs = sides[0].find_all("img")
    right_imgs = sides[1].find_all("img")
    left_heroes = _filter_banned_heroes([img.get("alt", "").strip() for img in left_imgs if img.get("alt")])
    right_heroes = _filter_banned_heroes([img.get("alt", "").strip() for img in right_imgs if img.get("alt")])
    if not left_heroes or not right_heroes:
        return None

    # 比分：第一个 spaced 是左队，第三个是右队
    left_score: int | None = None
    right_score: int | None = None
    spaced = game_el.find_all("div", class_="brkts-popup-spaced")
    if len(spaced) >= 1:
        nums = re.findall(r"\b\d+\b", spaced[0].get_text(strip=True))
        if nums:
            left_score = int(nums[-1])
    if len(spaced) >= 3:
        nums = re.findall(r"\b\d+\b", spaced[2].get_text(strip=True))
        if nums:
            right_score = int(nums[-1])

    # 模式和地图
    mode: str | None = None
    map_name: str | None = None
    for a in game_el.find_all("a", href=True):
        href = a["href"].rstrip("/")
        text = a.get_text(strip=True)
        page = href.split("/")[-1]
        # 通过图片 src 识别模式图标
        img = a.find("img")
        if img and img.get("src") and "BSWiki_" in img["src"] and img["src"].endswith("_icon.png"):
            mode = page.replace("_", " ")
            continue
        # 通过页面 slug 识别模式
        if page in MODE_SLUGS:
            mode = text or page.replace("_", " ")
            continue
        # 其余 brawlstars 链接视为地图
        if href.startswith("/brawlstars/") and text and not text.startswith("File:"):
            map_name = text

    if not (mode and map_name and left_score is not None and right_score is not None):
        return None
    if len(left_heroes) < 1 or len(right_heroes) < 1:
        return None

    return {
        "teamA_heroes": left_heroes[:3],
        "teamB_heroes": right_heroes[:3],
        "teamA_score": left_score,
        "teamB_score": right_score,
        "mode": mode,
        "map": map_name,
    }


def parse_matches(html: str) -> list[dict[str, Any]]:
    """从 Liquipedia bracket HTML 解析比赛列表。"""
    soup = BeautifulSoup(html, "html.parser")
    matches: list[dict[str, Any]] = []
    for match in soup.find_all("div", class_="brkts-match"):
        entries = match.find_all("div", class_="brkts-opponent-entry")
        if len(entries) != 2:
            continue
        score_a = _extract_score(entries[0])
        score_b = _extract_score(entries[1])
        if score_a is None or score_b is None:
            continue
        winner = "A" if score_a > score_b else "B"
        dt = _extract_datetime(match)

        games: list[dict[str, Any]] = []
        popup = match.find("div", class_="brkts-popup")
        if popup:
            for game_el in popup.find_all("div", class_="brkts-popup-body-game"):
                g = _extract_game(game_el)
                if g:
                    games.append(g)

        matches.append(
            {
                "teamA": _extract_team_name(entries[0]),
                "teamB": _extract_team_name(entries[1]),
                "teamA_logo": _extract_team_logo(entries[0]),
                "teamB_logo": _extract_team_logo(entries[1]),
                "scoreA": score_a,
                "scoreB": score_b,
                "winner": winner,
                "datetime": dt.isoformat() if dt else None,
                "games": games,
            }
        )
    return matches


def assign_rounds(matches: list[dict[str, Any]]) -> list[str]:
    """按时间排序后，根据单淘汰赛场次数量分配轮次。"""
    sorted_matches = sorted(enumerate(matches), key=lambda x: x[1]["datetime"] or "")
    n = len(sorted_matches)
    labels = ["淘汰赛"] * n
    if n == 1:
        labels[sorted_matches[0][0]] = ROUND_LABELS["final"]
    elif n == 3:
        labels[sorted_matches[0][0]] = ROUND_LABELS["semi"]
        labels[sorted_matches[1][0]] = ROUND_LABELS["semi"]
        labels[sorted_matches[2][0]] = ROUND_LABELS["final"]
    elif n >= 7:
        for i, (orig_idx, _) in enumerate(sorted_matches):
            if i < n - 3:
                labels[orig_idx] = ROUND_LABELS["quarter"]
            elif i < n - 1:
                labels[orig_idx] = ROUND_LABELS["semi"]
            else:
                labels[orig_idx] = ROUND_LABELS["final"]
    return labels


def make_id(prefix: str, region_code: str, round_label: str, idx: int) -> str:
    round_code = {"八强赛": "qf", "半决赛": "sf", "总决赛": "final", "淘汰赛": "ko"}.get(
        round_label, "ko"
    )
    return f"{prefix}-{region_code}-{round_code}-{idx + 1}"


def translate_hero(name: str) -> str:
    return HERO_EN_TO_CN.get(name, name)


# 赛事统计中无法从 heroDetails.ts 识别的特殊英雄中文名 -> role
EXTRA_HERO_ROLES: dict[str, str] = {
    "载勇": "辅助",
}


def translate_mode(name: str) -> str:
    return MODE_MAP.get(name, name)


def region_code(region: str | None) -> str:
    return {"东亚": "ea", "欧洲": "eu", "大陆": "cn", "北美": "na", "南美": "sa"}.get(region or "", "gl")


def parse_group_stage(html: str, cfg: dict[str, Any]) -> list[dict[str, Any]] | None:
    """解析 Liquipedia Group Stage 积分表（grouptable）。

    返回结构：
    [
      {
        "name": "Group A",
        "teams": [
          {
            "name": "战队中文/显示名",
            "nameEn": "战队英文名",
            "logo": "...",
            "rank": 1,
            "weekWins": [2, 0],
            "weekScores": [6, 1],
            "totalWins": 2,
            "totalScoreDiff": 5,
          },
          ...
        ]
      }
    ]
    """
    soup = BeautifulSoup(html, "html.parser")
    container = None
    for h in soup.find_all(["h2", "h3", "h4"]):
        if "Group Stage" in h.get_text(strip=True):
            container = h.find_parent()
            if container:
                container = container.find_next_sibling()
            break
    if not container:
        return None

    groups: list[dict[str, Any]] = []
    tables = container.find_all("table", class_="grouptable")
    for table in tables:
        caption = table.find("caption")
        group_name = "Group"
        if caption:
            group_name = caption.get_text(strip=True)
        else:
            # 尝试从紧邻的 h4 获取组名
            prev = table.find_previous(["h4"])
            if prev and "Group" in prev.get_text(strip=True):
                group_name = prev.get_text(strip=True)

        rows = table.find_all("tr")
        teams: list[dict[str, Any]] = []
        for row in rows:
            cells = row.find_all(["td", "th"])
            if not cells:
                continue
            # 第一列通常是排名
            rank_text = cells[0].get_text(strip=True).replace(".", "")
            if not re.match(r"\d+", rank_text):
                continue
            rank = int(rank_text)
            if len(cells) < 4:
                continue

            team_cell = cells[1]
            # 提取战队名：优先 aria-label，再 data-team，再 a 文本
            team_name = team_cell.get_text(strip=True)
            team_name_en = team_name
            aria = team_cell.get("aria-label")
            if aria:
                team_name = aria
            for attr in ("data-team-name", "data-team-bracketname", "data-team-shortname"):
                v = team_cell.get(attr)
                if v:
                    team_name_en = v
                    break
            a = team_cell.find("a")
            if a:
                txt = a.get_text(strip=True)
                if txt:
                    team_name = txt
                href_name = a.get("href", "").split("/")[-1].replace("_", " ")
                if href_name:
                    team_name_en = href_name

            # logo
            logo = ""
            img = team_cell.find("img")
            if img:
                logo = _img_to_url(img)

            # 后续列：Week 1 / Week 2 / ... 结果。
            # Liquipedia grouptable 中每个 Week 占两列：第一列是 BO 结果（如 2-0），
            # 第二列是该周小分（如 6-1），因此按两列一组解析。
            week_wins: list[int] = []
            week_losses: list[int] = []
            week_scores: list[int] = []
            data_cols = cells[2:]
            for i in range(0, len(data_cols), 2):
                bo_cell = data_cols[i]
                score_cell = data_cols[i + 1] if i + 1 < len(data_cols) else None
                bo_text = bo_cell.get_text(strip=True)
                m_bo = re.match(r"(\d+)\s*-\s*(\d+)", bo_text)
                if not m_bo:
                    continue
                wins = int(m_bo.group(1))
                losses = int(m_bo.group(2))
                week_wins.append(wins)
                week_losses.append(losses)
                score_diff = wins - losses
                if score_cell:
                    score_text = score_cell.get_text(strip=True)
                    m_score = re.match(r"(\d+)\s*-\s*(\d+)", score_text)
                    if m_score:
                        score_diff = int(m_score.group(1)) - int(m_score.group(2))
                week_scores.append(score_diff)

            total_wins = sum(week_wins)
            total_losses = sum(week_losses)
            total_score_diff = sum(week_scores)
            teams.append(
                {
                    "name": team_name,
                    "nameEn": team_name_en,
                    "logo": logo,
                    "rank": rank,
                    "weekWins": week_wins,
                    "weekLosses": week_losses,
                    "weekScores": week_scores,
                    "totalWins": total_wins,
                    "totalLosses": total_losses,
                    "totalScoreDiff": total_score_diff,
                }
            )

        if teams:
            groups.append({"name": group_name, "teams": teams})

    return groups if groups else None


def build_tournaments(
    matches: list[dict[str, Any]],
    cfg: dict[str, Any],
    group_stage: list[dict[str, Any]] | None = None,
) -> list[dict[str, Any]]:
    rounds = assign_rounds(matches)
    tournaments: list[dict[str, Any]] = []
    region = cfg["region"]
    prefix = cfg["name_prefix"]
    category = cfg["category"]
    month = cfg["month"]
    rcode = region_code(region)

    for idx, m in enumerate(matches):
        dt = datetime.fromisoformat(m["datetime"]) if m["datetime"] else None
        round_label = rounds[idx]
        tid = make_id(month.replace("-", ""), rcode, round_label, idx)
        games: list[dict[str, Any]] = []
        for g in m["games"]:
            team_a_win = g["teamA_score"] > g["teamB_score"]
            games.append(
                {
                    "map": g["map"],
                    "mode": translate_mode(g["mode"]),
                    "teamA": {
                        "heroes": [translate_hero(h) for h in g["teamA_heroes"][:3]],
                        "win": team_a_win,
                    },
                    "teamB": {
                        "heroes": [translate_hero(h) for h in g["teamB_heroes"][:3]],
                        "win": not team_a_win,
                    },
                }
            )

        t: dict[str, Any] = {
            "id": tid,
            "name": f"{prefix} {round_label}",
            "date": dt.strftime("%Y-%m-%d") if dt else month + "-01",
            "category": category,
            "subCategory": "淘汰赛",
            "eliminationRound": round_label if round_label != "淘汰赛" else None,
            "region": region,
            "format": "BO5",
            "version": "v59.000",
            "teamA": {
                "name": m["teamA"],
                "nameEn": m["teamA"],
                "logo": m["teamA_logo"],
            },
            "teamB": {
                "name": m["teamB"],
                "nameEn": m["teamB"],
                "logo": m["teamB_logo"],
            },
            "score": f"{m['scoreA']}:{m['scoreB']}",
            "winner": m["winner"],
            "matches": games,
        }
        if group_stage:
            t["groupStage"] = group_stage
        tournaments.append(t)
    return tournaments


def build_schedules(tournaments: list[dict[str, Any]]) -> list[dict[str, Any]]:
    schedules = []
    for t in tournaments:
        dt = datetime.strptime(t["date"], "%Y-%m-%d")
        # 使用固定时间 20:00，原数据没有时间字段，赛程页面仅展示日期
        schedules.append(
            {
                "id": f"sch-{t['id']}",
                "date": t["date"],
                "time": "20:00",
                "tournamentName": t["name"],
                "teamA": t["teamA"]["name"],
                "teamB": t["teamB"]["name"],
                "category": t["category"],
                "region": t["region"],
                "month": t["date"][:7],
                "status": "ended",
            }
        )
    return schedules


def build_hero_stats_and_trends(tournaments: list[dict[str, Any]]) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    # 按月聚合
    month_picks: dict[str, dict[str, dict[str, Any]]] = {}
    month_map_picks: dict[str, dict[str, dict[str, int]]] = {}
    month_map_games: dict[str, dict[str, int]] = {}
    month_total_games: dict[str, int] = {}

    # 预加载 heroDetails 文本，避免循环内重复读取
    hero_details_text = HERO_DETAILS_TS.read_text(encoding="utf-8")

    for t in tournaments:
        month = t["date"][:7]
        if month not in month_picks:
            month_picks[month] = {}
            month_map_picks[month] = {}
            month_map_games[month] = {}
            month_total_games[month] = 0
        for g in t["matches"]:
            month_total_games[month] += 1
            map_name = g["map"]
            month_map_games[month][map_name] = month_map_games[month].get(map_name, 0) + 1
            for side in ("teamA", "teamB"):
                win = g[side]["win"]
                for h in g[side]["heroes"]:
                    if h in BANNED_HEROES:
                        continue
                    h_en = None
                    for en, cn in HERO_EN_TO_CN.items():
                        if cn == h:
                            h_en = en
                            break
                    role = EXTRA_HERO_ROLES.get(h)
                    if not role and h_en:
                        m = re.search(
                            rf'"enName":\s*"{re.escape(h_en)}".*?"role":\s*"([^"]+)"',
                            hero_details_text,
                            re.S,
                        )
                        if m:
                            role = m.group(1)
                    if not role:
                        role = "战士"
                    d = month_picks[month].setdefault(
                        h,
                        {"pickCount": 0, "winCount": 0, "role": role},
                    )
                    d["pickCount"] += 1
                    if win:
                        d["winCount"] += 1
                    month_map_picks[month].setdefault(h, {}).setdefault(map_name, 0)
                    month_map_picks[month][h][map_name] += 1

    stats: list[dict[str, Any]] = []
    trends: list[dict[str, Any]] = []
    for month, heroes in month_picks.items():
        total_games = month_total_games[month]
        top = []
        for h, d in heroes.items():
            pick_rate = d["pickCount"] / total_games if total_games else 0
            win_rate = d["winCount"] / d["pickCount"] if d["pickCount"] else 0
            map_rates: dict[str, float] = {}
            for map_name, picks in month_map_picks[month].get(h, {}).items():
                games_on_map = month_map_games[month].get(map_name, 0)
                map_rates[map_name] = picks / games_on_map if games_on_map else 0
            stats.append(
                {
                    "heroId": h,
                    "month": month,
                    "role": d["role"],
                    "pickRate": round(pick_rate, 4),
                    "banRate": 0,
                    "winRate": round(win_rate, 4),
                    "pickCount": d["pickCount"],
                    "banCount": 0,
                    "matchCount": total_games,
                    "mapRates": map_rates,
                }
            )
            top.append({"heroId": h, "pickRate": round(pick_rate, 4), "banRate": 0})

        top.sort(key=lambda x: x["pickRate"], reverse=True)
        picked = set(heroes.keys())
        all_cn = set(HERO_EN_TO_CN.values()) - BANNED_HEROES
        unused = sorted(all_cn - picked)
        trends.append(
            {
                "month": month,
                "topHeroes": top[:10],
                "unusedHeroes": unused,
            }
        )

    return stats, trends


def slugify_team_name(name: str) -> str:
    """把战队名转成可用的文件 slug；保留中文字符，英文统一小写。"""
    # 先替换常见特殊字符为空格/连字符
    s = re.sub(r"[()\[\]{}<>/\\|.,;:!?*\"'@#$%^&+=~`]+", "-", name)
    # 保留字母、数字、中文、日文假名、韩文以及已有连字符
    s = re.sub(r"[^\w\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af-]+", "-", s)
    # 合并连续连字符与空白
    s = re.sub(r"[-\s]+", "-", s).strip("-")
    # 仅对 ASCII 字母做小写，避免影响中文
    s = "".join(c.lower() if c.isascii() and c.isalpha() else c for c in s)
    return s or "unknown"


def team_page_title(name: str) -> str:
    """把战队名转成 Liquipedia 页面 title（空格替换为下划线）。"""
    return name.replace(" ", "_")


def player_page_title(player_id: str) -> str:
    """把选手 ID 转成 Liquipedia 页面 title。"""
    return player_id.replace(" ", "_")


def _team_name_from_link(soup: BeautifulSoup) -> str | None:
    """从队伍页面 infobox header 提取队伍名。"""
    infobox = soup.find("div", class_="fo-nttax-infobox")
    if not infobox:
        return None
    header = infobox.find("div", class_="infobox-header")
    if not header:
        return None
    # 去掉内部的 team icon
    for icon in header.find_all("span", class_="team-template-team-icon"):
        icon.decompose()
    return header.get_text(strip=True)


def _team_logo_from_page(soup: BeautifulSoup) -> str | None:
    """从队伍页面提取高清 logo URL。"""
    infobox = soup.find("div", class_="fo-nttax-infobox")
    if infobox:
        img = infobox.find("img")
        if img:
            return _img_to_url(img)
    # fallback：页面中的 team-template-image-icon
    img = soup.select_one(".team-template-image-icon img")
    if img:
        return _img_to_url(img)
    return None


def _parse_date(text: str) -> str | None:
    """把 Liquipedia 日期文本统一成 YYYY-MM-DD。"""
    text = text.strip()
    if not text:
        return None
    # 例如 "2023-06-09" 或 "2023-06-09 [14]"
    m = re.search(r"(\d{4}-\d{2}-\d{2})", text)
    if m:
        return m.group(1)
    # 例如 "September 1, 2006"
    try:
        return datetime.strptime(text, "%B %d, %Y").strftime("%Y-%m-%d")
    except ValueError:
        pass
    try:
        return datetime.strptime(text.replace("  ", " "), "%B %d, %Y").strftime("%Y-%m-%d")
    except ValueError:
        pass
    return None


def _team_region_from_page(soup: BeautifulSoup) -> str:
    """从队伍页面 infobox 解析 Region 并映射为中文赛区。"""
    region_map = {
        "europe": "欧洲",
        "emea": "欧洲",
        "asia-pacific": "东亚",
        "asia": "东亚",
        "oceania": "东亚",
        "china": "大陆",
        "chinese mainland": "大陆",
        "north america": "北美",
        "south america": "南美",
        "latin america": "南美",
    }
    infobox = soup.find("div", class_="fo-nttax-infobox")
    if not infobox:
        return ""
    for div in infobox.find_all("div", recursive=False):
        desc = div.find("div", class_="infobox-description")
        if not desc:
            continue
        key = desc.get_text(strip=True).rstrip(":").lower()
        if key == "region":
            value_div = desc.find_next_sibling("div")
            if value_div:
                raw = value_div.get_text(strip=True).lower()
                return region_map.get(raw, "")
    return ""


def parse_team_page(html: str, fallback_name: str = "") -> dict[str, Any]:
    """从队伍页面 HTML 解析当前阵容与赛区。"""
    soup = BeautifulSoup(html, "html.parser")
    name = _team_name_from_link(soup) or fallback_name
    logo = _team_logo_from_page(soup) or ""
    region = _team_region_from_page(soup)

    players: list[dict[str, Any]] = []
    # 当前阵容通常在第一个 table2__table，列：ID, Name, Join Date
    roster_table = soup.find("table", class_="table2__table")
    if roster_table:
        rows = roster_table.find_all("tr")
        if rows:
            headers = [th.get_text(strip=True).lower() for th in rows[0].find_all(["th", "td"])]
            # 确定列索引
            id_idx = next((i for i, h in enumerate(headers) if "id" in h), 0)
            name_idx = next((i for i, h in enumerate(headers) if "name" in h and "team" not in h), 1)
            join_idx = next((i for i, h in enumerate(headers) if "join" in h), 2)

            for row in rows[1:]:
                cells = row.find_all(["td", "th"])
                if len(cells) < 2:
                    continue
                pid = cells[id_idx].get_text(strip=True) if id_idx < len(cells) else ""
                real_name = cells[name_idx].get_text(strip=True) if name_idx < len(cells) else ""
                join_date = _parse_date(cells[join_idx].get_text(strip=True)) if join_idx < len(cells) else None
                if not pid:
                    continue
                players.append(
                    {
                        "id": pid,
                        "nameEn": real_name,
                        "joinDate": join_date,
                    }
                )

    return {
        "name": name,
        "nameEn": name,
        "logo": logo,
        "region": region,
        "players": players,
    }


def parse_player_page(html: str, fallback_id: str = "") -> dict[str, Any]:
    """从选手页面 HTML 解析选手资料。"""
    soup = BeautifulSoup(html, "html.parser")
    infobox = soup.find("div", class_="fo-nttax-infobox")

    player_id = fallback_id
    real_name = ""
    nationality = ""
    born = ""
    status = ""
    role = ""
    current_team = ""
    total_winnings = ""
    portrait = ""
    team_history: list[dict[str, Any]] = []

    if infobox:
        # 选手 ID：header 中去掉 team icon 后的文本
        header = infobox.find("div", class_="infobox-header")
        if header:
            for icon in header.find_all("span", class_="team-template-team-icon"):
                icon.decompose()
            # 清除 Liquipedia 编辑/帮助按钮 [e][h]，避免污染选手 ID
            for btn in header.find_all("span", class_="infobox-buttons"):
                btn.decompose()
            player_id = header.get_text(strip=True) or fallback_id

        # 照片
        img_wrapper = infobox.find("div", class_="infobox-image-wrapper")
        if img_wrapper:
            img = img_wrapper.find("img")
            if img:
                portrait = _img_to_url(img)

        # infobox 字段解析
        field_map: dict[str, str] = {}
        for div in infobox.find_all("div", recursive=False):
            desc = div.find("div", class_="infobox-description")
            if not desc:
                continue
            key = desc.get_text(strip=True).rstrip(":").lower()
            value_div = desc.find_next_sibling("div")
            if value_div:
                field_map[key] = value_div.get_text(strip=True)

        real_name = field_map.get("name", "")
        nationality = field_map.get("nationality", "")
        born = field_map.get("born", "")
        status = field_map.get("status", "")
        role = field_map.get("role", "")
        current_team = field_map.get("team", "")
        total_winnings = field_map.get("approx. total winnings", "")

        # 队伍历史：History 标题下的表格
        history_header = None
        for h in infobox.find_all("div", class_="infobox-header"):
            if h.get_text(strip=True).lower() == "history":
                history_header = h
                break
        if history_header:
            # History 标题通常在独立的 div 中，表格在其后的 sibling div 里
            header_container = history_header.find_parent("div")
            table = None
            if header_container:
                sibling = header_container.find_next_sibling("div")
                if sibling:
                    table = sibling.find("table")
            # 兜底：直接在 infobox 里找 History 之后的第一个 table
            if not table:
                passed_history = False
                for el in infobox.find_all(["div", "table"], recursive=True):
                    if el.name == "div" and "infobox-header" in " ".join(el.get("class", [])):
                        if el.get_text(strip=True).lower() == "history":
                            passed_history = True
                    elif passed_history and el.name == "table":
                        table = el
                        break
            if table:
                for row in table.find_all("tr"):
                    cells = row.find_all("td")
                    if len(cells) >= 2:
                        date_text = cells[0].get_text(strip=True)
                        team_link = cells[1].find("a")
                        team_name = team_link.get_text(strip=True) if team_link else cells[1].get_text(strip=True)
                        # 解析起止日期：先提取所有 YYYY-MM-DD
                        dates = re.findall(r"\d{4}-\d{2}-\d{2}", date_text)
                        start = dates[0] if dates else None
                        end = dates[1] if len(dates) > 1 else None
                        team_history.append(
                            {
                                "team": team_name,
                                "startDate": start,
                                "endDate": end,
                            }
                        )

    return {
        "id": player_id,
        "name": player_id,
        "nameEn": real_name,
        "nationality": nationality,
        "born": born,
        "status": status,
        "role": role,
        "currentTeam": current_team,
        "totalWinnings": total_winnings,
        "portrait": portrait,
        "teamHistory": team_history,
        "topHeroes": [],
        "stats": {"totalKills": 0, "avgDamage": 0, "winRate": 0, "matches": 0},
    }


def collect_unique_teams(tournaments: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    """从 tournaments 收集所有唯一队伍，key 为 slugified name。"""
    teams: dict[str, dict[str, Any]] = {}
    for t in tournaments:
        for side in ("teamA", "teamB"):
            team = t[side]
            name = team.get("name") or "Unknown"
            slug = slugify_team_name(name)
            if slug not in teams:
                teams[slug] = {
                    "name": name,
                    "nameEn": team.get("nameEn") or name,
                    "logo": team.get("logo", ""),
                    "region": t.get("region"),
                }
    return teams


def _detect_social_platform(url: str) -> str:
    """根据 URL 域名识别社交平台。"""
    u = url.lower()
    if "twitch.tv" in u:
        return "twitch"
    if "twitter.com" in u or "x.com" in u:
        return "twitter"
    if "youtube.com" in u or "youtu.be" in u:
        return "youtube"
    if "tiktok.com" in u:
        return "tiktok"
    if "bilibili.com" in u:
        return "bilibili"
    if "douyin.com" in u:
        return "douyin"
    if "douyu.com" in u:
        return "douyu"
    if "huya.com" in u:
        return "huya"
    if "instagram.com" in u:
        return "instagram"
    if "discord" in u:
        return "discord"
    return "other"


def parse_player_portal(html: str, region: str) -> list[dict[str, Any]]:
    """解析 Liquipedia Portal:Players/{region} 页面，返回选手列表。

    页面可能包含多个按国家/地区划分的 wikitable，逐个遍历。
    每个选手包含：id, name, nameEn, realName, team, region, links
    """
    soup = BeautifulSoup(html, "html.parser")
    tables = soup.find_all("table", class_="wikitable")

    players: list[dict[str, Any]] = []
    for table in tables:
        # 确认表头包含 ID / Team / Links，避免误解析其他表格
        headers = [th.get_text(strip=True).lower() for th in table.find_all("th")]
        if "id" not in headers or "team" not in headers:
            continue
        for tr in table.find_all("tr")[1:]:
            tds = tr.find_all("td")
            if len(tds) < 4:
                continue
            player_id = tds[0].get_text(strip=True)
            if not player_id:
                continue
            real_name = tds[1].get_text(strip=True)
            team = tds[2].get_text(strip=True)
            # 只保留有战队归属的选手
            if not team:
                continue

            links: list[dict[str, str]] = []
            for a in tds[3].find_all("a", href=True):
                href = a["href"]
                if href.startswith("/"):
                    href = f"https://liquipedia.net{href}"
                platform = _detect_social_platform(href)
                links.append({"platform": platform, "url": href})

            players.append(
                {
                    "id": slugify_team_name(player_id),
                    "name": player_id,
                    "nameEn": player_id,
                    "realName": real_name,
                    "teamId": slugify_team_name(team),
                    "currentTeam": team,
                    "region": region,
                    "nationality": "",
                    "born": "",
                    "status": "Active",
                    "role": "",
                    "totalWinnings": "",
                    "portrait": "",
                    "teamHistory": [],
                    "topHeroes": [],
                    "stats": {"totalKills": 0, "avgDamage": 0, "winRate": 0, "matches": 0},
                    "links": links,
                }
            )
    return players


def build_players_from_portal(
    refresh: bool = False,
    retries: int = DEFAULT_RETRIES,
    delay: int = DEFAULT_DELAY,
) -> list[dict[str, Any]]:
    """从 Portal:Players 各赛区页面抓取有战队的选手。"""
    all_players: list[dict[str, Any]] = []
    seen: set[str] = set()
    for region_en, region_cn in PLAYER_PORTAL_REGIONS:
        title = f"Portal:Players/{region_en}"
        html = fetch_liquipedia_page(
            title,
            PLAYER_PORTAL_CACHE_DIR,
            refresh=refresh,
            retries=retries,
            delay=delay,
        )
        if not html:
            print(f"  -> skipped {title}")
            continue
        players = parse_player_portal(html, region_cn)
        print(f"  -> {title}: {len(players)} players with team")
        for p in players:
            if p["id"] in seen:
                continue
            seen.add(p["id"])
            all_players.append(p)
    return all_players


def build_teams_and_players(
    tournaments: list[dict[str, Any]],
    refresh: bool = False,
    retries: int = DEFAULT_RETRIES,
    delay: int = DEFAULT_DELAY,
    skip_team_pages: bool = False,
    skip_players: bool = False,
) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    """抓取队伍页面和选手页面，返回 (teams, players) 列表。"""
    unique_teams = collect_unique_teams(tournaments)
    print(f"Collected {len(unique_teams)} unique teams")

    teams: list[dict[str, Any]] = []
    players: list[dict[str, Any]] = []
    seen_players: set[str] = set()

    if skip_team_pages:
        # 不抓取队伍页面，只保留 tournament 中的基本信息
        for slug, info in unique_teams.items():
            teams.append(
                {
                    "id": slug,
                    "name": info["name"],
                    "nameEn": info["nameEn"],
                    "logo": info["logo"],
                    "region": info["region"],
                    "players": [],
                }
            )
        return teams, players

    for slug, info in unique_teams.items():
        title = team_page_title(info["name"])
        html = fetch_liquipedia_page(title, TEAM_CACHE_DIR, refresh=refresh, retries=retries, delay=delay)
        if html:
            parsed = parse_team_page(html, fallback_name=info["name"])
            # 如果页面 logo 更高清，优先使用；否则保留 tournament 中的 logo
            logo = parsed.get("logo") or info["logo"]
            team_players = parsed.get("players", [])
        else:
            logo = info["logo"]
            team_players = []

        # 优先使用战队页面本身的 Region，缺失时回退到 tournament 配置中的赛区
        team_region = parsed.get("region") if html else ""
        if not team_region:
            team_region = info["region"]

        team_doc = {
            "id": slug,
            "name": info["name"],
            "nameEn": info["nameEn"],
            "logo": logo,
            "region": team_region,
            "founded": "",
            "style": [],
            "history": [],
            "players": [p["id"] for p in team_players],
            "stats": {"totalKills": 0, "avgDamage": 0, "winRate": 0},
        }
        teams.append(team_doc)

        if skip_players:
            continue

        for p in team_players:
            pid = p["id"]
            if pid in seen_players:
                continue
            seen_players.add(pid)
            ptitle = player_page_title(pid)
            phtml = fetch_liquipedia_page(ptitle, PLAYER_CACHE_DIR, refresh=refresh, retries=retries, delay=delay)
            if phtml:
                player_doc = parse_player_page(phtml, fallback_id=pid)
                player_doc["teamId"] = slug
                player_doc.setdefault("joinDate", p.get("joinDate"))
                players.append(player_doc)

    return teams, players


def download_player_portraits(players: list[dict[str, Any]]) -> None:
    """把选手照片下载到 public/players/，并把 portrait 改为本地路径。"""
    players_dir = ROOT / "public" / "players"
    players_dir.mkdir(parents=True, exist_ok=True)

    seen: set[str] = set()
    for p in players:
        src_url = p.get("portrait", "")
        if not src_url or src_url.startswith("/players/"):
            continue
        slug = slugify_team_name(p["id"])
        if slug in seen:
            p["portrait"] = f"/players/{slug}.png"
            continue
        seen.add(slug)
        ext = Path(src_url.split("?")[0]).suffix or ".png"
        dest = players_dir / f"{slug}{ext}"
        try:
            req = urllib.request.Request(
                src_url,
                headers={
                    "User-Agent": LIQUIPEDIA_UA,
                    "Accept": "image/webp,image/apng,image/*,*/*",
                    "Referer": "https://liquipedia.net/",
                },
            )
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            dest.write_bytes(data)
            print(f"  -> portrait {p['id']} -> {dest}")
            p["portrait"] = f"/players/{slug}{ext}"
            time.sleep(0.5)
        except Exception as exc:
            print(f"  -> portrait download failed {p['id']}: {exc}")


def use_local_team_logos(teams: list[dict[str, Any]]) -> None:
    """如果 public/teams/ 已存在对应 logo，优先使用本地路径（避开 429 下载）。"""
    teams_dir = ROOT / "public" / "teams"
    if not teams_dir.exists():
        return

    # 建立 slug -> 实际文件名 映射
    existing: dict[str, str] = {}
    for f in teams_dir.iterdir():
        if f.is_file():
            existing[slugify_team_name(f.stem)] = f.name

    for team in teams:
        slug = slugify_team_name(team.get("name", ""))
        local_file = existing.get(slug)
        if local_file:
            team["logo"] = f"/teams/{local_file}"


def download_team_logos(tournaments: list[dict[str, Any]], skip_download: bool = False) -> None:
    """把 tournament 中的战队 logo 改为本地路径；本地不存在时尝试下载。

    处理对阵双方以及小组赛积分榜中的队伍 logo。
    若本地已存在对应文件，优先复用本地文件，避免 429 重复下载。
    skip_download=True 时只匹配本地已有文件，不发起网络请求。
    """
    teams_dir = ROOT / "public" / "teams"
    teams_dir.mkdir(parents=True, exist_ok=True)

    # 预扫描本地已有 logo
    existing: dict[str, str] = {}
    for f in teams_dir.iterdir():
        if f.is_file():
            existing[slugify_team_name(f.stem)] = f.name

    seen: set[str] = set()

    def _process_logo(team: dict[str, Any]) -> None:
        src_url = team.get("logo", "")
        if not src_url or src_url.startswith("/teams/"):
            return
        slug = slugify_team_name(team["name"])
        if slug in seen:
            team["logo"] = f"/teams/{existing.get(slug, f'{slug}.png')}"
            return
        seen.add(slug)

        # 本地已有则直接复用
        local_file = existing.get(slug)
        if local_file:
            print(f"  -> logo {team['name']} -> use local {local_file}")
            team["logo"] = f"/teams/{local_file}"
            return

        if skip_download:
            return

        ext = Path(src_url.split("?")[0]).suffix or ".png"
        dest = teams_dir / f"{slug}{ext}"
        try:
            req = urllib.request.Request(
                src_url,
                headers={
                    "User-Agent": LIQUIPEDIA_UA,
                    "Accept": "image/webp,image/apng,image/*,*/*",
                    "Referer": "https://liquipedia.net/",
                },
            )
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            dest.write_bytes(data)
            print(f"  -> logo {team['name']} -> {dest}")
            team["logo"] = f"/teams/{slug}{ext}"
            existing[slug] = dest.name
            time.sleep(0.5)
        except Exception as exc:
            print(f"  -> logo download failed {team['name']}: {exc}")
            # 保留原 URL，至少还能显示

    for t in tournaments:
        for side in ("teamA", "teamB"):
            _process_logo(t[side])
        for group in t.get("groupStage", []) or []:
            for team in group.get("teams", []):
                _process_logo(team)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--refresh", action="store_true", help="忽略缓存重新抓取")
    parser.add_argument(
        "--delay",
        type=int,
        default=DEFAULT_DELAY,
        help=f"成功请求后的等待秒数（默认 {DEFAULT_DELAY}）",
    )
    parser.add_argument(
        "--retries",
        type=int,
        default=DEFAULT_RETRIES,
        help=f"网络异常时的最大重试次数（默认 {DEFAULT_RETRIES}）",
    )
    parser.add_argument(
        "--cache-only",
        action="store_true",
        dest="cache_only",
        help="只使用本地缓存，不发起新请求",
    )
    parser.add_argument(
        "--pages",
        type=str,
        default="",
        help="逗号分隔的页面 path 过滤，例如 'Chinese_Mainland/February/Monthly_Finals,Brawl_Cup'",
    )
    parser.add_argument(
        "--append",
        action="store_true",
        default=True,
        help="追加到已有 JSON，而非覆盖（默认开启）",
    )
    parser.add_argument(
        "--overwrite",
        action="store_false",
        dest="append",
        help="强制覆盖已有 JSON（关闭默认追加）",
    )
    parser.add_argument(
        "--skip-logos",
        action="store_true",
        dest="skip_logos",
        help="跳过战队 logo 下载，避免 429 限流",
    )
    parser.add_argument(
        "--skip-team-pages",
        action="store_true",
        dest="skip_team_pages",
        help="跳过抓取队伍页面（不获取阵容）",
    )
    parser.add_argument(
        "--skip-players",
        action="store_true",
        dest="skip_players",
        help="跳过抓取选手个人页面",
    )
    parser.add_argument(
        "--skip-player-portal",
        action="store_true",
        dest="skip_player_portal",
        help="跳过从 Portal:Players 抓取选手列表",
    )
    parser.add_argument(
        "--skip-portraits",
        action="store_true",
        dest="skip_portraits",
        help="跳过下载选手照片",
    )
    args = parser.parse_args()

    pages = PAGES
    if args.pages:
        allowed = {p.strip() for p in args.pages.split(",")}
        pages = [cfg for cfg in PAGES if any(a in cfg["path"] for a in allowed)]
        if not pages:
            print(f"No pages matched filter: {args.pages}")
            return 1

    all_tournaments: list[dict[str, Any]] = []
    skipped_pages: list[str] = []
    empty_pages: list[str] = []
    for cfg in pages:
        html = fetch_html(
            cfg["path"],
            refresh=args.refresh,
            retries=args.retries if not args.cache_only else 0,
            delay=args.delay,
        )
        if not html:
            print(f"  skipped {cfg['path']}")
            skipped_pages.append(cfg["path"])
            continue
        matches = parse_matches(html)
        print(f"  parsed {len(matches)} matches")
        if not matches:
            empty_pages.append(cfg["path"])
            continue
        group_stage = parse_group_stage(html, cfg)
        if group_stage:
            print(f"  parsed {len(group_stage)} groups")
        all_tournaments.extend(build_tournaments(matches, cfg, group_stage))

    if skipped_pages:
        print(f"WARNING: {len(skipped_pages)} page(s) skipped (no cache or fetch failed): {', '.join(skipped_pages)}")
    if empty_pages:
        print(f"WARNING: {len(empty_pages)} page(s) parsed 0 matches (may lack detailed picks): {', '.join(empty_pages)}")

    if not all_tournaments:
        print("No tournaments parsed. Exiting without overwriting existing data.")
        return 1

    existing: dict[str, Any] = {"tournaments": [], "schedules": [], "heroTournamentStats": [], "metaTrends": []}
    if args.append and OUT_JSON.exists():
        try:
            existing = json.loads(OUT_JSON.read_text(encoding="utf-8"))
        except Exception as exc:
            print(f"  -> failed to read existing JSON: {exc}")

    if args.append:
        # 用 id 去重，新数据覆盖旧数据
        existing_by_id = {t["id"]: t for t in existing.get("tournaments", [])}
        for t in all_tournaments:
            existing_by_id[t["id"]] = t
        merged_tournaments = list(existing_by_id.values())
        # 排序：按日期
        merged_tournaments.sort(key=lambda x: x.get("date", ""))
        all_tournaments = merged_tournaments

    if args.cache_only:
        # cache-only 时不发起网络请求，但仍尝试匹配本地已有的 logo
        download_team_logos(all_tournaments, skip_download=True)
    elif not args.skip_logos:
        download_team_logos(all_tournaments)
    else:
        print("  -> skip logo download")

    # 抓取队伍页面与选手资料
    teams, players = build_teams_and_players(
        all_tournaments,
        refresh=args.refresh,
        retries=args.retries if not args.cache_only else 0,
        delay=args.delay,
        skip_team_pages=args.skip_team_pages,
        skip_players=args.skip_players,
    )

    # 生成 teams 后，优先把远程 logo URL 替换为本地已存在的文件
    use_local_team_logos(teams)

    if not args.skip_portraits and not args.skip_players:
        download_player_portraits(players)
    else:
        print("  -> skip portrait download")

    # 从 Portal:Players 补充有战队的选手（重点赛区）
    if not args.skip_player_portal:
        portal_players = build_players_from_portal(
            refresh=args.refresh,
            retries=args.retries if not args.cache_only else 0,
            delay=args.delay,
        )
        # 以 tournaments 抓取的选手为主，portal 补充 links / region / realName
        existing_players_by_id = {p["id"]: p for p in players}
        for pp in portal_players:
            if pp["id"] in existing_players_by_id:
                ep = existing_players_by_id[pp["id"]]
                if pp.get("links"):
                    ep.setdefault("links", []).extend(pp["links"])
                if pp.get("region"):
                    ep["region"] = pp["region"]
                if pp.get("realName"):
                    ep["realName"] = pp["realName"]
                if pp.get("currentTeam") and not ep.get("currentTeam"):
                    ep["currentTeam"] = pp["currentTeam"]
            else:
                players.append(pp)
        print(f"  -> merged {len(portal_players)} portal players, total {len(players)}")

    schedules = build_schedules(all_tournaments)
    hero_stats, meta_trends = build_hero_stats_and_trends(all_tournaments)

    payload = {
        "tournaments": all_tournaments,
        "schedules": schedules,
        "heroTournamentStats": hero_stats,
        "metaTrends": meta_trends,
    }

    # 写入前自动备份旧数据，防止抓取失败导致历史数据丢失
    if OUT_JSON.exists():
        backup_path = OUT_JSON.with_suffix(f".json.{datetime.now().strftime('%Y%m%d_%H%M%S')}.bak")
        try:
            backup_path.write_text(OUT_JSON.read_text(encoding="utf-8"), encoding="utf-8")
            print(f"  -> backed up existing data to {backup_path}")
        except Exception as exc:
            print(f"  -> failed to backup existing data: {exc}")

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT_JSON} ({len(all_tournaments)} tournaments)")

    TEAMS_JSON.parent.mkdir(parents=True, exist_ok=True)
    TEAMS_JSON.write_text(json.dumps(teams, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {TEAMS_JSON} ({len(teams)} teams)")

    PLAYERS_JSON.parent.mkdir(parents=True, exist_ok=True)
    PLAYERS_JSON.write_text(json.dumps(players, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {PLAYERS_JSON} ({len(players)} players)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
