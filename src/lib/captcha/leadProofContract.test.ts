import assert from "node:assert/strict";
import test from "node:test";
import {
  verifyLeadSubmission,
  type LeadVerificationDeps,
} from "./leadVerification";
import { solveLeadProofOfWork } from "./proofOfWork";
import {
  createProofReplayGuard,
} from "./proofReplayGuard";
import { solveLeadProof } from "./leadProofClient";
import type { CaptchaResult } from "./verify";
import type { VerificationRoute } from "./route-rule";
import { parseLeadFields } from "../leadValidation";

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

function without(
  record: Record<string, unknown>,
  key: string,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(record).filter(([name]) => name !== key),
  );
}


// Production-strength proofs keep these deterministic tamper fixtures fast.
const TAMPER_BITS = 16;

const DRAFTS: ReadonlyArray<{ name: string; draft: Record<string, unknown> }> =
  [
    { name: "the template LeadForm shape", draft: LEAD },
    {
      name: "a custom form with extra fields",
      draft: { ...LEAD, service: "Pools", zip: "85001", consent: "yes" },
    },
    {
      name: "keys in a different order",
      draft: {
        message: "Hi",
        email: "jordan@example.com",
        phone: "7045550199",
        lastName: "R",
        firstName: "J",
      },
    },
    {
      name: "unicode, quotes and separators",
      draft: { ...LEAD, firstName: ' Zoë "Z" ', message: "a\\b c 🙂" },
    },
    {
      name: "non-string values (never forwarded)",
      draft: { ...LEAD, newsletter: true, guests: 3 },
    },
    {
      name: "the hook body with context and uploads",
      draft: {
        ...LEAD,
        uploadKeys: [],
        context: {
          url: "https://x.test/",
          session_id: "s",
          visitor_id: "v",
          gclid: null,
        },
      },
    },
    {
      name: "a Date, NaN and an undefined field",
      draft: {
        ...LEAD,
        when: new Date(0),
        ratio: Number.NaN,
        missing: undefined,
      },
    },
  ];

for (const { name, draft } of DRAFTS) {
  test(`${name}: a client-solved proof passes the server`, async () => {
    const proof = await solveLeadProof(draft, async () => String(ISSUED_AT));
    assert.ok(proof);
    const body = JSON.parse(JSON.stringify({ ...draft, ...proof }));
    const result = await verifyLeadSubmission(
      body,
      null,
      deps({ powDifficultyBits: undefined }),
    );
    assert.equal(result.ok, true, name);
  });
}

test("a solver failure yields no proof instead of throwing", async () => {
  const proof = await solveLeadProof(LEAD, async () => {
    throw new Error("offline");
  });
  assert.equal(proof, null);
});


test("a client-sent spamCheck or proof field is never forwarded as lead data", () => {
  const parsed = parseLeadFields({
    ...LEAD,
    spamCheck: "Passed reCAPTCHA",
    powNonce: "1",
    powIssuedAt: "1",
    captchaAction: "lead_submit",
  });
  assert.ok(parsed.ok);
  for (const key of ["spamCheck", "powNonce", "powIssuedAt", "captchaAction"]) {
    assert.equal(key in parsed.fields.extra, false, key);
  }
  assert.deepEqual(Object.keys(parsed.fields.extra), []);
});

const LOOKALIKES = [
  "spamcheck",
  "spam_check",
  "SpamCheck",
  "SPAM-CHECK",
  "Spam Check",
  "spamCheck ",
  " spam.check",
];

for (const key of LOOKALIKES) {
  test(`a lookalike label key ${JSON.stringify(key)} is never forwarded`, () => {
    const parsed = parseLeadFields({ ...LEAD, [key]: "Passed reCAPTCHA" });
    assert.ok(parsed.ok);
    assert.equal(key in parsed.fields.extra, false);
  });
}


test("a long email cannot grow a guard entry: keys are stored as digests", () => {
  const guard = createProofReplayGuard();
  const longKey = JSON.stringify([
    String(ISSUED_AT),
    "1",
    `${"a".repeat(5_000)}@example.com`,
  ]);
  assert.equal(guard.consume(longKey, ISSUED_AT, ISSUED_AT), "claimed");
  assert.equal(guard.consume(longKey, ISSUED_AT, ISSUED_AT + 1), "replay");
});

for (const alias of ["formKey", "form_key"] as const) {
  for (const changed of ["formKey", "form_key"] as const) {
    test(`a proof solved with ${alias} is rejected when ${changed} is changed`, async () => {
      const base = { ...without(LEAD, "formKey"), [alias]: "contact-form" };
      const solved = await withProof(base, ISSUED_AT, TAMPER_BITS);
      const result = await verifyLeadSubmission(
        { ...solved, [changed]: "careers-form" },
        null,
        deps({ powDifficultyBits: TAMPER_BITS }),
      );
      assert.equal(result.ok, false);
    });
  }
}

const TYPE_SWAPS: ReadonlyArray<{
  solvedWith: unknown;
  replayedWith: unknown;
}> = [
  { solvedWith: "null", replayedWith: null },
  { solvedWith: null, replayedWith: "null" },
  { solvedWith: "true", replayedWith: true },
  { solvedWith: false, replayedWith: "false" },
  { solvedWith: "0", replayedWith: 0 },
  { solvedWith: 12, replayedWith: "12" },
  { solvedWith: "[]", replayedWith: [] },
  { solvedWith: "{}", replayedWith: {} },
];

for (const { solvedWith, replayedWith } of TYPE_SWAPS) {
  test(`a proof solved with message ${JSON.stringify(solvedWith)} is rejected with ${JSON.stringify(replayedWith)}`, async () => {
    const solved = await withProof(
      { ...LEAD, message: solvedWith },
      ISSUED_AT,
      TAMPER_BITS,
    );
    const result = await verifyLeadSubmission(
      { ...solved, message: replayedWith },
      null,
      deps({ powDifficultyBits: TAMPER_BITS }),
    );
    assert.equal(result.ok, false);
  });
}
