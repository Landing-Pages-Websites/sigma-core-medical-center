import { ContactFacilityArea } from "./facility-area";
import { ContactFacilityStatus } from "./facility-status";

export function ContactFacility(): React.ReactElement {
  return (
    <section id="facility-image" className="b3-section b3-paper b3-contact-facility">
      <div className="b3-shell">
        <div className="b3-facility-intro">
          <h2>Before you visit</h2>
          <span className="b3-facility-steps" aria-hidden="true" />
        </div>
        <div className="b3-facility-stage">
          <ContactFacilityArea />
          <ContactFacilityStatus />
        </div>
      </div>
    </section>
  );
}
