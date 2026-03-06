import Image from "next/image";
import Link from "next/link";
import { AboutHero } from "@/components/AboutHero";
import { NOTES } from "@/content/notes";
import { getAlbums } from "@/content/photography.server";

export default function Home() {
  const latestNotes = NOTES.slice(0, 3);
  const latestShoots = getAlbums().slice(0, 3);

  return (
    <div className="space-y-10">
      <AboutHero
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-900"
            >
              About / 关于我
            </Link>
            <Link
              href="/notes"
              className="inline-flex h-10 items-center rounded-full border border-zinc-950/15 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/80 dark:hover:bg-zinc-950/70"
            >
              Notes / 笔记
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-full border border-zinc-950/15 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/80 dark:hover:bg-zinc-950/70"
            >
              Contact / 联系
            </Link>
          </div>
        }
      />

      <section className="py-2">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
            SLOGAN
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#6366f1,#0ea5e9)] bg-clip-text text-transparent">
              Make Curiosity Great Again.
            </span>
          </p>
        </div>
      </section>

      <section className="space-y-6 pb-6">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
              PHOTOGRAPHY
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              最近拍摄
            </h2>
          </div>
          <Link
            href="/photography"
            className="inline-flex h-9 items-center rounded-full border border-zinc-950/15 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/80 dark:hover:bg-zinc-950/70"
          >
            查看全部 →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {latestShoots.slice(0, 3).map((album) => (
            <Link
              key={album.slug}
              href={`/photography/${album.slug}`}
              className="group block overflow-hidden rounded-3xl border border-zinc-950/10 bg-white transition hover:-translate-y-0.5 hover:border-zinc-950/15 hover:shadow-[0_22px_70px_-55px_rgba(0,0,0,0.55)] dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-zinc-950/70 dark:hover:shadow-none"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950/5">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.45))] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {album.title}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      {album.year} · {album.subtitle ?? album.location}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/90 backdrop-blur">
                    OPEN →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
              NOTES
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              笔记（最近）
            </h2>
          </div>
          <Link
            href="/notes"
            className="inline-flex h-9 items-center rounded-full border border-zinc-950/15 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/80 dark:hover:bg-zinc-950/70"
          >
            阅读全部 →
          </Link>
        </div>

        <div className="space-y-4">
          {latestNotes.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-950/10 bg-white transition hover:-translate-y-0.5 hover:border-zinc-950/15 hover:shadow-[0_22px_70px_-55px_rgba(0,0,0,0.55)] dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-zinc-950/70 dark:hover:shadow-none sm:flex-row"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950/5 dark:bg-white/5 sm:aspect-auto sm:w-[260px] sm:shrink-0">
                <Image
                  src={item.cover}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.22em] text-foreground/60">
                      {item.type === "article" ? "ARTICLE" : "VIDEO"}
                    </span>
                    <time className="text-xs text-foreground/60">{item.date}</time>
                  </div>
                  <p className="text-base font-semibold leading-7 text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm leading-6 text-foreground/70">
                    跳转阅读 →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
