import { envs } from "@/config/envs";
import type { ProjectResponse } from "@/modules/projects/infrastructure/interfaces/project.response";
import type { Project } from "@/modules/projects/domain/entities/project.entity";



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