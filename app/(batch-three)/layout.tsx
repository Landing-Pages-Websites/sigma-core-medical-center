import { SiteHeaderB } from "@/components/variant-b/site-header";
import { SiteFooterB } from "@/components/variant-b/site-footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import "../services/interior.css";
import "./batch-three.css";

export default function BatchThreeLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <>
      <ScrollProgress />
      <SiteHeaderB />
      {children}
      <SiteFooterB />
      <BackToTop />
    </>
  );
}
