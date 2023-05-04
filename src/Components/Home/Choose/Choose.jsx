import React from "react";
import { FaGulp, FaFolderMinus, FaUserNinja } from "react-icons/fa";

const Choose = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-between items-center">
      <div className="card  h-full w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[60px] text-[#81B947]">
            <FaGulp />
          </h2>
          <p className="text-2xl mb-2 font-medium">Serve Health food</p>
          <p>we serve foot all healthly food <br /> here you can choose any food your like.</p>
        </div>
      </div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[60px] text-[#81B947]">
            <FaFolderMinus />
          </h2>
          <p className="text-2xl mb-2 font-medium">best quality</p>
          <p>Our foods quality is very awesome <br /> we will gev Excellently what are your want quality food.</p>
        </div>
      </div>
      <div className="card h-full w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[60px] text-[#81B947]">
            <FaUserNinja />
          </h2>
          <p className="text-2xl mb-2 font-medium">Our chefs serves</p>
          <p>We have world class arabian chefs <br /> our chefs create Foods to your wont.</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
