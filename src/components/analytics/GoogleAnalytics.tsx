import Script from "next/script";

export function GoogleAnalytics(): React.ReactElement | null {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!ga4Id) return null;
  const measurementId = JSON.stringify(ga4Id).replace(/</g, "\\u003c");

  return (
    <>
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config',${measurementId});`}
      </Script>
    </>
  );
}
