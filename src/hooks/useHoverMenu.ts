import { useRef, useState } from "react";
import type { PointerEvent } from "react";

type HoverMenu = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerProps: { onClick: () => void };
  containerProps: {
    onPointerEnter: (event: PointerEvent) => void;
    onPointerLeave: (event: PointerEvent) => void;
  };
};

/**
 * A menu that opens on mouse hover and also toggles on click.
 *
 * Hover and click used to fight: hovering opened the menu and the click that
 * followed toggled it shut, and on touch screens one tap fired both, so the
 * menu never opened. Hover now applies to a real mouse only, and the first
 * click after a hover-open keeps the menu open instead of toggling it.
 */
export function useHoverMenu(): HoverMenu {
  const [open, setOpen] = useState(false);
  const openedByHover = useRef(false);

  const onPointerEnter = (event: PointerEvent): void => {
    if (event.pointerType !== "mouse") return;
    openedByHover.current = true;
    setOpen(true);
  };

  const onPointerLeave = (event: PointerEvent): void => {
    if (event.pointerType !== "mouse") return;
    openedByHover.current = false;
    setOpen(false);
  };

  const onClick = (): void => {
    if (openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    setOpen((current) => !current);
  };

  return { open, setOpen, triggerProps: { onClick }, containerProps: { onPointerEnter, onPointerLeave } };
}
