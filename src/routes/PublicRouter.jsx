import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRouter = ({ children }) => {
  const { log } = useContext(AuthContext);

  return !log.log ? children : <Navigate to="/" />;
};

export default PublicRouter;
