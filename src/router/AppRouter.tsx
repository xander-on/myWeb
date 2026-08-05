import { HomePage } from "@/modules/web/presentation/pages/HomePage";
import { ProjectsPage } from "@/modules/projects/presentation/pages/ProjectsPage";
import { ProjectDetailsPage } from "@/modules/projects/presentation/pages/ProjectDetailsPage";
import { CertificatesPage } from "@/modules/certificates/presentation/pages/CertificatesPage";
import { CvPage } from "@/modules/cv/presentation/pages/CvPage";
import { NotFoundPage } from "@/modules/shared/presentation/pages/NotFoundPage";
import { UnderConstructionPage } from "@/modules/shared/presentation/pages/UnderConstructionPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PagesLayout } from "@/modules/shared/presentation/layouts/PagesLayout";



const routes = [
  {
    element: <PagesLayout />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailsPage />,
      },
      {
        path: "certificates",
        element: <CertificatesPage />,
      },
      {
        path: "contact",
        element: <UnderConstructionPage />,
      },
      {
        path: "cv",
        element: <CvPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ]
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
}
