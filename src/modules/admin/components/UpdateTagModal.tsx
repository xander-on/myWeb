import { useEffect, useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/libraries/neo_brutalist/components/ui/dialog";
import { Button }  from "@/libraries/neo_brutalist/components/ui/button";
import { Input }   from "@/libraries/neo_brutalist/components/ui/input";
import { Label }   from "@/libraries/neo_brutalist/components/ui/label";
import { Switch }  from "@/libraries/neo_brutalist/components/ui/switch";
import { useTags } from "@/modules/tags/hooks/use-tags";


const initialForm = {
  name     : "",
  isActive : false
}

export const UpdateTagModal = () => {

  const { getTagsQuery, updateTagMutation } = useTags();
  const tags = getTagsQuery.data ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const editId = searchParams.get("update");
  const open = !!editId;

  const tag = tags.find((t) => t.id === editId);

  const [form, setForm] = useState(initialForm);
  

  useEffect(() => {
    if (!tag) return;
    setForm({
      name     : tag.name,
      isActive : tag.isActive
    });
  }, [tag]);

  const isPending = updateTagMutation.isPending;
  const isDisabledSubmit = isPending || !form.name;

  const onClose = () => {
    if (isPending) return;
    const next = new URLSearchParams(searchParams);
    next.delete("update");
    setSearchParams(next);
  };

  const onSubmit = () => {
    if (!editId) return;

    const dataTag = { 
      id: editId, 
      name: form.name, 
      isActive: form.isActive 
    };

    updateTagMutation.mutate(
      dataTag,
      { onSuccess: onClose }
    );
  };

  return (
    <Dialog 
      open={open} 
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Tag</DialogTitle>
          <DialogDescription className="sr-only">
            Update the name and active status of the tag
          </DialogDescription>
        </DialogHeader>

        {tag ? (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({...form, name: e.target.value})}
                placeholder="Tag name"      
                disabled={isPending}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Label>Status</Label>
              <Switch
                checked={form.isActive}
                onCheckedChange={(checked) => setForm({...form, isActive: checked})}
                disabled={isPending}
              />
            </div>
          </div>
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
              onClick={onSubmit}
              disabled={isDisabledSubmit}
            >
              Save
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};