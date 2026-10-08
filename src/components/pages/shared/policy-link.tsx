import Link from "next/link";

type PolicyLinkProps = {
  label: React.ReactNode;
  className: string;
  href?: "/terms" | "/privacy" | "/notice-of-privacy-practices";
};

/** Link to one of the site policy pages (terms by default). */
export function PolicyLink({ label, className, href = "/terms" }: PolicyLinkProps): React.ReactElement {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
