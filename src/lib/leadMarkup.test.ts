import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ContactBooking } from "@/components/batch-three/contact/booking";
import { LeadField } from "@/components/lead/LeadField";
import { trackLeadSuccess } from "./leadAnalytics";

test("Contact renders one labeled collecting form with four required controls", () => {
  const html = renderToStaticMarkup(createElement(ContactBooking));
  assert.equal((html.match(/<form\b/g) ?? []).length, 1);
  assert.match(html, /<form[^>]*id="contact-form"/);
  const inputs = html.match(/<input\b[^>]*>/g) ?? [];
  const required = inputs.filter((input) => / required=""/.test(input));
  assert.equal(required.length, 4);
  for (const name of ["firstName", "lastName", "email", "phone"]) {
    assert.match(required.find((input) => input.includes(`name="${name}"`)) ?? "", /autoComplete=/);
    assert.ok(html.includes(`for="contact-${name}"`));
  }
  const honeypot = inputs.find((input) => input.includes('name="company_website"')) ?? "";
  assert.match(honeypot, /tabindex="-1"/i);
  assert.doesNotMatch(honeypot, /required/);
  assert.doesNotMatch(html, /type="submit"|<textarea|type="file"/);
  assert.match(html, /<button type="button" class="lead-send">/);
  assert.match(html, /aria-live="polite"/);
});
test("inline errors identify their input and are announced", () => {
  const html = renderToStaticMarkup(createElement(LeadField, { name: "email", error: "Enter a full email." }));
  assert.match(html, /aria-invalid="true"/);
  assert.match(html, /aria-describedby="contact-email-error"/);
  assert.match(html, /id="contact-email-error"[^>]*role="alert"/);
});
test("accepted-capture event has no PII and analytics failures cannot cause retries", () => {
  const target = globalThis as unknown as { window?: Window };
  const original = target.window;
  const dataLayer: Record<string, unknown>[] = [];
  try {
    target.window = { dataLayer } as Window;
    trackLeadSuccess();
    assert.deepEqual(dataLayer, [{ event: "form_submission" }]);
    target.window = { dataLayer: { push: () => { throw new Error("blocked"); } } } as unknown as Window;
    assert.doesNotThrow(trackLeadSuccess);
  } finally { target.window = original; }
});
