import { permanentRedirect } from "next/navigation";

// Class IV laser therapy is no longer offered; the former page sends visitors to the pain-relief overview.
export default function ClassIVLaserTherapyPage(): never {
  permanentRedirect("/services/pain-relief");
}
