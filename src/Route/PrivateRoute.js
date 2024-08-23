import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
