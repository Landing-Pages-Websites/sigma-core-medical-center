import type { Metadata } from "next";
import { playfair, sourceSans } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sigma Core Medical Center",
  },
  description: SITE_DESCRIPTION,
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <script
          src="https://app.gomega.ai/review-bridge/v7/review-bridge.js"
          integrity="sha384-VTUzMpjogRuXFNsE1df8N2HoJyWhNcCkGaUa7aulmDjCmXVoQ4UpQB1xMTrOp3MJ"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
