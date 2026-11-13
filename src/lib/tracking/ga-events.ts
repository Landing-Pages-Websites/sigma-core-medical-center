/**
 * The site loads GA4 with gtag.js, not Google Tag Manager, so a plain
 * `{ event }` object on the dataLayer never reaches GA4: gtag.js only reads
 * gtag() commands. These are the events GA4 must receive as real events,
 * because they are the clinic's conversions.
 */

/** Where every "Request a Free Consultation" button sends visitors. */
export const CONSULTATION_REQUEST_HOST = "go.sigmacoremedicalcenter.com";

export const GA_CONSULTATION_REQUEST_CLICK = "consultation_request_click";
export const GA_PHONE_CALL_CLICK = "phone_call_click";
/** GA4's recommended lead event name. */
export const GA_GENERATE_LEAD = "generate_lead";

export interface GaEvent {
  name: string;
  params: Record<string, string>;
}

function text(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/** The GA4 event a tracked site event maps to, or null when GA4 should not get one. */
export function gaEventFor(event: string, properties: Record<string, unknown>): GaEvent | null {
  const placement = text(properties.placement);
  if (event === "outbound_click" && text(properties.host) === CONSULTATION_REQUEST_HOST) {
    return { name: GA_CONSULTATION_REQUEST_CLICK, params: { placement } };
  }
  if (event === "contact_click" && text(properties.channel) === "call") {
    return { name: GA_PHONE_CALL_CLICK, params: { placement } };
  }
  if (event === "lead_form_submit") {
    return { name: GA_GENERATE_LEAD, params: { form_key: text(properties.form_key) } };
  }
  return null;
}
