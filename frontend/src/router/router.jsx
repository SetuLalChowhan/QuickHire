import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import Home from "@/pages/sites/Home";
import Login from "@/pages/sites/Login";
import NotFound from "@/pages/sites/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
  // 404 Route
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
