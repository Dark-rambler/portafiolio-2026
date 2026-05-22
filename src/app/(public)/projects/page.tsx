import { ProjectGrid } from "@/features/projects/components/project-grid";
import { getProjects } from "@/features/projects/services/get-projects";
import { SectionTitle } from "@/shared/components/ui/section-title";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Trabajo"
        title="Proyectos"
        description="Una vista dedicada a mis proyectos y resultados como ingeniero de software."
      />
      <div className="reveal-up delay-1">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
