"use client";

import { useEffect, useMemo, useState } from "react";

function daysSinceBirth(birthISO: string, now: Date) {
  const [y, m, d] = birthISO.split("-").map((x) => Number(x));
  const birthUtc = Date.UTC(y, m - 1, d);
  const nowUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((nowUtc - birthUtc) / (24 * 60 * 60 * 1000));
}

export function LifeDaysCounter({
  birthISO,
  initialDays,
}: {
  birthISO: string;
  initialDays: number;
}) {
  const [days, setDays] = useState<number>(initialDays);

  const recompute = useMemo(() => {
    return () => setDays(daysSinceBirth(birthISO, new Date()));
  }, [birthISO]);

  useEffect(() => {
    const id = setInterval(recompute, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, [recompute]);

  return (
    <span suppressHydrationWarning className="tabular-nums">
      {days.toLocaleString("zh-CN")}
    </span>
  );
}

