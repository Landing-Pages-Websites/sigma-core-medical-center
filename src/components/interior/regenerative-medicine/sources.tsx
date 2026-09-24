import { InteriorImage } from "../interior-image";

export function RegenSources(): React.ReactElement {
  return <section id="medical-sources" className="b2-section r-sources"><div className="b2-wrap"><div className="r-sources-head"><div><h2>Medical Sources</h2><p>Any medical or regulatory statement must be matched to the exact product and intended use before publication.</p></div><InteriorImage slug="regenerative-medicine" file="07-medical-sources-01-clinic-lounge.png" alt="Interior detail from the approved source review frame" /></div><div className="r-sources-rail"><div><strong>Regulatory evidence</strong><p>Current FDA sources to be selected and reviewed.</p></div><div><strong>Clinical review pending</strong><p>No specific modality or FDA approval is implied.</p></div><div><strong>Consultation literacy</strong><p>Ask who published a source and whether it applies to your situation.</p></div></div></div></section>;
}
