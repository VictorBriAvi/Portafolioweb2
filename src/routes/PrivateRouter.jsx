import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { log } = useContext(AuthContext);

  return log.log ? children : <Outlet />;
};

export default PrivateRouter;
