"use client";

import { motion } from "framer-motion";
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

      <motion.div
        className="glass-panel rounded-3xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.p
          className="max-w-3xl text-sm leading-7 text-muted sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
        >
          Trabajo con enfoque en arquitectura, rendimiento y experiencia de
          usuario. Me gusta transformar requerimientos complejos en soluciones
          claras, medibles y listas para evolucionar en produccion.
        </motion.p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] p-4"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.42, delay: 0.12 + index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-[var(--brand-3)]">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
