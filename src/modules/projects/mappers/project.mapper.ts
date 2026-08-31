import { envs } from "@/config/envs";
import type { ProjectResponse } from "@/modules/projects/interfaces/project.response";
import type { Project } from "@/modules/projects/interfaces/project.entity";



export class ProjectMapper{

  static fromResponseToProject(project:ProjectResponse):Project{
    return {
      ...project,
      id      : project.documentId,
      tags    : project.tags.map(t => t.nombre),
      cover   : `${envs.strapi}${project.cover.url}`,
      gallery : project.gallery.map(img => `${envs.strapi}${img.url}`)
    }
  }
}