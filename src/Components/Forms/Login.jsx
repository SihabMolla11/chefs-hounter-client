import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-container">
      <div className="p-10 w-[50%] mb-20 mx-auto rounded-xl bg-slate-100">
        <h1 className="text-3xl mb-4 font-bold">Login in to your account</h1>
        <form className="space-y-6" >
          <div>
            <h2 className="text-xl font-medium my-2 ml-2">email</h2>
            <input
              type="email"
              name="email"
              id="email"
              className="my-input"
              placeholder="write your email"
              required
            />
          </div>
          <div>
            <h2 className="text-xl font-medium my-2 ml-2">password</h2>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="write your password"
              className="my-input"
              required
            />
          </div>
          <input className="w-full my-btn" type="submit" value="Login" />
        </form>
        <div className="flex justify-between my-6 px-6">
          <button className="flex text-lg items-center gap-2 btn btn-outline btn-blue-500 hover:bg-green-700 text-blue-500">
            <span className="text-2xl"><FaGoogle /></span> <p className=" capitalize">Sign in with Google</p>
          </button>
          <button className="flex text-lg items-center gap-2 btn btn-outline btn-blue-500 hover:bg-slate-950 text-blue-500">
            <span className="text-2xl"><FaGithub /></span> <p className=" capitalize">Sign in with Git hub</p>
          </button>
        </div>
        <p>If your are new in this site? <Link className="underline text-red-800" to="/register">Please Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
