import { CalendarClock } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function BookHero(): React.ReactElement {
  return <section id="booking-hero" className="b3-section b3-ink b3-book-hero"><div className="b3-shell b3-split"><div className="b3-book-intro"><h1 className="b3-bracket">Book your appointment with Sigma Core</h1><p>The approved scheduling calendar has not been connected. No appointment can be requested or confirmed on this page yet.</p><ol id="booking-steps" className="b3-book-steps"><li>Explore your goals</li><li>Review care options</li><li>Return when scheduling opens</li></ol><DesignPhoto slug="book" file="01-booking-hero-01-clinic-reception.png" className="b3-bevel b3-book-hero-media" priority /></div><div className="b3-calendar-aperture" id="integration-status"><CalendarClock size={56} aria-hidden /><strong>Calendar integration pending</strong><span>No dates, times, or availability are shown.</span></div></div></section>;
}
