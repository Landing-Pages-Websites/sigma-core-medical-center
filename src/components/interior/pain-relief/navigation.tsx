import Link from "next/link";
import { InteriorImage } from "../interior-image";

const CONCERNS = [
  { href: "#knee-concerns", name: "Knee", file: "02-pain-concern-navigation-01-knee-clinic.png", alt: "Reception and seating in the knee orientation frame", body: "Questions about walking, stairs and daily activities." },
  { href: "#low-back-concerns", name: "Low back", file: "02-pain-concern-navigation-02-low-back-clinic.png", alt: "Hallway in the low-back orientation frame", body: "Questions about sitting, lifting, rest and movement." },
  { href: "#neck-concerns", name: "Neck", file: "02-pain-concern-navigation-03-neck-clinic.png", alt: "Chair and plant in the neck orientation frame", body: "Questions about range of motion and daily comfort." },
];

export function PainNavigation(): React.ReactElement {
  return <section id="pain-concern-navigation" className="interior-section pain-navigation"><div className="pain-navigation-head"><div className="interior-wrap"><span className="eyebrow">Richmond, Virginia area</span><h2 className="bracket">Explore pain concerns</h2><p>Joint pain can show up in different places. Location alone does not determine a cause or a plan.</p></div></div><div className="interior-wrap pain-navigation-cards">{CONCERNS.map((concern) => <Link key={concern.name} href={concern.href} className="pain-nav-card"><InteriorImage slug="pain-relief" file={concern.file} alt={concern.alt} /><div><strong>{concern.name}</strong><span>{concern.body} ↓</span></div></Link>)}</div><p className="interior-wrap pain-navigation-note">Each concern is a different starting point. Individual questions deserve a personal conversation.</p></section>;
}
