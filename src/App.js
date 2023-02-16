import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducers";
import LoginRouter from "./routes/LoginRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
