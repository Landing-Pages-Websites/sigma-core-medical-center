import Link from "next/link";

const QUESTIONS = [
  ["Why aren't specific options listed?", "Actual products, procedures, and indications have not been verified for publication. This page discusses only the category."],
  ["Why does an appropriate provider matter?", "Questions about suitability, risks, and alternatives require a qualified clinician with your full personal context."],
  ["How can I book a consultation?", "Online scheduling is unavailable on this page. Provider and calendar details have not been verified for publication."],
  ["Where does the clinic serve?", "Sigma Core serves the Richmond, Virginia area. Address and operational details have not been verified for publication."],
];

export function RegenFaq(): React.ReactElement {
  return <section id="faq" className="b2-section r-faq"><div className="b2-wrap r-faq-grid">
    <div><h2>Frequently asked questions</h2><p>Common questions about this category and what this page can—and cannot—tell you.</p><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><nav aria-label="Related services"><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link></nav></div>
    <aside className="r-faq-boundary"><span>Reading this page</span><strong>Know the evidence boundary.</strong><p>See what this page can say now and what needs product-specific review.</p><Link href="#medical-sources">Read source status →</Link></aside>
  </div></section>;
}
