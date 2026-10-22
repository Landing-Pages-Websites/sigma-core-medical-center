/** One explicit provider script per page, shared across widget remounts. */
const scripts = new Map<string, Promise<void>>();

function attachScript(src: string, resolve: () => void, reject: (reason: Error) => void): void {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  const script = existing ?? document.createElement("script");
  script.addEventListener("load", () => resolve(), { once: true });
  script.addEventListener("error", () => reject(new Error("Security check script unavailable.")), { once: true });
  if (existing) return;
  script.src = src;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export function loadCaptchaScript(src: string): Promise<void> {
  const existing = scripts.get(src);
  if (existing) return existing;
  const pending = new Promise<void>((resolve, reject) => attachScript(src, resolve, reject));
  scripts.set(src, pending);
  return pending;
}

/** Clear the deadline after settlement; an accepted token must not report timeout later. */
export async function withinTokenWait(token: Promise<string | null>, timeoutMs: number): Promise<string | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([token, new Promise<null>((resolve) => {
      timer = setTimeout(() => resolve(null), timeoutMs);
    })]);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
