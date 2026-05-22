"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/features/experience/services/experience-data";
import { SectionTitle } from "@/shared/components/ui/section-title";

export function ExperienceTimeline() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Experiencia profesional"
        title="Linea de tiempo"
        description="Un recorrido por los proyectos y equipos donde he aportado como ingeniero de software y desarrollador web."
      />

      <div className="glass-panel rounded-3xl p-6 sm:p-8">
        <ol className="relative space-y-6 pl-6 sm:space-y-7 sm:pl-8">
          <span className="timeline-line absolute bottom-0 left-0 top-0 w-[3px] rounded-full" />

          {experienceData.map((entry, index) => (
            <motion.li
              key={entry.id}
              className="relative"
              initial={{ opacity: 0, y: 48, scale: 0.985, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.62, delay: index * 0.08, ease: "easeOut" }}
            >
              <motion.span
                className="timeline-dot absolute -left-[34px] top-1 h-4 w-4 rounded-full border-4 border-[var(--surface)] sm:-left-[42px]"
                style={{
                  background:
                    index % 2 === 0 ? "var(--brand)" : "var(--brand-2)",
                }}
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: "easeOut" }}
              />

              <motion.article
                className="group space-y-3 rounded-2xl border border-[var(--brand-2)]/20 bg-[var(--panel-card)] p-5 shadow-[0_16px_34px_rgb(2_8_20_/_0.55)] transition hover:-translate-y-0.5 hover:border-[var(--brand)]/40 hover:shadow-[0_24px_44px_rgb(3_12_27_/_0.72)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-black text-foreground">{entry.role}</h3>
                  <span className="text-sm font-semibold text-muted">
                    {entry.company}
                  </span>
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
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
