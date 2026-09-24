import { InteriorImage } from "../interior-image";

export function NeuropathySources(): React.ReactElement {
  return <section id="medical-sources" className="interior-section neuro-sources"><div className="interior-wrap neuro-sources-grid"><div><h2>Medical sources</h2><p>General information about peripheral nerves and variable symptoms is informed by:</p><a href="https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy" target="_blank" rel="noopener noreferrer">National Institute of Neurological Disorders and Stroke · Peripheral Neuropathy ↗</a><p className="source-note">This source does not endorse Sigma Core. Site information is educational, not individual medical advice. No clinical review status is asserted.</p></div><InteriorImage slug="neuropathy" file="07-medical-sources-01-clinic-lounge.png" alt="Clinic lounge crop in the approved source frame" /></div></section>;
}
