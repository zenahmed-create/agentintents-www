export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight">
          The API for Agentic Commerce
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Coordinate agents through <span className="font-medium">Intents → Offers → Confirmations</span>,
          with webhooks and billing built-in. No orchestration glue code.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="/signup"
            className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Get API Key (Free)
          </a>
          <a
            href="/upgrade"
            className="rounded-md border border-zinc-300 px-4 py-2 hover:bg-zinc-50"
          >
            Upgrade to Developer ($5/mo)
          </a>
        </div>

        <div className="mt-12 space-y-2 text-sm text-zinc-600">
          <p>Free: 1,000 intent events/month. Developer: 50,000 events/month.</p>
          <p>Use your API key in requests via <code>Authorization: Bearer &lt;key&gt;</code>.</p>
        </div>
      </div>
    </main>
  );
}