import fs from "node:fs";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";
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

export function getAlbumBySlug(slug: string): PhotoAlbum | undefined {
  return getAlbums().find((a) => a.slug === slug);
}

