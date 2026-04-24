import axios     from "axios";
import { envs } from "@/config/envs";
import { ProjectMapper } from "../mappers/project.mapper";

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
    const response = await axios.post(envs.strapiGraphql, { query, variables }); 
    if(response.status !== 200) return null;

    const data = response.data.data.projects;
    if(!data) return null;

    const mappedData = data.map((project: any) => ProjectMapper.fromResponseToProject(project));
    return mappedData;

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
  const project = response[0];
  return project;
}


export const projectsService = {
  getAll,
  getBySlug
}