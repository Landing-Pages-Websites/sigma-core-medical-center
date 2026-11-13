import type { NextConfig } from "next";
import { megaArticleImageRemotePatterns } from "./src/lib/blog-images";
import { configuredVerificationRoute } from "./src/lib/captcha/provider";
import { previewClientEnv } from "./src/lib/previewClientEnv";
import { trackingBuildWarning, trackingClientEnv } from "./src/lib/tracking/client-env";
import { POSTHOG_ASSETS_HOST, POSTHOG_HOST } from "./src/lib/tracking/destination";
import { withMegaPreview } from "./src/mega-preview/preview_config.mjs";

// GA4 property 549743029 (web stream for https://sigmacoremedicalcenter.com),
// granted through Access. NEXT_PUBLIC_GA4_ID still overrides it when set.
const SITE_GA4_MEASUREMENT_ID = "G-8Z94ST45J6";

// Same-origin reverse proxy for PostHog (PostHog's documented Next.js
// pattern) so analytics requests are not blocked by ad blockers.
const POSTHOG_REWRITES = [
  { source: "/ingest/static/:path*", destination: `${POSTHOG_ASSETS_HOST}/static/:path*` },
  { source: "/ingest/:path*", destination: `${POSTHOG_HOST}/:path*` },
];

// Production 308s `/page/` to `/page`. skipTrailingSlashRedirect (needed by the
// /ingest proxy) turns that off, so the redirect is restated for every path but
// the proxy's.
const TRAILING_SLASH_REDIRECT = {
  source: "/:path((?!ingest/).+)/",
  destination: "/:path",
  permanent: true,
};

// Two posts shipped with a template placeholder city in their URLs. Their old
// addresses may already be indexed or shared, so they move permanently.
const RENAMED_POST_REDIRECTS = [
  ["hormone-optimization-anytown-guide", "hormone-optimization-richmond-va-guide"],
  ["longevity-care-anytown", "longevity-care-richmond-va"],
].map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }));

// Posts retired in the Nov 2026 content audit: topics the clinic does not
// offer or no longer offers (Class IV laser), or written for the wrong reader.
// Each old address goes to the closest live page, so links and rankings land
// somewhere useful instead of a 404.
const RETIRED_POST_REDIRECTS = [
  ["act-therapy-guide", "/blog"],
  ["somatic-therapy-guide", "/blog"],
  ["low-back-pain-icd-10", "/blog"],
  ["occupational-therapy-vs-physical-therapy", "/blog"],
  ["rehabilitation-balance-strength-stroke", "/blog"],
  ["hyperbaric-oxygen-therapy-benefits", "/blog"],
  ["infusion-therapy-explained", "/blog"],
  ["spinal-fusion-guide", "/services/pain-relief/spinal-decompression"],
  ["shock-wave-treatment-benefits", "/services/pain-relief"],
  ["red-light-therapy-benefits", "/services/pain-relief"],
  ["cost-laser-therapy-pain", "/services/pain-relief"],
  ["laser-therapy-vs-physical-therapy-joint-pain", "/services/pain-relief"],
  ["recovery-rehabilitation-richmond-va", "/services/pain-relief"],
  ["stem-cell-therapy-shoulder-cost", "/services/regenerative-medicine"],
  ["cost-pelvic-floor-therapy", "/services/pelvic-floor-incontinence"],
].map(([from, to]) => ({ source: `/blog/${from}`, destination: to, permanent: true }));

// Duplicate posts folded into the strongest post on the same topic, so they
// stop competing with each other in search.
const MERGED_POST_REDIRECTS = [
  ["treating-sciatica-with-physical-therapy", "physical-therapy-sciatica-pain"],
  ["sciatica-treatments-physical-therapy", "physical-therapy-sciatica-pain"],
  ["spinal-disc-herniation-physical-therapy", "physical-therapy-herniated-lumbar-disk"],
  ["hip-joint-health", "treatment-hip-joint-pain"],
  ["medical-treatment-slow-recovery", "rehabilitation-slow-recovery-injury"],
  ["human-performance-medicine-older-adults", "longevity-medicine-healthy-aging"],
].map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }));

// A build that ships with tracking off says so instead of silently sending nothing.
const trackingWarning = trackingBuildWarning();
if (trackingWarning) console.warn(trackingWarning);

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_CAPTCHA_ROUTE: configuredVerificationRoute().kind,
    NEXT_PUBLIC_GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || SITE_GA4_MEASUREMENT_ID,
    // Derived from MEGA_PREVIEW_MODE so a stray NEXT_PUBLIC value can never
    // hide the consent bar on a live build.
    ...previewClientEnv(),
    // The tracking gate's deployment values, derived from the VERCEL_* names
    // Vercel always sets at build (src/lib/tracking/client-env.ts).
    ...trackingClientEnv(),
  },
  images: { qualities: [75, 95], remotePatterns: megaArticleImageRemotePatterns },
  async redirects() {
    return [
      TRAILING_SLASH_REDIRECT,
      ...RENAMED_POST_REDIRECTS,
      ...RETIRED_POST_REDIRECTS,
      ...MERGED_POST_REDIRECTS,
    ];
  },
  async rewrites() {
    return POSTHOG_REWRITES;
  },
  // Required for the PostHog proxy: its API calls can use trailing slashes,
  // which Next would otherwise redirect (dropping the POST body).
  skipTrailingSlashRedirect: true,
};

export default withMegaPreview(nextConfig);
