import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import CreateCandidate from "../pages/Candidate/CreateCandidate";
import ViewCandidate from "../pages/Candidate/ViewCandidate";
import ViewCandidates from "../pages/Candidate/ViewCandidates";
import ExaminationBodyView from "../pages/ExamBodies/ExaminationBodyView";
import ViewInstitutes from "../pages/Instititution/ViewInstitutes";
import NotFound from "../pages/NotFound";
import SubjectsView from "../pages/subjects/SubjectsView";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { loggedInUser } from "../services/services";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ResultsPage from "../pages/Results/ResultsPage";
import ScratchCardList from "../pages/ScratchCards/ScratchCardList";
import PurchaseCard from "../pages/Purchase/PurchaseCard";

const privateRoutes = [
  { path: "/", component: DashboardPage },
  { path: "/institutions", component: ViewInstitutes },
  { path: "/subjects", component: SubjectsView },
  { path: "/examBodies", component: ExaminationBodyView },
  { path: "/viewCandidates", component: ViewCandidates },
  { path: "/viewCandidate/:id", component: ViewCandidate },
  { path: "/createCandidate", component: CreateCandidate },
  { path: "/scratchCards", component: ScratchCardList },
];

const publicRoutes = [
  { path: "/", component: WelcomePage },
  { path: "/result", component: ResultsPage },
  { path: "/signIn", component: SignIn },
  { path: "/purchaseCard", component: PurchaseCard },
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
