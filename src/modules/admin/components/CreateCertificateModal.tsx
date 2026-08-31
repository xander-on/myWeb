import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/modules/shared/presentation/neo_brutalist/components/ui/dialog";
import { Button } from "@/modules/shared/presentation/neo_brutalist/components/ui/button";
import { Input } from "@/modules/shared/presentation/neo_brutalist/components/ui/input";
import { Label } from "@/modules/shared/presentation/neo_brutalist/components/ui/label";
import { uploadFileAction } from "@/modules/shared/files/upload-file.action";
import { useCertificates } from "@/modules/certificates/hooks/use-certificates";
import { DialogDescription } from "@radix-ui/react-dialog";


const initialForm = {
  name        : "",
  link        : "",
  description : "",
  date        : "",
  image       : null as File | null,
  tags        : "",
}

export const CreateCertificateModal = () => {

  const { createCertificateMutation } = useCertificates();

  const [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.has("create");

  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm) => (
    e: ChangeEvent<HTMLInputElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

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
        date        : new Date(form.date).toISOString(),
        image,
        tags        : form.tags.split(",").map(t => t.trim()).filter(Boolean),
      });

    }catch(err){
      console.log(err);
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
            <Input 
              value={form.description} 
              onChange={updateField("description")} 
              placeholder="Description" 
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
            <Label>Image</Label>
            <Input 
              type="file" 
              accept="image/*" 
              onChange={e => setForm(prev => ({ ...prev, image: e.target.files?.[0] ?? null }))} 
            />
          </div>

          <div className="grid gap-2">
            <Label>Tags</Label>
            <Input 
              value={form.tags} 
              onChange={updateField("tags")} 
              placeholder="tag1, tag2, tag3" 
            />
          </div>
        </div>

        <DialogFooter>
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
