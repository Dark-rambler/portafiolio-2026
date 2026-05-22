"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { experienceData } from "@/features/experience/services/experience-data";
import { projectsData } from "@/features/projects/services/projects-data";
import { SectionTitle } from "@/shared/components/ui/section-title";

const uniqueTechnologies = new Set(experienceData.flatMap((item) => item.stack)).size;
const activeEngagements = experienceData.filter((item) =>
  item.period.toLowerCase().includes("actualmente"),
).length;

const measurableResults = [
  {
    value: experienceData.length,
    suffix: "+",
    label: "Experiencias ejecutadas",
    detail: "Proyectos y equipos donde participe en implementacion real.",
  },
  {
    value: uniqueTechnologies,
    suffix: "+",
    label: "Tecnologias aplicadas",
    detail: "Stack usado en frontend, backend, datos e infraestructura.",
  },
  {
    value: projectsData.length,
    suffix: "+",
    label: "Casos documentados",
    detail: "Proyectos estructurados y publicados dentro del portfolio.",
  },
  {
    value: activeEngagements,
    suffix: "+",
    label: "Iniciativas activas",
    detail: "Trabajo continuo en productos con evolucion iterativa.",
  },
] as const;

function AnimatedMetricValue({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      delay,
      duration: 1.05,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [delay, isInView, value]);

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function MeasurableResultsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Resultados medibles"
        title="Impacto respaldado por datos"
        description="Metricas calculadas con base en experiencias y proyectos presentados en este portfolio."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {measurableResults.map((metric, index) => (
          <motion.article
            key={metric.label}
            className="glass-panel tech-detail group relative overflow-hidden space-y-3 rounded-2xl p-5"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.42, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -2 }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)] opacity-0 transition group-hover:opacity-100"
            />
            <p className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              <AnimatedMetricValue
                value={metric.value}
                suffix={metric.suffix}
                delay={0.08 + index * 0.12}
              />
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-3)]">
              {metric.label}
            </p>
            <p className="text-sm leading-6 text-muted">{metric.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
