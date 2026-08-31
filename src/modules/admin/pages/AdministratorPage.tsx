import { AdminMenuCard } from "@/modules/admin/components/AdminMenuCard";

export const AdministratorPage = () => {
  return (
    <div>
      <h3 className="my-4 text-3xl font-bold text-center">ADMINISTRATOR</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AdminMenuCard
          title="Projects"
          description="Gestionar proyectos"
          href="/administrator/projects"
        />
        <AdminMenuCard
          title="Certificates"
          description="Gestionar certificados"
          href="/administrator/certificates"
        />
      </div>
    </div>
  )
}
