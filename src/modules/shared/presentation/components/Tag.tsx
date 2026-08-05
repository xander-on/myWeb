import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { techIconMap }     from '@/modules/shared/presentation/constants/tech-icons';
import { Badge }           from '@/modules/shared/presentation/neo_brutalist/components/ui/badge';

type Props = {
  nameTech: string;
}


export const Tag = ({nameTech}:Props) => {

  const icon = techIconMap[nameTech.toLowerCase()];

  if(!icon) return null;

  return(
    <Badge className="">
      <FontAwesomeIcon icon={icon} />
      <span className="mr-1">{nameTech.toUpperCase()}</span>
    </Badge>
  )
}