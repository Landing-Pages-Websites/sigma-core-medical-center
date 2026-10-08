# Sigma Core homepage image assets

Two approved directions, separately namespaced. Review sheets (with per-region
design-reference comparisons, crop contracts, and CODE recipes): `/design-review/`.
Approved design refs (desktop + mobile, per-section + full page): `/design/variant-a/`,
`/design/variant-b/`.

## `shared/` — exact client originals (never regenerate, recolor, or re-set)

| File | Source | Notes |
|---|---|---|
| `logo.png` | supplied `logo-3.png` | RGBA lockup; mount as-is. Metallic treatment is locked to this artwork. |
| `reception-1.png` | supplied | reception, lit wall sign. Authoritative facility imagery. |
| `reception-2.png` | supplied | reception, alternate exposure/angle. |
| `waiting-room.png` | supplied | seating row + wall sign. |

Facility may only ever be depicted by these photographs — crop with
`object-fit`/`object-position`, never extend, inpaint, or fabricate clinic spaces.

## `variant-a/` — Direction A "Life in Motion" (photovisual)

Seven 1536x1024 FULL-SCENE reconstructions of the approved frames' editorial
lifestyle scenes (gen_image edits with the frame crop as reference; baked website
masks/washes/text removed; scenes extended for free cropping). Anonymous adults —
never present them as patients, providers, staff, testimonials, or outcomes.

`lifestyle-walking-path.jpg` (01 hero) · `lifestyle-tying-shoes.jpg` (02) ·
`lifestyle-dog-walk.jpg` (03) · `lifestyle-phone-kitchen.jpg` (05) ·
`lifestyle-reading-guide.jpg` (06 education) · `lifestyle-phone-outdoors.jpg`
(06 booking) · `lifestyle-richmond-street.jpg` (07)

## `variant-b/` — Direction B (code-native)

| File | Provenance | Use |
|---|---|---|
| `logo-core.png` | exact-pixel window of the supplied lockup's core mark (alpha kept) | 04 framed emblem panel |
| `walnut-texture.jpg` | material plate generated from crops of the supplied clinic wood | 03 vertical sliver (rotate 90°), 08 rail |

Everything else in Direction B (ghost display words, stepped signal bars, brackets,
paper/plaster panels, diagonal fields) is code-native CSS/SVG — see the review sheet
recipes. Do not rasterize those motifs.

## `pages/` — generated editorial lifestyle support

Responsive, text-free editorial images generated for the approved interior-page
designs include `pain-low-back.png`, `pain-neck.png`, `pain-knee-walk-v2.png`,
`pain-low-back-v2.png`, `pain-neck-v2.png`, `pain-hero-walker-v3.png`,
`pain-knee-walk-v3.png`, `pain-low-back-v3.png`, `pain-neck-v3.png`,
`pain-nav-knee-v4.png`, `pain-nav-low-back-v4.png`, `pain-nav-neck-v4.png`,
`pain-route-panorama-v5.png`, `pain-decision-interior-v4.png`,
`pain-sources-reception-v4.png`, `pain-sources-lounge-v4.png`, `hormone-conversation.png`,
`pelvic-private.png`, `services-active-life.png`, `services-forward-path.png`,
`services-lobby-v2.png`, `services-forward-path-v2.png`, and
`services-runners-v2.png`, plus `neuropathy-woodland-walk-v2.png`.

The hormone-optimization redesign adds `hormone-hero-v2.png` (an adult preparing
questions at home) and `hormone-consultation-v2.png` (an adult reviewing notes in a
generic professional lounge). Neither image depicts the Sigma Core facility or an
actual patient.

The refined hormone page also uses five generated, text-free conceptual interiors:
`hormone-orientation-lobby-v3.png`, `hormone-decision-reception-v3.png`,
`hormone-faq-lobby-v3.png`, `hormone-booking-lobby-v3.png`, and
`hormone-sources-lobby-v3.png`. They were composed for their individual responsive
section crops and are not photographs of the Sigma Core facility.

The neuropathy redesign adds `neuropathy-orientation-lobby-v2.png`,
`neuropathy-faq-lobby-v2.png`, and `neuropathy-booking-lobby-v2.png`. These generic
editorial environments have blank feature walls; the website overlays the approved
Sigma Core logo, and none is a photograph of the actual clinic.

These anonymous adults provide editorial context only. Do not identify them as Sigma
Core patients, providers, staff, testimonials, or examples of treatment outcomes. Clinic
and facility imagery continues to use only the exact client originals in `shared/`.
The generated lobby is a generic editorial environment and must not be described as a
photograph of the actual Sigma Core facility.
`neuropathy-woodland-walk-v2.png` shows an anonymous older adult from behind on a
woodland path. It was generated specifically for the neuropathy hero and contains no
clinic branding or treatment-outcome implication.
