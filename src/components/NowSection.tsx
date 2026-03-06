"use client";

import { NowCard } from "@/content/now";

export function NowSection({ cards }: { cards: NowCard[] }) {
  return (
    <section className="space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
            NOW
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            最近在干什么
          </h2>
        </div>
        <p className="text-sm text-foreground/70">三张卡片，记录最近的生活支线。</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.id}
            className={[
              "group relative overflow-hidden rounded-[28px] border border-zinc-950/10 bg-white p-7 transition",
              "hover:shadow-[0_18px_60px_-50px_rgba(0,0,0,0.55)]",
              "dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-zinc-950/70 dark:hover:shadow-none",
              c.id === "game"
                ? "border-indigo-500/20 hover:border-indigo-500/28"
                : c.id === "learning"
                  ? "border-sky-500/20 hover:border-sky-500/28"
                  : "border-rose-500/18 hover:border-rose-500/26",
            ].join(" ")}
            style={
              {
                transform:
                  "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--rs, 1))",
                willChange: "transform",
              } as React.CSSProperties
            }
            onPointerMove={(e) => onTiltMove(e.currentTarget, e)}
            onPointerLeave={(e) => onTiltLeave(e.currentTarget)}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100">
              <div className={getGlow(c.id)} />
            </div>

            <div className="relative space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-[0.22em] text-foreground/60">
                  {c.labelEn}
                </span>
                <span className="text-xs text-foreground/60">{c.labelZh}</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <p className="text-lg font-semibold leading-7 text-foreground">
                  {c.title}
                </p>
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-zinc-950/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
                  <NowIcon id={c.id} />
                </div>
              </div>

              {c.description ? (
                <p className="text-sm leading-6 text-foreground/80">
                  {c.description}
                </p>
              ) : null}

              <div className="pt-2">
                <span className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-700 dark:border-white/10 dark:bg-zinc-950/60 dark:text-white/75">
                  {c.id === "game"
                    ? "PLAY MODE"
                    : c.id === "learning"
                      ? "LEVEL UP"
                      : "WATCH LIST"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getGlow(id: string) {
  switch (id) {
    case "game":
      return "absolute inset-0 bg-[radial-gradient(22rem_16rem_at_20%_0%,rgba(99,102,241,0.16),transparent_60%)]";
    case "learning":
      return "absolute inset-0 bg-[radial-gradient(22rem_16rem_at_20%_0%,rgba(14,165,233,0.16),transparent_60%)]";
    case "movie":
      return "absolute inset-0 bg-[radial-gradient(22rem_16rem_at_20%_0%,rgba(244,63,94,0.14),transparent_60%)]";
    default:
      return "absolute inset-0";
  }
}

function NowIcon({ id }: { id: string }) {
  switch (id) {
    case "game":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 15h2m1-1v2m7-2h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 9h8a4 4 0 0 1 4 4v2a3 3 0 0 1-3 3h-1l-2-2H10l-2 2H7a3 3 0 0 1-3-3v-2a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "learning":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 19V6a2 2 0 0 1 2-2h12v15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 17h14v2H6a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "movie":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 7h16v13H4V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 7V4h8v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l6 3-6 3v-6Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

function onTiltMove(el: HTMLDivElement, e: React.PointerEvent<HTMLDivElement>) {
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;

  const dx = px - 0.5;
  const dy = py - 0.5;

  const max = 9; // degrees
  const ry = dx * max;
  const rx = -dy * max;

  el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
  el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
  el.style.setProperty("--rs", "1.025");
}

function onTiltLeave(el: HTMLDivElement) {
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--rs", "1");
}

