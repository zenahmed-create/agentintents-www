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
          <Link
            href="/signup"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-sm font-medium md:hidden"
          >
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
