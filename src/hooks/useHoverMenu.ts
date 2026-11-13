import { useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";

type HoverMenu = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerProps: { onClick: (event: MouseEvent) => void };
  containerProps: {
    onPointerEnter: (event: PointerEvent) => void;
    onPointerLeave: (event: PointerEvent) => void;
  };
};

/** Keyboard activation (Enter/Space) dispatches a click with no press count. */
const isKeyboardClick = (event: MouseEvent): boolean => event.detail === 0;

/**
 * A menu that opens on mouse hover and also toggles on click.
 *
 * Hover and click used to fight: hovering opened the menu and the click that
 * followed toggled it shut, and on touch screens one tap fired both, so the
 * menu never opened. Only the mouse click that follows a hover-open is now
 * suppressed. Keyboard activation, touch, and any click after the menu was
 * closed some other way (Escape, a link, pointer leaving) toggle normally.
 */
export function useHoverMenu(): HoverMenu {
  const [open, setOpenState] = useState(false);
  const openedByHover = useRef(false);

  const setOpen = (next: boolean): void => {
    if (!next) openedByHover.current = false;
    setOpenState(next);
  };

  const onPointerEnter = (event: PointerEvent): void => {
    if (event.pointerType !== "mouse") return;
    openedByHover.current = true;
    setOpenState(true);
  };

  const onPointerLeave = (event: PointerEvent): void => {
    if (event.pointerType !== "mouse") return;
    setOpen(false);
  };

  const onClick = (event: MouseEvent): void => {
    const suppress = openedByHover.current && !isKeyboardClick(event);
    openedByHover.current = false;
    if (suppress) return;
    setOpenState((current) => !current);
  };

  return { open, setOpen, triggerProps: { onClick }, containerProps: { onPointerEnter, onPointerLeave } };
}
