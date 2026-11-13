import { analyticsAllowedNow, gaConsentLevelNow } from "@/lib/consent";
import { TRACKING_ENABLED } from "@/lib/tracking/enabled";
import { ensureGaConsentDefault, ga4Id } from "@/lib/tracking/ga";
import { gaEventFor } from "@/lib/tracking/ga-events";
import { reassertGaHitScrubber } from "@/lib/tracking/ga-transport";
import { enqueueOrCapture, type QueueCaptureOptions } from "@/lib/tracking/queue";
import { scrubProps } from "@/lib/tracking/scrub";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The one way to write to GA4's dataLayer. A pre-consent entry would persist
 * and be processed once GA loads after a later Accept, so nothing is written
 * unless consent allows it at that moment. URL-shaped values go through the
 * same scrubber as PostHog captures. No-op on the server.
 */
export function pushDataLayer(entry: Record<string, unknown>): void {
  if (typeof window === "undefined" || !analyticsAllowedNow()) {
    return;
  }
  // GA4 Consent Mode: the consent default must precede anything gtag.js reads.
  ensureGaConsentDefault(window, ga4Id(), gaConsentLevelNow);
  reassertGaHitScrubber(window);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(scrubProps(entry));
}

/**
 * Sends the conversion events GA4 must see (gaEventFor) as real gtag events.
 * Callers have already checked consent. The consent default is ensured first,
 * and a broken gtag must never break the page's own tracking.
 */
function sendGaEvent(event: string, properties: Record<string, unknown>): void {
  const ga = gaEventFor(event, properties);
  if (!ga) return;
  try {
    ensureGaConsentDefault(window, ga4Id(), gaConsentLevelNow);
    reassertGaHitScrubber(window);
    window.gtag?.("event", ga.name, scrubProps(ga.params));
  } catch {
    // GA4 is best-effort here; PostHog and the dataLayer entry still record the event.
  }
}

/**
 * Fires an event to GA4 (dataLayer, plus a gtag event for conversions) and PostHog. Both are skipped unless
 * analytics consent is allowed at the moment of the event. PostHog loads
 * lazily, so allowed events fired before init are held (capped) and
 * delivered after it, and only where tracking is enabled.
 */
export function trackEvent(
  event: string,
  properties: Record<string, unknown> = {},
  options?: QueueCaptureOptions,
): void {
  if (typeof window === "undefined" || !analyticsAllowedNow()) {
    return;
  }
  pushDataLayer({ event, ...properties });
  sendGaEvent(event, properties);
  if (TRACKING_ENABLED) {
    enqueueOrCapture(event, properties, options);
  }
}
