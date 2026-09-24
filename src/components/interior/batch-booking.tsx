import { ArrowUpRight } from "lucide-react";
import { PendingAction } from "@/components/shared/pending-action";

export function BatchBooking({ label = "Book an Appointment", pale = false }: { label?: string; pale?: boolean }): React.ReactElement {
  return <PendingAction className={`b2-button${pale ? " b2-button-pale" : ""}`} label={<>{label}<ArrowUpRight size={21} aria-hidden /></>} title="Booking is being prepared" message="Online scheduling is not available yet. Appointment requests will open after the booking page and clinical details are approved." />;
}
