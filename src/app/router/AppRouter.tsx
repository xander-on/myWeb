import { CertificatesPage, CvPage, HomePage, NotFoundPage, ProjectDetailsPage, ProjectsPage, UnderConstructionPage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PagesLayout } from "../layouts";



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
