import { PrimaryCtaButton } from "@/components/ui/primary-cta-button/PrimaryCtaButton";
import { SecondaryCtaButton } from "@/components/ui/secondary-cta-button/SecondaryCtaButton";
import { gradients } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { CodePreview } from "./HeroSection/CodePreview";

const highlights = [
  "Unified intents → offers → confirmations pipeline",
  "Usage-aware billing with Stripe integration out of the box",
  "Real-time webhooks and dashboards for every event",
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Ambient gradient backdrop */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          gradients.hero.backdrop,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute left-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full blur-3xl",
          gradients.hero.orbLeft,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-[-15%] bottom-[-20%] h-[360px] w-[360px] rounded-full blur-3xl",
          gradients.hero.orbRight,
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-zinc-900/80 dark:to-zinc-950" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <div
            className={cn(
              "absolute inset-x-[-15%] -top-12 h-40 rounded-full opacity-80 blur-2xl",
              gradients.hero.highlightGlow,
            )}
          />
          <div className="relative mx-auto max-w-xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
              Agentic Commerce API
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              The API that makes AI agents act — reliably and at scale.
            </h1>
            <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-300">
              For developers building AI agents and automations — turn model
              outputs into real-world actions. Trigger workflows, track intents,
              and scale your agents with one simple API designed for production
              resilience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryCtaButton href="/signup" label="Get your free API key →" />
              <SecondaryCtaButton
                href="/upgrade"
                label="See pricing tiers"
              />
            </div>

            <div className="mt-10 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-zinc-200/70 bg-white/80 px-4 py-3 text-left shadow-[0_15px_40px_-35px_rgba(15,23,42,0.45)] dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:shadow-[0_15px_40px_-30px_rgba(2,6,23,0.55)]"
                >
                  <span className="mt-[2px] h-2 w-2 rounded-full bg-gradient-to-br from-brand-iris via-brand-fuchsia to-brand-sky shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div
            className={cn(
              "absolute -inset-6 rounded-[3rem] blur-2xl",
              gradients.hero.codeGlow,
            )}
          />
          <div className="relative mx-auto flex max-w-lg justify-center">
            <CodePreview />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            <span className="rounded-full border border-zinc-200/60 px-4 py-1 dark:border-zinc-700/60">
              Webhooks
            </span>
            <span className="rounded-full border border-zinc-200/60 px-4 py-1 dark:border-zinc-700/60">
              Usage Limits
            </span>
            <span className="rounded-full border border-zinc-200/60 px-4 py-1 dark:border-zinc-700/60">
              Stripe Billing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

