export type QuestNode = {
  id: string;
  date: string; // YYYY-MM
  sortDate?: string; // YYYY-MM-DD，仅用于排序，不用于展示
  title: string;
  meta?: string;
  icon: "graduation" | "company" | "camera" | "switch";
  sortOrder?: number; // 同一时间点内的排序（越小越靠上）
};

export const MAIN_QUEST: QuestNode[] = [
  {
    id: "main-2022-06-undergrad",
    date: "2022-06",
    title: "本科毕业",
    meta: "工业设计",
    icon: "graduation",
    sortOrder: 0,
  },
  {
    id: "main-2025-06-master",
    date: "2025-06",
    sortDate: "2025-06-01",
    title: "硕士毕业",
    meta: "信息与交互设计",
    icon: "graduation",
    sortOrder: 0,
  },
  {
    id: "main-2025-06-job",
    date: "2026-06",
    sortDate: "2026-06-18",
    title: "入职：ToC AI 软件公司",
    meta: "AI 应用产品 · 持续到现在",
    icon: "company",
    sortOrder: 1,
  },
];

export const SIDE_QUEST: QuestNode[] = [
  {
    id: "side-2020-photo",
    date: "2020",
    title: "对摄影产生兴趣",
    meta: "开始认真看构图/光线",
    icon: "camera",
  },
  {
    id: "side-2021-10-nikon",
    date: "2021-10",
    title: "入坑：第一台尼康相机",
    meta: "人生第一台相机，记录开始",
    icon: "camera",
  },
  {
    id: "side-2024-10-sony",
    date: "2024-10",
    title: "灭门尼康 → 换索尼",
    meta: "系统切换，拍得更频繁",
    icon: "switch",
  },
];

