import { SiteHeaderB } from "@/components/variant-b/site-header";
import { SiteFooterB } from "@/components/variant-b/site-footer";

type SiteShellProps = Readonly<{ children: React.ReactNode }>;

export function SiteShell({ children }: SiteShellProps): React.ReactElement {
  return (
    <>
      <SiteHeaderB />
      {children}
      <SiteFooterB />
    </>
  );
}
