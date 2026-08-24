import { AccordeonItem } from "@/modules/shared/presentation/components/AccordeonItem";


export const CvEducation = () => 

  <AccordeonItem id={'educacion'} title={`👨‍🎓 EDUCACIÓN`}>
    <ul className='text-base'>
      <li className="mb-2">
        <h6>* Bachiller Técnico en Sistemas Informáticos</h6>
        <div>Academia Naval Almirante Illingworth</div>
      </li>

      <li className="mb-2">
        <h6>* Carrera de Ingeniería en Sistemas Computacionales</h6>
        <div>Universidad de Guayaquil</div>
      </li>
      
      <li className="mb-2">
        <h6>* Formación en Desarrollo Web</h6>
        <div>Formación online</div>
      </li>
      
    </ul>
  </AccordeonItem>
