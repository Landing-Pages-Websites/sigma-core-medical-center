import type { Metadata, Viewport } from "next";
import { playfair, sourceSans, sourceSansHeavy } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/content/site";
import { GEO, SEO, siteJsonLd } from "@/content/seo";
import { JsonLd } from "@/components/shared/json-ld";
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
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061a33",
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
        <script
          src="https://app.gomega.ai/review-bridge/v7/review-bridge.js"
          integrity="sha384-VTUzMpjogRuXFNsE1df8N2HoJyWhNcCkGaUa7aulmDjCmXVoQ4UpQB1xMTrOp3MJ"
          crossOrigin="anonymous"
          defer
        />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
