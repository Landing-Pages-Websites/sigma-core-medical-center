# Book edge repair r1 — implementation worker

Baseline: `f43d1fe3ced543e1d942fe80dbab0f29709769c1`. Source repair complete; **painted closure remains unverified** because browser bootstrap failed. No push, PR, deployment, registry/contract change, or production approval.

## Changed files and rationale

- `src/components/batch-three/book/book.css`: eight added lines, one `min-width: 761px` media rule targeting only `.book-calendar::after`.
- `site_convergence/book-edge-fix-r1/worker-report.md`: this report.

Before: both mineral plateau vertices use `86.34%` of the calendar pseudo-element height. After: the desktop override uses the named `--book-calendar-plateau: calc(86.34% + 16px)`. Two 8px steps lower the painted plateau to restore the 64px desktop local reserve. The left diagonal endpoint, closed polygon, surface color and existing 1px overlap remain intact. Only the diagonal slope/plateau paint changes; no content or section moves and no padding is added. The original mobile polygon and all hero/privacy/content/chrome rules remain unchanged.

Recomputed from the original same-state ledgers, conservatively excluding the existing pseudo-element's extra 1px height:

| Viewport | Historical reserve | Projected reserve | Local unit |
| --- | ---: | ---: | ---: |
| 1440x900 | 48.339px | 64.339px | 64px |
| 1536x1024 | 49.258px | 65.258px | 64px |
| 390x844 | 40.948px | unchanged | 32px |
| 360x800 | 40.948px | unchanged | 32px |
| 320x800 | 40.948px | unchanged | 32px |

These are analytical projections, not fresh rendered measurements. The adjudication's approximately 48.42/49.21px values were rounded estimates. Desktop calculation: `calendarTop + calendarHeight * 0.8634 - lastContactRangeBottom + 16`. The actual pseudo-element's extra height would contribute another 0.8634px; the table does not rely on it.

## Sources and visual inspection

Read repository `AGENTS.md`, local Next.js 16.3.3 `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`, the `frontend-design` skill and production-review reference, both supplied reviews (JSON/Markdown), native Book notes/composition constraints, and all Book CSS/components. Git comparison confirms Book runtime source at baseline matches `75b2665c0370aaebd77944091e0ad17e694fe072`.

Historical evidence root: `/var/lib/megaclaw/workspace/website-lp-build-research-data/b380819e-88b6-48bd-8f1e-bfe6a580d72a/`.

Opened actual images directly: all three `design_refs/pages/book/refs/*.png`; `site_convergence/final-capture-75b/<viewport>/book/1-gohighlevel-calendar-bottom.png` at all five requested viewports; and `2-privacy-note-top.png` at both desktop sizes. Inspected the attached caveat, painted plateau, diagonal continuity, privacy entry and narrow Contact wrapping. Historical images were not relabeled as current evidence.

## Validation

- `npm run build`: PASS, exit 0; TypeScript and all 22 static-page generation entries complete. Existing dependencies were copied into this isolated worktree; no packages or browser/system dependencies installed.
- `npm run lint`: PASS, exit 0.
- `git diff --check`: PASS, exit 0.
- `npm run start -- --hostname 127.0.0.1 --port 3187`: local production server used for served-HTML checks.
- Python HTTP/HTML checks: `/book`, `/`, `/about`, `/contact`, `/services`, `/privacy` return 200. Both variants return their expected 404; unchanged baseline components explicitly call `notFound()`.
- Book HTML: one main/H1, unique IDs, valid section labels and order, exact pending/unavailable copy, `noindex, follow`, `/services` and `/contact` links, zero forms/iframes, image alt attributes. All 12 referenced CSS/font/image resources return 200. Resource availability is not a browser-loaded claim.
- Source review: only Book CSS changes at runtime; Home, shared header/footer, all other routes, metadata, links, copy and assets are untouched. Built CSS contains the desktop media rule. Manual simplify/code review found no extra abstraction or unrelated edit to remove.
- `simplify`: attempted, exit 127 (`command not found`). No corresponding installed skill was found; manual review does not claim the command passed.

Local, uncommitted logs are under `.next/book-edge-fix-r1/`: `build.log`, `lint.log`, `simplify.log`, `browser-bootstrap.json`, `geometry-projection.json`, `html-smoke.json`, `book.html`, `server.log`, and `scoped-change.diff`. These are disposable worker evidence, not research-contract updates.

## Remaining evidence limits

**browser screenshots unavailable — bootstrap gap**. One native Playwright launch was attempted with an 8000ms timeout and explicit executable `/var/lib/megaclaw/.cache/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-linux64/chrome-headless-shell`. It exited 127: `error while loading shared libraries: libnspr4.so: cannot open shared object file: No such file or directory`. No retry or dependency installation.

No new screenshots exist. Exact current dimensions, same-state paired geometry, loaded fonts/images, overflow, copy clipping and painted calendar/privacy closure at 1440x900, 1536x1024, 390x844, 360x800 and 320x800 remain for controller capture and independent edge review. No current immutable Git-linked preview URL was supplied or used. The existing edge FAIL is not promoted by this source repair. Controller owns delivery and review on the new immutable preview.
