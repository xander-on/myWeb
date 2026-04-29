
import { useEffect, useState } from 'react'
import { projectsService }     from '@/features/projects/services/ProjectService';
import type { Project }        from '@/features/projects/interfaces/project.interface';

export const useGetProjects = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

    const getProjects = async () => {
      setLoading(true);
      const responseProjects = await projectsService.getAll();
      setProjects(responseProjects || []);
      setLoading(false);
    }

  return {
    projects,
    loading
  }
}


