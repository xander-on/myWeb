
import { useEffect, useState } from 'react'
import { getProjectsAction }    from '@/modules/projects/application/actions/getProjects.action';
import type { Project }         from '@/modules/projects/domain/entities/project.entity';

export const useGetProjects = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

    const getProjects = async () => {
      setLoading(true);
      const responseProjects = await getProjectsAction();
      setProjects(responseProjects || []);
      setLoading(false);
    }

  return {
    projects,
    loading
  }
}


