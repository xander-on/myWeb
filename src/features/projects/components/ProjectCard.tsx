import type { ProjectResponse } from "@/features/projects/types/projectResponse";
import { envs }   from "@/config/envs";
import { capitalizeFirst, truncateText } from "@/shared/utils";
import { Tag } from "@/shared/components";
import { Link } from "react-router-dom";
// import './ProjectCard.css';


type Props = {
  project: ProjectResponse;
};

export const ProjectCard = ({project}: Props) => {

  const { slug, name, description, cover, appType, tags } = project;

  return (

    <>
      <div className="col-3 col-xl-4 project-card">

        <div className="image">
          <img 
            src={ envs.strapi + cover?.url} 
            alt={name} 
          />
        </div>
      
        <div className="project-card-description">

          <div className='tags'>
            { tags.map(
              (t) => <Tag key={ t.nombre } nameTech={ t.nombre }/>
            )}
          </div>

          <div className="name">
            <span>{ name }</span> 
            <span style={{ color:"var(--text)", fontSize:"14px" }}> 
              { ` / ${ capitalizeFirst(appType)}` }
            </span>
          </div>

          <div className='description mb-3'>
            { truncateText( description, 100 ) }
          </div>
          
          <div className='mb-2'>
            <Link
              className="custom-btn"  
              to={`/projects/${slug}`}
            >View More</Link>
          </div>

        </div>
      </div>
    </>

  )
}





