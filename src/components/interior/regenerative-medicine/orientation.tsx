import Link from "next/link";

export function RegenOrientation(): React.ReactElement {
  return <section id="category-orientation" className="b2-section r-orientation"><div className="b2-wrap r-orientation-grid"><div><h2>Category Orientation</h2><div className="r-orientation-paper"><strong>Regenerative medicine is a broad category.</strong><p>Legality, evidence, risks, and suitability depend on the actual product or procedure.</p><p>Do not assume Sigma Core offers a specific modality before written verification and review.</p></div><Link href="/services" className="b2-text-link">Explore all care categories →</Link></div><aside><h3>Category boundary</h3><p>This page offers category-level orientation only.</p><p>Specific products, procedures, and clinical claims require separate review.</p></aside></div></section>;
}
