import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { techIconMap }     from '@/modules/shared/constants/tech-icons';
import { Badge }           from '@/libraries/neo_brutalist/components/ui/badge';

type Props = {
  nameTech: string;
}


export const Tag = ({nameTech}:Props) => {

  const icon = techIconMap[nameTech.toLowerCase()];

  return(
    <Badge className="">
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className={icon ? "mr-1" : ""}>{nameTech.toUpperCase()}</span>
    </Badge>
  )
}