import localFont from "next/font/local";

export const playfair = localFont({
  src: [
    { path: "../../app/fonts/PlayfairDisplay-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../app/fonts/PlayfairDisplay-600-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-playfair",
  // Full originals precede the metric-matched system fallback for other Unicode.
  adjustFontFallback: false,
  fallback: ["Sigma Playfair Full", "Sigma Playfair Fallback"],
  // Secondary display text must not compete with the hero image and body fonts.
  preload: false,
  display: "swap",
  declarations: [
    { prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-036F,U+2000-206F,U+20AC,U+2122,U+2191-2193,U+2197,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

export const sourceSans = localFont({
  src: [
    { path: "../../app/fonts/SourceSans3-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../app/fonts/SourceSans3-600-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source-sans",
  // Full originals precede the metric-matched system fallback for other Unicode.
  adjustFontFallback: false,
  fallback: ["Sigma Source Sans Full", "Sigma Source Sans Fallback"],
  display: "swap",
  declarations: [
    { prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-036F,U+2000-206F,U+20AC,U+2122,U+2191-2193,U+2197,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

/** Heavy heading cut used by the interior page designs. Separate instance so existing weights are unaffected. */
export const sourceSansHeavy = localFont({
  src: [{ path: "../../app/fonts/SourceSans3-700.woff2", weight: "700", style: "normal" }],
  variable: "--font-source-sans-heavy",
  display: "swap",
});
