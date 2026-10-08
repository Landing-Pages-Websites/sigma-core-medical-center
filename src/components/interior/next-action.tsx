import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type NextActionProps = { href: string; children: React.ReactNode; pale?: boolean; };

export function NextAction({ href, children, pale = false }: NextActionProps): React.ReactElement {
  return <Link href={href} className={`interior-action ${pale ? "interior-action-pale" : ""}`}>{children}<ArrowUpRight size={20} aria-hidden /></Link>;
}
