import { AccordeonItem } from "@/shared/components";


export const CvExperience = () => {
  return (
    <AccordeonItem id={"experiencia"} title={`👨‍💼 EXPERIENCIA LABORAL`}>
      
      <div>
        <h5 style={{ fontSize: "17px"}}>Servident S.A</h5>
        <h6 style={{ fontSize: "16px"}}>Desarrollador Web</h6>
        <ul style={{ fontSize: "14px"}}>
          <li>Desarrollo Frontend React Js - Vue Js</li>
          <li>Desarrollo Backend con Python Django - Node Js - Java</li>
          <li>Base de datos y servidores web Nginx</li>
          <li>Modificación y actualización de sitios web de clientes.</li>
        </ul>
      </div>
      
      <br />

      <div>
        <h5 style={{ fontSize: "17px"}}>Opa Consulting</h5>
        <h6 style={{ fontSize: "16px"}}>Área Web : Desarrollador Web.</h6>
        <ul style={{ fontSize: "14px"}}>
          <li>Creación de prototipos para webs de clientes.</li>
          <li>Maquetación, diseño y animaciones web según los prototipos aprobados.</li>
          <li>Desarrollo de funcionalidades específicas dentro de la web.</li>
          <li>Modificación y actualización visual de sitios web de los clientes.</li>
        </ul>
      </div>
      
      <br />

      <div>
        <h5 style={{ fontSize: "17px"}}>Gobierno Provincial del Guayas</h5>
        <h6 style={{ fontSize: "16px"}}>Área de sistemas : Auxiliar en soporte de sistemas.</h6>
        <ul style={{ fontSize: "14px"}}>
          <li>Instalación y mantenimiento y soporte de equipos de  cómputo.</li>
          <li>Instalación de software utilizados en equipos.</li>
          <li>Inventario de equipos y sistemas.</li>
        </ul>

      </div>

      <br />

      <div>
        <h5 style={{ fontSize: "17px"}}>Referencias Laborales:</h5>

        <div style={{ fontSize: "14px"}}>* Kevin Litardo - Cel: 0990056213 / Desarrollador web Servident</div>
        <div style={{ fontSize: "14px"}}>* José García - Cel: +1 (438) 867 2133 / Líder Web en Opa Consulting</div>
        
      </div>
    </AccordeonItem>
  );
}