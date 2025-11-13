import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  description: "Your upgrade was cancelled. Continue on the free tier or restart checkout when you’re ready.",
  alternates: {
    canonical: "https://agentintents.com/cancel",
  },
};

export default function Cancel() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="max-w-lg px-6">
        <h1 className="text-2xl font-semibold">Checkout canceled</h1>
        <p className="mt-3 text-zinc-600">
          No charge was made. You can keep using the free tier (1,000 events/month) or try again anytime.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/upgrade" className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90">
            Try again
          </Link>
          <Link href="/" className="rounded-md border px-4 py-2 hover:bg-zinc-50">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}