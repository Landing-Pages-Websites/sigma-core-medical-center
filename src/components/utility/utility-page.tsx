import Link from "next/link";
import {
  UTILITY_CONTACT,
  type UtilityDocument,
  type UtilityDocumentSection,
} from "@/content/utility-documents";

const INLINE_LINK_PATTERN = /(https?:\/\/\S+?(?=[.,]?(?:\s|$))|[\w.+-]+@[\w-]+(?:\.[\w-]+)+|(?:1-)?\d{3}-\d{3}-\d{4})/g;

function sectionId(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function inlineHref(token: string): string {
  if (/^https?:\/\//.test(token)) return token;
  if (token.includes("@")) return `mailto:${token}`;
  const digits = token.replace(/-/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}

function withInlineLinks(text: string): React.ReactNode[] {
  return text.split(INLINE_LINK_PATTERN).map((part, index) =>
    index % 2 === 1 ? <a key={index} href={inlineHref(part)}>{part}</a> : part,
  );
}

function renderContents(sections: readonly UtilityDocumentSection[]): React.ReactElement {
  return (
    <nav className="utility-toc" aria-labelledby="contents-heading">
      <h2 id="contents-heading" className="utility-aside-heading">On this page</h2>
      <ol>{sections.map(({ heading }) => <li key={heading}><a href={`#${sectionId(heading)}`}>{heading}</a></li>)}</ol>
    </nav>
  );
}

function renderSection({ heading, body }: UtilityDocumentSection): React.ReactElement {
  const id = sectionId(heading);
  return (
    <section key={id} id={id} aria-labelledby={`${id}-heading`} className="utility-section">
      <h2 id={`${id}-heading`}>{heading}</h2>
      <p>{withInlineLinks(body)}</p>
    </section>
  );
}

function renderRelated(links: UtilityDocument["links"]): React.ReactElement {
  return (
    <aside className="utility-next" aria-label="Related pages and contact">
      <nav aria-labelledby="related-heading">
        <h2 id="related-heading" className="utility-aside-heading">Related pages</h2>
        <ul>{links.map(({ href, label }) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      </nav>
      <div className="utility-contact">
        <h2 className="utility-aside-heading">Contact the office</h2>
        <address>
          <a href={inlineHref(UTILITY_CONTACT.phone)}>{UTILITY_CONTACT.phone}</a>
          <a href={inlineHref(UTILITY_CONTACT.email)}>{UTILITY_CONTACT.email}</a>
          {UTILITY_CONTACT.addressLines.map((line) => <span key={line}>{line}</span>)}
        </address>
      </div>
    </aside>
  );
}

export function UtilityPage({ document }: { document: UtilityDocument }): React.ReactElement {
  return (
    <main id="main-content" className="utility-page">
      <div className="utility-wrap">
        <div className="utility-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span>{document.title}</div>
        <div className="utility-heading">
          <div>
            <h1>{document.title}</h1>
            <p className="utility-effective">Effective date: <time dateTime={document.effectiveDate.iso}>{document.effectiveDate.label}</time></p>
          </div>
          <p>{document.introduction}</p>
        </div>
        <div className="utility-content">
          {renderContents(document.sections)}
          <article className="utility-document" aria-label={document.title}>{document.sections.map(renderSection)}</article>
          {renderRelated(document.links)}
        </div>
      </div>
    </main>
  );
}
