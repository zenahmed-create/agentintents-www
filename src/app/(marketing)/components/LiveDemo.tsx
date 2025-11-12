"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button/PrimaryCtaButton";
import { gradients } from "@/lib/theme";
import { cn } from "@/lib/utils";

const demoPairs = [
  {
    label: "Create intent",
    request: `curl -X POST https://api.agentintents.com/v1/intents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "goal": "Book a product demo",
    "context": { "company": "Acme Robotics" }
  }'`,
    response: `{
  "status": "success",
  "action": "meeting booked",
  "intent": {
    "id": "intent_7d9...",
    "goal": "Book a product demo",
    "status": "open",
    "offers": []
  }
}`,
  },
  {
    label: "Create offer",
    request: `curl -X POST https://api.agentintents.com/v1/intents/intent_7d9/offers \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant_id": "calendly",
    "summary": "Demo scheduled with the sales team",
    "total_price": 0,
    "currency": "USD",
    "eta_days": 1
  }'`,
    response: `{
  "id": "offer_42c...",
  "merchant_id": "calendly",
  "summary": "Demo scheduled with the sales team",
  "total_price": 0,
  "currency": "USD",
  "eta_days": 1
}`,
  },
  {
    label: "Confirm offer",
    request: `curl -X POST https://api.agentintents.com/v1/intents/intent_7d9/confirm \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "offer_id": "offer_42c..." }'`,
    response: `{
  "id": "intent_7d9...",
  "goal": "Book a product demo",
  "status": "confirmed",
  "selected_offer_id": "offer_42c...",
  "offers": [
    {
      "id": "offer_42c...",
      "merchant_id": "calendly",
      "summary": "Demo scheduled with the sales team",
      "total_price": 0,
      "currency": "USD",
      "eta_days": 1
    }
  ]
}`,
  },
] as const;

const STEP_DURATION = 8000;

export default function LiveDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { label, request, response } = demoPairs[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % demoPairs.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, STEP_DURATION);

    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative overflow-hidden border-t border-zinc-100 py-28 dark:border-zinc-800">
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          gradients.howItWorks.backdrop,
        )}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Live demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            See the API in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
            Spin up a new intent in one call and watch the response stream back
            immediately. Every request is authenticated, logged, and ready for
            production workflows.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          <span>
            Step {currentIndex + 1} of {demoPairs.length}
          </span>
          <button
            onClick={goToNext}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-zinc-600 transition hover:border-zinc-200 hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-600"
          >
            Next
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] transition-all duration-700 hover:-translate-y-2 hover:border-zinc-200 hover:shadow-[0_40px_90px_-45px_rgba(6,17,38,0.55)] dark:border-zinc-800/70 dark:bg-zinc-900/80">
            <span
              className={cn(
                "pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                gradients.howItWorks.cardHalo,
              )}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Request
                </h3>
                <span className="rounded-full border border-zinc-200/70 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700/70 dark:text-zinc-400">
                  {label}
                </span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl bg-zinc-100/80 p-4 font-mono text-sm leading-relaxed text-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
                {request}
              </pre>
            </div>
          </div>

          <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] transition-all duration-700 hover:-translate-y-2 hover:border-zinc-200 hover:shadow-[0_40px_90px_-45px_rgba(6,17,38,0.55)] dark:border-zinc-800/70 dark:bg-zinc-900/80">
            <span
              className="pointer-events-none absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-brand-iris/15 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              className={cn(
                "pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                gradients.howItWorks.cardHalo,
              )}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Response · 200 OK
                </h3>
                <span className="rounded-full border border-brand-iris/40 px-3 py-1 text-xs font-semibold text-brand-iris dark:border-brand-iris/50 dark:text-brand-iris">
                  Live
                </span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl bg-zinc-100/80 p-4 font-mono text-sm leading-relaxed text-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
                {response}
              </pre>
              <div className="mt-6">
                <PrimaryCtaButton
                  href="/signup"
                  label="Get your API key →"
                  className="px-5 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

