import type { NextConfig } from "next";
import { megaArticleImageRemotePatterns } from "./src/lib/blog-images";
import { configuredVerificationRoute } from "./src/lib/captcha/provider";
import { withMegaPreview } from "./src/mega-preview/preview_config.mjs";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_CAPTCHA_ROUTE: configuredVerificationRoute().kind },
  images: { qualities: [75, 95], remotePatterns: megaArticleImageRemotePatterns },
};

export default withMegaPreview(nextConfig);
