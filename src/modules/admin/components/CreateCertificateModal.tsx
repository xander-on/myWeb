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
import { Textarea } from "@/libraries/neo_brutalist/components/ui/textarea";
import { uploadFileAction } from "@/modules/shared/files/upload-file.action";
import { useCertificates } from "@/modules/certificates/hooks/use-certificates";
import { useTags } from "@/modules/tags/hooks/use-tags";
import { MultiSelect } from "@/modules/shared/components/MultiSelect";
import { DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";


const initialForm = {
  name        : "",
  link        : "",
  description : "",
  date        : "",
  image       : null as File | null,
  tagIds      : [] as string[],
}

export const CreateCertificateModal = () => {

  const { createCertificateMutation } = useCertificates();
  const { getTagsQuery } = useTags();

  const activeTags = getTagsQuery.data?.filter(t => t.isActive) ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.has("create");

  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const updateTagIds = (tagIds: string[]) => setForm(prev => ({ ...prev, tagIds }));

  const isDisabledSubmit = !form.name || !form.image || createCertificateMutation.isPending

  const handleClose = () => {
    if (createCertificateMutation.isPending) return;
    const next = new URLSearchParams(searchParams);
    next.delete("create");
    setSearchParams(next);
  };

  const handleSubmit = async () => {
    try{
      let image = "";
      if (form.image){
        const { url } = await uploadFileAction(form.image);
        image = url;
      }

      createCertificateMutation.mutate({
        name        : form.name,
        link        : form.link,
        description : form.description,
        date        : form.date ? new Date(form.date).toISOString() : null,
        image,
        tagIds      : form.tagIds,
      }, {
        onSuccess: () => {
          handleClose();
          toast.success("Certificate creado correctamente");
        },
        onError: () => toast.error("Error al crear el certificate")
      });

    }catch(err){
      console.log(err);
      toast.error("Error al crear el certificate");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Create Certificate</DialogTitle>
          <DialogDescription className="sr-only">Fill the fields to register a new certificate</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Name</Label>
            <Input 
              value={form.name} 
              onChange={updateField("name")} 
              placeholder="Certificate name" 
            />
          </div>

          <div className="grid gap-2">
            <Label>Link</Label>
            <Input 
              value={form.link} 
              onChange={updateField("link")} 
              placeholder="https://..." 
            />
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea 
              value={form.description} 
              onChange={updateField("description")} 
              placeholder="Description" 
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <Label>Date</Label>
            <Input 
              type="date" 
              value={form.date} 
              onChange={updateField("date")} 
            />
          </div>

          <div className="grid gap-2">
            <Label>Tags</Label>
            <MultiSelect
              options={activeTags}
              value={form.tagIds}
              onChange={updateTagIds}
              placeholder="Selecciona los tags"
            />
          </div>

          <div className="grid gap-2">
            <Label>Image</Label>
            <Input 
              type="file" 
              accept="image/*" 
              onChange={e => setForm(prev => ({ ...prev, image: e.target.files?.[0] ?? null }))} 
            />
          </div>

          
        </div>

        <DialogFooter className="mt-6">
          <Button 
            variant="neutral" 
            onClick={handleClose} 
            disabled={createCertificateMutation.isPending}
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
