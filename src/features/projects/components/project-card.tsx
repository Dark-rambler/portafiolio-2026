"use client";

import { motion } from "framer-motion";
import type { Project } from "@/features/projects/types";
import { formatDate } from "@/shared/lib/format-date";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="glass-panel tech-detail space-y-4 rounded-2xl p-6"
      initial={{ opacity: 0, y: 26, scale: 0.985, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.44, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.004 }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-extrabold text-foreground">{project.title}</h3>
        <span className="rounded-full border border-[var(--brand-2)]/30 bg-[var(--brand-2)]/12 px-2 py-1 text-xs font-semibold text-[var(--brand-2)]">
          {formatDate(project.publishedAt)}
        </span>
      </div>

      <p className="text-sm leading-6 text-muted">{project.summary}</p>

      <ul className="flex flex-wrap gap-2 text-xs font-semibold text-foreground">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--brand-3)]/45 bg-[var(--panel-soft)] px-3 py-1 text-[var(--brand-3)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
