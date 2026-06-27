<!-- BEGIN:nextjs-agent-rules -->
# 项目背景与 Next.js 版本提示

本项目使用 **Next.js 16**，它与你训练数据中的 Next.js 可能存在破坏性差异。编写代码前请查阅 `node_modules/next/dist/docs/` 中的相关指南，并留意废弃（deprecation）提示。
<!-- END:nextjs-agent-rules -->

# AGENTS.md —— 荒野乱斗 Brawl Stars 资料站

> 本文件面向 AI 编码助手。若你第一次接触本项目，请先阅读本节，再修改任何代码。

---

## 1. 项目概述

这是一个以 Supercell 手游《荒野乱斗》（Brawl Stars）为主题的资料展示站，采用 Next.js App Router 构建，主要面向中文用户。项目定位是“图鉴 + 赛事”站点：

- **英雄图鉴**：展示英雄列表、分类筛选、英雄详情页（技能、背景故事）。
- **游戏模式**：展示游戏模式卡片、实时轮换（rotation）倒计时、模式详情页。
- **对战地图**：展示地图列表，可按模式 / 是否在实时天梯池中筛选。
- **赛事中心**：赛事（tournaments）、战队（teams）、选手（players）、赛程（schedule）、数据统计（stats）。
- **用户系统**：基于 Auth.js + Prisma + SQLite 的邮箱/密码注册登录；地图、英雄、表情收藏按用户持久化，提供"我的地图"、"我的英雄"、"个人中心"、"个人分享卡片"页面与基于偏好的个性化推荐；支持自定义昵称与英雄表情头像；记录最近浏览历史。

静态数据集中在 `lib/data.ts` 和 `lib/data/esports.ts`；用户数据（收藏）持久化在 SQLite 数据库中。动态数据通过 Next.js API Route 代理，默认使用 Supercell 官方 API `https://api.brawlstars.com/v1`（需要配置 `BRAWL_API_TOKEN` 且部署 IP 在白名单内）；未配置 token 时部分接口将返回空数据或 503。

---

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js `16.2.6`（App Router） |
| UI 库 | React `19.2.4` |
| 语言 | TypeScript `^5` |
| 样式 | Tailwind CSS `v4`（`@tailwindcss/postcss`） |
| 代码规范 | ESLint `9`（Flat Config）+ `eslint-config-next` |
| 包管理 | npm（`package-lock.json` 存在） |
| 认证 | Auth.js (NextAuth.js v5) + Credentials Provider（邮箱密码） |
| 密码哈希 | bcryptjs |
| 数据库 ORM | Prisma 7 + SQLite（文件数据库） |
| 数据库驱动 | better-sqlite3 + @prisma/adapter-better-sqlite3 |
| 运行时 | Node.js（本地开发 / Vercel 等 Node 部署环境） |

---

## 3. 关键配置文件

| 文件 | 作用 |
|------|------|
| `package.json` | 依赖与脚本入口。 |
| `next.config.ts` | Next.js 配置（当前为默认空配置，未启用静态导出）。 |
| `tsconfig.json` | TypeScript 配置，`paths` 中定义 `@/*` 映射到项目根目录。 |
| `eslint.config.mjs` | ESLint Flat Config，继承 `eslint-config-next/core-web-vitals` 与 `eslint-config-next/typescript`。 |
| `postcss.config.mjs` | 注册 `@tailwindcss/postcss` 插件。 |
| `app/globals.css` | Tailwind v4 入口，含自定义 `@theme` / `@utility`、动画 keyframes、滚动吸附、视差辅助样式。 |
| `auth.ts` | Auth.js 配置入口：Prisma Adapter + Credentials Provider（邮箱密码登录）。 |
| `app/api/auth/register/route.ts` | 用户注册接口：邮箱校验、bcryptjs 密码哈希、写入 User 表。 |
| `prisma/schema.prisma` | Prisma 数据模型：User / Account / Session / VerificationToken / FavoriteMap / FavoriteHero / ViewHistory / FavoritePin。 |
| `prisma.config.ts` | Prisma 7 配置：数据源、迁移路径等。 |
| `lib/prisma.ts` | 带 better-sqlite3 driver adapter 的 PrismaClient 单例。 |

---

## 4. 目录结构与模块划分

```
app/                    # Next.js App Router 页面与 API
├── api/
│   ├── auth/[...nextauth]/route.ts  # Auth.js 认证回调
│   ├── brawl-data/route.ts          # 代理 Supercell 官方 API 的 maps + events，缓存 60s
│   ├── rotation/route.ts            # 代理 Supercell 官方 API 的 events rotation，缓存 5min
│   ├── user/favorites/route.ts      # 当前登录用户的地图收藏增删查
│   ├── user/heroes/route.ts         # 当前登录用户的英雄收藏增删查
│   ├── user/pins/route.ts           # 当前登录用户表情收藏增删查
│   ├── user/profile/route.ts        # 当前登录用户资料查询与更新
│   └── user/views/route.ts          # 当前登录用户最近浏览记录增删查
├── events/                    # 赛事中心页面（列表、详情、战队、选手、赛程、数据）
├── favorites/page.tsx         # 我的收藏页面（含个性化推荐）
├── heroes/[id]/page.tsx       # 英雄详情页
├── login/page.tsx             # 登录页（邮箱密码）
├── register/page.tsx          # 注册页（邮箱密码）
├── modes/[id]/page.tsx        # 模式详情页
├── esports.ts                 # 与 lib/data/esports.ts 部分重复的赛事静态数据
├── globals.css
├── layout.tsx
├── page.tsx                   # 首页（4 个滚动吸附 section）

components/             # React 组件
├── section_hero/
│   └── HeroSection.tsx        # 英雄图鉴板块
├── section_map/
│   └── MapSection.tsx         # 对战地图板块
├── section_mode/
│   └── ModeSection.tsx        # 游戏模式板块
├── auth/
│   ├── AuthProvider.tsx       # next-auth SessionProvider 包裹
│   └── UserMenu.tsx           # 导航栏用户头像/登录入口下拉菜单
├── BannerCarousel.tsx         # 首页轮播容器
├── Footer.tsx
├── Navbar.tsx
├── ScrollIndicator.tsx        # 右侧滚动进度导航
└── Swiper.tsx                 # 通用图片轮播

hooks/
└── useScrollSnapTransition.ts # 滚动吸附视差 + 内容淡入淡出 Hook

lib/
├── data.ts                    # 核心静态数据：导航、英雄、模式、地图
└── data/
    ├── esports.ts             # 赛事静态数据：赛事、战队、选手、赛程、统计
    └── heroDetails.ts         # 英雄详细数据（含属性、技能、星辉、妙具、皮肤、表情、芭菲等）

public/                 # 静态资源
├── HeroAvatars/             # 英雄头像
├── PromoArt/                # 首页轮播图
├── Usedinheroes/            # 英雄详情图、背景、技能图标
├── Usedinmode/              # 模式图片
├── buffies/、gadgets/、pins/、starpowers/  # 英雄相关素材
├── glo/                     # 通用装饰图 / logo
└── players/、teams/         # 赛事相关素材
```

---

## 5. 构建、开发与测试命令

```bash
# 安装依赖
npm install

# 本地开发服务器（默认 http://localhost:3000）
npm run dev

# 生产构建
npm run build

# 启动生产服务器（需先 build）
npm run start

# 代码检查
npm run lint          # 运行 ESLint
```

> 注意：当前项目 **没有配置测试框架**，`package.json` 中也没有测试脚本。如需新增测试，请自行引入 Vitest / Jest / Playwright 等，并遵循现有目录约定放在项目根目录或 `__tests__` 目录。

---

## 6. 运行时架构与数据流

1. **路由**：基于 Next.js App Router。所有交互页面几乎都是 Client Component（`'use client'`），原因是需要大量 DOM 监听、滚动吸附与本地状态。
2. **静态数据**：
   - 英雄、模式、地图 → `lib/data.ts`
   - 赛事 → `lib/data/esports.ts`（其底层 tournaments/schedules/teams/players 来自 `scripts/fetch_liquipedia_esports.py` 抓取的 Liquipedia 数据，写入 `lib/data/liquipediaTournaments.json`、`liquipediaTeams.json`、`liquipediaPlayers.json`）
3. **动态数据**：
   - `/api/brawl-data` 并发请求 `api.brawlstars.com/v1/maps` 与 `/v1/events/rotation`，服务端缓存 60 秒。
   - `/api/rotation` 请求 `api.brawlstars.com/v1/events/rotation`，服务端缓存 5 分钟，并把原始 mode 名称映射为站内 `modeId`。
   - 调用官方 API 需要 `BRAWL_API_TOKEN`，且服务器出口 IP 必须在 Supercell 开发者后台白名单中。
4. **首页数据获取**：`ModeSection` 和 `MapSection` 在客户端请求上述 API，渲染实时轮换与地图列表。
5. **用户与收藏**：`AuthProvider` 包裹全局提供 JWT 会话。地图收藏：`MapSection` 未登录时使用 `localStorage` 收藏，登录后同步到 `/api/user/favorites` 并持久化到 SQLite；`/favorites` 页面展示收藏并基于模式分布推荐同模式地图。英雄收藏：英雄详情页与首页英雄板块均提供收藏按钮；`/heroes/favorites` 页面展示收藏并基于英雄职位（role）推荐相似英雄。表情收藏：`/profile/settings` 可对英雄表情（pins）点心形收藏，建立"我的表情库"，并从中选择头像。浏览历史：查看地图弹窗、英雄详情页、模式详情页时通过 `useRecordView` 记录到 `ViewHistory`；`/profile` 个人中心展示最近浏览。资料设置：`/profile/settings` 可修改昵称并选择表情头像；更新后通过 `update()` 刷新会话。分享卡片：`/profile/card` 聚合地图/英雄收藏数、最近浏览、最爱职位等数据，使用 `html2canvas` 生成可保存分享的名片图片。
6. **详情页**：直接读取 `lib/data/heroDetails.ts`（V2）中的静态记录，无额外请求。页面已按 Brawl Insights Stats 页风格拆分为属性、普攻&大招、随身妙具、星辉之力、极限充能、随身秒具、皮肤、表情&芭菲、模式/地图表现等可折叠区块。

---

## 7. 代码风格与约定

### 7.1 语言

- UI 文本与注释主要使用 **简体中文**。
- 类型 / 变量命名以英文为主（如 `Hero`、`Skill`、`ModeData`）。

### 7.2 组件规范

- 需要 DOM 操作或 state 的页面/组件使用 `'use client'` 指令。
- 组件文件名使用 PascalCase（如 `HeroSection.tsx`）。
- 普通工具/数据文件使用 camelCase（如 `data.ts`、`useScrollSnapTransition.ts`）。
- 路由目录使用 kebab-case（如 `heroes/[id]`、`brawl-data`）。

### 7.3 导入路径

- 统一使用路径别名 `@/`，例如：
  ```ts
  import Navbar from '@/components/Navbar';
  import { heroList } from '@/lib/data';
  ```
- `@/` 在 `tsconfig.json` 中映射为项目根目录 `./*`。

### 7.4 样式

- 使用 Tailwind CSS v4。入口文件 `app/globals.css` 中：
  - `@import "tailwindcss"` 引入 Tailwind；
  - `@theme` 注册自定义缓动与动画延迟变量；
  - `@utility` 注册自定义动画类（如 `animate-val-skew-reveal`）。
- 组件内大量混用 Tailwind utility、arbitrary values（如 `bg-[#FFD500]`）与内联 `style={{}}`。
- 保持 `globals.css` 作为全局动画与滚动行为的唯一来源，新增全局动画请优先在此注册 `@utility`。

### 7.5 类型

- 数据模型优先使用 `interface` 并导出，集中在 `lib/data.ts` / `lib/data/esports.ts`。
- API 解析处存在少量 `any`，修改时建议逐步收紧类型。

### 7.6 静态资源

- 图片资源放在 `public/` 下，通过根路径引用（如 `/HeroAvatars/xueli.png`）。
- 项目中同时存在 Next.js `<Image />` 与原生 `<img />`，新增页面时推荐使用 Next.js `<Image />` 以优化性能，但若需要复杂的 CSS clip/gradient 效果，可沿用现有 `<img />` 模式。

---

## 8. 测试说明

- 当前项目 **没有测试用例、测试脚本或测试配置文件**。
- `.gitignore` 中已包含 `/coverage`，为将来引入测试工具预留。
- 若需要验证改动，通常做法：
  1. `npm run lint` 检查代码规范；
  2. `npm run build` 检查 TypeScript 编译与构建是否通过；
  3. `npm run start` 在本地预览生产构建。

### 9.1 赛事个性化功能

- 数据库新增 `FollowedTeam`、`FollowedPlayer`、`EventFavorite`、`Prediction` 模型，分别记录用户关注的战队/选手、收藏的赛事内容、以及对 `Tournament` 的胜负预测。
- 相关 API：
  - `/api/user/follows/teams`、`/api/user/follows/players`：关注/取消关注战队或选手。
  - `/api/user/favorites/events`：收藏战队、选手或比赛。
  - `/api/user/predictions`：提交/更新比赛预测，提交时根据赛事实际结果立即判定是否正确。
- 页面与组件：
  - `/events/my`：我的赛事中心，展示我的赛程、关注、收藏与预测准确率。
  - `FollowButton`、`EventFavoriteButton`、`PredictionWidget`：可复用的关注、收藏、预测组件。
  - 战队详情页、选手详情页、赛事详情页、赛程页均已集成关注和收藏入口。
- 浏览记录类型扩展：`useRecordView` 支持 `team`、`player`、`match`，赛事页面访问会自动写入 `ViewHistory`。

---

## 9. 安全与部署注意事项

1. **第三方 API 代理**：
   - 不要在 API Route 中暴露任何私有 token。
   - `/api/brawl-data` 与 `/api/rotation` 目前调用 Supercell 官方 API，通过服务端 `Authorization: Bearer <BRAWL_API_TOKEN>` 鉴权，并设置 `revalidate` 缓存降低请求频率。
2. **环境变量**：
   - 项目使用 `BRAWL_API_TOKEN` 调用 Supercell 官方 API。请写入 `.env.local`（已在 `.gitignore` 中排除 `.env*`）。本地开发时若 IP 不在白名单，请求会被拒绝；生产环境必须部署到白名单内的服务器公网 IP。
   - 用户系统新增 `DATABASE_URL`、`AUTH_SECRET`，参考 `.env.local.example` 进行配置。
   - `AUTH_SECRET` 生产环境请使用 `npx auth secret` 生成随机密钥。
3. **数据库**：
   - 当前使用 SQLite 文件数据库（`prisma/dev.db`），适合本地开发与低流量场景。
   - 部署到 Vercel 等 Serverless 平台时，文件系统通常只读，需要迁移到 PostgreSQL（如 Vercel Postgres / Neon）并更新 `prisma/schema.prisma`、`prisma.config.ts`、`lib/prisma.ts`。
   - 迁移命令：`npx prisma migrate dev`（开发） / `npx prisma migrate deploy`（生产）。
4. **部署**:
   - 默认输出为 Next.js SSR/ISR，可直接部署到 Vercel。
   - 当前 `next.config.ts` 未设置 `output: 'export'`，不要按纯静态站点方式部署。
4. **资源路径**：
   - 静态资源较多且体积可能较大，部署前建议检查 `public/` 中无用图片，避免构建产物过大。
5. **无障碍与动效**：
   - `globals.css` 已包含 `@media (prefers-reduced-motion: reduce)` 降级。
   - 新增动画时，请同时补充该媒体查询下的禁用/简化逻辑。

---

## 10. 已知问题与注意事项

- `app/esports.ts` 与 `lib/data/esports.ts` 内容不同（`app/esports.ts` 行数更少），疑似重复或历史遗留文件。修改赛事数据时建议确认引用的是 `lib/data/esports.ts`，并考虑清理重复文件。
- `app/api/rotation/route.ts` 已按 Next.js App Router 约定使用单数 `route.ts`。
- 项目使用了 Next.js 16 和 React 19 的实验性/新特性，引入第三方库时请确认其兼容性。
- 赛事数据目前覆盖 2025–2026 年的 LCQ、全球总决赛、brawlcup、月赛；2026 年月赛已包含欧洲、东亚、大陆、北美、南美五个赛区（其中北美/南美 Season 1–4 已有完整对阵数据，Season 5–6 取决于 Liquipedia 页面更新进度）。重新抓取时请留意 Liquipedia API 的限流与封禁策略。
