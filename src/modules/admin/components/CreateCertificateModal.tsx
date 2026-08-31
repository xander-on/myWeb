import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/modules/shared/presentation/neo_brutalist/components/ui/dialog";
import { Button } from "@/modules/shared/presentation/neo_brutalist/components/ui/button";
import { Input } from "@/modules/shared/presentation/neo_brutalist/components/ui/input";
import { Label } from "@/modules/shared/presentation/neo_brutalist/components/ui/label";
import { uploadFileAction } from "@/modules/shared/files/upload-file.action";
import { useCertificates } from "@/modules/certificates/hooks/use-certificates";

interface Props {
  open        : boolean;
  onOpenChange : (open: boolean) => void;
}


const initialForm = {
  name        : "",
  link        : "",
  description : "",
  date        : "",
  image       : "",
  tags        : "",
}

export const CreateCertificateModal = ({ open, onOpenChange }: Props) => {

  const { createCertificateMutation } = useCertificates();

  const [form, setForm] = useState(initialForm);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const updateField = (field: keyof typeof initialForm) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleClose = () => {
    if (createCertificateMutation.isPending) return;
    onOpenChange(false);
  };

  const handleSubmit = async () => {
    try{
      let image = form.image;
      if (imageFile){
        const uploaded = await uploadFileAction(imageFile);
        image = uploaded.url;
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear Certificado</DialogTitle>
          <DialogDescription>
            Llena los campos para registrar un nuevo certificado.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Nombre</Label>
            <Input 
              value={form.name} 
              onChange={updateField("name")} 
              placeholder="Nombre del certificado" 
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
            <Label>Descripción</Label>
            <Input value={form.description} onChange={updateField("description")} placeholder="Descripción" />
          </div>

          <div className="grid gap-2">
            <Label>Fecha</Label>
            <Input type="date" value={form.date} onChange={updateField("date")} />
          </div>

          <div className="grid gap-2">
            <Label>Imagen</Label>
            <Input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] ?? null)} />
          </div>

          <div className="grid gap-2">
            <Label>Tags</Label>
            <Input value={form.tags} onChange={updateField("tags")} placeholder="tag1, tag2, tag3" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="neutral" onClick={handleClose} disabled={createCertificateMutation.isPending}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={createCertificateMutation.isPending}>
            Crear
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
