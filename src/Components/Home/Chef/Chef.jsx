import React from "react";
import { FaRegThumbsUp, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {id, img_url, name, year_of_experience, recipes_names, likes } = chef;

  return (
    <div>
      <div className="card card-compact h-full bg-[#E4F1Fe] shadow-xl">
        <figure>
          <img className="h-[250px] w-full" src={img_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-semibold">{name}</h2>
          <p className="text-lg font-bold text-green-800">
            {year_of_experience} Year of experience
          </p>
          <p>
            <span className="text-2xl">Some Famous recipes:-</span> <br />{" "}
            <span className="text-lg text-orange-600 uppercase">
              {recipes_names}
            </span>
          </p>
          <div className="card-actions items-center justify-end">
            <p className="flex items-center gap-4 text-2xl font-bold text-blue-500">
               <FaRegThumbsUp /> {likes}
            </p>
            <Link to={`/recipes/${id}`}>
              <button className="my-btn gap-4">
                View Recipes <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
