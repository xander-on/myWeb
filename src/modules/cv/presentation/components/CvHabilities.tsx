import { AccordeonItem } from "@/modules/shared/presentation/components/AccordeonItem"
import { habilities } from "@/modules/cv/domain/data/habilities";

export const CVHabilities = () => {
  return (
    <AccordeonItem 
      id={'habilidades'} 
      title={`🎯 HABILIDADES Y CONOCIMIENTOS`}
    >
      <ul className="flex flex-col md:flex-row flex-wrap text-base">
        {
          habilities.map( 
            (h, index) => 
            <li 
              key={index}
              className="md:w-1/3 mb-1"
            >
              <span>{h}</span>
            </li> 
          )
        } 
      </ul>
    </AccordeonItem>
  )
}
