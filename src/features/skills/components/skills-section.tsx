"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/shared/components/ui/section-title";

type SkillItem = {
  id: string;
  name: string;
  icon: string;
  summary: string;
  highlights: string[];
};

type SkillGroup = {
  title: string;
  description: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, escalables y enfocadas en rendimiento.",
    skills: [
      {
        id: "react",
        name: "React",
        icon: "RC",
        summary:
          "Construyo interfaces por componentes, con estados bien aislados y enfoque en mantenibilidad.",
        highlights: ["Componentes reutilizables", "Estado y efectos", "Buenas practicas de UI"],
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "NX",
        summary:
          "Trabajo con App Router, layouts por rutas y separacion clara entre Server y Client Components.",
        highlights: ["App Router", "Rendering hibrido", "SEO y performance"],
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "TS",
        summary:
          "Uso tipos para reducir errores y escalar codigo con contratos claros entre capas.",
        highlights: ["Tipos de dominio", "Utilidades genericas", "DX y refactor seguro"],
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "TW",
        summary:
          "Diseno interfaces consistentes con sistema visual definido por tokens y clases utilitarias.",
        highlights: ["Diseño responsive", "Tokens visuales", "Componentes consistentes"],
      },
    ],
  },
  {
    title: "Backend",
    description: "Servicios y APIs listos para crecer con el producto.",
    skills: [
      {
        id: "node",
        name: "Node.js",
        icon: "ND",
        summary:
          "Desarrollo servicios para integraciones y flujos de negocio con foco en claridad y evolucion.",
        highlights: ["APIs REST", "Validacion de datos", "Modulos desacoplados"],
      },
      {
        id: "python",
        name: "Python",
        icon: "PY",
        summary:
          "Implemento logica de negocio y tareas de procesamiento en proyectos donde se necesita rapidez.",
        highlights: ["Logica de negocio", "Automatizaciones", "Codigo legible"],
      },
      {
        id: "django",
        name: "Django",
        icon: "DJ",
        summary:
          "He trabajado en backend con Django para exponer servicios y soportar aplicaciones empresariales.",
        highlights: ["Modelado de datos", "Endpoints", "Estructura escalable"],
      },
      {
        id: "dotnet",
        name: "C# / .NET",
        icon: "NT",
        summary:
          "Participo en soluciones corporativas con arquitectura modular y servicios mantenibles.",
        highlights: ["Arquitectura por capas", "Servicios empresariales", "Integracion de sistemas"],
      },
    ],
  },
  {
    title: "Datos e infraestructura",
    description: "Bases de datos y despliegue con enfoque en estabilidad.",
    skills: [
      {
        id: "postgres",
        name: "PostgreSQL",
        icon: "PG",
        summary:
          "Diseno estructuras de datos confiables para aplicaciones de negocio con consultas claras.",
        highlights: ["Modelado relacional", "Consultas optimizadas", "Integridad de datos"],
      },
      {
        id: "docker",
        name: "Docker",
        icon: "DK",
        summary:
          "Empaqueto aplicaciones para estandarizar entornos y facilitar despliegues entre equipos.",
        highlights: ["Contenerizacion", "Entornos repetibles", "Flujos de despliegue"],
      },
      {
        id: "git",
        name: "Git / GitHub",
        icon: "GH",
        summary:
          "Trabajo con control de versiones, ramas de trabajo y colaboracion sobre cambios trazables.",
        highlights: ["Flujo por ramas", "Revision de codigo", "Historial limpio"],
      },
      {
        id: "architecture",
        name: "Arquitectura modular",
        icon: "AR",
        summary:
          "Estructuro proyectos por dominios para acelerar entregas y evitar deuda tecnica temprana.",
        highlights: ["Feature-first", "Separacion por capas", "Escalabilidad"],
      },
    ],
  },
];

export function SkillsSection() {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);

  function toggleSkill(skillId: string) {
    setExpandedSkillId((current) => (current === skillId ? null : skillId));
  }

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Stack y habilidades"
        title="Tecnologias con las que construyo"
        description="Haz click en cada tecnologia para ver como la aplico en proyectos reales."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <article
            key={group.title}
            className="glass-panel reveal-up space-y-4 rounded-2xl p-6"
            style={{ animationDelay: `${150 + groupIndex * 90}ms` }}
          >
            <header className="space-y-2">
              <h3 className="text-lg font-extrabold text-foreground">{group.title}</h3>
              <p className="text-sm text-muted">{group.description}</p>
            </header>

            <ul className="space-y-3">
              {group.skills.map((skill) => {
                const isExpanded = expandedSkillId === skill.id;

                return (
                  <li key={skill.id}>
                    <button
                      type="button"
                      onClick={() => toggleSkill(skill.id)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between gap-3 rounded-xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-3 py-2 text-left transition hover:border-[var(--brand)]/45"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--brand-3)]/45 bg-[var(--brand-3)]/12 text-xs font-extrabold tracking-[0.08em] text-[var(--brand-3)]">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-2)]">
                        {isExpanded ? "Ocultar" : "Ver"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 rounded-xl border border-[var(--brand-2)]/20 bg-[var(--panel-card)] p-3">
                            <p className="text-sm leading-6 text-muted">{skill.summary}</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {skill.highlights.map((highlight) => (
                                <li
                                  key={`${skill.id}-${highlight}`}
                                  className="rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)]"
                                >
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
