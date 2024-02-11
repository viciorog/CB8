import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/Page404";
import Homepage from "./routes/homepage";
import "./index.css";
import Product from "./routes/product";
import About from "./routes/about";
import Contacts from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/", // Rotta statica
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "products/:productId", // Rotta dinamica
    element: <Product />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
