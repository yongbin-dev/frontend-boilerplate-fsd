import React from "react";
import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "@/1_app/layouts";
import { NotFoundPage } from "@/2_pages/404";
import { GuidePage } from "@/2_pages/guide/ui/Page";
import { TodoPage } from "@/2_pages/todo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <GuidePage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />,
      },
    ],
  },
]);

const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
