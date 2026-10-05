# PR #40 round 2: interior photo roles

This is a local candidate record for the controller. It is not an Art Director approval, section-edge clearance audit, registry update, or Site Review publication.

## Frame deviations and implementation

| Route / section | Deliberate change from native frame | Live content retained |
| --- | --- | --- |
| Neuropathy / `04-what-to-expect` | Retire the waiting-wall photograph; use a stepped, diagonal scheduling-status panel. | Booking statement, publication limit, `/book` action. |
| Pelvic / `04-what-to-expect` | Retire the same waiting-wall photograph; use a separate privacy-led panel. | Privacy copy, pending booking control, service link. |
| About / `01-hero`, `02-clinic-purpose` | Retire repeated desk and waiting-wall photographs; use angular/bracket/step geometry. | Identity, purpose, mission, principles, actions, caveats. |
| About / `03-facility-gallery` | Keep the approved `reception-2.png`; replace the unsupplied broad lower panorama with a right-hand panel showing only the approved five-chair `waiting-room.png`. | Gallery heading, location-status action, two distinct authentic source views. |
| Contact / `01-contact-hero`, `02-verified-location-details` | Retire repeated desk and unsupplied lounge slots; use a live verification card crossing the code-native diagonal/bracket field. | Visit, booking and confirmation-status information, links. |
| Contact / `03-facility-image` | Keep the approved waiting room, rail/bracket and 96px desktop bottom gap. Add code-native top steps and reduce top stage spacing. | Facility caveat, location-status strip, About link. |

The approved frame remains the visual intent. The photo removals and About gallery's narrower real-room view are intentional photo-role revisions. No broader room, examination, provider, address, or availability is implied.

## Exact research-root edits (outside git)

Root: `/var/lib/megaclaw/workspace/website-lp-build-research-data/b380819e-88b6-48bd-8f1e-bfe6a580d72a/design_assets/pages/`.

| `extraction_plan.json` | Frame / region | Plan change |
| --- | --- | --- |
| `neuropathy` | `04-what-to-expect.png` / r9 | `expected_asset_count` 1→0; `extract`→`code`; remove raster ownership/presentation fields; add explicit booking-panel deviation. |
| `pelvic-floor-incontinence` | `04-what-to-expect.png` / r13 | 1→0; `extract`→`code`; remove raster fields; add privacy-panel deviation. |
| `about` | `01-hero.png` / r8 | 1→0; `extract`→`code`; remove raster fields; add angular-field deviation. |
| `about` | `02-clinic-purpose.png` / r7 | 1→0; `extract`→`code`; remove raster fields; add purpose/mission deviation. |
| `about` | `03-facility-gallery.png` / r6 | Asset count remains 2. Map to `03-facility-gallery-02-client-waiting-room.png`, `source: client-copy`, provenance `sources/drive/waiting-room.png`; describe right-hand panel and unsupplied-panorama deviation. r5 remains the approved `reception-2.png`. |
| `contact` | `01-contact-hero.png` / r9 | 1→0; `extract`→`code`; remove raster fields; add visit-panel deviation. |
| `contact` | `02-verified-location-details.png` / r7 and r8 | 2→0; both `extract`→`code`; remove raster fields; add live card/diagonal and unsupplied-lounge deviation. |
| `contact` | `03-facility-image.png` / r4 | Asset count remains 1. Keep client waiting-room mapping; add top-steps/rail/bracket/96px-gap deviation note. |

The same four page directories' `NOTES.md` files now describe these code treatments and the retained Contact facility source. `public/design-review/{about,contact,neuropathy,pelvic-floor-incontinence}/index.html` cards and counts describe the same implementation. Eight retired originals are preserved under `assets/retired-photo-roles/`; they are no longer shipped under `public/images/design` or mapped as implementation assets.

## Checks and open gates

- Final `npm run build` and `npm run lint` pass after the gallery-layout refinement; `git diff --check` is clean.
- Rendered HTML on the final build returns HTTP 200 for all four changed routes. Each has one H1; changed sections retain actions, contain no retired image references, and have no missing image alt text. About gallery's two images and Contact facility's image each return HTTP 200 as PNG. Pelvic remains `noindex, follow`. Browser screenshots are unavailable — bootstrap gap: `mega browser open_tab` failed because `MEGACLAW_PAT` is unset. Painted bounds, horizontal overflow, image crops, and section seams therefore need browser review at 1440×900 and 390×844.
- The unbypassed source audit across all ten designed routes has four structural checks PASS and `duplicate_visual_content` FAIL on four pairs. One pair is About gallery reception-2 versus shared reception-2, and three pairs connect About gallery waiting-room, Contact facility waiting-room and shared waiting-room. The shared path has homepage placements. No scanner allowlist was used.
- Homepage Variant A, Variant B, shared footer and shared homepage images were not edited. Cross-route photo recurrence and provenance of other implementation-referenced clinic rasters need full site-wide Art Director inspection. No registry or `section_edge_clearance_audited` flag was changed.
