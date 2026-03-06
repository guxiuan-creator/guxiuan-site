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
    </div>
  );
}

