// 由 scripts/fetch-heroes.mjs 自动生成，请勿手动编辑
export interface HeroRarity {
  name: string;
  color: string;
}

export interface HeroStats {
  health: number;
  damage: number;
  range: string;
  reload: string;
  speed: string;
}

export interface HeroSkill {
  id?: number;
  name: string;
  desc: string;
  icon: string;
}

export interface HeroSkin {
  name: string;
  image: string;
}

export interface HeroDetailV2 {
  id: string;
  apiId: number;
  slug: string;
  name: string;
  enName: string;
  role: string;
  class: string;
  rarity: HeroRarity;
  desc: string;
  story: string;
  avatar: string;
  image: string;
  modelImage: string;
  bgImage: string;
  stats: HeroStats;
  attack: HeroSkill;
  super: HeroSkill;
  starPowers: HeroSkill[];
  gadgets: HeroSkill[];
  gears: HeroSkill[];
  hypercharge: HeroSkill | null;
  skins: HeroSkin[];
  pins: string[];
  buffies: HeroSkill[];
}

export const heroDetailsData: Record<string, HeroDetailV2> = {
  "1": {
    "id": "1",
    "apiId": 16000000,
    "name": "雪莉",
    "enName": "Shelly",
    "slug": "shelly",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "普通",
      "color": "#b9eaff"
    },
    "desc": "雪莉是荒野乱斗的新手入门战士，拿着一把霰弹枪闯荡荒野。性格爽朗直率，近距离爆发伤害极高，是新手最友好的英雄。",
    "story": "雪莉从小在荒野长大，习惯用霰弹枪解决一切麻烦，性格火爆仗义，是荒野里人人都认识的大姐头。",
    "avatar": "/HeroAvatars/16000000.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000000.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000000.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7800,
      "damage": 600,
      "range": "7.67 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "大口径散弹枪",
      "desc": "雪莉的霰弹枪可大范围射出多枚射程较短的弹丸，命中敌人的弹丸越多，造成伤害越高",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级霰弹",
      "desc": "雪莉的超级霰弹可以摧毁掩体直击敌人。被命中的敌人即使未被击倒也会被击退。",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000076,
        "name": "震荡射击",
        "desc": "雪莉的超级霰弹可使敌人的移动速度降低，持续2秒",
        "icon": "/starpowers/Shelly/shelly_starpower_01.png"
      },
      {
        "id": 23000135,
        "name": "快速包扎",
        "desc": "雪莉的生命值降至40%以下时，将立即恢复一定生命值。快速包扎触发间隔为15秒",
        "icon": "/starpowers/Shelly/shelly_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000255,
        "name": "快进",
        "desc": "雪莉冲向目标方向或向前冲去，并重新装满弹药！（冷却：20 秒）",
        "icon": "/gadgets/Shelly/shelly_gadget_01.png"
      },
      {
        "id": 23000288,
        "name": "粘土鸽子",
        "desc": "雪莉将火力集中到更小的区域，射程更大。每次激活可使用多次。（冷却：18 秒）",
        "icon": "/gadgets/Shelly/shelly_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "雪莉·极限充能",
      "desc": "倍率：30%。激活后，雪莉的超级散布增加 33%，射弹数量从 9 个增加到 12 个。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Shelly/shelly_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Shelly/shelly_angry_pin.png",
      "/pins/Shelly/shelly_brawloween_pin.png",
      "/pins/Shelly/shelly_clap_pin.png",
      "/pins/Shelly/shelly_classic_pin.png",
      "/pins/Shelly/shelly_dancer_dahlia_pin.png",
      "/pins/Shelly/shelly_dancer_iris_pin.png",
      "/pins/Shelly/shelly_dancer_pin.png",
      "/pins/Shelly/shelly_facepalm_pin.png",
      "/pins/Shelly/shelly_gg_pin.png",
      "/pins/Shelly/shelly_happy_pin.png",
      "/pins/Shelly/shelly_hypercharge_pin.png",
      "/pins/Shelly/shelly_phew_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Shelly/emoji_shelly_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Shelly/emoji_shelly_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Shelly/emoji_shelly_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Shelly/emoji_shelly_buffy_star.png"
      }
    ]
  },
  "2": {
    "id": "2",
    "apiId": 16000001,
    "name": "柯尔特",
    "enName": "Colt",
    "slug": "colt",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "柯尔特是西部风格的双枪快射手，拥有出色的中距离持续输出能力，子弹可穿透敌人，适合在开阔地形压制对手。作为新手英雄，易上手且泛用性强，是团队中稳定的火力点。",
    "story": "柯尔特是西部小镇的传奇枪手，以超快的拔枪速度闻名，梦想是成为荒野中最顶尖的射手，游走于各个战场证明自己的实力。",
    "avatar": "/HeroAvatars/16000001.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000001.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000001.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6200,
      "damage": 720,
      "range": "9 (远)",
      "reload": "1.3 秒 (极快) 1.4 秒 (while Hyper Buffie is active)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "双枪连射",
      "desc": "快速发射6发子弹，子弹可穿透敌人，中距离伤害稳定",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级速射",
      "desc": "短时间内发射大量子弹，火力覆盖范围广，压制力拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000077,
        "name": "精准射手",
        "desc": "普攻命中敌人时提升自身移动速度，拉扯能力更强",
        "icon": "/starpowers/Colt/colt_starpower_01.png"
      },
      {
        "id": 23000138,
        "name": "火力全开",
        "desc": "超级技能命中后，下一次普攻伤害提升20%",
        "icon": "/starpowers/Colt/colt_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000273,
        "name": "快速装载机",
        "desc": "柯尔特快速发射两发子弹，使目标减慢速度。造成伤害。（冷却：15 秒）",
        "icon": "/gadgets/Colt/colt_gadget_01.png"
      },
      {
        "id": 23000319,
        "name": "银弹",
        "desc": "柯尔特发射的子弹破坏了环境并刺穿了争吵者。造成伤害。消耗弹药。（冷却：17 秒）",
        "icon": "/gadgets/Colt/colt_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "柯尔特·极限充能",
      "desc": "倍率：35%。激活后，Colt 超级技能 的两束子弹之间的间隔从 0.33 格增加到 0.73 格，从而将他的 超级技能 整体宽度从 1.01 格增加到 1.41 格。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Colt/colt_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Colt/colt_angry_pin.png",
      "/pins/Colt/colt_astral_colt_black_pin.png",
      "/pins/Colt/colt_astral_colt_pin.png",
      "/pins/Colt/colt_astral_colt_upgrade_pin.png",
      "/pins/Colt/colt_challenger_pin.png",
      "/pins/Colt/colt_clap_pin.png",
      "/pins/Colt/colt_dark_angel_pin.png",
      "/pins/Colt/colt_facepalm_pin.png",
      "/pins/Colt/colt_gg_pin.png",
      "/pins/Colt/colt_handsome_pin.png",
      "/pins/Colt/colt_happy_pin.png",
      "/pins/Colt/colt_hypercharge_pin.png"
    ],
    "buffies": [
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Colt/emoji_colt_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Colt/emoji_colt_buffy_star.png"
      }
    ]
  },
  "3": {
    "id": "3",
    "apiId": 16000007,
    "name": "杰西",
    "enName": "Jessie",
    "slug": "jessie",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "天才机械少女杰西，擅长利用电磁脉冲和自动炮台掌控战场。她的炮台能持续输出并提供视野，普攻子弹可弹射多个目标，是团队中不可或缺的阵地战核心。",
    "story": "杰西从小痴迷机械制造，年仅12岁就造出了能自主战斗的炮台，她带着自己的发明闯荡荒野，用智慧和机械实力赢得了所有人的尊重。",
    "avatar": "/HeroAvatars/16000007.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000007.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000007.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 1060,
      "range": "9 (远)",
      "reload": "1.8 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "电磁脉冲",
      "desc": "发射可弹射的电磁子弹，最多击中3个敌人，持续输出能力强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "自动炮台",
      "desc": "部署一座自动攻击的炮台，炮台拥有血量，可被敌人摧毁",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000083,
        "name": "炮台充能",
        "desc": "炮台攻击敌人时，可为杰西积攒超级技能能量",
        "icon": "/starpowers/Jessie/jessie_starpower_01.png"
      },
      {
        "id": 23000149,
        "name": "电磁护盾",
        "desc": "炮台和杰西自身获得护盾，提升阵地战生存能力",
        "icon": "/starpowers/Jessie/jessie_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000251,
        "name": "火花塞",
        "desc": "杰西从她的炮塔中触发冲击波，减慢其影响范围内所有敌人的速度。（冷却：15 秒）",
        "icon": "/gadgets/Jessie/jessie_gadget_01.png"
      },
      {
        "id": 23000295,
        "name": "反冲弹簧",
        "desc": "Scrappy 的攻击速度加倍，持续 5 秒。（冷却：11 秒）",
        "icon": "/gadgets/Jessie/jessie_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "杰西·极限充能",
      "desc": "倍率：60%。激活后，在超充能期间部署的 Scrappy 的生命值会增加 50%，伤害会增加 20%。超充能不会影响现有炮塔。杰西还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Jessie/jessie_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Jessie/emoji_jessie_mecha_special_pink.png",
      "/pins/Jessie/jessie_angry_pin_1.png",
      "/pins/Jessie/jessie_angry_pin.png",
      "/pins/Jessie/jessie_catburglar_pin.png",
      "/pins/Jessie/jessie_clap_pin.png",
      "/pins/Jessie/jessie_facepalm_pin_1.png",
      "/pins/Jessie/jessie_facepalm_pin.png",
      "/pins/Jessie/jessie_gg_pin_1.png",
      "/pins/Jessie/jessie_gg_pin.png",
      "/pins/Jessie/jessie_gw_pin.png",
      "/pins/Jessie/jessie_happy_pin_1.png",
      "/pins/Jessie/jessie_happy_pin.png"
    ],
    "buffies": []
  },
  "4": {
    "id": "4",
    "apiId": 16000002,
    "name": "公牛",
    "enName": "Bull",
    "slug": "bull",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "公牛是血厚防高的硬汉，手持霰弹枪近距离爆发恐怖，超级技能可穿墙冲锋并击退敌人，既是前排抗伤核心，也能突袭收割残血。适合贴脸作战，是荒野决斗模式的热门选择。",
    "story": "公牛曾是荒野帮派的头目，凭借一身蛮力和狠劲称霸一方，后来厌倦了帮派争斗，转而以赏金猎人的身份闯荡，没人敢轻易招惹这个满脸横肉的硬汉。",
    "avatar": "/HeroAvatars/16000002.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000002.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000002.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 880,
      "range": "5.33 (普通)",
      "reload": "1.6 秒 (普通) 0.8 秒 (with Berserker)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "霰弹轰击",
      "desc": "发射7颗霰弹子弹，贴脸可打出满额伤害，近距离压制力极强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "野蛮冲锋",
      "desc": "向前冲锋并穿透障碍物，撞击敌人造成伤害并击退",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000078,
        "name": "越战越勇",
        "desc": "血量越低，攻击速度越快，残血反打能力强",
        "icon": "/starpowers/Bull/bull_starpower_01.png"
      },
      {
        "id": 23000137,
        "name": "坚韧皮肤",
        "desc": "受到的伤害降低，提升整体坦度",
        "icon": "/starpowers/Bull/bull_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000272,
        "name": "T型骨导弹",
        "desc": "公牛向目标格斗者投掷一枚射弹，命中后会造成伤害和治疗。（冷却：18 秒）",
        "icon": "/gadgets/Bull/bull_gadget_01.png"
      },
      {
        "id": 23000310,
        "name": "践踏者",
        "desc": "公牛践踏地面，减缓附近敌人的速度。如果目标已经减速，他们就会被惊呆！（冷却：20 秒）",
        "icon": "/gadgets/Bull/bull_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "公牛·极限充能",
      "desc": "倍率：30%。当公牛积极使用他的超级时，他将获得一个护盾，可以减少他所受到的伤害 80%，直到超级结束，无论是到达其射程的末端、公牛被击晕还是撞到坚不可摧的墙壁。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Bull/bull_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Bull/bull_alleycat_pin.png",
      "/pins/Bull/bull_angry_pin.png",
      "/pins/Bull/bull_B800_pin.png",
      "/pins/Bull/bull_clap_pin.png",
      "/pins/Bull/bull_facepalm_pin.png",
      "/pins/Bull/bull_gg_pin.png",
      "/pins/Bull/bull_happy_pin.png",
      "/pins/Bull/bull_minotaur_pin.png",
      "/pins/Bull/bull_norse_rider_pin.png",
      "/pins/Bull/bull_phew_pin.png",
      "/pins/Bull/bull_pin.png",
      "/pins/Bull/bull_sad_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Bull/emoji_bull_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Bull/emoji_bull_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Bull/emoji_bull_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Bull/emoji_bull_buffy_star.png"
      }
    ]
  },
  "5": {
    "id": "5",
    "apiId": 16000003,
    "name": "布洛克",
    "enName": "Brock",
    "slug": "brock",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "布洛克是精通火箭筒的远程输出，火箭弹可造成范围伤害，超级技能能发射多枚火箭覆盖大片区域，适合远距离压制和清理掩体后的敌人，是宝石争霸、赏金猎人模式的强势英雄。",
    "story": "布洛克曾是军队的爆破专家，退役后带着心爱的火箭筒来到荒野，热衷于用爆炸解决一切问题，性格狂热且爱出风头，总喜欢在战场制造最大的动静。",
    "avatar": "/HeroAvatars/16000003.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000003.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000003.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 1160,
      "range": "9 (远)",
      "reload": "2.1 秒 (慢) 1.785 秒 (with Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "火箭弹",
      "desc": "发射单发火箭弹，命中后造成范围爆炸伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "火箭狂轰",
      "desc": "发射多枚火箭弹，覆盖大范围区域，对集群敌人打击效果显著",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000079,
        "name": "火箭加速",
        "desc": "每次发射火箭弹后，短时间提升移动速度",
        "icon": "/starpowers/Brock/brock_starpower_01.png"
      },
      {
        "id": 23000150,
        "name": "范围强化",
        "desc": "火箭弹爆炸范围扩大，伤害覆盖更广",
        "icon": "/starpowers/Brock/brock_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000245,
        "name": "火箭鞋带",
        "desc": "布洛克炸开下方的地面，将自己推到空中。爆炸对附近的敌人造成 464 点伤害。（冷却：15 秒）",
        "icon": "/gadgets/Brock/brock_gadget_01.png"
      },
      {
        "id": 23000316,
        "name": "火箭燃料",
        "desc": "布洛克的下一次攻击是一枚更大、更猛、更快并能摧毁墙壁的巨型火箭。（冷却：15 秒）",
        "icon": "/gadgets/Brock/brock_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "布洛克·极限充能",
      "desc": "倍率：45%。激活后，布洛克的下一个超级会发射 4 波，每波 7 枚火箭，每枚火箭造成 800 点伤害，如果他有超充能伤害提升，则造成 840 点伤害。如果布洛克装备了更多火箭明星力量，他的超级将发射 5 波 7 枚火箭。他还获得 20% 的速度提升、5% 的伤害提升和 5% 的护盾提升。",
      "icon": "/hypercharges/Brock/brock_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Brock/brock_angry_pin_1.png",
      "/pins/Brock/brock_angry_pin.png",
      "/pins/Brock/brock_boom_box_pin.png",
      "/pins/Brock/brock_clap_pin.png",
      "/pins/Brock/brock_facepalm_pin_1.png",
      "/pins/Brock/brock_facepalm_pin.png",
      "/pins/Brock/brock_gg_pin_1.png",
      "/pins/Brock/brock_gg_pin.png",
      "/pins/Brock/brock_hacker_pin.png",
      "/pins/Brock/brock_happy_pin_1.png",
      "/pins/Brock/brock_happy_pin.png",
      "/pins/Brock/brock_hypercharge_pin.png"
    ],
    "buffies": []
  },
  "6": {
    "id": "6",
    "apiId": 16000022,
    "name": "迪克",
    "enName": "Tick",
    "slug": "tick",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "迪克是体型迷你的投弹手，普攻投掷的地雷会延迟爆炸，超级技能可投掷多枚地雷覆盖区域，擅长远程消耗和封锁走位。体型小的优势让他不易被瞄准，适合偷袭和拉扯作战。",
    "story": "迪克是荒野里的爆破鬼才，痴迷于各种爆炸物，体型虽小但破坏力惊人。他总喜欢躲在暗处布置地雷，看着敌人踩中陷阱时会发出得意的怪笑。",
    "avatar": "/HeroAvatars/16000022.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000022.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000022.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 4800,
      "damage": 1360,
      "range": "8.67 (远)",
      "reload": "2.4 秒 (极慢) 2.18 秒 (with Automa-Tick Reload)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "遥控地雷",
      "desc": "投掷延迟爆炸的地雷，地雷可被敌人触发，造成范围伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "地雷阵",
      "desc": "投掷多枚地雷，形成一片危险区域，封锁敌人走位",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000114,
        "name": "迷你体型",
        "desc": "受击判定范围小，被敌人击中的概率降低",
        "icon": "/starpowers/Tick/tick_starpower_01.png"
      },
      {
        "id": 23000161,
        "name": "快速充能",
        "desc": "地雷爆炸命中敌人时，超级技能能量积攒速度提升",
        "icon": "/starpowers/Tick/tick_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000253,
        "name": "矿山狂热",
        "desc": "蜱虫的下一次攻击会发射 6 枚地雷。（冷却：15 秒）",
        "icon": "/gadgets/Tick/tick_gadget_01.png"
      },
      {
        "id": 23000355,
        "name": "最后的万岁",
        "desc": "蜱虫获得 50% 护盾，持续 1088 秒。之后，它会爆发 1 点伤害。（冷却：15 秒）",
        "icon": "/gadgets/Tick/tick_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "迪克·极限充能",
      "desc": "倍率：40%。激活后，蒂克的下一个超级部署速度更快，并且跟踪敌人的速度更快。当他的头爆炸后，无论是被敌人摧毁还是与敌人接触，6颗地雷都会在爆炸中心周围掉落2.67格，其模式与他的地雷狂热小工具类似。这些地雷都会造成相同的伤害，并为他的超级充能与他的头部爆炸一样多。蜱虫还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Tick/tick_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Tick/tick_angry_pin.png",
      "/pins/Tick/tick_cerberus_pin.png",
      "/pins/Tick/tick_clap_pin.png",
      "/pins/Tick/tick_facepalm_pin.png",
      "/pins/Tick/tick_gg_pin.png",
      "/pins/Tick/tick_happy_pin.png",
      "/pins/Tick/tick_hypercharge_pin.png",
      "/pins/Tick/tick_mecha_tick__ghidorah_dark_pin.png",
      "/pins/Tick/tick_mecha_tick__ghidorah_light_pin.png",
      "/pins/Tick/tick_mecha_tick__ghidorah_pin.png",
      "/pins/Tick/tick_mrkrabs_pin.png",
      "/pins/Tick/tick_phew_pin.png"
    ],
    "buffies": []
  },
  "7": {
    "id": "7",
    "apiId": 16000027,
    "name": "8比特",
    "enName": "8-Bit",
    "slug": "8-bit",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "8比特是复古游戏风格的机器人射手，普攻发射激光束，伤害随距离增加而提升，超级技能可部署伤害增幅器，为范围内队友提升攻击力，是团队增益型核心输出。",
    "story": "8比特是一台拥有自我意识的复古街机机器人，被程序员遗弃后闯入荒野，用像素激光和游戏风格的技能在战场打出一片天，总喜欢喊着游戏术语冲锋。",
    "avatar": "/HeroAvatars/16000027.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000027.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000027.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10400,
      "damage": 680,
      "range": "10 (极远)",
      "reload": "1.5 秒 (普通) 1.275 秒 (with Reload Gear)",
      "speed": "580 (极慢)"
    },
    "attack": {
      "name": "像素激光",
      "desc": "发射直线激光束，距离越远伤害越高，可穿透敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "伤害增幅器",
      "desc": "部署增幅器，范围内友方单位攻击力提升30%",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000168,
        "name": "能量回收",
        "desc": "激光命中敌人时，回复少量自身血量",
        "icon": "/starpowers/8-Bit/8bit_starpower_01.png"
      },
      {
        "id": 23000181,
        "name": "超频运转",
        "desc": "增幅器存在时，自身攻击速度提升",
        "icon": "/starpowers/8-Bit/8bit_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000259,
        "name": "作弊卡带",
        "desc": "8-Bit 立即传送到他的伤害增强器处。（冷却：18 秒）",
        "icon": "/gadgets/8-Bit/8bit_gadget_01.png"
      },
      {
        "id": 23000318,
        "name": "额外学分",
        "desc": "8-Bit的下一次攻击射弹数量增加到8。（冷却：11 秒）",
        "icon": "/gadgets/8-Bit/8bit_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "8比特·极限充能",
      "desc": "倍率：35%。激活后，8-Bit 会部署他的炮塔，向 9 格外的敌人发射激光束。射击本身会造成 230 点伤害，但快速的射击速度使其具有不错的潜在伤害。此外，炮塔的生命值增加到 7400。8-Bit 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/8-Bit/8bit_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/8-Bit/8-bit_piano_pin.png",
      "/pins/8-Bit/8bit_angry_pin.png",
      "/pins/8-Bit/8bit_clap_pin.png",
      "/pins/8-Bit/8bit_classic_pin.png",
      "/pins/8-Bit/8bit_facepalm_pin.png",
      "/pins/8-Bit/8bit_gg_pin.png",
      "/pins/8-Bit/8bit_happy_pin.png",
      "/pins/8-Bit/8bit_hypercharge_pin.png",
      "/pins/8-Bit/8bit_phew_pin.png",
      "/pins/8-Bit/8bit_pin_enchanted.png",
      "/pins/8-Bit/8bit_pin_pl.png",
      "/pins/8-Bit/8bit_pin.png"
    ],
    "buffies": []
  },
  "8": {
    "id": "8",
    "apiId": 16000030,
    "name": "艾魅",
    "enName": "Emz",
    "slug": "emz",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "艾魅是拥有魅惑能力的辅助型英雄，普攻发射的音波可造成持续伤害并减速敌人，超级技能能释放大范围音波，眩晕并伤害敌人，擅长控场和限制敌方走位。",
    "story": "艾魅是荒野中的人气偶像，用独特的音波能力征服了无数粉丝，她的战场表演既能迷惑敌人，也能为队友提供支援，始终保持着光鲜亮丽的形象。",
    "avatar": "/HeroAvatars/16000030.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000030.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000030.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7800,
      "damage": 1120,
      "range": "6.67 (普通)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "魅惑音波",
      "desc": "发射扇形音波，命中敌人后造成持续伤害并减速",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "音爆冲击",
      "desc": "释放大范围音波，眩晕范围内敌人并造成高额伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000198,
        "name": "声波共振",
        "desc": "持续伤害时间延长，对敌人的限制效果更强",
        "icon": "/starpowers/Emz/emz_starpower_01.png"
      },
      {
        "id": 23000199,
        "name": "魅力护盾",
        "desc": "释放超级技能后获得护盾，提升生存能力",
        "icon": "/starpowers/Emz/emz_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000274,
        "name": "朋友地带",
        "desc": "Emz 发射一些发胶，将敌人击退。造成伤害。（冷却：19 秒）",
        "icon": "/gadgets/Emz/emz_gadget_01.png"
      },
      {
        "id": 23000459,
        "name": "酸喷雾",
        "desc": "Emz 喷出的发胶可以穿墙！造成伤害。（冷却：16 秒）",
        "icon": "/gadgets/Emz/emz_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "艾魅·极限充能",
      "desc": "倍率：40%。激活后，Emz 的下一个超级技能会将 4 格半径内的敌人推离她，并在她周围发射一波喷雾，由 18 个单独的喷雾组成，每个喷雾造成 241 点伤害。喷雾的射程为 5 格，其伤害受到她的恶业之星力量的影响。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Emz/emz_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Emz/emz_angry_pin.png",
      "/pins/Emz/emz_clap_pin.png",
      "/pins/Emz/emz_demon_emz_pin.png",
      "/pins/Emz/emz_dj_make_pin.png",
      "/pins/Emz/emz_facepalm_pin.png",
      "/pins/Emz/emz_fan_pin.png",
      "/pins/Emz/emz_gg_pin.png",
      "/pins/Emz/emz_gw_pin.png",
      "/pins/Emz/emz_happy_pin.png",
      "/pins/Emz/emz_hypercharge_pin.png",
      "/pins/Emz/emz_medusa_pin.png",
      "/pins/Emz/emz_phew_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Emz/emoji_emz_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Emz/emoji_emz_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Emz/emoji_emz_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Emz/emoji_emz_buffy_star.png"
      }
    ]
  },
  "9": {
    "id": "9",
    "apiId": 16000006,
    "name": "巴利",
    "enName": "Barley",
    "slug": "barley",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "巴利是擅长投掷燃烧瓶的投弹手，普攻的燃烧瓶落地后形成火焰区域，持续灼烧敌人，超级技能可投掷多枚燃烧瓶，形成大范围火海，适合封锁区域和消耗敌方血量。",
    "story": "巴里曾是酒吧的酒保，因一场意外学会了用燃烧瓶战斗，他性格暴躁且爱喝酒，战斗时总是醉醺醺的，但投掷燃烧瓶的准头却从未失手。",
    "avatar": "/HeroAvatars/16000006.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000006.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000006.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5400,
      "damage": 1600,
      "range": "7.33 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "灼热原浆",
      "desc": "投掷燃烧瓶，落地后形成火焰区域，持续灼烧范围内敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "热情款待",
      "desc": "投掷多枚燃烧瓶，形成大片火海，持续对敌人造成高额灼烧伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000082,
        "name": "生命之源",
        "desc": "灼烧伤害提升，对残血敌人压制效果更强",
        "icon": "/starpowers/Barley/barley_starpower_01.png"
      },
      {
        "id": 23000158,
        "name": "刻骨铭心",
        "desc": "巴利普通攻击伤害提升200。",
        "icon": "/starpowers/Barley/barley_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000250,
        "name": "粘稠糖浆搅拌机",
        "desc": "大麦会掉落一种粘稠的混合物，留下一个水坑，减缓所有与其接触的敌人的速度。（冷却：18 秒）",
        "icon": "/gadgets/Barley/barley_gadget_01.png"
      },
      {
        "id": 23000293,
        "name": "草本补品",
        "desc": "巴利向附近的盟友投掷治疗药水，创建一个每秒可治疗 648 生命值的区域。（冷却：17 秒）",
        "icon": "/gadgets/Barley/barley_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "巴利·极限充能",
      "desc": "倍率：30%。激活后，巴利的超级会扔出 3 个大瓶液体，覆盖的区域比普通超级要大，每个液体的半径为 3.67 格。该地区捕获的灌木丛被毁坏。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Barley/barley_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Barley/barley_angry_pin.png",
      "/pins/Barley/barley_buccaneer_pin.png",
      "/pins/Barley/barley_clap_pin.png",
      "/pins/Barley/barley_facepalm_pin.png",
      "/pins/Barley/barley_gg_pin.png",
      "/pins/Barley/barley_happy_pin.png",
      "/pins/Barley/barley_hypercharge_pin.png",
      "/pins/Barley/barley_knight_pin.png",
      "/pins/Barley/barley_lny2022_pin.png",
      "/pins/Barley/barley_maple_pin.png",
      "/pins/Barley/barley_phew_pin.png",
      "/pins/Barley/barley_pin.png"
    ],
    "buffies": []
  },
  "10": {
    "id": "10",
    "apiId": 16000013,
    "name": "波克",
    "enName": "Poco",
    "slug": "poco",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "波克是手持班卓琴的辅助英雄，普攻的音波可治疗友方单位并伤害敌人，超级技能能释放大范围治疗音波，为全体队友回复大量血量，是团队续航的核心。",
    "story": "波克是荒野中的流浪乐手，用班卓琴的旋律治愈伤痛、击退敌人，他走到哪里都能带来欢乐，是团队中最受欢迎的暖心队友。",
    "avatar": "/HeroAvatars/16000013.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000013.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000013.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 1520,
      "range": "7 (远)",
      "reload": "1.6 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "治愈音波",
      "desc": "发射音波，伤害敌人的同时治疗范围内友方单位",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "群体治疗",
      "desc": "释放大范围音波，为所有友方单位回复高额血量",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000089,
        "name": "音波强化",
        "desc": "治疗效果和伤害均提升，支援能力更强",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000089.png"
      },
      {
        "id": 23000144,
        "name": "持续回响",
        "desc": "超级技能释放后，短时间内持续为队友少量回血",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000144.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000267,
        "name": "音叉",
        "desc": "波科和所有附近的盟友每秒恢复 640 生命值，持续 800 秒。（冷却：20 秒）",
        "icon": "/gadgets/Poco/poco_gadget_01.png"
      },
      {
        "id": 23000350,
        "name": "保护曲",
        "desc": "消除大范围内友方乱斗者的主动不利影响，并提供 4 秒免疫力。（冷却：18 秒）",
        "icon": "/gadgets/Poco/poco_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "波克·极限充能",
      "desc": "倍率：40%。文件：硬核 Icon.png 激活后，Poco 的超级现在可以对已经拥有完整生命值的队友进行超量治疗，其形式为护盾，该护盾会在 5 秒内随超出的生命值成正比衰减。如果队友生命值不足，则不会应用护盾。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Poco/hypercharge_button_poco.png"
    },
    "skins": [],
    "pins": [
      "/pins/Poco/emoji_poco_hc_street_special_pink.png",
      "/pins/Poco/poco_angry_pin.png",
      "/pins/Poco/poco_clap_pin.png",
      "/pins/Poco/poco_facepalm_pin.png",
      "/pins/Poco/poco_gang_pin.png",
      "/pins/Poco/poco_gg_pin.png",
      "/pins/Poco/poco_happy_pin.png",
      "/pins/Poco/poco_hypercharge_pin.png",
      "/pins/Poco/poco_origins_pin.png",
      "/pins/Poco/poco_phew_pin.png",
      "/pins/Poco/poco_pin.png",
      "/pins/Poco/poco_punk_special_pin.png"
    ],
    "buffies": []
  },
  "11": {
    "id": "11",
    "apiId": 16000024,
    "name": "罗莎",
    "enName": "Rosa",
    "slug": "rosa",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "罗莎是擅长近身格斗的植物系坦克，普攻挥舞藤蔓造成范围伤害，超级技能可进入草丛伪装并提升防御和移速，草丛中作战能力极强，是占点、守点模式的强势英雄。",
    "story": "罗莎是荒野植物园的守护者，能与植物沟通，擅长利用草丛和自然之力战斗。她性格沉稳，守护欲极强，绝不会让队友受到伤害。",
    "avatar": "/HeroAvatars/16000024.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000024.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000024.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10800,
      "damage": 1000,
      "range": "3.67 (近)",
      "reload": "1 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "藤蔓打击",
      "desc": "挥舞藤蔓，对周围敌人造成范围伤害，贴脸压制力强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "草丛隐匿",
      "desc": "进入伪装状态，提升移动速度和防御力，草丛中效果翻倍",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000124,
        "name": "植物护甲",
        "desc": "受到的远程伤害降低，提升对射手的抗性",
        "icon": "/starpowers/Rosa/rosa_starpower_01.png"
      },
      {
        "id": 23000147,
        "name": "草丛滋养",
        "desc": "在草丛中时，缓慢回复自身血量",
        "icon": "/starpowers/Rosa/rosa_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000242,
        "name": "植物生长灯",
        "desc": "罗莎给周围的土地施肥，灌木丛立即生长，提供良好的覆盖。（冷却：13 秒）",
        "icon": "/gadgets/Rosa/rosa_gadget_01.png"
      },
      {
        "id": 23000348,
        "name": "不友好的灌木丛",
        "desc": "所有躲在灌木丛中的对手都会受到伤害并减速数秒。（冷却：14 秒）",
        "icon": "/gadgets/Rosa/rosa_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "罗莎·极限充能",
      "desc": "倍率：50%。激活后，罗莎的超级技能会减慢她周围 4.33 格半径范围内与她一起移动的敌人的速度。当她的超级不活跃时，效果范围会减慢 350 点并消失。她还获得 20% 的速度，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Rosa/rosa_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Rosa/biodome_rosa_pin.png",
      "/pins/Rosa/esports22_rosa_pin_1.png",
      "/pins/Rosa/esports22_rosa_pin.png",
      "/pins/Rosa/pin_esports_rosa.png",
      "/pins/Rosa/rosa_angry_pin.png",
      "/pins/Rosa/rosa_brawloween_pin.png",
      "/pins/Rosa/rosa_clap_pin.png",
      "/pins/Rosa/rosa_coco_pin.png",
      "/pins/Rosa/rosa_facepalm_pin.png",
      "/pins/Rosa/rosa_gg_pin.png",
      "/pins/Rosa/rosa_halloween_angry_pin.png",
      "/pins/Rosa/rosa_halloween_clap_pin.png"
    ],
    "buffies": []
  },
  "12": {
    "id": "12",
    "apiId": 16000009,
    "name": "爆破麦克",
    "enName": "Dynamike",
    "slug": "dynamike",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "爆破麦克（爆破麦克斯）是疯狂的投弹手，普攻投掷的炸弹可反弹，超级技能能投掷巨型炸弹，造成大范围高额伤害并击退敌人，擅长利用地形反弹炸弹消耗敌人。",
    "story": "爆破麦克是个沉迷爆炸的疯狂老头，一辈子都在研究各种炸弹，他的战斗方式简单粗暴——用炸弹把一切敌人炸飞，越混乱他越开心。",
    "avatar": "/HeroAvatars/16000009.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000009.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000009.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 1600,
      "range": "7.33 (远)",
      "reload": "1.6 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "反弹炸弹",
      "desc": "投掷可反弹的炸弹，利用地形能击中掩体后的敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "巨型爆破",
      "desc": "投掷巨型炸弹，造成大范围爆炸伤害，击退所有范围内敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000085,
        "name": "炸弹加速",
        "desc": "炸弹飞行速度提升，更易命中移动中的敌人",
        "icon": "/starpowers/Dynamike/dynamike_starpower_01.png"
      },
      {
        "id": 23000155,
        "name": "连锁爆炸",
        "desc": "炸弹爆炸有概率触发小型二次爆炸",
        "icon": "/starpowers/Dynamike/dynamike_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000258,
        "name": "指尖陀螺",
        "desc": "迪纳麦克以更快的移动速度猛烈旋转，并向自己周围扔出多根炸药。每个炸药对敌人造成 1920 点伤害。（冷却：12 秒）",
        "icon": "/gadgets/Dynamike/dynamike_gadget_01.png"
      },
      {
        "id": 23000294,
        "name": "书包充电",
        "desc": "一旦激活，下一次主要攻击也会使敌人昏迷 1.5 秒。（冷却：23 秒）",
        "icon": "/gadgets/Dynamike/dynamike_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "爆破麦克·极限充能",
      "desc": "倍率：30%。When activated, Dynamike's 超级技能 spawns 8 smaller bombs in any direction upon detonation, each dealing 30% of the 超级技能's damage to any enemies caught in their blast radius. The Dyna-Jump 星辉之力 works with his Hypercharged 超级技能, as well as the smaller bombs that split from it. He also gains a 20% speed, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Dynamike/hypercharge_icon_mike.png"
    },
    "skins": [],
    "pins": [
      "/pins/Dynamike/dynamike_angry_pin.png",
      "/pins/Dynamike/dynamike_boomer_pin.png",
      "/pins/Dynamike/dynamike_clap_pin.png",
      "/pins/Dynamike/dynamike_classic_pin.png",
      "/pins/Dynamike/dynamike_coach_mike_pin.png",
      "/pins/Dynamike/dynamike_dynasty_pin.png",
      "/pins/Dynamike/dynamike_facepalm_pin.png",
      "/pins/Dynamike/dynamike_gg_pin.png",
      "/pins/Dynamike/dynamike_happy_pin.png",
      "/pins/Dynamike/dynamike_mask_pin.png",
      "/pins/Dynamike/dynamike_phew_pin.png",
      "/pins/Dynamike/dynamike_pin.png"
    ],
    "buffies": []
  },
  "13": {
    "id": "13",
    "apiId": 16000008,
    "name": "妮塔",
    "enName": "Nita",
    "slug": "nita",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "妮塔是拥有驯熊能力的少女战士，普攻发射的能量波可穿透敌人，超级技能能召唤巨熊伙伴协同作战，巨熊拥有高额血量和伤害，是妮塔的核心战力，适合中近距离团战。",
    "story": "妮塔从小在森林中长大，与巨熊结下了深厚的羁绊，她能听懂动物的语言，巨熊是她最忠诚的伙伴。在战场中，一人一熊的组合让所有敌人闻风丧胆。",
    "avatar": "/HeroAvatars/16000008.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000008.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000008.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8400,
      "damage": 1920,
      "range": "6 (普通)",
      "reload": "1.1 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "熊灵之力",
      "desc": "发射直线能量波，穿透敌人造成伤害，可同时击中多个目标",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "召唤巨熊",
      "desc": "召唤巨熊伙伴，巨熊自主攻击敌人，拥有独立血量和高额伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000084,
        "name": "熊灵共鸣",
        "desc": "妮塔和巨熊共享血量回复效果，生存能力更强",
        "icon": "/starpowers/Nita/nita_starpower_01.png"
      },
      {
        "id": 23000136,
        "name": "狂怒巨熊",
        "desc": "巨熊攻击速度提升，输出能力大幅增强",
        "icon": "/starpowers/Nita/nita_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000249,
        "name": "熊爪",
        "desc": "妮塔命令她的熊猛击地面，击晕其范围内的所有敌人。（冷却：13 秒）",
        "icon": "/gadgets/Nita/nita_gadget_01.png"
      },
      {
        "id": 23000314,
        "name": "人造毛皮",
        "desc": "在接下来的几秒钟内，妮塔的熊获得 % 的伤害护盾。（冷却：14 秒）",
        "icon": "/gadgets/Nita/nita_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "妮塔·极限充能",
      "desc": "倍率：50%。激活后，布鲁斯会显得很大。增大后的熊的行走速度会加快 15%，生命值会增加 20%。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Nita/nita_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Nita/bruce_runner_nita_pin.png",
      "/pins/Nita/nita_angry_pin.png",
      "/pins/Nita/nita_circus_angry_pin.png",
      "/pins/Nita/nita_circus_clap_pin.png",
      "/pins/Nita/nita_circus_gg_pin.png",
      "/pins/Nita/nita_circus_happy_pin.png",
      "/pins/Nita/nita_circus_phew_pin.png",
      "/pins/Nita/nita_circus_pin.png",
      "/pins/Nita/nita_circus_sad_pin.png",
      "/pins/Nita/nita_circus_special_pin.png",
      "/pins/Nita/nita_circus_thanks_pin.png",
      "/pins/Nita/nita_clap_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Nita/emoji_nita_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Nita/emoji_nita_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Nita/emoji_nita_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Nita/emoji_nita_buffy_star.png"
      }
    ]
  },
  "14": {
    "id": "14",
    "apiId": 16000019,
    "name": "潘妮",
    "enName": "Penny",
    "slug": "penny",
    "role": "控场",
    "class": "Artillery",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "潘妮是海盗风格的射手，普攻发射的炮弹可在障碍物后爆炸，超级技能召唤海盗船炮台，炮台可远程攻击敌人并造成范围伤害，擅长远程压制和阵地战。",
    "story": "潘妮曾是海盗船长，带领船员掠夺无数财宝，后来厌倦了海上生活，带着心爱的炮台来到荒野，用海盗的方式在战场书写新的传奇。",
    "avatar": "/HeroAvatars/16000019.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000019.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000019.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 980,
      "range": "8.67 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "海盗炮弹",
      "desc": "发射抛物线炮弹，击中障碍物后爆炸，伤害掩体后的敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "海盗船炮台",
      "desc": "召唤海盗船炮台，炮台远程发射炮弹，造成大范围爆炸伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000099,
        "name": "炮弹强化",
        "desc": "炮弹爆炸范围扩大，伤害覆盖更广",
        "icon": "/starpowers/Penny/penny_starpower_01.png"
      },
      {
        "id": 23000142,
        "name": "炮台耐久",
        "desc": "海盗船炮台血量提升，存活时间更长",
        "icon": "/starpowers/Penny/penny_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000248,
        "name": "咸桶",
        "desc": "佩妮扔下一桶盐来阻挡敌人的射弹。她还可以用它来爆破自己的金袋。（冷却：18 秒）",
        "icon": "/gadgets/Penny/penny_gadget_01.png"
      },
      {
        "id": 23000287,
        "name": "值得信赖的望远镜",
        "desc": "佩妮的大炮向射程内每一个可见的敌人位置射击。（冷却：15 秒）",
        "icon": "/gadgets/Penny/penny_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "潘妮·极限充能",
      "desc": "倍率：30%}}\n{{Quote。激活后，佩妮的下一个超级会部署一门视觉上更大的大炮，快速连续发射两枚炮弹，而不是一枚。两颗炮弹造成的火焰伤害不会叠加。第二颗炮弹在第一颗炮弹发射后延迟 0.3 秒发射。她还获得 20% 的速度提升，以及 5% 的护盾和伤害提升。",
      "icon": "/hypercharges/Penny/penny_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Penny/esports2023_penny_pin.png",
      "/pins/Penny/penny_bunny_dark_pin.png",
      "/pins/Penny/penny_bunny_pin.png",
      "/pins/Penny/penny_facepalm_pin.png",
      "/pins/Penny/penny_ghost_pin.png",
      "/pins/Penny/penny_hypercharge_pin.png",
      "/pins/Penny/penny_moon_curser_pin.png",
      "/pins/Penny/penny_pin_pl.png",
      "/pins/Penny/penny_pop_penny_pin.png",
      "/pins/Penny/penny_scstore_gems_pin.png"
    ],
    "buffies": []
  },
  "15": {
    "id": "15",
    "apiId": 16000015,
    "name": "佩佩",
    "enName": "Piper",
    "slug": "piper",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "佩佩是优雅的女枪手，普攻的子弹伤害随距离增加而大幅提升，超级技能可发射多枚高伤害子弹，远距离狙击能力极强，适合在安全位置收割残血敌人。",
    "story": "佩佩是荒野中的优雅贵妇，精通远距离狙击，她总是保持着精致的妆容和优雅的姿态，用精准的枪法让敌人在毫无察觉中倒下。",
    "avatar": "/HeroAvatars/16000015.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000015.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000015.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5000,
      "damage": 340,
      "range": "10 (极远)",
      "reload": "2.3 秒 (极慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "精准狙击",
      "desc": "发射单发子弹，距离越远伤害越高，远距离可一击重创敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "弹幕射击",
      "desc": "发射多枚子弹，呈扇形覆盖区域，远距离收割能力拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000091,
        "name": "优雅走位",
        "desc": "攻击后短时间提升移动速度，便于调整狙击位置",
        "icon": "/starpowers/Piper/piper_starpower_01.png"
      },
      {
        "id": 23000152,
        "name": "伤害增幅",
        "desc": "远距离子弹伤害额外提升，狙击效果更强",
        "icon": "/starpowers/Piper/piper_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000268,
        "name": "自动瞄准器",
        "desc": "派珀向最近的敌人发出防御射击，造成 136 点伤害，同时还将他们击退。（冷却：18 秒）",
        "icon": "/gadgets/Piper/piper_gadget_01.png"
      },
      {
        "id": 23000291,
        "name": "自制食谱",
        "desc": "激活后，派珀的下一次主要攻击将瞄准敌人。（冷却：18 秒）",
        "icon": "/gadgets/Piper/piper_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "佩佩·极限充能",
      "desc": "倍率：35%。激活后，派珀的下一个超级将投掷 6 枚炸弹，而不是 4 枚。她还将在空中移动得更快，在空中停留 1.2 秒。当她落地时，她会将敌人击退 4 格，并摧毁她周围 3 格半径内的环境。她还获得 20% 的速度提升以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Piper/player_icon_piper_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Piper/emoji_piper_mecha_special_pink.png",
      "/pins/Piper/piper_angry_pin.png",
      "/pins/Piper/piper_athena_pin.png",
      "/pins/Piper/piper_brawloween_pin.png",
      "/pins/Piper/piper_carnival_pin.png",
      "/pins/Piper/piper_clap_pin.png",
      "/pins/Piper/piper_facepalm_pin.png",
      "/pins/Piper/piper_gg_pin.png",
      "/pins/Piper/piper_happy_pin.png",
      "/pins/Piper/piper_hypercharge_pin.png",
      "/pins/Piper/piper_lunar_pin.png",
      "/pins/Piper/piper_noir_pin.png"
    ],
    "buffies": []
  },
  "16": {
    "id": "16",
    "apiId": 16000004,
    "name": "瑞科",
    "enName": "Rico",
    "slug": "rico",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "瑞克（瑞科）是擅长弹射攻击的战士，普攻发射的弹珠可在障碍物间反弹，超级技能发射大量弹珠，覆盖大范围区域，适合利用地形反弹攻击多个敌人，泛用性极强。",
    "story": "瑞克是弹珠游戏的狂热爱好者，他把弹珠的弹射技巧运用到战斗中，总能利用地形打出意想不到的攻击，性格活泼开朗，战斗就像玩游戏一样轻松。",
    "avatar": "/HeroAvatars/16000004.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000004.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000004.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 600,
      "range": "9.67 (极远)",
      "reload": "1.2 秒 (极快) 1.02 秒 (with Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "弹射弹珠",
      "desc": "发射可反弹的弹珠，利用地形击中多个敌人，持续输出能力强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "弹珠风暴",
      "desc": "发射大量弹珠，在障碍物间反复反弹，覆盖大范围区域",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000080,
        "name": "弹珠加速",
        "desc": "弹珠飞行速度提升，更易命中移动中的敌人",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000080.png"
      },
      {
        "id": 23000156,
        "name": "反弹强化",
        "desc": "弹珠反弹次数增加，可攻击更多敌人",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000156.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000246,
        "name": "多球发射器",
        "desc": "里科向各个方向发射一波又一波的弹力子弹。（冷却：22 秒）",
        "icon": "/gadgets/Rico/rico_gadget_01.png"
      },
      {
        "id": 23000409,
        "name": "充气城堡",
        "desc": "里科的下一次基本攻击将从每次射弹反弹中治愈他 192 生命值。（冷却：17 秒）",
        "icon": "/gadgets/Rico/rico_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "瑞科·极限充能",
      "desc": "倍率：35%。激活后，Rico 的超级射弹弹跳距离比平常远得多，前 8 次弹跳获得 6 格额外射程，而不是 6 格。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Rico/player_icon_rico_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Rico/biodome_rico_pin.png",
      "/pins/Rico/rico_angry_pin.png",
      "/pins/Rico/rico_cartoon_pin.png",
      "/pins/Rico/rico_chicken_pin.png",
      "/pins/Rico/rico_clap_pin.png",
      "/pins/Rico/rico_egg_rico_pin.png",
      "/pins/Rico/rico_facepalm_pin.png",
      "/pins/Rico/rico_gg_pin.png",
      "/pins/Rico/rico_guard_rico_pin.png",
      "/pins/Rico/rico_happy_pin.png",
      "/pins/Rico/rico_hypercharge_pin.png",
      "/pins/Rico/rico_phew_pin.png"
    ],
    "buffies": []
  },
  "17": {
    "id": "17",
    "apiId": 16000005,
    "name": "斯派克",
    "enName": "Spike",
    "slug": "spike",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "斯派克是仙人掌形态的战士，普攻发射的尖刺可穿透敌人，超级技能释放大范围尖刺陷阱，持续伤害并减速敌人，擅长控场和范围输出，是团战中的搅局者。",
    "story": "斯派克是荒野沙漠中的一株变异仙人掌，拥有自我意识和战斗能力，它沉默寡言，却能用尖刺给敌人最致命的打击，守护着自己的沙漠领地。",
    "avatar": "/HeroAvatars/16000005.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000005.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000005.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 980,
      "range": "7.67 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "尖刺射击",
      "desc": "发射多根尖刺，穿透敌人造成伤害，可同时击中多个目标",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "尖刺陷阱",
      "desc": "释放大范围尖刺陷阱，持续伤害并减速范围内敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000081,
        "name": "尖刺强化",
        "desc": "尖刺伤害提升，对集群敌人压制效果更强",
        "icon": "/starpowers/Spike/spike_starpower_01.png"
      },
      {
        "id": 23000151,
        "name": "自我修复",
        "desc": "脱离战斗后，缓慢回复自身血量",
        "icon": "/starpowers/Spike/spike_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000247,
        "name": "爆裂枕形",
        "desc": "斯派克瞄准并发射一波造成伤害的针。（冷却：14 秒）",
        "icon": "/gadgets/Spike/spike_gadget_01.png"
      },
      {
        "id": 23000406,
        "name": "生命植物",
        "desc": "斯派克扔出一个带有生命值的大仙人掌来为队友提供掩护。如果仙人掌被摧毁，仙人掌就会爆炸，附近所有队友都会恢复生命值。（冷却：20 秒）",
        "icon": "/gadgets/Spike/spike_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "斯派克·极限充能",
      "desc": "倍率：30%。激活后，斯派克的超级区域会增加。尽管有描述，20% 的增加是半径的增加，而不是面积的增加。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Spike/spike_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Spike/cartoon_spike_special_pin.png",
      "/pins/Spike/cartoon_spike_thanks_pin.png",
      "/pins/Spike/champie_spike_pin.png",
      "/pins/Spike/spike_angry_pin.png",
      "/pins/Spike/spike_cartoon_spike_angry_pin.png",
      "/pins/Spike/spike_cartoon_spike_base_pin.png",
      "/pins/Spike/spike_cartoon_spike_clap_pin.png",
      "/pins/Spike/spike_cartoon_spike_gg_pin.png",
      "/pins/Spike/spike_cartoon_spike_happy_pin.png",
      "/pins/Spike/spike_cartoon_spike_phew_pin.png",
      "/pins/Spike/spike_cartoon_spike_sad_pin.png",
      "/pins/Spike/spike_clap_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Spike/emoji_spike_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Spike/emoji_spike_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Spike/emoji_spike_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Spike/emoji_spike_buffy_star.png"
      }
    ]
  },
  "18": {
    "id": "18",
    "apiId": 16000014,
    "name": "阿渤",
    "enName": "Bo",
    "slug": "bo",
    "role": "输出",
    "class": "Controller",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "阿渤是擅长弓箭和陷阱的战士，普攻发射的弓箭可穿透敌人，超级技能布置多个陷阱，触发后造成高额伤害并减速敌人，适合埋伏和远程消耗，是荒野决斗的强势英雄。",
    "story": "阿渤是荒野中的猎人，精通弓箭和陷阱制作，他熟悉每一寸荒野的地形，擅长利用陷阱埋伏敌人，是个沉默而致命的荒野猎手。",
    "avatar": "/HeroAvatars/16000014.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000014.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000014.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 1280,
      "range": "8.67 (远)",
      "reload": "1.7 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "穿透箭",
      "desc": "发射可穿透的弓箭，同时击中多个敌人，中距离伤害稳定",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "狩猎陷阱",
      "desc": "布置多个陷阱，触发后造成高额伤害并减速敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000090,
        "name": "箭术精准",
        "desc": "弓箭伤害提升，穿透敌人时伤害衰减降低",
        "icon": "/starpowers/Bo/bo_starpower_01.png"
      },
      {
        "id": 23000148,
        "name": "陷阱伪装",
        "desc": "陷阱更难被敌人发现，触发概率提升",
        "icon": "/starpowers/Bo/bo_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000263,
        "name": "超级图腾",
        "desc": "Bo放置了一个图腾，可以使盟友的超级充电率提高%。随着时间的推移，图腾会慢慢失去生命值。（冷却：19 秒）",
        "icon": "/gadgets/Bo/bo_gadget_01.png"
      },
      {
        "id": 23000289,
        "name": "绊线",
        "desc": "Bo 在 1440 秒后触发他所有的地雷。在延迟期间，对手完全无法发现地雷。（冷却：8 秒）",
        "icon": "/gadgets/Bo/bo_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "阿渤·极限充能",
      "desc": "倍率：40%。激活后，Bo 的超级会部署 5 个陷阱，而不是 3 个。此外，地雷传播距离略微增加至 2.33 格。放置这些不会从他的普通超级中移除陷阱，反之亦然。然而，放置这些陷阱将覆盖之前从他的超充能超级中放置的陷阱。使用绊线小工具将激活他现有的所有陷阱。 Bo 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Bo/bo_hypercharge_1.png"
    },
    "skins": [],
    "pins": [
      "/pins/Bo/bo_angry_pin.png",
      "/pins/Bo/bo_brawlentine_pin.png",
      "/pins/Bo/bo_clap_pin.png",
      "/pins/Bo/bo_demon_make_pin.png",
      "/pins/Bo/bo_facepalm_pin.png",
      "/pins/Bo/bo_gg_pin.png",
      "/pins/Bo/bo_happy_pin.png",
      "/pins/Bo/bo_hindu_gold_pin.png",
      "/pins/Bo/bo_hindu_pin.png",
      "/pins/Bo/bo_horus_make_pin.png",
      "/pins/Bo/bo_mecha_angry_pin.png",
      "/pins/Bo/bo_mecha_clap_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Bo/emoji_bo_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Bo/emoji_bo_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Bo/emoji_bo_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Bo/emoji_bo_buffy_star.png"
      }
    ]
  },
  "19": {
    "id": "19",
    "apiId": 16000010,
    "name": "艾尔·普里莫",
    "enName": "El Primo",
    "slug": "el-primo",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "稀有",
      "color": "#68fd58"
    },
    "desc": "艾尔·普里莫是摔跤手风格的坦克，普攻近身拳击造成高额伤害，超级技能飞身冲撞，落地后造成范围伤害并眩晕敌人，擅长突袭和开团，是前排冲阵的核心。",
    "story": "艾尔·普里莫曾是蝉联多届的摔跤冠军，为了寻找更强的对手来到荒野，他信奉“力量就是一切”，用摔跤手的方式在战场中横冲直撞。",
    "avatar": "/HeroAvatars/16000010.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000010.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000010.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 13000,
      "damage": 760,
      "range": "3 (近)",
      "reload": "0.8 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "摔跤重拳",
      "desc": "近身挥舞拳头，造成高额范围伤害，贴脸压制力极强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "飞身冲撞",
      "desc": "向指定方向飞身冲撞，落地后眩晕并伤害范围内敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000086,
        "name": "摔跤韧性",
        "desc": "受到的伤害降低，提升整体坦度",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000086.png"
      },
      {
        "id": 23000140,
        "name": "落地重击",
        "desc": "飞身冲撞落地伤害提升，开团能力更强",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000140.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000264,
        "name": "超级补充剂",
        "desc": "El Primo 抓住了他所能触及的最近的敌人，并将他们像煎饼一样翻转到他宽阔的肩膀上。（冷却：14 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000264.png"
      },
      {
        "id": 23000292,
        "name": "小行星带",
        "desc": "El Primo 召唤一颗小流星攻击最近的敌人。它造成 2432 点伤害并摧毁墙壁。（冷却：13 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000292.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "艾尔·普里莫·极限充能",
      "desc": "倍率：30%。激活后，El Primo 的超级技能会在击中敌人时将其拉入 2 格。灌木丛中的敌人以及像Leon、Sandy和凯特这样的隐形敌人如果被拉动就会暴露出来。他还获得 20% 的速度，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "20": {
    "id": "20",
    "apiId": 16000018,
    "name": "达里尔",
    "enName": "Darryl",
    "slug": "darryl",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "达里尔（达利尔）是双管霰弹枪的海盗射手，普攻近距离爆发极高，超级技能可滚动冲锋，期间免疫伤害并撞飞敌人，适合突袭和残血收割，生存能力极强。",
    "story": "达里尔是潘妮的船员，性格憨厚但战斗力爆表，他的双管霰弹枪从不会让敌人靠近，滚动冲锋的能力更是让他成为了战场上的“不死小强”。",
    "avatar": "/HeroAvatars/16000018.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000018.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000018.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 11000,
      "damage": 480,
      "range": "6 (普通)",
      "reload": "1.8 秒 (普通) 0.9 秒 (with Rolling Reload)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "双管霰弹",
      "desc": "发射多颗霰弹子弹，贴脸可打出满额伤害，近距离压制力拉满",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "滚动冲锋",
      "desc": "向前滚动冲锋，期间免疫伤害，撞飞路径上的敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000094,
        "name": "霰弹强化",
        "desc": "霰弹子弹数量增加，贴脸伤害更高",
        "icon": "/starpowers/Darryl/darryl_starpower_01.png"
      },
      {
        "id": 23000157,
        "name": "快速装填",
        "desc": "攻击间隔缩短，可更快打出爆发伤害",
        "icon": "/starpowers/Darryl/darryl_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000260,
        "name": "反卷旋转器",
        "desc": "达里尔转身向各个方向发射一连串子弹。每次射击都会造成 480 点伤害，如果击中敌人，他的 超级技能 会恢复 25%！（冷却：12 秒）",
        "icon": "/gadgets/Darryl/darryl_gadget_01.png"
      },
      {
        "id": 23000313,
        "name": "焦油桶",
        "desc": "达里尔在自己周围创建一个减速区域，持续 5 秒。（冷却：15 秒）",
        "icon": "/gadgets/Darryl/darryl_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "达里尔·极限充能",
      "desc": "倍率：30%。激活后，达里尔会在下一次超级攻击中快速将 15 枚炮弹围绕在自己周围，就像他的反冲旋转器小工具一样。每发炮弹造成 600 点伤害，射程为 4.33 格，击中敌人时会收取 12% 的超级能量。第一发炮弹朝他的超级方向发射，其余炮弹按照顺时针顺序发射。他的超级和钢圈明星力量的护盾外观都发生了变化。他还获得 20% 的速度，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Darryl/darryl_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Darryl/darryl_angry_pin.png",
      "/pins/Darryl/darryl_clap_pin.png",
      "/pins/Darryl/darryl_cupcake_pin.png",
      "/pins/Darryl/darryl_dumpling_pin.png",
      "/pins/Darryl/darryl_facepalm_pin.png",
      "/pins/Darryl/darryl_gg_pin.png",
      "/pins/Darryl/darryl_happy_pin.png",
      "/pins/Darryl/darryl_hypercharge_pin.png",
      "/pins/Darryl/darryl_lastbox_gg_pin.png",
      "/pins/Darryl/darryl_megabox_pin.png",
      "/pins/Darryl/darryl_phew_pin.png",
      "/pins/Darryl/darryl_pin.png"
    ],
    "buffies": []
  },
  "21": {
    "id": "21",
    "apiId": 16000025,
    "name": "卡尔",
    "enName": "Carl",
    "slug": "carl",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "卡尔是挥舞铲子的射手，普攻投掷的铲子可回旋，往返都能造成伤害，超级技能可旋转铲子，持续攻击周围敌人并移动，适合清理集群敌人和拉扯作战。",
    "story": "卡尔曾是工地的铲土工，意外获得了战斗用的强化铲子，他用这把铲子在荒野中打出了一片天，性格乐观，总说“一把铲子能解决所有问题”。",
    "avatar": "/HeroAvatars/16000025.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000025.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000025.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8400,
      "damage": 1480,
      "range": "8.33 (远)",
      "reload": "-",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "回旋铲",
      "desc": "投掷可回旋的铲子，往返路径上的敌人都会受到伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "旋风铲",
      "desc": "旋转铲子持续攻击周围敌人，同时可移动，范围输出能力强",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000129,
        "name": "铲子强化",
        "desc": "铲子伤害提升，往返伤害均增加",
        "icon": "/starpowers/Carl/carl_starpower_01.png"
      },
      {
        "id": 23000145,
        "name": "旋转加速",
        "desc": "旋风铲状态下移动速度提升，拉扯能力更强",
        "icon": "/starpowers/Carl/carl_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000262,
        "name": "热喷射器",
        "desc": "卡尔扔出的下一个鹤嘴锄会在它后面留下一串滚烫的岩石！接触它们的对手会被点燃并每秒受到 480 点伤害。（冷却：17 秒）",
        "icon": "/gadgets/Carl/carl_gadget_01.png"
      },
      {
        "id": 23000317,
        "name": "飞钩",
        "desc": "卡尔的下一次攻击使他的镐将他拉到攻击的最远点。（冷却：19 秒）",
        "icon": "/gadgets/Carl/carl_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "卡尔·极限充能",
      "desc": "倍率：50%。激活后，卡尔会在使用他的超级后将燃烧的岩石扔到地上。每个岩石持续 4 秒，如果敌人接触它们，它们将被燃烧，每秒造成 777 点伤害，持续 4 秒。掉落的石块数量取决于卡尔的移动；他移动的时间越长，掉落的石头就越多。多个岩石不会叠加燃烧伤害，但在最初的燃烧停止后，敌人可以再次被燃烧。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升，不过超充能速度提升并不与超级自身的速度提升叠加。",
      "icon": "/hypercharges/Carl/carl_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Carl/carl_angry_pin.png",
      "/pins/Carl/carl_carpet_pin.png",
      "/pins/Carl/carl_clap_pin.png",
      "/pins/Carl/carl_facepalm_pin.png",
      "/pins/Carl/carl_gg_pin.png",
      "/pins/Carl/carl_happy_pin.png",
      "/pins/Carl/carl_hypercharge_pin.png",
      "/pins/Carl/carl_insector_carl_pin.png",
      "/pins/Carl/carl_phew_pin.png",
      "/pins/Carl/carl_pin.png",
      "/pins/Carl/carl_retro_pin.png",
      "/pins/Carl/carl_sad_pin.png"
    ],
    "buffies": []
  },
  "22": {
    "id": "22",
    "apiId": 16000034,
    "name": "雅琪",
    "enName": "Jacky",
    "slug": "jacky",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "雅琪是手持电钻的战士，普攻的电钻可穿透障碍物，对掩体后的敌人造成伤害，超级技能释放范围电击，眩晕并伤害周围敌人，擅长攻坚和突破掩体。",
    "story": "雅琪是专业的建筑工人，擅长用电钻拆除障碍物，来到荒野后，她把电钻改造成了武器，专门对付躲在掩体后的敌人，是攻坚破阵的好手。",
    "avatar": "/HeroAvatars/16000034.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000034.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000034.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 2480,
      "range": "3.33 (近)",
      "reload": "1.8 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "动力电钻",
      "desc": "用电钻攻击，可穿透障碍物，伤害掩体后的敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "范围电击",
      "desc": "释放大范围电击，眩晕并伤害周围敌人，攻坚能力强",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000222,
        "name": "电钻强化",
        "desc": "电钻伤害提升，穿透障碍物时伤害衰减降低",
        "icon": "/starpowers/Jacky/jacky_starpower_01.png"
      },
      {
        "id": 23000223,
        "name": "电击护盾",
        "desc": "释放超级技能后获得护盾，提升生存能力",
        "icon": "/starpowers/Jacky/jacky_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000256,
        "name": "气动助力器",
        "desc": "Jacky 获得了能量爆发，移动速度提高了 25%，持续 4 秒。（冷却：15 秒）",
        "icon": "/gadgets/Jacky/jacky_gadget_01.png"
      },
      {
        "id": 23000486,
        "name": "重建",
        "desc": "Jacky 在她周围的小半径范围内重建了环境。（冷却：11 秒）",
        "icon": "/gadgets/Jacky/jacky_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "雅琪·极限充能",
      "desc": "倍率：40%。When activated, her next 超级技能 will have enemies pulled in also slowed by 150 points for 1.5 seconds. She also gains a 20% speed boost, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Jacky/jacky_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Jacky/bt21_jacky_pin.png",
      "/pins/Jacky/jacky_angry_pin.png",
      "/pins/Jacky/jacky_clap_pin.png",
      "/pins/Jacky/jacky_cuttlefish_pin.png",
      "/pins/Jacky/jacky_facepalm_pin.png",
      "/pins/Jacky/jacky_gg_pin.png",
      "/pins/Jacky/jacky_happy_pin.png",
      "/pins/Jacky/jacky_hypercharge_pin.png",
      "/pins/Jacky/jacky_phew_pin.png",
      "/pins/Jacky/jacky_pin_pl.png",
      "/pins/Jacky/jacky_pin.png",
      "/pins/Jacky/jacky_sad_pin.png"
    ],
    "buffies": []
  },
  "23": {
    "id": "23",
    "apiId": 16000016,
    "name": "帕姆",
    "enName": "Pam",
    "slug": "pam",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "帕姆是手持机枪的射手，普攻的机枪子弹可散射，超级技能部署治疗台，为范围内友方单位持续回血，既是输出核心也是团队续航保障，适合阵地战。",
    "story": "帕姆是荒野中的“暖心大妈”，经营着一家移动诊所，她用机枪保护队友，用治疗台治愈伤痛，总是把队友的安危放在第一位。",
    "avatar": "/HeroAvatars/16000016.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000016.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000016.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 600,
      "range": "9 (远)",
      "reload": "1.3 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "重型机枪",
      "desc": "发射散射机枪子弹，中近距离范围伤害，压制力强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "治疗站",
      "desc": "部署治疗台，持续为范围内友方单位回复血量，治疗台有独立血量",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000092,
        "name": "机枪强化",
        "desc": "机枪子弹伤害提升，散射范围扩大",
        "icon": "/starpowers/Pam/pam_starpower_01.png"
      },
      {
        "id": 23000139,
        "name": "治疗增幅",
        "desc": "治疗台的回血效果提升，团队续航更强",
        "icon": "/starpowers/Pam/pam_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000257,
        "name": "脉冲调制器",
        "desc": "帕姆触发她的炮塔发射脉冲，治疗炮塔范围内的盟友，包括她自己，以获得 1600 生命值。（冷却：12 秒）",
        "icon": "/gadgets/Pam/pam_gadget_01.png"
      },
      {
        "id": 23000404,
        "name": "吸废者",
        "desc": "帕姆的下一次攻击每次命中都会消除对方乱斗者最大弹药的 25%。帕姆为自己回收了 50% 的弹药。（冷却：17 秒）",
        "icon": "/gadgets/Pam/pam_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "帕姆·极限充能",
      "desc": "倍率：30%。文件：硬核 Icon.png 激活后，帕姆的炮塔会在部署时进行治疗，价值三个常规治疗刻度。这个即时治疗半径等于炮塔的半径，并且在瞄准超级时可以看到。此外，炮塔还为她和她的盟友提供了盾牌，如果他们在盾牌内停留的时间越长，盾牌就会叠加，最多可达 6000。盾牌生命值以炮塔治疗量 80% 的速度增加，并根据上次刷新时的生命值按比例衰减。如果攻击造成的伤害超过护盾当前的生命值，护盾就会消失，并且他们会受到剩余伤害的伤害。当此护盾激活时，科莱特 的攻击和超级将根据其最大生命值造成伤害。对带有护盾的盟友造成伤害的敌人仍然可以为其超级蓄力，但具有允许他们在受到伤害时向超级蓄力的盟友则不能。部署时的治疗效果和她的脉冲调制器小工具都无法对护盾做出贡献。此外，炮塔的生命值增加到 7240。帕姆还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Pam/pam_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Pam/pam_angry_pin.png",
      "/pins/Pam/pam_broker_pin.png",
      "/pins/Pam/pam_clap_pin.png",
      "/pins/Pam/pam_egg_pam_pin.png",
      "/pins/Pam/pam_evilqueen_angry_pin.png",
      "/pins/Pam/pam_evilqueen_clap_pin.png",
      "/pins/Pam/pam_evilqueen_gg_pin.png",
      "/pins/Pam/pam_evilqueen_happy_pin.png",
      "/pins/Pam/pam_evilqueen_phew_pin.png",
      "/pins/Pam/pam_evilqueen_sad_pin.png",
      "/pins/Pam/pam_evilqueen_special_pin.png",
      "/pins/Pam/pam_evilqueen_thanks_pin.png"
    ],
    "buffies": []
  },
  "24": {
    "id": "24",
    "apiId": 16000020,
    "name": "弗兰肯",
    "enName": "Frank",
    "slug": "frank",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "费兰肯（弗兰肯）是科学怪人风格的战士，普攻挥舞巨锤造成大范围伤害，超级技能释放电击波，眩晕并伤害直线上的所有敌人，擅长控场和范围输出。",
    "story": "费兰肯是疯狂科学家的实验产物，拥有巨大的身躯和力量，他虽然外表恐怖，但内心善良，只会用巨锤保护自己和队友。",
    "avatar": "/HeroAvatars/16000020.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000020.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000020.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 13600,
      "damage": 2320,
      "range": "6 (普通)",
      "reload": "0.8 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "巨锤重击",
      "desc": "挥舞巨锤，对周围大范围敌人造成高额伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "电击波",
      "desc": "释放直线电击波，眩晕并伤害路径上的所有敌人",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000104,
        "name": "巨锤强化",
        "desc": "巨锤伤害提升，攻击范围扩大",
        "icon": "/starpowers/Frank/frank_starpower_01.png"
      },
      {
        "id": 23000153,
        "name": "电击延长",
        "desc": "电击波眩晕时间延长，控场效果更强",
        "icon": "/starpowers/Frank/frank_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000261,
        "name": "主动降噪",
        "desc": "向目标方向发射声波，对乱斗者造成伤害。弗兰克在几秒钟内对群体控制免疫。（冷却：16 秒）",
        "icon": "/gadgets/Frank/frank_gadget_01.png"
      },
      {
        "id": 23000351,
        "name": "不可抗拒的吸引力",
        "desc": "弗兰克瞄准远程攻击，将敌人拉向他。消耗弹药。会造成损害。（冷却：20 秒）",
        "icon": "/gadgets/Frank/frank_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "弗兰肯·极限充能",
      "desc": "倍率：30%。激活后，弗兰克的超级技能会击中他周围半径内的所有敌人和环境。不过，冲击波的半径比他正常的超级范围要稍微短一些。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Frank/frank_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Frank/frank_angry_pin.png",
      "/pins/Frank/frank_caveman_pin.png",
      "/pins/Frank/frank_charcoal_frank_pin.png",
      "/pins/Frank/frank_clap_pin.png",
      "/pins/Frank/frank_facepalm_pin.png",
      "/pins/Frank/frank_gg_pin.png",
      "/pins/Frank/frank_happy_pin.png",
      "/pins/Frank/frank_hindu_pin.png",
      "/pins/Frank/frank_hypercharge_pin.png",
      "/pins/Frank/frank_king_angry_pin.png",
      "/pins/Frank/frank_king_base_pin.png",
      "/pins/Frank/frank_king_clap_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Frank/emoji_frank_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Frank/emoji_frank_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Frank/emoji_frank_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Frank/emoji_frank_buffy_star.png"
      }
    ]
  },
  "25": {
    "id": "25",
    "apiId": 16000026,
    "name": "比比",
    "enName": "Bibi",
    "slug": "bibi",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "比比是手持曲棍球棍的战士，普攻挥棍造成范围伤害并反弹，超级技能可蓄力冲刺，挥棍击飞敌人并造成高额伤害，擅长拉扯和突袭，机动性极强。",
    "story": "比比是曲棍球队的明星球员，来到荒野后把曲棍球棍改造成了武器，她的打法像打曲棍球一样灵活，总能用快速的冲刺和精准的挥棍击败敌人。",
    "avatar": "/HeroAvatars/16000026.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000026.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000026.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 2800,
      "range": "3.67 (近)",
      "reload": "0.8 秒 (极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "曲棍球棍",
      "desc": "挥棍造成范围伤害，子弹可反弹，利用地形攻击多个敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "蓄力冲刺",
      "desc": "蓄力后冲刺，挥棍击飞敌人并造成高额伤害，机动性拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000134,
        "name": "棍法精准",
        "desc": "挥棍伤害提升，反弹次数增加",
        "icon": "/starpowers/Bibi/bibi_starpower_01.png"
      },
      {
        "id": 23000146,
        "name": "冲刺加速",
        "desc": "蓄力冲刺速度提升，更易命中敌人",
        "icon": "/starpowers/Bibi/bibi_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000275,
        "name": "维生素强化剂",
        "desc": "Bibi 每秒恢复生命值，持续数秒。（冷却：20 秒）",
        "icon": "/gadgets/Bibi/bibi_gadget_01.png"
      },
      {
        "id": 23000458,
        "name": "超粘",
        "desc": "Bibi 扔出泡泡糖，使里面的所有敌人减速 %（冷却：21 秒）",
        "icon": "/gadgets/Bibi/bibi_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "比比·极限充能",
      "desc": "倍率：40%。激活后，比比的超级在击中目标时会分裂成两个大气泡，它们以一定角度向左和向右移动，并造成相同数量的伤害。分裂后，他们走了 33.33 格。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Bibi/bibi_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Bibi/bibi_angry_pin.png",
      "/pins/Bibi/bibi_clap_pin.png",
      "/pins/Bibi/bibi_crime_fixer_bibi_pin.png",
      "/pins/Bibi/bibi_facepalm_pin.png",
      "/pins/Bibi/bibi_gamer_pin.png",
      "/pins/Bibi/bibi_gg_pin.png",
      "/pins/Bibi/bibi_happy_pin.png",
      "/pins/Bibi/bibi_hypercharge_pin.png",
      "/pins/Bibi/bibi_injustice_fixer_pin.png",
      "/pins/Bibi/bibi_phew_pin.png",
      "/pins/Bibi/bibi_pin_cursed.png",
      "/pins/Bibi/bibi_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Bibi/emoji_bibi_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Bibi/emoji_bibi_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Bibi/emoji_bibi_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Bibi/emoji_bibi_buffy_star.png"
      }
    ]
  },
  "26": {
    "id": "26",
    "apiId": 16000029,
    "name": "贝亚",
    "enName": "Bea",
    "slug": "bea",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "贝亚是蜜蜂女王风格的射手，普攻发射的针刺可叠加毒素，持续造成伤害，超级技能释放追踪蜜蜂群，自动攻击中毒敌人，擅长持续消耗和收割。",
    "story": "贝亚是荒野中蜜蜂群的女王，能与蜜蜂沟通并指挥它们战斗，她的毒刺和蜜蜂群让敌人闻风丧胆，守护着自己的蜂巢领地。",
    "avatar": "/HeroAvatars/16000029.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000029.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000029.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5600,
      "damage": 800,
      "range": "10 (极远)",
      "reload": "0.9 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "毒刺射击",
      "desc": "发射针刺，命中敌人后叠加毒素，持续造成伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "蜜蜂群",
      "desc": "释放追踪蜜蜂群，自动攻击中毒的敌人，造成高额持续伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000192,
        "name": "毒素强化",
        "desc": "毒素持续伤害提升，对敌人压制效果更强",
        "icon": "/starpowers/Bea/bea_starpower_01.png"
      },
      {
        "id": 23000193,
        "name": "蜜蜂增幅",
        "desc": "蜜蜂群数量增加，输出能力大幅提升",
        "icon": "/starpowers/Bea/bea_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000271,
        "name": "蜂蜜糖蜜",
        "desc": "比亚扔下一个蜂箱，蜂箱周围沾满了粘稠的蜂蜜。蜂蜜可以减缓踏入其中的敌人的速度。（冷却：20 秒）",
        "icon": "/gadgets/Bea/bea_gadget_01.png"
      },
      {
        "id": 23000312,
        "name": "Rattled Hive",
        "desc": "Bea unleashes 320 angry bees that circle away from her, dealing more damage the further they go (up to 960 damage).（冷却：24 秒）",
        "icon": "/gadgets/Bea/bea_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "贝亚·极限充能",
      "desc": "倍率：40%。激活后，Bea 的超级在击中目标或达到最大射程时会分裂成两个较小的组，每组 7 架无人机，造成相同数量的伤害。这些无人机在分裂后飞行了 5.67 格。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Bea/bea_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Bea/bea_angry_pin.png",
      "/pins/Bea/bea_archi_make_pin.png",
      "/pins/Bea/bea_bug_pin.png",
      "/pins/Bea/bea_byte_pin.png",
      "/pins/Bea/bea_clap_pin.png",
      "/pins/Bea/bea_facepalm_pin.png",
      "/pins/Bea/bea_gg_pin.png",
      "/pins/Bea/bea_gold_gw_pin.png",
      "/pins/Bea/bea_gw_pin.png",
      "/pins/Bea/bea_happy_pin.png",
      "/pins/Bea/bea_hypercharge_pin.png",
      "/pins/Bea/bea_mega_bettle_pin.png"
    ],
    "buffies": []
  },
  "27": {
    "id": "27",
    "apiId": 16000011,
    "name": "莫提斯",
    "enName": "Mortis",
    "slug": "mortis",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "墨提斯（莫提斯）是吸血鬼风格的射手，普攻的蝙蝠攻击可吸血，超级技能向前突进并攻击路径上的敌人，擅长突袭和残血反打，机动性和续航兼备。",
    "story": "墨提斯是活了数百年的吸血鬼，厌倦了永生的孤独来到荒野，他用蝙蝠攻击敌人并汲取血液，是战场上令人恐惧的收割者。",
    "avatar": "/HeroAvatars/16000011.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000011.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000011.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 2000,
      "range": "2.67 (近)",
      "reload": "2.4 秒 (极慢)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "蝙蝠突袭",
      "desc": "发射蝙蝠攻击敌人，命中后回复自身血量，续航能力强",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "暗影突袭",
      "desc": "向前突进，攻击路径上的所有敌人，机动性拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000087,
        "name": "吸血强化",
        "desc": "蝙蝠吸血效果提升，续航能力更强",
        "icon": "/starpowers/Mortis/mortis_starpower_01.png"
      },
      {
        "id": 23000154,
        "name": "突进加速",
        "desc": "暗影突袭距离增加，突袭能力更强",
        "icon": "/starpowers/Mortis/mortis_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000265,
        "name": "组合旋转器",
        "desc": "莫蒂斯旋转他的铲子造成伤害。也可以瞄准短距离蝙蝠攻击。（冷却：15 秒）",
        "icon": "/gadgets/Mortis/mortis_gadget_01.png"
      },
      {
        "id": 23000290,
        "name": "夜间生物",
        "desc": "莫蒂斯变成一群蝙蝠并前往目标地点。（冷却：24 秒）",
        "icon": "/gadgets/Mortis/mortis_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "莫提斯·极限充能",
      "desc": "倍率：30%。激活后，莫蒂斯的超级现在会以与卡尔的主要攻击类似的方式返回到他身边，造成第二波伤害和治疗。弹丸速度也增加。他还获得 20% 的速度提升、5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Mortis/hypercharge_button_mortis.png"
    },
    "skins": [],
    "pins": [
      "/pins/Mortis/kairos_pin_game.png",
      "/pins/Mortis/mecha_mortis_special_pin.png",
      "/pins/Mortis/mortis_angry_pin.png",
      "/pins/Mortis/mortis_blue_squidward_pin.png",
      "/pins/Mortis/mortis_clap_pin.png",
      "/pins/Mortis/mortis_demon_angry_pin.png",
      "/pins/Mortis/mortis_demon_clap_pin.png",
      "/pins/Mortis/mortis_demon_gg_pin.png",
      "/pins/Mortis/mortis_demon_happy_pin.png",
      "/pins/Mortis/mortis_demon_phew_pin.png",
      "/pins/Mortis/mortis_demon_pin.png",
      "/pins/Mortis/mortis_demon_sad_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Mortis/emoji_mortis_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Mortis/emoji_mortis_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Mortis/emoji_mortis_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Mortis/emoji_mortis_buffy_star.png"
      }
    ]
  },
  "28": {
    "id": "28",
    "apiId": 16000017,
    "name": "塔拉",
    "enName": "Tara",
    "slug": "tara",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "塔拉是占卜师风格的射手，普攻投掷的卡牌可造成范围伤害，超级技能释放引力场，将敌人拉向中心并造成伤害，擅长控场和集火敌人，是团战核心。",
    "story": "塔拉是荒野中的占卜师，能通过卡牌预知敌人的行动，她用命运卡牌和引力场掌控战场，总是能在最关键的时刻打出致命的控场。",
    "avatar": "/HeroAvatars/16000017.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000017.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000017.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 960,
      "range": "8 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "命运卡牌",
      "desc": "投掷多张卡牌，造成范围伤害，可同时击中多个敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "引力场",
      "desc": "释放引力场，将范围内敌人拉向中心，便于团队集火",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000093,
        "name": "卡牌强化",
        "desc": "卡牌伤害提升，范围扩大",
        "icon": "/starpowers/Tara/tara_starpower_01.png"
      },
      {
        "id": 23000160,
        "name": "引力延长",
        "desc": "引力场持续时间延长，控场效果更强",
        "icon": "/starpowers/Tara/tara_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000266,
        "name": "心灵强化剂",
        "desc": "塔拉和她的盟友能够看到所有敌人，即使是在灌木丛中，持续 4 秒。（冷却：20 秒）",
        "icon": "/gadgets/Tara/tara_gadget_01.png"
      },
      {
        "id": 23000356,
        "name": "来自超越的支持",
        "desc": "塔拉用三个微弱的暗影包围自己，这些暗影会攻击对手并在 864 秒后消失。（冷却：17 秒）",
        "icon": "/gadgets/Tara/tara_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "塔拉·极限充能",
      "desc": "倍率：50%。激活后，塔拉的超级技能具有更大的作用范围。尽管有描述，但 20% 的增加是直径而不是面积，因此她的 超级技能 的直径从 8 格增加到 9.6 格。此外，超级技能可以摧毁整个半径范围内的墙壁并伤害敌人，而不仅仅是中间的范围。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Tara/hypercharge_button_tara.png"
    },
    "skins": [],
    "pins": [
      "/pins/Tara/esports2022_tara_angry_pin_1.png",
      "/pins/Tara/esports2022_tara_angry_pin.png",
      "/pins/Tara/esports2022_tara_phone_pin.png",
      "/pins/Tara/tara_angry_pin.png",
      "/pins/Tara/tara_clap_pin.png",
      "/pins/Tara/tara_esports2022_pin.png",
      "/pins/Tara/tara_facepalm_pin.png",
      "/pins/Tara/tara_gg_pin.png",
      "/pins/Tara/tara_happy_pin.png",
      "/pins/Tara/tara_hypercharge_pin.png",
      "/pins/Tara/tara_misfortune_pin.png",
      "/pins/Tara/tara_phew_pin.png"
    ],
    "buffies": []
  },
  "29": {
    "id": "29",
    "apiId": 16000021,
    "name": "吉恩",
    "enName": "Gene",
    "slug": "gene",
    "role": "辅助",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "吉恩（吉恩）是灯神风格的战士，普攻发射的魔法弹可穿透敌人，超级技能释放魔法漩涡，吸扯敌人并造成伤害，擅长控场和范围输出，泛用性极强。",
    "story": "吉恩是被困在神灯中的灯神，偶然间获得自由后来到荒野，他用魔法弹和漩涡掌控战场，性格幽默，总喜欢用魔法搞些小恶作剧。",
    "avatar": "/HeroAvatars/16000021.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000021.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000021.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 1000,
      "range": "5.67 (close range; 普通)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "魔法弹",
      "desc": "发射可穿透的魔法弹，同时击中多个敌人，中距离伤害稳定",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "魔法漩涡",
      "desc": "释放魔法漩涡，吸扯范围内敌人并造成持续伤害",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000109,
        "name": "魔法强化",
        "desc": "魔法弹伤害提升，穿透敌人时伤害衰减降低",
        "icon": "/starpowers/Gene/gene_starpower_01.png"
      },
      {
        "id": 23000159,
        "name": "漩涡增幅",
        "desc": "魔法漩涡吸扯力增强，控场效果更强",
        "icon": "/starpowers/Gene/gene_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000252,
        "name": "灯管吹坏",
        "desc": "所有靠近吉恩的敌人都会立即被击退。如果至少有一名敌方斗士在范围内，吉恩还将恢复他最大生命值的 10%。（冷却：20 秒）",
        "icon": "/gadgets/Gene/gene_gadget_01.png"
      },
      {
        "id": 23000352,
        "name": "复仇之魂",
        "desc": "吉恩向大范围内所有可见的对手发射一枚寻的导弹，根据距离造成最多 320 点伤害。（冷却：20 秒）",
        "icon": "/gadgets/Gene/gene_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "吉恩·极限充能",
      "desc": "倍率：35%。激活后，吉恩的下一个超级会发射 3 只手，每只手都可以将敌人拉到自己身边。双手将目标拉向吉恩的速度比平常更快，并且返回时不会破坏障碍物。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Gene/gene_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Gene/gene_angel_gene_pin.png",
      "/pins/Gene/gene_angry_pin.png",
      "/pins/Gene/gene_brawloween_pin.png",
      "/pins/Gene/gene_clap_pin.png",
      "/pins/Gene/gene_evil_pin.png",
      "/pins/Gene/gene_facepalm_pin.png",
      "/pins/Gene/gene_gg_pin.png",
      "/pins/Gene/gene_happy_pin.png",
      "/pins/Gene/gene_hypercharge_pin.png",
      "/pins/Gene/gene_phew_pin.png",
      "/pins/Gene/gene_pin.png",
      "/pins/Gene/gene_sad_pin.png"
    ],
    "buffies": []
  },
  "30": {
    "id": "30",
    "apiId": 16000032,
    "name": "麦克斯",
    "enName": "Max",
    "slug": "max",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "麦克斯是极速风格的坦克，普攻发射的能量弹可穿透敌人，超级技能提升自身和队友的移动速度，擅长拉扯和支援，是团队的机动性核心。",
    "story": "麦克斯是荒野中速度最快的英雄，痴迷于一切能提升速度的东西，她的极速领域能让整个团队变得灵活，是游击战的核心人物。",
    "avatar": "/HeroAvatars/16000032.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000032.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000032.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 640,
      "range": "8.33 (远)",
      "reload": "1.3 秒 (极快) 1.1 秒 (with Run n' Gun)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "极速能量弹",
      "desc": "发射可穿透的能量弹，同时击中多个敌人，中距离伤害稳定",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "极速领域",
      "desc": "提升自身和范围内队友的移动速度，拉扯和支援能力拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000210,
        "name": "能量强化",
        "desc": "能量弹伤害提升，穿透敌人时伤害衰减降低",
        "icon": "/starpowers/Max/max_starpower_01.png"
      },
      {
        "id": 23000211,
        "name": "极速延长",
        "desc": "极速领域持续时间延长，团队机动性更强",
        "icon": "/starpowers/Max/max_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000254,
        "name": "移相器",
        "desc": "麦克斯向前冲刺，冲刺时免受敌人的所有伤害。（冷却：15 秒）",
        "icon": "/gadgets/Max/max_gadget_01.png"
      },
      {
        "id": 23000311,
        "name": "偷偷摸摸的运动鞋",
        "desc": "延迟 3 秒后，麦克斯会眨眼回到她选择的地方，恢复她在此期间受到的所有伤害。（冷却：8 秒）",
        "icon": "/gadgets/Max/max_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "麦克斯·极限充能",
      "desc": "倍率：45%。激活后，麦克斯的下一个超级技能还会向她自己和所有盟友投掷能量饮料，无论他们是否在她的超级技能范围内。这些饮料有 1000 点移动速度，可以影响 2.67 格半径内的每个斗士。这些饮料不会瞄准盟友，而且速度足够慢，可以通过速度提升来躲避争吵者。所有受影响的盟友的移动速度都会提高 200 点，持续 10 秒，每喝一杯饮料，他们的超级能量就会增加 25%。能量饮料速度提升将覆盖基础超级速度提升，但与超充电速度提升叠加。麦克斯还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Max/max_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Max/max_angel_max_pin.png",
      "/pins/Max/max_angry_pin.png",
      "/pins/Max/max_black_jungle_pin.png",
      "/pins/Max/max_cony_pin.png",
      "/pins/Max/max_facepalm_pin.png",
      "/pins/Max/max_gg_pin.png",
      "/pins/Max/max_happy_pin.png",
      "/pins/Max/max_hermes_pin.png",
      "/pins/Max/max_hypercharge_pin.png",
      "/pins/Max/max_jungle_pin.png",
      "/pins/Max/max_phew__2__pin.png",
      "/pins/Max/max_phew_pin.png"
    ],
    "buffies": []
  },
  "31": {
    "id": "31",
    "apiId": 16000031,
    "name": "P先生",
    "enName": "Mr. P",
    "slug": "mr-p",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "P先生是企鹅风格的辅助英雄，普攻发射的泡泡弹可造成范围伤害，超级技能召唤企鹅小弟协同作战，小弟拥有独立攻击能力，擅长阵地战和持续输出。",
    "story": "P先生是企鹅军团的首领，带着一群忠心的企鹅小弟闯荡荒野，他的泡泡弹和小弟们的组合让他成为了阵地战的王者，没人敢轻易招惹这个企鹅团队。",
    "avatar": "/HeroAvatars/16000031.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000031.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000031.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 1520,
      "range": "7 (远)",
      "reload": "1.6 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "泡泡弹",
      "desc": "发射泡泡弹，命中后爆炸造成范围伤害，可击中掩体后的敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "企鹅小弟",
      "desc": "召唤多个企鹅小弟，小弟自主攻击敌人，持续输出能力强",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000204,
        "name": "泡泡强化",
        "desc": "泡泡弹爆炸范围扩大，伤害提升",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000204.png"
      },
      {
        "id": 23000205,
        "name": "小弟强化",
        "desc": "企鹅小弟血量和伤害提升，存活时间更长",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000205.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000269,
        "name": "服务铃",
        "desc": "P 先生通过将其伤害增加 1184 并将生命值增加 183 来增强他当前的搬运工。（冷却：17 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000269.png"
      },
      {
        "id": 23000349,
        "name": "波特增援",
        "desc": "下一次攻击将在攻击发生的地方产生一个弱搬运工。（冷却：17 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000349.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "P先生·极限充能",
      "desc": "倍率：30%。激活后，P 先生会投出一个生命值增加 500 点的本垒。基地将产生拥有 4000 生命值和更快移动速度的机器人搬运工。此外，P 先生可以同时让最多 2 名来自本基地的搬运工处于活动状态。然而，超充能搬运工每秒会衰减 400 点生命值，直到被摧毁，如果他们没有受到任何伤害，可持续最多 10 秒。当使用服务铃小工具时，只有第一个生成的搬运工才会被抛光。 P 先生还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "32": {
    "id": "32",
    "apiId": 16000037,
    "name": "芽芽",
    "enName": "Sprout",
    "slug": "sprout",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "芽芽是植物系坦克，普攻发射的种子可生成植物屏障，阻挡敌人攻击，超级技能发射巨型种子，造成范围伤害并生成大量屏障，擅长防守和封锁走位。",
    "story": "芽芽是荒野中的新生植物精灵，擅长用种子制造屏障保护自己和队友，它性格胆小但守护欲极强，总能用屏障为团队筑起一道坚固的防线。",
    "avatar": "/HeroAvatars/16000037.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000037.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000037.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6400,
      "damage": 2080,
      "range": "5 (throw; 普通)",
      "reload": "1.7 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "种子屏障",
      "desc": "发射种子，生成植物屏障，阻挡敌人子弹和移动",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "巨型种子",
      "desc": "发射巨型种子，爆炸造成范围伤害，生成大量植物屏障",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000240,
        "name": "屏障强化",
        "desc": "植物屏障血量提升，存活时间更长",
        "icon": "/starpowers/Sprout/sprout_starpower_01.png"
      },
      {
        "id": 23000241,
        "name": "种子加速",
        "desc": "种子发射速度提升，更易布置屏障",
        "icon": "/starpowers/Sprout/sprout_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000244,
        "name": "花园覆盖机",
        "desc": "新芽消耗灌木丛来恢复 1536 生命值。（冷却：9 秒）",
        "icon": "/gadgets/Sprout/sprout_gadget_01.png"
      },
      {
        "id": 23000315,
        "name": "移植",
        "desc": "芽芽摧毁了当前的树篱，但会立即使其超级再次充满电。（冷却：15 秒）",
        "icon": "/gadgets/Sprout/sprout_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "芽芽·极限充能",
      "desc": "倍率：40%。激活后，芽芽 的超级每格每秒对 2.67 格宽圆圈内的敌人造成 500 点伤害，持续 10 秒。考虑到墙的碰撞箱，损坏区域最多从墙砖边缘延伸 0.83 格。每块墙砖造成的损坏可以叠加。即使树篱被摧毁或使用了斯普劳特的移植小工具，损坏区域在整个持续时间内仍保留在地面上。 芽芽 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Sprout/sprout_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Sprout/esports22_sprout_pin_1.png",
      "/pins/Sprout/esports22_sprout_pin.png",
      "/pins/Sprout/esports22_sprout_zzz_pin_1.png",
      "/pins/Sprout/esports22_sprout_zzz_pin.png",
      "/pins/Sprout/pin_esports_sprout.png"
    ],
    "buffies": []
  },
  "33": {
    "id": "33",
    "apiId": 16000012,
    "name": "黑鸦",
    "enName": "Crow",
    "slug": "crow",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "黑鸦是乌鸦风格的坦克，普攻发射的羽毛可叠加毒素，持续造成伤害，超级技能释放乌鸦群，覆盖大范围区域并叠加毒素，擅长持续消耗和收割残血。",
    "story": "黑鸦是荒野中的暗影刺客，总是悄无声息地接近敌人，用剧毒羽毛和乌鸦群收割生命，它沉默寡言，是战场上最致命的暗箭。",
    "avatar": "/HeroAvatars/16000012.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000012.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000012.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 320,
      "range": "8.67 (远)",
      "reload": "1.4 秒 (快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "剧毒羽毛",
      "desc": "发射羽毛，命中敌人后叠加毒素，持续造成伤害",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "乌鸦群",
      "desc": "释放乌鸦群，覆盖大范围区域，为所有命中敌人叠加多层毒素",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000088,
        "name": "毒素强化",
        "desc": "毒素持续伤害提升，对残血敌人压制效果更强",
        "icon": "/starpowers/Crow/crow_starpower_01.png"
      },
      {
        "id": 23000143,
        "name": "羽毛加速",
        "desc": "羽毛飞行速度提升，更易命中移动中的敌人",
        "icon": "/starpowers/Crow/crow_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000243,
        "name": "速效毒药",
        "desc": "乌鸦立即对所有乌鸦中毒的敌人造成剩余的毒伤害，并获得价值 % 的护盾。（冷却：20 秒）",
        "icon": "/gadgets/Crow/crow_gadget_01.png"
      },
      {
        "id": 23000286,
        "name": "减缓毒素",
        "desc": "投掷苦无，对第一个击中的敌人造成伤害、减速并使其中毒，持续 1 秒。（冷却：17 秒）",
        "icon": "/gadgets/Crow/crow_gadget_01.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "黑鸦·极限充能",
      "desc": "倍率：55%。激活后，乌鸦超级的匕首现在会在达到最大射程后返回到他身边，并且还可以刺穿敌人。此效果适用于跳跃和着陆时发射的匕首。然而，匕首在发射时不能穿过墙壁，但可以穿过墙壁返回到克劳。乌鸦还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Crow/hypercharge_icon_crow.png"
    },
    "skins": [],
    "pins": [
      "/pins/Crow/crow_angry_pin.png",
      "/pins/Crow/crow_captain_pin.png",
      "/pins/Crow/crow_clap_pin.png",
      "/pins/Crow/crow_facepalm_pin.png",
      "/pins/Crow/crow_gang_pin.png",
      "/pins/Crow/crow_gg_pin.png",
      "/pins/Crow/crow_happy_pin.png",
      "/pins/Crow/crow_hypercharge_pin.png",
      "/pins/Crow/crow_lunar_pin.png",
      "/pins/Crow/crow_mecha_angry_pin.png",
      "/pins/Crow/crow_mecha_clap_pin.png",
      "/pins/Crow/crow_mecha_gg_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Crow/emoji_crow_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Crow/emoji_crow_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Crow/emoji_crow_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Crow/emoji_crow_buffy_star.png"
      }
    ]
  },
  "34": {
    "id": "34",
    "apiId": 16000023,
    "name": "里昂",
    "enName": "Leon",
    "slug": "leon",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "里昂是忍者风格的坦克，普攻发射的飞镖可穿透敌人，超级技能进入隐形状态，提升移动速度并能穿墙，擅长偷袭和收割残血，是荒野决斗的强势英雄。",
    "story": "里昂是荒野中的顶尖忍者，精通隐形和飞镖技巧，他总能在敌人毫无察觉的情况下完成收割，是战场上的“隐形杀手”。",
    "avatar": "/HeroAvatars/16000023.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000023.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000023.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 480,
      "range": "9.67 (极远)",
      "reload": "1.9 秒 (普通)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "忍者飞镖",
      "desc": "发射多枚飞镖，穿透敌人造成伤害，可同时击中多个目标",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "隐形突袭",
      "desc": "进入隐形状态，提升移动速度并可穿墙，偷袭能力拉满",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000119,
        "name": "飞镖强化",
        "desc": "飞镖伤害提升，穿透敌人时伤害衰减降低",
        "icon": "/starpowers/Leon/leon_starpower_01.png"
      },
      {
        "id": 23000141,
        "name": "隐形延长",
        "desc": "隐形状态持续时间延长，偷袭窗口更大",
        "icon": "/starpowers/Leon/leon_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000276,
        "name": "克隆投影仪",
        "desc": "莱昂创造了自己的幻象来迷惑敌人。克隆人攻击敌人，造成轻微伤害（冷却：13 秒）",
        "icon": "/gadgets/Leon/leon_gadget_01.png"
      },
      {
        "id": 23000408,
        "name": "棒棒糖水滴",
        "desc": "莱昂为他的团队提供了一个隐蔽的区域来隐藏。随着时间的推移，棒棒糖会慢慢失去生命值。（冷却：20 秒）",
        "icon": "/gadgets/Leon/leon_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "里昂·极限充能",
      "desc": "倍率：30%。如果莱昂在超级充能期间使用超级充能或在超级充能期间激活超级充能，则攻击不会消除他的隐形状态。然而，如果他使用超充能超级并且超充能持续时间结束，下一次攻击将消除他的隐形状态。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Leon/hypercharge_icon_leon.png"
    },
    "skins": [],
    "pins": [
      "/pins/Leon/leon_angry_pin.png",
      "/pins/Leon/leon_brawloween_pin.png",
      "/pins/Leon/leon_clap_pin.png",
      "/pins/Leon/leon_dino_pin.png",
      "/pins/Leon/leon_facepalm_pin.png",
      "/pins/Leon/leon_gg_pin.png",
      "/pins/Leon/leon_ghost_pin.png",
      "/pins/Leon/leon_happy_pin.png",
      "/pins/Leon/leon_mecha_angry_pin.png",
      "/pins/Leon/leon_mecha_clap_pin.png",
      "/pins/Leon/leon_mecha_gg_pin.png",
      "/pins/Leon/leon_mecha_happy_pin.png"
    ],
    "buffies": [
      {
        "name": "闪耀芭菲",
        "desc": "芭菲挂件展示效果。",
        "icon": "/buffies/Leon/emoji_leon_buffy_bling.png"
      },
      {
        "name": "妙具芭菲",
        "desc": "强化该英雄的随身妙具效果。",
        "icon": "/buffies/Leon/emoji_leon_buffy_gadget.png"
      },
      {
        "name": "极限充能芭菲",
        "desc": "强化该英雄的极限充能效果。",
        "icon": "/buffies/Leon/emoji_leon_buffy_hc.png"
      },
      {
        "name": "星辉芭菲",
        "desc": "强化该英雄的星辉之力效果。",
        "icon": "/buffies/Leon/emoji_leon_buffy_star.png"
      }
    ]
  },
  "35": {
    "id": "35",
    "apiId": 16000028,
    "name": "沙迪",
    "enName": "Sandy",
    "slug": "sandy",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "沙迪是沙之精灵风格的射手，普攻发射的沙粒可造成范围伤害，超级技能释放沙尘暴，遮挡敌人视野并减速，擅长控场和掩护队友推进。",
    "story": "沙迪是沙漠中的精灵，能操控沙子制造沙尘暴，他性格慵懒但实力强大，总能用沙尘暴掩护队友，让敌人陷入混乱。",
    "avatar": "/HeroAvatars/16000028.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000028.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000028.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8200,
      "damage": 1800,
      "range": "6 (普通)",
      "reload": "1.8 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "沙粒射击",
      "desc": "发射沙粒，造成范围伤害，可同时击中多个敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "沙尘暴",
      "desc": "释放大范围沙尘暴，遮挡敌人视野并减速，掩护队友推进",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000186,
        "name": "沙粒强化",
        "desc": "沙粒伤害提升，范围扩大",
        "icon": "/starpowers/Sandy/sandy_starpower_01.png"
      },
      {
        "id": 23000187,
        "name": "沙尘延长",
        "desc": "沙尘暴持续时间延长，控场效果更强",
        "icon": "/starpowers/Sandy/sandy_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000270,
        "name": "睡眠刺激器",
        "desc": "桑迪睡了 1.5 秒，他的生命值完全恢复。（冷却：11 秒）",
        "icon": "/gadgets/Sandy/sandy_gadget_01.png"
      },
      {
        "id": 23000405,
        "name": "甜蜜的梦",
        "desc": "桑迪的下一次攻击会让对手陷入沉睡 1 秒。然而，他们会从任何伤害中醒来。（冷却：18 秒）",
        "icon": "/gadgets/Sandy/sandy_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "沙迪·极限充能",
      "desc": "倍率：40%。When activated, Sandy's next 超级技能 prevents affected enemies from using any attacks, Supers, Gadgets, or Hypercharges, similar to 奥蒂斯' 超级技能, for 0.5 seconds. This 极限充能 doesn't affect passive effects like the Gears's speed boost or Bo's Circling Eagle 星辉之力. This 极限充能 works on spawnables like Nita's bear, Penny's cannon, or Jessie's turret; however, it won't affect passive turrets like 8-Bit's and Pam's turret. For the whole duration, a red, crossed-out symbol will show above the head of the affected target, signifying that this effect is active, and if it hits an enemy 乱斗英雄, the affected 乱斗英雄's screen will turn a bit dark. This sandstorm will also increase the movement speed of Sandy and his teammates when they are in its range by 200 points (not 20%, despite the description). Sandy also gains a 20% speed boost, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Sandy/sandy_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Sandy/sandy_angry_pin.png",
      "/pins/Sandy/sandy_clap_pin.png",
      "/pins/Sandy/sandy_facepalm_pin.png",
      "/pins/Sandy/sandy_gg_pin.png",
      "/pins/Sandy/sandy_giftshop_pin.png",
      "/pins/Sandy/sandy_glowing_jellyfish_pin.png",
      "/pins/Sandy/sandy_happy_pin.png",
      "/pins/Sandy/sandy_hypercharge_pin.png",
      "/pins/Sandy/sandy_jellyfish_pin.png",
      "/pins/Sandy/sandy_lantern_pin.png",
      "/pins/Sandy/sandy_neon_jellyfish_pin.png",
      "/pins/Sandy/sandy_nightmare_pin.png"
    ],
    "buffies": []
  },
  "36": {
    "id": "36",
    "apiId": 16000035,
    "name": "格尔",
    "enName": "Gale",
    "slug": "gale",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "格尔是冰雪风格的战士，普攻发射的雪球可造成范围伤害，超级技能释放冰风，击退敌人并造成伤害，擅长控场和拉扯，是团战中的搅局者。",
    "story": "格尔是冰雪王国的守护者，能操控冰雪和寒风战斗，他的雪球和冰风让敌人寸步难行，是荒野中最令人头疼的控场英雄之一。",
    "avatar": "/HeroAvatars/16000035.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000035.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000035.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 600,
      "range": "8.33 (远)",
      "reload": "1.2 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "雪球攻击",
      "desc": "发射雪球，命中后爆炸造成范围伤害，可击中掩体后的敌人",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "冰风冲击",
      "desc": "释放强力冰风，击退范围内敌人并造成伤害，拉扯能力强",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000228,
        "name": "雪球强化",
        "desc": "雪球爆炸范围扩大，伤害提升",
        "icon": "/starpowers/Gale/gale_starpower_01.png"
      },
      {
        "id": 23000229,
        "name": "冰风强化",
        "desc": "冰风击退距离增加，控场效果更强",
        "icon": "/starpowers/Gale/gale_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000277,
        "name": "弹簧顶出器",
        "desc": "大风将弹跳垫扔到脚下，将朋友和敌人都抛到空中。（冷却：20 秒）",
        "icon": "/gadgets/Gale/gale_gadget_01.png"
      },
      {
        "id": 23000407,
        "name": "龙卷风",
        "desc": "盖尔用他的吹叶机制造了一场当地龙卷风，这将推开任何试图穿过的对手。（冷却：21 秒）",
        "icon": "/gadgets/Gale/gale_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "格尔·极限充能",
      "desc": "倍率：25%。激活后，Gale 的 超级技能 会宽 3 格，并以 0.2 秒的间隔产生 2 阵风和雪，将敌人推得比平时更远。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Gale/gale_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Gale/gale_angry_pin.png",
      "/pins/Gale/gale_facepalm_pin.png",
      "/pins/Gale/gale_gg_pin.png",
      "/pins/Gale/gale_happy_pin.png",
      "/pins/Gale/gale_hypercharge_pin.png",
      "/pins/Gale/gale_nut_make_pin.png",
      "/pins/Gale/gale_phew__2__pin.png",
      "/pins/Gale/gale_phew_pin.png",
      "/pins/Gale/gale_pin.png",
      "/pins/Gale/gale_sad_pin.png",
      "/pins/Gale/gale_shell_blaster_pin.png",
      "/pins/Gale/gale_special_pin.png"
    ],
    "buffies": []
  },
  "37": {
    "id": "37",
    "apiId": 16000036,
    "name": "纳妮",
    "enName": "Nani",
    "slug": "nani",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "纳尼最初是一个安全摄像头，后来被改装来监视杰西。可惜，她已经很难跟上这个早熟的女孩了！",
    "story": "",
    "avatar": "/HeroAvatars/16000036.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000036.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000036.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5000,
      "damage": 1600,
      "range": "8.67 (远)",
      "reload": "1.8 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000234,
        "name": "自动对焦",
        "desc": "根据行进距离，窥视最多可造成 1800 点额外伤害。",
        "icon": "/starpowers/Nani/nani_starpower_01.png"
      },
      {
        "id": 23000235,
        "name": "调质钢",
        "desc": "当纳尼的超级激活时，受到的伤害减少 80%。",
        "icon": "/starpowers/Nani/nani_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000278,
        "name": "翘曲时间",
        "desc": "纳尼传送到皮普最后已知的位置并结束她的超级。（冷却：13 秒）",
        "icon": "/gadgets/Nani/nani_gadget_01.png"
      },
      {
        "id": 23000353,
        "name": "返回发件人",
        "desc": "在接下来的 2 秒内，纳尼第一次受到敌人伤害时，80% 的伤害会返还给敌人。（冷却：17 秒）",
        "icon": "/gadgets/Nani/nani_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "纳妮·极限充能",
      "desc": "倍率：30%。When activated, Peep grows in size the further he travels, growing up to twice the size by the time the 超级技能 runs out. This does not increase Peep's explosion radius. 纳妮 also gains a 20% speed boost, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Nani/hypercharge_button_nani.png"
    },
    "skins": [],
    "pins": [
      "/pins/Nani/nani_angry_pin.png",
      "/pins/Nani/nani_ares_pin.png",
      "/pins/Nani/nani_dark_knight_pin.png",
      "/pins/Nani/nani_easter_pin.png",
      "/pins/Nani/nani_facepalm_pin.png",
      "/pins/Nani/nani_gg_pin.png",
      "/pins/Nani/nani_happy_pin.png",
      "/pins/Nani/nani_hypercharge_pin.png",
      "/pins/Nani/nani_phew_pin.png",
      "/pins/Nani/nani_pin.png",
      "/pins/Nani/nani_sad_pin.png",
      "/pins/Nani/nani_sally_pin.png"
    ],
    "buffies": []
  },
  "38": {
    "id": "38",
    "apiId": 16000038,
    "name": "瑟奇",
    "enName": "Surge",
    "slug": "surge",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "瑟奇 是一款升级版冷饮柜，随时准备好让派对开始！他有节奏、有动作，还有源源不断的能量饮料。",
    "story": "",
    "avatar": "/HeroAvatars/16000038.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000038.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000038.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 1180,
      "range": "6.67 (普通)",
      "reload": "2 秒 (慢)",
      "speed": "650 (慢)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000283,
        "name": "至最大",
        "desc": "现在，瑟奇 的主要攻击在撞到墙壁时会分裂。",
        "icon": "/starpowers/Surge/surge_starpower_01.png"
      },
      {
        "id": 23000284,
        "name": "冰镇食用",
        "desc": "瑟奇 在整个比赛期间保持他的第 1 阶段超级升级。",
        "icon": "/starpowers/Surge/surge_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000285,
        "name": "电涌",
        "desc": "瑟奇 使他的电路超载，并将他的升级阶段增加 1，持续 10 秒。（冷却：13 秒）",
        "icon": "/gadgets/Surge/surge_gadget_01.png"
      },
      {
        "id": 23000485,
        "name": "电源盾",
        "desc": "在接下来的 2 秒内，瑟奇 会消耗下一次攻击造成的 50% 伤害，并使用能量重新装填 2 弹药。（冷却：17 秒）",
        "icon": "/gadgets/Surge/surge_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "瑟奇·极限充能",
      "desc": "倍率：20%。激活后，当瑟奇使用他的超级时，他会升级到第四阶段，使他的射击范围比第二阶段或第三阶段更大。无论他之前处于哪个阶段，他都会升级到第四阶段，但在极限充能结束后会恢复到正常的阶段。此外，在他的超充能持续时间内，他的射击也会分裂，无论是击中格斗者还是用他的星力最大化击中墙壁！装备好，即使瑟奇不使用他的超级。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Surge/hypercharge_button_surge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Surge/emojis_surge_team_pin.png",
      "/pins/Surge/surge_angry_pin.png",
      "/pins/Surge/surge_clap_pin.png",
      "/pins/Surge/surge_evilking_green_pin.png",
      "/pins/Surge/surge_evilking_pin.png",
      "/pins/Surge/surge_evilking_red_pin.png",
      "/pins/Surge/surge_facepalm_pin_1.png",
      "/pins/Surge/surge_facepalm_pin.png",
      "/pins/Surge/surge_gg_pin.png",
      "/pins/Surge/surge_happy_pin.png",
      "/pins/Surge/surge_hypercharge_pin.png",
      "/pins/Surge/surge_kong_pin.png"
    ],
    "buffies": []
  },
  "39": {
    "id": "39",
    "apiId": 16000039,
    "name": "科莱特",
    "enName": "Colette",
    "slug": "colette",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "科莱特收集了每个斗殴者的每一个雕像、毛绒玩具和玩具。她着迷了吗？是的。但她是否脱离了现实？也是的。",
    "story": "",
    "avatar": "/HeroAvatars/16000039.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000039.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000039.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7200,
      "damage": 500,
      "range": "8.67 (远)",
      "reload": "1.6 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000300,
        "name": "推它",
        "desc": "所有被科莱特冲锋击中的敌方斗士都会被带到攻击的最远点！在最大距离处，他们会被眩晕 秒。",
        "icon": "/starpowers/Colette/colette_starpower_01.png"
      },
      {
        "id": 23000301,
        "name": "大众税",
        "desc": "科莱特在超级期间受到的伤害减少 %，如果击中格斗者，她会获得 30% 护盾，持续 3 秒。",
        "icon": "/starpowers/Colette/colette_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000302,
        "name": "钠-Ah",
        "desc": "科莱特发射一枚射弹，使一名斗士迷惑数秒。使用弹药。（冷却：17 秒）",
        "icon": "/gadgets/Colette/buddy_icon_colette_gadget.png"
      },
      {
        "id": 23000457,
        "name": "陷阱",
        "desc": "科莱特发射一枚射弹，其治疗量相当于所造成伤害的%。使用弹药并在冷却前可发射 3 次。（冷却：17 秒）",
        "icon": "/gadgets/Colette/colette_gadget_01.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "科莱特·极限充能",
      "desc": "倍率：27%。激活后，当科莱特使用她的超级时，她会产生她的灵魂，并以 66% 的速度遵循与她的超级相同的路径。该灵魂不受伤害，即使科莱特在使用她的超级时被击败，它也会完成它的路径。她的灵魂对特殊目标造成的伤害与科莱特本人相同，但对斗殴者造成的伤害总是最小。科莱特还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。此外，超充能伤害加成会增加科莱特超级的最小和特殊目标伤害，但是超充能伤害加成会增加灵魂的特殊目标伤害，但不会增加其最小伤害。",
      "icon": "/hypercharges/Colette/buddy_icon_colette_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Colette/colette_angry_pin.png",
      "/pins/Colette/colette_clap_pin.png",
      "/pins/Colette/colette_facepalm_pin.png",
      "/pins/Colette/colette_fangirl_cony_pin.png",
      "/pins/Colette/colette_gg_pin.png",
      "/pins/Colette/colette_ghost_pin.png",
      "/pins/Colette/colette_gladiator_make_pin.png",
      "/pins/Colette/colette_happy_pin.png",
      "/pins/Colette/colette_hypercharge_pin.png",
      "/pins/Colette/colette_impie_colette_pin.png",
      "/pins/Colette/colette_maid_kiiro_pin.png",
      "/pins/Colette/colette_maid_midori_pin.png"
    ],
    "buffies": []
  },
  "40": {
    "id": "40",
    "apiId": 16000040,
    "name": "琥珀",
    "enName": "Amber",
    "slug": "amber",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "琥珀确实带来了热量！尽管她有点笨手笨脚，但她对自己的射击能力过于自信。对她来说，壮观是第一位的，安全才是最后的。",
    "story": "",
    "avatar": "/HeroAvatars/16000040.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000040.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000040.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6800,
      "damage": 210,
      "range": "8.33 (远)",
      "reload": "0.22 秒 (8.8 秒 max; 极快) 0.187 秒 (7.48 秒 max; with Reload Gear) 0.146 秒 (5.86 秒 max; with Scorchin' Siphon) 0.124 秒 (4.96 秒 max; with Scorchin' Siphon and Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000307,
        "name": "野火",
        "desc": "安珀可以同时在地面上有两个燃料水坑，当她站在一个附近时，她会自动给她的超级能量充电。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000307.png"
      },
      {
        "id": 23000308,
        "name": "焦金虹吸管",
        "desc": "当靠近一滩火液时，安珀用它来加快喷火速度 50% 速度。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000308.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000309,
        "name": "点火器",
        "desc": "琥珀快速奔跑 3 秒，同时溢出她的火液，然后她可以点燃火液。（冷却：15 秒）",
        "icon": "/gadgets/Amber/amber_gadget_01.png"
      },
      {
        "id": 23000488,
        "name": "舞动的火焰",
        "desc": "琥珀在她周围产生 1512 条轨道火焰，持续 3 秒，击中时造成 5 点伤害。（冷却：14 秒）",
        "icon": "/gadgets/Amber/amber_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "琥珀·极限充能",
      "desc": "倍率：30%。激活后，安珀的火瓶着陆时产生的水坑半径会加倍。然而，尽管有这样的描述，当水坑被点燃时，它会燃烧 2 秒然后消失，使接触它足够长的时间的敌人着火，造成 5 点伤害。然而，如果敌人足够早地被油迹击中，并且足够晚地被飞溅的油坑再次击中，他们将受到 6 点伤害。伤害也比基础超级略有增加。琥珀还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Amber/amber_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Amber/amber_angry_pin.png",
      "/pins/Amber/amber_clap_pin.png",
      "/pins/Amber/amber_delavega_pin.png",
      "/pins/Amber/amber_facepalm_pin.png",
      "/pins/Amber/amber_frost_queen_angry_pin.png",
      "/pins/Amber/amber_frost_queen_clap_pin.png",
      "/pins/Amber/amber_frost_queen_gg_pin.png",
      "/pins/Amber/amber_frost_queen_happy_pin.png",
      "/pins/Amber/amber_frost_queen_phew_pin.png",
      "/pins/Amber/amber_frost_queen_pin.png",
      "/pins/Amber/amber_frost_queen_sad_pin.png",
      "/pins/Amber/amber_frost_queen_special_pin.png"
    ],
    "buffies": []
  },
  "41": {
    "id": "41",
    "apiId": 16000041,
    "name": "小罗",
    "enName": "Lou",
    "slug": "lou",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "卢是一名机器人雪锥推销员，他尚未完成第一笔销售。位于白雪皑皑的山峰上可能与此有关。",
    "story": "",
    "avatar": "/HeroAvatars/16000041.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000041.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000041.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 880,
      "range": "9.33 (极远)",
      "reload": "1.1 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000324,
        "name": "超酷",
        "desc": "站在卢超级区域的对手被冻结的速度会加快 14%。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000324.png"
      },
      {
        "id": 23000325,
        "name": "低温",
        "desc": "对手会损失高达 50% 的伤害，具体取决于他们在卢的攻击中被冻结的程度。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000325.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000326,
        "name": "冰块",
        "desc": "小罗用冰块保护自己，在1秒内变得无敌。（冷却：18 秒）",
        "icon": "/gadgets/Lou/lou_gadget_01.png"
      },
      {
        "id": 23000400,
        "name": "冷冻糖浆",
        "desc": "立即为 小罗 超级内的对手添加 50% 冻结计。（冷却：18 秒）",
        "icon": "/gadgets/Lou/lou_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "小罗·极限充能",
      "desc": "倍率：30%。When activated, whenever 小罗 drops his 超级技能, any enemy near the landing spot gets their Frost Meter set to 100%, instantly stunning them. However, this 极限充能 doesn't take effect on the currently active 超级技能. He also gains a 20% speed boost, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Lou/lou_hypercharge_1.png"
    },
    "skins": [],
    "pins": [
      "/pins/Lou/lou_angry_pin.png",
      "/pins/Lou/lou_burger_pin.png",
      "/pins/Lou/lou_clap_pin.png",
      "/pins/Lou/lou_facepalm_pin.png",
      "/pins/Lou/lou_gg_pin.png",
      "/pins/Lou/lou_happy_pin.png",
      "/pins/Lou/lou_hypercharge_pin.png",
      "/pins/Lou/lou_king_angry_pin.png",
      "/pins/Lou/lou_king_clap_pin.png",
      "/pins/Lou/lou_king_gg_pin.png",
      "/pins/Lou/lou_king_happy_pin.png",
      "/pins/Lou/lou_king_phew_pin.png"
    ],
    "buffies": []
  },
  "42": {
    "id": "42",
    "apiId": 16000042,
    "name": "拜伦",
    "enName": "Byron",
    "slug": "byron",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "拜伦发明了许多混合物和酊剂，可以通过多种方式治愈或伤害……但其中大多数都属于伤害类别",
    "story": "",
    "avatar": "/HeroAvatars/16000042.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000042.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000042.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5200,
      "damage": 760,
      "range": "10 (极远)",
      "reload": "1.45 秒 (快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000331,
        "name": "不适",
        "desc": "拜伦的超级技能还会导致对手从任何来源获得的治疗量减少 75% ，持续 9 秒。",
        "icon": "/starpowers/Byron/byron_starpower_01.png"
      },
      {
        "id": 23000332,
        "name": "注射",
        "desc": "每隔 3.5 秒，下一次基本攻击就会刺穿目标。",
        "icon": "/starpowers/Byron/byron_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000333,
        "name": "手臂中弹",
        "desc": "拜伦使用他的一次射击每秒治愈自己 1040 次，持续 1300 秒。（冷却：17 秒）",
        "icon": "/gadgets/Byron/byron_gadget_01.png"
      },
      {
        "id": 23000461,
        "name": "助推器射击",
        "desc": "拜伦的下一次攻击会射出 3 支飞镖，而不是一支，每支飞镖造成的伤害减少 20%，治疗效果减少 40%。（冷却：18 秒）",
        "icon": "/gadgets/Byron/byron_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "拜伦·极限充能",
      "desc": "倍率：30%。激活后，拜伦 的 超级技能 还会从其着陆区域放射状发射 6 个主攻击射弹，行程 5.33 格。图案是固定的，每个飞镖之间的角度为 60 度，并且不会随着 超级技能 投掷的方向而旋转。射弹造成的伤害/治疗与常规攻击一样多，但速度较慢，并且冲锋量明显较少。这些射弹在中心有一个 4 格宽的盲点，因此它们无法在近距离范围内全部击中敌人。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Byron/byron_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Byron/byron_angry_pin.png",
      "/pins/Byron/byron_circus_pin.png",
      "/pins/Byron/byron_clap_pin.png",
      "/pins/Byron/byron_facepalm_pin.png",
      "/pins/Byron/byron_gg_pin.png",
      "/pins/Byron/byron_happy_pin.png",
      "/pins/Byron/byron_phew_pin.png",
      "/pins/Byron/byron_pin_pl.png",
      "/pins/Byron/byron_pin.png",
      "/pins/Byron/byron_sad_pin.png",
      "/pins/Byron/byron_special_pin.png",
      "/pins/Byron/byron_starrforce_pin.png"
    ],
    "buffies": []
  },
  "43": {
    "id": "43",
    "apiId": 16000043,
    "name": "艾德加",
    "enName": "Edgar",
    "slug": "edgar",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "埃德加相信没有人理解他。当然不是他的妈妈，她认为他正在经历一个阶段。只有他自己知道，他灵魂中的黑暗是永恒的。",
    "story": "",
    "avatar": "/HeroAvatars/16000043.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000043.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000043.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 540,
      "range": "2 (近)",
      "reload": "0.7 秒 (极快) 0.467 秒 (with Hypercharge)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000338,
        "name": "硬着陆",
        "desc": "埃德加的超级和Let's Fly 随身妙具也会在着陆时对附近的敌人造成伤害，或在直接命中时造成伤害。",
        "icon": "/starpowers/Edgar/edgar_starpower_01.png"
      },
      {
        "id": 23000339,
        "name": "拳脚相加",
        "desc": "埃德加造成的伤害可增加 % 治疗效果。",
        "icon": "/starpowers/Edgar/edgar_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000340,
        "name": "让我们飞吧",
        "desc": "埃德加的围巾抓住了最近的斗殴者，他跳到了他们后面。他的围巾也会把他拉向墙壁。（冷却：14 秒）",
        "icon": "/gadgets/Edgar/buddy_icon_edgar_gadget.png"
      },
      {
        "id": 23000403,
        "name": "硬核",
        "desc": "埃德加获得了一个盾牌，可以保护他免受下一次伤害。随着时间的推移，护盾会变得越来越弱。（冷却：17 秒）",
        "icon": "/gadgets/Edgar/edgar_gadget_01.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "艾德加·极限充能",
      "desc": "倍率：40%。激活后，使用超级后，埃德加的外观将变成红色，并且在超级充电的剩余时间内，他的超级充电速度提高 150%，装弹速度提高 50%。这也会影响他特性的超级冲锋速度。在Hyper Charge期间使用Let's Fly 随身妙具不会触发此效果。埃德加还获得 5% 的伤害和护盾加成，以及 20% 的速度加成。",
      "icon": "/hypercharges/Edgar/buddy_icon_edgar_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Edgar/biodome_edgar_pin.png",
      "/pins/Edgar/bt21_edgar_pin.png",
      "/pins/Edgar/edgar_angry_pin.png",
      "/pins/Edgar/edgar_clap_pin.png",
      "/pins/Edgar/edgar_dark_angel_angry_pin.png",
      "/pins/Edgar/edgar_dark_angel_clap_pin.png",
      "/pins/Edgar/edgar_dark_angel_gg_pin.png",
      "/pins/Edgar/edgar_dark_angel_happy_pin.png",
      "/pins/Edgar/edgar_dark_angel_phew_pin.png",
      "/pins/Edgar/edgar_dark_angel_pin.png",
      "/pins/Edgar/edgar_dark_angel_sad_pin.png",
      "/pins/Edgar/edgar_dark_angel_special_pin.png"
    ],
    "buffies": []
  },
  "44": {
    "id": "44",
    "apiId": 16000044,
    "name": "拉夫上校",
    "enName": "Ruffs",
    "slug": "ruffs",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "拉夫斯是一位忠诚、纪律严明的太空上校，他管理严密，一切都按章办事。但内心深处，他只想做一个好孩子！",
    "story": "",
    "avatar": "/HeroAvatars/16000044.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000044.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000044.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 1200,
      "range": "9 (远)",
      "reload": "1.4 秒 (快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000345,
        "name": "空中优势",
        "desc": "空投补给现在包含一枚炸弹，可以为空投增加 120% 伤害，并允许其摧毁墙壁。",
        "icon": "/starpowers/Ruffs/ruffs_starpower_01.png"
      },
      {
        "id": 23000346,
        "name": "现场推广",
        "desc": "当友好的争斗者处于该能力的范围内时，其最大生命值每秒增加 40 。",
        "icon": "/starpowers/Ruffs/ruffs_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000347,
        "name": "隐蔽",
        "desc": "拉夫上校 扔下 1920 个沙袋作为掩护。每一个都有 拉夫上校 最大生命值的 40%。（冷却：16 秒）",
        "icon": "/gadgets/Ruffs/ruffs_gadget_01.png"
      },
      {
        "id": 23000402,
        "name": "空中支援",
        "desc": "拉夫斯在最近的对手周围发起弹幕攻击，每次攻击都会造成 960 点伤害。（冷却：15 秒）",
        "icon": "/gadgets/Ruffs/ruffs_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "拉夫上校·极限充能",
      "desc": "倍率：40%。激活后，拉夫斯的下一个超级在撞击时造成的伤害将增加 25%。此外，如果盟友英雄收集了能量提升，他们的超级充能将立即充电。然而，已经拥有能量提升的斗士无法接受它，而没有装备超充能的斗士只能拥有从拉夫斯的普通超级中产生的能量提升的增益。 拉夫上校 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Ruffs/ruffus_hypercharge_spray.png"
    },
    "skins": [],
    "pins": [
      "/pins/Ruffs/ruffs_angry_pin.png",
      "/pins/Ruffs/ruffs_clap_pin.png",
      "/pins/Ruffs/ruffs_facepalm_pin.png",
      "/pins/Ruffs/ruffs_gg_pin.png",
      "/pins/Ruffs/ruffs_happy_pin.png",
      "/pins/Ruffs/ruffs_hypercharge_pin.png",
      "/pins/Ruffs/ruffs_marshal_pin.png",
      "/pins/Ruffs/ruffs_phew_pin.png",
      "/pins/Ruffs/ruffs_pin.png",
      "/pins/Ruffs/ruffs_ronin_angry_pin.png",
      "/pins/Ruffs/ruffs_ronin_clap_pin.png",
      "/pins/Ruffs/ruffs_ronin_gg_pin.png"
    ],
    "buffies": []
  },
  "45": {
    "id": "45",
    "apiId": 16000045,
    "name": "斯图",
    "enName": "Stu",
    "slug": "stu",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "在漫长的特技表演生涯中，斯图因太多的颠簸、瘀伤和汽油烟雾而有点醉了，这些天他的方向盘有点摇摇欲坠。",
    "story": "",
    "avatar": "/HeroAvatars/16000045.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000045.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000045.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 1080,
      "range": "7.67 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000362,
        "name": "零阻力",
        "desc": "斯图 的 Nitro Boost 超级冲刺距离增加 71%。",
        "icon": "/starpowers/Stu/stu_starpower_01.png"
      },
      {
        "id": 23000363,
        "name": "气体疗愈",
        "desc": "使用他的 Nitro Boost 超级技能 可以恢复 斯图 的 504 生命值。",
        "icon": "/starpowers/Stu/stu_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000364,
        "name": "速度区",
        "desc": "斯图投下一个助推器，使他自己、他的队友和其他盟友在其作用范围内移动得更快。（冷却：20 秒）",
        "icon": "/gadgets/Stu/stu_gadget_01.png"
      },
      {
        "id": 23000401,
        "name": "突破",
        "desc": "斯图的下一个超级英雄可以冲破障碍物，使碎片向前飞扬。每块碎片都会对其击中的任何对手造成 173 点伤害。（冷却：16 秒）",
        "icon": "/gadgets/Stu/stu_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "斯图·极限充能",
      "desc": "倍率：3%。激活后，斯图的超级在使用时会立即充能，在超充能持续时间内为他提供无限的超级。然而，如果超级充能在激活时未充能，则超级充能不会充能，并且在争吵球中踢球将消耗超级并要求他再次充能。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Stu/stu_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Stu/stu_facepalm_pin.png",
      "/pins/Stu/stu_hypercharge_pin.png",
      "/pins/Stu/stu_pin_team_pin_fut.png",
      "/pins/Stu/stu_punk_special_pin.png",
      "/pins/Stu/stu_santa_pin.png",
      "/pins/Stu/stu_university_angry_pin.png",
      "/pins/Stu/stu_university_clap_pin.png",
      "/pins/Stu/stu_university_gg_pin.png",
      "/pins/Stu/stu_university_happy_pin.png",
      "/pins/Stu/stu_university_phew_pin.png",
      "/pins/Stu/stu_university_pin.png",
      "/pins/Stu/stu_university_sad_pin.png"
    ],
    "buffies": []
  },
  "46": {
    "id": "46",
    "apiId": 16000046,
    "name": "贝尔",
    "enName": "Belle",
    "slug": "belle",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "贝儿是臭名昭著的金臂帮的头目，她的目标不仅仅是金钱。她要找出斯塔尔公园背后的真相，并将其扳倒！",
    "story": "",
    "avatar": "/HeroAvatars/16000046.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000046.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000046.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5800,
      "damage": 1040,
      "range": "10 (极远)",
      "reload": "1.4 秒 (快) 1.19 秒 (with Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000369,
        "name": "积极的反馈",
        "desc": "每当贝儿的电弹击中目标时，她都会获得 20% 护盾。",
        "icon": "/starpowers/Belle/belle_starpower_01.png"
      },
      {
        "id": 23000370,
        "name": "接地",
        "desc": "被贝尔的超级标记后，对手将无法在 5 秒内重新加载攻击。",
        "icon": "/starpowers/Belle/belle_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000371,
        "name": "储备金",
        "desc": "贝儿在地上放置了一个陷阱，当对手触发时就会爆炸。该陷阱会造成伤害，并使爆炸半径内的任何人减速几秒。（冷却：20 秒）",
        "icon": "/gadgets/Belle/belle_gadget_01.png"
      },
      {
        "id": 23000463,
        "name": "极性反接",
        "desc": "贝尔的下一个电动螺栓会从墙上弹起。（冷却：14 秒）",
        "icon": "/gadgets/Belle/belle_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "贝尔·极限充能",
      "desc": "倍率：45%。激活后，贝儿的超级会向最近的敌人弯曲。归巢超级飞行额外 2 格。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Belle/belle_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Belle/belle_angry_pin.png",
      "/pins/Belle/belle_boss_angry_pin.png",
      "/pins/Belle/belle_boss_clap_pin.png",
      "/pins/Belle/belle_boss_gg_pin.png",
      "/pins/Belle/belle_boss_happy_pin.png",
      "/pins/Belle/belle_boss_phew_pin.png",
      "/pins/Belle/belle_boss_pin.png",
      "/pins/Belle/belle_boss_sad_pin.png",
      "/pins/Belle/belle_boss_special_pin.png",
      "/pins/Belle/belle_boss_thanks_pin.png",
      "/pins/Belle/belle_clap_pin.png",
      "/pins/Belle/belle_facepalm_pin.png"
    ],
    "buffies": []
  },
  "47": {
    "id": "47",
    "apiId": 16000047,
    "name": "史魁克",
    "enName": "Squeak",
    "slug": "squeak",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "吱吱是一团快乐的能量，他热爱他的创造者拉夫斯。和他在一起很开心，至少如果你不知道他是用狗的口水做的的话",
    "story": "",
    "avatar": "/HeroAvatars/16000047.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000047.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000047.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 2320,
      "range": "7.67 (远)",
      "reload": "2.1 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000376,
        "name": "连锁反应",
        "desc": "粘性球体爆炸区域内的每个对手都会使粘性球体的伤害增加 15%。",
        "icon": "/starpowers/Squeak/squeak_starpower_01.png"
      },
      {
        "id": 23000377,
        "name": "超级粘",
        "desc": "史魁克's 超级技能 的二次粘性炸弹爆炸也会使对手减速 4 秒。",
        "icon": "/starpowers/Squeak/squeak_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000378,
        "name": "发条",
        "desc": "吱吱的下一个粘性球造成的伤害增加 50%，射程延长 100%。（冷却：14 秒）",
        "icon": "/gadgets/Squeak/squeak_gadget_01.png"
      },
      {
        "id": 23000462,
        "name": "残留物",
        "desc": "吱吱的下一个粘性球体爆炸后会留下一个残留区域，减慢敌人的速度，并使盟友能够看到灌木丛 6 秒。（冷却：20 秒）",
        "icon": "/gadgets/Squeak/squeak_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "史魁克·极限充能",
      "desc": "倍率：40%。激活后，吱吱的超级在落地后向前弹跳 5 格，并产生第二波粘性气球。次要射弹穿过敌人并造成相当于 1 个 Blob 的伤害，但会从墙壁上反弹。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Squeak/hypercharge_button_squeak.png"
    },
    "skins": [],
    "pins": [
      "/pins/Squeak/squeak_action_special_pin.png",
      "/pins/Squeak/squeak_angry_pin.png",
      "/pins/Squeak/squeak_brawloween_pin.png",
      "/pins/Squeak/squeak_bunny_pin.png",
      "/pins/Squeak/squeak_clap_pin.png",
      "/pins/Squeak/squeak_facepalm_pin.png",
      "/pins/Squeak/squeak_gg_pin.png",
      "/pins/Squeak/squeak_happy_pin.png",
      "/pins/Squeak/squeak_hypercharge_pin.png",
      "/pins/Squeak/squeak_phew_pin.png",
      "/pins/Squeak/squeak_pin.png",
      "/pins/Squeak/squeak_sad_pin.png"
    ],
    "buffies": []
  },
  "48": {
    "id": "48",
    "apiId": 16000048,
    "name": "格罗姆",
    "enName": "Grom",
    "slug": "grom",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "格罗姆是一名体格健壮的保安，但他有一个弱点：他在幼儿园工作时的回忆。那些孩子是无情的。",
    "story": "",
    "avatar": "/HeroAvatars/16000048.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000048.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000048.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 2080,
      "range": "7.67 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000383,
        "name": "徒步巡逻",
        "desc": "当格罗姆的超级充满电后，他的移动速度将加快 +15%！",
        "icon": "/starpowers/Grom/grom_starpower_01.png"
      },
      {
        "id": 23000384,
        "name": "X因素",
        "desc": "格罗姆主要攻击的分裂在最大距离内造成高达 +35% 的额外伤害。",
        "icon": "/starpowers/Grom/grom_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000385,
        "name": "岗楼",
        "desc": "格罗姆从他的格罗姆炸弹中弹出一座瞭望塔，让所有盟友都能看到大片区域的灌木丛。随着时间的推移，了望塔的生命值会慢慢降低。（冷却：20 秒）",
        "icon": "/gadgets/Grom/grom_gadget_01.png"
      },
      {
        "id": 23000460,
        "name": "无线电检查",
        "desc": "格罗姆的下一次攻击会快速连续抛出 3 个芽。（冷却：15 秒）",
        "icon": "/gadgets/Grom/grom_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "格罗姆·极限充能",
      "desc": "倍率：40%。激活后，格罗姆的超级在第一次爆炸后会原地弹跳 0.7 秒，当它再次着陆时，它会分裂成四个额外的交叉射弹，其行为与第一次爆炸的射弹相同，只是偏移了 45 度。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Grom/grom_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Grom/grom_angry_pin.png",
      "/pins/Grom/grom_challenge_angry_pin.png",
      "/pins/Grom/grom_challenge_special_pin.png",
      "/pins/Grom/grom_clap_pin.png",
      "/pins/Grom/grom_easter_pin.png",
      "/pins/Grom/grom_facepalm_pin.png",
      "/pins/Grom/grom_franken_angry_pin.png",
      "/pins/Grom/grom_franken_clap_pin.png",
      "/pins/Grom/grom_franken_gg_pin.png",
      "/pins/Grom/grom_franken_happy_pin.png",
      "/pins/Grom/grom_franken_phew_pin.png",
      "/pins/Grom/grom_franken_pin.png"
    ],
    "buffies": []
  },
  "49": {
    "id": "49",
    "apiId": 16000049,
    "name": "巴兹",
    "enName": "Buzz",
    "slug": "buzz",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "巴兹是 Velocirapids 水上乐园的救生员，也是严格遵守规则的人。他显然喜欢最大限度地运用他所拥有的一点点权力。",
    "story": "",
    "avatar": "/HeroAvatars/16000049.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000049.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000049.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 840,
      "range": "2.67 (近)",
      "reload": "1 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000390,
        "name": "更强韧的鱼雷",
        "desc": "巴斯的超级眩晕最短持续时间增加 0.5 秒。",
        "icon": "/starpowers/Buzz/buzz_starpower_01.png"
      },
      {
        "id": 23000391,
        "name": "目光锐利",
        "desc": "巴兹 的超级充电区域增加了 33%。",
        "icon": "/starpowers/Buzz/buzz_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000392,
        "name": "预留浮标",
        "desc": "立即填满超级计，但下一次鱼雷投掷不会击晕对手。（冷却：18 秒）",
        "icon": "/gadgets/Buzz/buzz_gadget_01.png"
      },
      {
        "id": 23000490,
        "name": "X 射线遮光罩",
        "desc": "巴兹可以看到超级充电区域内的所有灌木丛 12 秒。（冷却：20 秒）",
        "icon": "/gadgets/Buzz/buzz_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "巴兹·极限充能",
      "desc": "倍率：25%。激活后，巴兹的超级技能会在撞到墙壁时立即重新充电。这包括从他的储备浮标小工具中收取的超级费用。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Buzz/buzz_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Buzz/buzz_angry_pin.png",
      "/pins/Buzz/buzz_black_godzilla_pin.png",
      "/pins/Buzz/buzz_buzzette_pin.png",
      "/pins/Buzz/buzz_clap_pin.png",
      "/pins/Buzz/buzz_eldr_fenrir_pin.png",
      "/pins/Buzz/buzz_facepalm_pin.png",
      "/pins/Buzz/buzz_fenrir_pin.png",
      "/pins/Buzz/buzz_filmmaker_pin.png",
      "/pins/Buzz/buzz_gg_pin.png",
      "/pins/Buzz/buzz_godzilla_angry_pin.png",
      "/pins/Buzz/buzz_godzilla_clap_pin.png",
      "/pins/Buzz/buzz_godzilla_gg_pin.png"
    ],
    "buffies": []
  },
  "50": {
    "id": "50",
    "apiId": 16000050,
    "name": "格里夫",
    "enName": "Griff",
    "slug": "griff",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "格里夫表现得像一位富有、成功的企业家，但他唯一的生意是失败的斯塔尔公园礼品店。奇怪的是，当银行打电话时他从来不在场。",
    "story": "",
    "avatar": "/HeroAvatars/16000050.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000050.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000050.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 560,
      "range": "8.33 (远)",
      "reload": "1.6 秒 (普通) 1.7 秒 (while Hyper Buffie is active)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000397,
        "name": "留着零钱吧",
        "desc": "格里夫获得了稍微更广泛的攻击，并在抛硬币中增加了另一排硬币。",
        "icon": "/starpowers/Griff/griff_starpower_01.png"
      },
      {
        "id": 23000398,
        "name": "业务弹性",
        "desc": "每 秒，格里夫 就会恢复高达 % 的缺失生命值。",
        "icon": "/starpowers/Griff/griff_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000399,
        "name": "存钱罐",
        "desc": "格里夫扔出一个装满鞭炮的存钱罐，存钱罐在短暂延迟后爆炸，摧毁障碍物并对范围内的对手造成伤害。（冷却：20 秒）",
        "icon": "/gadgets/Griff/buddy_icon_griff_gadget.png"
      },
      {
        "id": 23000487,
        "name": "投币淋浴",
        "desc": "格里夫向目标区域投掷大量硬币，每秒对内部的对手造成伤害。（冷却：20 秒）",
        "icon": "/gadgets/Griff/griff_gadget_01.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "格里夫·极限充能",
      "desc": "倍率：30%。激活后，格里夫的超级技能会穿过敌人和障碍物，并且比普通的超级技能移动得更快。此外，他的超级技能会在最大范围内产生另一波 5 张钞票，这些钞票会在 0.5 秒延迟后返回，同样会穿过敌人和障碍物。格里夫还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Griff/buddy_icon_griff_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Griff/griff_angry_pin.png",
      "/pins/Griff/griff_arcade_pin.png",
      "/pins/Griff/griff_clap_pin.png",
      "/pins/Griff/griff_facepalm_pin.png",
      "/pins/Griff/griff_gg_pin.png",
      "/pins/Griff/griff_happy_pin.png",
      "/pins/Griff/griff_phew_pin.png",
      "/pins/Griff/griff_pin_cursed.png",
      "/pins/Griff/griff_pin.png",
      "/pins/Griff/griff_sad_pin.png",
      "/pins/Griff/griff_special_pin.png",
      "/pins/Griff/griff_thanks_pin.png"
    ],
    "buffies": []
  },
  "51": {
    "id": "51",
    "apiId": 16000051,
    "name": "阿拾",
    "enName": "Ash",
    "slug": "ash",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "阿什的工作是保持公园清洁，吃力不讨好。他爬进了垃圾桶，以保护自己免受碎玻璃和老鼠的咬伤。这让他脾气暴躁！",
    "story": "",
    "avatar": "/HeroAvatars/16000051.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000051.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000051.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 11800,
      "damage": 800,
      "range": "4.67 (普通)",
      "reload": "1.4 秒 (快) 1 秒 (with full Rage and Mad As Heck)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000414,
        "name": "第一次狂欢",
        "desc": "当攻击力已满的情况下击中对手时，小智会变得更加愤怒。他的怒气上升 200%。",
        "icon": "/starpowers/Ash/ash_starpower_01.png"
      },
      {
        "id": 23000415,
        "name": "疯狂如赫克",
        "desc": "小智的装弹速度逐渐提高 40%，这与他的愤怒程度相同。",
        "icon": "/starpowers/Ash/ash_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000416,
        "name": "寒凉丸",
        "desc": "尽管愤怒，阿什还是必须冷静下来。当这个小工具弹出时，满怒气计将恢复 2832 生命值 - 怒气越少，恢复就越少。（冷却：13 秒）",
        "icon": "/gadgets/Ash/ash_gadget_01.png"
      },
      {
        "id": 23000465,
        "name": "烂香蕉",
        "desc": "小智失去 5% 生命值并立即获得 40% 怒气。（冷却：8 秒）",
        "icon": "/gadgets/Ash/ash_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "阿拾·极限充能",
      "desc": "倍率：50%}}\n{{Quote。激活后，小智的下一个超级机器人老鼠数量会增加一倍，从 5 只增加到 10 只。他的速度还会提高 20%，伤害和速度也会提高 5%。",
      "icon": "/hypercharges/Ash/ash_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Ash/ash_angry_pin.png",
      "/pins/Ash/ash_be_less_ash_pin.png",
      "/pins/Ash/ash_clap_pin.png",
      "/pins/Ash/ash_facepalm_pin.png",
      "/pins/Ash/ash_gg_pin.png",
      "/pins/Ash/ash_happy_pin.png",
      "/pins/Ash/ash_hypercharge_pin.png",
      "/pins/Ash/ash_krampus_pin.png",
      "/pins/Ash/ash_ninja_angry_pin.png",
      "/pins/Ash/ash_ninja_clap_pin.png",
      "/pins/Ash/ash_ninja_gg_pin.png",
      "/pins/Ash/ash_ninja_happy_pin.png"
    ],
    "buffies": []
  },
  "52": {
    "id": "52",
    "apiId": 16000052,
    "name": "梅格",
    "enName": "Meg",
    "slug": "meg",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "梅格满足于穿着她值得信赖的机甲套装在幕后工作，她负责解决真正的问题，而麦克斯和苏奇则出去招待人群。",
    "story": "",
    "avatar": "/HeroAvatars/16000052.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000052.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000052.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 4800,
      "damage": 300,
      "range": "9 (远)",
      "reload": "1.3 秒 (极快) 0.845 秒 (with Toolbox) 1.1 秒 (Mecha; 极快) 0.715 秒 (Mecha; with Toolbox)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000421,
        "name": "力场",
        "desc": "当梅格的机甲被摧毁时，她会受到 30% 护盾的保护，持续 10 秒。",
        "icon": "/starpowers/Meg/meg_starpower_01.png"
      },
      {
        "id": 23000422,
        "name": "重金属",
        "desc": "过期后，机甲套装会爆炸，对附近的对手造成 2160 点伤害并将他们推开。",
        "icon": "/starpowers/Meg/meg_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000423,
        "name": "震动电压",
        "desc": "每秒为机甲治疗 414.4 点生命值，持续 490 秒。（冷却：17 秒）",
        "icon": "/gadgets/Meg/meg_gadget_01.png"
      },
      {
        "id": 23000489,
        "name": "工具箱",
        "desc": "梅格掉落了她的工具箱，这使附近盟友的装弹速度提高了 35%，直到它被摧毁。（冷却：19 秒）",
        "icon": "/gadgets/Meg/meg_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "梅格·极限充能",
      "desc": "倍率：35%。文件：硬核 Icon.png 激活后，梅格的两个超级都会获得增益，具体取决于她使用超级时的状态。 在机甲中，超级英雄的射程增加了 2.33 格。在机甲外面时，当她进入机甲时，机甲会获得一个护盾，该护盾最初会阻挡接下来对其造成的 3000 点伤害。护盾每 0.5 秒就会衰减 150 点生命值。如果攻击造成的伤害超过护盾当前的生命值，护盾就会消失，梅格会受到剩余伤害的伤害。当此护盾激活时，科莱特的攻击和超级将根据机甲的最大生命值造成伤害。在盾牌打开的情况下对她造成伤害的敌人仍然可以向他们的超级冲锋。梅格还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Meg/meg_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Meg/biodome_meg_pin.png",
      "/pins/Meg/meg_angry_pin.png",
      "/pins/Meg/meg_clap_pin.png",
      "/pins/Meg/meg_facepalm_pin.png",
      "/pins/Meg/meg_gg_pin.png",
      "/pins/Meg/meg_happy_pin.png",
      "/pins/Meg/meg_hypercharge_pin.png",
      "/pins/Meg/meg_jungle_pin.png",
      "/pins/Meg/meg_phew_pin.png",
      "/pins/Meg/meg_pin_cursed.png",
      "/pins/Meg/meg_pin.png",
      "/pins/Meg/meg_sad_pin.png"
    ],
    "buffies": []
  },
  "53": {
    "id": "53",
    "apiId": 16000053,
    "name": "萝拉",
    "enName": "Lola",
    "slug": "lola",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "萝拉确保每个人都知道她何时进入房间。她是一位擅长让场景达到她想要的效果的专家，她为此感到自豪！",
    "story": "",
    "avatar": "/HeroAvatars/16000053.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000053.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000053.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 560,
      "range": "9 (远)",
      "reload": "1.7 秒 (普通) 1.445 秒 (with Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000431,
        "name": "凑合",
        "desc": "当最后一轮时，萝拉会造成额外的 30% 伤害。",
        "icon": "/starpowers/Lola/lola_starpower_01.png"
      },
      {
        "id": 23000432,
        "name": "以吻封印",
        "desc": "劳拉自我的射弹将治疗生命值 202 挡在其路径上的盟友。",
        "icon": "/starpowers/Lola/lola_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000433,
        "name": "冻结帧",
        "desc": "萝拉的自我停止移动来摆姿势！获得 50% 护盾，持续 4 秒。（冷却：11 秒）",
        "icon": "/gadgets/Lola/lola_gadget_01.png"
      },
      {
        "id": 23000456,
        "name": "特技双人",
        "desc": "萝拉和她的自我交换了位置，都恢复了 1280 生命值。（冷却：17 秒）",
        "icon": "/gadgets/Lola/lola_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "萝拉·极限充能",
      "desc": "倍率：35%。激活后，在超级充电期间部署的任何自我的生命值都会增加到 5200，每个射弹的伤害增加到 760，再加上能量等级 11 造成的 280 点伤害。其超级充电速度也会增加。萝拉的“一吻封印”星力可通过萝拉的超强自我治愈每个射弹 304 点生命值。超级充电不会影响现有的自我。萝拉还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Lola/lola_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Lola/lola_angry_pin.png",
      "/pins/Lola/lola_chola_angry_pin.png",
      "/pins/Lola/lola_chola_clap_pin.png",
      "/pins/Lola/lola_chola_gg_pin.png",
      "/pins/Lola/lola_chola_happy_pin.png",
      "/pins/Lola/lola_chola_phew_pin.png",
      "/pins/Lola/lola_chola_pin.png",
      "/pins/Lola/lola_chola_sad_pin.png",
      "/pins/Lola/lola_chola_special_pin.png",
      "/pins/Lola/lola_chola_thanks_pin.png",
      "/pins/Lola/lola_circus_pin.png",
      "/pins/Lola/lola_clap_pin.png"
    ],
    "buffies": []
  },
  "54": {
    "id": "54",
    "apiId": 16000054,
    "name": "阿方",
    "enName": "Fang",
    "slug": "fang",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "方吸收了太多的功夫电影，他几乎将自己融入其中。他自信、迷人，如果他能踢，他就不会用手！",
    "story": "",
    "avatar": "/HeroAvatars/16000054.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000054.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000054.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 9600,
      "damage": 1360,
      "range": "2.67 (kick; 近)",
      "reload": "1 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000438,
        "name": "新鲜踢",
        "desc": "当方用他的超级击败敌人的斗士时，它会立即充电，让他可以再次使用他的超级！",
        "icon": "/starpowers/Fang/fang_starpower_01.png"
      },
      {
        "id": 23000439,
        "name": "神圣鞋底",
        "desc": "每 810 秒减少一次传入攻击造成的 960 伤害。最大减少量为传入伤害的 90%。",
        "icon": "/starpowers/Fang/fang_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000440,
        "name": "玉米赋",
        "desc": "方把一把玉米粒抛向空中，下起了爆米花雨！每个内核弹出都会造成 871 伤害。（冷却：15 秒）",
        "icon": "/gadgets/Fang/fang_gadget_01.png"
      },
      {
        "id": 23000464,
        "name": "Roundhouse Kick",
        "desc": "阿方 spins and hits all enemies around him, stunning them for 0.5 seconds.（冷却：15 秒）",
        "icon": "/gadgets/Fang/fang_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "阿方·极限充能",
      "desc": "倍率：20%。激活后，方的超级可以穿墙。此外，他还会沿着 超级技能 的路径掉落爆米花，其行为与他的 Corn-Fu 随身妙具 相同，但每块都会造成 1500 点伤害。 阿方 获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Fang/hypercharge_icon_fang.png"
    },
    "skins": [],
    "pins": [
      "/pins/Fang/fang_angry_pin.png",
      "/pins/Fang/fang_blue_pitcher_pin.png",
      "/pins/Fang/fang_clap_pin.png",
      "/pins/Fang/fang_esports_pin.png",
      "/pins/Fang/fang_facepalm_pin.png",
      "/pins/Fang/fang_fanguard_pin.png",
      "/pins/Fang/fang_gg_pin.png",
      "/pins/Fang/fang_happy_pin.png",
      "/pins/Fang/fang_hypercharge_pin.png",
      "/pins/Fang/fang_kungfu_colorvariation_pin.png",
      "/pins/Fang/fang_phew_pin.png",
      "/pins/Fang/fang_pin.png"
    ],
    "buffies": []
  },
  "55": {
    "id": "55",
    "apiId": 16000056,
    "name": "伊芙",
    "enName": "Eve",
    "slug": "eve",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "夏娃的人生目标是成为母亲并保护她珍贵的婴儿！她会尽一切努力为它们找到一个好家……最好是用拉夫斯的皮毛",
    "story": "",
    "avatar": "/HeroAvatars/16000056.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000056.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000056.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6200,
      "damage": 400,
      "range": "9.33 (极远)",
      "reload": "1.6 秒 (普通)   1.36 秒 (with Reload Gear)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000452,
        "name": "不自然的秩序",
        "desc": "颠倒鸡蛋射手射出的鸡蛋的顺序。",
        "icon": "/starpowers/Eve/eve_starpower_01.png"
      },
      {
        "id": 23000453,
        "name": "快乐惊喜",
        "desc": "每隔 5 秒，下一个最大的蛋击中蛋射手的敌人就会生成一只幼体。",
        "icon": "/starpowers/Eve/eve_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000454,
        "name": "得走了",
        "desc": "夏娃跳开了，留下了一只刚孵化的小宝宝。（冷却：17 秒）",
        "icon": "/gadgets/Eve/eve_gadget_01.png"
      },
      {
        "id": 23000455,
        "name": "母爱",
        "desc": "从活跃的大蛋中生成的幼体现在会随着时间的推移治愈盟友，而不是造成伤害。（冷却：11 秒）",
        "icon": "/gadgets/Eve/eve_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "伊芙·极限充能",
      "desc": "倍率：40%。激活后，夏娃的储备金每秒会腐烂其最大生命值的 16%，直至被摧毁，但如果没有受到任何伤害，则最多可持续 6 秒。它每 0.85 秒生成一个幼体，如果没有受到伤害，在腐烂持续时间内以三角形模式生成 6 个幼体，此外还有过期时生成的幼体。超级充电还修改了超级射弹，无论投掷距离多远，都需要相同的时间着陆。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Eve/eve_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Eve/eve_angry_pin.png",
      "/pins/Eve/eve_arcade_pin.png",
      "/pins/Eve/eve_cactus_angry_pin.png",
      "/pins/Eve/eve_cactus_clap_pin.png",
      "/pins/Eve/eve_cactus_gg_pin.png",
      "/pins/Eve/eve_cactus_happy_pin.png",
      "/pins/Eve/eve_cactus_phew_pin.png",
      "/pins/Eve/eve_cactus_pin.png",
      "/pins/Eve/eve_cactus_sad_pin.png",
      "/pins/Eve/eve_cactus_special_pin.png",
      "/pins/Eve/eve_cactus_thanks_pin.png",
      "/pins/Eve/eve_clap_pin.png"
    ],
    "buffies": []
  },
  "56": {
    "id": "56",
    "apiId": 16000057,
    "name": "珍妮特",
    "enName": "Janet",
    "slug": "janet",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "珍妮特将不惜一切代价到达顶峰！作为奖励，每当她的妹妹邦妮遇到麻烦时，她的表演技巧就能派上用场。",
    "story": "",
    "avatar": "/HeroAvatars/16000057.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000057.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000057.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6800,
      "damage": 2000,
      "range": "4 (min range; 普通)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000470,
        "name": "舞台视图",
        "desc": "当珍妮特带着喷气背包在空中飞行时，她露出了自己周围的一大片灌木丛。",
        "icon": "/starpowers/Janet/janet_starpower_01.png"
      },
      {
        "id": 23000471,
        "name": "声乐热身",
        "desc": "珍妮特的攻击聚焦速度更快 30%。",
        "icon": "/starpowers/Janet/janet_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000472,
        "name": "放下低音",
        "desc": "珍妮特部署一个扬声器，每秒对区域内的所有敌人造成 160 点伤害，直到其被摧毁。（冷却：18 秒）",
        "icon": "/gadgets/Janet/janet_gadget_01.png"
      },
      {
        "id": 23000473,
        "name": "后台通行证",
        "desc": "珍妮特的下一个高音将她推向后方，甚至越过墙壁。她的攻击越集中，她就会被击退得越远。（冷却：16 秒）",
        "icon": "/gadgets/Janet/janet_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "珍妮特·极限充能",
      "desc": "倍率：40%}}\n{{Quote。激活后，在珍妮特的超级持续时间内，她可以完全控制自己的移动，就像在地面上一样，并且在此期间她也不再自动向前飞行。此外，她的超级会受到超级充能移动速度提升的影响，并且会与其他速度提升叠加，例如Max的超级或斯图的速度区小工具。珍妮特还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Janet/janet_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Janet/janet_angry_pin.png",
      "/pins/Janet/janet_clap_pin.png",
      "/pins/Janet/janet_facepalm_pin.png",
      "/pins/Janet/janet_firewing_janet_pin.png",
      "/pins/Janet/janet_gg_pin.png",
      "/pins/Janet/janet_happy_pin.png",
      "/pins/Janet/janet_hypercharge_pin.png",
      "/pins/Janet/janet_moon_pin.png",
      "/pins/Janet/janet_phew_pin.png",
      "/pins/Janet/janet_pilot_gg_pin.png",
      "/pins/Janet/janet_pin_enchanted.png",
      "/pins/Janet/janet_pin.png"
    ],
    "buffies": []
  },
  "57": {
    "id": "57",
    "apiId": 16000058,
    "name": "邦妮",
    "enName": "Bonnie",
    "slug": "bonnie",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "邦妮是一团无法控制且完全具有破坏性的能量。她的梦想是从她的大炮中一直发射到月球！",
    "story": "",
    "avatar": "/HeroAvatars/16000058.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000058.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000058.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 1120,
      "range": "9 (Clyde; 远)",
      "reload": "1 秒 (Clyde; 极快) 0.769 秒 (with Sugar Rush) 2 秒 (Bonnie; 慢)",
      "speed": "620 (Clyde; 慢)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000478,
        "name": "黑火药",
        "desc": "邦妮的星星发射器的射程增加了 36%。",
        "icon": "/starpowers/Bonnie/bonnie_starpower_01.png"
      },
      {
        "id": 23000479,
        "name": "智齿",
        "desc": "松动的牙齿击中时会碎裂，对附近的敌人造成 25% 额外伤害。",
        "icon": "/starpowers/Bonnie/bonnie_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000480,
        "name": "糖热",
        "desc": "克莱德的移动和装弹速度提高 30%，持续 5 秒。（冷却：16 秒）",
        "icon": "/gadgets/Bonnie/bonnie_gadget_01.png"
      },
      {
        "id": 23000481,
        "name": "碰撞测试",
        "desc": "邦妮向前冲刺，击退敌人并造成 1856 点伤害。（冷却：10 秒）",
        "icon": "/gadgets/Bonnie/bonnie_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "邦妮·极限充能",
      "desc": "倍率：43%。激活后，邦妮的超级技能会在 2.67 格半径内击晕附近的敌人 1 秒，无论是在她爆炸到空中还是落地时。此外，在起飞和着陆时，邦妮会径向发出 6 个较小的牙齿，行进 6.67 格。与Spike的攻击类似，图案是固定的，每个牙齿之间呈60度，并且不会随着邦妮移动的方向旋转。这些牙齿的中心有一个 3.33 格的宽盲点，因此它们无法在近距离范围内全部击中敌人。邦妮还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Bonnie/bonnie_angry_pin.png",
      "/pins/Bonnie/bonnie_clap_pin.png",
      "/pins/Bonnie/bonnie_clyde_pin.png",
      "/pins/Bonnie/bonnie_facepalm_pin.png",
      "/pins/Bonnie/bonnie_gg_pin.png",
      "/pins/Bonnie/bonnie_happy_pin.png",
      "/pins/Bonnie/bonnie_phew_pin.png",
      "/pins/Bonnie/bonnie_pin.png",
      "/pins/Bonnie/bonnie_sad_pin.png",
      "/pins/Bonnie/bonnie_special_pin.png",
      "/pins/Bonnie/bonnie_starrforce_pin.png",
      "/pins/Bonnie/bonnie_tentacle_pin.png"
    ],
    "buffies": []
  },
  "58": {
    "id": "58",
    "apiId": 16000059,
    "name": "奥蒂斯",
    "enName": "Otis",
    "slug": "otis",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "奥蒂斯是一位崭露头角的年轻街头艺术家，他的作品是在墙上喷射墨水。没有人知道他的真实身份，这只会增加他的神秘感！",
    "story": "",
    "avatar": "/HeroAvatars/16000059.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000059.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000059.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7200,
      "damage": 1000,
      "range": "9 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000495,
        "name": "模板胶",
        "desc": "希尔全力压制敌人。阻止他们攻击 33% 时间。",
        "icon": "/starpowers/Otis/otis_starpower_01.png"
      },
      {
        "id": 23000496,
        "name": "墨水笔芯",
        "desc": "奥蒂斯现在可以喷射 33% 多的墨滴。",
        "icon": "/starpowers/Otis/otis_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000497,
        "name": "休眠之星",
        "desc": "如果敌人没有被击中，下一个海星将留在地面上，处于休眠状态，直到敌人靠近。（冷却：11 秒）",
        "icon": "/gadgets/Otis/otis_gadget_01.png"
      },
      {
        "id": 23000498,
        "name": "泼溅物",
        "desc": "奥蒂斯的下一次攻击会射出一个巨大的墨球，留下一个水坑，在 1000 秒内造成 1250 点伤害。（冷却：17 秒）",
        "icon": "/gadgets/Otis/otis_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "奥蒂斯·极限充能",
      "desc": "倍率：50%。激活后，奥蒂斯的下一个超级技能将在撞击时击晕敌人 1.5 秒。这并不影响他的超级的其他方面。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Otis/otis_spray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Otis/otis_angry_pin.png",
      "/pins/Otis/otis_clap_pin.png",
      "/pins/Otis/otis_demon_otis_pin.png",
      "/pins/Otis/otis_facpalm_pin.png",
      "/pins/Otis/otis_gg_pin.png",
      "/pins/Otis/otis_happy_pin.png",
      "/pins/Otis/otis_hypercharge_pin.png",
      "/pins/Otis/otis_mask_pin.png",
      "/pins/Otis/otis_pharaoh_angry_pin.png",
      "/pins/Otis/otis_pharaoh_clap_pin.png",
      "/pins/Otis/otis_pharaoh_gg_pin.png",
      "/pins/Otis/otis_pharaoh_happy_pin.png"
    ],
    "buffies": []
  },
  "59": {
    "id": "59",
    "apiId": 16000060,
    "name": "山姆",
    "enName": "Sam",
    "slug": "sam",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "山姆曾是工厂工人，现在是金臂帮的通缉犯，他总是在那里确保贝儿在他们最新的抢劫中不会走得太远！",
    "story": "",
    "avatar": "/HeroAvatars/16000060.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000060.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000060.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 11400,
      "damage": 800,
      "range": "3 (近)",
      "reload": "1.6 秒 (with Knuckle Busters; 普通)  0.9 秒 (without Knuckle Busters; 极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000503,
        "name": "丰盛的康复",
        "desc": "在召回他的指关节克星后，山姆立即恢复了他缺失的 20% 生命值。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000503.png"
      },
      {
        "id": 23000504,
        "name": "远程充值",
        "desc": "当指关节克星在地面上且靠近敌人时，它们会为山姆的超级能量充能。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000504.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000505,
        "name": "磁场",
        "desc": "当指关节克星在地面上时，山姆可以激活它们来吸引附近的敌人。（冷却：17 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000505.png"
      },
      {
        "id": 23000506,
        "name": "脉冲驱避剂",
        "desc": "着陆后，山姆的下一个部署的指关节克星会释放出电脉冲，击退敌人。（冷却：11 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000506.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "山姆·极限充能",
      "desc": "倍率：25%。激活后，山姆的指关节克星在投掷和返回时都会移动得更快。投掷它们时，超级充能率会增加三倍，这会在对敌人造成伤害时立即为他的超级充能。山姆还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Sam/sam_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Sam/sam_circus_pin.png",
      "/pins/Sam/sam_hypercharge_pin.png",
      "/pins/Sam/sam_spectaculor_sam_pin.png",
      "/pins/Sam/surge_scarlet_paladin_pin.png"
    ],
    "buffies": []
  },
  "60": {
    "id": "60",
    "apiId": 16000061,
    "name": "格斯",
    "enName": "Gus",
    "slug": "gus",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "超稀有",
      "color": "#5ab3ff"
    },
    "desc": "格斯看起来很像一个鬼孩子，以至于经常被误认为是鬼孩子。也许恰如其分的是，他是所有超自然事物的爱好者，因为他太天真了，不会害怕。",
    "story": "",
    "avatar": "/HeroAvatars/16000061.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000061.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000061.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 1080,
      "range": "9.33 (极远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000511,
        "name": "健康富矿",
        "desc": "从灵魂获得的治疗效果提高 100%。",
        "icon": "/starpowers/Gus/gus_starpower_01.png"
      },
      {
        "id": 23000512,
        "name": "灵兽",
        "desc": "幽灵使队友的伤害提高 25%，持续 5 秒。",
        "icon": "/starpowers/Gus/gus_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000513,
        "name": "古怪的波普尔",
        "desc": "引爆所有未收集的灵魂，对附近的敌人造成 1728 点伤害。（冷却：16 秒）",
        "icon": "/gadgets/Gus/gus_gadget_01.png"
      },
      {
        "id": 23000514,
        "name": "灵魂切换者",
        "desc": "格斯失去 5% 生命值，但立即获得 100% 精神。（冷却：10 秒）",
        "icon": "/gadgets/Gus/gus_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "格斯·极限充能",
      "desc": "倍率：35%。激活后，格斯的超级技能会向各个方向发射 10 个灵魂波，持续 10 格，对敌人造成伤害并治愈盟友。这些灵魂在中心有一个 3.33 格的宽盲点，因此它们无法在近距离攻击敌人。如果格斯对自己使用他的超级，他们会直接出去，但如果他对队友使用他的超级，灵魂会以顺时针弯曲运动移动，类似于斯派克的曲线球星力。这使得它们能够覆盖更大的区域，最终击中更多的目标，同时也有效地增加了精灵的射程。格斯还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Gus/gus_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Gus/gus_angry_pin.png",
      "/pins/Gus/gus_balloon_sally_pin.png",
      "/pins/Gus/gus_clap_pin.png",
      "/pins/Gus/gus_facepalm_pin.png",
      "/pins/Gus/gus_gg_pin.png",
      "/pins/Gus/gus_happy_pin.png",
      "/pins/Gus/gus_phew_pin.png",
      "/pins/Gus/gus_pin.png",
      "/pins/Gus/gus_sad_pin.png",
      "/pins/Gus/gus_special_pin.png",
      "/pins/Gus/gus_thanks_pin.png",
      "/pins/Gus/gus_wf_pin.png"
    ],
    "buffies": []
  },
  "61": {
    "id": "61",
    "apiId": 16000062,
    "name": "巴斯特",
    "enName": "Buster",
    "slug": "buster",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "巴斯特从他工作的电影院拿了一台电影放映机，这样他就可以把它当道具一样摆弄。这是危险且非常不专业的！",
    "story": "",
    "avatar": "/HeroAvatars/16000062.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000062.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000062.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10000,
      "damage": 1380,
      "range": "5.33 (普通)",
      "reload": "1.8 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000519,
        "name": "百视达",
        "desc": "巴斯特的镜头光晕对其超级冲锋区域内的每个盟友造成 15% 点伤害。",
        "icon": "/starpowers/Buster/buster_starpower_01.png"
      },
      {
        "id": 23000520,
        "name": "凯夫拉背心",
        "desc": "当蒙太奇处于活动状态时，巴斯特受到的伤害减少 10%，并且免疫击退、减速和眩晕。",
        "icon": "/starpowers/Buster/buster_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000521,
        "name": "实用腰带",
        "desc": "巴斯特为他的超级冲锋区域内的每个盟友治疗自己和附近所有盟友的 720 生命值。（冷却：16 秒）",
        "icon": "/gadgets/Buster/buster_gadget_01.png"
      },
      {
        "id": 23000522,
        "name": "慢动作重播",
        "desc": "巴斯特的下一个镜头耀斑将敌人拉向他。（冷却：17 秒）",
        "icon": "/gadgets/Buster/buster_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "巴斯特·极限充能",
      "desc": "倍率：40%。激活后，巴斯特会投射一个圆形屏障，持续 3 秒，其行为与他的普通超级相同。然而，尽管有这样的描述，反击弹的伤害并没有增加。巴斯特还获得 20% 的速度提升，以及 5% 的伤害和护盾提升，不过在超级激活时速度提升将被取消。",
      "icon": "/hypercharges/Buster/buster_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Buster/buster_angry_pin.png",
      "/pins/Buster/buster_chainsaw_angry_pin.png",
      "/pins/Buster/buster_chainsaw_clap_pin.png",
      "/pins/Buster/buster_chainsaw_gg__2__pin.png",
      "/pins/Buster/buster_chainsaw_gg_pin.png",
      "/pins/Buster/buster_chainsaw_phew_pin.png",
      "/pins/Buster/buster_chainsaw_pin.png",
      "/pins/Buster/buster_chainsaw_sad_pin.png",
      "/pins/Buster/buster_chainsaw_special_pin.png",
      "/pins/Buster/buster_chainsaw_thanks_pin.png",
      "/pins/Buster/buster_clap_pin.png",
      "/pins/Buster/buster_crocodile_pin.png"
    ],
    "buffies": []
  },
  "62": {
    "id": "62",
    "apiId": 16000063,
    "name": "切斯特",
    "enName": "Chester",
    "slug": "chester",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "切斯特恶毒地取笑任何看到的人，试图激怒他们。他受到的仇恨越多越好……尤其是如果那个仇恨者是曼迪！",
    "story": "",
    "avatar": "/HeroAvatars/16000063.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000063.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000063.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 1340,
      "range": "8.33 (远)",
      "reload": "Reload\n\t\n\t1.9 秒 (普通)0.633 秒 (with Candy Beans)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000527,
        "name": "单身狂",
        "desc": "切斯特攻击序列的第一个钟声会造成 150% 伤害。",
        "icon": "/starpowers/Chester/chester_starpower_01.png"
      },
      {
        "id": 23000528,
        "name": "先睹为快",
        "desc": "切斯特永远知道他的下一个超级会是什么。",
        "icon": "/starpowers/Chester/chester_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000529,
        "name": "辣骰子",
        "desc": "切斯特获得了一个新的随机超级，与他当前的不同。",
        "icon": "/gadgets/Chester/chester_gadget_01.png"
      },
      {
        "id": 23000530,
        "name": "糖豆",
        "desc": "切斯特从帽子里吃了一颗神秘口味​​的糖豆，获得了 5 秒的随机增益。",
        "icon": "/gadgets/Chester/chester_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "切斯特·极限充能",
      "desc": "倍率：Hypercharge Multiplier\n\t\n\t25%。切斯特 得到了一个新的 超级技能，就像 Candy Popper、Salmiakki 和 Pop Rocks 超级技能 合二为一。激活 极限充能 后，切斯特 的 超级技能 图标将变成他的 Candy Popper 超级技能 图标。他投掷的射弹的作用就像他的超级糖果波普一样，爆炸后，立即在一个圆圈中产生八个像他的超级萨尔米亚基那样的射弹。爆炸后 0.7 秒，会生成一个圆形减速区域，就像他的 Pop Rocks 超级技能 那样。Salmiakki 的冲击伤害经过修改，与其他蜱虫相比，造成的伤害相当于爆炸伤害的 15%。如果切斯特在萨尔米亚基出现之前被击败，它将造成基础伤害。爆裂石也改为每秒造成爆炸伤害的 8%，而不是正常数量。然而，他的超级充能超级的每个组件的效果都会比普通组件减弱。糖果波普尔不再将敌人击退； Salmiakki 喷雾速度稍慢，传播距离比普通 超级技能 少 1 格，并且在爆炸中心有 2 格宽的盲点；流行摇滚仅持续 4 秒，而不是 10 秒。切斯特还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Chester/chester_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Chester/chester_angry_pin.png",
      "/pins/Chester/chester_clap_pin.png",
      "/pins/Chester/chester_facepalm_pin.png",
      "/pins/Chester/chester_gg_pin.png",
      "/pins/Chester/chester_happy_pin.png",
      "/pins/Chester/chester_hypercharge_pin.png",
      "/pins/Chester/chester_loki_pin.png",
      "/pins/Chester/chester_phew_pin.png",
      "/pins/Chester/chester_pin_enchanted.png",
      "/pins/Chester/chester_pin.png",
      "/pins/Chester/chester_sad_pin.png",
      "/pins/Chester/chester_special_pin.png"
    ],
    "buffies": []
  },
  "63": {
    "id": "63",
    "apiId": 16000064,
    "name": "格雷",
    "enName": "Gray",
    "slug": "gray",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "格雷将自己塑造成一部古老的无声电影中的角色。他认真对待这一行为，但有时在进行手指子弹时会忘记闭嘴。",
    "story": "",
    "avatar": "/HeroAvatars/16000064.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000064.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000064.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6800,
      "damage": 2320,
      "range": "9 (远)",
      "reload": "1.4 秒 (快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000535,
        "name": "假伤",
        "desc": "当格雷拥有完整生命值时，下一次受到的伤害会减少 %。",
        "icon": "/starpowers/Gray/gray_starpower_01.png"
      },
      {
        "id": 23000536,
        "name": "新视角",
        "desc": "当格雷或他的盟友使用门时，他们会恢复最大生命值的%。",
        "icon": "/starpowers/Gray/gray_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000537,
        "name": "步行手杖",
        "desc": "格雷的手指手枪的下一次攻击会射出一根手杖，将敌人向后拉一点。（冷却：23 秒）",
        "icon": "/gadgets/Gray/gray_gadget_01.png"
      },
      {
        "id": 23000538,
        "name": "三角钢琴",
        "desc": "格雷的下一击手指手枪也会在地面上留下一个目标，钢琴会落在地上并伤害敌人。万一有人受伤就太糟糕了，对吧？（冷却：14 秒）",
        "icon": "/gadgets/Gray/gray_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "格雷·极限充能",
      "desc": "倍率：40%}}\n{{Quote。激活后，格雷会创建传送器，每当他或他的盟友使用它们时，他们都会收到一个护盾，该护盾最初会阻挡对他们造成的接下来的 1000 点伤害。护盾每 0.75 秒就会衰减 50 点生命值，因此它可以阻挡的伤害会随着时间的推移而减少。如果攻击造成的伤害超过护盾当前的生命值，护盾就会消失，格雷或他的盟友会受到剩余伤害的伤害。当此护盾激活时，科莱特的攻击和超级将根据格雷或其盟友的最大生命值造成伤害。当格雷或他的盟友使用他的传送器时，当他们的护盾处于活动状态时，他们将重置回 1000。超充能超级可以放置在普通超级旁边。格雷还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Gray/gray_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Gray/emojji_gray_special_pin.png",
      "/pins/Gray/gray_angry_pin.png",
      "/pins/Gray/gray_clap_pin.png",
      "/pins/Gray/gray_detective_pin.png",
      "/pins/Gray/gray_facepalm_pin.png",
      "/pins/Gray/gray_happy_pin.png",
      "/pins/Gray/gray_hypercharge_pin.png",
      "/pins/Gray/gray_phew_pin.png",
      "/pins/Gray/gray_pin.png",
      "/pins/Gray/gray_sad_pin.png",
      "/pins/Gray/gray_starrforce_pin.png",
      "/pins/Gray/gray_thanks_pin.png"
    ],
    "buffies": []
  },
  "64": {
    "id": "64",
    "apiId": 16000065,
    "name": "曼迪",
    "enName": "Mandy",
    "slug": "mandy",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "曼迪经营一家糖果店，她穿着戏服分发糖果。她有点太热衷于表演，并用铁拳统治着她的糖果王国。",
    "story": "",
    "avatar": "/HeroAvatars/16000065.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000065.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000065.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 2600,
      "range": "9 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000543,
        "name": "在我的视野中",
        "desc": "曼迪在专注时以 15% 的速度射出糖果。",
        "icon": "/starpowers/Mandy/mandy_starpower_01.png"
      },
      {
        "id": 23000544,
        "name": "硬糖",
        "desc": "曼迪在专注时获得 40% 护盾。",
        "icon": "/starpowers/Mandy/mandy_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000545,
        "name": "焦糖化",
        "desc": "曼迪从糖果分配器中取出的下一颗糖果可以使击中的敌人减速几秒。（冷却：13 秒）",
        "icon": "/gadgets/Mandy/mandy_gadget_01.png"
      },
      {
        "id": 23000546,
        "name": "饼干屑",
        "desc": "曼迪从糖果分配器中取出的下一颗糖果会刺穿敌人和环境。（冷却：16 秒）",
        "icon": "/gadgets/Mandy/mandy_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "曼迪·极限充能",
      "desc": "倍率：35%}}\n{{Quote。激活后，曼迪会用她的超级发射 2 个额外的射弹，这些射弹与原始超级的左侧和右侧成一定角度。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Mandy/mandy_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Mandy/mandy_angry_pin.png",
      "/pins/Mandy/mandy_carnival_pin.png",
      "/pins/Mandy/mandy_clap_pin.png",
      "/pins/Mandy/mandy_facepalm_pin.png",
      "/pins/Mandy/mandy_gg_pin.png",
      "/pins/Mandy/mandy_happy_pin.png",
      "/pins/Mandy/mandy_harvest_pin.png",
      "/pins/Mandy/mandy_hypercharge_pin.png",
      "/pins/Mandy/mandy_lava_angry_pin.png",
      "/pins/Mandy/mandy_lava_clap_pin.png",
      "/pins/Mandy/mandy_lava_gg_pin.png",
      "/pins/Mandy/mandy_lava_happy_pin.png"
    ],
    "buffies": []
  },
  "65": {
    "id": "65",
    "apiId": 16000066,
    "name": "阿尔缇",
    "enName": "R-T",
    "slug": "r-t",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "阿尔缇 被设计为一个有用的信息亭，但他还承担了监控斯塔尔公园内所有活动的任务。当然，出于安全考虑。",
    "story": "",
    "avatar": "/HeroAvatars/16000066.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000066.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000066.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8200,
      "damage": 700,
      "range": "10 (极远)",
      "reload": "1.5 秒 (普通) 1.8 秒 (split; 普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000553,
        "name": "快速数学",
        "desc": "最后 3 秒创建的标记。",
        "icon": "/starpowers/R-T/rt_starpower_01.png"
      },
      {
        "id": 23000554,
        "name": "记录",
        "desc": "阿尔缇 和他的腿在分裂时受到的伤害减少 20%。",
        "icon": "/starpowers/R-T/rt_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000555,
        "name": "不合时宜",
        "desc": "立即为 阿尔缇 的 超级技能 充电。（冷却：20 秒）",
        "icon": "/gadgets/R-T/rt_gadget_02.png"
      },
      {
        "id": 23000556,
        "name": "黑客",
        "desc": "立即触发所有敌方斗士身上的所有活动标记，对其造成伤害。（冷却：15 秒）",
        "icon": "/gadgets/R-T/rt_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "阿尔缇·极限充能",
      "desc": "倍率：25%。激活后，在 阿尔缇 变身为替代形态后，他的头部和腿部各有 4 组 2 个小型雷达，这些雷达会快速围绕它们旋转，造成 700 点伤害并标记击中的敌人。超级充电结束后，雷达消失。 阿尔缇 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/R-T/rt_angry_pin.png",
      "/pins/R-T/rt_clap_pin.png",
      "/pins/R-T/rt_cult_angry_pin.png",
      "/pins/R-T/rt_cult_clap_pin.png",
      "/pins/R-T/rt_cult_gg_pin.png",
      "/pins/R-T/rt_cult_happy_pin.png",
      "/pins/R-T/rt_cult_phew_pin.png",
      "/pins/R-T/rt_cult_pin.png",
      "/pins/R-T/rt_cult_sad_pin.png",
      "/pins/R-T/rt_cult_special_pin.png",
      "/pins/R-T/rt_cult_thanks_pin.png",
      "/pins/R-T/rt_facepalm_pin_1.png"
    ],
    "buffies": []
  },
  "66": {
    "id": "66",
    "apiId": 16000067,
    "name": "薇洛",
    "enName": "Willow",
    "slug": "willow",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "威洛在爱情沼泽中担任贡多拉船夫。她为寻求浪漫夜晚的情侣提供了他们能想象到的最令人毛骨悚然、最令人不安的时光。",
    "story": "",
    "avatar": "/HeroAvatars/16000067.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000067.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000067.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 800,
      "range": "7.33 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000561,
        "name": "爱情是盲目的",
        "desc": "灯笼的诅咒还会使受影响的英雄的装填速度降低 30%，持续 3 秒。",
        "icon": "/starpowers/Willow/willow_starpower_01.png"
      },
      {
        "id": 23000562,
        "name": "痴迷",
        "desc": "被施咒的敌人在精神控制时获得 33% 移动速度。",
        "icon": "/starpowers/Willow/willow_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000563,
        "name": "着迷的",
        "desc": "薇洛的下一个灯笼诅咒会造成多倍伤害，并且会立即施加全部伤害，而不是随着时间的推移而施加。（冷却：13 秒）",
        "icon": "/gadgets/Willow/willow_gadget_01.png"
      },
      {
        "id": 23000564,
        "name": "潜水",
        "desc": "薇洛 潜入 2 秒，变得无法瞄准，但在此期间无法采取任何行动。（冷却：16 秒）",
        "icon": "/gadgets/Willow/willow_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "薇洛·极限充能",
      "desc": "倍率：40%。激活后，威洛在她的超级着陆后会免疫 4 秒。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Willow/willow_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Willow/willow_angry_pin.png",
      "/pins/Willow/willow_clap_pin.png",
      "/pins/Willow/willow_demon_willow_pin.png",
      "/pins/Willow/willow_facepalm_pin_1.png",
      "/pins/Willow/willow_facepalm_pin.png",
      "/pins/Willow/willow_gg_pin.png",
      "/pins/Willow/willow_happy_pin.png",
      "/pins/Willow/willow_phew_pin.png",
      "/pins/Willow/willow_pin.png",
      "/pins/Willow/willow_sad_pin.png",
      "/pins/Willow/willow_special_pin.png",
      "/pins/Willow/willow_thanks_pin.png"
    ],
    "buffies": []
  },
  "67": {
    "id": "67",
    "apiId": 16000068,
    "name": "麦茜",
    "enName": "Maisie",
    "slug": "maisie",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "梅西是一名安全协调员，但内心深处她喜欢危险的环境。有时，感觉就像是她亲手创造了它们。",
    "story": "",
    "avatar": "/HeroAvatars/16000068.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000068.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000068.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 3000,
      "range": "8.67 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000569,
        "name": "精确定位",
        "desc": "压力火箭在最大距离内造成 25% 伤害。",
        "icon": "/starpowers/Maisie/maisie_starpower_01.png"
      },
      {
        "id": 23000570,
        "name": "震颤",
        "desc": "被冲击波击中的敌人也会减速 2 秒。",
        "icon": "/starpowers/Maisie/maisie_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000571,
        "name": "脱离",
        "desc": "梅西向前冲刺时会爆炸地面，击晕敌人 0.5 秒。（冷却：16 秒）",
        "icon": "/gadgets/Maisie/maisie_gadget_01.png"
      },
      {
        "id": 23000572,
        "name": "完成他们",
        "desc": "麦茜 立即重新装填 1 弹药，并使下一次压力火箭伤害增加目标损失生命值的 30%。（冷却：10 秒）",
        "icon": "/gadgets/Maisie/maisie_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "麦茜·极限充能",
      "desc": "倍率：40%。When activated, 麦茜's 超级技能 also sends out 6 main attack projectiles radially. Similar to Spike's attack and 汉克's 超级技能, the pattern is fixed, with 60 degrees between each cloud, and it doesn't rotate with the direction 麦茜 is moving. The projectiles deal as half as much damage but recharge the same amount of 超级技能 on hit as her 超级技能. 麦茜's 极限充能 deals devastating damage at point-blank range where more clouds and her 超级技能 can hit the enemy. She also gains a 20% speed boost, as well as a 5% damage and shield boost.",
      "icon": "/hypercharges/Maisie/maisie_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Maisie/maisie_angry_pin.png",
      "/pins/Maisie/maisie_bizarre_maisie_pin.png",
      "/pins/Maisie/maisie_clap_pin.png",
      "/pins/Maisie/maisie_cry_pin.png",
      "/pins/Maisie/maisie_gg_pin.png",
      "/pins/Maisie/maisie_happy_pin.png",
      "/pins/Maisie/maisie_hypercharge_pin.png",
      "/pins/Maisie/maisie_jungle_angry_pin.png",
      "/pins/Maisie/maisie_jungle_clap_pin.png",
      "/pins/Maisie/maisie_jungle_gg_pin.png",
      "/pins/Maisie/maisie_jungle_happy_pin.png",
      "/pins/Maisie/maisie_jungle_phew_pin.png"
    ],
    "buffies": []
  },
  "68": {
    "id": "68",
    "apiId": 16000069,
    "name": "汉克",
    "enName": "Hank",
    "slug": "hank",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "汉克是一支只有虾、一辆坦克的军队，其使命是将海洋生物从世界各地的厨房和市场中解放出来。厨师们，请注意！",
    "story": "",
    "avatar": "/HeroAvatars/16000069.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000069.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000069.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10400,
      "damage": 525,
      "range": "1.67 (min. range)",
      "reload": "0.25 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000577,
        "name": "它会吹",
        "desc": "当气球爆炸蓄力超过 80% 时，汉克将获得 10% 额外移动速度。",
        "icon": "/starpowers/Hank/hank_starpower_01.png"
      },
      {
        "id": 23000578,
        "name": "隐蔽",
        "desc": "靠近墙壁时，汉克受到的伤害减少 20%。",
        "icon": "/starpowers/Hank/hank_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000579,
        "name": "水气球",
        "desc": "下一次气球爆炸还会使敌人减速 3 秒。（冷却：11 秒）",
        "icon": "/gadgets/Hank/hank_gadget_01.png"
      },
      {
        "id": 23000580,
        "name": "路障",
        "desc": "汉克受到的伤害降低 40%，持续 3 秒。（冷却：18 秒）",
        "icon": "/gadgets/Hank/hank_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "汉克·极限充能",
      "desc": "倍率：40%}}\n{{Quote。激活后，汉克鱼雷现在会向敌人弯曲，甚至是在墙后阻挡其路径的敌人。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Hank/hank_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Hank/hank_angry_pin.png",
      "/pins/Hank/hank_clap_pin.png",
      "/pins/Hank/hank_facepalm_pin.png",
      "/pins/Hank/hank_gg_pin.png",
      "/pins/Hank/hank_happy_pin.png",
      "/pins/Hank/hank_hypercharge_pin.png",
      "/pins/Hank/hank_lilt_pin.png",
      "/pins/Hank/hank_lunar_pin.png",
      "/pins/Hank/hank_phew_pin.png",
      "/pins/Hank/hank_sad_pin.png",
      "/pins/Hank/hank_special_pin.png",
      "/pins/Hank/hank_thanks_pin.png"
    ],
    "buffies": []
  },
  "69": {
    "id": "69",
    "apiId": 16000070,
    "name": "科迪琉斯",
    "enName": "Cordelius",
    "slug": "cordelius",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "魔法森林的园丁和看护者。痴迷于蘑菇并对陌生人充满敌意。",
    "story": "",
    "avatar": "/HeroAvatars/16000070.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000070.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000070.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 1600,
      "range": "5.33 (普通)",
      "reload": "1.2 秒 (极快) 0.96 秒 (with Super)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000585,
        "name": "组合蘑菇",
        "desc": "将第二个蘑菇击中与第一个蘑菇相同的目标，会造成 20% 额外伤害。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000585.png"
      },
      {
        "id": 23000586,
        "name": "蘑菇王国",
        "desc": "科迪琉斯 在使用他的超级后会在暗影领域生成 1296 个蘑菇，在拾取时治疗盟友并伤害敌人，获得 1269 生命值。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000586.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000587,
        "name": "补种",
        "desc": "科迪利厄斯快速跳过一块地形。（冷却：18 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000587.png"
      },
      {
        "id": 23000588,
        "name": "毒蘑菇",
        "desc": "科迪利厄斯的下一次主要攻击会射出毒蘑菇，使敌人在 1 秒内无法攻击。（冷却：18 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000588.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "科迪琉斯·极限充能",
      "desc": "倍率：25%。激活后，科迪利厄斯的超级技能会减慢暗影领域敌人的速度。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Cordelius/cordelius_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Cordelius/cordelius_odin_pin.png",
      "/pins/Cordelius/cordelius_paper_angry_pin.png",
      "/pins/Cordelius/cordelius_paper_clap_pin.png",
      "/pins/Cordelius/cordelius_paper_happy_pin.png",
      "/pins/Cordelius/cordelius_paper_phew_pin.png",
      "/pins/Cordelius/cordelius_paper_pin.png",
      "/pins/Cordelius/cordelius_paper_sad_pin.png",
      "/pins/Cordelius/cordelius_paper_special_pin.png",
      "/pins/Cordelius/cordelius_paper_thanks_pin.png",
      "/pins/Cordelius/cordelius_paper_thumbs_up_pin.png",
      "/pins/Cordelius/cordelius_pin_angry.png",
      "/pins/Cordelius/cordelius_pin_clap.png"
    ],
    "buffies": []
  },
  "70": {
    "id": "70",
    "apiId": 16000071,
    "name": "道格",
    "enName": "Doug",
    "slug": "doug",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "道格的热狗会延长你朋友的保质期。",
    "story": "",
    "avatar": "/HeroAvatars/16000071.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000071.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000071.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10400,
      "damage": 1200,
      "range": "3.33 (近)",
      "reload": "1.5 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000593,
        "name": "快餐",
        "desc": "当道格成功复活盟友时，他将恢复最大生命值的 100% 生命值。",
        "icon": "/starpowers/Doug/doug_starpower_01.png"
      },
      {
        "id": 23000594,
        "name": "自助服务",
        "desc": "零食攻击还可以治愈道格432。",
        "icon": "/starpowers/Doug/doug_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000595,
        "name": "双香肠",
        "desc": "下一次零食攻击只会治愈盟友，但数量会翻倍。（冷却：15 秒）",
        "icon": "/gadgets/Doug/doug_gadget_01.png"
      },
      {
        "id": 23000596,
        "name": "额外芥末",
        "desc": "下一次零食攻击只会对敌人造成伤害，但伤害量会翻倍。（冷却：15 秒）",
        "icon": "/gadgets/Doug/doug_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "道格·极限充能",
      "desc": "倍率：50%。激活后，道格对友方斗士使用超级后，表示友方斗士每次使用道格的攻击时都会使用道格的攻击。然而，如果道格对自己使用超级，他就不会同时进行两次攻击。镜像攻击适用于他的两个小工具，而他的自助星力将治愈被增强的盟友。镜像攻击将为盟友而非道格本人收取超级费用。镜像攻击会以与伤害成正比的速率产生超级能量；使用镜像攻击或盟友的普通攻击对敌人造成相同数量的伤害，将获得相同数量的超级。道格还获得 20% 的速度提升，以及 5% 的伤害和护盾提升，但伤害提升不适用于镜像攻击。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Doug/doug_man-o-war_pin.png",
      "/pins/Doug/doug_pin_angry.png",
      "/pins/Doug/doug_pin_clap.png",
      "/pins/Doug/doug_pin_facepalm.png",
      "/pins/Doug/doug_pin_gg.png",
      "/pins/Doug/doug_pin_happy.png",
      "/pins/Doug/doug_pin_phew.png",
      "/pins/Doug/doug_pin_sad.png",
      "/pins/Doug/doug_pin_special.png",
      "/pins/Doug/doug_pin_thanks.png"
    ],
    "buffies": []
  },
  "71": {
    "id": "71",
    "apiId": 16000072,
    "name": "珀尔",
    "enName": "Pearl",
    "slug": "pearl",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "尽管困难重重，珀尔凭借她温暖的天性，进入了贝儿和山姆坚硬的心。此外，谁能抗拒巧克力饼干呢？",
    "story": "",
    "avatar": "/HeroAvatars/16000072.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000072.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000072.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8600,
      "damage": 280,
      "range": "9 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000601,
        "name": "保温性",
        "desc": "使用 超级技能 时，消耗的热量会减少 50%。",
        "icon": "/starpowers/Pearl/pearl_starpower_01.png"
      },
      {
        "id": 23000602,
        "name": "隔热罩",
        "desc": "当热火结束80%时，减少20%受到的伤害。",
        "icon": "/starpowers/Pearl/pearl_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000603,
        "name": "煮过头了",
        "desc": "下一次基本攻击会发射燃烧的饼干，随着时间的推移造成 832 额外伤害。（冷却：15 秒）",
        "icon": "/gadgets/Pearl/pearl_gadget_01.png"
      },
      {
        "id": 23000604,
        "name": "用爱制造",
        "desc": "接下来的基本攻击会射出完美烘烤的饼干，忽略敌人并随着时间的推移治愈盟友 2240 点。（冷却：11 秒）",
        "icon": "/gadgets/Pearl/pearl_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "珀尔·极限充能",
      "desc": "倍率：40%。激活后，珍珠的超级会在地面上留下持续 4.5 秒的燃烧区域。它造成 800 点伤害，如果敌人仍然站在该区域，则可以击中 5 次。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Pearl/pearl_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Pearl/pearl_angry_pin.png",
      "/pins/Pearl/pearl_clap_pin.png",
      "/pins/Pearl/pearl_dark_keep_pin.png",
      "/pins/Pearl/pearl_facepalm_pin.png",
      "/pins/Pearl/pearl_gg_pin.png",
      "/pins/Pearl/pearl_hypercharge_pin.png",
      "/pins/Pearl/pearl_periscope_angry_pin.png",
      "/pins/Pearl/pearl_periscope_clap_pin.png",
      "/pins/Pearl/pearl_periscope_gg_pin.png",
      "/pins/Pearl/pearl_periscope_happy_pin.png",
      "/pins/Pearl/pearl_periscope_phew_pin.png",
      "/pins/Pearl/pearl_periscope_pin.png"
    ],
    "buffies": []
  },
  "72": {
    "id": "72",
    "apiId": 16000073,
    "name": "查克",
    "enName": "Chuck",
    "slug": "chuck",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "查克曾经是一位才华横溢的音乐大师，现在是一名火车售票员，他用音乐厅的交响乐换成了幽灵车站的刺耳噪音，所有这一切都是为了发现音乐中的下一件大事！",
    "story": "",
    "avatar": "/HeroAvatars/16000073.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000073.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000073.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 9400,
      "damage": 540,
      "range": "6.67 (普通)",
      "reload": "2 秒 (慢)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000609,
        "name": "进站",
        "desc": "将最大帖子数量增加 1.。",
        "icon": "/starpowers/Chuck/chuck_starpower_01.png"
      },
      {
        "id": 23000610,
        "name": "请购票",
        "desc": "用他的超级冲刺敌人也会偷走他们的 % 弹药。",
        "icon": "/starpowers/Chuck/chuck_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000611,
        "name": "重新路由",
        "desc": "查克移除最近的柱子并给他的超级充能。（冷却：10 秒）",
        "icon": "/gadgets/Chuck/chuck_gadget_02.png"
      },
      {
        "id": 23000612,
        "name": "幽灵列车",
        "desc": "查克的下一个超级可以穿墙！（冷却：17 秒）",
        "icon": "/gadgets/Chuck/chuck_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "查克·极限充能",
      "desc": "倍率：30%。激活后，查克的冲刺范围不受限制，并且在冲刺时他会向两侧连续发射 2 道刺穿蒸汽，造成 183 点伤害。蒸汽云的射程为 3.33 格，但起始距离为 1.67 格，防止它们在近距离造成过多伤害。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Chuck/chuck_angry_pin.png",
      "/pins/Chuck/chuck_clap_pin.png",
      "/pins/Chuck/chuck_electroid_chuck_pin.png",
      "/pins/Chuck/chuck_facepalm_pin.png",
      "/pins/Chuck/chuck_gg_pin.png",
      "/pins/Chuck/chuck_happy_pin.png",
      "/pins/Chuck/chuck_phew_pin.png",
      "/pins/Chuck/chuck_pin.png",
      "/pins/Chuck/chuck_sad_pin.png",
      "/pins/Chuck/chuck_scorpion_angry_pin.png",
      "/pins/Chuck/chuck_scorpion_clap_pin.png",
      "/pins/Chuck/chuck_scorpion_gg_pin.png"
    ],
    "buffies": []
  },
  "73": {
    "id": "73",
    "apiId": 16000074,
    "name": "查莉",
    "enName": "Charlie",
    "slug": "charlie",
    "role": "控场",
    "class": "Controller",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "小查理上演了一场疯狂的表演，她放下了头发，带着你所有的钱走了。人群涌来，填满了马戏团的帐篷，所以查理一边走一边拿走每一分钱！",
    "story": "",
    "avatar": "/HeroAvatars/16000074.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000074.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000074.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 1600,
      "range": "9 (远)",
      "reload": "-",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000623,
        "name": "消化",
        "desc": "被困住的敌人在被困住时会失去 25% 的生命值。",
        "icon": "/starpowers/Charlie/charlie_starpower_01.png"
      },
      {
        "id": 23000624,
        "name": "粘糊糊的",
        "desc": "茧会在其身后留下一条持续 5 秒的粘糊糊的痕迹，减缓敌人在其上行走的速度。",
        "icon": "/starpowers/Charlie/charlie_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000625,
        "name": "蜘蛛",
        "desc": "查理释放了 1120 只蜘蛛，它们会寻找并攻击最近的敌人。（冷却：20 秒）",
        "icon": "/gadgets/Charlie/charlie_gadget_01.png"
      },
      {
        "id": 23000626,
        "name": "个人空间",
        "desc": "查理将自己包裹起来，治愈了她总生命值的 50%。（冷却：15 秒）",
        "icon": "/gadgets/Charlie/charlie_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "查莉·极限充能",
      "desc": "倍率：60%。激活后，查理的超级会召唤三只蜘蛛，在茧周围呈三角形排列，其行为与她的蜘蛛小工具相同。即使查理错过了她的超级，蜘蛛也会产卵。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Charlie/charlie_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Charlie/charlie_angry_pin.png",
      "/pins/Charlie/charlie_clap_pin.png",
      "/pins/Charlie/charlie_cry_pin.png",
      "/pins/Charlie/charlie_facepalm_pin.png",
      "/pins/Charlie/charlie_gg_pin.png",
      "/pins/Charlie/charlie_happy_pin.png",
      "/pins/Charlie/charlie_hypercharge_pin.png",
      "/pins/Charlie/charlie_phew_pin.png",
      "/pins/Charlie/charlie_rose_angry_pin.png",
      "/pins/Charlie/charlie_rose_gg_pin.png",
      "/pins/Charlie/charlie_rose_happy_pin.png",
      "/pins/Charlie/charlie_rose_phew_pin.png"
    ],
    "buffies": []
  },
  "74": {
    "id": "74",
    "apiId": 16000075,
    "name": "米科",
    "enName": "Mico",
    "slug": "mico",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "米科是《乱斗场》中的音响师，但考虑到他的吹牛和名声，人们可能会认为他实际上是一位名人，这是情有可原的。他脾气暴躁，情绪不稳定，开不起玩笑。永远不要说他有趣...",
    "story": "",
    "avatar": "/HeroAvatars/16000075.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000075.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000075.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 2280,
      "range": "4 (普通)",
      "reload": "2.4 秒 (极慢)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000637,
        "name": "胡闹",
        "desc": "每隔 5 秒，米科 的基本攻击会在击中敌人后窃取他们的弹药。",
        "icon": "/starpowers/Mico/mico_starpower_01.png"
      },
      {
        "id": 23000638,
        "name": "打破纪录",
        "desc": "米科对非争斗者造成 100% 额外伤害。",
        "icon": "/starpowers/Mico/mico_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000639,
        "name": "剪辑尖叫",
        "desc": "米科向最近的敌人发出震耳欲聋的尖叫声，对击中的敌人造成伤害并使其减速数秒。（冷却：15 秒）",
        "icon": "/gadgets/Mico/mico_gadget_01.png"
      },
      {
        "id": 23000640,
        "name": "急板",
        "desc": "米科的下一次跳跃范围扩大了 34%。（冷却：14 秒）",
        "icon": "/gadgets/Mico/mico_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "米科·极限充能",
      "desc": "倍率：50%。激活后，米科 的下一个超级技能会击晕受到其冲击伤害的敌人 1.5 秒。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Mico/hypercharge_icon_mico.png"
    },
    "skins": [],
    "pins": [
      "/pins/Mico/mico_angry_pin.png",
      "/pins/Mico/mico_base_pin.png",
      "/pins/Mico/mico_clap_pin.png",
      "/pins/Mico/mico_facepalm_pin.png",
      "/pins/Mico/mico_gg_pin.png",
      "/pins/Mico/mico_grouch_pin.png",
      "/pins/Mico/mico_happy_pin.png",
      "/pins/Mico/mico_hypercharge_pin.png",
      "/pins/Mico/mico_mic_pin.png",
      "/pins/Mico/mico_phew_pin.png",
      "/pins/Mico/mico_sad_pin.png",
      "/pins/Mico/mico_special_pin.png"
    ],
    "buffies": []
  },
  "75": {
    "id": "75",
    "apiId": 16000076,
    "name": "凯特",
    "enName": "Kit",
    "slug": "kit",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "卡通巨星基特在斯塔尔卡通工作室（Starr Toon 斯图dios）里给狂热的粉丝们签名，经常梦想着再次成为这个行业的重要人物，因为他的演技而不是他的外表而受到尊重。",
    "story": "",
    "avatar": "/HeroAvatars/16000076.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000076.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000076.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6200,
      "damage": 1000,
      "range": "3.67 (近)",
      "reload": "0.8 秒 (极快) 2 秒 (attached; 慢)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000646,
        "name": "耗电",
        "desc": "套件从每个能量立方体中获得 150% 能量。",
        "icon": "/starpowers/Kit/kit_starpower_01.png"
      },
      {
        "id": 23000647,
        "name": "过度依恋",
        "desc": "套件附着在友好的争吵者上的时间延长了 5 秒。",
        "icon": "/starpowers/Kit/kit_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000648,
        "name": "纸板箱",
        "desc": "隐藏在纸板箱中，隐形 3 秒。静止时 超级技能 100% 充电速度更快。（冷却：23 秒）",
        "icon": "/gadgets/Kit/kit_gadget_01.png"
      },
      {
        "id": 23000649,
        "name": "芝士汉堡",
        "desc": "治愈他自己和他所依附的友好的争斗者 30%。（冷却：15 秒）",
        "icon": "/gadgets/Kit/kit_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "凯特·极限充能",
      "desc": "倍率：30%。激活后，当基特对敌人的斗士使用他的超级时，他会击晕敌人，同时仍然能够移动和攻击。然而，随着时间的推移，他将不再对他击中的敌人造成伤害。如果基特对友方格斗者使用他的超级技能，他每秒可以治疗他们最大生命值的 25%，而不是 15%，并且他在替代形式下的攻击范围会显着增加。然而，基特的自愈能力不会是正常情况下的两倍。友方争斗者的治疗效果会在超充能持续时间内增加，并在超充能结束后恢复正常，但攻击的额外范围会一直保持到超充能持续时间结束。套件还获得 20% 的速度提升，以及 5% 的伤害和护盾。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Kit/kit_angry_pin.png",
      "/pins/Kit/kit_base_pin.png",
      "/pins/Kit/kit_boxer_darkpaw_pin.png",
      "/pins/Kit/kit_boxer_goldpaw_pin.png",
      "/pins/Kit/kit_boxer_pin.png",
      "/pins/Kit/kit_clap_pin.png",
      "/pins/Kit/kit_facepalm_pin.png",
      "/pins/Kit/kit_gg_pin.png",
      "/pins/Kit/kit_happy_pin.png",
      "/pins/Kit/kit_lockpic_pin.png",
      "/pins/Kit/kit_phew_pin.png",
      "/pins/Kit/kit_sad_pin.png"
    ],
    "buffies": []
  },
  "76": {
    "id": "76",
    "apiId": 16000077,
    "name": "拉里和劳里",
    "enName": "Larry & Lawrie",
    "slug": "larry-and-lawrie",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "拉里在他的双胞胎劳里的注视下向斯塔尔公园的游客出售门票。拉里喜欢规则，它们让生活变得更轻松！劳瑞并不喜欢规则，而是喜欢执行规则。他们是一支优秀的团队。",
    "story": "",
    "avatar": "/HeroAvatars/16000077.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000077.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000077.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 1400,
      "range": "7.33 (远)",
      "reload": "2.2 秒 (极慢)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000659,
        "name": "协议保护",
        "desc": "当 Lawrie 在范围内时，将 30% 受到的伤害转移到自己身上。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000659.png"
      },
      {
        "id": 23000660,
        "name": "协议协助",
        "desc": "当 Lawrie 在射程内时，只要他对敌人造成伤害，就重新装填 30% 的弹药。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000660.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000661,
        "name": "订单互换",
        "desc": "与劳里交换武器。（冷却：12 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000661.png"
      },
      {
        "id": 23000662,
        "name": "订单回退",
        "desc": "冲向 Lawrie，同时 Lawrie 冲向你，治疗双方最大生命值的 25%。（冷却：17 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000662.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "拉里和劳里·极限充能",
      "desc": "倍率：39%}}\n{{Quote。激活后，Larry 会生成第二个 Lawrie，生命值增加 2000 点。此 Lawrie 始终相对于 Larry 沿正常 Lawrie 的顺时针方向生成。尽管有这样的描述，第二个劳里与普通劳里相比并没有造成额外的伤害。可以同时有两个活跃的 Lawrie，并且使用另一个普通的 超级技能 只会使普通的 Lawrie 消失。拉里和劳里的命令：交换和命令：后备小工具仅影响正常的劳里。拉里还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "77": {
    "id": "77",
    "apiId": 16000078,
    "name": "麦乐迪",
    "enName": "Melodie",
    "slug": "melodie",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "说到卡拉 OK，麦乐迪 毫不留情。凭借她可爱的外表和魔鬼般的管子，她总是能抢尽风头。",
    "story": "",
    "avatar": "/HeroAvatars/16000078.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000078.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000078.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 460,
      "range": "8 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000667,
        "name": "快节奏",
        "desc": "麦乐迪 的移动速度因每个围绕她旋转的音符而增加 6% 。",
        "icon": "/starpowers/Melodie/melodie_starpower_01.png"
      },
      {
        "id": 23000668,
        "name": "扩展混合",
        "desc": "麦乐迪 的音符会持续 25% 时间然后消失。",
        "icon": "/starpowers/Melodie/melodie_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000669,
        "name": "完美音调",
        "desc": "麦乐迪 的音符移动速度增加 25%，轨道扩大 60%，持续 5 秒。（冷却：14 秒）",
        "icon": "/gadgets/Melodie/melodie_gadget_01.png"
      },
      {
        "id": 23000670,
        "name": "插曲",
        "desc": "旋律从围绕她旋转的每个音符中获得 10% 护盾。（冷却：19 秒）",
        "icon": "/gadgets/Melodie/melodie_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "麦乐迪·极限充能",
      "desc": "倍率：25%。激活后，每次 麦乐迪 在 极限充能 期间使用 超级技能，极限充能 音符就会以 2 格为半径围绕她旋转，其作用与普通音符相同，但伤害减少 480 点，或在 极限充能 伤害提升后造成 504 点伤害。 麦乐迪 最多可以有 3 个 极限充能 音符在任何时候围绕她旋转，这超出了正常的音符限制，允许她最多有 6 个音符。 极限充能 音符也会影响 麦乐迪 的 Interlude 随身妙具 和 Fast Beats 星辉之力，但无法通过 Extended Mix 星辉之力 延长其持续时间。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Melodie/melodie_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Melodie/melodie_angry_pin.png",
      "/pins/Melodie/melodie_blackgreen_melodie_pin.png",
      "/pins/Melodie/melodie_clap_pin.png",
      "/pins/Melodie/melodie_default_pin.png",
      "/pins/Melodie/melodie_facepalm_pin.png",
      "/pins/Melodie/melodie_gg_pin.png",
      "/pins/Melodie/melodie_happy_pin.png",
      "/pins/Melodie/melodie_harpy_pin.png",
      "/pins/Melodie/melodie_hypercharge_pin.png",
      "/pins/Melodie/melodie_phew_pin.png",
      "/pins/Melodie/melodie_redwhite_melodie_pin.png",
      "/pins/Melodie/melodie_sad_pin.png"
    ],
    "buffies": []
  },
  "78": {
    "id": "78",
    "apiId": 16000079,
    "name": "安吉洛",
    "enName": "Angelo",
    "slug": "angelo",
    "role": "射手",
    "class": "Marksman",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "安杰洛是爱情沼泽的居民，丘比特变成了蚊子。它们在运河周围嗡嗡作响，寻找爱情鸟，以令人难以抗拒的魅力让人眼花缭乱，即使这需要一点额外的、尖锐的激励。",
    "story": "",
    "avatar": "/HeroAvatars/16000079.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000079.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000079.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6200,
      "damage": 200,
      "range": "10 (极远)",
      "reload": "0.1 秒 (极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000675,
        "name": "赋能",
        "desc": "留在超级舱内每秒可以治疗安杰洛 558 的生命。",
        "icon": "/starpowers/Angelo/angelo_starpower_01.png"
      },
      {
        "id": 23000676,
        "name": "流动",
        "desc": "安吉洛入水后移动速度提高 25% 。",
        "icon": "/starpowers/Angelo/angelo_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000677,
        "name": "刺痛飞行",
        "desc": "飞到空中 528 秒。起飞时消耗附近敌人的 1 生命值。（冷却：18 秒）",
        "icon": "/gadgets/Angelo/angelo_gadget_01.png"
      },
      {
        "id": 23000678,
        "name": "弗莱彻大师",
        "desc": "下一个瞄准刺穿敌人和环境。（冷却：18 秒）",
        "icon": "/gadgets/Angelo/angelo_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "安吉洛·极限充能",
      "desc": "倍率：35%。激活后，安杰洛的毒云会随之移动。此超级充能仅影响在其持续时间内使用的超级技能，但即使在超级充能结束后，毒云仍将继续跟随安杰洛。如果在Hyper Charge期间使用了多个超级技能，则所有超级技能都会跟随安吉洛。安杰洛还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Angelo/angelo_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Angelo/angelo_angry_pin.png",
      "/pins/Angelo/angelo_clap_pin.png",
      "/pins/Angelo/angelo_default_pin.png",
      "/pins/Angelo/angelo_dionysus_pin.png",
      "/pins/Angelo/angelo_facepalm_pin.png",
      "/pins/Angelo/angelo_gg_pin.png",
      "/pins/Angelo/angelo_happy_pin.png",
      "/pins/Angelo/angelo_hypercharge_pin.png",
      "/pins/Angelo/angelo_phew_pin.png",
      "/pins/Angelo/angelo_sad_pin.png",
      "/pins/Angelo/angelo_special_pin.png",
      "/pins/Angelo/angelo_thanks_pin.png"
    ],
    "buffies": []
  },
  "79": {
    "id": "79",
    "apiId": 16000080,
    "name": "德拉科",
    "enName": "Draco",
    "slug": "draco",
    "role": "坦克",
    "class": "Tank",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "德拉科骑着他的充气龙并燃放烟花，承诺每晚都会有一个令人惊叹的结局。随着他的电吉他鸣响和他喷出的火焰震撼了人群，他将幻想变成了十一！",
    "story": "",
    "avatar": "/HeroAvatars/16000080.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000080.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000080.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 11200,
      "damage": 700,
      "range": "4 (普通)",
      "reload": "1 秒 (极快)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000734,
        "name": "暴露",
        "desc": "每隔 5 秒，下一次长矛刺击会暴露击中的敌人。暴露在外的敌人受到的伤害提高 35%，持续 5 秒。",
        "icon": "/starpowers/Draco/draco_starpower_01.png"
      },
      {
        "id": 23000735,
        "name": "粉碎",
        "desc": "龙独奏现在在激活时还可以治疗 2520 。",
        "icon": "/starpowers/Draco/draco_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000736,
        "name": "上切",
        "desc": "下一次长矛刺还会将敌人短时间抛到空中。（冷却：11 秒）",
        "icon": "/gadgets/Draco/draco_gadget_01.png"
      },
      {
        "id": 23000737,
        "name": "最后一站",
        "desc": "德拉科 在 2 秒内无法陷入单一生命值。（冷却：22 秒）",
        "icon": "/gadgets/Draco/draco_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "德拉科·极限充能",
      "desc": "倍率：25%。激活后，如果德拉科处于替代形态，他的攻击范围增加 3.33 格，射弹量加倍，并且德拉科在攻击时不消耗弹药。就像莱昂的超充能和超级一样，如果德拉科的超充能持续时间在仍处于龙独奏形态时结束，他的充气将再次像以前一样喷出常规火焰。 德拉科 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Draco/draco_angry_pin.png",
      "/pins/Draco/draco_clap_pin.png",
      "/pins/Draco/draco_darkonceupon_happy_pin.png",
      "/pins/Draco/draco_dreadknight_angry_pin.png",
      "/pins/Draco/draco_dreadknight_clap_pin.png",
      "/pins/Draco/draco_dreadknight_gg_pin.png",
      "/pins/Draco/draco_dreadknight_phew_pin.png",
      "/pins/Draco/draco_dreadknight_pin.png",
      "/pins/Draco/draco_dreadknight_sad_pin.png",
      "/pins/Draco/draco_dreadknight_special_pin.png",
      "/pins/Draco/draco_dreadknight_thanks_pin.png",
      "/pins/Draco/draco_facepalm_pin.png"
    ],
    "buffies": []
  },
  "80": {
    "id": "80",
    "apiId": 16000081,
    "name": "莉莉",
    "enName": "Lily",
    "slug": "lily",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "莉莉内心是个书呆子，又是一个十足的巫术爱好者，她对知识的渴望曾经让她进入了魔法森林，在那里，一场涉及萤火虫和食肉植物的事件永远改变了她的生活……",
    "story": "",
    "avatar": "/HeroAvatars/16000081.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000081.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000081.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8400,
      "damage": 2120,
      "range": "2 (近)",
      "reload": "0.8 秒 (极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000752,
        "name": "尖刺",
        "desc": "传送到敌人身边后，莉莉的下一次攻击会造成 954 点额外伤害",
        "icon": "/starpowers/Lily/lily_starpower_01.png"
      },
      {
        "id": 23000753,
        "name": "警觉",
        "desc": "当敌人在她的超级冲锋半径内时获得 15% 移动速度",
        "icon": "/starpowers/Lily/lily_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000754,
        "name": "消失",
        "desc": "莉莉进入暗影领域3秒（冷却：22 秒）",
        "icon": "/gadgets/Lily/lily_gadget_01.png"
      },
      {
        "id": 23000755,
        "name": "报告",
        "desc": "下一个蓬勃发展，变成投掷攻击，莉莉在撞击时传送到目的地（冷却：10 秒）",
        "icon": "/gadgets/Lily/lily_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "莉莉·极限充能",
      "desc": "倍率：35%。激活后，莉莉的超级会从墙壁上弹起，击中敌人后，会将莉莉传送到被击中的敌人处，并将两人传送到暗影领域，持续 5 秒，与其他玩家隔离。弹丸速度也大幅提升。与Rico和拉夫上校的主要攻击类似，莉莉的超级在前5次弹跳中将获得3.33格的额外射程。如果莉莉投掷她的超充能超级然后使用她的消失小工具，她将消失在暗影领域三秒，但如果超级击中敌人，持续时间将刷新并从 5 秒开始倒计时，莉莉将传送到击中的敌人处。 在暗影领域，与科迪琉斯的超级类似，屏幕上会出现倒计时，敌方斗士可以使用他们的主要攻击，但他们都不能使用他们的超级、小工具或超充能。 5秒后，或者如果莉莉或她的敌人被击败，他们将不再处于暗影领域，倒计时将停止。暗影领域的环境会发出紫色调，而莉莉和她的敌人会发出粉紫色调。即使她的特质半径可见，莉莉也无法在她的暗影领域以任何方式给她的超级能量。她的对手也无法对他们的超级进行冲锋，除非他们具有允许他们在受到伤害时冲锋的特质，例如Jacky、El Primo、Bull、Frank、Rosa、汉克、查克、奥利或德拉科。两个英雄的盟友都可以看到他们在正常环境中的等效位置。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Lily/lily_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Lily/lily_angel_lily_pin.png",
      "/pins/Lily/lily_angry_pin.png",
      "/pins/Lily/lily_clap_pin.png",
      "/pins/Lily/lily_cry_pin.png",
      "/pins/Lily/lily_facepalm_pin.png",
      "/pins/Lily/lily_gg_pin.png",
      "/pins/Lily/lily_happy_pin.png",
      "/pins/Lily/lily_phew_pin.png",
      "/pins/Lily/lily_pin.png",
      "/pins/Lily/lily_special_pin.png",
      "/pins/Lily/lily_thanks_pin.png"
    ],
    "buffies": []
  },
  "81": {
    "id": "81",
    "apiId": 16000082,
    "name": "拜瑞",
    "enName": "Berry",
    "slug": "berry",
    "role": "辅助",
    "class": "Support",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "在曼迪糖果店工作，可能会出现什么问题？一切！幸运的是，贝瑞拥有主力般的耐心和韧性。他似乎讨厌工作中的每一秒，但在轮班结束时，你可能会看到一个短暂的微笑。",
    "story": "",
    "avatar": "/HeroAvatars/16000082.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000082.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000082.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 5200,
      "damage": 660,
      "range": "6.33 (普通)",
      "reload": "2.4 秒 (极慢) 1.6 秒 (With Floor is Fine; 普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000764,
        "name": "地板很好",
        "desc": "贝瑞站在自己融化的冰淇淋上时，装弹速度提高 50% 。",
        "icon": "/starpowers/Berry/berry_starpower_01.png"
      },
      {
        "id": 23000765,
        "name": "弄得一团糟",
        "desc": "贝瑞的基本攻击在撞击没有冰淇淋的区域时会获得 20% 额外伤害。",
        "icon": "/starpowers/Berry/berry_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000766,
        "name": "友谊真伟大",
        "desc": "贝瑞挥动尾巴，击退敌人并治疗附近盟友的 832 生命值。（冷却：17 秒）",
        "icon": "/gadgets/Berry/berry_gadget_01.png"
      },
      {
        "id": 23000767,
        "name": "健康添加剂",
        "desc": "贝里的下一个主要攻击区域的持续时间延长 100%。（冷却：12 秒）",
        "icon": "/gadgets/Berry/berry_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "拜瑞·极限充能",
      "desc": "倍率：40%。激活后，贝瑞的超级会沿着超级的路径创建两条冰淇淋水坑轨迹，而不是一条。超充能的水坑可以与他的主要攻击和普通超级的水坑叠加。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Berry/berry_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Berry/berry_angry_pin.png",
      "/pins/Berry/berry_clap_pin.png",
      "/pins/Berry/berry_facepalm_pin.png",
      "/pins/Berry/berry_gg_pin.png",
      "/pins/Berry/berry_happy_pin.png",
      "/pins/Berry/berry_hypercharge_pin.png",
      "/pins/Berry/berry_phew_pin.png",
      "/pins/Berry/berry_pin.png",
      "/pins/Berry/berry_sad_pin.png",
      "/pins/Berry/berry_special_pin.png",
      "/pins/Berry/berry_starrforce_pin.png",
      "/pins/Berry/berry_thanks_pin.png"
    ],
    "buffies": []
  },
  "82": {
    "id": "82",
    "apiId": 16000083,
    "name": "克兰西",
    "enName": "Clancy",
    "slug": "clancy",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "克兰西没有回头路（除非汉克命令他这样做）。他完全接受了他的假甲壳类生活，愿意为他的战友做任何事。",
    "story": "",
    "avatar": "/HeroAvatars/16000083.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000083.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000083.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7600,
      "damage": 700,
      "range": "7.67 (远)",
      "reload": "2 秒 (慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000772,
        "name": "侦察",
        "desc": "克兰西 使用 2 标记开始比赛。",
        "icon": "/starpowers/Clancy/clancy_starpower_01.png"
      },
      {
        "id": 23000773,
        "name": "打气",
        "desc": "每次击倒敌人时，克兰西都会重新装填所有弹药。",
        "icon": "/starpowers/Clancy/clancy_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000774,
        "name": "敏捷的射击",
        "desc": "克兰西获得双倍标记，持续 5 秒。（冷却：12 秒）",
        "icon": "/gadgets/Clancy/clancy_gadget_01.png"
      },
      {
        "id": 23000775,
        "name": "战术撤退",
        "desc": "克兰西冲刺并重新装填 1 弹药（冷却：13 秒）",
        "icon": "/gadgets/Clancy/clancy_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "克兰西·极限充能",
      "desc": "倍率：30%。激活后，克兰西超级的彩弹将刺穿敌人，并在达到最大射程后返回到他身边。然而，如果射弹在返回他身边时接触到墙壁，它们就会消失。返回克兰西时，射弹不会造成伤害缩放。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Clancy/clancy_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Clancy/clancy_angry_pin.png",
      "/pins/Clancy/clancy_clap_pin.png",
      "/pins/Clancy/clancy_facepalm_pin.png",
      "/pins/Clancy/clancy_gg_pin.png",
      "/pins/Clancy/clancy_happy_pin.png",
      "/pins/Clancy/clancy_phew_pin.png",
      "/pins/Clancy/clancy_pin.png",
      "/pins/Clancy/clancy_sad_pin.png",
      "/pins/Clancy/clancy_special_pin.png",
      "/pins/Clancy/clancy_thanks_pin.png"
    ],
    "buffies": []
  },
  "83": {
    "id": "83",
    "apiId": 16000084,
    "name": "阿萌",
    "enName": "Moe",
    "slug": "moe",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "莫是一只失明的老鼠，被格罗姆发现住在斯塔尔公园的下水道里，然后格罗姆很快收养了他！现在，莫伊是斯塔尔公园维护团队的一员，他使用他的特殊挖掘机“钻机”来穿越下水道隧道……并且还对整个公园造成了一些破坏，这让阿什非常沮丧。",
    "story": "",
    "avatar": "/HeroAvatars/16000084.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000084.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000084.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7200,
      "damage": 500,
      "range": "7.67 (远)",
      "reload": "1.5 秒 (普通) 0.22 秒 (Driller; 极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000804,
        "name": "跳石",
        "desc": "萌的普通攻击会再次反弹。攻击范围保持不变。",
        "icon": "/starpowers/Moe/moe_starpower_1.png"
      },
      {
        "id": 23000805,
        "name": "超速罚单",
        "desc": "莫伊的钻工提高了行进速度。",
        "icon": "/starpowers/Moe/moe_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000806,
        "name": "狡猾的挖掘",
        "desc": "莫伊挖了一些\\（冷却：13 秒）",
        "icon": "/gadgets/Moe/moe_gadget_1.png"
      },
      {
        "id": 23000807,
        "name": "老鼠赛跑",
        "desc": "莫驾驶他的钻机冲刺一小段距离，在此过程中摧毁墙壁并击退争斗者。（冷却：16 秒）",
        "icon": "/gadgets/Moe/moe_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "阿萌·极限充能",
      "desc": "倍率：30%。激活后，莫伊的超级在地下挖掘时将拥有更远的射程，同时冲刺速度也会提高两倍，而他的替代形态的持续时间将是原来的三倍。此外，在超充能期间，他的替代形态的攻击范围将加倍。 阿萌 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Moe/moe_angry_pin.png",
      "/pins/Moe/moe_clap_pin.png",
      "/pins/Moe/moe_facepalm_pin.png",
      "/pins/Moe/moe_GG_pin.png",
      "/pins/Moe/moe_happy_pin.png",
      "/pins/Moe/moe_moon_driller_moe_pin.png",
      "/pins/Moe/moe_phew_pin.png",
      "/pins/Moe/moe_pin.png",
      "/pins/Moe/moe_sad_pin.png",
      "/pins/Moe/moe_special_pin.png",
      "/pins/Moe/moe_thanks_pin.png"
    ],
    "buffies": []
  },
  "84": {
    "id": "84",
    "apiId": 16000085,
    "name": "健次",
    "enName": "Kenji",
    "slug": "kenji",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "这位技艺高超的寿司厨师在斯塔尔公园经营着自己的餐厅，过着健康的生活，但感觉他试图隐瞒自己的过去……尽管他的寿司味道很好，但没人在乎！",
    "story": "",
    "avatar": "/HeroAvatars/16000085.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000085.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000085.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8000,
      "damage": 750,
      "range": "2.67 (dash; 近)",
      "reload": "1 秒 (极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000815,
        "name": "研究了刀锋",
        "desc": "Slashimi 的切片具有 30% 更长的射程",
        "icon": "/starpowers/Kenji/kenji_starpower_1.png"
      },
      {
        "id": 23000816,
        "name": "握寿司复仇者",
        "desc": "避免伤害 5 秒后，下次敌人攻击时获得 60% 伤害减免。",
        "icon": "/starpowers/Kenji/kenji_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000817,
        "name": "大石冲刺",
        "desc": "健次 的基本攻击仅在接下来的 3 秒内使用冲刺。（冷却：15 秒）",
        "icon": "/gadgets/Kenji/kenji_gadget_1.png"
      },
      {
        "id": 23000818,
        "name": "细卷疗愈",
        "desc": "健次 立即治疗过去 3 秒内受到的 50% 伤害。（冷却：17 秒）",
        "icon": "/gadgets/Kenji/kenji_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "健次·极限充能",
      "desc": "倍率：25%。激活后，健次 的超级技能会将敌人拉向 1 格内的斜线中心周围 5 格半径内的敌人，持续 1 秒。他还获得 20% 的速度、5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Kenji/kenji_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Kenji/kenji_angry_pin.png",
      "/pins/Kenji/kenji_aodaisho_pin.png",
      "/pins/Kenji/kenji_clap_pin.png",
      "/pins/Kenji/kenji_facepalm_pin.png",
      "/pins/Kenji/kenji_GG_pin.png",
      "/pins/Kenji/kenji_happy_pin.png",
      "/pins/Kenji/kenji_hebi_kenji_pin.png",
      "/pins/Kenji/kenji_mamushi_kenji_pin.png",
      "/pins/Kenji/kenji_phew_pin.png",
      "/pins/Kenji/kenji_pin.png",
      "/pins/Kenji/kenji_sad_pin.png",
      "/pins/Kenji/kenji_special_pin.png"
    ],
    "buffies": []
  },
  "85": {
    "id": "85",
    "apiId": 16000086,
    "name": "谢德",
    "enName": "Shade",
    "slug": "shade",
    "role": "刺客",
    "class": "Assassin",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "除了它有一些很酷的太阳镜之外，人们对这堆神秘的衣服知之甚少。被格斯发现后，谢德被赋予了名字，现在这两个怪异的斗士一起出没于幽灵站。",
    "story": "",
    "avatar": "/HeroAvatars/16000086.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000086.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000086.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 800,
      "range": "3.67 (近)",
      "reload": "0.8 秒 (极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000832,
        "name": "幽灵极速者",
        "desc": "用谢德的主要攻击中心击中对手可以短暂提升移动速度。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000832.png"
      },
      {
        "id": 23000833,
        "name": "硬化连帽衫",
        "desc": "阴影在虚体形态下获得 30% 伤害减免。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000833.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000834,
        "name": "长臂",
        "desc": "下一次主要攻击的射程更长 50%。（冷却：15 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000834.png"
      },
      {
        "id": 23000835,
        "name": "跳跃惊吓",
        "desc": "阴影会惊吓附近的敌人，使其减速 4 秒。（冷却：9 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000835.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "谢德·极限充能",
      "desc": "倍率：40%。激活后，如果暗影在超充能持续时间内使用其超级，则其主要攻击现在对任何部分造成双倍伤害。然而，如果Hypercharged 超级技能在极限充能结束后激活，则主要攻击伤害恢复正常。暗影还获得 25% 的速度提升以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Shade/shade_angry_pin.png",
      "/pins/Shade/shade_clap_pin.png",
      "/pins/Shade/shade_facepalm_pin.png",
      "/pins/Shade/shade_gg_pin.png",
      "/pins/Shade/shade_happy_pin.png",
      "/pins/Shade/shade_phew_pin.png",
      "/pins/Shade/shade_pin.png",
      "/pins/Shade/shade_sad_pin.png",
      "/pins/Shade/shade_special_pin.png",
      "/pins/Shade/shade_thanks_pin.png"
    ],
    "buffies": []
  },
  "86": {
    "id": "86",
    "apiId": 16000087,
    "name": "珠珠",
    "enName": "Juju",
    "slug": "juju",
    "role": "投弹手",
    "class": "Artillery",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "珠珠 拥有一家奇特商店，到处都被她跟踪\\",
    "story": "",
    "avatar": "/HeroAvatars/16000087.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000087.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000087.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6200,
      "damage": 800,
      "range": "6.33 (普通)",
      "reload": "1.6 秒 (普通) 2 秒 (while Voodoo Chile is active)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000848,
        "name": "守卫的格里斯-格里斯",
        "desc": "格里斯-格里斯被召唤时带有防护罩。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000848.png"
      },
      {
        "id": 23000849,
        "name": "麻针",
        "desc": "Gris-Gris 的攻击现在还会使敌人减速 秒",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000849.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000850,
        "name": "巫毒智利",
        "desc": "朱朱接下来的主攻，拥有全部三种元素的威力。（冷却：14 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000850.png"
      },
      {
        "id": 23000851,
        "name": "元素师",
        "desc": "珠珠根据她所处的当前环境获得暂时的增益。 地球：减少伤害草：隐形水：增加移动速度（冷却：17 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000851.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "珠珠·极限充能",
      "desc": "倍率：40%。激活后，珠珠 会生成 Gris-Gris，其移动速度提高 25%，生命值提高 20%，造成的伤害提高 20%，并发射更大的针。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Juju/juju_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Juju/juju_angry_pin.png",
      "/pins/Juju/juju_clap_pin.png",
      "/pins/Juju/juju_faceplam_pin.png",
      "/pins/Juju/juju_gg_pin.png",
      "/pins/Juju/juju_happy_pin.png",
      "/pins/Juju/juju_phew_pin.png",
      "/pins/Juju/juju_pin.png",
      "/pins/Juju/juju_queen_juju_pin.png",
      "/pins/Juju/juju_sad_pin.png",
      "/pins/Juju/juju_special_pin.png",
      "/pins/Juju/juju_thanks_pin.png"
    ],
    "buffies": []
  },
  "87": {
    "id": "87",
    "apiId": 16000088,
    "name": "巴斯光年",
    "enName": "Buzz Lightyear",
    "slug": "buzz-lightyear",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "巴斯光年已抵达斯塔尔公园！巴兹从一次意外送到礼品店开始了他的旅程，此后他的三种不同的争吵模式给争吵者留下了深刻的印象！",
    "story": "",
    "avatar": "https://cdn.brawlify.com/brawlers/borders/16000088.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000088.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000088.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 0,
      "range": "-",
      "reload": "-",
      "speed": "720 (Laser Mode; 普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000866,
        "name": "激光模式",
        "desc": "巴斯光年的激光射程更远，使他能够击中更远的目标。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000866.png"
      },
      {
        "id": 23000867,
        "name": "军刀模式",
        "desc": "巴斯光年通过吸收受到的伤害并从增加的生命值中获益来为他的超级充电。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000867.png"
      },
      {
        "id": 23000868,
        "name": "翼模式",
        "desc": "巴兹展开翅膀，获得移动速度的提升。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23000868.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000869,
        "name": "涡轮增压器",
        "desc": "巴斯光年启动涡轮，朝当前方向冲刺。",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000869.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "巴斯光年·极限充能",
      "desc": "倍率：Hypercharge Multiplier\n\t\n\t45% (Laser Mode)30% (Saber Mode and Wing Mode)。激活后，巴斯光年在激光模式下获得 26% 速度提升、25% 伤害提升以及 5% 护盾提升，在军刀模式下获得 25% 速度和护盾提升以及 5% 伤害提升，或者在翅膀模式下获得 24% 速度提升、25% 伤害提升以及 5% 护盾提升，而他的 3 个超级技能没有任何变化。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "88": {
    "id": "88",
    "apiId": 16000089,
    "name": "谜宝",
    "enName": "Meeple",
    "slug": "meeple",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "谜宝 了解现有每一款棋盘游戏的规则，如果您违反了这些规则……好吧，我们只是说您不想违反它们。他们讨厌作弊者和违反规则的人。只有一个例外......谜宝 自己！",
    "story": "",
    "avatar": "/HeroAvatars/16000089.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000089.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000089.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6600,
      "damage": 2520,
      "range": "7.67 (远)",
      "reload": "1.7 秒 (普通)  1.417 秒 (with Rule Bending) 2 秒 (while Mansions of Meeple is active) 1.667 秒 (with Rule Bending and while Mansions of Meeple is active)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000875,
        "name": "请勿通过 前往",
        "desc": "当您射击环境时，会造成 540 点更多伤害。",
        "icon": "/starpowers/Meeple/meeple_starpower_1.png"
      },
      {
        "id": 23000876,
        "name": "规则弯曲",
        "desc": "关键成功还会使该区域内的盟友装填速度提高 %。",
        "icon": "/starpowers/Meeple/meeple_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000877,
        "name": "米普尔豪宅",
        "desc": "米普尔的下一次攻击会在撞击区域周围创建骰子塔并造成 800 点伤害。（冷却：22 秒）",
        "icon": "/gadgets/Meeple/meeple_gadget_1.png"
      },
      {
        "id": 23000878,
        "name": "愤怒退出",
        "desc": "米普尔愤怒地攻击附近的敌人，将他们击晕并击退。米普尔的生命值越少，眩晕和击退效果就会增加。（冷却：18 秒）",
        "icon": "/gadgets/Meeple/meeple_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "谜宝·极限充能",
      "desc": "倍率：40%。激活后，谜宝 的 超级技能 半径扩大 30%，允许 谜宝 和盟友在其半径范围内穿过墙壁和水面。如果 谜宝 或盟友脱离 Hypercharged 超级技能，他们仍然可以穿过墙壁并越过水面额外 0.5 秒。 谜宝 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Meeple/meeple_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Meeple/meeple_angry_pin.png",
      "/pins/Meeple/meeple_clap_pin.png",
      "/pins/Meeple/meeple_facepalm_pin.png",
      "/pins/Meeple/meeple_gg_pin.png",
      "/pins/Meeple/meeple_happy_pin.png",
      "/pins/Meeple/meeple_mystic_meeple_pin.png",
      "/pins/Meeple/meeple_phew_pin.png",
      "/pins/Meeple/meeple_pin.png",
      "/pins/Meeple/meeple_sad_pin.png",
      "/pins/Meeple/meeple_special_pin.png",
      "/pins/Meeple/meeple_thanks_pin.png"
    ],
    "buffies": []
  },
  "89": {
    "id": "89",
    "apiId": 16000090,
    "name": "奥利",
    "enName": "Ollie",
    "slug": "ollie",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "奥利骑着他定制的悬浮滑板在斯塔尔公园周围行驶，磨擦铁轨并制造麻烦！作为一名老派嘻哈音乐迷，奥利无论走到哪里都会播放他最喜爱的歌曲。他的音乐确实具有感染力。斗士们一听就会情不自禁地跳舞。",
    "story": "",
    "avatar": "/HeroAvatars/16000090.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000090.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000090.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10800,
      "damage": 1800,
      "range": "6.33 (普通)",
      "reload": "1.8 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000883,
        "name": "踢推",
        "desc": "当靠近墙壁时，奥利会启动气垫板并获得 20% 额外移动速度。",
        "icon": "/starpowers/Ollie/ollie_starpower_1.png"
      },
      {
        "id": 23000884,
        "name": "叛徒",
        "desc": "带着他的超级冲锋后，奥利在 3000 秒内获得了 4 个腐烂护盾。",
        "icon": "/starpowers/Ollie/ollie_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000885,
        "name": "调节",
        "desc": "奥利跳跃并进行猛烈的踢腿翻转，催眠他落地处的所有敌人 1 秒。（冷却：20 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000885.png"
      },
      {
        "id": 23000886,
        "name": "所有人都注视着我",
        "desc": "奥利的下一次攻击将催眠任何击中的敌人 1 秒。（冷却：15 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23000886.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "奥利·极限充能",
      "desc": "倍率：25%。激活后，奥利的超级会增加射程和冲刺速度。在冲刺结束时，奥利将不再丢失弹药，并且音乐爆炸效果范围的半径扩大了 50%。此外，他的超级伤害和超级充能率略高。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Ollie/ollie_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Ollie/ollie_angry_pin.png",
      "/pins/Ollie/ollie_clap_pin.png",
      "/pins/Ollie/ollie_facepalm_pin.png",
      "/pins/Ollie/ollie_gg_pin.png",
      "/pins/Ollie/ollie_happy_pin.png",
      "/pins/Ollie/ollie_pharaollie_pin.png",
      "/pins/Ollie/ollie_phew_pin.png",
      "/pins/Ollie/ollie_pin.png",
      "/pins/Ollie/ollie_sad_pin.png",
      "/pins/Ollie/ollie_special_pin.png",
      "/pins/Ollie/ollie_thanks_pin.png"
    ],
    "buffies": []
  },
  "90": {
    "id": "90",
    "apiId": 16000091,
    "name": "露米",
    "enName": "Lumi",
    "slug": "lumi",
    "role": "输出",
    "class": "Damage Dealer",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "卢米 (露米) 是一位充满激情的金属乐迷和才华横溢的鼓手，当她在斯塔尔公园 (Starr Park) 找到工作时，她用鼓槌换成了晨星。她掌控着冰与火的元素，这体现了她害羞的本性和她对音乐的炽热热情！",
    "story": "",
    "avatar": "/HeroAvatars/16000091.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000091.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000091.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7000,
      "damage": 600,
      "range": "8 (远)",
      "reload": "-",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000905,
        "name": "42% 烧毁",
        "desc": "露米 的 Blast Beat 产生的爆炸也使该区域着火了 360 秒。火灾伤害也会随着爆炸伤害而增加。最大爆炸每秒造成的伤害：432",
        "icon": "/starpowers/Lumi/lumi_starpower_1.png"
      },
      {
        "id": 23000906,
        "name": "半场",
        "desc": "卢米可以使被她召回的晨星击中的敌人减速 1 秒。",
        "icon": "/starpowers/Lumi/lumi_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000907,
        "name": "打灯",
        "desc": "卢米点燃地面上的晨星，产生火焰，对附近的敌人造成 288 秒伤害。每秒伤害：3.9（冷却：14 秒）",
        "icon": "/gadgets/Lumi/lumi_gadget_1.png"
      },
      {
        "id": 23000908,
        "name": "严酷和冻伤",
        "desc": "露米 在地面上的晨星周围产生冰冷的风，在 3.9 秒内形成光滑的表面。（冷却：23 秒）",
        "icon": "/gadgets/Lumi/lumi_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "露米·极限充能",
      "desc": "倍率：40%。激活后，卢米的超级在最大爆炸区域的每一侧都会再获得一次爆炸，同样使敌人在击中时 1 秒内无法移动。如果您使用超级并在使用超级后立即激活超充能，侧面爆炸也会出现。她还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [
      "/pins/Lumi/lumi_angry_pin.png",
      "/pins/Lumi/lumi_clap_pin.png",
      "/pins/Lumi/lumi_facepalm_pin.png",
      "/pins/Lumi/lumi_gg_pin.png",
      "/pins/Lumi/lumi_happy_pin.png",
      "/pins/Lumi/lumi_phew_pin.png",
      "/pins/Lumi/lumi_pin.png",
      "/pins/Lumi/lumi_sad_pin.png",
      "/pins/Lumi/lumi_special_pin.png",
      "/pins/Lumi/lumi_thanks_pin.png"
    ],
    "buffies": []
  },
  "91": {
    "id": "91",
    "apiId": 16000092,
    "name": "芬克斯",
    "enName": "Finx",
    "slug": "finx",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "芬克斯是斯塔尔公园逃生室的主人，他的任务是帮助游客完成任务。相反，他利用自己的时间控制能力来制造恶作剧！另外，他喜欢猫。",
    "story": "",
    "avatar": "/HeroAvatars/16000092.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000092.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000092.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 900,
      "range": "8.33 (middle; 远)",
      "reload": "1.3 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000915,
        "name": "象形文字停止",
        "desc": "芬克斯将主要攻击击中的所有敌方乱斗者的装填速度降低 25%，持续 3 秒。",
        "icon": "/starpowers/Finx/finx_starpower_1.png"
      },
      {
        "id": 23000916,
        "name": "底漆",
        "desc": "仅芬克斯的射弹造成的伤害会因时间扭曲而加速，每次都会使超级持续时间增加 0.25 秒。",
        "icon": "/starpowers/Finx/finx_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000917,
        "name": "回到夹具",
        "desc": "芬克斯 及时后退，回到 3 秒前的位置和弹药。（冷却：18 秒）",
        "icon": "/gadgets/Finx/finx_gadget_1.png"
      },
      {
        "id": 23000918,
        "name": "无处可逃",
        "desc": "芬克斯主要攻击的下一个投射物会及时冻结敌人 2 秒，使他们在这段时间内无法采取行动，但也使他们免受任何伤害。（冷却：17 秒）",
        "icon": "/gadgets/Finx/finx_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "芬克斯·极限充能",
      "desc": "倍率：30%。激活后，芬克斯创造了两个超级，第二个超级围绕着他，跟随他。这些不会从他的正常超级中删除该区域，反之亦然。他周围的超级效果不会与超级充能叠加；即使超级区域重叠，我方攻击也不会加速两倍，敌人攻击也不会减速两倍。芬克斯还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Finx/finx_hypercharge.png"
    },
    "skins": [],
    "pins": [
      "/pins/Finx/finn_sad_pin.png",
      "/pins/Finx/finn_special_pin.png",
      "/pins/Finx/finn_thanks_pin.png",
      "/pins/Finx/finx_angry_pin.png",
      "/pins/Finx/finx_clap_pin.png",
      "/pins/Finx/finx_facepalm_pin.png",
      "/pins/Finx/finx_gg_pin.png",
      "/pins/Finx/finx_happy_pin.png",
      "/pins/Finx/finx_phew_pin.png",
      "/pins/Finx/finx_pin.png"
    ],
    "buffies": []
  },
  "92": {
    "id": "92",
    "apiId": 16000093,
    "name": "载勇",
    "enName": "Jae-Yong",
    "slug": "jae-yong",
    "role": "辅助",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "白天，在勇是普通的办公室职员。到了晚上，他就是卡拉OK之神……至少他是这么认为的。陪审团对他的歌唱技巧仍然没有定论。",
    "story": "",
    "avatar": "/HeroAvatars/16000093.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000093.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000093.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 750,
      "range": "8.33 (远)",
      "reload": "1.5 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000929,
        "name": "人群变得温和",
        "desc": "靠近队友可以让 Jae-yong 在范围内为每个队友提供 10% 的速度提升。",
        "icon": "/starpowers/Jae-Yong/Jae-Yong_starpower_1.png"
      },
      {
        "id": 23000930,
        "name": "超高音",
        "desc": "主要攻击现在对每个被刺穿的目标造成额外的 20% 伤害。",
        "icon": "/starpowers/Jae-Yong/Jae-Yong_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000931,
        "name": "周末勇士",
        "desc": "造成区域伤害并增加主要攻击伤害，持续 1680 秒。（冷却：15 秒）",
        "icon": "/gadgets/Jae-Yong/Jae-Yong_gadget_1.png"
      },
      {
        "id": 23000932,
        "name": "是时候唱一首慢歌了",
        "desc": "Jae-yong 减慢了他周围的敌人的速度，他的攻击会留下减缓文件速度 5 秒的痕迹。（冷却：12 秒）",
        "icon": "/gadgets/Jae-Yong/Jae-Yong_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "载勇·极限充能",
      "desc": "倍率：3000%。激活后，在勇的超级自动充能速度提高了 6 倍，使其冷却时间缩短至约 1.11 秒，并且每次激活超级的效果增加三分之一。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Jae-Yong/jae_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "93": {
    "id": "93",
    "apiId": 16000094,
    "name": "风姬",
    "enName": "Kaze",
    "slug": "kaze",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "Ultra Legendary",
      "color": "#e1fb2a"
    },
    "desc": "风被父母当作活生生的武器抚养长大，但这并不是她想要的生活。与 健次 一起逃到斯塔尔公园后，她现在可以按照自己的意愿生活。然而，她仍然在生活的两个方面之间徘徊，作为一个卑微的艺伎和一个致命的忍者。",
    "story": "",
    "avatar": "/HeroAvatars/16000094.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000094.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000094.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 0,
      "damage": 0,
      "range": "-",
      "reload": "-",
      "speed": "820 (geisha; 极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000938,
        "name": "先进技术",
        "desc": "在攻击点击中敌人还会使他们减速 30%，持续 2.5 秒",
        "icon": "/starpowers/Kaze/kaze_starpower_1.png"
      },
      {
        "id": 23000939,
        "name": "包含小费",
        "desc": "移除最初陷入风扇风暴的斗士的 34% 弹药",
        "icon": "/starpowers/Kaze/kaze_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000940,
        "name": "亲切的主人",
        "desc": "切换到忍者形态并获得 30% 移动速度，持续 2.5 秒",
        "icon": "/gadgets/Kaze/kaze_gadget_1.png"
      },
      {
        "id": 23000941,
        "name": "变身术",
        "desc": "切换到忍者方面并获得短暂的隐身效果",
        "icon": "/gadgets/Kaze/kaze_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "风姬·极限充能",
      "desc": "倍率：Hypercharge Multiplier\n\t\n\t30%。当在艺伎方面激活时，风的风暴现在每秒造成 136 点伤害，包括对敌人的超充能伤害增益，在 5 秒内最多造成 680 点伤害。这仅影响风暴中心击中的敌人，仅边缘击中的敌人不会受到影响。更具体地说，敌人的碰撞箱中心不得位于边缘 1 格内。该效果可以与多个风暴叠加。",
      "icon": "/hypercharges/Kaze/kaze_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "94": {
    "id": "94",
    "apiId": 16000095,
    "name": "鳄梨",
    "enName": "Alli",
    "slug": "alli",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "艾莉是爱情沼泽的害羞机械师。她喜欢亲自动手，要么修理坏掉的机器，要么……无情地跟踪其他乱斗者。如果你深夜走路回家时听到奇怪的声音，那可能是阿里想打招呼。",
    "story": "",
    "avatar": "/HeroAvatars/16000095.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000095.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000095.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7800,
      "damage": 2600,
      "range": "2.33 (dash; 近)",
      "reload": "2.1 秒 (dash; 慢) 2.8 秒 (jump; 极慢) 1.68 秒 (dash; with You Better Run, You Better Take Cover) 2.24 秒 (jump; with You Better Run, You Better Take Cover)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000989,
        "name": "蜥蜴四肢",
        "desc": "愤怒时，阿里在脱离战斗后仅 1.5 秒后就能更快地恢复生命值。",
        "icon": "/starpowers/Alli/alli_starpower_1.png"
      },
      {
        "id": 23000990,
        "name": "你最好跑，最好躲起来",
        "desc": "愤怒时，鳄梨 的重新装弹速度会加快 25% 速度。",
        "icon": "/starpowers/Alli/alli_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23000991,
        "name": "喂鳄鱼",
        "desc": "下一次主要攻击会治疗阿里所造成伤害的 100%。（冷却：10 秒）",
        "icon": "/gadgets/Alli/alli_gadget_1.png"
      },
      {
        "id": 23000992,
        "name": "冷血",
        "desc": "鳄梨 在接下来的 4 秒内变得愤怒。仅当敌人可见时才能激活。（冷却：17 秒）",
        "icon": "/gadgets/Alli/alli_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "鳄梨·极限充能",
      "desc": "倍率：25%。激活后，阿里超级技能的额外伤害现在为敌人最大生命值的 25%，而不是当前生命值。此外，在超充能期间，即使艾丽没有使用超级技能，她的攻击也会恢复其攻击造成伤害的 20%。阿里还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。此外，超充能伤害提升会增加她的超级的最小和最大额外伤害，以及她的特殊目标伤害。",
      "icon": "/hypercharges/Alli/alli_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "95": {
    "id": "95",
    "apiId": 16000096,
    "name": "查克",
    "enName": "Trunk",
    "slug": "trunk",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "树干是一棵看起来不可思议的树。不可能是因为特兰克实际上是一群超智能蚂蚁控制着一棵假机械树？不，那太荒谬了。",
    "story": "",
    "avatar": "/HeroAvatars/16000096.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000096.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000096.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10400,
      "damage": 1050,
      "range": "3.33 (近)",
      "reload": "1.5 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23000998,
        "name": "新昆虫霸主",
        "desc": "蚂蚁还会减少敌人 15% 的伤害",
        "icon": "/starpowers/Trunk/trunk_starpower_1.png"
      },
      {
        "id": 23000999,
        "name": "殖民地侦察兵",
        "desc": "蚂蚁揭露隐藏的敌人。",
        "icon": "/starpowers/Trunk/trunk_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001000,
        "name": "为了女王",
        "desc": "树干瞬间将蚂蚁散布到大片区域。（冷却：7 秒）",
        "icon": "/gadgets/Trunk/trunk_gadget_1.png"
      },
      {
        "id": 23001001,
        "name": "工蚁",
        "desc": "躯干在接下来的 2 秒内从受到的第一个伤害源中恢复。（冷却：16 秒）",
        "icon": "/gadgets/Trunk/trunk_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "查克·极限充能",
      "desc": "倍率：35%。激活后，特兰克的超级技能不再使他们在击中目标时移动速度变慢。特兰克的冲刺仅造成初始冲击伤害，但会在被超级击中的敌人身上留下蚂蚁，并产生持续伤害效果。超级充能蚂蚁会在 1 秒内造成非常高的伤害，但是，与普通超级相比，它们充能的超级要少得多。树干还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Trunk/trunk_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "96": {
    "id": "96",
    "apiId": 16000097,
    "name": "蜜娜",
    "enName": "Mina",
    "slug": "mina",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "米娜是一名街舞女孩，她将卡波耶拉融入她的霹雳舞战斗中，就像这是第二天性一样。她和 奥利 一起在 SK8 Beats 闲逛，并使用他的混音带练习新动作！",
    "story": "",
    "avatar": "/HeroAvatars/16000097.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000097.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000097.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7200,
      "damage": 800,
      "range": "8 (first sequence; 远)",
      "reload": "1.4 秒 (快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001039,
        "name": "祖姆祖姆祖姆",
        "desc": "米娜的连击攻击 3 还可以治疗所造成伤害的 50%。",
        "icon": "/starpowers/Mina/mina_starpower_1.png"
      },
      {
        "id": 23001040,
        "name": "被吹走",
        "desc": "米娜的超级能力也能当场根除敌人。",
        "icon": "/starpowers/Mina/mina_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001041,
        "name": "风车",
        "desc": "创建风墙，阻挡射弹 1.5 秒。（冷却：22 秒）",
        "icon": "/gadgets/Mina/mina_gadget_1.png"
      },
      {
        "id": 23001042,
        "name": "变调夹-什么？",
        "desc": "米娜的下一个超级一旦击中就会立即充能。（冷却：22 秒）",
        "icon": "/gadgets/Mina/mina_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "蜜娜·极限充能",
      "desc": "倍率：30%。激活后，米娜会制造 3 场锥形飓风，其行为与她普通超级中的飓风类似。然而，Hypercharged Supers 的射弹速度更快，可以从墙壁上反弹，并且还具有更强的 5 格拉力效果。请注意，射弹从墙壁弹回后，超级会拉向射弹撞击墙壁的位置，而不是拉向米娜的位置。她还获得 20% 的速度提升、5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Mina/mina_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "97": {
    "id": "97",
    "apiId": 16000098,
    "name": "兹奇",
    "enName": "Ziggy",
    "slug": "ziggy",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "兹奇 是一位超级戏剧魔术师，擅长在表演中使用电力。他有点自以为是，但是嘿，他真的可以控制闪电。请记住...它们不是诡计，而是幻觉。",
    "story": "",
    "avatar": "/HeroAvatars/16000098.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000098.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000098.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6400,
      "damage": 1900,
      "range": "7.33 (远)",
      "reload": "1.8 秒 (普通)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001047,
        "name": "雷霆万钧",
        "desc": "被 兹奇 的 超级技能 伤害的英雄会被减速 20% ，持续 1 秒。",
        "icon": "/starpowers/Ziggy/ziggy_starpower_1.png"
      },
      {
        "id": 23001048,
        "name": "伟大的齐吉尼",
        "desc": "用雷击击中下一次主攻击的伤害会增加 18%。",
        "icon": "/starpowers/Ziggy/ziggy_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001049,
        "name": "电动洗牌",
        "desc": "兹奇 每秒用闪电击中最近的敌人，持续 5 秒。这些攻击不需要弹药。（冷却：17 秒）",
        "icon": "/gadgets/Ziggy/ziggy_gadget_1.png"
      },
      {
        "id": 23001050,
        "name": "现在你看到我了...",
        "desc": "下一次闪电也会将 兹奇 传送到同一位置。（冷却：13 秒）",
        "icon": "/gadgets/Ziggy/ziggy_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "兹奇·极限充能",
      "desc": "倍率：35%。激活后，兹奇 的下一个超级将在达到最大距离后返回。与大多数返回能力不同，风暴不会返回到他当前的位置，而是返回到 兹奇 在达到最大距离时的位置。风暴的最长寿命实际上加倍，但不再有最短寿命。 兹奇 还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Ziggy/ziggy_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "98": {
    "id": "98",
    "apiId": 16000099,
    "name": "皮尔斯",
    "enName": "Pierce",
    "slug": "pierce",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "传奇",
      "color": "#fff11ev"
    },
    "desc": "你认识泳池救生员吗？皮尔斯就是其中之一。只不过他射杀了人而不是救了他们。好吧，也许他根本不像救生员。当巴兹发现泳池里尿得太多时，他叫皮尔斯来“清理”。",
    "story": "",
    "avatar": "/HeroAvatars/16000099.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000099.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000099.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6000,
      "damage": 950,
      "range": "10 (极远)",
      "reload": "3 秒 (full ammo bar; 极慢)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001060,
        "name": "使命游泳",
        "desc": "皮尔斯的最后弹药也会使敌人减速 25%。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001060.png"
      },
      {
        "id": 23001061,
        "name": "滑动 N 狙击",
        "desc": "收集炮弹时，皮尔斯会获得短暂的移动速度爆发 (15%)。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001061.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001062,
        "name": "无底弹匣",
        "desc": "重新装填 1 弹药并在皮尔斯旁边扔下一枚炮弹。（冷却：18 秒）",
        "icon": "/gadgets/Pierce/pierce_gadget_01.png"
      },
      {
        "id": 23001063,
        "name": "你们只吵架两次",
        "desc": "皮尔斯将吸收所有炮弹并为每一枚炮弹获得 1200 护盾，同时还会击退附近的敌人。（冷却：13 秒）",
        "icon": "/gadgets/Pierce/pierce_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "皮尔斯·极限充能",
      "desc": "倍率：40%。激活后强化超级技能效果，让英雄在关键时刻爆发出更强战力。",
      "icon": "/hypercharges/Pierce/pierce_hypercharge.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "99": {
    "id": "99",
    "apiId": 16000100,
    "name": "琪琪",
    "enName": "Gigi",
    "slug": "gigi",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "吉吉是一个被诅咒的木偶，给人一种令人不安的感觉，她和她粘在一起的魔术师手套从未被发现分开。你可以在奇特商店找到她，在书架之间跳舞。",
    "story": "",
    "avatar": "/HeroAvatars/16000100.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000100.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000100.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 8200,
      "damage": 1200,
      "range": "2.33 (近)",
      "reload": "0.22 秒 (2.2 秒 max; 极快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001068,
        "name": "帘布层保护",
        "desc": "如果 2 秒内没有受到任何伤害，则超级充能率提高 30%",
        "icon": "/starpowers/Gigi/gigi_starpower_1.png"
      },
      {
        "id": 23001069,
        "name": "伸出援助之手",
        "desc": "影子木偶现在在充电后可以恢复 2160 的生命值。",
        "icon": "/starpowers/Gigi/gigi_starpower_2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001070,
        "name": "更长的弦",
        "desc": "超级充电面积更大。（冷却：18 秒）",
        "icon": "/gadgets/Gigi/gigi_gadget_1.png"
      },
      {
        "id": 23001071,
        "name": "失踪法",
        "desc": "吉吉创造了一个区域，让自己和盟友在里面隐形。持续 3 秒。（冷却：15 秒）",
        "icon": "/gadgets/Gigi/gigi_gadget_2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "琪琪·极限充能",
      "desc": "倍率：35%。激活后，吉吉在最初传送时以及传送回来时也会立即对她周围的区域造成伤害。她还获得 20% 的速度提升、5% 的伤害和护盾提升。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "101": {
    "id": "101",
    "apiId": 16000102,
    "name": "西里乌斯",
    "enName": "Sirius",
    "slug": "sirius",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "Ultra Legendary",
      "color": "#e1fb2a"
    },
    "desc": "他的身份和他的力量一样神秘。他在斯塔尔公园拥有第一个景点，但有传言说他被不公平地赶了出来，并禁止再回来。现在……他回来复仇了。",
    "story": "",
    "avatar": "/HeroAvatars/16000102.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000102.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000102.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6800,
      "damage": 600,
      "range": "7.33 (远)",
      "reload": "1.6 秒 (普通)",
      "speed": "720 (普通)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001189,
        "name": "黄昏奔跑者",
        "desc": "阴影具有 +% 移动速度。",
        "icon": "/starpowers/Sirius/sirius_starpower_01.png"
      },
      {
        "id": 23001190,
        "name": "最黑暗的斯塔尔",
        "desc": "每一次暗影打击击中都算作 2 次来收集争斗者暗影，而不是 1 次。",
        "icon": "/starpowers/Sirius/sirius_starpower_02.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001191,
        "name": "斯塔尔诞生",
        "desc": "天狼星发射一枚射弹，击中时召唤暗影，同时使击中目标减速 % 秒。（冷却：20 秒）",
        "icon": "/gadgets/Sirius/sirius_gadget_01.png"
      },
      {
        "id": 23001192,
        "name": "阴影大师",
        "desc": "召唤的暗影回到小天狼星身边，小天狼星治愈了他们 % 的生命值。（冷却：13 秒）",
        "icon": "/gadgets/Sirius/sirius_gadget_02.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "西里乌斯·极限充能",
      "desc": "倍率：14%。激活后，小天狼星会召唤具有更多生命值并造成更多伤害的暗影。超充能暗影的生命值是格斗者对应物的 85%，造成的伤害是格斗者对应物的 70%。他还获得 20% 的速度提升，以及 5% 的伤害和护盾提升。",
      "icon": "/hypercharges/Sirius/spray_hypercharge_sirius.png"
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "102": {
    "id": "102",
    "apiId": 16000103,
    "name": "娜吉亚",
    "enName": "Najia",
    "slug": "najia",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "芬克斯雇佣她来让金字塔任务的谜题变得更加困难，但她善良的本性实际上让她去帮助那些被他的时间扭曲恶作剧困住的人。",
    "story": "",
    "avatar": "/HeroAvatars/16000103.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000103.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000103.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 6800,
      "damage": 300,
      "range": "6 (jar; 普通)",
      "reload": "0.8 秒 (极快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001216,
        "name": "剧毒守护者",
        "desc": "被纳迦中毒而被击败的斗殴者会在他们的位置产生一条蛇。",
        "icon": "/starpowers/Najia/Najia_StarPower.png"
      },
      {
        "id": 23001217,
        "name": "有毒",
        "desc": "毒药伤害会随着目标格斗者当前的生命值百分比而变化，当目标生命值达到 100% 时，最多会造成额外 伤害。",
        "icon": "/starpowers/Najia/Najia_StarPower2.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001218,
        "name": "毒水坑",
        "desc": "当前被娜迦毒害的所有敌人都会在下一秒产生有毒的水坑。（冷却：17 秒）",
        "icon": "/gadgets/Najia/Najia_Gadget.png"
      },
      {
        "id": 23001219,
        "name": "纳迦罐",
        "desc": "娜嘉躲在花瓶里。一旦花瓶被打破，她就会击退附近的所有敌人！（冷却：20 秒）",
        "icon": "/gadgets/Najia/Najia_Gadget2.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "娜吉亚·极限充能",
      "desc": "倍率：35%。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "103": {
    "id": "103",
    "apiId": 16000104,
    "name": "达米安",
    "enName": "Damian",
    "slug": "damian",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "达米安喜欢制造噪音。他和他的兄弟德拉科一起领导了一支乐队，但音乐让他陷入了无法控制的愤怒之中，他摧毁了眼前的任何东西！他的表演通常以他砸碎舞台附近的一切而结束……包括其他斗士。",
    "story": "",
    "avatar": "/HeroAvatars/16000104.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000104.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000104.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 11200,
      "damage": 700,
      "range": "2.67 (近)",
      "reload": "1.2 秒 (快)",
      "speed": "770 (快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001245,
        "name": "群杀",
        "desc": "将目标撞到墙上会使他们昏迷 秒。",
        "icon": "/starpowers/Damian/damian_starpower_firepower.png"
      },
      {
        "id": 23001246,
        "name": "粗俗的拳打展示",
        "desc": "达米安在他的超级技能中拥有燃烧的拳头，可以燃烧敌人。",
        "icon": "/starpowers/Damian/damian_starpower_tko.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001247,
        "name": "心灵治疗",
        "desc": "达米安将麦克风扔向目标位置。第一个捡到它的队友的生命值已被治愈。（冷却：15 秒）",
        "icon": "/gadgets/Damian/damian_gadget_builder_icon.png"
      },
      {
        "id": 23001248,
        "name": "音墙",
        "desc": "达米安召唤出一面坚不可摧的安培临时墙！（冷却：20 秒）",
        "icon": "/gadgets/Damian/damian_gadget_builder.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "达米安·极限充能",
      "desc": "倍率：35%。",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "104": {
    "id": "104",
    "apiId": 16000105,
    "name": "丝塔诺娃",
    "enName": "Starr Nova",
    "slug": "starr-nova",
    "role": "输出",
    "class": "Unknown",
    "rarity": {
      "name": "神话",
      "color": "#fe5e72"
    },
    "desc": "一位自认为是动漫人物斯塔尔·诺瓦的coser！这可能会有点尴尬，因为她相信现实世界中的问题“也”可以通过用一把巨大的剑击打来解决。",
    "story": "",
    "avatar": "/HeroAvatars/16000105.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000105.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000105.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 7400,
      "damage": 1080,
      "range": "5.67 (普通)",
      "reload": "1.4 秒 (快)",
      "speed": "820 (极快)"
    },
    "attack": {
      "name": "普通攻击",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超级技能",
      "desc": "",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001253,
        "name": "最大功率水平",
        "desc": "在变形状态下击中敌方格斗家，你的伤害会增加 %，最高可达 %。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001253.png"
      },
      {
        "id": 23001254,
        "name": "神秘的斯塔尔技术",
        "desc": "斯塔尔·诺瓦的主要攻击还会为队友治疗 。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001254.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001255,
        "name": "漂浮时间",
        "desc": "斯塔尔诺瓦部署了反重力装置，让队友漂浮在该区域内！（冷却：20 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23001255.png"
      },
      {
        "id": 23001256,
        "name": "友谊与正义的光辉斯塔尔",
        "desc": "斯塔尔新星发射能量球，对敌人造成伤害并治愈队友 。这个能量球还可以在击中目标之前传送到！（冷却：20 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23001256.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "丝塔诺娃·极限充能",
      "desc": "",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
  "105": {
    "id": "105",
    "apiId": 16000106,
    "name": "博尔特",
    "enName": "Bolt",
    "slug": "bolt",
    "role": "坦克",
    "class": "Unknown",
    "rarity": {
      "name": "史诗",
      "color": "#d850ff"
    },
    "desc": "博尔特 是 Battle Bumperz 系列的一款玩具，旨在通过滚入物体来造成伤害！他生来就是为了战斗，但一直想成为一辆赛车，所以他达到了危险的速度来实现他的梦想。不要妨碍他！",
    "story": "",
    "avatar": "/HeroAvatars/16000106.png",
    "image": "https://cdn.brawlify.com/brawlers/model/16000106.png",
    "modelImage": "https://cdn.brawlify.com/brawlers/model/16000106.png",
    "bgImage": "/Usedinheroes/bg/3.png",
    "stats": {
      "health": 10800,
      "damage": 540,
      "range": "-",
      "reload": "2.2 秒 (极慢)",
      "speed": "540 (极慢)"
    },
    "attack": {
      "name": "滚动撞击",
      "desc": "博尔特向前滚动撞击敌人，移动速度越快造成的伤害越高，最低 540，最高 900。消耗弹药可让本次伤害翻倍。",
      "icon": "/Usedinheroes/skills/skill0.png"
    },
    "super": {
      "name": "超速过载",
      "desc": "博尔特进入超速状态，获得移速提升与减伤护盾，并在身后留下闪电轨迹，对触碰的敌人每秒造成 1100 伤害。",
      "icon": "/Usedinheroes/skills/skill01.png"
    },
    "starPowers": [
      {
        "id": 23001279,
        "name": "抛起",
        "desc": "当博尔特全速前进时，他会将敌人击飞。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001279.png"
      },
      {
        "id": 23001280,
        "name": "永不停歇的球",
        "desc": "博尔特不受群体控制的影响，并在超级期间获得 15% 最高速度。",
        "icon": "https://cdn.brawlify.com/star-powers/regular/23001280.png"
      }
    ],
    "gadgets": [
      {
        "id": 23001281,
        "name": "换油",
        "desc": "博尔特根据他当前的速度获得 1600 - 3200 生命护盾。（冷却：15 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23001281.png"
      },
      {
        "id": 23001282,
        "name": "弹力球",
        "desc": "博尔特跳到目标位置并造成区域伤害。打破环境，但着陆时失去所有速度。（冷却：20 秒）",
        "icon": "https://cdn.brawlify.com/gadgets/regular/23001282.png"
      }
    ],
    "gears": [
      {
        "name": "伤害装备",
        "desc": "英雄生命值低于 50% 时，造成的伤害提升 15%。",
        "icon": "/gears/gear_superrare_damage.png"
      },
      {
        "name": "恢复装备",
        "desc": "英雄的生命恢复速度提升 50%。",
        "icon": "/gears/gear_superrare_heal.png"
      },
      {
        "name": "装弹装备",
        "desc": "弹药槽为空时，装弹速度提升 15%。",
        "icon": "/gears/gear_superrare_reload.png"
      },
      {
        "name": "护盾装备",
        "desc": "英雄生命值低于 50% 时，获得 15% 的减伤护盾。",
        "icon": "/gears/gear_superrare_shield.png"
      },
      {
        "name": "速度装备",
        "desc": "在草丛中移动速度提升 20%。",
        "icon": "/gears/gear_superrare_speed.png"
      },
      {
        "name": "视野装备",
        "desc": "在草丛中的视野范围提升 75%。",
        "icon": "/gears/gear_superrare_vision.png"
      }
    ],
    "hypercharge": {
      "name": "博尔特·极限充能",
      "desc": "",
      "icon": ""
    },
    "skins": [],
    "pins": [],
    "buffies": []
  },
};

export const heroListV2 = Object.values(heroDetailsData).map(h => ({
  id: h.id,
  name: h.name,
  slug: h.slug,
  enName: h.enName,
  apiId: h.apiId,
  image: h.avatar,
  role: h.role,
}));
