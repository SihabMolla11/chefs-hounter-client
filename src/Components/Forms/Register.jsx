import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Router/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const nevigate = useNavigate();
  const [error, setError] = useState("");

  const handelRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length <= 5) {
      setError("Password add at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        nevigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="my-container">
      <div className="p-10 w-[50%] mb-20 mx-auto rounded-xl bg-slate-100">
        <h1 className="text-3xl mb-4 font-bold">Login in to your account</h1>
        <form onSubmit={handelRegister} className="space-y-6">
          <div>
            <h2 className="text-xl font-medium my-2 ml-2">Name</h2>
            <input
              type="text"
              name="name"
              id="name"
              className="my-input"
              placeholder="write your name"
              required
            />
          </div>
          <div>
            <h2 className="text-xl font-medium my-2 ml-2">Phot Url</h2>
            <input
              type="text"
              name="photo"
              id="photo"
              className="my-input"
              placeholder="Give your photo url"
            />
          </div>
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
          <input className="w-full my-btn" type="submit" value="Sign ing" />
        </form>
        <div>
          <p className="text-red-600 my-2">{error}</p>
        </div>
        <p className="mt-6">
          If your have already an account?{" "}
          <Link className="underline text-red-800" to="/Login">
            Please Loing
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
