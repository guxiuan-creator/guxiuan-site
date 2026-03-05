import { siteConfig } from "@/config/site";

export function SiteMarquee() {
  const items = siteConfig.marqueeItems;

  return (
    <section
      aria-label="Interests marquee"
      className="border-t border-zinc-950/10 bg-[linear-gradient(90deg,#0a0a0b,rgba(10,10,11,0.92),#0a0a0b)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3 pb-3">
          <span className="text-xs font-semibold tracking-[0.28em] text-white/70">
            INTERESTS
          </span>
          <span className="text-xs text-white/55">/ 兴趣与关键词</span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(22rem_16rem_at_18%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="site-marquee-track flex w-max gap-3 motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:gap-2">
            <div className="flex shrink-0 items-center gap-3 pr-3 motion-reduce:hidden">
              {items.map((t) => (
                <MarqueePill key={`a-${t}`} text={t} />
              ))}
            </div>
            <div
              className="flex shrink-0 items-center gap-3 pr-3 motion-reduce:hidden"
              aria-hidden="true"
            >
              {items.map((t) => (
                <MarqueePill key={`b-${t}`} text={t} />
              ))}
            </div>

            <div className="hidden motion-reduce:flex motion-reduce:flex-wrap">
              {items.map((t) => (
                <MarqueePill key={`rm-${t}`} text={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/85">
      {text}
    </span>
  );
}

