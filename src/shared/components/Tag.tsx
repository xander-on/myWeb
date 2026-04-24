import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { techIconMap } from '@/features/projects/constants/project-icons';
// import './Tag.css';

type Props = {
  nameTech: string;
}

// export const Tag = ({ nameTech }:Props) => {

//   const infoTech = iconTech.find( (t)=> t.value === nameTech );
//   if(!infoTech) return null;

//   const { icon, value } = infoTech;

//   return (
//     <div className='tag'>
//       <FontAwesomeIcon icon={ icon }/>
//       <span className='mx-1'>{ value?.toUpperCase() }</span>
//     </div>
//   )
// }

export const Tag = ({nameTech}:Props) => {

  const icon = techIconMap[nameTech.toLowerCase()];

  if(!icon) return null;

  return(
    <div className="">
      <FontAwesomeIcon icon={icon} />
      <span className="mr-1">{nameTech.toUpperCase()}</span>
    </div>
  )

}