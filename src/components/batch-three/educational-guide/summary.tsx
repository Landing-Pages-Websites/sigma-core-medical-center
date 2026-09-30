import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
export function GuideSummary(): React.ReactElement {
  return <section id="resource-summary" className="b3-section b3-blue b3-guide-summary">
    <div className="b3-shell b3-split">
      <div className="b3-guide-summary-copy"><h2>Source and status overview</h2><div className="b3-status" id="important-boundary"><BookOpen size={28} aria-hidden /><div><strong>General education only</strong><span>Future material will not replace individualized medical advice.</span></div></div></div>
      <div className="b3-guide-summary-right"><div className="b3-guide-source"><strong>Current source status</strong><dl><div><dt>Approved title</dt><dd>Not supplied</dd></div><div><dt>Guide or video</dt><dd>Not received</dd></div><div><dt>Access method</dt><dd>Not defined</dd></div></dl></div><div className="b3-dark-panel"><h3>Explore neuropathy care</h3><p>Read the current service overview while guide details are pending.</p><Link href="/services/neuropathy" className="b3-text-link">Explore neuropathy <ArrowRight size={18} /></Link></div></div>
    </div>
  </section>;
}
