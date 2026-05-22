"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/shared/components/ui/section-title";
import { siteConfig } from "@/shared/config/site";

export function ContactCta() {
  return (
    <section id="contacto" className="space-y-8">
      <SectionTitle
        eyebrow="Contacto"
        title="Construyamos algo increible"
        description="Cuentame tu idea o necesidad. Te respondo con una propuesta clara enfocada en impacto real."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <motion.article
          className="glass-panel tech-detail group relative h-fit overflow-hidden space-y-5 rounded-3xl p-6 sm:p-7"
          initial={{ opacity: 0, x: -24, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] opacity-0 transition group-hover:opacity-100"
          />
          <p className="text-sm leading-7 text-muted">
            Trabajo en productos web modernos, escalables y orientados a
            resultados. Si ya tienes una base creada, tambien te ayudo a mejorar
            arquitectura, performance y experiencia de usuario.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--brand-3)]">
                Correo directo
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-1 block max-w-full break-all text-sm font-semibold leading-6 text-foreground transition hover:text-[var(--brand)]"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--brand-3)]">
                Tiempo de respuesta
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                24 - 48 horas habiles
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)]">
              Propuesta tecnica
            </li>
            <li className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)]">
              Estimacion realista
            </li>
            <li className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)]">
              Enfoque a resultados
            </li>
          </ul>
        </motion.article>

        <motion.article
          className="glass-panel tech-detail h-fit space-y-4 rounded-3xl p-6 sm:p-7"
          initial={{ opacity: 0, x: 24, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.52, delay: 0.08, ease: "easeOut" }}
        >
          <p className="text-sm leading-7 text-muted">
            Escribeme por el canal que prefieras con el contexto de tu
            proyecto. Te respondo con una ruta clara de trabajo y siguientes
            pasos.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-4 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
            >
              Enviar correo
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-4 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
            >
              Ir a LinkedIn
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
