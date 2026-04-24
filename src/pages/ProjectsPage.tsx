import { ProjectCard }         from "@/features/projects/components";
import { ProjectCardSkeleton } from "@/features/projects/components/ProjectCardSkeleton";
import { useGetProjects }      from "@/features/projects/hooks/useGetProjects";

export const ProjectsPage = () => {
  const { projects, loading } = useGetProjects();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* SIDEBAR */}
      <aside className="lg:col-span-2">
        {/* <ProjectsSearch /> */}
      </aside>

      {/* MAIN */}
      <section className="lg:col-span-10">

        <h3 className="my-4 text-center text-xl font-heading">
          Projects
        </h3>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

          {/* SKELETON */}
          { loading && <ProjectCardSkeleton repeat={6} />}

          {/* CARDS */}
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>
      </section>

    </div>
  );
};
