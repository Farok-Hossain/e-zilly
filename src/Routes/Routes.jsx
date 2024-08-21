import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello EZilly</div>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);
