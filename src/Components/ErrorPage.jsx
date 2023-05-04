import React from "react";
import { Link } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-[30vh]">
      <div>
        <h1 className="text-9xl font-extrabold text-slate-600">Oops!</h1>
        <div className="mt-8 font-semibold text-4xl">
          <h3>404 - page not found </h3>
        </div>
        <div>
          <Link to="/" className="my-btn w-full my-6">
            <FaHouseUser className="mr-4 text-2xl" />
            Got back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
