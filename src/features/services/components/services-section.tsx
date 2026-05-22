"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/shared/components/ui/section-title";

type ClientType = "all" | "startup" | "enterprise" | "personal-brand";

const services = [
  {
    title: "Landing pages con conversion",
    summary:
      "Paginas enfocadas en claridad de oferta, velocidad de carga y llamadas a la accion que convierten.",
    deliverables: ["UI responsive", "SEO tecnico", "Integracion de formularios"],
    targets: ["startup", "personal-brand"],
  },
  {
    title: "Aplicaciones web a medida",
    summary:
      "Desarrollo de productos desde cero con estructura modular, componentes reutilizables y base lista para escalar.",
    deliverables: ["Arquitectura feature-first", "Flujos de usuario", "Modulos desacoplados"],
    targets: ["startup", "enterprise"],
  },
  {
    title: "Refactor y mejora tecnica",
    summary:
      "Optimizo proyectos existentes para reducir deuda tecnica, mejorar rendimiento y facilitar mantenimiento.",
    deliverables: ["Limpieza de codigo", "Mejoras de performance", "Estandares de calidad"],
    targets: ["enterprise", "startup"],
  },
  {
    title: "Acompanamiento continuo",
    summary:
      "Soporte evolutivo para priorizar mejoras, liberar nuevas funcionalidades y mantener estabilidad en produccion.",
    deliverables: ["Roadmap tecnico", "Iteraciones cortas", "Monitoreo de cambios"],
    targets: ["enterprise", "personal-brand"],
  },
] as const;

const clientFilters: Array<{ value: ClientType; label: string }> = [
  { value: "all", label: "Todos" },
  { value: "startup", label: "Startup" },
  { value: "enterprise", label: "Empresa" },
  { value: "personal-brand", label: "Marca personal" },
];

export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<ClientType>("all");

  const visibleServices = services.filter((service) => {
    if (activeFilter === "all") {
      return true;
    }

    return service.targets.includes(activeFilter);
  });

  return (
    <section id="servicios" className="space-y-8">
      <SectionTitle
        eyebrow="Servicios"
        title="Como puedo ayudarte"
        description="Trabajo con enfoque en impacto de negocio, calidad tecnica y experiencia de usuario en cada entrega."
      />

      <div className="reveal-up flex flex-wrap gap-2">
        {clientFilters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`relative rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.11em] transition ${
                isActive
                  ? "border-[var(--brand)]/45 text-[var(--brand)]"
                  : "border-[var(--brand-2)]/35 bg-[var(--panel-soft)] text-[var(--brand-2)] hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="service-filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--brand)]/12"
                  transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.65 }}
                />
              ) : null}
              <span className="relative z-10">{filter.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleServices.map((service, index) => (
            <motion.article
              key={`${activeFilter}-${service.title}`}
              layout
              initial={{ opacity: 0, y: 26, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 14, scale: 0.98, filter: "blur(2px)" }}
              transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
              className="glass-panel tech-detail group relative overflow-hidden space-y-4 rounded-2xl p-6"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] opacity-0 transition group-hover:opacity-100"
              />

              <h3 className="text-xl font-extrabold text-foreground">{service.title}</h3>
              <p className="text-sm leading-6 text-muted">{service.summary}</p>

              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={`${service.title}-${item}`}
                    className="rounded-full border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)] transition group-hover:border-[var(--brand)]/45 group-hover:text-[var(--brand)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}
