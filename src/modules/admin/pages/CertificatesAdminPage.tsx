import { useSearchParams } from "react-router-dom";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libraries/neo_brutalist/components/ui/table";
import { Button } from "@/libraries/neo_brutalist/components/ui/button";
import { useCertificates, UseCertificateType } from "@/modules/certificates/hooks/use-certificates";
import { CertificateViewer } from "@/modules/certificates/components/CertificateViewer";
import { CreateCertificateModal } from "@/modules/admin/components/CreateCertificateModal";
import { DeleteCertificateModal } from "@/modules/admin/components/DeleteCertificateModal";
import { UpdateCertificateModal } from "@/modules/admin/components/UpdateCertificateModal";
import { Tag } from "@/modules/shared/components/Tag";
import { BackToMenu } from "@/modules/admin/components/BackToMenu";

export const CertificatesAdminPage = () => {

  const [, setSearchParams] = useSearchParams();
  const { getCerfiticatesQuery } = useCertificates(UseCertificateType.GET_ALL);
  const certificates = getCerfiticatesQuery.data ?? [];


  return (
    <div className="p-4">
      <BackToMenu />
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-3xl font-bold">CERTIFICATES ADMIN</h3>
        <Button onClick={() => setSearchParams({ create: "1" })}>
          <Plus />
          Crear
        </Button>
      </div>

      <CreateCertificateModal />
      <DeleteCertificateModal />
      <UpdateCertificateModal />
      <CertificateViewer />

      <Table>
        <TableHeader>
          <TableRow className="bg-[#1f1f1f] text-main [&_th]:text-main">
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            certificates.map((c) => (
              <TableRow key={c.token} className="bg-[rgb(170,230,200)] text-main-foreground dark:bg-transparent dark:text-foreground">
                <TableCell className="font-base">
                  <div className="font-heading font-bold">{c.name}</div>
                  <div className="text-xs opacity-80">{c.slug}</div>
                </TableCell>
                <TableCell>{c.fecha}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {c.tags.map((t) => (
                      <Tag key={t.id} nameTech={t.name} />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <img src={c.image} alt={c.name} className="h-12 w-16 object-cover border border-border" />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      size="icon" 
                      variant="neutral" 
                      className="bg-blue-500 text-black"
                      onClick={() => setSearchParams({ view: c.slug })}
                    >
                      <Eye />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="neutral" 
                      className="bg-yellow-500 text-black"
                      onClick={() => setSearchParams({ update: c.token })}
                    >
                      <Pencil />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="neutral" 
                      className="bg-red-500 text-black"
                      onClick={() => setSearchParams({ delete: c.token })}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
