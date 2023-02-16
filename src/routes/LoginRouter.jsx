import React, { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
/* import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter"; */

const LoginScreen = lazy(() => import("../pages/LoginScreen"));
const AppRouter = lazy(() => import("./AppRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));
const PublicRouter = lazy(() => import("./PublicRouter"));

/* El BrowserRouter es usado para ser */

const LoginRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <Routes>
          {/*           <Route
            path="/PortafolioWeb"
            element={
              <PublicRouter>
                <LoginScreen />
              </PublicRouter>
            }
          /> */}

          <Route
            path="*"
            element={
              /*               <PrivateRouter>
                <AppRouter />
              </PrivateRouter> */
              <PublicRouter>
                <AppRouter />
              </PublicRouter>
            }
          />
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default LoginRouter;
