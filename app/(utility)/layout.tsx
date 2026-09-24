import { InteriorHeader } from "@/components/interior/interior-header";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import "../services/interior.css";
import "./utility.css";

export default function UtilityLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <><InteriorHeader />{children}<SiteFooterB /></>;
}
