export function PageHeader({
  titleEn,
  titleZh,
  description,
}: {
  titleEn: string;
  titleZh: string;
  description?: string;
}) {
  return (
    <header className="space-y-3 pb-5 sm:pb-7">
      <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500 dark:text-white/60">
        {titleEn.toUpperCase()}
      </p>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
          {titleZh}
        </h1>
        {description ? (
          <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

