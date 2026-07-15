import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminProvider from "../context/admincontext";
import UserDetail from "../pages/UserDetail/UserDetail";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/user/:id", element: <UserDetail /> },
    ],
    {
      basename: "/admin",
    }
  );

  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
