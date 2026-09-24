import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function PelvicGoals(): React.ReactElement {
  return <section id="concerns-and-goals" className="b2-section p-goals"><div className="b2-wrap p-goals-grid"><div><h2>Concerns And Goals</h2><p>How are your concerns affecting routines, activity, sleep, travel, exercise, or confidence? These are questions to bring to a clinician—not a way to determine a cause online.</p><p>Online content cannot establish what care, if any, is appropriate for you.</p><BatchBooking /></div><div className="p-goals-art"><InteriorImage slug="pelvic-floor-incontinence" file="03-concerns-and-goals-01-clinic-reception.png" alt="Interior reception detail from the approved concerns frame" /><div><strong>Identify your priorities</strong><p>Consider what matters most in daily life before your conversation.</p></div></div></div></section>;
}
