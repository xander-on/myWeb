import { useSearchParams } from "react-router-dom";
import { Pencil, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libraries/neo_brutalist/components/ui/table";
import { Button } from "@/libraries/neo_brutalist/components/ui/button";
import { useTags } from "@/modules/tags/hooks/use-tags";
import { CreateTagModal } from "@/modules/admin/components/CreateTagModal";
import { UpdateTagModal } from "@/modules/admin/components/UpdateTagModal";
import { DeleteTagModal } from "@/modules/admin/components/DeleteTagModal";

export const TagsAdminPage = () => {

  const [, setSearchParams] = useSearchParams();
  const { getTagsQuery } = useTags();
  const tags = getTagsQuery.data ?? [];

  return (
    <div className="p-4">
      <div className="my-4 flex items-center justify-between">
        <h3 className="text-3xl font-bold">TAGS ADMIN</h3>
        <Button onClick={() => setSearchParams({ create: "1" })}>
          <Plus />
          Crear
        </Button>
      </div>

      <CreateTagModal />
      <UpdateTagModal />
      <DeleteTagModal />

      <Table>
        <TableHeader>
          <TableRow className="bg-[#1f1f1f] text-main [&_th]:text-main">
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            tags.map((t) => (
              <TableRow key={t.id} className="bg-[rgb(170,230,200)] text-main-foreground dark:bg-transparent dark:text-foreground">
                <TableCell className="font-base">
                  <div className="font-heading font-bold">{t.name}</div>
                </TableCell>
                <TableCell>{t.isActive ? "Active" : "Deactivate"}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="icon"
                      variant="neutral"
                      className="bg-yellow-500 text-black"
                      onClick={() => setSearchParams({ update: t.id })}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      size="icon"
                      variant="neutral"
                      className="bg-red-500 text-black"
                      onClick={() => setSearchParams({ delete: t.id })}
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