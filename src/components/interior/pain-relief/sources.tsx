import { InteriorImage } from "../interior-image";

const SOURCES = [
  { name: "Knee", href: "https://medlineplus.gov/ency/article/003187.htm", label: "NIH MedlinePlus · Knee pain" },
  { name: "Low back", href: "https://medlineplus.gov/ency/article/007425.htm", label: "NIH MedlinePlus · Low back pain" },
  { name: "Neck", href: "https://medlineplus.gov/ency/article/003025.htm", label: "NIH MedlinePlus · Neck pain" },
];

export function PainSources(): React.ReactElement {
  return <section id="medical-sources" className="interior-section pain-sources"><div className="interior-wrap pain-sources-grid"><div><h2 className="bracket">Medical sources</h2><p>These public-health references inform the general orientation on this page. They do not endorse this clinic.</p><div className="pain-source-list">{SOURCES.map((source) => <div key={source.name}><h3>{source.name}</h3><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></div>)}</div><small>No clinical approval or review status is asserted for this website copy.</small></div><div className="pain-source-photos"><InteriorImage slug="pain-relief" file="09-medical-sources-01-clinic-reception.png" alt="Reception crop in the approved source section" /><InteriorImage slug="pain-relief" file="09-medical-sources-02-clinic-lounge.png" alt="Lounge crop in the approved source section" /></div></div></section>;
}
