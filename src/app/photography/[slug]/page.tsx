import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ALBUMS } from "@/content/photography";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = ALBUMS.find((a) => a.slug === slug);
  if (!album) return notFound();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <a
          href="/photography"
          className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-2 text-xs font-semibold tracking-[0.18em] text-zinc-700 hover:bg-zinc-50"
          aria-label="Back to photography"
        >
          ← 返回
        </a>
      </div>

      <PageHeader
        titleEn="Album"
        titleZh={album.title}
        description={`${album.year} · ${album.location}${album.event ? ` · ${album.event}` : ""}`}
      />

      <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
        {album.photos.map((src, idx) => (
          <a
            key={`${src}-${idx}`}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="group mb-4 block break-inside-avoid overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-950/5"
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

