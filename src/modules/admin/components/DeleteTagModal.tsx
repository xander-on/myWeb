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
import { useTags } from "@/modules/tags/hooks/use-tags";
import { toast } from "sonner";


export const DeleteTagModal = () => {

  const { getTagsQuery, deleteTagMutation } = useTags();
  const tags = getTagsQuery.data ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const deleteId = searchParams.get("delete");
  const open = !!deleteId;

  const tag = tags.find(t => t.id === deleteId);
  const isPending = deleteTagMutation.isPending;

  const onClose = () => {
    if (isPending) return;
    const next = new URLSearchParams(searchParams);
    next.delete("delete");
    setSearchParams(next);
  };

  const onDelete = () => {
    if (!deleteId) return;

    deleteTagMutation.mutate(
      deleteId,
      {
        onSuccess: () => {
          onClose();
          toast.success("Tag eliminado correctamente");
        },
        onError: () => toast.error("Error al eliminar el tag")
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
          <DialogTitle>Delete Tag</DialogTitle>
          <DialogDescription className="sr-only">
            Confirm deletion of the tag
          </DialogDescription>
        </DialogHeader>

        {tag ? (
          <p>
            ¿Seguro que deseas eliminar el tag{" "}
            <span className="font-bold">{tag.name}</span>? Esta acción no se puede deshacer.
          </p>
        ) : (
          <p>Tag not found</p>
        )}

        <DialogFooter className="mt-6 flex justify-end gap-2">
          <Button
            variant="neutral"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </Button>

          {tag && (
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