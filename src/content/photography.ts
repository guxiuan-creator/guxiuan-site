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
};

export const ALBUMS: PhotoAlbum[] = [
  {
    slug: "2025-shanghai-cp",
    title: "2025 · 上海 · 漫展人像",
    subtitle: "Cosplay Portraits",
    date: "2025-10-01",
    year: 2025,
    location: "上海",
    event: "CP",
    cover: "/photos/covers/cover-1.svg",
    photos: [
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
    ],
    count: 36,
  },
  {
    slug: "2024-hangzhou-cos",
    title: "2024 · 杭州 · 漫展人像",
    subtitle: "Cosplay Portraits",
    date: "2024-08-01",
    year: 2024,
    location: "杭州",
    event: "Local",
    cover: "/photos/covers/cover-2.svg",
    photos: [
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
    ],
    count: 28,
  },
  {
    slug: "2023-shanghai-portraits",
    title: "2023 · 上海 · 漫展人像",
    subtitle: "Cosplay Portraits",
    date: "2023-12-01",
    year: 2023,
    location: "上海",
    event: "Local",
    cover: "/photos/covers/cover-1.svg",
    photos: [
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
      "/photos/covers/cover-2.svg",
      "/photos/covers/cover-1.svg",
    ],
    count: 24,
  },
];

