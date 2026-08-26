import localFont from "next/font/local";

export const playfair = localFont({
  src: [
    { path: "../../app/fonts/PlayfairDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../../app/fonts/PlayfairDisplay-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const sourceSans = localFont({
  src: [
    { path: "../../app/fonts/SourceSans3-400.woff2", weight: "400", style: "normal" },
    { path: "../../app/fonts/SourceSans3-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});
