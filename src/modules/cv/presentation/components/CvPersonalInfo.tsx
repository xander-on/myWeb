


import { CvLogosTech } from './CvLogosTech';
import { Button } from '@/modules/shared/presentation/neo_brutalist/components/ui/button';
import { openLink } from '@/modules/shared/presentation/utils/openLink';
import { personalInfo } from '@/modules/cv/domain/data/personalInfo';


export const CvPersonalInfo = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 mb-4">
                  
      <div className="md:w-1/2">
        <img 
          width="170" 
          height="170" 
          src={ `https://backend.alexanderweb.cloud/uploads/avatar2025_852f8b76dc.png` } 
          alt=""
          className="rounded-full"
        />
        
        <h5 className='mt-4'>{ personalInfo.name }</h5>
        <div>{ personalInfo.position }</div>
        {/* <small className=''>+4 años de exp.</small> */}

        <ul className='mt-2'>
          {
            personalInfo.info.map( info => {
              return (
                <li key={info.label} style={{ fontSize: "15px" }}>
                  <a href={info.value} target="_blank" rel="noreferrer"> 
                    { info.label }
                  </a>
                </li>
              )
            })
          }
        </ul>

      </div>

      <div className="md:w-1/2 flex flex-col justify-end">
        
        <CvLogosTech />

        <div className='flex justify-end'>
          <img
            width  ="150" 
            height ="150" 
            src    ="https://backend.alexanderweb.cloud/uploads/qr_f1ef3bf7ce.png" 
            alt    =""
            className="mb-2"
          />
            
          {/* <a 
            href      ="https://files.alexanderweb.cloud/cv/AlexanderCV.pdf" 
            download  ="AlexanderCV.pdf"
            className ="mx-4"
            rel       ="noreferrer"
            target    ="_blank"
            style     ={{textDecoration: "underline", fontSize:"18px"}}
          >
            Descargar CV
          </a> */}

        </div>


        <Button 
          className='my-1'
          onClick={ ()=> openLink('/projects')}
        >
          {'💼 Ver Portafolio'}
        </Button>
        
        <Button 
          variant={'neutral'}
          className='my-1'
          onClick={ () => openLink('/certificates')}
        >
          {'📄 Ver Certificados'}
        </Button>

      </div>
    </div>
  );
}
