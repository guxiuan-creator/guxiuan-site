import type { Metadata } from "next";
import "./globals.css";

import { SiteMarquee } from "@/components/SiteMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: {
    default: "GUXIUAN",
    template: "%s · GUXIUAN",
  },
  description: "ToC 产品经理 · 信息与交互设计背景",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className="flex min-h-dvh flex-col bg-background text-foreground antialiased"
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(60rem_40rem_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
        <SiteNav />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-8">
          {children}
        </main>
        <SiteMarquee />
        <SiteFooter />
      </body>
    </html>
  );
}
