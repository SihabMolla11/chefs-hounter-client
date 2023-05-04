import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../Router/AuthProvider";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  // console.log(user)

  const Logout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-[#E4F1FE] mb-16 ">
      <div className="navbar  my-container">
        <div className="flex-1">
          <Link className="normal-case text-xl">
            <img
              title="Ymma Aribic Foods hunter"
              className="w-40"
              src={logo}
              alt=""
            />
          </Link>
          <div className="ml-16">
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
        </div>
        <div className="mr-10">
          {user ? (
            <button onClick={Logout} className="my-btn">
              Log Out
            </button>
          ) : (
            <button className="my-btn">
              {loading ? (
                <>
                  <span
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></span> 
                  <span>Loading</span>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </button>
          )}
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-6/298268684_120002130779036_6961490149997549543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZJdhzpWE-sW6HSa7Wp3W-PlxQUTeHZ0Q-XFBRN4dnRE7AmDwsww2g2brWPqPKrrPBVCyhq6bh2d3A3ipNmuK8&_nc_ohc=uszh-0uLS8EAX__pHH_&_nc_ht=scontent.fjsr12-1.fna&oh=00_AfCbuPUQIYUdRSKt2S9YwduvHzIAoPkFC5ULmzg3N_0XDg&oe=645868C5" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
