// ============================================================
// 统一数据层 — 所有硬编码数据集中在此文件
// ============================================================

import { heroDetailsData, heroListV2 } from './data/heroDetails';
export { heroDetailsData, heroListV2 };
export type { HeroDetailV2, HeroRarity, HeroStats, HeroSkill, HeroSkin } from './data/heroDetails';

// -------------------- 1. 导航菜单 --------------------
export interface NavMenu {
  name: string;
  path: string;
}

export const navMenus: NavMenu[] = [
  { name: '首页', path: '/' },
  { name: '英雄图鉴', path: '/#hero' },
  { name: '游戏模式', path: '/#mode' },
  { name: '对战地图', path: '/#map' },
  { name: '赛事', path: '/events' },
];

// -------------------- 2. 英雄列表 --------------------
export interface Hero {
  id: string;
  name: string;
  slug: string;
  enName: string;
  apiId: number;
  image: string;
  role: string;
}

export const heroList: Hero[] = heroListV2;

// -------------------- 3. 英雄详情 --------------------
export interface Skill {
  name: string;
  desc: string;
  icon: string;
}

export interface HeroDetail {
  name: string;
  role: string;
  desc: string;
  image: string;
  bgImage: string;
  avatar: string;
  skills: Skill[];
  story: string;
}

export const heroDetailData: Record<string, HeroDetail> = {
  // 1. 雪莉
  "1": {
    name: "雪莉",
    role: "战士",
    desc: "雪莉是荒野乱斗的新手入门战士，拿着一把霰弹枪闯荡荒野。性格爽朗直率，近距离爆发伤害极高，是新手最友好的英雄。",
    image: "/Sprite/xueli.webp",
    bgImage: "/Usedinheroes/bg/1.png",
    avatar: "/HeroAvatars/xueli.png",
    skills: [
      {
        name: "大口径散弹枪",
        desc: "雪莉的霰弹枪可大范围射出多枚射程较短的弹丸，命中敌人的弹丸越多，造成伤害越高",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "超级霰弹",
        desc: "雪莉的超级霰弹可以摧毁掩体直击敌人。被命中的敌人即使未被击倒也会被击退。",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "震荡射击",
        desc: "雪莉的超级霰弹可使敌人的移动速度降低，持续2秒",
        icon: "/heroes/skill3.png"
      },
      {
        name: "快速包扎",
        desc: "雪莉的生命值降至40%以下时，将立即恢复一定生命值。快速包扎触发间隔为15秒",
        icon: "/heroes/skill4.png"
      }
    ],
    story: "雪莉从小在荒野长大，习惯用霰弹枪解决一切麻烦，性格火爆仗义，是荒野里人人都认识的大姐头。"
  },
  // 2. 柯尔特
  "2": {
    name: "柯尔特",
    role: "射手",
    desc: "柯尔特是西部风格的双枪快射手，拥有出色的中距离持续输出能力，子弹可穿透敌人，适合在开阔地形压制对手。作为新手英雄，易上手且泛用性强，是团队中稳定的火力点。",
    image: "/Usedinheroes/Sprite/2.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/keerte.png",
    skills: [
      {
        name: "双枪连射",
        desc: "快速发射6发子弹，子弹可穿透敌人，中距离伤害稳定",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "超级速射",
        desc: "短时间内发射大量子弹，火力覆盖范围广，压制力拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "精准射手",
        desc: "普攻命中敌人时提升自身移动速度，拉扯能力更强",
        icon: "/heroes/skill_colt_3.png"
      },
      {
        name: "火力全开",
        desc: "超级技能命中后，下一次普攻伤害提升20%",
        icon: "/heroes/skill_colt_4.png"
      }
    ],
    story: "柯尔特是西部小镇的传奇枪手，以超快的拔枪速度闻名，梦想是成为荒野中最顶尖的射手，游走于各个战场证明自己的实力。"
  },
  // 3. 杰西
  "3": {
    name: "杰西",
    role: "辅助",
    desc: "天才机械少女杰西，擅长利用电磁脉冲和自动炮台掌控战场。她的炮台能持续输出并提供视野，普攻子弹可弹射多个目标，是团队中不可或缺的阵地战核心。",
    image: "/Usedinheroes/Sprite/3.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/jiexi.png",
    skills: [
      {
        name: "电磁脉冲",
        desc: "发射可弹射的电磁子弹，最多击中3个敌人，持续输出能力强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "自动炮台",
        desc: "部署一座自动攻击的炮台，炮台拥有血量，可被敌人摧毁",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "炮台充能",
        desc: "炮台攻击敌人时，可为杰西积攒超级技能能量",
        icon: "/heroes/skill_jessie_3.png"
      },
      {
        name: "电磁护盾",
        desc: "炮台和杰西自身获得护盾，提升阵地战生存能力",
        icon: "/heroes/skill_jessie_4.png"
      }
    ],
    story: "杰西从小痴迷机械制造，年仅12岁就造出了能自主战斗的炮台，她带着自己的发明闯荡荒野，用智慧和机械实力赢得了所有人的尊重。"
  },
  // 4. 公牛
  "4": {
    name: "公牛",
    role: "坦克",
    desc: "公牛是血厚防高的硬汉，手持霰弹枪近距离爆发恐怖，超级技能可穿墙冲锋并击退敌人，既是前排抗伤核心，也能突袭收割残血。适合贴脸作战，是荒野决斗模式的热门选择。",
    image: "/Usedinheroes/Sprite/4.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/gongniu.png",
    skills: [
      {
        name: "霰弹轰击",
        desc: "发射7颗霰弹子弹，贴脸可打出满额伤害，近距离压制力极强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "野蛮冲锋",
        desc: "向前冲锋并穿透障碍物，撞击敌人造成伤害并击退",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "越战越勇",
        desc: "血量越低，攻击速度越快，残血反打能力强",
        icon: "/heroes/skill_bull_3.png"
      },
      {
        name: "坚韧皮肤",
        desc: "受到的伤害降低，提升整体坦度",
        icon: "/heroes/skill_bull_4.png"
      }
    ],
    story: "公牛曾是荒野帮派的头目，凭借一身蛮力和狠劲称霸一方，后来厌倦了帮派争斗，转而以赏金猎人的身份闯荡，没人敢轻易招惹这个满脸横肉的硬汉。"
  },
  // 5. 布洛克
  "5": {
    name: "布洛克",
    role: "射手",
    desc: "布洛克是精通火箭筒的远程输出，火箭弹可造成范围伤害，超级技能能发射多枚火箭覆盖大片区域，适合远距离压制和清理掩体后的敌人，是宝石争霸、赏金猎人模式的强势英雄。",
    image: "/Usedinheroes/Sprite/5.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/buluoke.png",
    skills: [
      {
        name: "火箭弹",
        desc: "发射单发火箭弹，命中后造成范围爆炸伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "火箭狂轰",
        desc: "发射多枚火箭弹，覆盖大范围区域，对集群敌人打击效果显著",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "火箭加速",
        desc: "每次发射火箭弹后，短时间提升移动速度",
        icon: "/heroes/skill_brock_3.png"
      },
      {
        name: "范围强化",
        desc: "火箭弹爆炸范围扩大，伤害覆盖更广",
        icon: "/heroes/skill_brock_4.png"
      }
    ],
    story: "布洛克曾是军队的爆破专家，退役后带着心爱的火箭筒来到荒野，热衷于用爆炸解决一切问题，性格狂热且爱出风头，总喜欢在战场制造最大的动静。"
  },
  // 6. 迪克
  "6": {
    name: "迪克",
    role: "投弹手",
    desc: "迪克是体型迷你的投弹手，普攻投掷的地雷会延迟爆炸，超级技能可投掷多枚地雷覆盖区域，擅长远程消耗和封锁走位。体型小的优势让他不易被瞄准，适合偷袭和拉扯作战。",
    image: "/Usedinheroes/Sprite/6.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/dike.png",
    skills: [
      {
        name: "遥控地雷",
        desc: "投掷延迟爆炸的地雷，地雷可被敌人触发，造成范围伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "地雷阵",
        desc: "投掷多枚地雷，形成一片危险区域，封锁敌人走位",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "迷你体型",
        desc: "受击判定范围小，被敌人击中的概率降低",
        icon: "/heroes/skill_dynamike_3.png"
      },
      {
        name: "快速充能",
        desc: "地雷爆炸命中敌人时，超级技能能量积攒速度提升",
        icon: "/heroes/skill_dynamike_4.png"
      }
    ],
    story: "迪克是荒野里的爆破鬼才，痴迷于各种爆炸物，体型虽小但破坏力惊人。他总喜欢躲在暗处布置地雷，看着敌人踩中陷阱时会发出得意的怪笑。"
  },
  // 7. 8比特
  "7": {
    name: "8比特",
    role: "射手",
    desc: "8比特是复古游戏风格的机器人射手，普攻发射激光束，伤害随距离增加而提升，超级技能可部署伤害增幅器，为范围内队友提升攻击力，是团队增益型核心输出。",
    image: "/Usedinheroes/Sprite/7.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/8bit.png",
    skills: [
      {
        name: "像素激光",
        desc: "发射直线激光束，距离越远伤害越高，可穿透敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "伤害增幅器",
        desc: "部署增幅器，范围内友方单位攻击力提升30%",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "能量回收",
        desc: "激光命中敌人时，回复少量自身血量",
        icon: "/heroes/skill_8bit_3.png"
      },
      {
        name: "超频运转",
        desc: "增幅器存在时，自身攻击速度提升",
        icon: "/heroes/skill_8bit_4.png"
      }
    ],
    story: "8比特是一台拥有自我意识的复古街机机器人，被程序员遗弃后闯入荒野，用像素激光和游戏风格的技能在战场打出一片天，总喜欢喊着游戏术语冲锋。"
  },
  // 8. 艾魅
  "8": {
    name: "艾魅",
    role: "辅助",
    desc: "艾魅是拥有魅惑能力的辅助型英雄，普攻发射的音波可造成持续伤害并减速敌人，超级技能能释放大范围音波，眩晕并伤害敌人，擅长控场和限制敌方走位。",
    image: "/Usedinheroes/Sprite/8.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/aimei.png",
    skills: [
      {
        name: "魅惑音波",
        desc: "发射扇形音波，命中敌人后造成持续伤害并减速",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "音爆冲击",
        desc: "释放大范围音波，眩晕范围内敌人并造成高额伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "声波共振",
        desc: "持续伤害时间延长，对敌人的限制效果更强",
        icon: "/heroes/skill_amber_3.png"
      },
      {
        name: "魅力护盾",
        desc: "释放超级技能后获得护盾，提升生存能力",
        icon: "/heroes/skill_amber_4.png"
      }
    ],
    story: "艾魅是荒野中的人气偶像，用独特的音波能力征服了无数粉丝，她的战场表演既能迷惑敌人，也能为队友提供支援，始终保持着光鲜亮丽的形象。"
  },
  // 9. 巴利
  "9": {
    name: "巴利",
    role: "投弹手",
    desc: "巴利是擅长投掷燃烧瓶的投弹手，普攻的燃烧瓶落地后形成火焰区域，持续灼烧敌人，超级技能可投掷多枚燃烧瓶，形成大范围火海，适合封锁区域和消耗敌方血量。",
    image: "/Usedinheroes/Sprite/9.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/bali.png",
    skills: [
      {
        name: "灼热原浆",
        desc: "投掷燃烧瓶，落地后形成火焰区域，持续灼烧范围内敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "热情款待",
        desc: "投掷多枚燃烧瓶，形成大片火海，持续对敌人造成高额灼烧伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "生命之源",
        desc: "灼烧伤害提升，对残血敌人压制效果更强",
        icon: "/heroes/skill_bally_3.png"
      },
      {
        name: "刻骨铭心",
        desc: "巴利普通攻击伤害提升200。",
        icon: "/heroes/skill_bally_4.png"
      }
    ],
    story: "巴里曾是酒吧的酒保，因一场意外学会了用燃烧瓶战斗，他性格暴躁且爱喝酒，战斗时总是醉醺醺的，但投掷燃烧瓶的准头却从未失手。"
  },
  // 10. 波克
  "10": {
    name: "波克",
    role: "辅助",
    desc: "波克是手持班卓琴的辅助英雄，普攻的音波可治疗友方单位并伤害敌人，超级技能能释放大范围治疗音波，为全体队友回复大量血量，是团队续航的核心。",
    image: "/Usedinheroes/Sprite/10.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/boke.png",
    skills: [
      {
        name: "治愈音波",
        desc: "发射音波，伤害敌人的同时治疗范围内友方单位",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "群体治疗",
        desc: "释放大范围音波，为所有友方单位回复高额血量",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "音波强化",
        desc: "治疗效果和伤害均提升，支援能力更强",
        icon: "/heroes/skill_brock_3.png"
      },
      {
        name: "持续回响",
        desc: "超级技能释放后，短时间内持续为队友少量回血",
        icon: "/heroes/skill_brock_4.png"
      }
    ],
    story: "波克是荒野中的流浪乐手，用班卓琴的旋律治愈伤痛、击退敌人，他走到哪里都能带来欢乐，是团队中最受欢迎的暖心队友。"
  },
  // 11. 罗莎
  "11": {
    name: "罗莎",
    role: "坦克",
    desc: "罗莎是擅长近身格斗的植物系坦克，普攻挥舞藤蔓造成范围伤害，超级技能可进入草丛伪装并提升防御和移速，草丛中作战能力极强，是占点、守点模式的强势英雄。",
    image: "/Usedinheroes/Sprite/11.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/luosha.png",
    skills: [
      {
        name: "藤蔓打击",
        desc: "挥舞藤蔓，对周围敌人造成范围伤害，贴脸压制力强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "草丛隐匿",
        desc: "进入伪装状态，提升移动速度和防御力，草丛中效果翻倍",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "植物护甲",
        desc: "受到的远程伤害降低，提升对射手的抗性",
        icon: "/heroes/skill_rosa_3.png"
      },
      {
        name: "草丛滋养",
        desc: "在草丛中时，缓慢回复自身血量",
        icon: "/heroes/skill_rosa_4.png"
      }
    ],
    story: "罗莎是荒野植物园的守护者，能与植物沟通，擅长利用草丛和自然之力战斗。她性格沉稳，守护欲极强，绝不会让队友受到伤害。"
  },
  // 12. 爆破麦克
  "12": {
    name: "爆破麦克",
    role: "投弹手",
    desc: "爆破麦克（爆破麦克斯）是疯狂的投弹手，普攻投掷的炸弹可反弹，超级技能能投掷巨型炸弹，造成大范围高额伤害并击退敌人，擅长利用地形反弹炸弹消耗敌人。",
    image: "/Usedinheroes/Sprite/12.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/mike.png",
    skills: [
      {
        name: "反弹炸弹",
        desc: "投掷可反弹的炸弹，利用地形能击中掩体后的敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "巨型爆破",
        desc: "投掷巨型炸弹，造成大范围爆炸伤害，击退所有范围内敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "炸弹加速",
        desc: "炸弹飞行速度提升，更易命中移动中的敌人",
        icon: "/heroes/skill_mike_3.png"
      },
      {
        name: "连锁爆炸",
        desc: "炸弹爆炸有概率触发小型二次爆炸",
        icon: "/heroes/skill_mike_4.png"
      }
    ],
    story: "爆破麦克是个沉迷爆炸的疯狂老头，一辈子都在研究各种炸弹，他的战斗方式简单粗暴——用炸弹把一切敌人炸飞，越混乱他越开心。"
  },
  // 13. 妮塔
  "13": {
    name: "妮塔",
    role: "战士",
    desc: "妮塔是拥有驯熊能力的少女战士，普攻发射的能量波可穿透敌人，超级技能能召唤巨熊伙伴协同作战，巨熊拥有高额血量和伤害，是妮塔的核心战力，适合中近距离团战。",
    image: "/Usedinheroes/Sprite/13.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/nita.png",
    skills: [
      {
        name: "熊灵之力",
        desc: "发射直线能量波，穿透敌人造成伤害，可同时击中多个目标",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "召唤巨熊",
        desc: "召唤巨熊伙伴，巨熊自主攻击敌人，拥有独立血量和高额伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "熊灵共鸣",
        desc: "妮塔和巨熊共享血量回复效果，生存能力更强",
        icon: "/heroes/skill_nita_3.png"
      },
      {
        name: "狂怒巨熊",
        desc: "巨熊攻击速度提升，输出能力大幅增强",
        icon: "/heroes/skill_nita_4.png"
      }
    ],
    story: "妮塔从小在森林中长大，与巨熊结下了深厚的羁绊，她能听懂动物的语言，巨熊是她最忠诚的伙伴。在战场中，一人一熊的组合让所有敌人闻风丧胆。"
  },
  // 14. 潘妮
  "14": {
    name: "潘妮",
    role: "射手",
    desc: "潘妮是海盗风格的射手，普攻发射的炮弹可在障碍物后爆炸，超级技能召唤海盗船炮台，炮台可远程攻击敌人并造成范围伤害，擅长远程压制和阵地战。",
    image: "/Usedinheroes/Sprite/14.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/panni.png",
    skills: [
      {
        name: "海盗炮弹",
        desc: "发射抛物线炮弹，击中障碍物后爆炸，伤害掩体后的敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "海盗船炮台",
        desc: "召唤海盗船炮台，炮台远程发射炮弹，造成大范围爆炸伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "炮弹强化",
        desc: "炮弹爆炸范围扩大，伤害覆盖更广",
        icon: "/heroes/skill_penny_3.png"
      },
      {
        name: "炮台耐久",
        desc: "海盗船炮台血量提升，存活时间更长",
        icon: "/heroes/skill_penny_4.png"
      }
    ],
    story: "潘妮曾是海盗船长，带领船员掠夺无数财宝，后来厌倦了海上生活，带着心爱的炮台来到荒野，用海盗的方式在战场书写新的传奇。"
  },
  // 15. 佩佩
  "15": {
    name: "佩佩",
    role: "辅助",
    desc: "佩佩是优雅的女枪手，普攻的子弹伤害随距离增加而大幅提升，超级技能可发射多枚高伤害子弹，远距离狙击能力极强，适合在安全位置收割残血敌人。",
    image: "/Usedinheroes/Sprite/15.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/peipei.png",
    skills: [
      {
        name: "精准狙击",
        desc: "发射单发子弹，距离越远伤害越高，远距离可一击重创敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "弹幕射击",
        desc: "发射多枚子弹，呈扇形覆盖区域，远距离收割能力拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "优雅走位",
        desc: "攻击后短时间提升移动速度，便于调整狙击位置",
        icon: "/heroes/skill_pepe_3.png"
      },
      {
        name: "伤害增幅",
        desc: "远距离子弹伤害额外提升，狙击效果更强",
        icon: "/heroes/skill_pepe_4.png"
      }
    ],
    story: "佩佩是荒野中的优雅贵妇，精通远距离狙击，她总是保持着精致的妆容和优雅的姿态，用精准的枪法让敌人在毫无察觉中倒下。"
  },
  // 16. 瑞克
  "16": {
    name: "瑞克",
    role: "战士",
    desc: "瑞克（瑞科）是擅长弹射攻击的战士，普攻发射的弹珠可在障碍物间反弹，超级技能发射大量弹珠，覆盖大范围区域，适合利用地形反弹攻击多个敌人，泛用性极强。",
    image: "/Usedinheroes/Sprite/16.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/ruike.png",
    skills: [
      {
        name: "弹射弹珠",
        desc: "发射可反弹的弹珠，利用地形击中多个敌人，持续输出能力强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "弹珠风暴",
        desc: "发射大量弹珠，在障碍物间反复反弹，覆盖大范围区域",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "弹珠加速",
        desc: "弹珠飞行速度提升，更易命中移动中的敌人",
        icon: "/heroes/skill_rick_3.png"
      },
      {
        name: "反弹强化",
        desc: "弹珠反弹次数增加，可攻击更多敌人",
        icon: "/heroes/skill_rick_4.png"
      }
    ],
    story: "瑞克是弹珠游戏的狂热爱好者，他把弹珠的弹射技巧运用到战斗中，总能利用地形打出意想不到的攻击，性格活泼开朗，战斗就像玩游戏一样轻松。"
  },
  // 17. 斯派克
  "17": {
    name: "斯派克",
    role: "战士",
    desc: "斯派克是仙人掌形态的战士，普攻发射的尖刺可穿透敌人，超级技能释放大范围尖刺陷阱，持续伤害并减速敌人，擅长控场和范围输出，是团战中的搅局者。",
    image: "/Usedinheroes/Sprite/17.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/spike.png",
    skills: [
      {
        name: "尖刺射击",
        desc: "发射多根尖刺，穿透敌人造成伤害，可同时击中多个目标",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "尖刺陷阱",
        desc: "释放大范围尖刺陷阱，持续伤害并减速范围内敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "尖刺强化",
        desc: "尖刺伤害提升，对集群敌人压制效果更强",
        icon: "/heroes/skill_spike_3.png"
      },
      {
        name: "自我修复",
        desc: "脱离战斗后，缓慢回复自身血量",
        icon: "/heroes/skill_spike_4.png"
      }
    ],
    story: "斯派克是荒野沙漠中的一株变异仙人掌，拥有自我意识和战斗能力，它沉默寡言，却能用尖刺给敌人最致命的打击，守护着自己的沙漠领地。"
  },
  // 18. 阿渤
  "18": {
    name: "阿渤",
    role: "战士",
    desc: "阿渤是擅长弓箭和陷阱的战士，普攻发射的弓箭可穿透敌人，超级技能布置多个陷阱，触发后造成高额伤害并减速敌人，适合埋伏和远程消耗，是荒野决斗的强势英雄。",
    image: "/Usedinheroes/Sprite/18.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/abo.png",
    skills: [
      {
        name: "穿透箭",
        desc: "发射可穿透的弓箭，同时击中多个敌人，中距离伤害稳定",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "狩猎陷阱",
        desc: "布置多个陷阱，触发后造成高额伤害并减速敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "箭术精准",
        desc: "弓箭伤害提升，穿透敌人时伤害衰减降低",
        icon: "/heroes/skill_bo_3.png"
      },
      {
        name: "陷阱伪装",
        desc: "陷阱更难被敌人发现，触发概率提升",
        icon: "/heroes/skill_bo_4.png"
      }
    ],
    story: "阿渤是荒野中的猎人，精通弓箭和陷阱制作，他熟悉每一寸荒野的地形，擅长利用陷阱埋伏敌人，是个沉默而致命的荒野猎手。"
  },
  // 19. 艾尔·普里莫
  "19": {
    name: "艾尔·普里莫",
    role: "坦克",
    desc: "艾尔·普里莫是摔跤手风格的坦克，普攻近身拳击造成高额伤害，超级技能飞身冲撞，落地后造成范围伤害并眩晕敌人，擅长突袭和开团，是前排冲阵的核心。",
    image: "/Usedinheroes/Sprite/19.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/aier.png",
    skills: [
      {
        name: "摔跤重拳",
        desc: "近身挥舞拳头，造成高额范围伤害，贴脸压制力极强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "飞身冲撞",
        desc: "向指定方向飞身冲撞，落地后眩晕并伤害范围内敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "摔跤韧性",
        desc: "受到的伤害降低，提升整体坦度",
        icon: "/heroes/skill_elprimo_3.png"
      },
      {
        name: "落地重击",
        desc: "飞身冲撞落地伤害提升，开团能力更强",
        icon: "/heroes/skill_elprimo_4.png"
      }
    ],
    story: "艾尔·普里莫曾是蝉联多届的摔跤冠军，为了寻找更强的对手来到荒野，他信奉“力量就是一切”，用摔跤手的方式在战场中横冲直撞。"
  },
  // 20. 达里尔
  "20": {
    name: "达里尔",
    role: "射手",
    desc: "达里尔（达利尔）是双管霰弹枪的海盗射手，普攻近距离爆发极高，超级技能可滚动冲锋，期间免疫伤害并撞飞敌人，适合突袭和残血收割，生存能力极强。",
    image: "/Usedinheroes/Sprite/20.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/darier.png",
    skills: [
      {
        name: "双管霰弹",
        desc: "发射多颗霰弹子弹，贴脸可打出满额伤害，近距离压制力拉满",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "滚动冲锋",
        desc: "向前滚动冲锋，期间免疫伤害，撞飞路径上的敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "霰弹强化",
        desc: "霰弹子弹数量增加，贴脸伤害更高",
        icon: "/heroes/skill_darryl_3.png"
      },
      {
        name: "快速装填",
        desc: "攻击间隔缩短，可更快打出爆发伤害",
        icon: "/heroes/skill_darryl_4.png"
      }
    ],
    story: "达里尔是潘妮的船员，性格憨厚但战斗力爆表，他的双管霰弹枪从不会让敌人靠近，滚动冲锋的能力更是让他成为了战场上的“不死小强”。"
  },
  // 21. 卡尔
  "21": {
    name: "卡尔",
    role: "射手",
    desc: "卡尔是挥舞铲子的射手，普攻投掷的铲子可回旋，往返都能造成伤害，超级技能可旋转铲子，持续攻击周围敌人并移动，适合清理集群敌人和拉扯作战。",
    image: "/Usedinheroes/Sprite/21.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/kael.png",
    skills: [
      {
        name: "回旋铲",
        desc: "投掷可回旋的铲子，往返路径上的敌人都会受到伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "旋风铲",
        desc: "旋转铲子持续攻击周围敌人，同时可移动，范围输出能力强",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "铲子强化",
        desc: "铲子伤害提升，往返伤害均增加",
        icon: "/heroes/skill_carl_3.png"
      },
      {
        name: "旋转加速",
        desc: "旋风铲状态下移动速度提升，拉扯能力更强",
        icon: "/heroes/skill_carl_4.png"
      }
    ],
    story: "卡尔曾是工地的铲土工，意外获得了战斗用的强化铲子，他用这把铲子在荒野中打出了一片天，性格乐观，总说“一把铲子能解决所有问题”。"
  },
  // 22. 雅琪
  "22": {
    name: "雅琪",
    role: "战士",
    desc: "雅琪是手持电钻的战士，普攻的电钻可穿透障碍物，对掩体后的敌人造成伤害，超级技能释放范围电击，眩晕并伤害周围敌人，擅长攻坚和突破掩体。",
    image: "/Usedinheroes/Sprite/22.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/yaqi.png",
    skills: [
      {
        name: "动力电钻",
        desc: "用电钻攻击，可穿透障碍物，伤害掩体后的敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "范围电击",
        desc: "释放大范围电击，眩晕并伤害周围敌人，攻坚能力强",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "电钻强化",
        desc: "电钻伤害提升，穿透障碍物时伤害衰减降低",
        icon: "/heroes/skill_yaqi_3.png"
      },
      {
        name: "电击护盾",
        desc: "释放超级技能后获得护盾，提升生存能力",
        icon: "/heroes/skill_yaqi_4.png"
      }
    ],
    story: "雅琪是专业的建筑工人，擅长用电钻拆除障碍物，来到荒野后，她把电钻改造成了武器，专门对付躲在掩体后的敌人，是攻坚破阵的好手。"
  },
  // 23. 帕姆
  "23": {
    name: "帕姆",
    role: "射手",
    desc: "帕姆是手持机枪的射手，普攻的机枪子弹可散射，超级技能部署治疗台，为范围内友方单位持续回血，既是输出核心也是团队续航保障，适合阵地战。",
    image: "/Usedinheroes/Sprite/23.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/pam.png",
    skills: [
      {
        name: "重型机枪",
        desc: "发射散射机枪子弹，中近距离范围伤害，压制力强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "治疗站",
        desc: "部署治疗台，持续为范围内友方单位回复血量，治疗台有独立血量",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "机枪强化",
        desc: "机枪子弹伤害提升，散射范围扩大",
        icon: "/heroes/skill_pam_3.png"
      },
      {
        name: "治疗增幅",
        desc: "治疗台的回血效果提升，团队续航更强",
        icon: "/heroes/skill_pam_4.png"
      }
    ],
    story: "帕姆是荒野中的“暖心大妈”，经营着一家移动诊所，她用机枪保护队友，用治疗台治愈伤痛，总是把队友的安危放在第一位。"
  },
  // 24. 费兰肯
  "24": {
    name: "费兰肯",
    role: "战士",
    desc: "费兰肯（弗兰肯）是科学怪人风格的战士，普攻挥舞巨锤造成大范围伤害，超级技能释放电击波，眩晕并伤害直线上的所有敌人，擅长控场和范围输出。",
    image: "/Usedinheroes/Sprite/24.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/ferank.png",
    skills: [
      {
        name: "巨锤重击",
        desc: "挥舞巨锤，对周围大范围敌人造成高额伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "电击波",
        desc: "释放直线电击波，眩晕并伤害路径上的所有敌人",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "巨锤强化",
        desc: "巨锤伤害提升，攻击范围扩大",
        icon: "/heroes/skill_frank_3.png"
      },
      {
        name: "电击延长",
        desc: "电击波眩晕时间延长，控场效果更强",
        icon: "/heroes/skill_frank_4.png"
      }
    ],
    story: "费兰肯是疯狂科学家的实验产物，拥有巨大的身躯和力量，他虽然外表恐怖，但内心善良，只会用巨锤保护自己和队友。"
  },
  // 25. 比比
  "25": {
    name: "比比",
    role: "战士",
    desc: "比比是手持曲棍球棍的战士，普攻挥棍造成范围伤害并反弹，超级技能可蓄力冲刺，挥棍击飞敌人并造成高额伤害，擅长拉扯和突袭，机动性极强。",
    image: "/Usedinheroes/Sprite/25.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/bibi.png",
    skills: [
      {
        name: "曲棍球棍",
        desc: "挥棍造成范围伤害，子弹可反弹，利用地形攻击多个敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "蓄力冲刺",
        desc: "蓄力后冲刺，挥棍击飞敌人并造成高额伤害，机动性拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "棍法精准",
        desc: "挥棍伤害提升，反弹次数增加",
        icon: "/heroes/skill_bibi_3.png"
      },
      {
        name: "冲刺加速",
        desc: "蓄力冲刺速度提升，更易命中敌人",
        icon: "/heroes/skill_bibi_4.png"
      }
    ],
    story: "比比是曲棍球队的明星球员，来到荒野后把曲棍球棍改造成了武器，她的打法像打曲棍球一样灵活，总能用快速的冲刺和精准的挥棍击败敌人。"
  },
  // 26. 贝亚
  "26": {
    name: "贝亚",
    role: "射手",
    desc: "贝亚是蜜蜂女王风格的射手，普攻发射的针刺可叠加毒素，持续造成伤害，超级技能释放追踪蜜蜂群，自动攻击中毒敌人，擅长持续消耗和收割。",
    image: "/Usedinheroes/Sprite/26.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/beia.png",
    skills: [
      {
        name: "毒刺射击",
        desc: "发射针刺，命中敌人后叠加毒素，持续造成伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "蜜蜂群",
        desc: "释放追踪蜜蜂群，自动攻击中毒的敌人，造成高额持续伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "毒素强化",
        desc: "毒素持续伤害提升，对敌人压制效果更强",
        icon: "/heroes/skill_bea_3.png"
      },
      {
        name: "蜜蜂增幅",
        desc: "蜜蜂群数量增加，输出能力大幅提升",
        icon: "/heroes/skill_bea_4.png"
      }
    ],
    story: "贝亚是荒野中蜜蜂群的女王，能与蜜蜂沟通并指挥它们战斗，她的毒刺和蜜蜂群让敌人闻风丧胆，守护着自己的蜂巢领地。"
  },
  // 27. 墨提斯
  "27": {
    name: "墨提斯",
    role: "射手",
    desc: "墨提斯（莫提斯）是吸血鬼风格的射手，普攻的蝙蝠攻击可吸血，超级技能向前突进并攻击路径上的敌人，擅长突袭和残血反打，机动性和续航兼备。",
    image: "/Usedinheroes/Sprite/27.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/metis.png",
    skills: [
      {
        name: "蝙蝠突袭",
        desc: "发射蝙蝠攻击敌人，命中后回复自身血量，续航能力强",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "暗影突袭",
        desc: "向前突进，攻击路径上的所有敌人，机动性拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "吸血强化",
        desc: "蝙蝠吸血效果提升，续航能力更强",
        icon: "/heroes/skill_mortis_3.png"
      },
      {
        name: "突进加速",
        desc: "暗影突袭距离增加，突袭能力更强",
        icon: "/heroes/skill_mortis_4.png"
      }
    ],
    story: "墨提斯是活了数百年的吸血鬼，厌倦了永生的孤独来到荒野，他用蝙蝠攻击敌人并汲取血液，是战场上令人恐惧的收割者。"
  },
  // 28. 塔拉
  "28": {
    name: "塔拉",
    role: "射手",
    desc: "塔拉是占卜师风格的射手，普攻投掷的卡牌可造成范围伤害，超级技能释放引力场，将敌人拉向中心并造成伤害，擅长控场和集火敌人，是团战核心。",
    image: "/Usedinheroes/Sprite/28.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/tala.png",
    skills: [
      {
        name: "命运卡牌",
        desc: "投掷多张卡牌，造成范围伤害，可同时击中多个敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "引力场",
        desc: "释放引力场，将范围内敌人拉向中心，便于团队集火",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "卡牌强化",
        desc: "卡牌伤害提升，范围扩大",
        icon: "/heroes/skill_tara_3.png"
      },
      {
        name: "引力延长",
        desc: "引力场持续时间延长，控场效果更强",
        icon: "/heroes/skill_tara_4.png"
      }
    ],
    story: "塔拉是荒野中的占卜师，能通过卡牌预知敌人的行动，她用命运卡牌和引力场掌控战场，总是能在最关键的时刻打出致命的控场。"
  },
  // 29. 吉恩
  "29": {
    name: "吉恩",
    role: "战士",
    desc: "吉恩（吉恩）是灯神风格的战士，普攻发射的魔法弹可穿透敌人，超级技能释放魔法漩涡，吸扯敌人并造成伤害，擅长控场和范围输出，泛用性极强。",
    image: "/Usedinheroes/Sprite/29.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/jien.png",
    skills: [
      {
        name: "魔法弹",
        desc: "发射可穿透的魔法弹，同时击中多个敌人，中距离伤害稳定",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "魔法漩涡",
        desc: "释放魔法漩涡，吸扯范围内敌人并造成持续伤害",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "魔法强化",
        desc: "魔法弹伤害提升，穿透敌人时伤害衰减降低",
        icon: "/heroes/skill_gene_3.png"
      },
      {
        name: "漩涡增幅",
        desc: "魔法漩涡吸扯力增强，控场效果更强",
        icon: "/heroes/skill_gene_4.png"
      }
    ],
    story: "吉恩是被困在神灯中的灯神，偶然间获得自由后来到荒野，他用魔法弹和漩涡掌控战场，性格幽默，总喜欢用魔法搞些小恶作剧。"
  },
  // 30. 麦克斯
  "30": {
    name: "麦克斯",
    role: "坦克",
    desc: "麦克斯是极速风格的坦克，普攻发射的能量弹可穿透敌人，超级技能提升自身和队友的移动速度，擅长拉扯和支援，是团队的机动性核心。",
    image: "/Usedinheroes/Sprite/30.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/max.png",
    skills: [
      {
        name: "极速能量弹",
        desc: "发射可穿透的能量弹，同时击中多个敌人，中距离伤害稳定",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "极速领域",
        desc: "提升自身和范围内队友的移动速度，拉扯和支援能力拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "能量强化",
        desc: "能量弹伤害提升，穿透敌人时伤害衰减降低",
        icon: "/heroes/skill_max_3.png"
      },
      {
        name: "极速延长",
        desc: "极速领域持续时间延长，团队机动性更强",
        icon: "/heroes/skill_max_4.png"
      }
    ],
    story: "麦克斯是荒野中速度最快的英雄，痴迷于一切能提升速度的东西，她的极速领域能让整个团队变得灵活，是游击战的核心人物。"
  },
  // 31. P先生
  "31": {
    name: "P先生",
    role: "辅助",
    desc: "P先生是企鹅风格的辅助英雄，普攻发射的泡泡弹可造成范围伤害，超级技能召唤企鹅小弟协同作战，小弟拥有独立攻击能力，擅长阵地战和持续输出。",
    image: "/Usedinheroes/Sprite/31.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/P.png",
    skills: [
      {
        name: "泡泡弹",
        desc: "发射泡泡弹，命中后爆炸造成范围伤害，可击中掩体后的敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "企鹅小弟",
        desc: "召唤多个企鹅小弟，小弟自主攻击敌人，持续输出能力强",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "泡泡强化",
        desc: "泡泡弹爆炸范围扩大，伤害提升",
        icon: "/heroes/skill_mrp_3.png"
      },
      {
        name: "小弟强化",
        desc: "企鹅小弟血量和伤害提升，存活时间更长",
        icon: "/heroes/skill_mrp_4.png"
      }
    ],
    story: "P先生是企鹅军团的首领，带着一群忠心的企鹅小弟闯荡荒野，他的泡泡弹和小弟们的组合让他成为了阵地战的王者，没人敢轻易招惹这个企鹅团队。"
  },
  // 32. 芽芽
  "32": {
    name: "芽芽",
    role: "坦克",
    desc: "芽芽是植物系坦克，普攻发射的种子可生成植物屏障，阻挡敌人攻击，超级技能发射巨型种子，造成范围伤害并生成大量屏障，擅长防守和封锁走位。",
    image: "/Usedinheroes/Sprite/32.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/yy.png",
    skills: [
      {
        name: "种子屏障",
        desc: "发射种子，生成植物屏障，阻挡敌人子弹和移动",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "巨型种子",
        desc: "发射巨型种子，爆炸造成范围伤害，生成大量植物屏障",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "屏障强化",
        desc: "植物屏障血量提升，存活时间更长",
        icon: "/heroes/skill_sprout_3.png"
      },
      {
        name: "种子加速",
        desc: "种子发射速度提升，更易布置屏障",
        icon: "/heroes/skill_sprout_4.png"
      }
    ],
    story: "芽芽是荒野中的新生植物精灵，擅长用种子制造屏障保护自己和队友，它性格胆小但守护欲极强，总能用屏障为团队筑起一道坚固的防线。"
  },
  // 33. 黑鸦
  "33": {
    name: "黑鸦",
    role: "坦克",
    desc: "黑鸦是乌鸦风格的坦克，普攻发射的羽毛可叠加毒素，持续造成伤害，超级技能释放乌鸦群，覆盖大范围区域并叠加毒素，擅长持续消耗和收割残血。",
    image: "/Usedinheroes/Sprite/33.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/heiya.png",
    skills: [
      {
        name: "剧毒羽毛",
        desc: "发射羽毛，命中敌人后叠加毒素，持续造成伤害",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "乌鸦群",
        desc: "释放乌鸦群，覆盖大范围区域，为所有命中敌人叠加多层毒素",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "毒素强化",
        desc: "毒素持续伤害提升，对残血敌人压制效果更强",
        icon: "/heroes/skill_crow_3.png"
      },
      {
        name: "羽毛加速",
        desc: "羽毛飞行速度提升，更易命中移动中的敌人",
        icon: "/heroes/skill_crow_4.png"
      }
    ],
    story: "黑鸦是荒野中的暗影刺客，总是悄无声息地接近敌人，用剧毒羽毛和乌鸦群收割生命，它沉默寡言，是战场上最致命的暗箭。"
  },
  // 34. 里昂
  "34": {
    name: "里昂",
    role: "坦克",
    desc: "里昂是忍者风格的坦克，普攻发射的飞镖可穿透敌人，超级技能进入隐形状态，提升移动速度并能穿墙，擅长偷袭和收割残血，是荒野决斗的强势英雄。",
    image: "/Usedinheroes/Sprite/34.webp",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/leon.png",
    skills: [
      {
        name: "忍者飞镖",
        desc: "发射多枚飞镖，穿透敌人造成伤害，可同时击中多个目标",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "隐形突袭",
        desc: "进入隐形状态，提升移动速度并可穿墙，偷袭能力拉满",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "飞镖强化",
        desc: "飞镖伤害提升，穿透敌人时伤害衰减降低",
        icon: "/heroes/skill_leon_3.png"
      },
      {
        name: "隐形延长",
        desc: "隐形状态持续时间延长，偷袭窗口更大",
        icon: "/heroes/skill_leon_4.png"
      }
    ],
    story: "里昂是荒野中的顶尖忍者，精通隐形和飞镖技巧，他总能在敌人毫无察觉的情况下完成收割，是战场上的“隐形杀手”。"
  },
  // 35. 沙迪
  "35": {
    name: "沙迪",
    role: "射手",
    desc: "沙迪是沙之精灵风格的射手，普攻发射的沙粒可造成范围伤害，超级技能释放沙尘暴，遮挡敌人视野并减速，擅长控场和掩护队友推进。",
    image: "/Usedinheroes/Sprite/35.PNG",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/sadi.png",
    skills: [
      {
        name: "沙粒射击",
        desc: "发射沙粒，造成范围伤害，可同时击中多个敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "沙尘暴",
        desc: "释放大范围沙尘暴，遮挡敌人视野并减速，掩护队友推进",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "沙粒强化",
        desc: "沙粒伤害提升，范围扩大",
        icon: "/heroes/skill_sandy_3.png"
      },
      {
        name: "沙尘延长",
        desc: "沙尘暴持续时间延长，控场效果更强",
        icon: "/heroes/skill_sandy_4.png"
      }
    ],
    story: "沙迪是沙漠中的精灵，能操控沙子制造沙尘暴，他性格慵懒但实力强大，总能用沙尘暴掩护队友，让敌人陷入混乱。"
  },
  // 36. 格尔
  "36": {
    name: "格尔",
    role: "战士",
    desc: "格尔是冰雪风格的战士，普攻发射的雪球可造成范围伤害，超级技能释放冰风，击退敌人并造成伤害，擅长控场和拉扯，是团战中的搅局者。",
    image: "/Usedinheroes/Sprite/36.png",
    bgImage: "/Usedinheroes/bg/3.png",
    avatar: "/HeroAvatars/ger.png",
    skills: [
      {
        name: "雪球攻击",
        desc: "发射雪球，命中后爆炸造成范围伤害，可击中掩体后的敌人",
        icon: "/Usedinheroes/skills/skill0.png"
      },
      {
        name: "冰风冲击",
        desc: "释放强力冰风，击退范围内敌人并造成伤害，拉扯能力强",
        icon: "/Usedinheroes/skills/skill01.png"
      },
      {
        name: "雪球强化",
        desc: "雪球爆炸范围扩大，伤害提升",
        icon: "/heroes/skill_gray_3.png"
      },
      {
        name: "冰风强化",
        desc: "冰风击退距离增加，控场效果更强",
        icon: "/heroes/skill_gray_4.png"
      }
    ],
    story: "格尔是冰雪王国的守护者，能操控冰雪和寒风战斗，他的雪球和冰风让敌人寸步难行，是荒野中最令人头疼的控场英雄之一。"
  }
};

// -------------------- 4. 游戏模式详情 --------------------
export interface ModeSection {
  img: string;
  text: string;
  align: string;
}

export interface GameMode {
  title: string;
  en: string;
  banner: string;
  color: string;
  sections: ModeSection[];
}

export const modeData: Record<string, GameMode> = {
  showdown: {
    title: "荒野决斗",
    en: "SHOWDOWN",
    banner: "/mode-banner/showdown.jpg",
    color: "#82d327",
    sections: [
      {
        img: "/Usedinmode/mdimg/showdown11.jpg",
        text: "荒野决斗包含单人、双人及三人组队吃鸡玩法，地图会不断缩小，玩家需要收集能量模块强化自己，最终活到最后即可获得胜利。",
        align: "right"
      },
      {
        img: "/Usedinmode/mdimg/showdown12.jpg",
        text: "玩家需要利用草丛、障碍物进行偷袭，同时躲避毒圈伤害，灵活走位是获胜的关键。",
        align: "left"
      },
      {
        img: "/Usedinmode/mdimg/showdown13.jpg",
        text: "组队模式需要与队友配合，互相支援，共享视野，根据人数调整战术是致胜关键。",
        align: "right"
      }
    ]
  },
  gemgrab: {
    title: "宝石争霸",
    en: "GEM GRAB",
    banner: "/mode-banner/gemgrab.jpg",
    color: "#9c3ef4",
    sections: [
      { img: "/Usedinmode/mdimg/mode21.png", text: "3v3模式，地图中间会不断刷新宝石，收集10颗宝石并坚持到倒计时结束即可获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/mode22.png", text: "一旦持有宝石的角色被击败，身上宝石会全部掉落，团队保护宝石携带者非常重要。", align: "left" },
      { img: "/Usedinmode/mdimg/mode23.png", text: "控制地图中心是获胜关键，同时需要合理分配角色定位：输出、坦克、辅助。", align: "right" }
    ]
  },
  brawlball: {
    title: "乱斗足球",
    en: "BRAWL BALL",
    banner: "/mode-banner/brawlball.jpg",
    color: "#8a9edc",
    sections: [
      { img: "/Usedinmode/mdimg/brawlball51.jpg", text: "3v3足球模式，把球踢进对方球门即可得分，先进两球的队伍获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/brawlball52.jpg", text: "角色可以带球移动，也可以传球给队友，超级技能可以破坏障碍物创造进球路线。", align: "left" },
      { img: "/Usedinmode/mdimg/brawlball53.jpg", text: "适合具有位移、控制技能的角色，快速推进与防守反击是核心战术。", align: "right" }
    ]
  },
  knockout: {
    title: "乱斗淘汰赛",
    en: "KNOCKOUT",
    banner: "/mode-banner/knockout.jpg",
    color: "#f5811e",
    sections: [
      { img: "/Usedinmode/mdimg/mode41.png", text: "3v3无复活对战，每回合击败所有敌人即可获胜，三盘两胜制。", align: "right" },
      { img: "/Usedinmode/mdimg/mode42.png", text: "每回合地图都会变化，玩家需要根据地形调整战术，不能复活让战斗更加紧张刺激。", align: "left" },
      { img: "/Usedinmode/mdimg/mode43.png", text: "高生存、高爆发角色在这个模式中非常强势，团队集火是获胜关键。", align: "right" }
    ]
  },
  hotzone: {
    title: "热区争夺",
    en: "HOT ZONE",
    banner: "/mode-banner/hotzone.jpg",
    color: "#dc3c52",
    sections: [
      { img: "/Usedinmode/mdimg/hotzone11.jpg", text: "3v3占领据点模式，站在据点内即可积累分数，先满100%的队伍获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/hotzone12.jpg", text: "地图有多个据点，控制越多得分越快，需要不断争夺与防守。", align: "left" },
      { img: "/Usedinmode/mdimg/hotzone13.jpg", text: "坦克类角色适合占点，输出角色负责掩护，战术性极强。", align: "right" }
    ]
  },
  basketball: {
    title: "乱斗篮球",
    en: "BASKET BRAWL",
    banner: "/mode-banner/basketball.jpg",
    color: "#31a3d1",
    sections: [
      { img: "/Usedinmode/mdimg/mode61.png", text: "3v3篮球模式，将篮球投入篮筐得分，先获得5分的队伍获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/mode62.png", text: "角色可以持球移动、传球，使用技能跳跃投篮，玩法节奏极快。", align: "left" },
      { img: "/Usedinmode/mdimg/mode63.png", text: "高机动性角色优势巨大，快速进攻与防守反击是核心玩法。", align: "right" }
    ]
  },
  // 在 modeData 的 bounty 之前插入：
  brawlball5v5: {
    title: "乱斗足球5v5",
    en: "BRAWL BALL 5V5",
    banner: "/mode-banner/brawlball5v5.jpg",
    color: "#8a9edc",        // 跟普通足球同色系
    sections: [
      { img: "/Usedinmode/mdimg/mode91.png", text: "5v5足球模式，十人同场竞技，进球数多的队伍获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/mode92.png", text: "更大地图、更多障碍，团队配合与战术拉扯要求更高。", align: "left" },
      { img: "/Usedinmode/mdimg/mode93.png", text: "适合长手射手与开团坦克，节奏比普通足球更激烈。", align: "right" }
    ]
  },
  wipeout: {
    title: "积分争夺赛",
    en: "WIPEOUT",
    banner: "/mode-banner/wipeout.jpg",
    color: "#f5811e",
    sections: [
      { img: "/Usedinmode/mdimg/wipeout51.jpg", text: "5v5淘汰模式，击败敌方英雄积累分数，先达标者胜。", align: "right" },
      { img: "/Usedinmode/mdimg/wipeout52.jpg", text: "复活机制让战斗持续不断，压制与反打节奏极快。", align: "left" },
      { img: "/Usedinmode/mdimg/wipeout53.jpg", text: "高爆发与续航英雄优势明显，控场与收割是核心。", align: "right" }
    ]
  },
  duels: {
    title: "车轮擂台赛",
    en: "DUELS",
    banner: "/mode-banner/duels.jpg",
    color: "#d81c0f",
    sections: [
      { img: "/Usedinmode/mdimg/duels11.jpg", text: "1v1车轮战模式，双方各选择三名角色，依次进行1v1对决。", align: "right" },
      { img: "/Usedinmode/mdimg/duels12.jpg", text: "击败对手即可继续战斗，直到击败对方全部角色，获得最终胜利。", align: "left" },
      { img: "/Usedinmode/mdimg/duels13.jpg", text: "考验角色克制理解与个人操作，是最能体现实力的模式。", align: "right" }
    ]
  },
  brawlHockey: {
    title: "乱斗冰球",
    en: "BRAWL HOCKEY",
    banner: "/mode-banner/brawlhockey.jpg",
    color: "#1b4ec2",
    sections: [
      { img: "/Usedinmode/mdimg/brawlhockey11.jpg", text: "3v3冰球模式，将冰球击入对方球门得分，快节奏碰撞竞技。", align: "right" },
      { img: "/Usedinmode/mdimg/brawlhockey12.jpg", text: "冰球会在墙面反弹，利用地形传球是获胜关键。", align: "left" },
      { img: "/Usedinmode/mdimg/brawlhockey13.jpg", text: "高机动性英雄优势巨大，快速截球与长传配合是核心战术。", align: "right" }
    ]
  },
  brawlArena: {
    title: "乱斗竞技场",
    en: "BRAWL ARENA",
    banner: "/mode-banner/brawlarena.jpg",
    color: "#1278f1",
    sections: [
      { img: "/Usedinmode/mdimg/arena11.jpg", text: "3v3摧毁敌方基地，击败野怪获取经验升级。", align: "right" },
      { img: "/Usedinmode/mdimg/arena12.jpg", text: "英雄最高升至15级，伤害和生命值大幅提升。", align: "left" },
      { img: "/Usedinmode/mdimg/arena13.jpg", text: "合理出装、团队协作，集中火力推塔拆家。", align: "right" }
    ]
  },
  heist: {
    title: "金库攻防",
    en: "HEIST",
    banner: "/mode-banner/heist.jpg",
    color: "#d55cd3",
    sections: [
      { img: "/Usedinmode/mdimg/heist11.jpg", text: "3v3攻防模式，进攻方破坏敌方金库，防守方保护己方金库，先摧毁者胜。", align: "right" },
      { img: "/Usedinmode/mdimg/heist12.jpg", text: "进攻路线固定但掩体众多，爆破类英雄能快速破墙创造通路。", align: "left" },
      { img: "/Usedinmode/mdimg/heist13.jpg", text: "防守方需要拖延时间，治疗与坦克组合能有效守住金库。", align: "right" }
    ]
  },
  gemgrab5v5: {
    title: "5对5宝石争霸",
    en: "GEM GRAB 5V5",
    banner: "/mode-banner/gemgrab.jpg",
    color: "#9c3ef4",
    sections: [
      { img: "/Usedinmode/mdimg/mode21.png", text: "5v5宝石争霸，十人同场争夺地图中心刷新的宝石。", align: "right" },
      { img: "/Usedinmode/mdimg/mode22.png", text: "战场更混乱，需要更强的团队协同保护宝石携带者。", align: "left" },
      { img: "/Usedinmode/mdimg/mode23.png", text: "控制与爆发型英雄在大型团战中更具优势。", align: "right" }
    ]
  },
  knockout5v5: {
    title: "5对5乱斗淘汰赛",
    en: "KNOCKOUT 5V5",
    banner: "/mode-banner/knockout.jpg",
    color: "#f5811e",
    sections: [
      { img: "/Usedinmode/mdimg/mode41.png", text: "5v5无复活对战，每回合击败所有敌人即可获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/mode42.png", text: "地图更大、掩体更多，集火与包抄战术更加重要。", align: "left" },
      { img: "/Usedinmode/mdimg/mode43.png", text: "生存与爆发兼顾的英雄在持久战中表现更佳。", align: "right" }
    ]
  },
  bounty: {
    title: "赏金猎人",
    en: "BOUNTY",
    banner: "/mode-banner/bounty.jpg",
    color: "#07cefb",
    sections: [
      { img: "/Usedinmode/mdimg/mode81.png", text: "3v3模式，击败敌人获得赏金星星，时间结束时星星更多的队伍获胜。", align: "right" },
      { img: "/Usedinmode/mdimg/mode82.png", text: "星星越多，角色视野会暴露给敌人，高星星玩家需要谨慎走位。", align: "left" },
      { img: "/Usedinmode/mdimg/mode83.png", text: "远程输出角色非常强势，游击战与集火是核心战术。", align: "right" }
    ]
  },

};

// -------------------- 5. 模式卡片 --------------------
export type ModeCardItem =
  | { type: 'vertical'; id: string; title: string; subTitle: string; desc: string; bgImage: string; logo: string; }
  | { type: 'horizontal'; id: string; title: string; subTitle: string; bgImage: string; logo: string; };

export const modeCards: ModeCardItem[] = [
  { type: 'vertical',   id: 'showdown',     title: '荒野决斗',     subTitle: 'SHOWDOWN',       desc: '活到最后就是胜利', bgImage: '/Usedinmode/showdown.gif',      logo: '/Usedinmode/icon/icon1.png' },
  { type: 'vertical',   id: 'gemgrab',      title: '宝石争霸',     subTitle: 'GEM GRAB',       desc: '团队配合最重要',  bgImage: '/Usedinmode/gem_grab.gif',      logo: '/Usedinmode/icon/icon2.png' },
  { type: 'horizontal', id: 'gemgrab5v5',   title: '5对5宝石争霸', subTitle: '5V5',           bgImage: '/Usedinmode/gem_grab_5.gif',    logo: '/Usedinmode/icon/icon2.png' },
  { type: 'horizontal', id: 'brawlball',    title: '乱斗足球',     subTitle: 'BRAWL BALL',     bgImage: '/Usedinmode/brawl_ball.gif',    logo: '/Usedinmode/icon/icon3.png' },
  { type: 'horizontal', id: 'brawlball5v5', title: '5对5乱斗足球', subTitle: '5v5',           bgImage: '/Usedinmode/brawl_ball_5.gif',  logo: '/Usedinmode/icon/icon3.png' },
  { type: 'horizontal', id: 'knockout',     title: '乱斗淘汰赛',   subTitle: 'KNOCKOUT',       bgImage: '/Usedinmode/knockout.gif',       logo: '/Usedinmode/icon/icon4.png' },
  { type: 'horizontal', id: 'knockout5v5',  title: '5对5乱斗淘汰赛', subTitle: '5V5',          bgImage: '/Usedinmode/knockout_5.gif',    logo: '/Usedinmode/icon/icon4.png' },
  { type: 'horizontal', id: 'hotzone',      title: '热区争夺',     subTitle: 'HOT ZONE',       bgImage: '/Usedinmode/hot_zone.gif',      logo: '/Usedinmode/icon/icon5.png' },
  { type: 'horizontal', id: 'bounty',       title: '赏金猎人',     subTitle: 'BOUNTY',         bgImage: '/Usedinmode/bounty.gif',        logo: '/Usedinmode/icon/icon8.png' },
  { type: 'horizontal', id: 'heist',        title: '金库攻防',     subTitle: 'HEIST',          bgImage: '/Usedinmode/heist.gif',         logo: '/Usedinmode/icon/icon13.png' },
  { type: 'horizontal', id: 'basketball',   title: '乱斗篮球',     subTitle: 'BASKET BRAWL',   bgImage: '/Usedinmode/basket_brawl.gif',  logo: '/Usedinmode/icon/icon6.png' },
  { type: 'horizontal', id: 'brawlHockey',  title: '乱斗冰球',     subTitle: 'BRAWL HOCKEY',   bgImage: '/Usedinmode/brawl_hockey.gif',  logo: '/Usedinmode/icon/icon11.png' },
  { type: 'horizontal', id: 'duels',        title: '车轮擂台赛',   subTitle: 'DUELS',          bgImage: '/Usedinmode/duels.gif',         logo: '/Usedinmode/icon/icon7.png' },
  { type: 'horizontal', id: 'brawlArena',   title: '乱斗竞技场',   subTitle: 'BRAWL ARENA',    bgImage: '/Usedinmode/brawl_arena.gif',   logo: '/Usedinmode/icon/icon12.png' },
  { type: 'vertical',   id: 'wipeout',      title: '积分争夺赛',   subTitle: 'WIPEOUT',        desc: '5v5消灭战',      bgImage: '/Usedinmode/wipe_out.gif',    logo: '/Usedinmode/icon/icon10.png' },
];

// -------------------- 5.5 模式当前地图实景图 --------------------
export const liveMapImages: Record<string, string> = {
  showdown:   '/Usedinmode/mdimg/showdown11.jpg',
  gemgrab:    '/Usedinmode/mdimg/mode21.png',
  brawlball:  '/Usedinmode/mdimg/brawlball51.jpg',
  knockout:   '/Usedinmode/mdimg/mode41.png',
  hotzone:    '/Usedinmode/mdimg/hotzone11.jpg',
  basketball: '/Usedinmode/mdimg/mode61.png',
  duels:      '/Usedinmode/mdimg/duels11.jpg',
  bounty:     '/Usedinmode/mdimg/mode81.png',
  brawlball5v5: '/Usedinmode/mdimg/mode91.png',
  wipeout:      '/Usedinmode/mdimg/wipeout51.jpg',
  gemgrab5v5:    '/Usedinmode/mdimg/mode21.png',
  knockout5v5:   '/Usedinmode/mdimg/mode41.png',
  brawlHockey:   '/Usedinmode/mdimg/brawlhockey11.jpg',
  brawlArena:    '/Usedinmode/mdimg/arena11.jpg',
  heist:         '/Usedinmode/mdimg/heist11.jpg',
};

// -------------------- 6. 地图列表 --------------------
export interface MapItem {
  id: number;
  name: string;
  bg: string;
}

export const mapList: MapItem[] = [
  { id: 1, name: "热力工厂", bg: "/PromoArt/image1.png" },
  { id: 2, name: "双子河", bg: "/PromoArt/image2.png" },
  { id: 3, name: "骷髅溪", bg: "/PromoArt/image3.png" },
  { id: 4, name: "宝石矿场", bg: "/PromoArt/image4.png" },
  { id: 5, name: "蛇形小径", bg: "/PromoArt/image5.png" },
  { id: 6, name: "千柱之地", bg: "/PromoArt/image6.png" },
];

