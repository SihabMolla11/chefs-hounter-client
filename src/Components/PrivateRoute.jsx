import React, { useContext } from "react";
import { AuthContext } from "./Router/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login"></Navigate>
  }
};

export default PrivateRoute;
