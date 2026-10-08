import { SiteShell } from "@/components/shared/site-shell";

type SiteLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function SiteLayout({ children }: SiteLayoutProps): React.ReactElement {
  return <SiteShell>{children}</SiteShell>;
}
