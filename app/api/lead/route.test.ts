import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { NextRequest } from "next/server";
import { GET, POST } from "./route";
import { solveLeadProofOfWork, LEAD_POW_MAX_AGE_MS } from "@/lib/captcha/proofOfWork";
import { SPAM_CHECK_FALLBACK } from "@/lib/captcha/leadVerification";
import { SCORECARD_ACCESS_COOKIE, issueScorecardAccess, readScorecardPdf } from "@/lib/scorecardAccess";
import { existsSync } from "node:fs";
// test:lead globs lead*.test.ts only; registering here keeps the signing tests in that command.
import "@/lib/scorecardAccess.test";

const ENDPOINT = "https://analytics.gomega.ai/submission/submit";
const CONTACT = { firstName: "Test", lastName: "Contact", email: "test@gomega.ai", phone: "(202) 555-0123", captchaToken: "staging-bypass", formKey: "contact-form", context: { url: "https://example.test/contact?utm_source=qa", session_id: "test-session", visitor_id: "test-visitor", utm_source: "qa" } };
const seen: { url: string; init?: RequestInit }[] = [];
let responder: (url: string, init?: RequestInit) => Response | Promise<Response>;

beforeEach(() => {
  Object.assign(process.env, { VERCEL_ENV: "preview", NEXT_PUBLIC_CAPTCHA_PROVIDER: "recaptcha", NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "recaptcha-staging-bypass-key", LEAD_PROOF_CLAIM_TOKEN: "a".repeat(64), RECAPTCHA_API_KEY: "offline-fixture", RECAPTCHA_HOSTNAMES: "example.test", TURNSTILE_SECRET_KEY: "offline-fixture", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "offline-fixture" });
  seen.length = 0;
  responder = () => Response.json({ ok: true, id: "mock-lead" });
  globalThis.fetch = async (url, init) => {
    const target = String(url);
    assert.ok(target === ENDPOINT || target.startsWith("https://recaptchaenterprise.googleapis.com/") || target.startsWith("https://challenges.cloudflare.com/"));
    seen.push({ url: target, init });
    return responder(target, init);
  };
});

async function post(body: unknown): Promise<Response> {
  return POST(new NextRequest("https://example.test/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }));
}
async function solved(body: Record<string, unknown>): Promise<Record<string, unknown>> {
  const fields = { ...body, powIssuedAt: String(Date.now()) };
  return { ...fields, powNonce: await solveLeadProofOfWork(fields) };
}
function forwarded(): Record<string, unknown> {
  return JSON.parse(String(seen.find((request) => request.url === ENDPOINT)?.init?.body));
}

test("GET issues fresh uncached server time", async () => {
  const before = Date.now();
  const response = GET();
  const body = await response.json();
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.match(body.issuedAt, /^\d{13}$/);
  assert.ok(Number(body.issuedAt) >= before && Number(body.issuedAt) <= Date.now());
});
test("malformed JSON, primitives and arrays fail before network", async () => {
  const malformed = new NextRequest("https://example.test/api/lead", { method: "POST", body: "{" });
  assert.equal((await POST(malformed)).status, 400);
  for (const input of [null, [], "text", 2]) assert.equal((await post(input)).status, 400);
  assert.equal(seen.length, 0);
});
test("invalid fields and missing/invalid context fail before network", async () => {
  for (const patch of [{ email: "me@x" }, { phone: "202555012" }, { firstName: " " }, { lastName: null }, { context: null }, { context: [] }, { context: { url: "javascript:alert(1)", session_id: "s", visitor_id: "v" } }, { context: { ...CONTACT.context, visitor_id: "" } }]) {
    assert.equal((await post({ ...CONTACT, ...patch })).status, 400);
  }
  assert.equal(seen.length, 0);
});
test("honeypot is ignored without forwarding", async () => {
  const response = await post({ ...CONTACT, company_website: "bot" });
  assert.deepEqual(await response.json(), { ok: true, ignored: true });
  assert.equal(seen.length, 0);
});
for (const email of ["real@example.com", "x@notgomega.ai", "x@gomega.ai.evil.com", "gomega.ai@evil.com", "x@zleague.gg"]) {
  test(`Preview refuses ${email} before verification or forwarding`, async () => {
    assert.equal((await post({ ...CONTACT, email })).status, 403);
    assert.equal(seen.length, 0);
  });
}
test("Preview refuses routing-check by presence, including false", async () => {
  for (const marker of [true, false, "", null]) {
    assert.equal((await post({ ...CONTACT, __mega_routing_check: marker })).status, 403);
  }
  assert.equal(seen.length, 0);
});
test("Preview gate precedes proof consumption", async () => {
  const proof = await solved({ ...CONTACT, email: "real@example.com", captchaToken: "" });
  assert.equal((await post(proof)).status, 403);
  assert.equal(seen.length, 0);
  process.env.VERCEL_ENV = "production";
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "real-key-fixture";
  responder = (url) => url === ENDPOINT ? Response.json({ ok: true, proof_claim: "claimed" }) : Response.json({ tokenProperties: { valid: false } });
  assert.equal((await post(proof)).status, 200);
});
test("normal staging contact succeeds only with explicit receiver ok and server-owned routing", async () => {
  const response = await post({ ...CONTACT, email: "TEST@qa.GOMEGA.AI", customer_id: "attacker", site_id: "attacker", source_provider: "attacker", formKey: "other", form_key: "other", spamCheck: "Passed", spam_check: "Passed", message: "unapproved", context: { ...CONTACT.context, customer_id: "attacker", form_data: { email: "real@example.com", __mega_routing_check: true }, notificationRecipients: "attacker" } });
  assert.equal(response.status, 200);
  assert.equal(seen.length, 1);
  const body = forwarded();
  assert.equal(body.customer_id, "b380819e-88b6-48bd-8f1e-bfe6a580d72a");
  assert.equal(body.site_id, "07f92366-76fb-4d7e-9530-2044e9da69ca");
  assert.equal(body.source_provider, "website-sigma-core-medical-center");
  assert.equal(body.form_key, "contact-form");
  assert.equal(body.utm_source, "qa");
  assert.equal("notificationRecipients" in body, false);
  assert.deepEqual(body.form_data, { firstName: "Test", lastName: "Contact", email: "TEST@qa.GOMEGA.AI", phone: "2025550123" });
});
test("missing/empty canonical token cannot use legacy alias without proof", async () => {
  for (const captchaToken of [undefined, null, "", " ", 42]) {
    const body = { ...CONTACT, captchaToken, turnstileToken: "" };
    assert.equal((await post(body)).status, 403);
  }
  assert.equal((await post({ ...CONTACT, captchaToken: "", turnstileToken: "nonempty" })).status, 403);
  assert.equal(seen.length, 0);
});
test("bad and stale fallback proofs do not deliver", async () => {
  for (const patch of [{ powNonce: "bad", powIssuedAt: String(Date.now()) }, { powNonce: "1", powIssuedAt: String(Date.now() - LEAD_POW_MAX_AGE_MS - 1) }]) {
    assert.equal((await post({ ...CONTACT, captchaToken: "", ...patch })).status, 403);
  }
  assert.equal(seen.length, 0);
});
test("fallback labels the lead, presents receiver claim and refuses local replay", async () => {
  const proof = await solved({ ...CONTACT, captchaToken: "" });
  responder = () => Response.json({ ok: true, id: "mock-proof-lead", proof_claim: "claimed" });
  assert.equal((await post(proof)).status, 200);
  const body = forwarded();
  assert.equal((body.form_data as Record<string, unknown>).spamCheck, SPAM_CHECK_FALLBACK);
  const claim = body.proof_claim as Record<string, unknown>;
  assert.equal(claim.issued_at, proof.powIssuedAt);
  assert.equal(claim.nonce, proof.powNonce);
  assert.equal(claim.email, CONTACT.email);
  assert.equal(typeof claim.attempt_id, "string");
  assert.equal(new Headers(seen[0].init?.headers).get("x-mega-proof-claim-token"), "a".repeat(64));
  assert.equal((await post(proof)).status, 403);
  assert.equal(seen.length, 1);
});
test("context is validated before a valid proof is consumed", async () => {
  const proof = await solved({ ...CONTACT, captchaToken: "", context: null });
  assert.equal((await post(proof)).status, 400);
  const { verifyLeadSubmission } = await import("@/lib/captcha/leadVerification");
  assert.equal((await verifyLeadSubmission(proof, null)).ok, true);
  assert.equal(seen.length, 0);
});
test("missing proof credential or absent claim marker never produces success", async () => {
  const proof = await solved({ ...CONTACT, captchaToken: "", firstName: "Credential" });
  process.env.LEAD_PROOF_CLAIM_TOKEN = "";
  assert.equal((await post(proof)).status, 502);
  assert.equal(seen.length, 0);
  process.env.LEAD_PROOF_CLAIM_TOKEN = "a".repeat(64);
  const nextProof = await solved({ ...CONTACT, captchaToken: "", firstName: "Marker" });
  assert.equal((await post(nextProof)).status, 502);
});
test("transport failures and ambiguous receiver bodies never produce success", async () => {
  for (const body of [{}, { ok: false }, { ok: "true" }]) {
    responder = () => Response.json(body);
    assert.equal((await post(CONTACT)).status, 502);
  }
  responder = () => { throw new Error("mock offline"); };
  assert.equal((await post(CONTACT)).status, 502);
});
test("production sentinel cannot grant bypass", async () => {
  process.env.VERCEL_ENV = "production";
  assert.equal((await post(CONTACT)).status, 403);
  assert.equal(seen.length, 0);
});
test("production real key requires valid token, exact host/action and affirmative challenge", async () => {
  process.env.VERCEL_ENV = "production";
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "real-key-fixture";
  const valid = { valid: true, action: "lead_submit", hostname: "example.test" };
  for (const tokenProperties of [{ ...valid, valid: false }, { ...valid, action: "other" }, { ...valid, hostname: "example.test.evil.com" }]) {
    responder = () => Response.json({ tokenProperties, riskAnalysis: { challenge: "NOCAPTCHA", score: 1 } });
    assert.equal((await post(CONTACT)).status, 403);
  }
  for (const challenge of ["FAILED", "PASS", undefined]) {
    responder = () => Response.json({ tokenProperties: valid, riskAnalysis: { challenge, score: 1 } });
    assert.equal((await post(CONTACT)).status, 403);
  }
  assert.equal(seen.filter((entry) => entry.url === ENDPOINT).length, 0);
  for (const challenge of ["NOCAPTCHA", "PASSED"]) {
    responder = (url) => url === ENDPOINT ? Response.json({ ok: true }) : Response.json({ tokenProperties: valid, riskAnalysis: { challenge, score: 0 } });
    assert.equal((await post({ ...CONTACT, email: "normal@example.com" })).status, 200);
    assert.equal((forwarded().form_data as Record<string, unknown>).spamCheck, "Passed reCAPTCHA");
  }
});
test("Preview gate covers real keys, unconfigured provider and Turnstile test keys", async () => {
  for (const config of [{ NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "real-key-fixture" }, { NEXT_PUBLIC_CAPTCHA_PROVIDER: "unconfigured" }, { NEXT_PUBLIC_CAPTCHA_PROVIDER: "turnstile", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "1x00000000000000000000AA" }]) {
    Object.assign(process.env, config);
    assert.equal((await post({ ...CONTACT, email: "normal@example.com" })).status, 403);
  }
  assert.equal(seen.length, 0);
});

const SCORECARD = { ...CONTACT, purpose: "scorecard" };
const DOWNLOAD = "https://example.test/api/lead?resource=scorecard";

async function download(cookie?: string): Promise<Response> {
  const headers: HeadersInit = cookie ? { Cookie: `${SCORECARD_ACCESS_COOKIE}=${cookie}` } : {};
  return GET(new NextRequest(DOWNLOAD, { headers }));
}
function accessCookie(response: Response): string | undefined {
  return response.headers.getSetCookie().find((line) => line.startsWith(`${SCORECARD_ACCESS_COOKIE}=`));
}
function accessFrom(response: Response): string | undefined {
  return accessCookie(response)?.split(";")[0].slice(SCORECARD_ACCESS_COOKIE.length + 1);
}
async function assertDenied(response: Response): Promise<void> {
  assert.ok(response.status === 403 || response.status === 404);
  assert.notEqual(response.headers.get("Content-Type"), "application/pdf");
  assert.doesNotMatch(await response.text(), /%PDF/);
}

test("scorecard PDF is not in public/", () => {
  assert.equal(existsSync("public/resources/sigma-core-neuropathy-clarity-scorecard.pdf"), false);
});
test("GET with a request and no query still issues the proof timestamp", async () => {
  const response = await GET(new NextRequest("https://example.test/api/lead"));
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.match((await response.json()).issuedAt, /^\d{13}$/);
  assert.equal(accessFrom(response), undefined);
});
test("unknown resource is 404 without PDF", async () => {
  await assertDenied(await GET(new NextRequest("https://example.test/api/lead?resource=other")));
});
test("anonymous, forged and expired scorecard downloads are refused", async () => {
  await assertDenied(await download());
  const expired = issueScorecardAccess(process.env, Date.now() - 11 * 60 * 1000);
  const [expiresAt, nonce] = String(issueScorecardAccess()).split(".");
  for (const cookie of ["1", "scorecard", `${expiresAt}.${nonce}.${"A".repeat(43)}`, String(expired), String(issueScorecardAccess({ LEAD_PROOF_CLAIM_TOKEN: "c".repeat(64) }))]) {
    await assertDenied(await download(cookie));
  }
});
test("contact, honeypot, invalid, unverified and rejected scorecard POSTs set no entitlement", async () => {
  assert.equal(accessFrom(await post(CONTACT)), undefined);
  assert.equal(accessFrom(await post({ ...SCORECARD, company_website: "bot" })), undefined);
  assert.equal(accessFrom(await post({ ...SCORECARD, email: "me@x" })), undefined);
  assert.equal(accessFrom(await post({ ...SCORECARD, captchaToken: "" })), undefined);
  responder = () => Response.json({ ok: false });
  const rejected = await post(SCORECARD);
  assert.equal(rejected.status, 502);
  assert.equal(accessFrom(rejected), undefined);
  responder = () => { throw new Error("mock offline"); };
  assert.equal(accessFrom(await post(SCORECARD)), undefined);
});
test("scorecard POST without a configured secret is refused before delivery", async () => {
  process.env.LEAD_PROOF_CLAIM_TOKEN = "";
  const response = await post(SCORECARD);
  assert.equal(response.status, 503);
  assert.equal(accessFrom(response), undefined);
  assert.equal(seen.length, 0);
});
test("accepted scorecard POST grants a scoped short-lived cookie for the exact PDF", async () => {
  const response = await post(SCORECARD);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true, id: "mock-lead" });
  assert.equal("purpose" in (forwarded().form_data as Record<string, unknown>), false);
  assert.equal("purpose" in forwarded(), false);
  const line = accessCookie(response) ?? "";
  for (const attribute of [/; Path=\/api\/lead(;|$)/, /; Max-Age=600(;|$)/, /; HttpOnly(;|$)/i, /; Secure(;|$)/i, /; SameSite=lax(;|$)/i]) assert.match(line, attribute);
  assert.doesNotMatch(line, /Domain=/i);
  const pdf = await download(accessFrom(response));
  assert.equal(pdf.status, 200);
  assert.equal(pdf.headers.get("Content-Type"), "application/pdf");
  assert.equal(pdf.headers.get("Content-Disposition"), 'attachment; filename="sigma-core-neuropathy-clarity-scorecard.pdf"');
  assert.equal(pdf.headers.get("Cache-Control"), "private, no-store");
  assert.equal(pdf.headers.get("X-Content-Type-Options"), "nosniff");
  assert.deepEqual(Buffer.from(await pdf.arrayBuffer()), await readScorecardPdf());
});
test("a valid entitlement stops working when the secret is removed", async () => {
  const access = accessFrom(await post(SCORECARD));
  process.env.LEAD_PROOF_CLAIM_TOKEN = "";
  await assertDenied(await download(access));
});
