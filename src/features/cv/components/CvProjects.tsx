

import { Link }         from "react-router-dom";
import { AccordeonItem } from "@/shared/components";
import { projects } from "../data/cvProjectsData";

export const CvProjects = () => {

  const { profesionales, personales } = projects;

  return (
    <AccordeonItem id="proyectos" title={`👨‍💻 PROYECTOS`}>
      <div>
        <h5>Participacion en proyectos</h5>

        <div className="d-md-flex mx-2 my-4 m-sm-4">
          <h6 className="col-12 col-md-3">Medinet App</h6>

          <ul className="mx-md-2 mx-lg-4 mb-1" style={{ fontSize: "14px" }}>
            <li>Desarrollo web Frontend Vue Js</li>
            <li>Backend con Python Django</li>
            <li>Base de datos con Postgres SQL</li>

            {/* <li>Web : 
              <Link 
                to     = { link } 
                rel    = "noreferrer" 
                target = "_blank"
              >
                { link }
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="d-md-flex mx-2 my-3 m-sm-4">
          <h6 className="col-12 col-md-3">Web Ultralab</h6>

          <ul className="mx-md-2 mx-lg-4 mb-1" style={{ fontSize: "14px" }}>
            <li>Desarrollo web Frontend React Js</li>
            <li>Backend con Java Springboot</li>
            <li>Base de datos con Postgres SQL</li>

            <li>Web : 
              <Link 
                to     = { 'https://ultralab.com.ec' } 
                rel    = "noreferrer" 
                target = "_blank"
              >
                { 'https://ultralab.com.ec' }
              </Link>
            </li>
          </ul>
        </div>

        {
          profesionales.map( ({ name, link }) => 
            <div key={name} className="d-md-flex mx-2 my-3 m-sm-4">
              <h6 className="col-12 col-md-3">{ name }</h6>

              <ul className="mx-md-2 mx-lg-4 mb-1" style={{ fontSize: "14px" }}>
                <li>Participación en el diseño del prototipo</li>
                <li>Maquetación web, web responsive, funcionalidades</li>
                <li>Web : 
                  <Link 
                    to     = { link } 
                    rel    = "noreferrer" 
                    target = "_blank"
                  >
                    { link }
                  </Link>
                </li>
              </ul>
            </div>
          )
        }
          
      </div>
      {
          personales.length > 0 && 
          <div>
            <h5>Proyectos personales</h5>
            {
              personales.map( ({ name, type, link }) => 
                <div key={ name } className="d-sm-flex m-4">
                  <h6 className="col-sm-3">{ name }</h6>
                  
                  <ul className="mx-4 mb-1" style={{ fontSize: "14px" }}>
                    <li>{ type }</li>
                    <li>Link: 
                      <Link to ={ link } rel ="noreferrer" target ="_blank">
                        Ver proyecto
                      </Link>
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
      }
        
    </AccordeonItem>
  );
}
