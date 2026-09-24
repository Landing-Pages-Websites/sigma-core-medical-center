import Image from "next/image";
import Link from "next/link";

export function InteriorHeader(): React.ReactElement {
  return (
    <header className="interior-header">
      <div className="interior-wrap interior-header-inner">
        <Link href="/" aria-label="Sigma Core Medical Center home" className="interior-logo"><Image src="/images/shared/logo.png" alt="" width={240} height={65} className="h-11 w-auto" /></Link>
        <nav aria-label="Main navigation" className="interior-nav">
          <Link href="/services/neuropathy">Neuropathy</Link>
          <Link href="/services">All services</Link>
          <Link href="/services/pain-relief">Pain relief</Link>
        </nav>
      </div>
    </header>
  );
}
