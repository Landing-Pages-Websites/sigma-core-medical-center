import { loadCaptchaScript, withinTokenWait } from "./clientScript";
import { reportCaptchaUnavailable } from "./telemetry";

const SCRIPT_SRC = "https://www.google.com/recaptcha/enterprise.js?render=explicit";
/**
 * How long a submission waits for a reCAPTCHA token, and the only deadline on
 * it: recaptchaToken settles by it on every path and reports before returning,
 * and useCaptcha adds no timer of its own. Past it the proof-of-work fallback
 * sends the lead, so a report from any later or competing timer would count a
 * lead that arrived as one that could not get a token.
 */
export const RECAPTCHA_TOKEN_WAIT_MS = 10_000;
interface RecaptchaApi {
  ready: (callback: () => void) => void;
  render: (container: HTMLElement, options: {
    sitekey: string; size: "invisible"; action: string;
    "error-callback": () => void; "expired-callback": () => void;
  }) => number;
  execute: (widgetId: number, options: { action: string }) => Promise<string>;
  reset: (widgetId: number) => void;
}
declare global { interface Window { grecaptcha?: { enterprise?: RecaptchaApi } } }

export async function loadRecaptcha(): Promise<void> {
  try {
    if (!window.grecaptcha?.enterprise) await loadCaptchaScript(SCRIPT_SRC);
  } catch {
    throw new Error("reCAPTCHA script unavailable.");
  }
}

export function renderRecaptcha(container: HTMLElement, sitekey: string, action: string, onReady: (ready: boolean) => void): number | null {
  try {
    const id = window.grecaptcha?.enterprise?.render(container, {
      sitekey, size: "invisible", action,
      "error-callback": () => { reportCaptchaUnavailable("runtime_error", "recaptcha"); onReady(false); },
      "expired-callback": () => { reportCaptchaUnavailable("expired", "recaptcha"); onReady(false); },
    });
    onReady(id !== undefined);
    return id ?? null;
  } catch {
    reportCaptchaUnavailable("render_failed", "recaptcha");
    onReady(false);
    return null;
  }
}

export function resetRecaptcha(id: number | null): void {
  try {
    if (id !== null) window.grecaptcha?.enterprise?.reset(id);
  } catch {
    // The provider may already have removed the widget's container.
  }
}

/**
 * Policy-based challenge: reset and execute a widget ID, never a score key.
 * Without a token by the deadline the widget is reset, unanswered, so an open
 * image challenge cannot cover the form's outcome; the server still decides.
 */
export async function recaptchaToken(id: number | null, action: string): Promise<string | null> {
  const api = window.grecaptcha?.enterprise;
  if (id === null || !api) { reportCaptchaUnavailable("execute_failed", "recaptcha"); return null; }
  try {
    api.reset(id);
    const token = await withinTokenWait(api.execute(id, { action }), RECAPTCHA_TOKEN_WAIT_MS);
    if (token) return token;
  } catch {
    // Reported below with the deadline's no-token path.
  }
  reportCaptchaUnavailable("execute_failed", "recaptcha");
  resetRecaptcha(id);
  return null;
}
