"use client";

import { useMemo } from "react";

function daysInMonthUTC(year: number, month0: number) {
  // month0: 0-11
  return new Date(Date.UTC(year, month0 + 1, 0)).getUTCDate();
}

function toUtcDateOnly(d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function addMonthsUTC(dateOnlyUtc: Date, months: number) {
  const y = dateOnlyUtc.getUTCFullYear();
  const m = dateOnlyUtc.getUTCMonth();
  const d = dateOnlyUtc.getUTCDate();

  const total = m + months;
  const targetY = y + Math.floor(total / 12);
  const targetM = ((total % 12) + 12) % 12;
  const maxDay = daysInMonthUTC(targetY, targetM);
  const day = Math.min(d, maxDay);
  return new Date(Date.UTC(targetY, targetM, day));
}

function diffMonthsDays(startISO: string, now = new Date()) {
  const [sy, sm, sd] = startISO.split("-").map((x) => Number(x));
  const start = new Date(Date.UTC(sy, sm - 1, sd));
  const end = toUtcDateOnly(now);

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  let anchor = addMonthsUTC(start, months);
  if (anchor.getTime() > end.getTime()) {
    months -= 1;
    anchor = addMonthsUTC(start, months);
  }

  const msDay = 24 * 60 * 60 * 1000;
  const days = Math.max(0, Math.floor((end.getTime() - anchor.getTime()) / msDay));

  return { months, days };
}

function formatApproxMonths({ months, days }: { months: number; days: number }) {
  const approx = Math.max(0, months + days / 30);
  const rounded = Math.round(approx * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return `${text} 个月`;
}

export function PracticeDuration({ startISO }: { startISO: string }) {
  const text = useMemo(
    () => formatApproxMonths(diffMonthsDays(startISO)),
    [startISO],
  );
  return <span>{text}</span>;
}

