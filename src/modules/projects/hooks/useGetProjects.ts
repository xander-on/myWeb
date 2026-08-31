import { useEffect, useState } from "react";
import { getProjectsAction } from "@/modules/projects/actions/getProjects.action";
import type { Project } from "@/modules/projects/interfaces/project.entity";

export const useGetProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    setLoading(true);
    const response = await getProjectsAction();
    if (!response) return;
    setProjects(response);
    setLoading(false);
  };

  return {
    projects,
    loading,
  };
};
