/** Shared browser/handler contract, adapted from site-starter without uploads. */
export const EMAIL_PATTERN = "[A-Za-z0-9._%+\\-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9\\-]*[A-Za-z0-9])?\\.)+[A-Za-z]{2,}";
export const EMAIL_REGEX = new RegExp(`^${EMAIL_PATTERN}$`);
export const PHONE_PATTERN = "(?:[^0-9]*[0-9]){10}[^0-9]*";
export const HONEYPOT_FIELD_NAME = "company_website";
export const MAX_NAME_LENGTH = 200;
export const LEAD_FIELDS = ["firstName", "lastName", "email", "phone"] as const;
export type LeadField = (typeof LEAD_FIELDS)[number];
export type LeadErrors = Partial<Record<LeadField, string>>;

export interface ValidatedLeadFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Only the server may add verification labels; client extras are discarded. */
  extra: Record<string, string>;
}

export function isValidEmail(value: unknown): boolean {
  return typeof value === "string" && EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, "").length === 10;
}

export function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function leadFieldError(name: LeadField, value: unknown): string {
  const text = typeof value === "string" ? value.trim() : "";
  if (name === "email") return isValidEmail(text) ? "" : "Enter an email with a full domain, such as you@example.com.";
  if (name === "phone") return isValidPhone(text) ? "" : "Enter exactly 10 phone digits.";
  if (!text || text.length > MAX_NAME_LENGTH) {
    return `Enter your ${name === "firstName" ? "first" : "last"} name (up to ${MAX_NAME_LENGTH} characters).`;
  }
  return "";
}

export function leadErrors(input: Record<string, unknown>): LeadErrors {
  return Object.fromEntries(LEAD_FIELDS.map((name) => [name, leadFieldError(name, input[name])]).filter(([, error]) => error));
}

export function parseLeadFields(input: Record<string, unknown>):
  | { ok: true; fields: ValidatedLeadFields }
  | { ok: false; error: string } {
  const errors = leadErrors(input);
  const firstError = Object.values(errors)[0];
  if (firstError) return { ok: false, error: firstError };
  return {
    ok: true,
    fields: {
      firstName: (input.firstName as string).trim(),
      lastName: (input.lastName as string).trim(),
      email: (input.email as string).trim(),
      phone: phoneDigits(input.phone as string),
      extra: {},
    },
  };
}

/** Presence, not truthiness: an empty canonical token cannot fall through. */
export function readCaptchaToken(payload: Record<string, unknown>): unknown {
  return "captchaToken" in payload ? payload.captchaToken : payload.turnstileToken;
}
