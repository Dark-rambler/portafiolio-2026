import type { ReactNode } from "react";
import { FloatingSectionRail } from "@/shared/components/navigation/floating-section-rail";
import { SiteHeader } from "@/shared/components/navigation/site-header";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        className="decor-orb h-56 w-56 bg-[var(--brand-2)]"
        style={{ top: "-2.5rem", left: "-1rem" }}
      />
      <div
        className="decor-orb h-64 w-64 bg-[var(--brand)]"
        style={{ top: "6rem", right: "-3rem", animationDelay: "1.1s" }}
      />
      <div
        className="decor-orb h-52 w-52 bg-[var(--brand-3)]"
        style={{ bottom: "7rem", left: "30%", animationDelay: "2.2s" }}
      />
      <SiteHeader />
      <FloatingSectionRail />
      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 py-10">
        {children}
      </main>
    </div>
  );
}
