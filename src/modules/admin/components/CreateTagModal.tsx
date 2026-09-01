import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/libraries/neo_brutalist/components/ui/dialog";
import { Button } from "@/libraries/neo_brutalist/components/ui/button";
import { Input } from "@/libraries/neo_brutalist/components/ui/input";
import { Label } from "@/libraries/neo_brutalist/components/ui/label";
import { useTags } from "@/modules/tags/hooks/use-tags";
import { toast } from "sonner";
import { DialogDescription } from "@radix-ui/react-dialog";


export const CreateTagModal = () => {

  const { createTagMutation } = useTags();

  const [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.has("create");

  const [name, setName] = useState("");

  const isDisabledSubmit = !name || createTagMutation.isPending;

  const handleClose = () => {
    if (createTagMutation.isPending) return;
    setName("");
    const next = new URLSearchParams(searchParams);
    next.delete("create");
    setSearchParams(next);
  };

  const handleSubmit = () => {
    createTagMutation.mutate(
      { name },
      {
        onSuccess: () => {
          handleClose();
          toast.success("Tag creado correctamente");
        },
        onError: () => toast.error("Error al crear el tag")
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Tag</DialogTitle>
          <DialogDescription className="sr-only">Fill the name to register a new tag</DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="Tag name"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisabledSubmit) handleSubmit();
            }}
          />
        </div>

        <DialogFooter>
          <Button
            variant="neutral"
            onClick={handleClose}
            disabled={createTagMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isDisabledSubmit}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};