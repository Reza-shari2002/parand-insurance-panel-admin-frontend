import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home/home";
import Documents from "../pages/documents/Documents";
import Basic_information from "../pages/basic-information/Basic_information";
import Discount_transfer from "../pages/discount-transfer/discount_transfer";
import Discount_transfer_family from "../pages/discount-transfer-family/Discount_transfer_family";
import Confirm from "../pages/confirm/Confirm";
import Login from "../pages/login/Login";
import Formcontext from "../context/Formcontext";
function App() {
  const router = createBrowserRouter([
    ,
    { path: "/home", element: <Home></Home> },
    { path: "/documents", element: <Documents /> },
    {
      path: "/basic-information",
      element: <Basic_information></Basic_information>,
    },
    {
      path: "/Discount_transfer",
      element: <Discount_transfer></Discount_transfer>,
    },
    {
      path: "/Discount-transfer-family",
      element: <Discount_transfer_family></Discount_transfer_family>,
    },
    { path: "/Confirm", element: <Confirm></Confirm> },
    
    { path: "/Login", element: <Login></Login> },
  ]);
  return (
    <>
      <Formcontext>
        <RouterProvider router={router}></RouterProvider>
      </Formcontext>
    </>
  );
}

export default App;
