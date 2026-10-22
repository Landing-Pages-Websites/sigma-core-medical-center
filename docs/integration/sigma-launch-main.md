# Sigma launch integration into current main

Base: `c5e830ecd5aa2993a3dd08a79b4ea60a4fc1ecbe` (production-linked main).
Approved donor: `2d01ee52766519e26e64979140fc6c0e83ee0345`, tree
`e9b2a9d492b13e5f34546ae4a1ca01406e4debac`.
Task: `f076e83d-d427-4884-8542-7544612a09c8`.

This is a selective port onto main, not a merge or reset to staging. The donor is
not an ancestor of main. The production log for `dpl_HzmV3GotpaGmQqGdTsTaYqTyEhgi`
reports ten unresolved-module errors: two Book font files, three shared UI/JSON-LD
modules (some imported twice), and the indexing/SEO modules.

## Source reconciliation

| Class | Source and integration |
| --- | --- |
| Lead UI and security | Reviewed donor `app/api/lead`, `src/components/lead`, hooks, `lead*`, `forwardLead*`, `captcha/*`, `turnstile.ts`; verification/proof protocol and owning tests retained verbatim. API adds only an Origin-header check backed by canonical identity. |
| Contact and Services | Exact donor contact booking component/CSS, hero inquiry link, shared form mount appended to main Services composition, pending dialog inquiry link. Retain main Contact metadata and wrapper classes; restore required Contact CSS and `.b3` scope. Services loads the same approved contact/booking CSS. |
| Book | Keep main metadata and component composition; restore existing Book stylesheet/font binding, retain its wrapper classes, and link the pending-calendar contact action directly to `/contact#contact-form` with honest inquiry wording. |
| Blog | Reviewed donor public index/article routes, renderer, Markdown/HTML parsers, image helpers and SEO helpers. No article copied from donor. Inventory regenerated from all 46 actual main records. Legacy discovery remains `discovery_failed`, not a claim of legacy migration/parity. |
| Analytics | Exact donor MEGA, optional GA4, PostHog and scheduler implementations. Mount each once in main root; keep its pinned review bridge and single site JSON-LD mount. No GA4 ID supplied. |
| Canonical/discovery | Change existing `src/content/site.ts` seam to fixed www production identity. Keep main robots caller and sitemap priorities; add blog routes/dates and existing publication exclusions. Omit fabricated build-time article dates. |
| Dependencies/config | Donor adds only `posthog-js` and test runner `tsx`; all existing package versions remain identical. Two existing lock entries change only `dev` to `devOptional`. Restore donor CAPTCHA build-route selection and article-image allowlist in next config. |

### Missing source reconstructed

No implementations for `src/content/seo.ts`, `src/content/indexing.ts`, or
`src/components/shared/{json-ld,scroll-progress,back-to-top}.tsx` were found in the
available path history. These modules are minimal implementations matching main's
existing imports. They were not replaced by the older donor layout.

- SEO uses existing brand, description, Richmond-area copy and the existing
  1200×630 `public/social-card.png`. Organization schema makes no new clinical,
  address, phone, hours or provider claims. Main's metadata title/template,
  description, application name, keyword/category fields, canonical, robots,
  Open Graph, Twitter, format detection and viewport remain.
- `geo.region` and `geo.placename` remain. The absent module supplied no verifiable
  latitude/longitude; omit the two coordinate tags (`geo.position`, `ICBM`)
  rather than invent a clinic location. This is the sole metadata-field omission.
- Indexing mirrors the ten existing page-level noindex holds and excludes the
  two redirecting design variants. No hold was lifted. Robots still allows
  public crawling and uses the canonical sitemap/host.
- JSON-LD escapes `<`. Scroll progress is decorative; Back to top is labeled,
  keyboard accessible, restores heading focus, and follows the site's existing
  reduced-motion behavior. No existing Home section or global style was edited.
- Missing Book font bytes/license come directly from the reviewed donor. Existing
  fonts, images, Home sections, variants, and all article Markdown remain intact.

### Origin and CAPTCHA boundaries

The only new origin list derives its production entry from `SITE_URL`. Preview
adds only configured `VERCEL_URL` / `VERCEL_BRANCH_URL` Vercel hosts. Localhost
entries exist only outside Vercel and production. Foreign/null browser origins
are refused before verification/forwarding. An absent Origin header does not
bypass any existing validation, CAPTCHA, Preview classification or proof check.

The approved reCAPTCHA hostname allowlist remains required and environment-backed;
it is verifier configuration, not another canonical URL seam. No provider secret,
claim credential, environment target, recipient or customer integration was read
or changed. Preview's sanctioned test-contact/sentinel behavior, production
sentinel denial, strict assessment checks, durable receiver proof claim, stable
retry identity and fallback label are unchanged. Tests deny network by default.

## Preservation and checks

- 46/46 main article byte buffers equal base. IDs, slugs, dates, editorial values
  and content unchanged; inventory records their SHA-256 hashes. All 46 appear in
  static article output and the 52-entry public sitemap.
- `tests/launch-integration.test.ts` pins main Home composition, global CSS, font
  source and batch layout, and checks metadata fields, bridge and single mounts.
- The complete 256-test donor lead/security suite is retained, unweakened.
- 20 integration/blog/analytics tests cover preservation, identity uniqueness,
  dates, unsafe publisher HTML, canonical/holds, script ordering, configured
  PostHog, unset GA4, JSON-LD escaping and origin restrictions.
- `scripts/verify-built-site.py` checks generated HTML, collecting-control labels,
  duplicate IDs/names, canonical URLs, holds, sitemap, actual MEGA script order,
  real public reCAPTCHA key and PoW markers, plus client/server credential boundary.
- `npm ci`, lint, TypeScript and production-shaped `next build` pass. GET of the
  locally served production build returns JSON, `Cache-Control: no-store` and a
  current 13-digit `issuedAt`. No POST was made outside offline mocks.

Simplify-style/code self-review retained the reviewed protocol/renderer instead
of refactoring it, removed redundant sitemap lookups, verified bounded existing
file diffs, duplicate analytics, token boundaries and article hashes. Some
unchanged donor parser functions/files exceed the local preferred size limits;
restructuring that reviewed parser was deliberately not part of this port.

## Controller follow-up and limitations

Browser screenshots/responsive interaction checks, exact-head review by
`website-pr-review-mega`, remote Git actions, PR/merge and deployment belong to the
controller. Generated HTML checks are not a browser or production QA verdict.
No production lead was submitted and real Google/receiver credentials were not
exercised. The local build does not certify served production configuration.

Main already references absent PNG/JPG images, including
`/images/shared/logo.png` and `/images/variant-b/walnut-texture.jpg`, while their
WebP assets exist. These unchanged, unrelated main components need controller
attention; this port does not silently replace their source or redesign them.

`npm ci` reports 10 dependency audit findings (9 high, 1 critical). No blanket
upgrade/audit fix was attempted. No browser/system dependency was installed.
A broad Git object-history lookup encountered partial-clone lazy reads and was
stopped; subsequent Git inspections disabled lazy fetch. No remote write, push,
merge, PR or deployment was performed.
