import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AlbumMasonry } from "@/components/AlbumMasonry";
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

      <AlbumMasonry photos={album.photos} />
    </div>
  );
}

