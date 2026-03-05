import { QuestNode } from "@/content/about";

export function QuestTimeline({
  titleEn,
  titleZh,
  description,
  nodes,
}: {
  titleEn: string;
  titleZh: string;
  description?: string;
  nodes: QuestNode[];
}) {
  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.28em] text-zinc-500">
          {titleEn.toUpperCase()}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            {titleZh}
          </h2>
          {description ? (
            <p className="text-sm text-zinc-600">{description}</p>
          ) : null}
        </div>
      </header>

      <ol className="relative space-y-4 border-l border-zinc-950/10 pl-6">
        {nodes.map((node) => (
          <li key={node.id} className="relative">
            <span className="absolute -left-[11px] top-6 grid size-5 place-items-center rounded-full border border-zinc-950/15 bg-white">
              <span className="size-2 rounded-full bg-zinc-950/70" />
            </span>

            <div className="grid gap-4 rounded-3xl border border-zinc-950/10 bg-white p-5 sm:grid-cols-[120px_1fr] sm:items-center">
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-start sm:justify-start">
                <div className="grid size-14 place-items-center rounded-2xl bg-zinc-950 text-white">
                  <QuestIcon kind={node.icon} />
                </div>
                <time className="text-xs font-semibold tracking-[0.22em] text-zinc-500 sm:mt-3">
                  {node.date}
                </time>
              </div>

              <div className="space-y-1">
                <p className="text-base font-semibold text-zinc-950">
                  {node.title}
                </p>
                {node.meta ? (
                  <p className="text-sm leading-6 text-zinc-600">{node.meta}</p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function QuestIcon({ kind }: { kind: QuestNode["icon"] }) {
  switch (kind) {
    case "graduation":
      return (
        <svg
          width="24"
          height="24"
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
          width="24"
          height="24"
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
          width="24"
          height="24"
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
          width="24"
          height="24"
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

