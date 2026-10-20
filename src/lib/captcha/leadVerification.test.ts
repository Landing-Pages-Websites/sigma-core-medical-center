import assert from "node:assert/strict";
import test from "node:test";
import {
  SPAM_CHECK_FALLBACK,
  SPAM_CHECK_RECAPTCHA,
  verifyLeadSubmission,
  type LeadVerification,
  type LeadVerificationDeps,
} from "./leadVerification";
import { LEAD_POW_MAX_AGE_MS, solveLeadProofOfWork } from "./proofOfWork";
import {
  MAX_REMEMBERED_PROOFS,
  createProofReplayGuard,
} from "./proofReplayGuard";
import type { CaptchaResult } from "./verify";
import type { VerificationRoute } from "./route-rule";

const BITS = 8;
const ISSUED_AT = 1_800_000_000_000;

const LEAD = {
  firstName: "Jordan",
  lastName: "Rivers",
  email: "jordan@example.com",
  phone: "7045550199",
  budget: "$10k-$25k",
  message: "Please call me.",
  formKey: "contact-form",
  company_website: "",
  captchaToken: "",
};

const RECAPTCHA: VerificationRoute = { kind: "recaptcha" };

function verifier(result: CaptchaResult | Error): {
  verifyToken: NonNullable<LeadVerificationDeps["verifyToken"]>;
  calls: number;
} {
  const probe = {
    calls: 0,
    verifyToken: async (): Promise<CaptchaResult> => {
      probe.calls += 1;
      if (result instanceof Error) throw result;
      return result;
    },
  };
  return probe;
}

const REJECTED: CaptchaResult = {
  ok: false,
  error: "Please complete the security check and try again.",
  reason: "valid=false invalidReason=BROWSER_ERROR",
};

async function withProof(
  lead: Record<string, unknown>,
  issuedAt = ISSUED_AT,
  bits = BITS,
): Promise<Record<string, unknown>> {
  const bound = { ...lead, powIssuedAt: String(issuedAt) };
  return { ...bound, powNonce: await solveLeadProofOfWork(bound, bits) };
}

function deps(
  overrides: Partial<LeadVerificationDeps> = {},
): LeadVerificationDeps {
  return {
    route: () => RECAPTCHA,
    verifyToken: verifier(REJECTED).verifyToken,
    now: () => ISSUED_AT + 1_000,
    replayGuard: createProofReplayGuard(),
    powDifficultyBits: BITS,
    ...overrides,
  };
}


const RECAPTCHA_FAILURES: ReadonlyArray<{
  name: string;
  result: CaptchaResult | Error;
}> = [
  {
    name: "an empty token",
    result: {
      ok: false,
      error: "Please complete the security check and try again.",
    },
  },
  { name: "BROWSER_ERROR", result: REJECTED },
  {
    name: "a low score",
    result: {
      ok: false,
      error: "x",
      reason: "valid=true challenge=FAILED score=0.1",
    },
  },
  {
    name: "an unreachable assessment",
    result: { ok: false, error: "Security check failed. Please try again." },
  },
  {
    name: "missing server config",
    result: { ok: false, error: "Lead protection is not configured." },
  },
  { name: "a verifier that throws", result: new Error("network") },
];

for (const failure of RECAPTCHA_FAILURES) {
  test(`reCAPTCHA ${failure.name} + a valid proof is delivered, labelled unverified`, async () => {
    const result = await verifyLeadSubmission(
      await withProof(LEAD),
      null,
      deps({ verifyToken: verifier(failure.result).verifyToken }),
    );
    assert.deepEqual(result, { ok: true, spamCheck: SPAM_CHECK_FALLBACK });
  });

  test(`reCAPTCHA ${failure.name} with no proof is rejected`, async () => {
    const result = await verifyLeadSubmission(
      LEAD,
      null,
      deps({ verifyToken: verifier(failure.result).verifyToken }),
    );
    assert.equal(result.ok, false);
  });
}

test("a reCAPTCHA pass is delivered labelled as verified and never touches the guard", async () => {
  const consumed: string[] = [];
  const result = await verifyLeadSubmission(
    LEAD,
    null,
    deps({
      verifyToken: verifier({ ok: true }).verifyToken,
      replayGuard: {
        consume: (key) => {
          consumed.push(key);
          return "claimed";
        },
      },
    }),
  );
  assert.deepEqual(result, { ok: true, spamCheck: SPAM_CHECK_RECAPTCHA });
  assert.deepEqual(consumed, []);
});


const OTHER_ROUTES: ReadonlyArray<VerificationRoute> = [
  { kind: "turnstile" },
  { kind: "reject", error: "Lead protection is not configured." },
];

for (const route of OTHER_ROUTES) {
  test(`${route.kind}: a failed challenge is rejected even with a valid proof`, async () => {
    const result = await verifyLeadSubmission(
      await withProof(LEAD),
      null,
      deps({ route: () => route }),
    );
    assert.deepEqual(result, {
      ok: false,
      error: "Please complete the security check and try again.",
    });
  });

  test(`${route.kind}: a passed challenge carries no spamCheck label`, async () => {
    const result = await verifyLeadSubmission(
      LEAD,
      null,
      deps({
        route: () => route,
        verifyToken: verifier({ ok: true }).verifyToken,
      }),
    );
    assert.deepEqual(result, { ok: true, spamCheck: null });
  });
}


const BYPASS: VerificationRoute = { kind: "bypass" };
const TOKEN_REFUSED: CaptchaResult = {
  ok: false,
  error: "Please complete the security check and try again.",
};

test("bypass: an accepted token is delivered unlabelled and never touches the guard", async () => {
  const consumed: string[] = [];
  const result = await verifyLeadSubmission(
    await withProof(LEAD),
    null,
    deps({
      route: () => BYPASS,
      verifyToken: verifier({ ok: true }).verifyToken,
      replayGuard: {
        consume: (key) => {
          consumed.push(key);
          return "claimed";
        },
      },
    }),
  );
  assert.deepEqual(result, { ok: true, spamCheck: null });
  assert.deepEqual(consumed, []);
});

for (const failure of [TOKEN_REFUSED, new Error("verifier down")]) {
  test(`bypass: a refused token (${failure instanceof Error ? "throws" : "refused"}) + a valid proof takes the fallback and is labelled unverified`, async () => {
    const result = await verifyLeadSubmission(
      await withProof(LEAD),
      null,
      deps({ route: () => BYPASS, verifyToken: verifier(failure).verifyToken }),
    );
    assert.deepEqual(result, { ok: true, spamCheck: SPAM_CHECK_FALLBACK });
  });
}

test("bypass: the fallback claims through the same guard as reCAPTCHA, so a replay is refused", async () => {
  const replayGuard = createProofReplayGuard();
  const proven = await withProof(LEAD);
  const run = (): Promise<LeadVerification> =>
    verifyLeadSubmission(
      proven,
      null,
      deps({
        route: () => BYPASS,
        verifyToken: verifier(TOKEN_REFUSED).verifyToken,
        replayGuard,
      }),
    );
  assert.deepEqual(await run(), { ok: true, spamCheck: SPAM_CHECK_FALLBACK });
  assert.deepEqual(await run(), {
    ok: false,
    error:
      "We couldn't verify this submission. Please try again or contact us directly.",
  });
});

for (const [name, lead] of [
  ["no proof", LEAD],
  ["a proof for other fields", { ...LEAD, message: "changed" }],
] as const) {
  test(`bypass: a refused token + ${name} is rejected`, async () => {
    const proven = await withProof(LEAD);
    const result = await verifyLeadSubmission(
      name === "no proof" ? lead : { ...proven, ...lead },
      null,
      deps({
        route: () => BYPASS,
        verifyToken: verifier(TOKEN_REFUSED).verifyToken,
      }),
    );
    assert.equal(result.ok, false);
  });
}


function without(
  record: Record<string, unknown>,
  key: string,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(record).filter(([name]) => name !== key),
  );
}

const TAMPERING: ReadonlyArray<{
  name: string;
  tamper: (lead: Record<string, unknown>) => Record<string, unknown>;
}> = [
  {
    name: "a different email",
    tamper: (l) => ({ ...l, email: "other@example.com" }),
  },
  {
    name: "a different first name",
    tamper: (l) => ({ ...l, firstName: "Someone" }),
  },
  {
    name: "a different last name",
    tamper: (l) => ({ ...l, lastName: "Else" }),
  },
  { name: "a different phone", tamper: (l) => ({ ...l, phone: "7045550100" }) },
  {
    name: "a changed extra field",
    tamper: (l) => ({ ...l, message: "spam link" }),
  },
  {
    name: "an added extra field",
    tamper: (l) => ({ ...l, website: "http://spam.example" }),
  },
  { name: "a removed extra field", tamper: (l) => without(l, "budget") },
  {
    name: "whitespace in the email",
    tamper: (l) => ({ ...l, email: ` ${String(l.email)}` }),
  },
  {
    name: "a refreshed timestamp",
    tamper: (l) => ({ ...l, powIssuedAt: String(ISSUED_AT + 1) }),
  },
  { name: "no timestamp", tamper: (l) => without(l, "powIssuedAt") },
  {
    name: "a numeric timestamp",
    tamper: (l) => ({ ...l, powIssuedAt: Number(l.powIssuedAt) }),
  },
  {
    name: "a different form key (inbox routing)",
    tamper: (l) => ({ ...l, formKey: "careers-form" }),
  },
  {
    name: "an added legacy form_key",
    tamper: (l) => ({ ...l, form_key: "careers-form" }),
  },
  {
    name: "changed attribution context",
    tamper: (l) => ({ ...l, context: { url: "https://x.test/?gclid=stolen" } }),
  },
  {
    name: "a filled honeypot",
    tamper: (l) => ({ ...l, company_website: "bot" }),
  },
  { name: "an added non-string field", tamper: (l) => ({ ...l, guests: 3 }) },
  { name: "no nonce", tamper: (l) => without(l, "powNonce") },
  {
    name: "a numeric nonce",
    tamper: (l) => ({ ...l, powNonce: Number(l.powNonce) }),
  },
  {
    name: "a hex nonce",
    tamper: (l) => ({ ...l, powNonce: `0x${String(l.powNonce)}` }),
  },
];

// Production-strength proofs keep these deterministic tamper fixtures fast.
const TAMPER_BITS = 16;
const solvedForTampering = withProof(LEAD, ISSUED_AT, TAMPER_BITS);

test("the untampered lead used below is itself accepted", async () => {
  const result = await verifyLeadSubmission(
    await solvedForTampering,
    null,
    deps({ powDifficultyBits: TAMPER_BITS }),
  );
  assert.equal(result.ok, true);
});

for (const { name, tamper } of TAMPERING) {
  test(`a proof replayed with ${name} is rejected`, async () => {
    const result = await verifyLeadSubmission(
      tamper(await solvedForTampering),
      null,
      deps({ powDifficultyBits: TAMPER_BITS }),
    );
    assert.equal(result.ok, false);
  });
}

test("changing only the verification fields does not invalidate the proof", async () => {
  const lead = await withProof(LEAD);
  const result = await verifyLeadSubmission(
    {
      ...lead,
      captchaToken: "another",
      turnstileToken: "legacy",
      captchaAction: "lead_submit",
    },
    null,
    deps(),
  );
  assert.equal(result.ok, true);
});


const TIMING: ReadonlyArray<{
  name: string;
  offsetMs: number;
  accepted: boolean;
}> = [
  { name: "immediately", offsetMs: 0, accepted: true },
  { name: "at the window edge", offsetMs: LEAD_POW_MAX_AGE_MS, accepted: true },
  {
    name: "1ms past the window",
    offsetMs: LEAD_POW_MAX_AGE_MS + 1,
    accepted: false,
  },
  {
    name: "with a timestamp 4s ahead (instance skew)",
    offsetMs: -4_000,
    accepted: true,
  },
  { name: "with a timestamp 6s ahead", offsetMs: -6_000, accepted: false },
  {
    name: "with a timestamp a day ahead",
    offsetMs: -86_400_000,
    accepted: false,
  },
];

for (const { name, offsetMs, accepted } of TIMING) {
  test(`a fresh proof submitted ${name} is ${accepted ? "accepted" : "rejected"}`, async () => {
    const result = await verifyLeadSubmission(
      await withProof(LEAD),
      null,
      deps({ now: () => ISSUED_AT + offsetMs }),
    );
    assert.equal(result.ok, accepted);
  });
}

async function submitTwice(
  second: (first: Record<string, unknown>) => Record<string, unknown>,
  secondAt: number,
): Promise<[boolean, boolean]> {
  const request = await withProof(LEAD);
  const guard = createProofReplayGuard();
  const first = await verifyLeadSubmission(
    { ...request },
    null,
    deps({ replayGuard: guard, now: () => ISSUED_AT }),
  );
  const again = await verifyLeadSubmission(
    second({ ...request }),
    null,
    deps({ replayGuard: guard, now: () => ISSUED_AT + secondAt }),
  );
  return [first.ok, again.ok];
}

test("an identical fallback request submitted twice is rejected the second time", async () => {
  assert.deepEqual(await submitTwice((r) => r, 1_000), [true, false]);
  assert.deepEqual(await submitTwice((r) => r, 0), [true, false]);
  assert.deepEqual(await submitTwice((r) => r, LEAD_POW_MAX_AGE_MS), [
    true,
    false,
  ]);
});

test("a replay with a different token or transport fields is still rejected", async () => {
  assert.deepEqual(
    await submitTwice((r) => ({ ...r, captchaToken: "new" }), 1_000),
    [true, false],
  );
  assert.deepEqual(
    await submitTwice((r) => ({ ...r, turnstileToken: "legacy" }), 1_000),
    [true, false],
  );
});

test("two different leads in the same millisecond are both accepted", async () => {
  const guard = createProofReplayGuard();
  for (const email of ["a@example.com", "b@example.com"]) {
    const result = await verifyLeadSubmission(
      await withProof({ ...LEAD, email }),
      null,
      deps({ replayGuard: guard }),
    );
    assert.equal(result.ok, true, email);
  }
});

test("a full guard refuses new proofs without forgetting unexpired ones", async () => {
  const guard = createProofReplayGuard();
  for (let i = 0; i < MAX_REMEMBERED_PROOFS; i += 1) {
    assert.equal(guard.consume(`flood-${i}`, ISSUED_AT, ISSUED_AT), "claimed");
  }
  assert.equal(
    guard.consume("new", ISSUED_AT, ISSUED_AT + LEAD_POW_MAX_AGE_MS),
    "capacity",
  );
  assert.equal(
    guard.consume("flood-0", ISSUED_AT, ISSUED_AT + LEAD_POW_MAX_AGE_MS),
    "replay",
  );
  const result = await verifyLeadSubmission(
    await withProof(LEAD),
    null,
    deps({ replayGuard: guard }),
  );
  assert.equal(result.ok, false);
  const later = ISSUED_AT + LEAD_POW_MAX_AGE_MS + 1;
  assert.equal(guard.consume("new", later, later), "claimed");
});

test("a proof window shorter than Keystone's 2-minute same-contact dedup window", () => {
  assert.ok(LEAD_POW_MAX_AGE_MS < 2 * 60_000);
});
