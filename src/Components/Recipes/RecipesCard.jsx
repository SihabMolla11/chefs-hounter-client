import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCard = ({ recipe }) => {
  const { r_img, name, cooking_method, ingredients, ratting } = recipe;

  const [buttonDe, setButtonDE] = useState(true)

  const favorite = () => {
    toast.success("Add in Favorite successfully", {
      position: "top-center",
    });
    setButtonDE(false)
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
        <figure>
          <img className=" h-[250px] w-full" src={r_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">Recipe Name: {name}</h2>
          <p>
            <strong className="text-lg">
              Ingredients for create the Recipe:
            </strong>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </p>
          <p>
            <strong className="text-lg">
              Ingredients for create the Recipe:
            </strong>
            {cooking_method.map((cooking) => (
              <li className="my-2 style-none" key={cooking}>
                {cooking}
              </li>
            ))}
          </p>
        </div>
        <div className="justify-end p-4">
          <button
            onClick={favorite}
            disabled={!buttonDe}
            className="my-btn"
          >
            Add in Favorite
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
