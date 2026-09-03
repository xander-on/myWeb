import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage }           from "@/modules/web/presentation/pages/HomePage";
import { ProjectsPage }       from "@/modules/projects/pages/ProjectsPage";
import { ProjectDetailsPage } from "@/modules/projects/pages/ProjectDetailsPage";
import { CertificatesPage }   from "@/modules/certificates/pages/CertificatesPage";
import { PagesLayout }        from "@/modules/shared/layouts/PagesLayout";
import { CvPage }                from "@/modules/cv/presentation/pages/CvPage";
import { NotFoundPage }          from "@/modules/shared/pages/NotFoundPage";
import { UnderConstructionPage } from "@/modules/shared/pages/UnderConstructionPage";
import { AdministratorPage }     from "@/modules/admin/pages/AdministratorPage";
import { ProjectsAdminPage }     from "@/modules/admin/pages/ProjectsAdminPage";
import { CertificatesAdminPage } from "@/modules/admin/pages/CertificatesAdminPage";
import { TagsAdminPage }         from "@/modules/admin/pages/TagsAdminPage";
import { RegisterPage }          from "@/modules/auth/pages/RegisterPage";
import { LoginPage }             from "@/modules/auth/pages/LoginPage";
import { PrivateRoutes }         from "@/router/PrivateRoutes";


const routes = [
  {
    element: <PagesLayout />,
    children:[
      { path: "/",            element: <HomePage /> },
      { path: "certificates", element: <CertificatesPage /> },
      { path: "contact",      element: <UnderConstructionPage /> },
      { path: "cv",           element: <CvPage /> },
      { path: "register",     element: <RegisterPage /> },
      { path: "login",        element: <LoginPage /> },

      {
        path: "projects",
        children: [
          { index: true,   element: <ProjectsPage /> },
          { path: ":slug", element: <ProjectDetailsPage /> },
        ],
      },
      
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/admin",
            children: [
              { index: true,          element: <AdministratorPage /> },
              { path: "projects",     element: <ProjectsAdminPage /> },
              { path: "certificates", element: <CertificatesAdminPage /> },
              { path: "tags",         element: <TagsAdminPage /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFoundPage /> }
    ]
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
}
