import { projectsData } from "@/features/projects/services/projects-data";
import type { GetProjectsOptions, Project } from "@/features/projects/types";

export async function getProjects(
  options: GetProjectsOptions = {},
): Promise<Project[]> {
  const { featuredOnly = false } = options;

  if (featuredOnly) {
    return projectsData.filter((project) => project.featured);
  }

  return projectsData;
}
