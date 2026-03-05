"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group inline-flex items-center text-zinc-800 transition-colors hover:text-zinc-950",
        isActive ? "text-zinc-950" : "text-zinc-700",
      ].join(" ")}
    >
      <span
        className={[
          "relative inline-flex items-center",
          "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-950/70 after:transition-transform",
          "group-hover:after:scale-x-100",
          isActive ? "after:scale-x-100" : "",
        ].join(" ")}
      >
        {children}
      </span>
    </Link>
  );
}

