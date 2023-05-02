import React from "react";
import { FaRegHandPointRight, FaArrowRight } from "react-icons/fa";


const Chef = ({ chef }) => {
  const { img_url, name, year_of_experience, recipes_names, likes } = chef;

  return (
    <div>
      <div className="card card-compact h-full w-96 bg-[#E4F1Fe] shadow-xl">
        <figure>
          <img src={img_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-semibold">{name}</h2>
          <p className="text-lg font-bold text-green-800">
            {year_of_experience} Year of experience
          </p>
            <p>
              <span className="text-2xl">Some Famous recipes:-</span> <br /> <span className="text-lg text-orange-600 uppercase">{recipes_names}</span>
            </p>
          <div className="card-actions items-center justify-end">
            <p className="flex items-center gap-2 text-2xl font-bold text-blue-500">{likes} <FaRegHandPointRight/></p>
            <button className="my-btn gap-4">View Recipes <FaArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
