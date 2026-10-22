import { NextRequest, NextResponse } from "next/server";
import { HONEYPOT_FIELD_NAME, parseLeadFields, type ValidatedLeadFields } from "@/lib/leadValidation";
import { leadOriginAllowed } from "@/lib/leadOrigin";
import { leadConfig } from "@/lib/leadConfig";
import { asLeadContext } from "@/lib/leadServerContext";
import type { LeadContext } from "@/lib/leadContext";
import { ProofClaimRefusedError, forwardLeadToKeystone } from "@/lib/forwardLead";
import { buildProofClaim } from "@/lib/captcha/proofClaim";
import { SPAM_CHECK_FALLBACK, verifyLeadSubmission } from "@/lib/captcha/leadVerification";
import { PREVIEW_TEST_ONLY_ERROR, previewRefusesLead } from "@/lib/captcha/previewLeadGate";

export const runtime = "nodejs";
const SUBMIT_ERROR = "Your inquiry could not be confirmed. Please try again.";
const UNVERIFIED_ERROR = "We couldn't verify this submission. Please try again.";

function jsonError(error: string, status: number): NextResponse {
  return NextResponse.json({ ok: false, error }, { status });
}

function clientIp(request: NextRequest): string | null {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip");
}

/** Fresh timestamp for the donor's lead-pow-v1 fallback. */
export function GET(): NextResponse {
  return NextResponse.json(
    { issuedAt: String(Date.now()) },
    { headers: { "Cache-Control": "no-store" } },
  );
}

async function deliver(
  payload: Record<string, unknown>, fields: ValidatedLeadFields,
  context: LeadContext, request: NextRequest,
): Promise<NextResponse> {
  try {
    const verification = await verifyLeadSubmission(payload, clientIp(request));
    if (!verification.ok) return jsonError(verification.error, 403);
    const extra: Record<string, string> = verification.spamCheck === null ? {} : { spamCheck: verification.spamCheck };
    const fallback = verification.spamCheck === SPAM_CHECK_FALLBACK;
    const proofClaim = fallback ? buildProofClaim(payload) : undefined;
    if (fallback && !proofClaim) return jsonError(SUBMIT_ERROR, 502);
    const result = await forwardLeadToKeystone({ ...fields, extra }, context, leadConfig.formKey, proofClaim);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof ProofClaimRefusedError) return jsonError(UNVERIFIED_ERROR, 403);
    // Do not log transport objects: these can contain contact data or credentials.
    return jsonError(SUBMIT_ERROR, 502);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!leadOriginAllowed(request.headers.get("origin"))) return jsonError("Invalid request origin.", 403);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) return jsonError("Invalid request.", 400);
  const payload = body as Record<string, unknown>;
  const honeypot = payload[HONEYPOT_FIELD_NAME];
  if (typeof honeypot === "string" && honeypot.trim()) return NextResponse.json({ ok: true, ignored: true });
  const parsed = parseLeadFields(payload);
  if (!parsed.ok) return jsonError(parsed.error, 400);
  if (previewRefusesLead(payload, parsed.fields.email)) return jsonError(PREVIEW_TEST_ONLY_ERROR, 403);
  // Reject malformed context before irreversible local proof consumption.
  const context = asLeadContext(payload.context);
  if (!context) return jsonError("Invalid request.", 400);
  return deliver(payload, parsed.fields, context, request);
}
