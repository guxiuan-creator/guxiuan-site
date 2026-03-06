import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAlbumBySlug } from "@/content/photography.server";

export default async function AlbumPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: { from?: string } | Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await Promise.resolve(searchParams ?? {});
  const album = getAlbumBySlug(slug);
  if (!album) return notFound();

  const backHref = from === "home" ? "/" : "/photography";
  const backLabel = from === "home" ? "Back to home" : "Back to photography";

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={backHref}
          className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-2 text-xs font-semibold tracking-[0.18em] text-zinc-700 transition hover:bg-zinc-50 dark:border-white/12 dark:bg-zinc-950/60 dark:text-white/75 dark:hover:bg-zinc-950/70"
          aria-label={backLabel}
        >
          ← 返回
        </Link>
      </div>

      <PageHeader
        titleEn="Album"
        titleZh={album.title}
        description={
          album.subtitle ??
          `${album.year} · ${album.location}${album.event ? ` · ${album.event}` : ""}`
        }
      />

      <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
        {album.photos.map((src, idx) => (
          <a
            key={`${src}-${idx}`}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="group mb-4 block break-inside-avoid overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-950/5 dark:border-white/10 dark:bg-white/5"
          >
            {/* 用原始宽高形成瀑布流：横图/竖图都会自然排布 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-auto w-full transition duration-700 group-hover:scale-[1.01]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

