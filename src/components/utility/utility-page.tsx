import Link from "next/link";
import type { UtilityDocument } from "@/content/utility-documents";

export function UtilityPage({ document }: { document: UtilityDocument }): React.ReactElement {
  return (
    <main id="main-content" className="utility-page">
      <div className="utility-wrap">
        <div className="utility-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span>{document.title}</div>
        <div className="utility-heading">
          <div><p className="utility-kicker">Document status</p><h1>{document.title}</h1></div>
          <p>{document.introduction}</p>
        </div>
        <div className="utility-content">
          <section aria-labelledby="review-heading" className="utility-gate">
            <span className="utility-status">Not yet approved for publication</span>
            <h2 id="review-heading">What is still needed</h2>
            <ul>{document.missing.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <aside className="utility-next" aria-labelledby="next-heading">
            <h2 id="next-heading">Before this document goes live</h2>
            <p>{document.nextStep}</p>
            <nav aria-label="Related pages">
              <h3>Related pages</h3>
              <ul>{document.links.map(({ href, label }) => <li key={href}><Link href={href}>{label}<span aria-hidden="true"> ↗</span></Link></li>)}</ul>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
