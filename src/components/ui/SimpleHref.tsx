import Link from "next/link";

export default function SimpleHref({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={{ pathname: href }}
      className="rounded-md bg-tgSecondary px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-500 hover:bg-tgPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tgSecondary"
    >
      {children}
    </Link>
  );
}
