import { experienceData } from "@/features/experience/services/experience-data";
import { SectionTitle } from "@/shared/components/ui/section-title";

export function RelevantProjectsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Casos relevantes"
        title="Proyectos relevantes"
        description="Selecciones de mi linea de tiempo profesional, con foco en impacto tecnico y stack usado."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {experienceData.map((entry, index) => (
          <article
            key={entry.id}
            className="glass-panel reveal-up space-y-4 rounded-2xl p-6"
            style={{ animationDelay: `${140 + index * 90}ms` }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-extrabold text-foreground">{entry.company}</h3>
              <span className="rounded-full border border-[var(--brand-3)]/35 bg-[var(--brand-3)]/12 px-2 py-1 text-xs font-bold text-[var(--brand-3)]">
                {entry.period}
              </span>
            </div>

            <p className="text-sm font-semibold text-[var(--brand-2)]">{entry.role}</p>
            <p className="text-sm leading-6 text-muted">{entry.summary}</p>

            <ul className="flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <li
                  key={`${entry.id}-${tech}`}
                  className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
