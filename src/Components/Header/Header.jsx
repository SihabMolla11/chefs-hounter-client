import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const user = false;

  return (
    <div className="bg-[#E4F1FE] mb-16 ">
      <div className="navbar  my-container">
        <div className="flex-1">
          <Link className="normal-case text-xl">
            <img title="Ymma Aribic Foods hunter" className="w-40" src={logo} alt="" />
          </Link>
          <div className="ml-16">
            <NavLink className="px-3 font-medium text-lg" to="/">
              Home
            </NavLink>
            <NavLink className="px-3 font-medium text-lg" to="/blog">
              Blog
            </NavLink>
          </div>
        </div>
        <div className="mr-10">
          {user ? (
            <button className="my-btn">
              Log Out
            </button>
          ) : (
            <button className="my-btn">
              <Link  to="#">
                Login
              </Link>
            </button>
          )}
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
