import { SectionTitle } from "@/shared/components/ui/section-title";

const focusAreas = [
  {
    title: "Arquitectura clara",
    description:
      "Organizo cada modulo por responsabilidad para que el producto escale sin perder mantenibilidad.",
  },
  {
    title: "UX con impacto",
    description:
      "Construyo interfaces rapidas, consistentes y orientadas a conversion, no solo pantallas bonitas.",
  },
  {
    title: "Ejecucion de punta a punta",
    description:
      "Me involucro desde la idea y el diseno tecnico hasta la entrega y mejora continua.",
  },
];

export function AboutSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Perfil"
        title="Sobre mi"
        description="Soy Edwin Ramiro Garcia Chambilla, ingeniero de software enfocado en construir productos web modernos, escalables y alineados a resultados de negocio."
      />

      <div className="glass-panel reveal-up rounded-3xl p-6 sm:p-8">
        <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Trabajo con enfoque en arquitectura, rendimiento y experiencia de
          usuario. Me gusta transformar requerimientos complejos en soluciones
          claras, medibles y listas para evolucionar en produccion.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] p-4"
              style={{ animationDelay: `${160 + index * 80}ms` }}
            >
              <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-[var(--brand-3)]">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
