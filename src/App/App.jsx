import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminProvider from "../context/admincontext";
import UserDetail from "../pages/UserDetail/UserDetail";
import NotFound from "../pages/not_found/NotFound";
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
      { path: "*", element: <NotFound /> }
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
