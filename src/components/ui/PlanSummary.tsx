import { ApiKeyHint } from "./ApiKeyHint";

const tiers = [
  { name: "Free", detail: "1,000 intent events / month" },
  { name: "Developer", detail: "50,000 intent events / month" },
  { name: "Enterprise", detail: "Unlimited events & SLAs" },
];

export function PlanSummary() {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-zinc-200 bg-white/70 p-6 text-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Plans overview
        </p>
        <ul className="mt-4 space-y-3 text-zinc-700">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className="flex items-start justify-between gap-6 rounded-md bg-zinc-50/80 px-3 py-2"
            >
              <span className="font-medium text-zinc-900">{tier.name}</span>
              <span className="text-right text-zinc-600">{tier.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-md border border-dashed border-zinc-200 bg-zinc-50 p-4 text-zinc-600">
        <ApiKeyHint />
      </div>
    </div>
  );
}

