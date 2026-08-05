

import { Link }         from "react-router-dom";
import { AccordeonItem } from "@/modules/shared/presentation/components/AccordeonItem";
import { projects } from "@/modules/cv/domain/data/cvProjectsData";

export const CvProjects = () => {

  const { profesionales } = projects;

  return (
    <AccordeonItem id="proyectos" title={`👨‍💻 PROYECTOS`}>
      <div>
        <div className=" mx-2 my-4 m-sm-4">
          {
            profesionales.map( ({ name, description, link }) => 
              <div key={name} className="mx-2 my-3 m-sm-4">
                <h6 className="text-lg col-12 col-md-3">{ name }</h6>

                <ul className="mx-md-2 mx-lg-4 mb-1 list-disc pl-4">
                  {
                    description.map( (d, i) => 
                      <li key={ i }>{ d }</li>
                    )
                  }
                  {
                    link && 
                    <li >Web : 
                      <Link 
                        to     = { link } 
                        rel    = "noreferrer" 
                        target = "_blank"
                        className="text-main"
                      >
                        { link }
                      </Link>
                    </li>
                  }
                </ul>
              </div>
            )
          }
          
        </div>
      </div>
      
        
    </AccordeonItem>
  );
}
