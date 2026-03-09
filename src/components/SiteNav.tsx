"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { socialConfig } from "@/config/social";
import { NavLink } from "@/components/ui/NavLink";
import { CopyButton } from "@/components/ui/CopyButton";

const NAV = [
  { href: "/", labelEn: "HOME", labelZh: "首页" },
  { href: "/about", labelEn: "ABOUT", labelZh: "关于我" },
  { href: "/photography", labelEn: "PHOTOGRAPHY", labelZh: "摄影" },
  { href: "/notes", labelEn: "NOTES", labelZh: "笔记" },
  { href: "/product", labelEn: "PRODUCT", labelZh: "产品" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open && !contactOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, contactOpen]);

  useEffect(() => {
    if (!contactOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactOpen]);

  return (
    <>
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

          <div className="hidden items-center gap-4 sm:flex">
            <nav className="items-center gap-6 sm:flex">
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
              onClick={() => setContactOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-950/12 bg-white text-zinc-700 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80 dark:hover:bg-zinc-900"
              aria-label="Open contact panel"
            >
              <MailIcon />
            </button>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-950/12 bg-white text-zinc-700 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80 dark:hover:bg-zinc-900"
              aria-label="Open contact panel"
            >
              <MailIcon />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.22em] text-zinc-700 hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80 dark:hover:bg-zinc-900"
              aria-label="Open menu"
            >
              MENU
            </button>
          </div>
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

      {contactOpen ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close contact panel"
            onClick={() => setContactOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
          />
          <div className="absolute left-1/2 top-1/2 w-[94vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-zinc-950/12 bg-white p-6 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.75)] dark:border-white/12 dark:bg-zinc-950 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500 dark:text-white/60">
                  CONTACT
                </p>
                <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white">
                  联系我
                </p>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-700 hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950 dark:text-white/80 dark:hover:bg-zinc-900"
              >
                CLOSE
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-950/10 bg-zinc-50/60 p-4 dark:border-white/10 dark:bg-zinc-900/60">
              <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-white/60">
                EMAIL
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${socialConfig.email}`}
                  className="min-w-0 truncate text-base font-semibold text-zinc-900 hover:underline dark:text-white"
                >
                  {socialConfig.email}
                </a>
                <CopyButton value={socialConfig.email} />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-white/60">
                SOCIAL
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3 sm:gap-4">
                <SocialLinkCard
                  href={socialConfig.xiaohongshu.url}
                  label={socialConfig.xiaohongshu.name}
                  handle={socialConfig.xiaohongshu.handle}
                  icon={<PlatformIconImage src="/social-icons/xiaohongshu.png" alt="小红书" />}
                />
                <SocialLinkCard
                  href={socialConfig.douyin.url}
                  label={socialConfig.douyin.name}
                  handle={socialConfig.douyin.handle}
                  icon={<PlatformIconImage src="/social-icons/douyin.png" alt="抖音" />}
                />
                <SocialLinkCard
                  href={socialConfig.bilibili.url}
                  label={socialConfig.bilibili.name}
                  handle={socialConfig.bilibili.handle}
                  icon={<PlatformIconImage src="/social-icons/bilibili.png" alt="B站" />}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
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

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7.5C4 6.67157 4.67157 6 5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V16.5C20 17.3284 19.3284 18 18.5 18H5.5C4.67157 18 4 17.3284 4 16.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 8L11.17 12.115C11.6732 12.4505 12.3268 12.4505 12.83 12.115L19 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlatformIconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="grid size-10 place-items-center overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/14 dark:bg-zinc-900">
      <Image src={src} alt={alt} width={32} height={32} className="rounded-md" unoptimized />
    </span>
  );
}

function SocialLinkCard({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-zinc-950/10 bg-white p-3 transition hover:-translate-y-0.5 hover:border-zinc-950/18 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
    >
      {icon}
      <p className="mt-2 text-xs font-semibold text-zinc-900 dark:text-white/90">{label}</p>
      <p className="mt-1 truncate text-[11px] text-zinc-500 dark:text-white/60">{handle}</p>
    </a>
  );
}
