import Image from "next/image";
import { siteConfig } from "@/config/site";

export function AvatarSticker() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 -z-10 rounded-[32px] bg-[radial-gradient(24rem_18rem_at_70%_10%,rgba(0,0,0,0.10),transparent_60%)] dark:bg-[radial-gradient(24rem_18rem_at_70%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="overflow-hidden rounded-[28px] border border-zinc-950/10 bg-white shadow-[0_20px_70px_-40px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-none">
        <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(20rem_20rem_at_30%_10%,rgba(255,255,255,0.16),transparent_55%)]" />
          <Image
            src={siteConfig.avatarSrc}
            alt="Avatar"
            fill
            unoptimized
            className="object-cover opacity-95"
          />
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
                STICKER
              </p>
              <p className="text-base font-semibold text-foreground">古秀安</p>
              <p className="text-sm leading-6 text-foreground/70">
                vibe coding 我踏马来了——但先把需求写清楚。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Tag>TOC</Tag>
            <Tag>AI</Tag>
            <Tag>PM</Tag>
            <Tag>INTERACTION</Tag>
            <Tag>PHOTOGRAPHY</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-foreground/80">
      {children}
    </span>
  );
}

