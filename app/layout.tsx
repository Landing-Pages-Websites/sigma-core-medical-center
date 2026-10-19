import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MegaSnippet } from "@/components/analytics/MegaSnippet";
import { PostHogProvider } from "@/components/analytics/PostHogProvider";
import { playfair, sourceSans, sourceSansHeavy } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/content/site";
import { IS_PRODUCTION, ORGANIZATION_SCHEMA } from "@/lib/site-seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sigma Core Medical Center",
  },
  description: SITE_DESCRIPTION,
  robots: IS_PRODUCTION ? undefined : { index: false, follow: false },
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${sourceSansHeavy.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <MegaSnippet />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
        <script
          src="https://app.gomega.ai/review-bridge/v7/review-bridge.js"
          integrity="sha384-VTUzMpjogRuXFNsE1df8N2HoJyWhNcCkGaUa7aulmDjCmXVoQ4UpQB1xMTrOp3MJ"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
