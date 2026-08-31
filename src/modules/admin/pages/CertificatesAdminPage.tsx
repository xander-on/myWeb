import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/modules/shared/presentation/neo_brutalist/components/ui/table";
import { Badge } from "@/modules/shared/presentation/neo_brutalist/components/ui/badge";
import { useAdminCertificates } from "@/modules/admin/hooks/useAdminCertificates";

export const CertificatesAdminPage = () => {

  const { certificates } = useAdminCertificates();

  return (
    <div className="p-4">
      <h3 className="my-4 text-3xl font-bold text-center">CERTIFICATES ADMIN</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Imagen</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            certificates.map((c) => (
              <TableRow key={c.token}>
                <TableCell className="font-base">{c.name}</TableCell>
                <TableCell>{c.slug}</TableCell>
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
