import Link from "next/link";
import { AvatarSticker } from "@/components/AvatarSticker";
import { PracticeDuration } from "@/components/PracticeDuration";

export function HomeHero({ showCtas = true }: { showCtas?: boolean }) {
  return (
    <section className="grid items-start gap-8 pt-4 sm:grid-cols-[1fr_360px] sm:gap-10 sm:pt-6">
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
            HI, I'M
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            古秀安 <span className="text-zinc-400">/</span>{" "}
            <span className="tracking-[0.18em]">GUXIUAN</span>
          </h1>
          <p className="text-lg font-medium text-zinc-800">
            练习时长 <PracticeDuration startISO="2025-06-18" /> 的产品经理
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            TOC PM
          </span>
          <span className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            MSc · 信息与交互设计
          </span>
          <span className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            AI
          </span>
          <span className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            VIBE CODING
          </span>
        </div>

        <p className="max-w-2xl text-base leading-7 text-zinc-700">
          “vibe coding 我踏马来了”，但我更在意的是：把需求写清楚，把迭代做对。
          <span className="text-zinc-500">
            {" "}
            漫展人像是我的长期副本，笔记是我的更新日志。
          </span>
        </p>

        {showCtas ? (
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-900"
            >
              About / 关于我
            </Link>
            <Link
              href="/notes"
              className="inline-flex h-10 items-center rounded-full border border-zinc-950/15 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              Notes / 笔记
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-full border border-zinc-950/15 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              Contact / 联系
            </Link>
          </div>
        ) : null}
      </div>

      <div className="sm:pt-1">
        <AvatarSticker />
      </div>
    </section>
  );
}

