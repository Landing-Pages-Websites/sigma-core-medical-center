import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutHero(): React.ReactElement {
  return (
    <section id="hero" className="about-hero" aria-labelledby="about-title">
      <div className="about-shell">
        <p className="about-eyebrow">About Sigma Core · Richmond area</p>
        <h1 id="about-title">A focus on<br />movement,<br /><span>function</span> and <span>life.</span></h1>
        <p className="about-hero-intro">Sigma Core’s focus is movement, function, recovery and quality of life for the Richmond, Virginia area. Neuropathy is the primary focus.</p>
        <div className="about-hero-action">
          <Link href="/book" className="about-action about-action-light">See booking status <ArrowRight aria-hidden="true" /></Link>
          <p>Team, location and booking details remain unconfirmed.</p>
        </div>
      </div>
      <div className="about-steps" aria-hidden="true"><span /></div>
    </section>
  );
}
