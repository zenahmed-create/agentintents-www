import { Activity, Send, Workflow } from "lucide-react";
import { gradients } from "@/lib/theme";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    icon: Send,
    title: "Connect your agent",
    description:
      "Issue a secure API key, drop in our REST client, and start sending intents in minutes. No custom auth or middleware required.",
  },
  {
    id: "02",
    icon: Workflow,
    title: "Automate the workflows",
    description:
      "Capture every model output, enrich the context, and fan out to offers, confirmations, or follow-up tasks across your existing stack.",
  },
  {
    id: "03",
    icon: Activity,
    title: "Monitor & scale with confidence",
    description:
      "Track usage, billing, and live events from one dashboard. Alerts, webhooks, and Stripe-native billing keep you production ready.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Decorative background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          gradients.howItWorks.backdrop,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -top-32 right-12 h-72 w-72 rounded-full blur-3xl",
          gradients.howItWorks.orbPrimary,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-10 left-24 h-64 w-64 rounded-full blur-3xl",
          gradients.howItWorks.orbSecondary,
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-900/80 dark:to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            How it works
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            From prototype to production in three effortless steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
            AgentIntents wraps your agent automation lifecycle with safe auth,
            structured workflows, and enterprise-grade observability—so you can
            focus on what your agents should do, not how they get it done.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-y-0 hidden w-full md:block">
            <div className="absolute left-1/2 top-0 h-0.5 w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700" />
          </div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-2 hover:border-zinc-200 hover:shadow-[0_40px_90px_-45px_rgba(6,17,38,0.55)] dark:border-zinc-800/70 dark:bg-zinc-900/70 dark:shadow-[0_25px_70px_-40px_rgba(2,6,23,0.55)] hover:dark:border-zinc-700"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100",
                        gradients.howItWorks.cardHalo,
                      )}
                    />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/70 bg-white/90 text-zinc-900 shadow-inner shadow-white/40 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100">
                      <Icon className="h-5 w-5 text-brand-iris dark:text-brand-iris" />
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500">
                    {step.id}
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {step.description}
                  </p>
                </div>

                <div className="mt-10 flex h-10 items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent dark:via-indigo-500/40" />
                  Ready in minutes
                </div>

                {/* Ambient glow */}
                <div className="pointer-events-none absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-indigo-400/0 via-fuchsia-400/5 to-sky-400/0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-8 text-center shadow-[0_30px_80px_-45px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-200 hover:shadow-[0_40px_90px_-40px_rgba(6,17,38,0.6)] dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-[0_30px_80px_-45px_rgba(2,6,23,0.6)]">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Prefer to follow along? Walk through issuing a key, creating your
            first intent, and listening for events in under five minutes.
          </p>
          <a
            href="/docs/quickstart"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/30 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Read the Quickstart
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

