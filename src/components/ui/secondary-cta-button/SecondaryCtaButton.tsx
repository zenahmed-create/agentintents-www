import Link from "next/link";

type SecondaryCtaButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function SecondaryCtaButton({
  href,
  label,
  className = "",
}: SecondaryCtaButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-md border border-zinc-300 px-4 py-2 hover:bg-zinc-50 ${className}`}
    >
      {label}
    </Link>
  );
}

