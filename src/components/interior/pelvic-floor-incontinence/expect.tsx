import Link from "next/link";

export function PelvicExpect(): React.ReactElement {
  return <section id="what-to-expect" className="b2-section p-expect"><div className="b2-wrap p-expect-grid"><div className="p-expect-main"><h2>What To Expect</h2><p>Your time and privacy matter. Online scheduling is unavailable, and appointment requests cannot be submitted here. Specific visit details are not confirmed.</p></div><aside className="p-expect-privacy"><span className="p-expect-bars" aria-hidden="true" /><p>Provider identity, examination details, visit length, and care processes are not available for publication yet.</p><Link href="/services" className="b2-text-link">Learn about all services →</Link></aside></div></section>;
}
