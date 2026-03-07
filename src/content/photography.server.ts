import fs from "node:fs";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";
import { imageSize } from "image-size";
import { ALBUMS, type PhotoAlbum } from "@/content/photography";

const SUPPORTED_EXT = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

function isSupportedImage(fileName: string) {
  const ext = path.extname(fileName).toLowerCase();
  return SUPPORTED_EXT.has(ext);
}

function readAlbumPhotosFromPublicDir(photosDir: string): string[] {
  // photosDir is a public URL path like "/photos/albums/xxx"
  const relative = photosDir.replace(/^\/+/, "");
  const absDir = path.join(process.cwd(), "public", relative);

  try {
    const names = fs
      .readdirSync(absDir, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((name) => !name.startsWith("."))
      .filter((name) => name !== ".gitkeep")
      .filter(isSupportedImage)
      .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

    return names.map((name) => `${photosDir.replace(/\/$/, "")}/${name}`);
  } catch {
    return [];
  }
}

export type AlbumPhoto = {
  src: string;
  width?: number;
  height?: number;
};

export type ResolvedPhotoAlbum = Omit<PhotoAlbum, "photos"> & {
  photos: AlbumPhoto[];
};

const sizeCache = new Map<string, { width?: number; height?: number }>();

function tryGetPublicImageSize(src: string): { width?: number; height?: number } {
  if (!src.startsWith("/")) return {};
  if (src.startsWith("//")) return {};
  if (/^https?:\/\//i.test(src)) return {};

  const cached = sizeCache.get(src);
  if (cached) return cached;

  const relative = src.replace(/^\/+/, "");
  const abs = path.join(process.cwd(), "public", relative);
  try {
    const buf = fs.readFileSync(abs);
    const dim = imageSize(buf);
    const result = { width: dim.width, height: dim.height };
    sizeCache.set(src, result);
    return result;
  } catch {
    const result = {};
    sizeCache.set(src, result);
    return result;
  }
}

export function getAlbums(): PhotoAlbum[] {
  // 让本地开发时“新增/替换图片”无需重启 dev server
  noStore();
  return ALBUMS.map((a) => {
    if (!a.photosDir) return a;
    const fromDir = readAlbumPhotosFromPublicDir(a.photosDir);
    const photos = fromDir.length ? fromDir : a.photos;
    const cover = photos[0] ?? a.cover;
    const count = photos.length;
    return { ...a, photos, cover, count };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAlbumBySlug(slug: string): ResolvedPhotoAlbum | undefined {
  const album = getAlbums().find((a) => a.slug === slug);
  if (!album) return undefined;
  const photos = album.photos.map((src) => ({ src, ...tryGetPublicImageSize(src) }));
  return { ...album, photos };
}

