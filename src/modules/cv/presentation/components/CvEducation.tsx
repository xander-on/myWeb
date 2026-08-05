import { AccordeonItem } from "@/modules/shared/presentation/components";


export const CvEducation = () => 

  <AccordeonItem id={'educacion'} title={`👨‍🎓 EDUCACIÓN`}>
    <ul className='text-lg'>
      <li>
        <h6>Bachiller Técnico en Sistemas Informáticos</h6>
        <small>Academia Naval Almirante Illingworth</small>
      </li>

      <br />

      <li>
        <h6>Carrera de Ingeniería en Sistemas Computacionales</h6>
        <small>Universidad de Guayaquil</small>
      </li>
      
      <br />

      <li>
        <h6>Carrera de Desarrollo Web</h6>
        <small>Formación en línea</small>
      </li>
      
    </ul>
  </AccordeonItem>
