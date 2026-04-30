



import { CVHabilities, CvPersonalInfo } from '@/features/cv/components';
import { AccordeonItem } from '@/shared/components';
// import './CvPage.css';


export const CvPage = () => {

  return (
    <main>
      <CvPersonalInfo/>
      <hr />

      <CVHabilities/> 
      <br />

      <EducacionCV />
      <br />

      {/* <FormacionCv />
      <br />

      <ExperienciaCv />
      <br />

      <ProjectsCv /> */}
    </main>
  );
}



export const EducacionCV = () => 

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













