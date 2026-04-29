import { CertificatesPage, CvPage, HomePage, ProjectDetailsPage, ProjectsPage } from "@/pages";
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
        path: "cv",
        element: <CvPage />,
      },
    ]
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
}
