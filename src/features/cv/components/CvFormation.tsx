import { AccordeonItem } from '@/shared/components';
import { formation } from '../data/cvFormationData';

export const CvFormation = () => 

  <AccordeonItem id='capacitacion' title={`🏆 FORMACIÓN Y CAPACITACIÓN`}>
    <div>
      {
        formation.map( (item, index) =>(
          <div key={index} className="my-4">
            <h4 className="mb-4 text-xl font-bold">{ item.category }</h4>
            <div className="mx-1 grid grid-cols-3">
              {
                item.values.map( (item, index) => 
                  <div key={index}>
                    <h5 className="text-lg font-semibold text-green-600">{ item.name }</h5>
                    <ul className="mb-4 px-4 text-base">
                      { item.description.map( 
                        (d, index) => <li key={index}>{ d }</li>) 
                      }
                    </ul>
                  </div>
                )
              }
            </div>
            { index !== formation.length - 1 && <hr />}
          </div>
        ))
      }
        
    </div>
  </AccordeonItem>