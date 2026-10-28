import type { Metadata, Viewport } from "next";
import { playfair, sourceSans, sourceSansHeavy } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/content/site";
import { GEO, SEO, siteJsonLd } from "@/content/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { MegaSnippet } from "@/components/analytics/MegaSnippet";
import { PostHogProvider } from "@/components/analytics/PostHogProvider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sigma Core Medical Center",
  },
  description: SITE_DESCRIPTION,
  applicationName: SEO.siteName,
  keywords: [...SEO.keywords],
  category: "health",
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SEO.siteName,
    locale: SEO.locale,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "./",
    images: [{ url: SEO.socialImage, width: 1200, height: 630, alt: SEO.socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SEO.socialImage],
  },
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    "geo.region": GEO.region,
    "geo.placename": GEO.placename,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061a33",
};

// GA4 property 549743029 (web stream for https://sigmacoremedicalcenter.com),
// granted through Access. NEXT_PUBLIC_GA4_ID still overrides it when set.
const SITE_GA4_MEASUREMENT_ID = "G-8Z94ST45J6";

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
        <script
          src="https://app.gomega.ai/review-bridge/latest/review-bridge.js"
          crossOrigin="anonymous"
          defer
        />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        <GoogleAnalytics measurementId={SITE_GA4_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
