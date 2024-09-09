import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import Navbar from "./components/Pages/Shared/Navbar/Navbar.jsx";
import Footer from "./components/Pages/Shared/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>
);
