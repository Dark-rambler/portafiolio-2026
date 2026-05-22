"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/features/experience/services/experience-data";
import { SectionTitle } from "@/shared/components/ui/section-title";

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="space-y-8">
      <SectionTitle
        eyebrow="Experiencia profesional"
        title="Linea de tiempo"
        description="Un recorrido por los proyectos y equipos donde he aportado como ingeniero de software y desarrollador web."
      />

      <div className="rounded-3xl p-1 sm:p-2">
        <ol className="relative space-y-6 sm:space-y-7">
          <motion.span
            className="timeline-line absolute bottom-1 left-0 top-1 w-[3px] rounded-full lg:left-1/2 lg:-translate-x-1/2"
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {experienceData.map((entry, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.li
                key={entry.id}
                className="group/timeline relative pl-7 sm:pl-9 lg:pl-0"
                initial={{ opacity: 0, y: 48, scale: 0.985, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: "easeOut" }}
              >
                <motion.span
                  className="absolute -left-[4px] top-1.5 h-6 w-6 rounded-full bg-[var(--brand)]/20 blur-[1px] lg:left-1/2 lg:-translate-x-1/2"
                  initial={{ scale: 0.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.9 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.42, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                />
                <motion.span
                  className="timeline-dot absolute left-0 top-2 h-4 w-4 rounded-full border-[3px] border-[var(--surface)] lg:left-1/2 lg:-translate-x-1/2"
                  style={{
                    background:
                      index % 2 === 0 ? "var(--brand)" : "var(--brand-2)",
                  }}
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.45, delay: 0.13 + index * 0.08, ease: "easeOut" }}
                />

                <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_3.25rem_minmax(0,1fr)] lg:items-start">
                  <motion.span
                    aria-hidden="true"
                    className="relative hidden h-px self-start lg:col-start-2 lg:mt-6 lg:block"
                    initial={{ opacity: 0, scaleX: 0.35 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: 0.16 + index * 0.08, ease: "easeOut" }}
                  >
                    <span
                      className={`absolute top-0 h-px w-1/2 ${
                        isLeft
                          ? "left-0 bg-[linear-gradient(90deg,transparent,var(--brand))]"
                          : "right-0 bg-[linear-gradient(90deg,var(--brand),transparent)]"
                      }`}
                    />
                    <span
                      className={`absolute top-0 h-px w-1/2 opacity-0 transition-opacity duration-300 group-hover/timeline:opacity-100 ${
                        isLeft
                          ? "left-0 bg-[linear-gradient(90deg,transparent,var(--brand-3))]"
                          : "right-0 bg-[linear-gradient(90deg,var(--brand-3),transparent)]"
                      }`}
                    />
                  </motion.span>

                  <motion.article
                    className={`group tech-detail relative space-y-4 overflow-hidden rounded-2xl border border-[var(--brand-2)]/20 bg-[linear-gradient(165deg,rgb(11_23_46_/_0.84),rgb(9_19_38_/_0.76))] p-5 shadow-[0_16px_34px_rgb(2_8_20_/_0.45)] ${
                      isLeft ? "lg:col-start-1" : "lg:col-start-3"
                    }`}
                    initial={{ opacity: 0, y: 24, x: isLeft ? -14 : 14 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -3, scale: 1.004 }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] opacity-0 transition group-hover:opacity-100"
                    />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--brand-3)]">
                          Hito {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-lg font-black text-foreground">{entry.role}</h3>
                        <span className="text-sm font-semibold text-muted">
                          {entry.company}
                        </span>
                      </div>
                      <span className="rounded-full border border-[var(--brand-3)]/35 bg-[var(--brand-3)]/12 px-3 py-1 text-xs font-bold text-[var(--brand-3)]">
                        {entry.period}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-muted">{entry.summary}</p>

                    <ul className="flex flex-wrap gap-2">
                      {entry.stack.map((tech) => (
                        <li
                          key={`${entry.id}-${tech}`}
                          className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)] transition group-hover:border-[var(--brand)]/55 group-hover:text-[var(--brand)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
