"use client";

import { useId, useRef } from "react";

type PendingActionProps = {
  label: React.ReactNode;
  title: string;
  message: string;
  className: string;
};

/**
 * A real, non-deceptive control for actions whose destination is pending
 * (booking link, educational guide, future interior pages). Opens an
 * accessible modal dialog explaining the current status.
 */
export function PendingAction({
  label,
  title,
  message,
  className,
}: PendingActionProps): React.ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const close = (): void => dialogRef.current?.close();

  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>): void => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <>
      <button type="button" className={className} onClick={() => dialogRef.current?.showModal()}>
        {label}
      </button>
      <dialog
        ref={dialogRef}
        onClick={closeOnBackdrop}
        aria-labelledby={titleId}
        className="m-auto w-[min(92vw,30rem)] rounded-md bg-surface p-0 text-ink shadow-2xl backdrop:backdrop-blur-[2px]"
      >
        <div className="border-t-4 border-electric p-7 sm:p-8">
          <h2 id={titleId} className="font-body text-xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{message}</p>
          <button
            type="button"
            onClick={close}
            className="mt-6 inline-flex h-12 min-w-28 items-center justify-center rounded-sm bg-action px-6 font-semibold text-white transition-colors hover:bg-hover"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
