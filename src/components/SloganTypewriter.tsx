"use client";

import { useEffect, useMemo, useState } from "react";

export function SloganTypewriter({
  text,
  msPerChar = 28,
}: {
  text: string;
  msPerChar?: number;
}) {
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  const [count, setCount] = useState(reducedMotion ? text.length : 0);

  useEffect(() => {
    if (reducedMotion) return;
    setCount(0);
    const id = window.setInterval(() => {
      setCount((c) => {
        const next = c + 1;
        if (next >= text.length) {
          window.clearInterval(id);
          return text.length;
        }
        return next;
      });
    }, msPerChar);
    return () => window.clearInterval(id);
  }, [msPerChar, reducedMotion, text.length]);

  const shown = text.slice(0, count);

  return (
    <section className="py-2">
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="text-xs font-semibold tracking-[0.28em] text-foreground/60">
          SLOGAN
        </p>
        <p className="mt-4 text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
          <span className="bg-[linear-gradient(90deg,#0ea5e9,#6366f1,#0ea5e9)] bg-clip-text text-transparent">
            {shown}
          </span>
          <span
            aria-hidden="true"
            className={[
              "ml-1 inline-block h-[1.2em] w-[2px] align-[-0.12em]",
              count < text.length
                ? "bg-foreground/40 animate-[blink_1s_step-end_infinite]"
                : "bg-transparent",
            ].join(" ")}
          />
        </p>

        <style>{`
          @keyframes blink { 50% { opacity: 0 } }
        `}</style>
      </div>
    </section>
  );
}

