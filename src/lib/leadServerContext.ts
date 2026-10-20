import type { Attribution, LeadContext } from "./leadContext";

const ATTRIBUTION_KEYS: readonly (keyof Attribution)[] = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "fbclid", "fbp", "fbc",
];

function isWebUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    return ["https:", "http:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

/** Allowlist context so client routing/identity and arbitrary extras cannot leak. */
export function asLeadContext(value: unknown): LeadContext | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  if (!isWebUrl(record.url)) return null;
  if (typeof record.session_id !== "string" || !record.session_id.trim()) return null;
  if (typeof record.visitor_id !== "string" || !record.visitor_id.trim()) return null;
  const attribution = Object.fromEntries(ATTRIBUTION_KEYS.map((key) => [
    key, typeof record[key] === "string" ? record[key] : null,
  ])) as unknown as Attribution;
  return {
    ...attribution, url: record.url,
    session_id: record.session_id, visitor_id: record.visitor_id,
    referrer_url: isWebUrl(record.referrer_url) ? record.referrer_url : null,
  };
}
