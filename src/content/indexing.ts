/** Design alternatives are never public search destinations. */
export const VARIANT_PATHS = ["/variant-a", "/variant-b"] as const;

/** Existing page-level publication holds; this list does not grant clearance. */
export const NOINDEX_PATHS = new Set<string>([
  ...VARIANT_PATHS,
  "/services/hormone-optimization",
  "/services/pelvic-floor-incontinence",
  "/services/regenerative-medicine",
  "/educational-guide",
  "/book",
  "/contact",
  "/privacy",
  "/notice-of-privacy-practices",
  "/accessibility",
  "/terms",
]);
