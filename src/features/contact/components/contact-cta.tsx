import { siteConfig } from "@/shared/config/site";

export function ContactCta() {
  return (
    <section className="reveal-up rounded-3xl bg-[linear-gradient(135deg,#00d1ff_0%,#6f7bff_45%,#1df5c3_100%)] p-[1px]">
      <div className="rounded-3xl bg-[var(--panel-card)] px-6 py-7 sm:px-8">
        <h2 className="text-2xl font-black text-foreground">Construyamos algo increible</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Si tienes una idea, un negocio o un producto digital por mejorar, te
          ayudo a convertirlo en una experiencia web profesional y escalable.
        </p>
        <a
          className="mt-5 inline-flex rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-bold text-[var(--on-brand)] transition hover:translate-y-[-1px] hover:bg-[#00b2db]"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </section>
  );
}
