import Link from "next/link";

const NAV = [
  { href: "/", labelEn: "HOME", labelZh: "首页" },
  { href: "/about", labelEn: "ABOUT", labelZh: "关于我" },
  { href: "/photography", labelEn: "PHOTOGRAPHY", labelZh: "摄影" },
  { href: "/notes", labelEn: "NOTES", labelZh: "笔记" },
  { href: "/product", labelEn: "PRODUCT", labelZh: "产品" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_22rem_at_20%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(36rem_20rem_at_80%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_9px)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-start">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.28em] text-white/60">
                GUXIUAN
              </p>
              <p className="text-sm font-medium text-white/85">
                ToC Product Manager · Interaction Design · AI
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/70">
              <span className="text-xs font-semibold tracking-[0.28em] text-white/60">
                SLOGAN
              </span>
              <span className="ml-3 font-medium text-white/90">
                前方岔路，减速慢行。
              </span>
            </p>
          </div>

          <div className="space-y-4 sm:justify-self-end">
            <p className="text-xs font-semibold tracking-[0.28em] text-white/60">
              NAVIGATION
            </p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-baseline gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-white/55 group-hover:text-white/85">
                    {item.labelEn}
                  </span>
                  <span className="text-sm">{item.labelZh}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-wide">
            <span className="font-medium text-white/80">GUXIUAN</span> ·{" "}
            <span className="text-white/55">Built with Next.js</span>
          </p>
          <p className="tracking-wide">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
