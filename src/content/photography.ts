export type PhotoAlbum = {
  slug: string;
  title: string; // 中文标题（主要在子页展示）
  subtitle?: string; // 英文/地点等（主要在子页展示）
  date: string; // YYYY-MM-DD
  year: number;
  location: string;
  event?: string;
  cover: string; // path under /public
  photos: string[]; // 子页展示的图片列表（path under /public 或外链）
  count?: number;
  photosDir?: string; // 自动从 /public 读取图片（server 端用）
};

export const ALBUMS: PhotoAlbum[] = [
  {
    slug: "2026-zhengzhou-theater-newworld",
    title: "2026.2.21 · 新世界国漫展",
    subtitle: "Zhengzhou Grand Theater · New World Guoman Expo",
    date: "2026-02-21",
    year: 2026,
    location: "郑州大剧院",
    event: "新世界国漫展",
    cover: "/photos/covers/2026-02-21-zhengzhou-theater-newworld.png.jpg",
    photos: ["/photos/covers/2026-02-21-zhengzhou-theater-newworld.png.jpg"],
    photosDir: "/photos/albums/2026-zhengzhou-theater-newworld",
  },
  {
    slug: "2025-wuhan-qingshan-park-mutual-portraits",
    title: "2025.11.15 · 互勉人像",
    subtitle: "Wuhan Qingshan Park · Mutual Portraits",
    date: "2025-11-15",
    year: 2025,
    location: "武汉青山公园",
    event: "互勉人像",
    // 占位封面：当 photosDir 里有照片时，会自动用第一张当封面
    cover: "/photos/covers/cover-1.svg",
    photos: ["/photos/covers/cover-1.svg"],
    photosDir: "/photos/albums/2025-wuhan-qingshan-park-mutual-portraits",
  },
  {
    slug: "2025-zhengzhou-cbd-newworld",
    title: "2025.2.3 · 新世界动漫展",
    subtitle: "Zhengzhou CBD · New World Anime Expo",
    date: "2025-02-03",
    year: 2025,
    location: "郑州CBD",
    event: "新世界动漫展",
    // 占位封面：当 photosDir 里有照片时，会自动用第一张当封面
    cover: "/photos/covers/cover-1.svg",
    photos: ["/photos/covers/cover-1.svg"],
    photosDir: "/photos/albums/2025-zhengzhou-cbd-newworld",
  },
  {
    slug: "2025-zhengzhou-cbd-mengxiang",
    title: "2025.5.1 · 梦乡动漫展",
    subtitle: "Zhengzhou CBD · Mengxiang Anime Expo",
    date: "2025-05-01",
    year: 2025,
    location: "郑州CBD",
    event: "梦乡动漫展",
    // 先给一个占位封面；当 photosDir 里有照片时，会自动用第一张当封面
    cover: "/photos/covers/cover-2.svg",
    photos: ["/photos/covers/cover-2.svg"],
    photosDir: "/photos/albums/2025-zhengzhou-cbd-mengxiang",
  },
];

