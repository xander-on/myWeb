import { useEffect, useState }  from "react";
import { projectsService }      from "@/features/projects/services/ProjectService";
import type { Project } from "../interfaces/project.interface";

export const useGetProject = (slug: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProject();
  }, [slug]);


  const getProject = async () => {
    if (!slug) return;
    setLoading(true);
    const response = await projectsService.getBySlug(slug);
    if (response) setProject(response);
    setLoading(false);
  };

  return {
    project,
    loading,
  };
};