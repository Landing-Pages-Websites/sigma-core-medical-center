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
