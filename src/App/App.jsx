import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import adminProvider from "../context/admincontext";
function App() {
  const router = createBrowserRouter([


    { path: "/Login", element: <Login></Login> },{path:"/dashboard" , element:<Dashboard></Dashboard>}
  ]);
  return (
    <>
      <adminProvider>
        <RouterProvider router={router}></RouterProvider>
      </adminProvider>
    </>
  );
}

export default App;
