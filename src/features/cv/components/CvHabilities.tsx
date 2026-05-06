import { AccordeonItem } from "@/shared/components"

export const habilities = [
  "Comunicación",
  "Inglés: Intermedio",
  "Aprendizaje continuo",
  "Licencia de Conducir B",
  "Trabajo en equipo",
  "Movilización Propia"
]


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
              className="md:w-1/2 mb-2"
            >
              <span>{h}</span>
            </li> 
          )
        } 
      </ul>
    </AccordeonItem>
  )
}
