# Bounded local implementation — 2026-10-09

Base: `4d9e2370ed0f23849f8a3c6e143caa5c577865c3`. The existing prospective `PLAN.md` was read before edits and is included unchanged. No older branch changes were inherited.

## Application changes

Exactly these seven application paths are selected for the implementation commit:

1. `app/variant-a/page.tsx` — only the `permanentRedirect` import and default `Page(): never` redirecting to `/`.
2. `app/variant-b/page.tsx` — the same supported redirect stub.
3. `app/services/interior.css` — only the interior header minimum height `104px → 112px` and mobile block padding `20px → 24px`.
4. `src/components/batch-three/book/book.css` — only the matching scoped header values.
5. `app/(site)/educational-guide/page.tsx` — adds `robots: { index: false, follow: true }`.
6. `src/components/pages/educational-guide/lead-form-section.tsx` — explicitly unavailable resource and request form, a “Guide availability” control using the unchanged existing `PendingAction`, local unavailable dialog copy, and a policy-status link. The control has automatic height, a minimum height, maximum width, wrapping text, vertical padding and explicit line-height.
7. `src/components/pages/educational-guide/privacy-note.tsx` — policy-status destinations and unavailable resource/request information replace unsupported privacy, marketing and intake claims.

The frontend-design skill was read and applied as a constrained interior status repair. Existing typography, colors, section geometry, motifs, imagery and anchors are retained. Navigation remains naturally wrapping; individual nowrap link labels do not make the whole mobile navigation a single row. No rendered clearance or viewport-fit measurement is claimed.

## Commands and observed results

Node dependencies were absent. `npm ci` used the existing lockfile and did not change package files. All npm commands used:

```text
TMPDIR=/var/lib/megaclaw/workspace/.awb-scratch/tmp
NEXT_TELEMETRY_DISABLED=1
npm_config_cache=/var/lib/megaclaw/workspace/.awb-scratch/npm-cache
```

| Command/check | Observed exit | Evidence |
| --- | --- | --- |
| `npm ci` | 0 | `logs/npm-ci.log` |
| `npm run lint` | 0 | `logs/lint.log` |
| `npx tsc --noEmit` | 0 | `logs/tsc.log` (empty successful output) |
| `npm run build` | 0 | `logs/build.log` |
| Generated HTML/route metadata inspection | 0 | `logs/generated-output.log` |
| Initial strict post-edit freeze assertion | 1 | Stopped on `app/services/interior.css`; the complete comparison is recorded below. |
| Complete scope/hash comparison with explicit conflict reporting | 0 | `logs/scope.log`; this exit does **not** mean all frozen files match. |
| `simplify` | 127 | Command not installed; `logs/simplify.log`. |
| `git diff --check` before staging audit logs | 0 | No application-source whitespace errors. |
| Commit whitespace check including raw logs (`git show --format= --check HEAD`) | 2 | Build progress output contains trailing carriage-return/space characters; build/lint logs include terminal blank lines. Raw command output is retained unchanged. |

The install reported 10 dependency advisories (9 high, 1 critical); no dependency changes were made. The build completed using Next.js 16.3.3. Installed Next.js documentation for permanent redirects and metadata was consulted.

Generated route metadata contains status `308` and location `/` for both retired variants. Generated Guide HTML contains `noindex, follow`, the retained `#form` and `#faq` sections, a labeled native dialog, and two `type="button"` controls in `#form` (availability and close). Neither edited section emits a form or data-entry fields. The flexible control classes are present in generated HTML. This is static output evidence, not a browser interaction or visual test.

## Pre-commit self-review and simplification

Manual simplification retained the existing components and dialog, removed the unused shared `PENDING` import, and kept status copy local so the frozen shared content could remain untouched. No new abstraction, dependency, asynchronous operation, submission handler, network call, `any`, console logging or debugger was introduced. Existing multi-component file structure was preserved to keep this a bounded repair.

The existing dialog uses native `showModal()` and close controls; global `:focus-visible` styling remains unchanged. Policy links retain real destinations whose current content discloses unavailable approved policies. Exact imagery JSX in the edited files remains unchanged. Other route metadata/noindex gates and all historical evidence remain byte unchanged. No leads were submitted.

## Protected-byte result and unresolved constraints

Before edits, **732/732** files matched the external freeze by size and SHA-256. After the requested changes, **731/732** match. The sole mismatch is `app/services/interior.css`, which is both explicitly in scope for this task and included in the freeze's source closure:

```text
Expected SHA-256: 85626121d4751bab179ba8d2187af47785f451f7553d66a67a5d2ce22b520b36
Actual SHA-256:   aa8182a17a78bcc23968c48eda0dc6ecb6bdbcbcfbc379b554e45ddadcfbe651
Size before/after: 42731 bytes
```

Its diff contains only the explicitly requested two header values. The direct task authorization was followed without changing the freeze, but the all-protected-bytes condition is **not satisfied**. This conflict remains for the controller; no all-files freeze pass or Home visual acceptance is asserted. All other frozen files, including `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `src/content/site.ts`, shared `PendingAction`, every `src/components/variant-b/**` file and protected assets, match exactly.

The external freeze itself remains unchanged, SHA-256 `5296cb3160526e65ea95a35c41bcf9ae71a98aa2100c0c7c4af1879731a7e002`.

The build genuinely regenerated tracked `next-env.d.ts`: imports of `.next/dev/types/routes.d.ts` and `.next/dev/types/root-params.d.ts` became `.next/types/routes.d.ts` and `.next/types/root-params.d.ts`. This drift is left visible and uncommitted, without restoration or concealment. Thus the commit contains seven application paths, while the local working tree additionally contains this generated change. The newly generated untracked TypeScript build-info cache was removed.

Out-of-scope content constraints remain: `guide-hero.tsx` still promises interest notifications and contains preparation instructions; `resource-summary.tsx` links to terms as though resource terms were supplied; shared `src/content/site.ts` retains prospective delivery wording. These sources and approved Home copy were preserved exactly. The status repair does not establish whole-route content acceptance.

No Chromium, Playwright, MegaBrowser, image tooling, external reviewer or browser verification was run. Browser/320px fit/dialog interaction and final route confirmation remain controller-owned. No remote delivery, push, PR, merge, rebase, deployment, git-auth/remote/hook change or external submission was performed. This document records local implementation and observed checks only; it is not AD, QA, review or approval evidence.
