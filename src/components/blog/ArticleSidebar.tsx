import type { ReactElement } from "react";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SidebarConsult from "@/components/blog/SidebarConsult";
import SidebarServices from "@/components/blog/SidebarServices";
import type { BlogPost } from "@/lib/blog";

/**
 * Everything beside an article. On large screens: a booking card, the service
 * pages, related articles, then a compact booking card that stays in view for
 * the rest of the article. Below that the booking cards are dropped (the
 * article already ends on BlogConsultCta) and the rest stacks under the article.
 */
export default function ArticleSidebar({ related }: { related: readonly BlogPost[] }): ReactElement {
  return (
    <div className="flex flex-col gap-8">
      <div className="hidden lg:block"><SidebarConsult variant="full" /></div>
      <SidebarServices />
      <RelatedArticles posts={related} />
      <div className="hidden flex-1 lg:block">
        <div className="sticky top-28"><SidebarConsult variant="compact" /></div>
      </div>
    </div>
  );
}
