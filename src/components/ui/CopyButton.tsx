"use client";

import { useState } from "react";

export function CopyButton({
  value,
  label = "复制",
  copiedLabel = "已复制",
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: do nothing (clipboard may be blocked)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-zinc-700 transition hover:bg-zinc-50"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}

