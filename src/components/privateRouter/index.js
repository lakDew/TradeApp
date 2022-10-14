import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element}) => {
    let isLoggedIn = localStorage.getItem("login");
  
    return isLoggedIn ? element : <Navigate to="/login" replace={true} />;
  };
export default PrivateRoute;