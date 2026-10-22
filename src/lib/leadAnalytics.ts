declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Analytics must never turn an accepted lead into a retry. No contact data. */
export function trackLeadSuccess(): void {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submission" });
  } catch {
    // Capture already succeeded; a blocked analytics collector is non-blocking.
  }
}
