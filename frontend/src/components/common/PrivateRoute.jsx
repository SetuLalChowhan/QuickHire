import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/redux/slices/authSlice";

const PrivateRoute = ({ adminOnly = false }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
