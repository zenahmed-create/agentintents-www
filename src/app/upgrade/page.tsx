'use client';

export default function Upgrade() {
  async function go() {
    const base = process.env.NEXT_PUBLIC_API_BASE!;
    const res = await fetch(`${base}/v1/billing/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert('Failed to start checkout.');
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md px-6">
        <h1 className="text-2xl font-semibold">Developer Plan — $5/mo</h1>
        <p className="mt-3 text-zinc-600">
          Increase your limit to <b>50,000 intent events/month</b>. Cancel anytime.
        </p>
        <button
          onClick={go}
          className="mt-6 w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
        >
          Upgrade via Stripe
        </button>
        <p className="mt-3 text-xs text-zinc-500">
          You’ll be redirected to Stripe Checkout. After payment, you’ll return to our site.
        </p>
      </div>
    </main>
  );
}