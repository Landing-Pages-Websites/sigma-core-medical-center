import assert from "node:assert/strict";
import test from "node:test";
import {
  ProofClaimRefusedError,
  ProofClaimUnavailableError,
  forwardLeadToKeystone,
  type ProofClaim,
} from "./forwardLead";
import { buildProofClaim } from "./captcha/proofClaim";
import type { ValidatedLeadFields } from "./leadValidation";
import type { LeadContext } from "./leadContext";

const FIELDS: ValidatedLeadFields = {
  firstName: "A",
  lastName: "B",
  email: "a@example.com",
  phone: "(555) 555-5555",
  extra: {},
};
const CONTEXT = {
  url: "https://example.com/",
  session_id: "s",
  visitor_id: "v",
} as unknown as LeadContext;
const CLAIM: ProofClaim = {
  issuedAt: "1790000000000",
  nonce: "42",
  email: "a@example.com",
  attemptId: "11111111-1111-4111-8111-111111111111",
  token: "tok",
};

interface Seen {
  headers: Record<string, string>;
  body: string;
}

function reply(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status });
}

/** A scripted receiver: each call returns (or throws) the next step. */
function receiver(steps: Array<Response | Error>): {
  fetch: typeof fetch;
  seen: Seen[];
} {
  const seen: Seen[] = [];
  let index = 0;
  const fetchStub: typeof fetch = async (_url, init) => {
    seen.push({
      headers: init?.headers as Record<string, string>,
      body: String(init?.body),
    });
    const step = steps[Math.min(index, steps.length - 1)];
    index += 1;
    if (step instanceof Error) throw step;
    return step.clone();
  };
  return { fetch: fetchStub, seen };
}

const forward = (transport: { fetch: typeof fetch }, claim = CLAIM) =>
  forwardLeadToKeystone(FIELDS, CONTEXT, "contact-form", claim, transport);

test("a claimed proof is delivered with the token header and the proof fields", async () => {
  const r = receiver([
    reply(200, { ok: true, id: "L1", proof_claim: "claimed" }),
  ]);
  assert.deepEqual(await forward(r), { ok: true, id: "L1" });
  const sent = JSON.parse(r.seen[0].body);
  assert.deepEqual(sent.proof_claim, {
    issued_at: CLAIM.issuedAt,
    nonce: CLAIM.nonce,
    email: CLAIM.email,
    attempt_id: CLAIM.attemptId,
  });
  assert.equal(r.seen[0].headers["x-mega-proof-claim-token"], "tok");
});

const REFUSALS = [400, 401, 403, 409];
for (const status of REFUSALS) {
  test(`HTTP ${status} is a final refusal and is never retried`, async () => {
    const r = receiver([
      reply(status, { ok: false, error: "proof_already_claimed" }),
    ]);
    await assert.rejects(
      forward(r),
      (e) => e instanceof ProofClaimRefusedError && e.status === status,
    );
    assert.equal(r.seen.length, 1);
  });
}

test("a 2xx without the claim marker is not a claim (receiver predates the contract)", async () => {
  for (const body of [
    { ok: true, id: "L1" },
    { ok: true, id: "L1", proof_claim: "yes" },
    { ok: true, proof_claim: null },
  ]) {
    const r = receiver([reply(200, body)]);
    await assert.rejects(forward(r), ProofClaimUnavailableError);
  }
});

test("a timeout is retried with the same attempt id and identical body, and returns the original lead", async () => {
  const r = receiver([
    new DOMException("timed out", "TimeoutError"),
    reply(200, {
      ok: true,
      id: "L1",
      idempotent_replay: true,
      proof_claim: "retry",
    }),
  ]);
  assert.deepEqual(await forward(r), { ok: true, id: "L1" });
  assert.equal(r.seen.length, 2);
  assert.equal(r.seen[0].body, r.seen[1].body);
});

for (const status of [500, 502, 503, 504]) {
  test(`HTTP ${status} on every attempt fails closed as unavailable`, async () => {
    const r = receiver([reply(status, { ok: false })]);
    await assert.rejects(forward(r), ProofClaimUnavailableError);
    assert.equal(r.seen.length, 2);
  });
}

test("a network failure on every attempt fails closed as unavailable", async () => {
  const r = receiver([new TypeError("fetch failed")]);
  await assert.rejects(forward(r), ProofClaimUnavailableError);
  assert.equal(r.seen.length, 2);
});

test("a refusal after a retry still refuses", async () => {
  const r = receiver([
    new TypeError("fetch failed"),
    reply(409, { ok: false }),
  ]);
  await assert.rejects(forward(r), ProofClaimRefusedError);
});

/**
 * Cross-instance regression. Two independent serving instances (separate
 * invocations sharing nothing but the receiver) forward the SAME captured proof
 * with their own attempt ids; the receiver below is a stand-in with the real
 * contract's semantics (first attempt wins, same attempt is a retry, other
 * attempt is a replay). The real receiver is proven against Postgres in
 * megaseo-web src/server/db/lead_proof_claims.migration.test.ts.
 */
test("two independent instances forwarding one proof: exactly one delivers", async () => {
  const claimed = new Map<string, { attempt: string; id: string }>();
  const fetchStub: typeof fetch = async (_url, init) => {
    const body = JSON.parse(String(init?.body));
    const { issued_at, nonce, email, attempt_id } = body.proof_claim;
    const digest = JSON.stringify([issued_at, nonce, email]);
    await Promise.resolve();
    const existing = claimed.get(digest);
    if (!existing) {
      claimed.set(digest, { attempt: attempt_id, id: "L-win" });
      return reply(200, { ok: true, id: "L-win", proof_claim: "claimed" });
    }
    return existing.attempt === attempt_id
      ? reply(200, { ok: true, id: existing.id, proof_claim: "retry" })
      : reply(409, { ok: false, error: "proof_already_claimed" });
  };
  const instances = Array.from({ length: 12 }, (_, i) => {
    const attemptId = buildProofClaim(
      {
        powIssuedAt: CLAIM.issuedAt,
        powNonce: CLAIM.nonce,
        email: CLAIM.email,
      },
      { LEAD_PROOF_CLAIM_TOKEN: "a".repeat(64) },
      () => `00000000-0000-4000-8000-${String(i).padStart(12, "0")}`,
    );
    assert.ok(attemptId);
    return forward({ fetch: fetchStub }, attemptId);
  });
  const settled = await Promise.allSettled(instances);
  assert.equal(settled.filter((s) => s.status === "fulfilled").length, 1);
  const refused = settled.filter(
    (s) =>
      s.status === "rejected" && s.reason instanceof ProofClaimRefusedError,
  );
  assert.equal(refused.length, 11);
});

test("without a proof claim the forward is the unchanged single request", async () => {
  const r = receiver([reply(200, { ok: true, id: "L9" })]);
  const real = globalThis.fetch;
  globalThis.fetch = r.fetch;
  try {
    assert.deepEqual(
      await forwardLeadToKeystone(FIELDS, CONTEXT, "contact-form"),
      { ok: true, id: "L9" },
    );
  } finally {
    globalThis.fetch = real;
  }
  assert.equal(r.seen.length, 1);
  assert.ok(!("proof_claim" in JSON.parse(r.seen[0].body)));
  assert.ok(!("x-mega-proof-claim-token" in r.seen[0].headers));
});
