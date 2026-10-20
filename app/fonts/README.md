# Sigma Core font delivery

The `*-latin.woff2` files are lossless delivery subsets of the exact bundled
Source Sans 3 400/600 and Playfair Display 500/600 originals. They are not font
substitutions. The original files, embedded copyright/license records and the
existing compact Source Sans 3 700 cut remain unchanged. Despite their `.woff2`
filenames, the four full originals contain uncompressed TrueType data; the new
subsets contain actual Brotli-compressed WOFF2 data.

`subset_latin.py` retains all layout features, glyph names, hinting and name
records. With fontTools 4.63 and Brotli installed, reproduce and verify with:

```sh
python3 app/fonts/subset_latin.py
PYTHONDONTWRITEBYTECODE=1 python3 -m unittest discover -s app/fonts -p 'test_*.py'
node --test app/fonts/font-shaping.test.mjs
```

The tests pin the full originals by SHA-256 and compare every retained glyph's
decomposed outline, advance/sidebearing and hint program, global font metrics,
character maps, license records, and representative shaped runs (kerning,
ligatures and combining marks). Arial fallback overrides match Next's original
font-metric calculation exactly.

## Character coverage and fallback

`src/lib/fonts.ts` applies the compact Unicode ranges through Next 16 local
font `declarations`. `app/globals.css` declares the original files at their
original weights in separate `Sigma Source Sans Full` and `Sigma Playfair Full`
fallback families. Their faces have no `unicode-range` restriction, so each
exposes its complete original character map, including combining marks needed
to shape full graphemes such as `ą́` (U+0105 U+0301) and `И́` (U+0418 U+0301).
The compact primary families come first; the full families follow them and
precede the metric-matched Arial fallback. Automatic Next fallback is disabled
so Arial cannot intercept characters that the full original supports. Tests
verify complete fallback eligibility and original grapheme substitution/mark
positioning, in addition to compact Latin shaping. Characters unsupported by
the originals still use system fallback, as before. Do not remove the full
originals or their CSS faces when publishing content with additional characters.

Source Sans 400/600 compact faces remain preloaded; Playfair remains demand
loaded. Content covered by the compact faces does not request the separate
full families. Source Sans 700 and route-specific fonts are unchanged.

## Asset byte reduction

These are exact file payload sizes, not measured HTTP transfer or LCP results.

| Face | Original bytes | Compact bytes |
| --- | ---: | ---: |
| Source Sans 3 400 | 234,708 | 21,392 |
| Source Sans 3 600 | 234,680 | 21,524 |
| Playfair Display 500 | 123,608 | 24,080 |
| Playfair Display 600 | 123,672 | 24,152 |

The two body-font preloads shrink from 469,388 to 42,916 bytes: 426,472 bytes
saved (90.9%). Including unchanged Source Sans 700 (15,596 bytes) and the
observed Playfair 500 demand load, that font set shrinks from 608,592 to 82,592
bytes: 526,000 bytes saved (86.4%). Non-Latin content can still request the full
originals on demand.

## Verification and scope

Against starting commit `39430c77a2c24c9e961818fd25ac339c86fb40f8`, all 63
generated HTML documents retain the same DOM, text, links, image attributes,
metadata, canonicals, JSON-LD and external scripts after excluding generated
asset/font references. All currently rendered characters supported by these
originals are covered by the subsets, including the 43 published posts.

Chromium comparison of `/`, `/services/neuropathy`, `/educational-guide` and
`/blog/act-therapy-guide` at 360px and 1440px found identical text-element
geometry after replacing the compact fonts with the originals, no horizontal
overflow, and no full-font requests for current content. The Home 360px
screenshots were byte-identical. Evidence scripts and results are retained in
the task's external `critical-path-evidence` scratch directory.

After removing the full fallback range restrictions, those four routes still
request no full originals at either width. Chromium's platform-font inspection
confirms that both graphemes above render entirely in the original font at all
four weights, matching full-only reference spans in font identity, glyph count
and geometry. All 63 HTML payloads, including RSC, remain identical to the
pre-correction build except for the CSS asset reference and build ID. This
evidence is in `critical-path-evidence/grapheme-fix`.

The associated analytics helper yields two animation frames after window load
before scheduling SDK initialization at idle (with the existing 1,500ms idle
timeout). This provides a paint opportunity before SDK work, without adding a
fixed waiting period or claiming to wait for final LCP. PostHog's import,
host/key configuration, native pageview/pageleave capture, identified-only
profiles and disabled recording remain unchanged.

The prior final Preview's valid failures remain evidence. This change requires
controller-run Lighthouse on the deployed final exact commit; local font and
browser checks do not establish the 6.0-second mobile LCP acceptance target.
