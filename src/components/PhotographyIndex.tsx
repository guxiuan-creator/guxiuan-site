"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PhotoAlbum } from "@/content/photography";

function albumSearchText(a: PhotoAlbum) {
  return [
    a.slug,
    a.title,
    a.subtitle ?? "",
    a.location,
    a.event ?? "",
    String(a.year),
  ]
    .join(" ")
    .toLowerCase();
}

export function PhotographyIndex({ albums }: { albums: PhotoAlbum[] }) {
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const base = [...albums].sort((a, b) => (a.date < b.date ? 1 : -1));
    if (!query) return base;
    return base.filter((a) => albumSearchText(a).includes(query));
  }, [albums, q]);

  const visible = useMemo(() => {
    const query = q.trim();
    if (query) return filtered;
    if (expanded) return filtered;
    return filtered.slice(0, 5);
  }, [expanded, filtered, q]);

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <label className="block">
          <span className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
            SEARCH
          </span>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-zinc-950/12 bg-white px-4 py-3 shadow-[0_18px_55px_-50px_rgba(0,0,0,0.40)]">
            <span className="text-sm text-zinc-400" aria-hidden="true">
              ⌕
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索合集（年份 / 地点 / 展会）"
              className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            />
            {q ? (
              <button
                type="button"
                onClick={() => setQ("")}
                className="rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-700 hover:bg-zinc-50"
              >
                CLEAR
              </button>
            ) : null}
          </div>
        </label>

        <p className="text-xs text-zinc-500">
          {filtered.length} / {albums.length}
        </p>
      </div>

      <ol className="space-y-6">
        {visible.map((album) => (
          <li key={album.slug}>
            <Link
              href={`/photography/${album.slug}`}
              className="group block overflow-hidden rounded-[28px] border border-zinc-950/10 bg-white transition hover:-translate-y-0.5 hover:border-zinc-950/15 hover:shadow-[0_22px_70px_-55px_rgba(0,0,0,0.55)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950/5">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.45))] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {album.title}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      {album.year} · {album.location}
                      {album.event ? ` · ${album.event}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/90 backdrop-blur">
                    OPEN →
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
                  ALBUM
                </span>
                <span className="text-xs text-zinc-500">
                  {album.count ? `${album.count} photos` : ""}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {!q.trim() && !expanded && filtered.length > 5 ? (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="w-full rounded-[28px] border border-zinc-950/12 bg-white px-6 py-5 text-sm font-semibold tracking-[0.18em] text-zinc-900 shadow-[0_22px_70px_-55px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:bg-zinc-50"
          >
            阅读更多
          </button>
        </div>
      ) : null}
    </section>
  );
}

