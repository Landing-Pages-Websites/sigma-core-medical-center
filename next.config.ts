import type { NextConfig } from "next";
import { megaArticleImageRemotePatterns } from "./src/lib/blog-images";

const nextConfig: NextConfig = {
  images: { qualities: [75, 95], remotePatterns: megaArticleImageRemotePatterns },
};

export default nextConfig;
