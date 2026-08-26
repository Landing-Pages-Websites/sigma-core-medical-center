"use client";

import { useId, useState } from "react";

type TriggerProps = {
  id: string;
  "aria-expanded": boolean;
  "aria-controls": string;
  onClick: () => void;
};

type PanelProps = {
  id: string;
  role: "region";
  "aria-labelledby": string;
  hidden: boolean;
};

export type Accordion = {
  isOpen: (index: number) => boolean;
  triggerProps: (index: number) => TriggerProps;
  panelProps: (index: number) => PanelProps;
};

/** Disclosure state for an accordion with at most one open item at a time. */
export function useAccordion(initialOpen = 0): Accordion {
  const [openIndex, setOpenIndex] = useState(initialOpen);
  const baseId = useId();

  const isOpen = (index: number): boolean => openIndex === index;

  const triggerProps = (index: number): TriggerProps => ({
    id: `${baseId}-trigger-${index}`,
    "aria-expanded": isOpen(index),
    "aria-controls": `${baseId}-panel-${index}`,
    onClick: () => setOpenIndex((previous) => (previous === index ? -1 : index)),
  });

  const panelProps = (index: number): PanelProps => ({
    id: `${baseId}-panel-${index}`,
    role: "region",
    "aria-labelledby": `${baseId}-trigger-${index}`,
    hidden: !isOpen(index),
  });

  return { isOpen, triggerProps, panelProps };
}
