export type NoteItem = {
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
  cover: string; // path under /public
  type: "article" | "video";
};

export const NOTES: NoteItem[] = [
  {
    title: "示例文章（跳转公众号原文）",
    date: "2026-03-05",
    url: "https://mp.weixin.qq.com/s/Yp1xxB1wo3GoigsgXZyd2A",
    cover: "/notes/covers/sample.svg",
    type: "article",
  },
  {
    title: "示例文章 02（占位）",
    date: "2026-02-18",
    url: "https://mp.weixin.qq.com/",
    cover: "/notes/covers/sample.svg",
    type: "article",
  },
  {
    title: "示例文章 03（占位）",
    date: "2026-01-22",
    url: "https://mp.weixin.qq.com/",
    cover: "/notes/covers/sample.svg",
    type: "article",
  },
];

