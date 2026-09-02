import { useEffect, useState, type ChangeEvent } from "react";
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

export const UpdateCertificateModal = () => {

  const { getCerfiticatesQuery, updateCertificateMutation } = useCertificates();
  const certificates = getCerfiticatesQuery.data ?? [];
  const { getTagsQuery } = useTags();

  const activeTags = getTagsQuery.data?.filter(t => t.isActive) ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const updateId = searchParams.get("update");
  const open = !!updateId;

  const certificate = certificates.find(c => c.token === updateId);

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!certificate) return;
    setForm({
      name        : certificate.name,
      link        : certificate.link,
      description : certificate.description,
      date        : certificate.fecha?.split("T")[0] ?? "",
      image       : null,
      tagIds      : certificate.tags.map(t => t.id),
    });
  }, [certificate]);

  const updateField = (field: keyof typeof initialForm) => (
    e: ChangeEvent<HTMLInputElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const updateTagIds = (tagIds: string[]) => setForm(prev => ({ ...prev, tagIds }));

  const isPending = updateCertificateMutation.isPending;
  const isDisabledSubmit = !form.name || isPending;

  const onClose = () => {
    if (isPending) return;
    const next = new URLSearchParams(searchParams);
    next.delete("update");
    setSearchParams(next);
  };

  const handleSubmit = async () => {
    if (!updateId) return;

    try{
      let image: string | undefined;
      if (form.image){
        const { url } = await uploadFileAction(form.image);
        image = url;
      }

      updateCertificateMutation.mutate({
        id          : updateId,
        name        : form.name,
        link        : form.link,
        description : form.description,
        date        : form.date ? new Date(form.date).toISOString() : null,
        image,
        tagIds      : form.tagIds,
      }, {
        onSuccess: () => {
          onClose();
          toast.success("Certificate actualizado correctamente");
        },
        onError: () => toast.error("Error al actualizar el certificate")
      });

    }catch(err){
      console.log(err);
      toast.error("Error al actualizar el certificate");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Certificate</DialogTitle>
          <DialogDescription className="sr-only">Update the certificate fields</DialogDescription>
        </DialogHeader>

        {certificate ? (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={updateField("name")}
                placeholder="Certificate name"
                disabled={isPending}
              />
            </div>

            <div className="grid gap-2">
              <Label>Link</Label>
              <Input
                value={form.link}
                onChange={updateField("link")}
                placeholder="https://..."
                disabled={isPending}
              />
            </div>

            <div className="grid gap-2">
              <Label>Description</Label>
              <Input
                value={form.description}
                onChange={updateField("description")}
                placeholder="Description"
                disabled={isPending}
              />
            </div>

            <div className="grid gap-2">
              <Label>Date</Label>
              <Input
                type="date"
                value={form.date}
                onChange={updateField("date")}
                disabled={isPending}
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
              <Label>Image (optional)</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={e => setForm(prev => ({ ...prev, image: e.target.files?.[0] ?? null }))}
                disabled={isPending}
              />
              {certificate.image && !form.image && (
                <img src={certificate.image} alt={certificate.name} className="h-16 w-24 object-cover border border-border" />
              )}
            </div>
          </div>
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
              onClick={handleSubmit}
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
