"use client";

import Link from "next/link";

import BrandMark from "@/components/layout/BrandMark";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button/PrimaryCtaButton";
import { SecondaryCtaButton } from "@/components/ui/secondary-cta-button/SecondaryCtaButton";

const navigation = [
  { href: "/docs/quickstart", label: "Docs" },
  { href: "/success", label: "Changelog" },
  { href: "/upgrade", label: "Pricing" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
        <BrandMark />

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-300">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-900 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SecondaryCtaButton href="/signup" label="Log in" className="hidden md:inline-flex" />
          <PrimaryCtaButton href="/signup" label="Get your API key →" className="hidden md:inline-flex" />
          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-zinc-200 text-sm font-medium dark:border-zinc-700">
              ☰
            </summary>
            <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
              <nav className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-zinc-900 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/signup"
                  className="rounded-md border border-zinc-200 px-3 py-2 text-center font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Log in
                </Link>
                <PrimaryCtaButton href="/signup" label="Get your API key →" className="w-full justify-center" />
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
