import React, { useContext } from "react";
import { AuthContext } from "./Router/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center ">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
