export const gradients = {
  hero: {
    backdrop:
      "bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950",
    orbLeft:
      "bg-gradient-to-br from-brand-iris/35 via-brand-sky/25 to-transparent dark:from-brand-iris/30",
    orbRight:
      "bg-gradient-to-tl from-brand-fuchsia/30 via-transparent to-transparent dark:from-brand-fuchsia/25",
    highlightGlow:
      "bg-gradient-to-r from-transparent via-white to-transparent dark:via-zinc-900",
    codeGlow:
      "bg-gradient-to-tr from-brand-iris/15 via-transparent to-brand-fuchsia/15",
  },
  howItWorks: {
    backdrop:
      "bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950",
    orbPrimary:
      "bg-gradient-to-br from-brand-iris/40 via-brand-fuchsia/30 to-transparent dark:from-brand-iris/30 dark:via-brand-fuchsia/20",
    orbSecondary:
      "bg-gradient-to-tl from-brand-sky/30 via-transparent to-transparent dark:from-brand-sky/20",
    cardHalo:
      "bg-gradient-to-r from-brand-iris/0 via-brand-fuchsia/5 to-brand-sky/0",
  },
} as const;

