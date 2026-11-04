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
    return [TRAILING_SLASH_REDIRECT];
  },
  async rewrites() {
    return POSTHOG_REWRITES;
  },
  // Required for the PostHog proxy: its API calls can use trailing slashes,
  // which Next would otherwise redirect (dropping the POST body).
  skipTrailingSlashRedirect: true,
};

export default withMegaPreview(nextConfig);
