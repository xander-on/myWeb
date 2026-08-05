import { getProjectsAction } from "./getProjects.action";
import type { Project } from "@/modules/projects/domain/entities/project.entity";

export const getProjectBySlugAction = async (slug: string): Promise<Project | null> => {
  const filters = {
    slug: {
      eq: slug
    }
  }

  const response = await getProjectsAction(filters);
  if (!response) return null;

  return response[0];
}
