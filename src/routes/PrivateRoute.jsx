import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuthContext from "../Hook/UseAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
