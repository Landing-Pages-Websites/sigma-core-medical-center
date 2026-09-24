import { InteriorHeader } from "@/components/interior/interior-header";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import "./interior.css";

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <><InteriorHeader />{children}<SiteFooterB /></>;
}
