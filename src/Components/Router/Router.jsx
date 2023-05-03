import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";

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
      {
        path:"/recipes/:id",
        element:<Recipes></Recipes>,
        loader:({params})=> fetch(`http://localhost:5000/recipes/${params.id}`)
      }
    ],
  },
]);

export default router;
