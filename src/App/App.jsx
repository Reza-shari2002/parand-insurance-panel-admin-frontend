import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminProvider from "../context/admincontext";
import UserDetail from "../pages/UserDetail/UserDetail";
function App() {
  const router = createBrowserRouter([


    { path: "/Login", element: <Login></Login>  },{path:"/Dashboard" , element:<Dashboard></Dashboard>}  , {path:'/User/:id' , element:<UserDetail></UserDetail>}
  ]);
  return (
    <>
      <AdminProvider>
        <RouterProvider router={router}></RouterProvider>
      </AdminProvider>
    </>
  );
}

export default App;
