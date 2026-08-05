import { HomePage } from "@/modules/web/presentation/pages/HomePage";
import { ProjectsPage, ProjectDetailsPage } from "@/modules/projects/presentation/pages";
import { CertificatesPage } from "@/modules/certificates/presentation/pages/CertificatesPage";
import { CvPage } from "@/modules/cv/presentation/pages/CvPage";
import { NotFoundPage, UnderConstructionPage } from "@/modules/shared/presentation/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PagesLayout } from "@/modules/shared/presentation/layouts";



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
