import React from "react";
import { FaRegHandPointRight, FaArrowRight } from "react-icons/fa";
import RecipesCard from "./RecipesCard";

const RBanner = ({ recipe }) => {

  const { img_url, name, detail, likes, recipes_names, year_of_experience, recipes } =
    recipe;

  return (
    <div className="my-container">
      <div>
        <h2 className="text-4xl font-bold my-2 p-4">Chef Name: {name}</h2>
        <img className=" w-full rounded-t-xl" src={img_url} alt="" />
        <div className=" bg-[#E4F1FE] p-4 rounded-b-xl flex justify-between items-center gap-16">
          <div className="w-[50%]">
            <h2 className="text-2xl font-medium mb-2">{name}'s Detail:-</h2>
            <p className=" text-stone-700 ml-4">{detail}</p>
          </div>
          <div className="w-[50%]">
            <p className="flex items-center gap-2 text-2xl font-bold my-4 text-blue-500">
              likes:- {likes} <FaRegHandPointRight />
            </p>
            <p>
              <span className="text-2xl font-medium mb-4">Name of Famous recipes:</span> <span className="text-lg text-orange-600 uppercase">
                {recipes_names}
              </span>
            </p>
            <p className="text-4xl my-4 font-bold text-green-800">
              {year_of_experience} Year of experience
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 my-10">
        {
            recipes.map(recipe=> <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>)
        }
      </div>
    </div>
  );
};

export default RBanner;
