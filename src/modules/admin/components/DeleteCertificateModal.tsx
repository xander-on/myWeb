import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/libraries/neo_brutalist/components/ui/dialog";
import { Button } from "@/libraries/neo_brutalist/components/ui/button";
import { useCertificates, UseCertificateType } from "@/modules/certificates/hooks/use-certificates";
import { toast } from "sonner";


export const DeleteCertificateModal = () => {

  const { getCerfiticatesQuery, deleteCertificateMutation } = useCertificates(UseCertificateType.GET_ALL);
  const certificates = getCerfiticatesQuery.data ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const deleteId = searchParams.get("delete");
  const open = !!deleteId;

  const certificate = certificates.find(c => c.token === deleteId);
  const isPending = deleteCertificateMutation.isPending;

  const onClose = () => {
    if (isPending) return;
    const next = new URLSearchParams(searchParams);
    next.delete("delete");
    setSearchParams(next);
  };

  const onDelete = () => {
    if (!deleteId) return;

    deleteCertificateMutation.mutate(
      deleteId,
      {
        onSuccess: () => {
          onClose();
          toast.success("Certificate eliminado correctamente");
        },
        onError: () => toast.error("Error al eliminar el certificate")
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Certificate</DialogTitle>
          <DialogDescription className="sr-only">
            Confirm deletion of the certificate
          </DialogDescription>
        </DialogHeader>

        {certificate ? (
          <p>
            ¿Seguro que deseas eliminar el certificate{" "}
            <span className="font-bold">{certificate.name}</span>? Esta acción no se puede deshacer.
          </p>
        ) : (
          <p>Certificate not found</p>
        )}

        <DialogFooter className="mt-6 flex justify-end gap-2">
          <Button
            variant="neutral"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </Button>

          {certificate && (
            <Button
              className="bg-red-500 text-black"
              onClick={onDelete}
              disabled={isPending}
            >
              Delete
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};