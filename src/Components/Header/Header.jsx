import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../Router/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);

  const Logout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-[#E4F1FE] mb-16 ">
      <div className=" flex flex-col lg:flex-row justify-between items-center py-2 px-4  my-container">
        <div className="flex justify-between items-center gap-[50vw] flex-1">
          <Link to="/" className="normal-case text-xl flex items-center gap-4">
            <img
              title="Ymma Aribic Foods hunter"
              className="w-20"
              src={logo}
              alt="logo"
            />
            <h2 className=" hidden md:block font-medium text-3xl">
              Chefs Hunter
            </h2>
          </Link>
          <div onClick={() => setOpen(!open)} className="block md:hidden">
            {open ? (
              <span className="text-4xl">
                <FaTimes />
              </span>
            ) : (
              <span className="text-4xl">
                <FaBars />
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="ml-16 hidden md:flex">
            <NavLink className="px-3 font-medium text-lg" to="/">
              Home
            </NavLink>
            <NavLink className="px-3 font-medium text-lg" to="/blog">
              Blog
            </NavLink>
            <NavLink className="px-3 font-medium text-lg" to="/login">
              Login
            </NavLink>
            <NavLink className="px-3 font-medium text-lg" to="/register">
              Register
            </NavLink>
          </div>
          {open && (
            <div className="ml-16 flex flex-col my-6 md:hidden">
              <NavLink className="px-3 font-medium text-lg" to="/">
                Home
              </NavLink>
              <NavLink className="px-3 font-medium text-lg" to="/blog">
                Blog
              </NavLink>
              <NavLink className="px-3 font-medium text-lg" to="/login">
                Login
              </NavLink>
              <NavLink className="px-3 font-medium text-lg" to="/register">
                Register
              </NavLink>
            </div>
          )}
        </div>
        <div className="flex gap-[40vw] mt-4 md:mt-0  md:gap-2 ">
          <div className="mr-10">
            {user ? (
              <button onClick={Logout} className="my-btn">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="my-btn">
                {loading ? (
                  <>
                    <span
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    ></span>
                    <span>Loading</span>
                  </>
                ) : (
                  <p>Login</p>
                )}
              </Link>
            )}
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" title={`${user?.displayName}`}>
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <span className="text-[40px]">
                  <FaUserCircle />
                </span>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
