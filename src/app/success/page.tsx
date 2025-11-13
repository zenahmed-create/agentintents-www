import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upgrade Successful",
  description: "Your AgentIntents Developer plan is active. Access 50,000 monthly events and advanced workflows.",
  alternates: {
    canonical: "https://agentintents.com/success",
  },
};

export default function Success() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="max-w-lg px-6">
        <h1 className="text-2xl font-semibold">🎉 You&apos;re upgraded!</h1>
        <p className="mt-3 text-zinc-600">
          Your plan is now <b>Developer</b>. Limits: <b>50,000 events/month</b>. Your subscription receipt is sent by
          Stripe. You can start using the API right away.
        </p>
        <Link href="/" className="mt-6 inline-block rounded-md border px-4 py-2 hover:bg-zinc-50">
          Back to Home
        </Link>
      </div>
    </main>
  );
}