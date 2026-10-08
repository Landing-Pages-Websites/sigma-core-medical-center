import type { Metadata } from "next";
import { BookPage } from "@/components/pages/book-page";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book an appointment with Sigma Core Medical Center through the approved secure scheduling experience.",
};

export default function BookRoute(): React.ReactElement {
  return <BookPage />;
}
