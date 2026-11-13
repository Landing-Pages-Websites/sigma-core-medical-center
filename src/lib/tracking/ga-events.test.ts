import assert from "node:assert/strict";
import test from "node:test";
import { gaEventFor } from "./ga-events.ts";

test("a click to the consultation request page becomes consultation_request_click", () => {
  assert.deepEqual(gaEventFor("outbound_click", { host: "go.sigmacoremedicalcenter.com", placement: "header" }), {
    name: "consultation_request_click",
    params: { placement: "header" },
  });
});

test("other outbound clicks are not GA4 conversions", () => {
  assert.equal(gaEventFor("outbound_click", { host: "nih.gov", placement: "section" }), null);
});

test("a tap on the phone number becomes phone_call_click; email and text do not", () => {
  assert.deepEqual(gaEventFor("contact_click", { channel: "call", placement: "footer", label: "804-486-7699" }), {
    name: "phone_call_click",
    params: { placement: "footer" },
  });
  assert.equal(gaEventFor("contact_click", { channel: "email", placement: "footer" }), null);
});

test("a confirmed lead becomes generate_lead without contact data", () => {
  assert.deepEqual(gaEventFor("lead_form_submit", { form_key: "contact", email: "x@example.com" }), {
    name: "generate_lead",
    params: { form_key: "contact" },
  });
});

test("everything else is left out of GA4", () => {
  assert.equal(gaEventFor("section_viewed", { section: "FAQ" }), null);
  assert.equal(gaEventFor("cta_click", { label: "Explore", destination: "/services", placement: "section" }), null);
});
