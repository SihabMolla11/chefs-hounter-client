import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
    ],
  },
]);

export default router;
