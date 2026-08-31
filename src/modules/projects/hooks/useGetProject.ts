import { useEffect, useState } from "react";
import { getProjectBySlugAction } from "@/modules/projects/actions/getProjectBySlug.action";
import type { Project } from "@/modules/projects/interfaces/project.entity";

export const useGetProject = (slug: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProject();
  }, [slug]);

  const getProject = async () => {
    if (!slug) return;
    setLoading(true);
    const response = await getProjectBySlugAction(slug);
    if (response) setProject(response);
    setLoading(false);
  };

  return {
    project,
    loading,
  };
};
