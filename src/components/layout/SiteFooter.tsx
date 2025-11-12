import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/docs/quickstart", label: "Quickstart" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/success", label: "Success" },
      { href: "/cancel", label: "Cancel policy" },
      { href: "/upgrade", label: "Upgrade" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white/70 py-16 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            AgentIntents
          </Link>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            The API for agentic commerce—intents to confirmations with billing, webhooks, and usage limits built-in.
          </p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-zinc-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 dark:text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} AgentIntents. All rights reserved.</p>
      </div>
    </footer>
  );
}

