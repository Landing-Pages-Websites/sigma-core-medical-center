import assert from "node:assert/strict";
import test from "node:test";
import { EMAIL_PATTERN, PHONE_PATTERN, isValidEmail, isValidPhone, parseLeadFields } from "./leadValidation";
import { acceptedSubmission } from "./leadSubmit";
import { asLeadContext } from "./leadServerContext";
import { createSubmissionGuard } from "./leadFormState";

const CONTACT = { firstName: "Test", lastName: "Contact", email: "test@gomega.ai", phone: "(202) 555-0123" };
for (const email of ["me@x", "me@x.c", "me@@gomega.ai", "x@.gomega.ai", "x@gomega..ai", "x@-bad.gomega.ai", ""]) {
  test(`client, markup and handler reject email ${email}`, () => {
    assert.equal(isValidEmail(email), false);
    assert.equal(new RegExp(`^(?:${EMAIL_PATTERN})$`, "v").test(email), false);
    assert.equal(parseLeadFields({ ...CONTACT, email }).ok, false);
  });
}
for (const phone of ["", "202555012", "12025550123", "(202) 555-012"]) {
  test(`client, markup and handler reject phone ${phone}`, () => {
    assert.equal(isValidPhone(phone), false);
    assert.equal(new RegExp(`^(?:${PHONE_PATTERN})$`, "v").test(phone), false);
    assert.equal(parseLeadFields({ ...CONTACT, phone }).ok, false);
  });
}
test("formatted phone and dotted email pass; all client extras are dropped", () => {
  const parsed = parseLeadFields({ ...CONTACT, firstName: " Test ", spamCheck: "Passed", spam_check: "Passed", customer_id: "attacker", message: "unapproved", first_name: "duplicate" });
  assert.ok(parsed.ok);
  assert.equal(parsed.fields.firstName, "Test");
  assert.equal(parsed.fields.phone, "2025550123");
  assert.deepEqual(parsed.fields.extra, {});
});
test("name whitespace, excessive lengths and nonstrings fail", () => {
  for (const name of ["firstName", "lastName"]) {
    for (const value of [" ", "x".repeat(201), null, 123]) {
      assert.equal(parseLeadFields({ ...CONTACT, [name]: value }).ok, false);
    }
  }
});
test("only explicit accepted receiver results count as client success", () => {
  for (const value of [null, {}, { ok: false }, { ok: "true" }, { ok: true, ignored: true }]) {
    assert.throws(() => acceptedSubmission(value));
  }
  assert.deepEqual(acceptedSubmission({ ok: true, id: "test-id" }), { ok: true, id: "test-id" });
});
test("context allowlist retains attribution while removing routing injection", () => {
  const context = asLeadContext({ url: "https://example.test/contact", session_id: "s", visitor_id: "v", utm_source: "qa", form_data: { email: "wrong@example.com" }, customer_id: "wrong", proof_claim: {}, notificationRecipients: "wrong" });
  assert.ok(context);
  assert.equal(context.utm_source, "qa");
  for (const key of ["form_data", "customer_id", "proof_claim", "notificationRecipients"]) assert.equal(key in context, false);
});
test("duplicate guard locks synchronously, stays held on success, releases on failure", () => {
  const guard = createSubmissionGuard();
  assert.equal(guard.acquire(), true);
  assert.equal(guard.acquire(), false);
  assert.equal(guard.acquire(), false);
  guard.release();
  assert.equal(guard.acquire(), true);
});
