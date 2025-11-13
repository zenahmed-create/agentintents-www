"use client";

import { useState } from "react";

export function UpgradeClient() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setErr(null);
    try {
      const apiKey = localStorage.getItem("ai_api_key");
      if (!apiKey) {
        setErr("No API key found. Please create a key on the signup page first.");
        return;
      }

      const base = process.env.NEXT_PUBLIC_API_BASE!;
      const res = await fetch(`${base}/v1/billing/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data?.error || "Failed to start checkout.");
        return;
      }

      window.location.href = data.url;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErr(error.message);
      } else {
        setErr("Network error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="w-full max-w-md px-6">
        <h1 className="text-2xl font-semibold">Developer Plan — $5/mo</h1>
        <p className="mt-3 text-zinc-600">
          Increase your limit to <b>50,000 intent events/month</b>. Cancel anytime.
        </p>
        <button
          onClick={startCheckout}
          disabled={loading}
          className="mt-6 w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Redirecting…" : "Upgrade via Stripe"}
        </button>
        <p className="mt-3 text-xs text-zinc-500">
          You&apos;ll be redirected to Stripe Checkout. After payment, you&apos;ll return to our site.
        </p>
        {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
      </div>
    </main>
  );
}

export default UpgradeClient;

