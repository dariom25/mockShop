import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Shop from "./Shop/Shop";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App /> //in diesem element wird die homepage direkt geladen --> 
  },
  {
    path: "homepage",
    element: <Homepage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
