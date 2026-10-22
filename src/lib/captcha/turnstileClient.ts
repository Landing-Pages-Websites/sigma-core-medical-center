import { loadCaptchaScript } from "./clientScript";
import { reportCaptchaUnavailable } from "./telemetry";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
interface TurnstileApi {
  render: (container: HTMLElement, options: {
    sitekey: string; appearance: "interaction-only"; size: "flexible";
    callback: (token: string) => void; "expired-callback": () => void; "error-callback": () => void;
  }) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}
declare global { interface Window { turnstile?: TurnstileApi } }

export async function loadTurnstile(): Promise<void> {
  try {
    if (!window.turnstile) await loadCaptchaScript(SCRIPT_SRC);
  } catch {
    throw new Error("Turnstile script unavailable.");
  }
}
export function renderTurnstile(container: HTMLElement, sitekey: string, onToken: (token: string | null) => void): string | null {
  return window.turnstile?.render(container, {
    sitekey, appearance: "interaction-only", size: "flexible", callback: onToken,
    "expired-callback": () => { reportCaptchaUnavailable("expired", "turnstile"); onToken(null); },
    "error-callback": () => { reportCaptchaUnavailable("runtime_error", "turnstile"); onToken(null); },
  }) ?? null;
}
export function resetTurnstile(id: string | null): void {
  if (id) window.turnstile?.reset(id);
}
export function removeTurnstile(id: string | null): void {
  if (id) window.turnstile?.remove(id);
}
