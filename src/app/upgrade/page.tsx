"use client";
import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Upgrade",
  description: "Upgrade to the AgentIntents Developer plan for 50,000 intents per month and production-ready support.",
  alternates: {
    canonical: "https://agentintents.com/upgrade",
  },
};

export default function Upgrade() {
  // State management for loading and error handling
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setErr(null);
    try {
      // 📖 Read the API key that was saved during signup
      const apiKey = localStorage.getItem("ai_api_key");
      if (!apiKey) {
        setErr("No API key found. Please create a key on the signup page first.");
        return;
      }

      const base = process.env.NEXT_PUBLIC_API_BASE!; // https://api.agentintents.com
      const res = await fetch(`${base}/v1/billing/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,  // ← REQUIRED: Authenticate with API key
        },
      });

      const data = await res.json();
      
      // Check if the request was successful
      if (!res.ok) {
        setErr(data?.error || "Failed to start checkout.");
        return;
      }
      
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error: unknown) {
      // Handle network errors or unexpected failures
      if (error instanceof Error) {
        setErr(error.message);
      } else {
        setErr("Network error");
      }
    } finally {
      // Always reset loading state
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