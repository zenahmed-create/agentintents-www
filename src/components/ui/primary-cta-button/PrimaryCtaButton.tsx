import Link from "next/link";

type PrimaryCtaButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function PrimaryCtaButton({
  href,
  label,
  className = "",
}: PrimaryCtaButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-md bg-black px-4 py-2 text-white hover:opacity-90 ${className}`}
    >
      {label}
    </Link>
  );
}

