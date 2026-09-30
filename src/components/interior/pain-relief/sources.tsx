const SOURCES = [
  { name: "Knee", href: "https://medlineplus.gov/ency/article/003187.htm", label: "Knee pain" },
  { name: "Low back", href: "https://medlineplus.gov/ency/article/007425.htm", label: "Low back pain, acute" },
  { name: "Neck", href: "https://medlineplus.gov/ency/article/003025.htm", label: "Neck pain" },
];

export function PainSources(): React.ReactElement {
  return (
    <section id="medical-sources" className="interior-section pain-sources"><div className="interior-wrap pain-sources-grid"><div><h2 className="bracket">Medical sources</h2><p>These National Library of Medicine references support general orientation about knee, low-back and neck symptoms. They do not endorse Sigma Core or describe its services.</p><div className="pain-source-list">{SOURCES.map((source) => <div key={source.name}><h3>{source.name}</h3><a href={source.href} target="_blank" rel="noopener noreferrer">MedlinePlus: {source.label} ↗</a></div>)}</div><small>Source selection is for general education. No clinical review or approval of this website copy is asserted.</small></div><aside className="pain-source-context"><span>Reading boundary</span><p>Public health information can frame questions. Only a qualified professional can assess your situation.</p><div aria-hidden="true" /></aside></div></section>
  );
}
