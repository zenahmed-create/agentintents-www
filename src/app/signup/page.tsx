'use client';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [key, setKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function createKey(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setKey(null);
    try {
      const base = process.env.NEXT_PUBLIC_API_BASE!;
      const res = await fetch(`${base}/v1/dev-keys`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner_email: email })
      });
      const data = await res.json();
      if (data?.api_key) setKey(data.api_key);
      else alert(data?.error || 'Failed to create API key');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md px-6">
        <h1 className="text-2xl font-semibold">Get your API key</h1>
        <p className="mt-2 text-zinc-600">
          Free tier: <b>1,000 intent events/month</b>. Upgrade anytime for higher limits.
        </p>

        <form onSubmit={createKey} className="mt-6 space-y-3">
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Creating…' : 'Create API Key'}
          </button>
        </form>

        {key && (
          <div className="mt-6 rounded-md border bg-zinc-50 p-4">
            <p className="text-sm text-zinc-600">Your API key:</p>
            <code className="mt-1 block break-all rounded bg-white p-2">{key}</code>
            <p className="mt-3 text-sm">
              Use it in requests:
              <br />
              <code>Authorization: Bearer {key}</code>
            </p>
            <a
              href="/upgrade"
              className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Upgrade to 50,000 events/month
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
