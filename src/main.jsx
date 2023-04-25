import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Layout/Home";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import cartProductsLoader from "./Loaders/cartProductsLoaders";
import Checkout from "./Components/Checkout/Checkout";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivetRouter from "./Components/Routes/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivetRouter>
            <Inventory></Inventory>
          </PrivetRouter>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivetRouter>
            <Checkout></Checkout>
          </PrivetRouter>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
