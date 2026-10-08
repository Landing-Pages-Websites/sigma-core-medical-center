import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit or contact Sigma Core Medical Center in the Richmond, Virginia area. Final location and contact details require confirmation.",
};

export default function ContactRoute(): React.ReactElement {
  return <ContactPage />;
}
