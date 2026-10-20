import assert from "node:assert/strict";
import test from "node:test";
import { buildProofClaim } from "./proofClaim";

const PAYLOAD = {
  powIssuedAt: "1790000000000",
  powNonce: "42",
  email: " A@Example.com ",
};
const TOKEN = "a".repeat(64);
const ENV = { LEAD_PROOF_CLAIM_TOKEN: TOKEN };

test("reads the proof fields exactly as received and mints one attempt id", () => {
  assert.deepEqual(
    buildProofClaim(PAYLOAD, ENV, () => "attempt-1"),
    {
      issuedAt: "1790000000000",
      nonce: "42",
      email: " A@Example.com ",
      attemptId: "attempt-1",
      token: TOKEN,
    },
  );
});

const UNCLAIMABLE: Array<
  [string, Record<string, unknown>, Record<string, string | undefined>]
> = [
  ["no token", PAYLOAD, {}],
  ["a malformed token", PAYLOAD, { LEAD_PROOF_CLAIM_TOKEN: "tok" }],
  ["a short placeholder token", PAYLOAD, { LEAD_PROOF_CLAIM_TOKEN: "TODO" }],
  ["an empty token", PAYLOAD, { LEAD_PROOF_CLAIM_TOKEN: "" }],
  ["no issued-at", { ...PAYLOAD, powIssuedAt: undefined }, ENV],
  ["a numeric issued-at", { ...PAYLOAD, powIssuedAt: 1790000000000 }, ENV],
  ["no nonce", { ...PAYLOAD, powNonce: "" }, ENV],
  ["a numeric nonce", { ...PAYLOAD, powNonce: 42 }, ENV],
  ["no email", { ...PAYLOAD, email: undefined }, ENV],
];
for (const [name, payload, env] of UNCLAIMABLE) {
  test(`cannot be claimed with ${name}`, () => {
    assert.equal(buildProofClaim(payload, env), undefined);
  });
}

test("every call mints a fresh attempt id", () => {
  const a = buildProofClaim(PAYLOAD, ENV);
  const b = buildProofClaim(PAYLOAD, ENV);
  assert.ok(a && b);
  assert.notEqual(a.attemptId, b.attemptId);
});

test("a token with surrounding whitespace is trimmed, not rejected", () => {
  const claim = buildProofClaim(PAYLOAD, {
    LEAD_PROOF_CLAIM_TOKEN: `${TOKEN}\n`,
  });
  assert.equal(claim?.token, TOKEN);
});
