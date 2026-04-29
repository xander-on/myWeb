
import { Dialog, DialogContent } from '../neo_brutalist/components/ui/dialog';
import { useModalContainer } from '../hooks/useModalContainer';

interface Props {
  queryParam  : string;
  children    : React.ReactNode;
  size       ?: "sm" | "lg" | "xl";
}

export const ModalContainer = ({ queryParam, size="lg", children}:Props) => {

  const {isVisible, onCloseModal} = useModalContainer(queryParam);

  return (
    <Dialog 
      open={isVisible} 
      onOpenChange={onCloseModal}
    >

      <DialogContent
        className={`
          ${size === "sm" && "sm:max-w-75"}
          ${size === "lg" && "sm:max-w-180"}
          ${size === "xl" && "sm:max-w-280"}
        `}
      >
        { children }
      </DialogContent>
    </Dialog>
  )
}


