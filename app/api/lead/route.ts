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
import { SCORECARD_PURPOSE } from "@/lib/leadSubmit";
import {
  SCORECARD_ACCESS_COOKIE, SCORECARD_ACCESS_PATH, SCORECARD_ACCESS_TTL_SECONDS, SCORECARD_FILENAME,
  issueScorecardAccess, readScorecardPdf, verifyScorecardAccess,
} from "@/lib/scorecardAccess";

export const runtime = "nodejs";
const SUBMIT_ERROR = "Your inquiry could not be confirmed. Please try again.";
const UNVERIFIED_ERROR = "We couldn't verify this submission. Please try again.";
const SCORECARD_UNAVAILABLE_ERROR = "The scorecard is temporarily unavailable. Please try again later.";
const SCORECARD_DENIED_ERROR = "Submit the scorecard form to download the scorecard.";
const SCORECARD_RESOURCE = "scorecard";
const PRIVATE_NO_STORE = "private, no-store";

function jsonError(error: string, status: number, headers?: HeadersInit): NextResponse {
  return NextResponse.json({ ok: false, error }, { status, headers });
}

function clientIp(request: NextRequest): string | null {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip");
}

async function scorecardDownload(request: NextRequest): Promise<NextResponse> {
  const headers = { "Cache-Control": PRIVATE_NO_STORE, "X-Content-Type-Options": "nosniff" };
  if (!verifyScorecardAccess(request.cookies.get(SCORECARD_ACCESS_COOKIE)?.value)) {
    return jsonError(SCORECARD_DENIED_ERROR, 403, headers);
  }
  try {
    const pdf = await readScorecardPdf();
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        ...headers, "Content-Type": "application/pdf", "Content-Length": String(pdf.byteLength),
        "Content-Disposition": `attachment; filename="${SCORECARD_FILENAME}"`,
      },
    });
  } catch {
    return jsonError(SCORECARD_UNAVAILABLE_ERROR, 404, headers);
  }
}

/**
 * Without a query: a fresh timestamp for the donor's lead-pow-v1 fallback.
 * `?resource=scorecard`: the PDF, only for a signed entitlement cookie.
 */
export function GET(): NextResponse;
export function GET(request: NextRequest): NextResponse | Promise<NextResponse>;
export function GET(request?: NextRequest): NextResponse | Promise<NextResponse> {
  const resource = request?.nextUrl.searchParams.get("resource");
  if (resource === SCORECARD_RESOURCE && request) return scorecardDownload(request);
  if (resource != null) return jsonError("Not found.", 404);
  return NextResponse.json(
    { issuedAt: String(Date.now()) },
    { headers: { "Cache-Control": "no-store" } },
  );
}

/** Attached only to a lead Keystone confirmed; the value is signed server-side. */
function grantScorecardAccess(response: NextResponse, access: string): NextResponse {
  response.cookies.set(SCORECARD_ACCESS_COOKIE, access, {
    httpOnly: true, secure: true, sameSite: "lax", path: SCORECARD_ACCESS_PATH, maxAge: SCORECARD_ACCESS_TTL_SECONDS,
  });
  response.headers.set("Cache-Control", PRIVATE_NO_STORE);
  return response;
}

async function deliver(
  payload: Record<string, unknown>, fields: ValidatedLeadFields,
  context: LeadContext, request: NextRequest, scorecardAccess: string | null,
): Promise<NextResponse> {
  try {
    const verification = await verifyLeadSubmission(payload, clientIp(request));
    if (!verification.ok) return jsonError(verification.error, 403);
    const extra: Record<string, string> = verification.spamCheck === null ? {} : { spamCheck: verification.spamCheck };
    const fallback = verification.spamCheck === SPAM_CHECK_FALLBACK;
    const proofClaim = fallback ? buildProofClaim(payload) : undefined;
    if (fallback && !proofClaim) return jsonError(SUBMIT_ERROR, 502);
    const result = await forwardLeadToKeystone({ ...fields, extra }, context, leadConfig.formKey, proofClaim);
    const response = NextResponse.json(result);
    return result.ok === true && scorecardAccess ? grantScorecardAccess(response, scorecardAccess) : response;
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
  // A scorecard lead that could never receive its download is refused before delivery.
  const scorecard = payload.purpose === SCORECARD_PURPOSE;
  const scorecardAccess = scorecard ? issueScorecardAccess() : null;
  if (scorecard && !scorecardAccess) return jsonError(SCORECARD_UNAVAILABLE_ERROR, 503);
  return deliver(payload, parsed.fields, context, request, scorecardAccess);
}
