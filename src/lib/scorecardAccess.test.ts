import assert from "node:assert/strict";
import { createHash, createHmac } from "node:crypto";
import test from "node:test";
import { SCORECARD_ACCESS_TTL_SECONDS, issueScorecardAccess, readScorecardPdf, verifyScorecardAccess } from "./scorecardAccess";

const ENV = { LEAD_PROOF_CLAIM_TOKEN: "b".repeat(64) };
const NOW = 1_800_000_000_000;
const TTL_MS = SCORECARD_ACCESS_TTL_SECONDS * 1000;
const SUPPLIED_PDF_SHA256 = "6fc1415afdd4051c7c7fcdda29b24adc8f9b3b0088e3fc9e4ec50d292dcaa713";

function issued(): string {
  const access = issueScorecardAccess(ENV, NOW);
  assert.ok(access);
  return access;
}

test("scorecard access verifies only inside its lifetime", () => {
  const access = issued();
  assert.equal(SCORECARD_ACCESS_TTL_SECONDS, 600);
  assert.equal(verifyScorecardAccess(access, ENV, NOW), true);
  assert.equal(verifyScorecardAccess(access, ENV, NOW + TTL_MS - 1), true);
  assert.equal(verifyScorecardAccess(access, ENV, NOW + TTL_MS), false);
  assert.equal(verifyScorecardAccess(access, ENV, NOW - 1), false);
});

test("each issue is unique", () => {
  assert.notEqual(issued(), issued());
});

test("tampered, re-dated, malformed and foreign-key values are refused", () => {
  const [expiresAt, nonce, signature] = issued().split(".");
  const flipped = `${signature.startsWith("A") ? "B" : "A"}${signature.slice(1)}`;
  const later = String(Number(expiresAt) + 1000);
  for (const value of [`${expiresAt}.${nonce}.${flipped}`, `${later}.${nonce}.${signature}`, `${expiresAt}.${nonce}`, "", "scorecard", "1", null, 42, undefined, `${expiresAt}.${nonce}.${signature}.x`]) {
    assert.equal(verifyScorecardAccess(value, ENV, NOW), false);
  }
  const other = issueScorecardAccess({ LEAD_PROOF_CLAIM_TOKEN: "c".repeat(64) }, NOW);
  assert.equal(verifyScorecardAccess(other, ENV, NOW), false);
});

test("a value signed directly with the raw token (no purpose separation) is refused", () => {
  const [expiresAt, nonce] = issued().split(".");
  const raw = createHmac("sha256", Buffer.from(ENV.LEAD_PROOF_CLAIM_TOKEN, "hex")).update(`${expiresAt}\n${nonce}`).digest("base64url");
  assert.equal(verifyScorecardAccess(`${expiresAt}.${nonce}.${raw}`, ENV, NOW), false);
});

test("a far-future expiry is refused even when correctly signed under the key", () => {
  const farFuture = issueScorecardAccess(ENV, NOW + TTL_MS * 10);
  assert.equal(verifyScorecardAccess(farFuture, ENV, NOW), false);
});

test("missing or weak secret fails closed for issue and verify", () => {
  const access = issued();
  for (const LEAD_PROOF_CLAIM_TOKEN of [undefined, "", "   ", "short", "g".repeat(64), "a".repeat(63)]) {
    const env = { LEAD_PROOF_CLAIM_TOKEN };
    assert.equal(issueScorecardAccess(env, NOW), null);
    assert.equal(verifyScorecardAccess(access, env, NOW), false);
  }
});

test("private PDF is the exact supplied file", async () => {
  const pdf = await readScorecardPdf();
  assert.equal(createHash("sha256").update(pdf).digest("hex"), SUPPLIED_PDF_SHA256);
});
