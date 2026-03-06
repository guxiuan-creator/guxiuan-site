"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { NoteItem } from "@/content/notes";

function noteSearchText(n: NoteItem) {
  return [n.title, n.date, n.type].join(" ").toLowerCase();
}

export function NotesIndex({ notes }: { notes: NoteItem[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const base = [...notes].sort((a, b) => (a.date < b.date ? 1 : -1));
    if (!query) return base;
    return base.filter((n) => noteSearchText(n).includes(query));
  }, [notes, q]);

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <label className="block">
          <span className="text-xs font-semibold tracking-[0.28em] text-zinc-500 dark:text-white/60">
            SEARCH
          </span>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-zinc-950/12 bg-white px-4 py-3 shadow-[0_18px_55px_-50px_rgba(0,0,0,0.40)] dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-none">
            <span className="text-sm text-zinc-400 dark:text-white/45" aria-hidden="true">
              ⌕
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索笔记（标题 / 日期）"
              className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white/85 dark:placeholder:text-white/35"
            />
            {q ? (
              <button
                type="button"
                onClick={() => setQ("")}
                className="rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-700 hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/75 dark:hover:bg-zinc-950/70"
              >
                CLEAR
              </button>
            ) : null}
          </div>
        </label>

        <p className="text-xs text-zinc-500 dark:text-white/55">
          {filtered.length} / {notes.length}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-3xl border border-zinc-950/10 bg-white transition hover:border-zinc-950/20 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-zinc-950/70 dark:hover:border-white/14"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950/5 dark:bg-white/5">
              <Image
                src={item.cover}
                alt=""
                fill
                unoptimized
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-2 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-[0.22em] text-zinc-500 dark:text-white/60">
                  {item.type === "article" ? "ARTICLE" : "VIDEO"}
                </span>
                <time className="text-xs text-zinc-500 dark:text-white/55">
                  {item.date}
                </time>
              </div>
              <h2 className="text-base font-semibold leading-7 text-zinc-950 dark:text-white">
                {item.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-white/70">
                跳转阅读 →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

