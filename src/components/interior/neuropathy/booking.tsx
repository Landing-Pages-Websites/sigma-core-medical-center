import { NextAction } from "../next-action";

export function NeuropathyBooking(): React.ReactElement {
  return <section id="form" className="interior-section neuro-book"><div className="interior-wrap neuro-book-grid"><div><h2>Take a short question sheet with you.</h2><p className="bracket">Put your answers in your own notes before a conversation with a qualified healthcare professional. This page does not collect health information.</p></div><div className="neuro-book-right"><div className="neuro-book-question-sheet"><span>Three prompts to keep</span><ol><li>What changed, and when?</li><li>Which daily activity is affected?</li><li>What do I need clarified before considering an option?</li></ol></div><div className="neuro-book-action"><strong>Online booking is not available yet.</strong><NextAction href="#medical-sources" pale>Check the source and its limits</NextAction></div></div></div></section>;
}
