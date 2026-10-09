# Prospective bounded successor plan

Authority: Shamita, Atlas comment315991ef-a25c-4710-b4b4-bec4b4a5dd76 at2026-10-09T13:15:48.351Z, on https://admin.gomega.ai/tasks/0b307253-74a6-4f62-8840-85e83bea048a.
Approved base:4d9e2370ed0f23849f8a3c6e143caa5c577865c3, PR52. This new branch starts directly on that exact main commit; older correction branches are not rebased/overwritten and their root rewrites are NOT inherited.

## Stable change IDs

- retire-variants-permanent: replace only the two notFound page stubs with unconditional permanentRedirect('/') stubs. Goal: bookmarked variants reach approved root, no new chooser or variant body.
- retained-interior-header-clearance: adjust only interior-specific header clearance in app/services/interior.css and Book override CSS:112px desktop min-height,24px mobile block padding. Goal: actual logo-box top clearance≥32px desktop and≥24px mobile,8px downstream displacement, same natural two-row mobile nav without redesign. No approved Home/shared SiteHeaderB/SiteFooterB edits.
- guide-unavailable-honesty: replace unsupported lead-delivery, data-field, follow-up, consent and privacy promises in the two Guide-only status panels with explicit resource/form unavailable statements. Keep #form/#faq anchors, visible status-button native PendingAction result and existing article/section grammar. Use wrapping, responsive-height status control so320px text stays inside its button. Add noindex,follow to the gated Guide route. No live form, email/phone collection or consent/legal text invented.

## Preservation

The entire root import graph and existing public/font/config files are frozen in the controller's approved-home-freeze.json outside the worktree. Preserve every such byte exactly. In particular app/page.tsx and src/components/variant-b/** are out of scope, including two-ways card copy and footer. Shared PATH copy conflicts are logged for Site Review, not edited here. Existing retired variant components and all historical JSON/c2 artifacts remain.

## Acceptance

All tracked files match committed bytes at capture time. Exactly seven application paths may change in this initial implementation:two retired variant entrypoints, two interior CSS files,Guide route metadata and two Guide-only sections. No source/file normalization or validator patch. npm lint,tsc --noEmit and production build pass. The controller will capture each current route against a new Git-linked immutable preview, inspect real Guide dialog and eight utility-header readbacks in their own route packets, run one final confirmation reviewer per route and conservatively resolve actual residual findings. These prospective items are not rendered acceptance or approval until measured/inspected.
