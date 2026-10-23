/**
 * Short-lived download entitlement for the Neuropathy Clarity Scorecard.
 *
 * `/api/lead` issues it only after Keystone accepted a scorecard lead, and the
 * PDF lives outside `public/` so this signed cookie is the only way to it. The
 * signing key is derived from LEAD_PROOF_CLAIM_TOKEN under its own purpose
 * label, so a scorecard signature can never stand in for any other credential.
 * Without a well-formed token nothing is issued and nothing verifies.
 */

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const TOKEN_ENV = "LEAD_PROOF_CLAIM_TOKEN";
const TOKEN_PATTERN = /^[0-9a-f]{64}$/;
const KEY_PURPOSE = "sigma-core/scorecard-access/v1";
const NONCE_BYTES = 16;
const ENTITLEMENT_PATTERN = /^(\d{10,13})\.([A-Za-z0-9_-]{22})\.([A-Za-z0-9_-]{43})$/;

export const SCORECARD_ACCESS_COOKIE = "__Secure-sigma-scorecard-access";
export const SCORECARD_ACCESS_PATH = "/api/lead";
export const SCORECARD_ACCESS_TTL_SECONDS = 600;
const TTL_MS = SCORECARD_ACCESS_TTL_SECONDS * 1000;
export const SCORECARD_FILENAME = "sigma-core-neuropathy-clarity-scorecard.pdf";

type Env = Readonly<Record<string, string | undefined>>;

function signingKey(env: Env): Buffer | null {
  const token = env[TOKEN_ENV]?.trim();
  if (!token || !TOKEN_PATTERN.test(token)) return null;
  return createHmac("sha256", Buffer.from(token, "hex")).update(KEY_PURPOSE).digest();
}

function sign(key: Buffer, expiresAt: string, nonce: string): Buffer {
  return createHmac("sha256", key).update(`${KEY_PURPOSE}\n${expiresAt}\n${nonce}`).digest();
}

/** A fresh `expiry.nonce.signature` value, or null when no key is configured. */
export function issueScorecardAccess(env: Env = process.env, now: number = Date.now()): string | null {
  const key = signingKey(env);
  if (!key) return null;
  const expiresAt = String(now + TTL_MS);
  const nonce = randomBytes(NONCE_BYTES).toString("base64url");
  return `${expiresAt}.${nonce}.${sign(key, expiresAt, nonce).toString("base64url")}`;
}

/** True only for an unexpired value this server signed with the current key. */
export function verifyScorecardAccess(value: unknown, env: Env = process.env, now: number = Date.now()): boolean {
  const key = signingKey(env);
  const match = typeof value === "string" ? ENTITLEMENT_PATTERN.exec(value) : null;
  if (!key || !match) return false;
  const [, expiresAt, nonce, signature] = match;
  const remaining = Number(expiresAt) - now;
  if (remaining <= 0 || remaining > TTL_MS) return false;
  const presented = Buffer.from(signature, "base64url");
  const expected = sign(key, expiresAt, nonce);
  return presented.length === expected.length && timingSafeEqual(presented, expected);
}

/** The exact supplied PDF bytes, read from the private (never served) assets folder. */
export function readScorecardPdf(): Promise<Buffer> {
  return readFile(join(process.cwd(), "assets/scorecard", SCORECARD_FILENAME));
}
