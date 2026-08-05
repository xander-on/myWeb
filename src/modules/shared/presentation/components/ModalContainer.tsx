
import { Dialog, DialogContent, DialogTitle } from "@/modules/shared/presentation/neo_brutalist/components/ui/dialog";
import { useModalContainer } from "@/modules/shared/presentation/hooks/useModalContainer";

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
      <DialogTitle></DialogTitle>
      <DialogContent
        className={`
          ${size === "sm" && "sm:max-w-75"}
          ${size === "lg" && "sm:max-w-180"}
          ${size === "xl" && "sm:max-w-280"}
        `}
        aria-describedby=''
      >
        { children }
      </DialogContent>
    </Dialog>
  )
}


