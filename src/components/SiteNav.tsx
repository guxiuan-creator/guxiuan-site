"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLink } from "@/components/ui/NavLink";

const NAV = [
  { href: "/", labelEn: "HOME", labelZh: "首页" },
  { href: "/about", labelEn: "ABOUT", labelZh: "关于我" },
  { href: "/photography", labelEn: "PHOTOGRAPHY", labelZh: "摄影" },
  { href: "/notes", labelEn: "NOTES", labelZh: "笔记" },
  { href: "/contact", labelEn: "CONTACT", labelZh: "联系" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-950/15 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-zinc-950/70 supports-[backdrop-filter]:dark:bg-zinc-950/55">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        <Link href="/" className="group inline-flex items-baseline gap-3">
          <span className="text-sm font-semibold tracking-[0.26em]">
            GUXIUAN
          </span>
          <span className="hidden text-xs text-zinc-500 dark:text-white/60 sm:inline">
            ToC PM
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href}>
              <span className="text-xs font-semibold tracking-[0.24em]">
                {item.labelEn}
              </span>
              <span className="ml-2 hidden text-xs text-zinc-500 sm:inline">
                {item.labelZh}
              </span>
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.22em] text-zinc-700 hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80 dark:hover:bg-zinc-900 sm:hidden"
          aria-label="Open menu"
        >
          MENU
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 sm:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30"
          />

          <div className="absolute right-0 top-0 h-dvh w-[86%] max-w-sm border-l border-zinc-950/10 bg-white shadow-[0_30px_120px_-70px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between border-b border-zinc-950/10 px-5 py-4 dark:border-white/10 dark:bg-zinc-950">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-semibold tracking-[0.28em] text-zinc-500 dark:text-white/60">
                  MENU
                </span>
                <span className="text-xs text-zinc-500 dark:text-white/60">
                  GUXIUAN
                </span>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-700 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80"
              >
                CLOSE
              </button>
            </div>

            <div className="px-5 py-5 dark:bg-zinc-950">
              <nav aria-label="Mobile navigation" className="space-y-2">
                {NAV.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    href={item.href}
                    labelEn={item.labelEn}
                    labelZh={item.labelZh}
                    active={pathname === item.href}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileNavItem({
  href,
  labelEn,
  labelZh,
  active,
  onNavigate,
}: {
  href: string;
  labelEn: string;
  labelZh: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={[
        "flex w-full items-center justify-between rounded-2xl border px-4 py-4 transition",
        active
          ? "border-zinc-950/15 bg-zinc-950 text-white dark:border-white/15"
          : "border-zinc-950/10 bg-white text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900",
      ].join(" ")}
    >
      <div className="space-y-1">
        <div
          className={[
            "text-xs font-semibold tracking-[0.26em]",
            active ? "text-white/80" : "text-zinc-500 dark:text-white/60",
          ].join(" ")}
        >
          {labelEn}
        </div>
        <div
          className={["text-base font-semibold", active ? "text-white" : ""].join(" ")}
        >
          {labelZh}
        </div>
      </div>
      <span
        className={[
          "text-sm",
          active ? "text-white/70" : "text-zinc-400 dark:text-white/40",
        ].join(" ")}
      >
        →
      </span>
    </Link>
  );
}
