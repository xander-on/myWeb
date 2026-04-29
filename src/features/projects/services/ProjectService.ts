import axios     from "axios";
import { envs } from "@/config/envs";
import { ProjectMapper } from "../mappers/project.mapper";
import type { ProjectResponse } from "../interfaces/project.response";


type GraphQLResponse = {
  data: {
    projects: ProjectResponse[];
  };
};

const getAll = async (fieldFilters = {}) => {

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

  try{
    const response = await axios.post<GraphQLResponse>(envs.strapiGraphql, { query, variables }); 
    if(response.status !== 200) return null;

    const projects = response.data.data.projects;
    if(!projects) return null;

    const projectsMapped = projects.map(project => ProjectMapper.fromResponseToProject(project));
    return projectsMapped;

  }catch(error){
    console.log('error al cargar los proyectos', error);
    return null;
  }
}



const getBySlug = async (slug: string) => {
  const filters = {
    slug: {
      eq: slug
    }
  }
  
  const response = await getAll(filters);
  if(!response) return null;

  return response[0];
}


export const projectsService = {
  getAll,
  getBySlug
}