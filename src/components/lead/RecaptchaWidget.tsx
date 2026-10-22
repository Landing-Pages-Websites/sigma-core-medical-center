"use client";
import { forwardRef, useImperativeHandle, type ReactElement } from "react";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { recaptchaToken, resetRecaptcha } from "@/lib/captcha/recaptchaClient";

export interface RecaptchaHandle {
  getToken: (action: string) => Promise<string | null>;
  reset: () => void;
}
interface RecaptchaWidgetProps {
  readonly sitekey: string;
  readonly defaultAction: string;
  readonly onReady: (ready: boolean) => void;
}
/** Starter's explicit invisible Enterprise widget, with lifecycle helpers extracted. */
const RecaptchaWidget = forwardRef<RecaptchaHandle, RecaptchaWidgetProps>(
  function RecaptchaWidget({ sitekey, defaultAction, onReady }, ref): ReactElement {
    const { containerRef, widgetRef } = useRecaptcha(sitekey, defaultAction, onReady);
    useImperativeHandle(ref, () => ({
      getToken: (action) => recaptchaToken(widgetRef.current, action),
      reset: () => resetRecaptcha(widgetRef.current),
    }));
    return <div ref={containerRef} />;
  },
);
export default RecaptchaWidget;
