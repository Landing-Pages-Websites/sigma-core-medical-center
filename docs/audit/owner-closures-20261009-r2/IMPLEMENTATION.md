# SIG-T02–SIG-T07 finite technical implementation

Implemented on entry SHA `25b6cc8016617d773416a1b6e6cc95da40dd27c6`, the committed successor of the first closure and original QA source `d3c513b123b047b53a11d34c70a99690de360b4b`. Owner authority remains Shamita's `315991ef-a25c-4710-b4b4-bec4b4a5dd76`; PR52 Home remains frozen at `4d9e2370ed0f23849f8a3c6e143caa5c577865c3`.

This is a local source implementation and build handoff. It is not measured AFTER geometry, paint acceptance, runtime Review Bridge success, an Art Director/QA verdict, human approval, or publication authorization. No browser, image call, external access, remote mutation, or shipment was performed.

## Inputs and plan

Read the technical amendment and original `technical-qa-r1/qa.json` and `qa.md` under `/var/lib/megaclaw/workspace/.awb-scratch/sigma-owner-final-20261009-r1` before changes. [PLAN.md](PLAN.md) is the byte-exact prospective amendment, copied before application edits. Read all eight current application sources, the frontend-design and web-coding-os skills, their typography/layout and design-quality references, and the installed Next metadata guide at `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md` (static metadata and robots).

The repair preserves the navy/royal/chalk palette, existing typography families, desktop heading scale, square icon/bracket structure, angled chapters, imagery, and status wording. The chosen implementation constrains intrinsic widths and permits wrapping in the existing components. It adds no shared abstraction, global style, content revision, or new design direction. Native PNG inspection was not needed for these source-directed changes; no mosaic or screenshot was used to claim rendered acceptance.

## Technical changes and original finding map

All original finding objects, IDs, evidence references and numbers are retained in [original-findings.json](original-findings.json), with original report hashes and the original SHA/tree. These are BEFORE findings, not measurements of this implementation.

| Finding | Retained original evidence | Scoped source implementation |
| --- | --- | --- |
| SIG-T02, Services 320 | Heading right 356px; panel/card paragraphs right 332/336px; OtherPaths links right 328.77px, viewport 320px. | `service-navigation.tsx`: bounded grid/flex children; smaller base-phone heading with original `sm`/desktop scale; reduced base padding/gaps and pain icon size; nonshrinking icons; wrapping title children. Route pills use `max-w-full`, `min-h` and `overflow-wrap:anywhere` on full URL text, with explicit flexible text spans. `choose-next-step.tsx`: bounded OtherPaths list items/links/text, smaller base icons/gaps/padding, nonshrinking divider and chevron, and complete naturally wrapping Contact & location status label. Wider spacing is restored at `sm`. |
| SIG-T03, Pain 320 | `/book` x196.02, width151.69, right347.71px, document top8048.55. | `pain-decision-factors.tsx`: phone links stack at bounded full width; wider flex arrangement and 16rem widths return at `sm`. Explicit wrapping text spans, nonshrinking chevrons, vertical padding and minimum height allow full status labels. The committed first closure already changed the older `/services` destination to `/about`; this repair preserves that current `/about`/`/book` pair and its wording. |
| SIG-T04, Pelvic 320 | Heading x24, width318.13, right342.13px, document top6980.88. This was an allocated-box finding, not a certified painted-text clipping failure. | `pelvic-booking.tsx`: `min-w-0` on the booking grid child, bounded normally wrapping heading, and an explicit flexible text span plus vertical padding on the existing booking-status link. Heading scale, copy and desktop composition remain. |
| SIG-T05, Services desktop | Feature control scrollWidth341/clientWidth329 at 1440/1536/1728. | `neuropathy-feature.tsx`: inset the control's bracket from `-right-3` to `right-0`; reserve `lg:pr-8` clearance; bound the control/text and permit route text to wrap. Shared TallBracket is untouched. Actual control scrollWidth/clientWidth and painted clearance require controller measurements. |
| SIG-T06, Pain desktop | Final semantic li extends16px; right edges1456/1552/1744px at1440/1536/1728. | `pain-decision-factors.tsx`: `lg:last:mr-0` cancels only the final item's negative right margin. Intermediate overlap, angled clip-path, chapter rhythm and text remain. No page overflow rule was added or changed. |
| SIG-T07, three withheld services | Original ten sitemap exclusions but only seven document noindex gates; robots=null at all six recorded widths on each of the three routes. | Added `robots: { index: false, follow: true }` to exactly the hormone-optimization, pelvic-floor-incontinence and regenerative-medicine page metadata. Local generated HTML now contains `noindex, follow` for each. Root metadata, sitemap and every other gate remain unchanged. |

The exact eight application paths and their post-edit byte sizes, SHA-256 hashes and Git blobs are in [source-binding.json](source-binding.json). The complete commit path inventory is [changed-paths.txt](changed-paths.txt).

## Tests, protection and self-review

The required commands ran sequentially: lint, then TypeScript, then production build. Environment: `TMPDIR=/var/lib/megaclaw/workspace/.awb-scratch/tmp`, `NEXT_TELEMETRY_DISABLED=1`, `npm_config_cache=/var/lib/megaclaw/workspace/.npm-cache`, with npm offline mode enabled. Existing dependencies were used; no install occurred. The task-created untracked TypeScript incremental cache was removed after testing.

| Check | Actual exit | Evidence |
| --- | --- | --- |
| `npm run lint` | 0 | [lint.log](lint.log) |
| `npx tsc --noEmit` | 0 | [tsc.log](tsc.log), genuinely empty successful output |
| `npm run build` | 0 | [build.log](build.log), 22 static pages generated |
| Parse the three generated HTML robots tags | 0 | [html-robots-proof.json](html-robots-proof.json), exact tag values and generated-file hashes |
| Protected byte-size/SHA-256 verification | 0 | [protected-check.json](protected-check.json), 724/724 match |
| Scope, exact-plan and source binding checks | 0 | [scope-check.json](scope-check.json) |

[test-exits.json](test-exits.json) retains genuine command exits and start/end times. Raw logs are not cleaned: npm blank lines and build carriage returns/trailing whitespace remain. The scope receipt records separate whitespace-check results for source/docs and for raw logs. The previous closure's concurrent TypeScript exit2 and all its logs remain intact; these sequential successes do not erase it.

Protection uses the original broad freeze inventory and original source-before-capture list, excluding only the eight nonancestor false positives. Every variant-b file is retained, including site-header despite its presence in the old exclusion list. All **724 corrected protected files**, **28 actual Home files**, and **11 variant-b files** match their approved byte sizes and SHA-256 hashes. The original broad **731/732** receipt is unchanged and is not recast as 732/732. First-closure documentation remains byte-identical to entry HEAD. Only the eight authorized application files and this new audit directory change.

Manual simplify and code self-review completed before commit. No standalone simplify command/skill was available in the local search. The diff reuses current components and constants, confines phone adjustments to their existing surfaces, retains hover/focus-visible classes, and adds no imports, dead code, `any`, debugging, or asynchronous operations. Exported return types remain explicit. Existing larger JSX functions and multiple local renderers are preserved; this finite repair does not expand into a function-length or component-file refactor. No new truncation, ellipsis or overflow-hiding rule masks controls. The inherited decorative clip paths remain and need controller paint verification.

## Controller handoff and retained residuals

The final handoff reports the resulting full source SHA and tree. The committed source-binding hashes identify the tested application bytes; future controller browser, preview and route evidence must name that new commit/tree (or explicitly identify any later controller merge successor), not the entry SHA or original QA source. No runtime/geometry certification is derived from successful compilation or HTML parsing.

Controller owns the new local pre-push browser measurements and paint inspection, exact Git preview, route evidence, any concurrent-main documentation reconciliation, and shipment. Check 320px wrapping and full label/chevron visibility, desktop heading preservation, inset bracket clearance and actual control scrollWidth<=clientWidth, and final semantic-li bounds. This worker stops after the finite local commit.

- SIG-T01 remains: 90 original Review Bridge `net::ERR_FAILED` records. Shared script/SRI/layout bytes are untouched; no external runtime claim is made.
- SIG-T08 remains: frozen Home quotations and availability residuals stay for human review; no shared/Home wording was repaired.
- SIG-T09 remains: shared menu closed-state references and unexercised expanded/keyboard behavior stay disclosed; every variant-b component remains protected.
- Missing provider, clinical, scheduling, resource, legal and publication approvals are not supplied by this implementation. No gate is lifted and no new review round is issued.
