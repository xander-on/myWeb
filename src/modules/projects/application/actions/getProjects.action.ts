import { strapiApi } from "@/config/api/strapiApi";
import { ProjectMapper } from "@/modules/projects/infrastructure/mappers/project.mapper";
import type { Project } from "@/modules/projects/domain/entities/project.entity";
import type { ProjectResponse } from "@/modules/projects/infrastructure/interfaces/project.response";

type GraphQLResponse = {
  data: {
    projects: ProjectResponse[];
  };
};

export const getProjectsAction = async (fieldFilters = {}): Promise<Project[] | null> => {

  const query = `
    query Projects(
      $filters: ProjectFiltersInput
    ) {
      projects(filters: $filters) {
        documentId
        name
        slug
        description
        appType
        urlPreview
        cover{
          url
        }
        gallery {
          url
        }
        tags {
          nombre
        }
      }
    }
  `;

  const variables = {
    filters: {
      ...fieldFilters
    }
  }

  try {
    const response = await strapiApi.post<GraphQLResponse>("", { query, variables });
    if (response.status !== 200) return null;

    const projects = response.data.data.projects;
    if (!projects) return null;

    return projects.map(project => ProjectMapper.fromResponseToProject(project));

  } catch (error) {
    console.log('error al cargar los proyectos', error);
    return null;
  }
}
