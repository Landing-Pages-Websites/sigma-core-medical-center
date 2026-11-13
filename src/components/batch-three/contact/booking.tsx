import { ContactForm } from "@/components/lead/ContactForm";
import { CONTACT } from "@/content/site";

export function ContactBooking(): React.ReactElement {
  return (
    <section data-mega-section="booking-cta" id="booking-cta" className="contact-section contact-close" aria-labelledby="contact-inquiry-title">
      <div className="contact-close-layout">
        <div className="contact-inquiry-copy">
          <h2 id="contact-inquiry-title">Request contact<span aria-hidden="true" /></h2>
          <p>Leave your contact details to ask about next steps with Sigma Core Medical Center.</p>
          <p>Prefer to talk now? Call {CONTACT.phone}.</p>
          <p>Please do not submit medical information. This form is not for emergencies.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
