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
import { useCreateCertificate } from "@/modules/certificates/hooks/use-get-certificates";
import { uploadFileAction } from "@/modules/certificates/actions/upload-file.action";

interface Props {
  open        : boolean;
  onOpenChange : (open: boolean) => void;
}

export const CreateCertificateModal = ({ open, onOpenChange }: Props) => {

  const { createCertificateMutation } = useCreateCertificate();

  const [name, setName]           = useState("");
  const [link, setLink]           = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate]           = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags]           = useState("");

  const handleClose = () => {
    if (createCertificateMutation.isPending) return;
    onOpenChange(false);
  };

  const handleSubmit = async () => {
    try{
      let image = "";
      if (imageFile){
        const uploaded = await uploadFileAction(imageFile);
        image = uploaded.url;
      }

      createCertificateMutation.mutate({
        name,
        link,
        description,
        date: new Date(date).toISOString(),
        image,
        tags: tags.split(",").map(t => t.trim()).filter(Boolean),
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
            <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre del certificado" />
          </div>

          <div className="grid gap-2">
            <Label>Link</Label>
            <Input value={link} onChange={e => setLink(e.target.value)} placeholder="https://..." />
          </div>

          <div className="grid gap-2">
            <Label>Descripción</Label>
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" />
          </div>

          <div className="grid gap-2">
            <Label>Fecha</Label>
            <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Imagen</Label>
            <Input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] ?? null)} />
          </div>

          <div className="grid gap-2">
            <Label>Tags</Label>
            <Input value={tags} onChange={e => setTags(e.target.value)} placeholder="tag1, tag2, tag3" />
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
