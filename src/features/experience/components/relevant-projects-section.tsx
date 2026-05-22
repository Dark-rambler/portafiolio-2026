"use client";

import { motion } from "framer-motion";
import { relevantProjectsByCompany } from "@/features/experience/services/relevant-projects-data";
import { SectionTitle } from "@/shared/components/ui/section-title";

export function RelevantProjectsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Casos relevantes"
        title="Proyectos relevantes"
        description="Vista por empresa: documenta uno o varios proyectos por cada experiencia, con stack y aportes concretos."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {relevantProjectsByCompany.map((company, index) => {
          const isPrimary = index === 0;
          const projectCount = company.projects.length;

          return (
            <motion.article
              key={company.id}
              className={`glass-panel tech-detail group relative overflow-hidden rounded-2xl p-6 transition hover:border-[var(--brand)]/45 hover:shadow-[0_24px_44px_rgb(3_12_27_/_0.62)] ${
                isPrimary ? "lg:col-span-2" : ""
              }`}
              initial={{
                opacity: 0,
                y: 26,
                x: isPrimary ? 0 : index % 2 === 0 ? -16 : 16,
                scale: 0.985,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3, scale: 1.003 }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] opacity-0 transition group-hover:opacity-100"
              />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-foreground">{company.company}</h3>
                  <p className="text-sm font-semibold text-[var(--brand-2)]">{company.role}</p>
                </div>
                <span className="rounded-full border border-[var(--brand-3)]/35 bg-[var(--brand-3)]/12 px-2.5 py-1 text-xs font-bold text-[var(--brand-3)]">
                  {projectCount} {projectCount === 1 ? "proyecto" : "proyectos"}
                </span>
              </div>

              <div className="space-y-4">
                {company.projects.map((project) => (
                  <div
                    key={project.id}
                    className="space-y-3 rounded-2xl border border-[var(--brand-2)]/20 bg-[var(--panel-soft)]/55 p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <p className="text-sm font-bold text-foreground">{project.title}</p>
                      <span className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-card)] px-2.5 py-1 text-[11px] font-semibold text-[var(--brand-2)]">
                        {project.period}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-muted">{project.summary}</p>

                    <ul className="space-y-2">
                      {project.contributions.map((contribution) => (
                        <li key={`${project.id}-${contribution}`} className="flex gap-2 text-sm text-muted">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={`${project.id}-${tech}`}
                          className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-card)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)] transition group-hover:border-[var(--brand)]/45 group-hover:text-[var(--brand)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
