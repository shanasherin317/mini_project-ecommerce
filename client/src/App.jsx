import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./admin/Home/Home";
import Orders from "./admin/Orders/Orders";
import Product from "./admin/Product/Product";
import Transactions from "./admin/Transactions/Transactions";
import Users from "./admin/Users/Users";
import AdminLayout from "./admin/Layout/Layout";

function App() {


  const router = createBrowserRouter([
    {
      path: "/admi-registration",
      element: <div>Hello world!</div>,
    },
    {
      path: "/admin-login",
      element: <div>Hello world!</div>,
    },
    {
      path: "/admin",
      element: <AdminLayout/>,
      children:[
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: "orders",
          element: <Orders/>,
        },
        {
          path: "products",
          element: <Product/>,
        },
        {
          path: "transactions",
          element: <Transactions/>,
        },
        {
          path: "users",
          element: <Users/>,
        },
      ]
    },
  ]);




  return (
    <RouterProvider router={router} />
  )
}

export default App
