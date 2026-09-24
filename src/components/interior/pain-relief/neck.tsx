import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function PainNeck(): React.ReactElement {
  return <section id="neck-concerns" className="interior-section pain-neck"><div className="interior-wrap"><div className="pain-neck-top"><div><h2 className="bracket">Neck concerns</h2><p>Range of motion, comfort at a desk or while driving, and daily function can all be topics for a care conversation—not promises of results.</p><div className="signal-bars" aria-hidden /><span className="eyebrow">Goals worth discussing</span></div><InteriorImage slug="pain-relief" file="05-neck-concerns-01-woman-reading.png" alt="Woman reading at a desk" className="pain-neck-reader" /></div><div className="pain-neck-rail"><InteriorImage slug="pain-relief" file="05-neck-concerns-02-clinic-lounge-strip.png" alt="Lounge strip in the approved neck section" /><p>One conversation can start with the concerns that matter to you.</p><NextAction href="/book">Explore booking</NextAction></div><small>Scheduling integration pending.</small></div></section>;
}
