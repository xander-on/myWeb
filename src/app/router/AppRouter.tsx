import { CvPage, HomePage } from "@/pages";
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
