import React from "react";

const RecipesCard = ({ recipe }) => {
  // console.log(recipe);

  const { r_img,name,cooking_method,ingredients,ratting } = recipe;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
        <figure>
          <img className=" h-[250px] w-full" src={r_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">Recipe Name: {name}</h2>
          <p>
            <strong className="text-lg">Ingredients for create the Recipe:</strong>
            {
              ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
            }
          </p>
          <p>
            <strong className="text-lg">Ingredients for create the Recipe:</strong>
            {
              cooking_method.map(cooking => <li className="my-2 style-none" key={cooking}>{cooking}</li>)
            }
          </p>

        </div>
          <div className="justify-end p-4">
            <button className="btn btn-primary">Buy Now</button>
          </div>
      </div>
    </div>
  );
};

export default RecipesCard;
