import { PageHeader } from "@/components/PageHeader";
import { CopyButton } from "@/components/ui/CopyButton";

const EMAIL = "selby1126@163.com";
const XHS = "古秀安";
const DOUYIN = "古秀安";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        titleEn="Contact"
        titleZh="联系"
        description="欢迎交流：产品、摄影、合作。"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <section className="rounded-3xl border border-zinc-950/10 bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
            EMAIL
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="min-w-0 truncate text-base font-semibold text-zinc-950 hover:underline"
            >
              {EMAIL}
            </a>
            <CopyButton value={EMAIL} />
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            点击即可打开邮件客户端。
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-950/10 bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
            SOCIAL
          </p>
          <div className="mt-3 space-y-3 text-sm text-zinc-700">
            <div className="flex items-center justify-between">
              <span className="font-medium text-zinc-900">小红书</span>
              <div className="flex items-center gap-2">
                <span className="text-zinc-600">{XHS}</span>
                <CopyButton value={XHS} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-zinc-900">抖音</span>
              <div className="flex items-center gap-2">
                <span className="text-zinc-600">{DOUYIN}</span>
                <CopyButton value={DOUYIN} />
              </div>
            </div>
            <div className="pt-1 text-xs text-zinc-500">
              后续可补充二维码与链接。
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

