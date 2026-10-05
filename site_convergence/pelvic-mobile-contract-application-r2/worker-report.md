# Controller handoff: Pelvic mobile contract application r2

Local bounded worker on baseline `4ffef33069d7e84919b1cc6f401899d6ede19c9d`. One commit for controller review; **no push, task/PR changes, merge or external deployment**. PR40 remains outside this worker's write scope. Canonical ROOT was read-only to this worker.

## Current layer application

| Route slug | PASS | FAIL | PENDING |
| --- | ---: | ---: | ---: |
| services | 25 | 0 | 0 |
| about | 27 | 3 | 0 |
| educational-guide | 20 | 0 | 0 |
| book | 12 | 0 | 3 |
| contact | 12 | 8 | 0 |
| pelvic-floor-incontinence | 32 | 1 | 2 |
| regenerative-medicine | 35 | 0 | 0 |
| neuropathy | 35 | 0 | 0 |

- **Services:** original20 PASS plus independent64ee209e typography5 PASS =25. Builder reconciled only Services Direction B h1/h2/h3 to Source Sans3 600 with optional named Playfair counterpoint in its manifest/composition contract. No global/Home font or Services runtime change. Original overall FAIL and historical blocks preserved.
- **About:** all30 original judgments applied, mapping each reviewer ID uniquely through the manifest anchor to its frame. Three responsive FAILs remain at clinic-purpose, facility-gallery and booking-cta. Raw numeric warnings alone do not certify a painted failure; focused adjudication remains required.
- **Guide:**20 original75b layers applied; gated/noindex source unchanged; original edge NEEDS_VISUAL_REVIEW remains unresolved here.
- **Book:** original15 PASS preserved as historical75b. Current calendar composition/visual_treatment/responsive are PENDING because d03cc78 changed the desktop pseudo plateau. Invariant content/imagery and unaffected sections retain12 PASS. Independent603883dc confirms historical48.42/49.21px below64px; fresh d03 repair review remains separate. Book runtime is untouched.
- **Contact:**12 PASS/8 FAIL applied exactly; every frame composition/responsive FAIL stays unresolved. Raw reviewer SHA `75b2665c0370aaebd77944091e0ad17e694fe072e` is preserved. Controller verified `75b2665c0370aaebd77944091e0ad17e694fe072` via Git and complete source/component/font/image hash bindings, separately from that malformed claim.
- **Pelvic:**9880200f at exactcd26b81 resolved hero composition/visual treatment and FAQ content/responsive; the four adjudications and their exact widths/PNGs are recorded. FAQ's two current PASS rationales replace old failure text. Original30 PASS records remain byte-equivalent as JSON values. After this new mobile repair, hero composition/visual treatment are overall PENDING with desktop1440/1536 PASS applicability retained and mobile PENDING; hero responsive remains unresolved FAIL pending new review. Old PASS_TARGETED edge is historical only; full-route edge stays false.
- **Regenerative:**33 original PASS retained unchanged plus independent two PASS_REPAIRED applications, with current rationale replacing old failures. a3c5b15 native PNGs are explicitly inherited throughcd26b81 by route equality, never relabeled as newly capturedcd26. Full import/asset closure remains unchanged through349/4ff and this worker. Controller log separately binds follow-up session9436f7b8; original report omits that identifier. Edge remains false.
- **Neuropathy:** existing native548 follow-up PASS remains unchanged; added current follow-up hashes/count35 and explicit548→4ff source applicability. Historical34 PASS/1 FAIL route_review is intact. No new whole-route fidelity review or edge change.

All14 registry QA values stay **PENDING**, and every existing edge flag stays exactly unchanged. No QA, convergence, Stage10.5, publication or launch approval was created.

## Actual source repair and design decision

The worker opened actualcd26 `page-top.png` **and** `0-hero-middle-1.png` at390×844,360×800,320×800, the approved hero frame and full-resolution338×520 source. Old firstfolds contain crown/garden, while middle captures contain the person.

Before: one copy block (heading, paragraph, status, action), then portrait. After at<=800px: heading → full portrait/caption → complete paragraph/status/action group, with24px grid gaps. The original font scale stays unchanged. Portrait remains338px maximum,328px at360 and288px at320 by existing width constraints, natural338:520 aspect, contain, never cropped or enlarged. Caption and all source-visible head, hands/cup and chair remain in the full hero. This is a source-backed builder composition decision, **not a painted PASS**.

DOM order remains heading → explanation → status → sole Services action → noninteractive illustrative image/caption. CSS moves only the illustration ahead of the long details visually on mobile; reading/focus order is coherent, with no duplicate content or focus controls. Desktop's details wrapper is `display:contents`, keeping its original formatting boxes. Existing1200px grid,386px art track,670px stage, rails, fonts and spacing are unchanged in source; actual1440/1536 pixel regression still needs capture.

Builder history: imported canonical92-entry list without changing its schema/history, appended two `design_decision` entries (Pelvic responsive composition and Services role reconciliation) to `site_build/builder_decisions.json`. Only affected Pelvic hero recipes/manifest/map/extraction plans/NOTES were updated. FAQ and other section source are untouched.

Runtime SHA256 bindings:

- `app/services/pelvic-floor-incontinence/page.css`: before `335879a33a2d86e52802fb8d910675ab7e9dfd59173b841b4eaa576d32b08da3`; after `f8c917e30b94f061833da92eafd1fe7a46f70e65abddc11101eb07f191fc2812`.
- `src/components/interior/pelvic-floor-incontinence/hero.tsx`: before `1e57c8b09c4e4e7373ed0a5152fe865fb1c85ffcc83599bc13c7d60f6ac6019c`; after `eb6762352474efd3e01f78e6b5695bb3a84f5f49ad64f462327b5432a3dc3d58`.

Portrait SHA256 remains `77f9dc1aa29dcb3ca89412da5e34ba2c6bbf42ffdb75a68437f4be4908655b5e`,338×520; decoded pixels equal approved frame crop `[1096,200,1434,720]`.

## Verification and review limits

- `npm run build`: PASS (Next16.3.3, TypeScript,22 static pages). `npm run lint`: PASS. `git diff --check`: PASS.
- 20 unchanged installed source-handoff checks:10 canonical +10 repository, **all PASS, no --allow flags**. Exact route scope: `ROOT/design_refs/review_routes.json`; commands, scanner/schema hashes, inputs and result hashes in [audit-run.json](audit-run.json). Canonical plans were read, repository inputs point into this isolated worktree.
- 188 protected tracked source/font/image/config files byte-equal to4ff.17 route/import closures checked, including Home, variants and all declared routes; only Pelvic hero TSX/CSS differ. All Services source equal75b. Book d03 CSS preserved as baseline. Shared batch-two/header/footer and all Pelvic nonhero source unchanged. [source-identity.json](source-identity.json) and [verification.json](verification.json) contain bindings/results.
- Built production HTML checks: one hero H1, no duplicate IDs, exact copy/status/caption, meaningful unchanged image alt, decorative SVG hidden, useful `/services` link, no fake form or action, noindex retained. Guide/Book/Contact remain gated with no forms/iframes.
- Native Chromium attempted once: missing `libnspr4.so`. **browser screenshots unavailable — bootstrap gap**. No dependency installation. Structural HTML/CSS checks cannot certify firstfold/wholehero/seam paint or desktop pixel equality.
- `simplify` invoked but executable is unavailable (exit127). Manual simplify/code review completed: minimal wrappers, seven scoped CSS additions, one component, no new abstraction/dependency/copy/font/asset changes. This is builder self-review, not an independent visual verdict.
- 95 snapshotted canonical inputs (including every original/follow-up report) remained unchanged. An unrelated controller resume log changed concurrently from `2e1236470510e6afc63d368a57782c8614116d8b18dfea4a9b5bdfd94c6ee77b` to `90b145f33f54f84698baf62459f532e2893fbb53005eeefdb727133aca8c4fb5`. No worker command wrote canonical ROOT; this external log drift is explicitly recorded, not reported as input equality.

## Provenance

All paths below resolve under canonical `ROOT/site_convergence`; original bytes and historical review blocks were preserved. [provenance.json](provenance.json) holds absolute report/PNG paths, source claims, verified hashes and reviewer identity/session where recorded. Missing About/Guide/Contact/Neuropathy-native session IDs are explicitly **NOT_RECORDED_IN_SUPPLIED_REPORT**, not invented. Regenerative follow-up session comes from the separately hashed controller log. Services follow-up's raw navigation.tsx hash is also mistyped; raw and independently verified75b hashes are preserved side by side. The route/source closure, heading CSS and pixels remain the governing evidence.

| Report stem | JSON SHA256 | Markdown SHA256 |
| --- | --- | --- |
| `route-review-services` | `3b27fcbca551db732ad16d38b3124c6da09c404cd7e1f1ab9e04d0a0892acc86` | `e19d97f9cd0c7864fbd1e09477970dd9d87c7eaaf09a8ee08cb517d7d388dd08` |
| `route-review-about` | `3183af88808d0330ed014667c37001ea35ab70dd7888405000ccaf5b22823b7d` | `e001dfed1480bfc396bd2056fe9ed37dc18145b73703f5ce12af9477fd2e2fa1` |
| `route-review-educational-guide` | `313f2e85bd40296a26c50c9d95aa02de3d4e0eafb950fd4b3253d936285c5ecb` | `fc151cc35be39b4183c4e404b1d1c8a9fa23200eb9b76a78a37c0af75ee13f06` |
| `route-review-book` | `80eb269634dbea6748a52af7a3c5cbc7eec8d2985c32a290a6fab6f50d6c5ad1` | `a5a0491eb45a7f3b39d9b8fcb14c2883fdddaf3edf1263f9a02ab8b41f406e27` |
| `route-review-contact` | `122c746b04c354fb4ce910aae6ce77252531ab93c2955742c1d28e4a27daa296` | `49f80d058ab7a056e4d4e872aca8146f454c5ae098ad694b59133eb920fb8dc8` |
| `route-review-pelvic-floor-incontinence` | `39742e7f35f5d6a50195bcaee797fc087a8f2adebd5effd4a23618c6939db7cd` | `9e45df6928c097c80139de6be0638d8020ac6fde73e476e9e1da65807fd84cfe` |
| `route-review-regenerative-medicine` | `31dca504a5defcaf81926915d74cf834024233db2e00db1b8eb9464444dd64b1` | `4a860e9a897df77b9d85da5be5f18dc5ea04a50caf362b028c0baf610bb952c9` |
| `route-review-neuropathy` | `2bc88bc521777d92c99d631de36b2cffda81ac12e841c6d8041dafc989676277` | `787a3cb674d1f66b808fe38de7a0036e8d0b49f4c25616592a0d4ae32907d3f8` |
| `route-review-services-typography-followup` | `dee82b6338665366ed2287faaba642cf86ac4ea02ce05827eca491c59602a86a` | `381a9f0761501fe90292f8bce27e807af134f3f4f9b3b4c76a30f9847ce39fd0` |
| `route-review-book-edge-followup` | `e5669f47ba775d35555399f661097c02302909934ecbe998d92327e6e5923084` | `1eee76376fcf4519c959988b86dd69a3e5add0fa20317c7e4a7f3b06a6e32eba` |
| `route-review-pelvic-floor-incontinence-current-followup` | `29d4400ecdb13b3f930102934f933e79c9fbe68928fdb4085920d9d6e7784dad` | `cdc3e98a5c1174dc56c2bd16299d9321819fb50f5ce06d609c60c2e2ecc3bbec` |
| `route-review-regenerative-medicine-current-followup` | `19ca6f402e09b062416c049cc2404bbba6a07cbe45d765f4214381e7bfd24134` | `2441983fd3bc11090e3602e34b4b79ad6a9d7cc7e39ea16ac2d2717348fd1ee9` |
| `route-review-neuropathy-548789e-native-followup` | `f0af5f35844865fd2eb7df2c3a2a978fb63242601d8a4f57b6776a2d6e32d7e4` | `b8bafa77da1a48ac46cb5f8485fc82a0b921e2452eedb6eb6dd687c8cefa371d` |

## Remaining controller gates

Controller owns push and immutable source/deployment binding. Independently review **new** Pelvic actual firstfold + complete hero/caption + incoming/outgoing joins at320×800,360×800,390×844 and desktop1440×900/1536×1024 regression. The face/profile and upper body must genuinely be recognizable before the first fold; wholehero must retain all text/status/action/source image. Do not promote from this worker's CSS, bounds or metadata. FAQ is already closed and unchanged.

Book current calendar awaits its separate repair review; About's3 responsive and Contact's8 composition/responsive FAILs need focused adjudication. Guide's edge, Regenerative full-scope edge and all existing legal/clinical/operational/QA gates remain controller-owned. No unsupported promotion was made here.
