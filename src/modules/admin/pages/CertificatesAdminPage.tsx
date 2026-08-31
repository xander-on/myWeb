import { useSearchParams } from "react-router-dom";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/modules/shared/presentation/neo_brutalist/components/ui/table";
import { Badge } from "@/modules/shared/presentation/neo_brutalist/components/ui/badge";
import { Button } from "@/modules/shared/presentation/neo_brutalist/components/ui/button";
import { useGetCertificates } from "@/modules/certificates/hooks/use-get-certificates";
import { CreateCertificateModal } from "@/modules/admin/components/CreateCertificateModal";

export const CertificatesAdminPage = () => {

  const { getCerfiticatesQuery } = useGetCertificates();
  const certificates = getCerfiticatesQuery.data ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const isCreateOpen = searchParams.has("create");

  const openCreate = () => setSearchParams({ create: "1" });
  const closeCreate = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("create");
    setSearchParams(next);
  };

  return (
    <div className="p-4">
      <div className="my-4 flex items-center justify-between">
        <h3 className="text-3xl font-bold">CERTIFICATES ADMIN</h3>
        <Button onClick={openCreate}>
          <Plus />
          Crear
        </Button>
      </div>

      <CreateCertificateModal open={isCreateOpen} onOpenChange={(open) => { if (!open) closeCreate(); }} />

      <Table>
        <TableHeader>
          <TableRow className="bg-secondary-background text-main-foreground">
            <TableHead>Nombre</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Imagen</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            certificates.map((c) => (
              <TableRow key={c.token} className="bg-[rgb(170,230,200)] text-main-foreground">
                <TableCell className="font-base">
                  <div className="font-heading font-bold">{c.name}</div>
                  <div className="text-xs opacity-80">{c.slug}</div>
                </TableCell>
                <TableCell>{c.fecha}</TableCell>
                <TableCell>
                  <a href={c.link} target="_blank" rel="noreferrer" className="underline">
                    Ver
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {c.tags.map((t) => (
                      <Badge key={t} variant="neutral">{t}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <img src={c.image} alt={c.name} className="h-12 w-16 object-cover border border-border" />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
