import { BatchBooking } from "../batch-booking";

export function PelvicBookingAction({ pale = false }: { pale?: boolean }): React.ReactElement {
  return <BatchBooking label="Check booking status" pale={pale} title="Online scheduling unavailable" message="Appointment requests cannot be submitted here. This button only displays the current booking status." />;
}
