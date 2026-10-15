import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sigma Core Medical Center",
    short_name: "Sigma Core",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#061a33",
    theme_color: "#061a33",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
