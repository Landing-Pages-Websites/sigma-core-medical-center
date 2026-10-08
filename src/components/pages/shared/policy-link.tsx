import { PendingAction } from "@/components/shared/pending-action";
import { PENDING } from "@/content/site";

type PolicyLinkProps = {
  label: React.ReactNode;
  className: string;
};

/** Terms, privacy, and notice links point to pages that are not published yet; explain that honestly. */
export function PolicyLink({ label, className }: PolicyLinkProps): React.ReactElement {
  return <PendingAction label={label} title={PENDING.policy.title} message={PENDING.policy.message} className={className} />;
}
