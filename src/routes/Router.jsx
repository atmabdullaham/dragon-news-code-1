import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  { path: "/", element: <MainLayout></MainLayout> },
  { path: "/auth", element: <h2>Authentication Layout</h2> },
  { path: "/news", element: <h2>News Layout</h2> },
]);

export default router;
