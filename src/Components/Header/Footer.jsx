import React from "react";
import logo from "../../assets/logo.png";
import FooterNavbar from "../footerNav/FooterNavbar";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" mt-5 bg-slate-300 p-10">
      <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] items-center">
        <div>
          <img className="max-w-[250px]" src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Website Creator Detail </h3>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
            facere dolorum aut quas dolor adipisci ipsam recusandae excepturi
            quidem, officia harum, eaque vero sapiente natus vel culpa ratione
            veniam maxime impedit corrupti tenetur blanditiis nostrum sit.
          </small>
        </div>
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          <FooterNavbar></FooterNavbar>
          <div>
            <h3 className="text-2xl font-bold mb-4">Social</h3>
            <ul className="flex flex-col md:flex-row gap-8 p-4">
              <li>
                <Link to="#" className="text-5xl text-[#094bff]"><FaFacebook /></Link>
              </li>
              <li>
              <Link to="#" className="text-5xl text-[#2888f5]"><FaTwitter /></Link>
              </li>
              <li>
              <Link to="#" className="text-5xl text-[#ff3e0e]">< FaInstagram/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="text-center -mb-4">
        <small>© design copy from - Tastebite</small>
      </div>
    </div>
  );
};

export default Footer;