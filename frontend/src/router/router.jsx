import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import Home from "@/pages/sites/Home";
import Login from "@/pages/sites/Login";
import Jobs from "@/pages/sites/Jobs";
import JobDetail from "@/pages/sites/JobDetail";
import NotFound from "@/pages/sites/NotFound";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "@/components/common/PrivateRoute";

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
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Admin routes protected by PrivateRoute
  {
    path: "/dashboard",
    element: <PrivateRoute adminOnly={true} />,
    children: [
      {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
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
