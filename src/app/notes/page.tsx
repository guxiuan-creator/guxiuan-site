import { PageHeader } from "@/components/PageHeader";
import { NOTES } from "@/content/notes";
import { NotesIndex } from "@/components/NotesIndex";

export default function NotesPage() {
  return (
    <div className="space-y-7">
      <PageHeader
        titleEn="Notes"
        titleZh="笔记"
        description="封面 / 标题 / 日期的目录页，点击跳转到公众号或外部视频链接。"
      />

      <NotesIndex notes={NOTES} />

      <section className="rounded-3xl border border-zinc-950/10 bg-white p-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] text-zinc-800">
          UPDATE / 如何更新
        </h2>
        <ol className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
          <li>1) 把封面图放到 `public/notes/covers/`（建议 WebP/JPG）。</li>
          <li>2) 在 `src/content/notes.ts` 新增一条记录（标题、日期、链接、封面路径）。</li>
          <li>3) 保存并部署，目录页会自动更新。</li>
        </ol>
      </section>
    </div>
  );
}

