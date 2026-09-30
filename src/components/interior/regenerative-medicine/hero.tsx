import Link from "next/link";

export function RegenHero(): React.ReactElement {
  return <section id="hero" className="b2-section r-hero"><div className="b2-wrap r-hero-grid">
    <div className="r-hero-copy">
      <h1>Explore whether regenerative medicine belongs in your care conversation</h1>
      <p>Regenerative medicine is a broad service category. This page is a starting point for questions, not a recommendation for a particular procedure.</p>
      <p>Specific offerings and responsible providers are unverified for this page. No outcome or procedure is promised.</p>
      <Link className="b2-button" href="#questions-for-a-consultation">Prepare your questions <span aria-hidden="true">↗</span></Link>
      <small>Online scheduling is unavailable on this page. Provider and calendar details have not been verified for publication.</small>
    </div>
    <div className="r-hero-art">
      <div className="r-hero-aperture" aria-hidden="true"><span /><span /><span /></div>
      <div className="r-hero-art-copy"><span>Start with the category</span><strong>Ask for the exact option before weighing a decision.</strong><p>Product or procedure · intended use · responsible provider</p></div>
      <div className="r-hero-art-foot">A starting point for informed questions</div>
    </div>
  </div></section>;
}
