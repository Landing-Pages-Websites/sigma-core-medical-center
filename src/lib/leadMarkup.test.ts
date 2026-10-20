import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ContactBooking } from "@/components/batch-three/contact/booking";
import { ServicesPage } from "@/components/pages/services-page";
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
test("Services preserves its content and appends exactly one shared inquiry form", () => {
  const html = renderToStaticMarkup(createElement(ServicesPage));
  const inquiry = renderToStaticMarkup(createElement(ContactBooking));
  assert.equal((html.match(/<form\b/g) ?? []).length, 1);
  assert.ok(html.endsWith(`<div class="b3">${inquiry}</div></main>`));
  for (const id of ["hero", "neuropathy-feature", "services", "how-it-works", "form"]) {
    assert.ok(html.includes(`id="${id}"`));
  }
  assert.match(html, /How To Choose Next Step/);
  assert.match(html, /Booking <span[^>]*>status/);
  for (const image of ["services-lobby-v2", "services-forward-path-v2", "services-runners-v2",
    "reception-1", "pain-decision-interior-v4", "hormone-booking-lobby-v3"]) {
    assert.ok(html.includes(image), `Services image preserved: ${image}`);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
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
