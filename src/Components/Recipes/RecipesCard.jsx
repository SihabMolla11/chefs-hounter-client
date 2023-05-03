import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCard = ({ recipe }) => {
  const { r_img, name, cooking_method, ingredients, ratting } = recipe;

  const [buttonDe, setButtonDE] = useState(true);

  const favorite = () => {
    toast.success("Add in Favorite successfully", {
      position: "top-center",
    });
    setButtonDE(false);
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
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={favorite}
                disabled={!buttonDe}
                className="my-btn"
              >
                Add in Favorite
              </button>
              <ToastContainer />
            </div>
            <div className="flex items-center gap-2">
              <p>Rating: {ratting}</p>
              <Rating style={{ maxWidth: 100 }} value={ratting} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
