import { useEffect, useState }  from "react";
import { useParams }            from "react-router-dom";
import { projectsService }      from "@/features/projects/services/ProjectService";
import type { Project } from "../interfaces/project.interface";

export const useProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectDetails();
  }, [slug]);


  const fetchProjectDetails = async () => {
    if (!slug) return;
    setLoading(true);
    const response = await projectsService.getBySlug(slug);
    console.log(response);
    if (response) setProject(response);
    setLoading(false);
  };

  return {
    project,
    loading,
  };
};