import { InteriorHeader } from "@/components/interior/interior-header";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import "../services/interior.css";
import "./batch-three.css";
export default function BatchThreeLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <><InteriorHeader />{children}<SiteFooterB /></>;
}
