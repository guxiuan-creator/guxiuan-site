export type NowCard = {
  id: string;
  labelEn: string;
  labelZh: string;
  title: string;
  description?: string;
};

export const NOW_CARDS: NowCard[] = [
  {
    id: "game",
    labelEn: "GAME",
    labelZh: "最近在玩",
    title: "NBA2KOL2",
    description: "手感练习 + 阵容调教。想把每一次操作都打磨得更稳定。",
  },
  {
    id: "learning",
    labelEn: "LEARNING",
    labelZh: "最近在学",
    title: "vibe coding",
    description: "把灵感落到可验证的最小闭环：写清楚、做出来、跑起来。",
  },
  {
    id: "movie",
    labelEn: "MOVIE",
    labelZh: "最近看过",
    title: "《朝圣之路》",
    description: "走着走着，答案就会出现。看完会更想把生活过慢一点。",
  },
];

