import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { techIconMap }     from '@/features/projects/constants/project-icons';
import { Badge }           from '@/shared/neo_brutalist/components/ui/badge';

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