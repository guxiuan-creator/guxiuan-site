import Link from "next/link";
import { AvatarSticker } from "@/components/AvatarSticker";
import { PracticeDuration } from "@/components/PracticeDuration";

export function HomeHero({ showCtas = true }: { showCtas?: boolean }) {
  return (
    <section className="grid items-start gap-8 pt-4 sm:grid-cols-[1fr_360px] sm:gap-10 sm:pt-6">
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
            HI, I&apos;M
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            古秀安 <span className="text-foreground/40">/</span>{" "}
            <span className="tracking-[0.18em]">GUXIUAN</span>
          </h1>
          <p className="text-lg font-medium text-foreground/85">
            练习时长 <PracticeDuration startISO="2025-06-18" /> 的产品经理
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-foreground/80">
            TOC PM
          </span>
          <span className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-foreground/80">
            MEng · 信息与交互设计
          </span>
          <span className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-foreground/80">
            AI
          </span>
          <span className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-foreground/80">
            VIBE CODING
          </span>
        </div>

        <p className="max-w-2xl text-base leading-7 text-foreground/80">
          “vibe coding 我踏马来了”，但我更在意的是：把需求写清楚，把迭代做对。
          <span className="text-foreground/60">
            {" "}
            漫展人像是我的长期副本，笔记是我的更新日志。
          </span>
        </p>

        {showCtas ? (
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              About / 关于我
            </Link>
            <Link
              href="/notes"
              className="inline-flex h-10 items-center rounded-full border border-foreground/15 bg-background px-5 text-sm font-medium text-foreground transition hover:bg-foreground/5"
            >
              Notes / 笔记
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-full border border-foreground/15 bg-background px-5 text-sm font-medium text-foreground transition hover:bg-foreground/5"
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

