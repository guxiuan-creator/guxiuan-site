import { PageHeader } from "@/components/PageHeader";
import { getAlbums } from "@/content/photography.server";
import { PhotographyIndex } from "@/components/PhotographyIndex";

export default function PhotographyPage() {
  const albums = getAlbums();
  return (
    <div className="space-y-7">
      <PageHeader
        titleEn="Photography"
        titleZh="摄影"
        description="以照片为主：先搜到合集，再点进去看这一组。"
      />

      <PhotographyIndex albums={albums} />
    </div>
  );
}

