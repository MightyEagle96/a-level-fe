import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { loggedInUser } from "../services/services";

const privateRoutes = [{ path: "/", component: WelcomePage }];

const publicRoutes = [{ path: "/", component: WelcomePage }];

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {loggedInUser
          ? privateRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))
          : publicRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
