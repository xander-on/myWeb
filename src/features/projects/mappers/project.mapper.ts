import { envs } from "@/config/envs";
import type { ProjectResponse } from "../interfaces/project.response";
import type { Project } from "../interfaces/project.interface";



export class ProjectMapper{

  static fromResponseToProject(project:ProjectResponse):Project{
    console.log("maper", project);
    return {
      ...project,
      id      : project.documentId,
      tags    : project.tags.map(t => t.nombre),
      cover   : `${envs.strapi}${project.cover.url}`,
      gallery : project.gallery.map(img => `${envs.strapi}${img.url}`)
    }
  }
}