import type { Metadata } from "next";
import { RegenerativeMedicinePage } from "@/components/pages/regenerative/regenerative-medicine-page";
import { REGENERATIVE_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: "Regenerative Medicine",
  description: REGENERATIVE_PAGE.intro,
};

export default function RegenerativeMedicineRoute(): React.ReactElement {
  return <RegenerativeMedicinePage />;
}
