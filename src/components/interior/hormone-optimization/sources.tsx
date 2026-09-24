import { InteriorImage } from "../interior-image";

export function HormoneSources(): React.ReactElement {
  return <section id="medical-sources" className="b2-section h-sources"><div className="b2-wrap h-sources-grid"><InteriorImage slug="hormone-optimization" file="07-medical-sources-01-clinic-reception.png" alt="Interior detail from the approved sources frame" /><div><h2>Medical Sources</h2><p>Clinical sources and explanatory claims require review before publication.</p><p className="b2-source-note">FDA information and relevant professional guidance will be linked here after a licensed clinical reviewer confirms their relevance. This page is general orientation, not medical advice.</p></div><aside><strong>Review pending</strong><p>No medication, testing protocol, or provider is represented on this page.</p></aside></div></section>;
}
