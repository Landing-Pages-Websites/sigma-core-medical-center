import { BRAND } from "@/content/site";
import type { ConsentMode } from "@/lib/tracking/consent-gate";

/**
 * Site values the shared tracking module reads. Tracking ids (GA4, the MEGA
 * site id) are env vars, never here; see .env.example.
 */
export interface SiteConfig {
  /** Public-facing brand name, shown in the consent bar. */
  businessName: string;
  /**
   * "us-default": analytics run until the visitor declines (fleet policy).
   * "strict": nothing runs until the visitor accepts.
   */
  consentMode: ConsentMode;
}

export const siteConfig: SiteConfig = {
  businessName: BRAND.name,
  consentMode: "us-default",
};
