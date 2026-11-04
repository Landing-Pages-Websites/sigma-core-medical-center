"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/site.config";
import { consentHiddenInPreview } from "@/components/consent/previewHidden";
import { raiseToTopLayer, shouldReraiseAfter } from "@/components/consent/topLayer";
import { useConsent } from "@/components/consent/useConsent";
import { useOpenModalDialog } from "@/components/consent/useOpenModalDialog";

/** The site has no cookie policy page; its privacy policy covers cookies and analytics. */
const POLICY_HREF = "/privacy#website-activity-and-cookies";

/**
 * Lightweight self-built cookie banner (no vendor script). Renders nothing
 * once the visitor has made a real choice (an unrecognised stored value asks
 * again while analytics stay off); analytics loaders react via useConsent().
 * In "us-default" mode analytics already load before a choice; in "strict"
 * mode nothing loads until Accept. In both modes the copy names analytics AND
 * advertising, because an explicit Accept also grants Google ad consent
 * (gaConsentLevel "all"); Decline turns both off.
 *
 * A visitor can always reach it, whatever overlay is open (see topLayer.ts):
 * it is a top-layer popover above every z-index, and while a modal dialog is
 * open it renders inside that dialog so it is not inert, and moves out again
 * the moment that dialog is closed, removed or moved. `visible` keeps it shown
 * inside a modal the site hides with visibility:hidden. The z-index is only
 * the fallback where popovers are unsupported.
 */
export function ConsentBanner(): ReactElement | null {
  const { choiceNeeded, accept, decline } = useConsent();
  const modal = useOpenModalDialog();
  const barRef = useRef<HTMLDivElement>(null);
  const visible = choiceNeeded && !consentHiddenInPreview();

  // Runs after every move into or out of a modal (the portal remounts the bar),
  // so the bar is re-shown above whatever entered the top layer last.
  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!visible || !bar) return;
    // A popover stays hidden until shown: if showing fails, fall back to a plain fixed bar.
    if (!raiseToTopLayer(bar)) bar.removeAttribute("popover");
  }, [visible, modal]);

  // toggle does not bubble: listen in the capture phase for any popover or
  // dialog that opens after the bar, and raise the bar back above it.
  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!visible || !bar) return;
    const onToggle = (event: Event): void => {
      if (shouldReraiseAfter(event as ToggleEvent, bar)) raiseToTopLayer(bar);
    };
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, [visible, modal]);

  if (!visible) {
    return null;
  }

  const bar = (
    <div
      ref={barRef}
      popover="manual"
      role="region"
      aria-label="Cookie consent"
      data-mega-preview-hide=""
      data-mega-ignore=""
      className="ph-no-capture visible fixed inset-x-0 top-auto bottom-0 z-[2147483000] m-0 h-auto w-full max-w-none overflow-visible border-0 border-t-4 border-electric bg-surface p-4 font-body text-ink shadow-[0_-12px_40px_rgb(16_30_51/0.18)]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-ink">
          {siteConfig.businessName} uses cookies for analytics and advertising,
          to improve this site and measure our ads. See our{" "}
          <Link href={POLICY_HREF} className="underline underline-offset-2 hover:text-action">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={accept}
            aria-label="Accept analytics and advertising cookies"
            className="rounded-sm bg-action px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hover"
          >
            Accept cookies
          </button>
          <button
            type="button"
            onClick={decline}
            aria-label="Decline analytics and advertising cookies"
            className="rounded-sm border border-silver px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-electric hover:bg-paper"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
  return modal ? createPortal(bar, modal) : bar;
}
