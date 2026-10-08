import { ArrowUpRight } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";

type BatchBookingProps = { label?: string; pale?: boolean; title?: string; message?: string };

export function BatchBooking({ label = "Book an Appointment", pale = false, title = "Booking is being prepared", message = "Online scheduling is not available yet. Appointment requests will open after the booking page and clinical details are approved." }: BatchBookingProps): React.ReactElement {
  return <PendingAction className={`b2-button${pale ? " b2-button-pale" : ""}`} label={<>{label}<ArrowUpRight size={21} aria-hidden /></>} title={title} message={message} />;
}
