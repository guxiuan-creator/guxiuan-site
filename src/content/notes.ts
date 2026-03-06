export type NoteItem = {
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
  cover: string; // path under /public
  type: "article" | "video";
};

export const NOTES: NoteItem[] = [
  {
    title: "2025 · 年终尾记",
    date: "2026-01-02",
    url: "https://mp.weixin.qq.com/s/Yp1xxB1wo3GoigsgXZyd2A",
    cover: "/notes/covers/wechat-2025-year-end.jpg",
    type: "article",
  },
  {
    title: "走鸟～走鸟～",
    date: "2025-05-29",
    url: "https://mp.weixin.qq.com/s/2FDAQI_k7M1DFVzoraqNDA",
    cover: "/notes/covers/2025-05-29-zou-niao/cover.jpg",
    type: "article",
  },
];

