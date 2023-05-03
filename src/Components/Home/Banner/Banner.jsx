import React from "react";
import bannerImg from "../../../assets/banner.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex-col flex-col-reverse md:flex-row flex justify-between items-center bg-[#E4F1Fe] rounded-lg  md:pl-6 gap-4">
      <div className="md:w-[40%] p-6 md:p-0">
        <h2 className="text-[45px] font-semibold text-gray-600">
          Food Is Not Just Eating Engery. It's An Experience
        </h2>
        <p className="my-6">
          Here we can see many bad ideas. We can see different types of chef's
          food. We can see many types of Sadar food. Today we will have a
          different taste from different types of food. Through this website, I
          will get to know some Arabic chefs, and witness their different styles
          of recipes.
        </p>
        <button className="flex items-center gap-4 my-btn mt-6 font-medium text-lg">
          Get start <FaLongArrowAltRight />
        </button>
      </div>
      <div className="md:w-[60%]">
        <img
          className="rounded-br-lg rounded-tr-lg"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </div>
  );
};

export default Banner;
