import Link from "next/link";

export function RegenDecisions(): React.ReactElement {
  return <section id="decision-factors" className="b2-section r-decisions"><div className="b2-wrap">
    <div className="r-decisions-head"><div><h2>Decision Factors</h2><p>Use the answers to the questions above to assess a proposed option. Testimonials or explanations of how something might work alone do not establish an appropriate choice.</p></div><p>Assess the answers.</p></div>
    <div className="r-decisions-stage">
      <aside className="r-decisions-edge"><span>Start here</span><strong>Compare the answers</strong><p>Use the consultation questions above as your starting point.</p></aside>
      <div className="r-decisions-panels"><article><h3>Option and intended use</h3><p>Does the answer name the option and the use being discussed?</p></article><article><h3>Evidence and alternatives</h3><p>Does it weigh evidence and risks against other choices, including no procedure?</p></article><article><h3>Provider and follow-up</h3><p>Does it identify a qualified responsible provider and a follow-up plan?</p></article></div>
      <aside className="r-decisions-edge r-decisions-edge-end"><span>Verify next</span><strong>Find what is missing</strong><p>Ask for specifics wherever an answer remains unclear.</p></aside>
    </div>
    <div className="r-decisions-links"><Link href="/services">Understand our services →</Link><Link href="/services/pain-relief">Explore pain relief →</Link></div>
  </div></section>;
}
