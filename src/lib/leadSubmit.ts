import { captureLeadContext } from "./leadContext";
import { leadConfig } from "./leadConfig";
import { HONEYPOT_FIELD_NAME, parseLeadFields, readCaptchaToken } from "./leadValidation";
import { clientVerificationRoute } from "./captcha/client-route";
import { solveLeadProof } from "./captcha/leadProofClient";

const SUBMIT_ERROR = "Your inquiry could not be confirmed. Please check your connection and try again.";
export interface SubmissionResponse { ok: true; id?: string }

function submissionBody(input: Record<string, unknown>): Record<string, unknown> {
  const parsed = parseLeadFields(input);
  if (!parsed.ok) throw new Error(parsed.error);
  const { firstName, lastName, email, phone } = parsed.fields;
  return {
    firstName, lastName, email, phone, formKey: leadConfig.formKey,
    [HONEYPOT_FIELD_NAME]: input[HONEYPOT_FIELD_NAME] ?? "",
    captchaToken: readCaptchaToken(input),
    context: captureLeadContext(),
  };
}

/** An ignored honeypot response is never visitor-visible success. */
export function acceptedSubmission(json: unknown): SubmissionResponse {
  if (typeof json !== "object" || json === null) throw new Error(SUBMIT_ERROR);
  const result = json as Record<string, unknown>;
  if (result.ok !== true || result.ignored === true) throw new Error(SUBMIT_ERROR);
  return { ok: true, ...(typeof result.id === "string" ? { id: result.id } : {}) };
}

/** Donor submit contract without upload signing or attachment dependencies. */
export async function submitLead(input: Record<string, unknown>): Promise<SubmissionResponse> {
  try {
    const body = submissionBody(input);
    const route = clientVerificationRoute();
    const proof = route === "recaptcha" || route === "bypass" ? await solveLeadProof(body) : null;
    const response = await fetch("/api/lead", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, ...(proof ?? {}) }),
    });
    if (!response.ok) throw new Error(SUBMIT_ERROR);
    return acceptedSubmission(await response.json());
  } catch {
    throw new Error(SUBMIT_ERROR);
  }
}
