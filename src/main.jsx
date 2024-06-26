import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Shop from "./Shop/Shop";
import ErrorPage from "./ErrorPage/ErrorPage";
import Checkout from "./Checkout/Checkout";
import ProductDetail from "./ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage />, errorElement: <ErrorPage /> },
      { path: "/shop", element: <Shop />, errorElement: <ErrorPage /> },
      { path: "/shop/:id", element: <ProductDetail />, errorElement: <ErrorPage /> },
      { path: "/checkout", element: <Checkout />, errorElement: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
