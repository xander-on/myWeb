import { useEffect, useState } from "react";
import { projectsService }     from "@/features/projects/services/ProjectService";
import type { ProjectResponse }        from "@/features/projects/types/projectResponse";
import { ProjectCard } from "@/features/projects/components";
// import { Placeholder } from "react-bootstrap";

export const ProjectsPage = () => {

  useEffect(() => {
    getProjects();
  }, []);

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const responseProjects = await projectsService.getAll();
    setProjects(responseProjects);
  }

  return (
    <div className="row d-flex">

      <div className="col-3 mr-1">
        {/* <ProjectsSearch /> */}
      </div>

      <div className="col-9">

        <h3 className="my-4 text-center">Projects</h3>
        <div className="row d-flex gap-3">

          {/* { !projects.length && <ProjectCardSkeleton repeat={6}/>} */}

          {
            projects?.map(
              (project: ProjectResponse) => <ProjectCard key={project.documentId} project={project}/>
            )
          }
        </div>
      </div>
      
    </div>
  )
}



// const ProjectCardSkeleton = ( { repeat }: { repeat: number }) => {
//   return (
//     <>
//       {Array.from({ length: repeat }).map((_, index) => (

//         <Placeholder key={index} className="col-4 col-xl-3 project-card" animation="glow"> 
//           <Placeholder xs={12} style={{ height: '450px' }} />
//         </Placeholder>
//       ))}
//     </>
//   )
// }