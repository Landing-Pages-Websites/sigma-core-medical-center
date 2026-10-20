"use client";

import { useEffect } from "react";
import { initAttribution } from "@/lib/leadContext";
import { submitLead } from "@/lib/leadSubmit";

/** Same-origin starter submission; no attachment capability on this form. */
export function useMegaLeadForm(): { submit: typeof submitLead } {
  useEffect(() => { initAttribution(); }, []);
  return { submit: submitLead };
}
