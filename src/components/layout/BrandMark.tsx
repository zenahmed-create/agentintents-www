import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex flex-col text-zinc-900 dark:text-zinc-50">
      <span className="text-lg font-semibold tracking-tight">AgentIntents</span>
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        An Undrstnd Company
      </span>
    </Link>
  );
}

export default BrandMark;

