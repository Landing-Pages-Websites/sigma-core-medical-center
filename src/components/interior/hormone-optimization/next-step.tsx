import Link from "next/link";
import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function HormoneNextStep(): React.ReactElement {
  return <section id="responsible-next-step" className="b2-section h-next"><div className="b2-wrap"><div className="h-next-head"><h2>Responsible Next Step</h2><p>The responsible prescribing provider, credentials, actual services, and process must be confirmed before clinical details go live. Booking will open after these facts and scheduling are approved.</p></div><div className="h-next-grid"><InteriorImage slug="hormone-optimization" file="04-responsible-next-step-01-visitor-in-clinic.png" alt="Visitor seated in an interior setting from the approved frame" /><div className="h-next-clarity"><h3>Consultation clarity</h3><p>Ask who will assess your concerns, what options are available, and what evidence and follow-up matter to you.</p><Link href="/services">Explore the service overview →</Link></div><div className="h-next-action"><h3>When booking opens</h3><p>Use the approved booking route to start a conversation—not to assume a prescription or outcome.</p><BatchBooking pale /></div></div></div></section>;
}
