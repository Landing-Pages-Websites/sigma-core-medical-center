import { BatchBooking } from "../batch-booking";

export function PelvicGoals(): React.ReactElement {
  return <section id="concerns-and-goals" className="b2-section p-goals"><div className="b2-wrap p-goals-grid"><div className="p-goals-main"><h2>Concerns And Goals</h2><p>How are your concerns affecting routines, activity, sleep, travel, exercise, or confidence? These are questions to bring to a clinician—not a way to determine a cause online.</p><p>Online content cannot establish what care, if any, is appropriate for you.</p><BatchBooking /></div><aside className="p-goals-questions" aria-label="Questions to bring to a conversation"><span className="p-goals-kicker">For your conversation</span><strong>What matters most to you?</strong><ol role="list"><li>Which routines feel different?</li><li>Which activities matter to you?</li><li>What would you like to ask?</li></ol><p>Use these prompts to clarify your priorities, not to assess a condition.</p></aside></div></section>;
}
