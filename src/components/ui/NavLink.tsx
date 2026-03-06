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
        "group inline-flex items-center text-foreground/80 transition-colors hover:text-foreground",
        isActive ? "text-foreground" : "text-foreground/70",
      ].join(" ")}
    >
      <span
        className={[
          "relative inline-flex items-center",
          "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground/70 after:transition-transform",
          "group-hover:after:scale-x-100",
          isActive ? "after:scale-x-100" : "",
        ].join(" ")}
      >
        {children}
      </span>
    </Link>
  );
}

