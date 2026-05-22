import type { Project } from "@/features/projects/types";
import { ProjectCard } from "@/features/projects/components/project-card";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
