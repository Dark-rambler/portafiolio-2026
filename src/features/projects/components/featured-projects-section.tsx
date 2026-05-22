import { ProjectGrid } from "@/features/projects/components/project-grid";
import type { Project } from "@/features/projects/types";
import { SectionTitle } from "@/shared/components/ui/section-title";

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section id="proyectos" className="space-y-8">
      <SectionTitle
        eyebrow="Trabajo destacado"
        title="Proyectos destacados"
        description="Cada modulo mantiene su logica, servicios y componentes organizados para facilitar el crecimiento del producto."
      />
      <ProjectGrid projects={projects} />
    </section>
  );
}
