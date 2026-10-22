import { loadCaptchaScript, withinTokenWait } from "./clientScript";
import { reportCaptchaUnavailable } from "./telemetry";

const SCRIPT_SRC = "https://www.google.com/recaptcha/enterprise.js?render=explicit";
const EXECUTE_TIMEOUT_MS = 30_000;
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

/** Policy-based challenge: reset and execute a widget ID, never a score key. */
export async function recaptchaToken(id: number | null, action: string): Promise<string | null> {
  const api = window.grecaptcha?.enterprise;
  if (id === null || !api) { reportCaptchaUnavailable("execute_failed", "recaptcha"); return null; }
  try {
    api.reset(id);
    const token = await withinTokenWait(api.execute(id, { action }), EXECUTE_TIMEOUT_MS);
    if (!token) reportCaptchaUnavailable("execute_failed", "recaptcha");
    return token;
  } catch {
    reportCaptchaUnavailable("execute_failed", "recaptcha");
    return null;
  }
}
