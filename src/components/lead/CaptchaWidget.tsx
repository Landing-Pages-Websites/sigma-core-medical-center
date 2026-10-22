"use client";
import { forwardRef, useImperativeHandle, type ReactElement } from "react";
import RecaptchaWidget from "./RecaptchaWidget";
import TurnstileWidget from "./TurnstileWidget";
import { captchaHandle, useCaptcha, type CaptchaHandle } from "@/hooks/useCaptcha";
import type { CaptchaAction } from "@/lib/captcha/verify";
export type { CaptchaHandle };
interface CaptchaWidgetProps {
  readonly onReady: (ready: boolean) => void;
  readonly action?: CaptchaAction;
}
function ignoreRecaptchaReadiness(): void {}
/** Route kind comes from next.config; the browser never imports the sentinel test. */
const CaptchaWidget = forwardRef<CaptchaHandle, CaptchaWidgetProps>(
  function CaptchaWidget({ onReady, action = "lead_submit" }, ref): ReactElement | null {
    const { route, recaptchaRef, turnstileRef, tokenRef, waitingRef, onToken } = useCaptcha(onReady);
    useImperativeHandle(ref, () => captchaHandle({ route, recaptchaRef, turnstileRef, tokenRef, waitingRef }));
    if (route === "bypass" || route === "reject") return null;
    if (route === "turnstile") return <TurnstileWidget ref={turnstileRef} onToken={onToken} />;
    return <RecaptchaWidget ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? ""}
      defaultAction={action} onReady={ignoreRecaptchaReadiness} />;
  },
);
export default CaptchaWidget;
