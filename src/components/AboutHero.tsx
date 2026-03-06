"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

const TAGS = [
  "漫展",
  "人像摄影",
  "电影",
  "游戏",
  "写公众号",
  "做视频",
  "vibe coding",
  "散步",
  "AI 应用",
  "ToC PM",
];

export function AboutHero({ actions }: { actions?: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(true);

  useEffect(() => {
    const mql =
      typeof window !== "undefined"
        ? window.matchMedia("(hover: hover) and (pointer: fine)")
        : null;
    if (!mql) return;

    const apply = () => setHoverCapable(Boolean(mql.matches));
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  const canAnimate = useMemo(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <section className="grid gap-10 pb-2 pt-2 sm:grid-cols-[1.2fr_0.8fr] sm:items-stretch">
      <div className="flex h-full flex-col gap-6">
        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
            ABOUT ME
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            欢迎大家来到{" "}
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#6366f1,#0ea5e9)] bg-clip-text text-transparent">
              古秀安
            </span>{" "}
            的官方网站。
          </h1>

          <p className="text-sm leading-6 text-zinc-600">
            <span className="font-semibold tracking-[0.14em] text-zinc-800">
              GUXIUAN
            </span>{" "}
            · ToC PM · AI 应用 · 信息与交互设计
          </p>

          <div className="space-y-3 text-sm leading-7 text-zinc-700">
            <p>
              欢迎大家来到古秀安的官方网站。这里没有“完美人设”，只有持续迭代。
            </p>
            <p>
              我的主线职业是 ToC 产品经理（AI 应用方向），日常工作包括：把需求写清楚、把方案做出来、把效果跑出来；我的支线包括：漫展人像摄影、公众号写作、电影和游戏，以及偶尔的 vibe
              coding。
            </p>
            <p>
              我把这些内容都当作同一件事的不同形态——练习观察、练习表达、练习把想法变成可交付的东西。你看到的每个页面、每条笔记、每个节点，都是一次更新日志。
            </p>
          </div>
        </div>

        {actions ? <div className="mt-auto">{actions}</div> : null}
      </div>

      <div className="sm:pt-2">
        <FlipCard
          flipped={flipped}
          setFlipped={setFlipped}
          hoverCapable={hoverCapable}
          canAnimate={canAnimate}
        />
      </div>
    </section>
  );
}

function FlipCard({
  flipped,
  setFlipped,
  hoverCapable,
  canAnimate,
}: {
  flipped: boolean;
  setFlipped: (v: boolean) => void;
  hoverCapable: boolean;
  canAnimate: boolean;
}) {
  const allowClickFlip = !hoverCapable;

  return (
    <div
      className="mx-auto w-full max-w-md"
      style={{ perspective: 1200 } as React.CSSProperties}
    >
      <button
        type="button"
        aria-label="Flip card"
        onClick={() => {
          if (allowClickFlip) setFlipped(!flipped);
        }}
        className="group relative block w-full rounded-[28px] text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-500/25"
      >
        <div
          className={[
            "relative w-full rounded-[28px]",
            "aspect-[3/4]",
            "transition-transform duration-500 [transform-style:preserve-3d]",
            hoverCapable ? "group-hover:[transform:rotateY(180deg)]" : "",
            flipped ? "[transform:rotateY(180deg)]" : "",
          ].join(" ")}
          style={
            (!canAnimate ? { transitionDuration: "0ms" } : undefined) as
              | React.CSSProperties
              | undefined
          }
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-[28px] border border-zinc-950/10 bg-white shadow-[0_22px_70px_-55px_rgba(0,0,0,0.55)] [backface-visibility:hidden]"
            style={{ transform: "rotateY(0deg)" }}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[radial-gradient(24rem_16rem_at_30%_0%,rgba(0,0,0,0.06),transparent_60%)]" />
              <Image
                src={siteConfig.avatarSrc}
                alt="Avatar"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden rounded-[28px] border border-zinc-950/10 bg-zinc-950 text-white shadow-[0_22px_70px_-55px_rgba(0,0,0,0.60)] [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-0 bg-[radial-gradient(28rem_18rem_at_20%_0%,rgba(14,165,233,0.16),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(28rem_18rem_at_80%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_9px)]" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/70">
                  TAG LIST
                </p>
                <p className="text-lg font-semibold text-white/90">
                  生活支线
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {TAGS.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-white/70">主线推进，支线发育。</p>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/85">
                  BACK
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-zinc-500 sm:hidden">
          点击翻面
        </p>
      </button>
    </div>
  );
}

