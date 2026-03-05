import { PageHeader } from "@/components/PageHeader";
import { ALBUMS } from "@/content/photography";
import { PhotographyIndex } from "@/components/PhotographyIndex";

export default function PhotographyPage() {
  return (
    <div className="space-y-7">
      <PageHeader
        titleEn="Photography"
        titleZh="摄影"
        description="以照片为主：先搜到合集，再点进去看这一组。"
      />

      <PhotographyIndex albums={ALBUMS} />
    </div>
  );
}

