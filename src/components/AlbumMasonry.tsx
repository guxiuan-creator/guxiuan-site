"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeIndex]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
        {photos.map((photo, idx) => {
          const isLoaded = loaded[idx] ?? false;
          const ratio = ratios[idx] ?? 4 / 5;

          return (
            <button
              key={`${photo.src}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              onContextMenu={(e) => e.preventDefault()}
              className="mb-4 block w-full break-inside-avoid text-left"
              aria-label="查看大图"
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
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
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
            </button>
          );
        })}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="大图预览"
          onClick={() => setActiveIndex(null)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/90 hover:bg-black/60"
          >
            CLOSE
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[activeIndex].src}
            alt=""
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="max-h-[90vh] max-w-[92vw] select-none object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}

