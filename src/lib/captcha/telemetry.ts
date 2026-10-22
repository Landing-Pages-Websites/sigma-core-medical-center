import type {} from "../leadAnalytics";

export type CaptchaUnavailableReason =
  | "unconfigured" | "script_blocked" | "render_failed" | "runtime_error"
  | "expired" | "execute_timeout" | "execute_failed";

/** Use the existing dataLayer; do not add analytics loaders or PII. */
export function reportCaptchaUnavailable(
  reason: CaptchaUnavailableReason,
  provider: "recaptcha" | "turnstile",
): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "captcha_unavailable", reason, provider });
  } catch {
    // Diagnostics must not prevent a retry.
  }
}
