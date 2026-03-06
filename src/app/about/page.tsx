import { LifeDaysCounter } from "@/components/LifeDaysCounter";
import { NowSection } from "@/components/NowSection";
import { QuestAxis } from "@/components/QuestAxis";
import { MAIN_QUEST, SIDE_QUEST } from "@/content/about";
import { NOW_CARDS } from "@/content/now";
import { SloganTypewriter } from "@/components/SloganTypewriter";
import { HomeHero } from "@/components/HomeHero";

function daysSinceBirth(birthISO: string, now: Date) {
  const [y, m, d] = birthISO.split("-").map((x) => Number(x));
  const birthUtc = Date.UTC(y, m - 1, d);
  const nowUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((nowUtc - birthUtc) / (24 * 60 * 60 * 1000));
}

export default function AboutPage() {
  const birthISO = "1999-12-22";
  const initialDays = daysSinceBirth(birthISO, new Date());

  const daysLine = (
    <div className="group w-full max-w-5xl py-3 text-center">
      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        在下驽钝，入得仙途已有{" "}
        <span className="relative inline-flex items-baseline">
          <span className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 opacity-0 blur-2xl transition duration-200 group-hover:opacity-100">
            <span className="absolute inset-0 bg-[radial-gradient(20rem_10rem_at_50%_50%,rgba(14,165,233,0.20),transparent_60%)]" />
            <span className="absolute inset-0 bg-[radial-gradient(20rem_10rem_at_50%_50%,rgba(99,102,241,0.16),transparent_60%)]" />
          </span>
          <span className="tabular-nums text-3xl font-semibold sm:text-4xl">
            <span className="bg-[linear-gradient(90deg,#0ea5e9,#6366f1,#0ea5e9)] bg-[length:200%_100%] bg-clip-text text-transparent transition-[background-position,transform] duration-500 group-hover:scale-[1.02] group-hover:bg-[position:100%_0%]">
              <LifeDaysCounter birthISO={birthISO} initialDays={initialDays} />
            </span>
          </span>
        </span>{" "}
        天！
      </p>
    </div>
  );

  return (
    <div className="space-y-10">
      <HomeHero showCtas={false} />

      <SloganTypewriter
        text="让我来告诉你一个秘密，这个世界上所有的概念都是人想出来的，别人可以，你也可以。"
        msPerChar={55}
      />

      <NowSection cards={NOW_CARDS} />

      <QuestAxis main={MAIN_QUEST} side={SIDE_QUEST} daysLine={daysLine} />
    </div>
  );
}

