import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
export function GuideSummary(): React.ReactElement {
  return <section id="resource-summary" className="b3-section b3-blue b3-guide-summary">
    <div className="b3-shell b3-split">
      <div className="b3-guide-summary-copy"><h2>Resource Summary</h2><p className="b3-bracket">The actual educational material, its approved title, summary, and delivery method have not been supplied. We won’t describe content that cannot yet be verified.</p><div className="b3-status" id="important-boundary"><BookOpen size={28} aria-hidden /><div><strong>General education only</strong><span>Future material will not replace individualized medical advice.</span></div></div></div>
      <div className="b3-guide-summary-right"><div className="b3-guide-source"><strong>Resource details pending</strong><dl><div><dt>Approved title</dt><dd>Not supplied</dd></div><div><dt>Material</dt><dd>Not supplied</dd></div><div><dt>Delivery method</dt><dd>Not supplied</dd></div></dl></div><div className="b3-dark-panel"><h3>Explore a service instead</h3><p>Looking for an available overview? Neuropathy remains our first service priority.</p><Link href="/services/neuropathy" className="b3-text-link">Explore neuropathy <ArrowRight size={18} /></Link></div></div>
    </div>
  </section>;
}
