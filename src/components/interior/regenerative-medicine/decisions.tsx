import Link from "next/link";

export function RegenDecisions(): React.ReactElement {
  return <section id="decision-factors" className="b2-section r-decisions"><div className="b2-wrap">
    <div className="r-decisions-head"><div><h2>Decision Factors</h2><p>Consider uncertainty, alternatives, evidence, and your individual priorities. Testimonials and mechanisms alone do not establish an appropriate treatment.</p></div><p>Questions, not guarantees.</p></div>
    <div className="r-decisions-stage">
      <aside className="r-decisions-edge"><span>Start here</span><strong>Your goals</strong><p>Name what matters in daily life without assuming an intervention is needed.</p></aside>
      <div className="r-decisions-panels"><article><h3>Personal goals</h3><p>What matters most to you?</p></article><article><h3>Informed questions</h3><p>What is known, and what remains uncertain?</p></article><article><h3>Individual discussion</h3><p>Which alternatives are relevant to your situation?</p></article></div>
      <aside className="r-decisions-edge r-decisions-edge-end"><span>Verify next</span><strong>The exact option</strong><p>Product or procedure, intended use, evidence, and responsible provider.</p></aside>
    </div>
    <div className="r-decisions-links"><Link href="/services">Understand our services →</Link><Link href="/services/pain-relief">Explore pain relief →</Link></div>
  </div></section>;
}
