import { ContactForm } from "@/components/lead/ContactForm";

export function ContactBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="contact-section contact-close" aria-labelledby="contact-inquiry-title">
      <div className="contact-close-layout">
        <div className="contact-inquiry-copy">
          <h2 id="contact-inquiry-title">Request contact<span aria-hidden="true" /></h2>
          <p>Leave your contact details to ask about next steps with Sigma Core Medical Center.</p>
          <p>This is an inquiry, not an appointment confirmation. Online booking is not yet available.</p>
          <p>Please do not submit medical information. This form is not for emergencies.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
