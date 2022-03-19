import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewInstitutes from "../pages/Instititution/ViewInstitutes";
import NotFound from "../pages/NotFound";
import SubjectsView from "../pages/subjects/SubjectsView";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { loggedInUser } from "../services/services";

const privateRoutes = [{ path: "/", component: WelcomePage }];

const publicRoutes = [
  { path: "/", component: WelcomePage },
  { path: "/institutions", component: ViewInstitutes },
  { path: "/subjects", component: SubjectsView },
  { path: "*", component: NotFound },
];

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
