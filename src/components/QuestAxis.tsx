import { QuestNode } from "@/content/about";

type Lane = "main" | "side";

export type AxisEvent = QuestNode & {
  lane: Lane;
};

function dateKey(date: string) {
  const parts = date.split("-");
  if (parts.length === 1) return `${parts[0]}-01-01`;
  if (parts.length === 2) return `${parts[0]}-${parts[1]}-01`;
  return date;
}

function compareDesc(a: AxisEvent, b: AxisEvent) {
  const ak = dateKey(a.sortDate ?? a.date);
  const bk = dateKey(b.sortDate ?? b.date);
  if (ak === bk) {
    if (a.lane !== b.lane) return a.lane === "main" ? -1 : 1;
    const ao = a.sortOrder ?? 0;
    const bo = b.sortOrder ?? 0;
    if (ao !== bo) return ao < bo ? -1 : 1;
    return a.id < b.id ? -1 : 1;
  }
  return ak < bk ? 1 : -1;
}

function formatMonth(date: string) {
  const parts = date.split("-");
  if (parts.length >= 2) return `${parts[0]}-${parts[1]}`;
  return date;
}

export function QuestAxis({
  main,
  side,
  daysLine,
}: {
  main: QuestNode[];
  side: QuestNode[];
  daysLine?: React.ReactNode;
}) {
  const events: AxisEvent[] = [
    ...main.map((n) => ({ ...n, lane: "main" as const })),
    ...side.map((n) => ({ ...n, lane: "side" as const })),
  ].sort(compareDesc);

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500 dark:text-white/60">
          QUEST MAP
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            主线 / 支线任务轴
          </h2>
          <p className="text-sm leading-6 text-zinc-600 dark:text-white/70">
            最近的在上面。主线更“厚重”，支线更“轻盈”。
          </p>
        </div>
        {daysLine ? (
          <div className="pt-2">
            <div className="flex justify-center">{daysLine}</div>
          </div>
        ) : null}
      </header>

      <ol className="space-y-5">
        {events.map((e) => (
          <li key={e.id}>
            {/* Mobile: 左边时间轴，右边事件 */}
            <div className="grid grid-cols-[84px_1fr] gap-4 sm:hidden">
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-zinc-950/10 dark:bg-white/10" />
                <div className="relative flex flex-col items-center gap-2 pt-2">
                  <span className="grid size-8 place-items-center rounded-full border border-zinc-950/15 bg-white shadow-sm dark:border-white/15 dark:bg-zinc-950">
                    <span className="size-2 rounded-full bg-zinc-950/80 dark:bg-white/80" />
                  </span>
                  <time className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500 dark:text-white/60">
                    {formatMonth(e.date)}
                  </time>
                </div>
              </div>

              <div className="min-h-[1px]">
                {e.lane === "main" ? <MainCard node={e} /> : <SideCard node={e} />}
              </div>
            </div>

            {/* Desktop: 左主线 / 中时间 / 右支线 */}
            <div className="hidden gap-4 sm:grid sm:grid-cols-[1fr_60px_1fr] sm:items-stretch">
              <div className="min-h-[1px]">
                {e.lane === "main" ? <MainCard node={e} /> : null}
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-950/10 dark:bg-white/10" />
                <div className="sticky top-24 mx-auto flex w-[60px] flex-col items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full border border-zinc-950/15 bg-white shadow-sm dark:border-white/15 dark:bg-zinc-950">
                    <span className="size-2 rounded-full bg-zinc-950/80 dark:bg-white/80" />
                  </span>
                  <time className="text-xs font-semibold tracking-[0.18em] text-zinc-500 dark:text-white/60">
                    {formatMonth(e.date)}
                  </time>
                </div>
              </div>

              <div className="min-h-[1px]">
                {e.lane === "side" ? <SideCard node={e} /> : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MainCard({ node }: { node: AxisEvent }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-950/15 bg-white p-5 shadow-[0_14px_45px_-36px_rgba(0,0,0,0.45)] dark:border-white/12 dark:bg-zinc-950 dark:shadow-none">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(22rem_16rem_at_20%_0%,rgba(0,0,0,0.07),transparent_55%)] dark:bg-[radial-gradient(22rem_16rem_at_20%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="relative flex items-start gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-white">
          <QuestIcon kind={node.icon} />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500 dark:text-white/60">
            MAIN QUEST
          </p>
          <p className="text-base font-semibold text-zinc-950 dark:text-white">
            {node.title}
          </p>
          {node.meta ? (
            <p className="text-sm leading-6 text-zinc-600 dark:text-white/70">
              {node.meta}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SideCard({ node }: { node: AxisEvent }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-500/18 bg-white p-5 dark:border-sky-400/18 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(22rem_16rem_at_80%_0%,rgba(14,165,233,0.12),transparent_55%)] dark:bg-[radial-gradient(22rem_16rem_at_80%_0%,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="relative flex items-start gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-400/15 dark:text-sky-200">
          <QuestIcon kind={node.icon} />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky-700/80 dark:text-sky-200/80">
            SIDE QUEST
          </p>
          <p className="text-base font-semibold text-zinc-950 dark:text-white">
            {node.title}
          </p>
          {node.meta ? (
            <p className="text-sm leading-6 text-zinc-600 dark:text-white/70">
              {node.meta}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function QuestIcon({ kind }: { kind: QuestNode["icon"] }) {
  switch (kind) {
    case "graduation":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 3 2 8l10 5 10-5-10-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 10v6c0 1.5 3 3 6 3s6-1.5 6-3v-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "company":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 20V6a2 2 0 0 1 2-2h6v16H4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 20V10h6a2 2 0 0 1 2 2v8h-8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 8h2M7 11h2M7 14h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "camera":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 8h4l2-2h4l2 2h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "switch":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 7h10l-2-2M17 17H7l2 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7 15 5M7 17l2 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

