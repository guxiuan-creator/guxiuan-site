import { PageHeader } from "@/components/PageHeader";
import { VERSION_NOTES } from "@/content/versions";

export default function ProductPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        titleEn="Product"
        titleZh="产品"
        description="这里会持续记录我的产品探索：vibe coding 项目介绍，以及个人网站迭代日志。"
      />

      <section className="rounded-3xl border border-zinc-950/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-950/60">
        <p className="text-xs font-semibold tracking-[0.26em] text-zinc-500 dark:text-white/60">
          UPCOMING
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-white/75">
          这里将逐步补充我的 vibe coding 项目：产品背景、核心能力、设计思路、迭代路线。
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.26em] text-zinc-500 dark:text-white/60">
          WEBSITE CHANGELOG
        </p>
        <ol className="space-y-4">
          {VERSION_NOTES.map((item) => (
            <li
              key={`${item.version}-${item.date}`}
              className="rounded-3xl border border-zinc-950/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-950/60"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold tracking-[0.2em] text-zinc-900 dark:text-white">
                  {item.version}
                </p>
                <time className="text-xs text-zinc-500 dark:text-white/60">{item.date}</time>
              </div>
              <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-white/80">
                {item.summary}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-white/70">
                {item.changes.map((change) => (
                  <li key={change}>- {change}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

