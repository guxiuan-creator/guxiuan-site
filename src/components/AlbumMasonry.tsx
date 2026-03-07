"use client";

import { useMemo, useState } from "react";
import type { AlbumPhoto } from "@/content/photography.server";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function photoRatio(photo: AlbumPhoto) {
  const { width, height } = photo;
  if (!width || !height) return 4 / 5;
  const raw = height / width;
  if (!Number.isFinite(raw)) return 4 / 5;
  return clamp(raw, 0.7, 1.9);
}

export function AlbumMasonry({ photos }: { photos: AlbumPhoto[] }) {
  const ratios = useMemo(() => photos.map(photoRatio), [photos]);
  const [loaded, setLoaded] = useState<boolean[]>(() => photos.map(() => false));

  return (
    <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
      {photos.map((photo, idx) => {
        const isLoaded = loaded[idx] ?? false;
        const ratio = ratios[idx] ?? 4 / 5;

        return (
          <a
            key={`${photo.src}-${idx}`}
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            className="mb-4 block break-inside-avoid"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-950/5 dark:border-white/10 dark:bg-white/5">
              <div aria-hidden="true" style={{ paddingTop: `${ratio * 100}%` }} />

              <div
                aria-hidden="true"
                className={[
                  "skeleton-shimmer absolute inset-0 transition-opacity duration-300",
                  "bg-zinc-950/5 dark:bg-white/5",
                  isLoaded ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                decoding="async"
                onLoad={() => {
                  setLoaded((prev) => {
                    if (prev[idx]) return prev;
                    const next = prev.slice();
                    next[idx] = true;
                    return next;
                  });
                }}
                className={[
                  "absolute inset-0 h-full w-full object-cover",
                  "transition-opacity duration-300",
                  isLoaded ? "opacity-100" : "opacity-0",
                  "group-hover:scale-[1.01]",
                ].join(" ")}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

