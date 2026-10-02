import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

const CONCERNS = [
  { href: "#knee-concerns", name: "Knee", cue: "Walking · stairs · standing", question: "What changes when you put weight on your knee?" },
  { href: "#low-back-concerns", name: "Low back", cue: "Sitting · lifting · sleep", question: "Which daily positions or tasks raise questions?" },
  { href: "#neck-concerns", name: "Neck", cue: "Turning · desk work · driving", question: "When does limited movement affect your day?" },
];

export function PainNavigation(): React.ReactElement {
  return (
    <section id="pain-concern-navigation" className="interior-section pain-navigation">
      <div className="pain-navigation-head"><div className="interior-wrap"><h2 className="bracket">Explore pain concerns</h2><p>Joint pain can show up in different places. Location alone does not determine a cause or a plan.</p></div></div>
      <nav className="interior-wrap pain-navigation-cards" aria-label="Pain concerns">
        {CONCERNS.map((concern) => <Link key={concern.name} href={concern.href} className="pain-nav-card"><span className="pain-nav-cue">{concern.cue}</span><strong>{concern.name}</strong><span className="pain-nav-question">{concern.question}</span><span className="pain-nav-link">Read {concern.name.toLowerCase()} questions <ArrowDownRight size={19} aria-hidden /></span></Link>)}
      </nav>
      <p className="interior-wrap pain-navigation-note">Choose a starting point, then compare the questions that matter to your own daily function.</p>
    </section>
  );
}
