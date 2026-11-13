"use client";

import { ArrowRight } from "lucide-react";
import CaptchaWidget from "./CaptchaWidget";
import HoneypotField from "./HoneypotField";
import { LeadField } from "./LeadField";
import { LEAD_FIELDS } from "@/lib/leadValidation";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT } from "@/content/site";

/** Names this form in tracking events (`data-mega-form`). */
const FORM_KEY = "contact-form";

function ignoreReadiness(): void {}

export function ContactForm(): React.ReactElement {
  const { formRef, captchaRef, status, errors, request, ...events } = useContactForm(FORM_KEY);
  const sending = status === "sending";
  const success = status === "success";
  return (
    <form id="contact-form" data-form-key="contact-form" data-mega-form={FORM_KEY} action="/api/lead" method="post" className="lead-form" ref={formRef} {...events}
      noValidate aria-labelledby="contact-inquiry-title" aria-describedby="contact-form-note" aria-busy={sending}>
      <p id="contact-form-note" className="lead-intro">All four fields are required. Share contact details only.</p>
      <fieldset disabled={sending || success} className="lead-fields">
        <legend className="sr-only">Your contact details</legend>
        {LEAD_FIELDS.map((name) => <LeadField key={name} name={name} error={errors[name]} />)}
      </fieldset>
      <HoneypotField />
      <CaptchaWidget ref={captchaRef} onReady={ignoreReadiness} />
      <button type="button" className="lead-send" data-mega-cta="send-inquiry" disabled={sending || success} onClick={request}>
        {success ? "Inquiry received" : sending ? "Sending inquiry…" : "Send my inquiry"}<ArrowRight size={24} aria-hidden="true" />
      </button>
      <div className="lead-status" aria-live="polite" aria-atomic="true">
        {success && <p>Thank you, we received your message. To book right away, call {CONTACT.phone}.</p>}
        {status === "error" && <p>Your inquiry could not be confirmed. Please check your connection and try again.</p>}
      </div>
    </form>
  );
}
