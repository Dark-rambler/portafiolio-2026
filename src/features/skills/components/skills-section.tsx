"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/shared/components/ui/section-title";

type SkillIconName =
  | "react"
  | "angular"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "node"
  | "springboot"
  | "python"
  | "django"
  | "dotnet"
  | "postgres"
  | "mongodb"
  | "docker"
  | "git"
  | "architecture";

type SkillItem = {
  id: string;
  name: string;
  icon: SkillIconName;
  summary: string;
  highlights: string[];
  detail: string;
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
        icon: "react",
        summary:
          "Construyo interfaces por componentes, con estados bien aislados y enfoque en mantenibilidad.",
        detail:
          "Lo uso para construir UI reutilizable, separar logica por modulos y mantener una base estable a medida que crece el producto.",
        highlights: ["Componentes reutilizables", "Estado y efectos", "Buenas practicas de UI"],
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "nextjs",
        summary:
          "Trabajo con App Router, layouts por rutas y separacion clara entre Server y Client Components.",
        detail:
          "Me apoyo en su modelo de rendering para combinar SEO, velocidad y una estructura clara de paginas, rutas y componentes.",
        highlights: ["App Router", "Rendering hibrido", "SEO y performance"],
      },
      {
        id: "angular",
        name: "Angular",
        icon: "angular",
        summary:
          "Desarrollo interfaces empresariales con estructura escalable y componentes bien organizados.",
        detail:
          "Lo aplico en proyectos que requieren consistencia de UI, modulos desacoplados y flujos robustos a largo plazo.",
        highlights: ["Arquitectura modular", "Componentes reutilizables", "Flujos empresariales"],
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "typescript",
        summary:
          "Uso tipos para reducir errores y escalar codigo con contratos claros entre capas.",
        detail:
          "Defino tipos de dominio para que frontend y servicios hablen el mismo lenguaje, facilitando cambios sin romper flujos existentes.",
        highlights: ["Tipos de dominio", "Utilidades genericas", "DX y refactor seguro"],
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "tailwind",
        summary:
          "Diseno interfaces consistentes con sistema visual definido por tokens y clases utilitarias.",
        detail:
          "Lo combino con variables CSS para mantener una identidad visual coherente en cada seccion y tema del portfolio.",
        highlights: ["Diseno responsive", "Tokens visuales", "Componentes consistentes"],
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
        icon: "node",
        summary:
          "Desarrollo servicios para integraciones y flujos de negocio con foco en claridad y evolucion.",
        detail:
          "Lo utilizo para construir APIs y automatizaciones que conectan frontend, datos y procesos operativos sin acoplar capas.",
        highlights: ["APIs REST", "Validacion de datos", "Modulos desacoplados"],
      },
      {
        id: "python",
        name: "Python",
        icon: "python",
        summary:
          "Implemento logica de negocio y tareas de procesamiento en proyectos donde se necesita rapidez.",
        detail:
          "Me funciona para resolver flujos de backend de forma agil cuando el proyecto requiere productividad y claridad del codigo.",
        highlights: ["Logica de negocio", "Automatizaciones", "Codigo legible"],
      },
      {
        id: "django",
        name: "Django",
        icon: "django",
        summary:
          "He trabajado en backend con Django para exponer servicios y soportar aplicaciones empresariales.",
        detail:
          "Lo aplico cuando se necesita una base robusta para modelos, administracion y endpoints con buenas practicas por defecto.",
        highlights: ["Modelado de datos", "Endpoints", "Estructura escalable"],
      },
      {
        id: "springboot",
        name: "Spring Boot",
        icon: "springboot",
        summary:
          "He participado en backends empresariales con Java y Spring Boot para servicios de negocio.",
        detail:
          "Lo utilizo cuando se necesita una base solida para APIs, integraciones y mantenimiento en entornos corporativos.",
        highlights: ["Servicios REST", "Arquitectura empresarial", "Integraciones"],
      },
      {
        id: "dotnet",
        name: "C# / .NET",
        icon: "dotnet",
        summary:
          "Participo en soluciones corporativas con arquitectura modular y servicios mantenibles.",
        detail:
          "He colaborado en ecosistemas enterprise donde la trazabilidad, la estabilidad y la separacion por capas son clave.",
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
        icon: "postgres",
        summary:
          "Diseno estructuras de datos confiables para aplicaciones de negocio con consultas claras.",
        detail:
          "Trabajo su modelado para mantener consistencia entre entidades y soportar crecimiento sin perder orden en la informacion.",
        highlights: ["Modelado relacional", "Consultas optimizadas", "Integridad de datos"],
      },
      {
        id: "docker",
        name: "Docker",
        icon: "docker",
        summary:
          "Empaqueto aplicaciones para estandarizar entornos y facilitar despliegues entre equipos.",
        detail:
          "Lo uso para evitar diferencias entre local y produccion, y para simplificar la puesta en marcha de servicios.",
        highlights: ["Contenerizacion", "Entornos repetibles", "Flujos de despliegue"],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "mongodb",
        summary:
          "Trabajo con modelos orientados a documentos para escenarios donde se necesita flexibilidad de datos.",
        detail:
          "Lo uso en productos con estructuras cambiantes y lectura/escritura agil, manteniendo claridad en colecciones y consultas.",
        highlights: ["Modelo documental", "Consultas flexibles", "Escenarios dinamicos"],
      },
      {
        id: "git",
        name: "Git / GitHub",
        icon: "git",
        summary:
          "Trabajo con control de versiones, ramas de trabajo y colaboracion sobre cambios trazables.",
        detail:
          "Mantengo historial limpio y revisiones efectivas para que cada cambio sea facil de entender y mantener en equipo.",
        highlights: ["Flujo por ramas", "Revision de codigo", "Historial limpio"],
      },
      {
        id: "architecture",
        name: "Arquitectura modular",
        icon: "architecture",
        summary:
          "Estructuro proyectos por dominios para acelerar entregas y evitar deuda tecnica temprana.",
        detail:
          "Defino limites entre features, shared y app para que el crecimiento sea ordenado y el mantenimiento mas predecible.",
        highlights: ["Feature-first", "Separacion por capas", "Escalabilidad"],
      },
    ],
  },
];

const cardSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.75,
} as const;

const overlayFade = {
  duration: 0.26,
  ease: "easeOut",
} as const;

const modalContent = {
  hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.24,
      ease: "easeOut",
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(2px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
} as const;

const modalItem = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as const;

function SkillIcon({ icon }: { icon: SkillIconName }) {
  const iconClassName = "h-4 w-4";

  if (icon === "react") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (icon === "angular") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 3.9 19.4 6.6l-1.1 9.2L12 20.1 5.7 15.8 4.6 6.6 12 3.9Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 6.9 8.7 14.6h1.7l.7-1.8h2l.7 1.8h1.7L12 6.9Zm-.2 4.7.9-2.2.8 2.2h-1.7Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "nextjs") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 16V8l8 8V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "typescript") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <rect x="4.5" y="4.5" width="15" height="15" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.4 9.5h7.2M12 9.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15.2 13.8c.2 1 1 1.5 1.9 1.5.8 0 1.4-.4 1.4-1 0-.8-.8-1-1.6-1.2-.8-.2-1.7-.6-1.7-1.6 0-1 .9-1.7 2-1.7.9 0 1.7.3 2.1 1.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M6 10.8c1-2 2.2-2.8 3.9-2.8 2.5 0 2.8 2 4.1 2 1 0 1.7-.5 2.4-1.5-.9 2-2.1 2.8-3.8 2.8-2.5 0-2.8-2-4.2-2-1 0-1.7.5-2.4 1.5Zm3.8 4.1c1-2 2.2-2.8 3.9-2.8 2.5 0 2.8 2 4.1 2 1 0 1.7-.5 2.4-1.5-.9 2-2.1 2.8-3.8 2.8-2.5 0-2.8-2-4.2-2-1 0-1.7.5-2.4 1.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "node") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 3.8 18.8 7.7v8.6L12 20.2 5.2 16.3V7.7L12 3.8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.6 9.6v4.8m4.8-4.8v4.8m-4.8-2.4h4.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "springboot") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M5.8 14.8c0 2.5 2.7 4.6 6.2 4.6 3.5 0 6.2-2.1 6.2-4.6 0-2.3-2.2-4.2-5.2-4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12.1 7.3c-.1 1.5.7 2.4 1.9 3.2 1.6 1 2.7 2 2.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M9.3 8.1c1.4-.8 2.8-1.2 4.1-1.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="8.1" cy="14.4" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "python") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 4.8H9c-2 0-3.2 1.1-3.2 3v2.1h6.2c1.6 0 2.8 1 2.8 2.5v2.1H11c-2.1 0-3.6 1.1-3.6 3v1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 19.2h3c2 0 3.2-1.1 3.2-3v-2.1H12c-1.6 0-2.8-1-2.8-2.5V9.5H13c2.1 0 3.6-1.1 3.6-3V5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9.4" cy="7.5" r="0.8" fill="currentColor" />
        <circle cx="14.6" cy="16.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "django") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <rect x="4.5" y="4.5" width="15" height="15" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.8 8.8v6.4h2.2c2 0 3.2-1.3 3.2-3.2 0-1.9-1.2-3.2-3.2-3.2H8.8Zm6.1 0h1.8v5.1c0 1.4-.9 2.5-2.4 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "dotnet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M5 8.2 12 4l7 4.2v7.6L12 20l-7-4.2V8.2Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.5 14.8V9.2h2.1c1.7 0 2.8 1.1 2.8 2.8s-1.1 2.8-2.8 2.8H8.5Zm6.2 0V9.2h1.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "postgres") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 4.8c-3.1 0-5 2.2-5 4.9v5c0 1.7 1.3 2.9 3.1 2.9h.9v1.7c0 .5.5.8 1 .6l2-.9c.4-.2.7-.6.7-1.1v-2.1c1.5-.3 2.3-1.4 2.3-2.8v-3.3c0-2.8-1.9-4.9-5-4.9Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10.3" cy="10" r="0.8" fill="currentColor" />
        <circle cx="13.9" cy="10" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 4.4c2 2 3.2 4.8 3.2 7.7 0 3.4-1.3 6.1-3.2 7.5-1.9-1.4-3.2-4.1-3.2-7.5 0-2.9 1.2-5.7 3.2-7.7Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 6.3v12.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 11.7c.9-.8 1.8-1.4 2.6-1.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "docker") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <rect x="5" y="10" width="2.5" height="2.5" fill="currentColor" />
        <rect x="8" y="10" width="2.5" height="2.5" fill="currentColor" />
        <rect x="11" y="10" width="2.5" height="2.5" fill="currentColor" />
        <rect x="14" y="10" width="2.5" height="2.5" fill="currentColor" />
        <rect x="8" y="7" width="2.5" height="2.5" fill="currentColor" />
        <rect x="11" y="7" width="2.5" height="2.5" fill="currentColor" />
        <path d="M5 13.4h10.9c1.8 0 3-.8 3.7-2.4.8.2 1.5 0 2-.4-.1 1.8-1.2 4.6-5 4.6H9.6c-2.5 0-4-1-4.6-1.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "git") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 4 20 12 12 20 4 12 12 4Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
        <path d="M10 11l1-1m2 1-1-1m-1 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
      <path d="M4 17.8 12 4l8 13.8H4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 8.8v5.4m-2.8 1.5h5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function SkillsSection() {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const allSkills = skillGroups.flatMap((group) =>
    group.skills.map((skill) => ({ id: skill.id, name: skill.name })),
  );

  let activeSkill:
    | (SkillItem & {
        groupTitle: string;
      })
    | null = null;

  if (activeSkillId) {
    for (const group of skillGroups) {
      const skill = group.skills.find((item) => item.id === activeSkillId);

      if (skill) {
        activeSkill = { ...skill, groupTitle: group.title };
        break;
      }
    }
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSkillId(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!activeSkillId) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSkillId]);

  return (
    <section id="skills" className="space-y-8">
      <SectionTitle
        eyebrow="Stack y habilidades"
        title="Tecnologias con las que construyo"
        description="Presiona una tecnologia y se abrira una tarjeta dinamica con detalles de mi experiencia."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <article
            key={group.title}
            className="glass-panel tech-detail reveal-up space-y-4 rounded-2xl p-6"
            style={{ animationDelay: `${150 + groupIndex * 90}ms` }}
          >
            <header className="space-y-2">
              <h3 className="text-lg font-extrabold text-foreground">{group.title}</h3>
              <p className="text-sm text-muted">{group.description}</p>
            </header>

            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.id}>
                  <motion.button
                    type="button"
                    onClick={() => setActiveSkillId(skill.id)}
                    layoutId={`skill-trigger-${skill.id}`}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ y: 0, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl border border-[var(--brand-2)]/25 bg-[var(--panel-soft)] px-3 py-2 text-left shadow-[0_10px_20px_rgb(2_8_20_/_0.2)] transition hover:border-[var(--brand)]/45"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_50%,rgb(0_209_255_/_0.14),transparent_54%)] opacity-0 transition group-hover:opacity-100"
                    />
                    <span className="relative z-10 flex items-center gap-2.5">
                      <motion.span
                        layoutId={`skill-icon-${skill.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--brand-3)]/45 bg-[var(--brand-3)]/12 text-xs font-extrabold tracking-[0.08em] text-[var(--brand-3)] transition group-hover:border-[var(--brand)]/55 group-hover:text-[var(--brand)]"
                      >
                        <SkillIcon icon={skill.icon} />
                      </motion.span>
                      <motion.span
                        layoutId={`skill-name-${skill.id}`}
                        className="text-sm font-semibold text-foreground"
                      >
                        {skill.name}
                      </motion.span>
                    </span>
                    <motion.span
                      className="relative z-10 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-2)]"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      Abrir
                    </motion.span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeSkill ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayFade}
          >
            <motion.div
              className="absolute inset-0 bg-[rgb(4_9_18_/_0.72)] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={overlayFade}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgb(0_209_255_/_0.16),transparent_42%),radial-gradient(circle_at_18%_76%,rgb(29_245_195_/_0.12),transparent_40%)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            />
            <button
              type="button"
              aria-label="Cerrar detalle"
              className="absolute inset-0"
              onClick={() => setActiveSkillId(null)}
            />

            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={`Detalle de ${activeSkill.name}`}
              initial={{ y: 56, scale: 0.94, opacity: 0, rotateX: -5 }}
              animate={{ y: 0, scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ y: 34, scale: 0.98, opacity: 0, rotateX: -3 }}
              transition={cardSpring}
              className="tech-detail relative z-10 w-full max-w-2xl rounded-3xl border border-[var(--brand-2)]/35 bg-[var(--panel-card)] p-6 shadow-[0_28px_60px_rgb(1_7_19_/_0.72)] sm:p-7"
              style={{ transformPerspective: 1200 }}
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--brand)]/18 blur-3xl"
                animate={{ scale: [0.92, 1.06, 0.96], opacity: [0.52, 0.78, 0.58] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.id}
                  variants={modalContent}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="relative"
                >
                  <motion.header
                    variants={modalItem}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <motion.span
                        layoutId={`skill-icon-${activeSkill.id}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-3)]/45 bg-[var(--brand-3)]/12 text-sm font-extrabold tracking-[0.08em] text-[var(--brand-3)]"
                      >
                        <SkillIcon icon={activeSkill.icon} />
                      </motion.span>
                      <motion.p
                        variants={modalItem}
                        className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-2)]"
                      >
                        {activeSkill.groupTitle}
                      </motion.p>
                      <motion.h3
                        layoutId={`skill-name-${activeSkill.id}`}
                        className="text-2xl font-black tracking-tight text-foreground"
                      >
                        {activeSkill.name}
                      </motion.h3>
                    </div>

                    <motion.button
                      variants={modalItem}
                      type="button"
                      onClick={() => setActiveSkillId(null)}
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0, scale: 0.98 }}
                      className="rounded-xl border border-[var(--brand-2)]/35 bg-[var(--panel-soft)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-2)] transition hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
                    >
                      Cerrar
                    </motion.button>
                  </motion.header>

                  <motion.p variants={modalItem} className="mt-4 text-sm leading-7 text-muted">
                    {activeSkill.summary}
                  </motion.p>
                  <motion.p variants={modalItem} className="mt-3 text-sm leading-7 text-muted">
                    {activeSkill.detail}
                  </motion.p>

                  <motion.ul variants={modalItem} className="mt-5 flex flex-wrap gap-2">
                    {activeSkill.highlights.map((highlight, index) => (
                      <motion.li
                        key={`${activeSkill.id}-${highlight}`}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 0.24 + index * 0.06,
                          duration: 0.24,
                          ease: "easeOut",
                        }}
                        className="rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div variants={modalItem} className="mt-6 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                      Explorar otra tecnologia
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allSkills.map((skillOption) => {
                        const isCurrent = skillOption.id === activeSkill.id;

                        return (
                          <motion.button
                            key={skillOption.id}
                            type="button"
                            onClick={() => setActiveSkillId(skillOption.id)}
                            whileHover={isCurrent ? undefined : { y: -1 }}
                            whileTap={isCurrent ? undefined : { y: 0, scale: 0.98 }}
                            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                              isCurrent
                                ? "border-[var(--brand)]/45 bg-[var(--brand)]/16 text-[var(--brand)]"
                                : "border-[var(--brand-2)]/28 bg-[var(--panel-soft)] text-muted hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
                            }`}
                            disabled={isCurrent}
                          >
                            {skillOption.name}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
