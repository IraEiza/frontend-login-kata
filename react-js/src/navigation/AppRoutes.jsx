import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Recipes } from "../pages/Recipes.jsx";
import { useNavigate } from "react-router-dom";

import { login } from '../services/authService.js'
import { ErrorBoundary } from "../errors/ErrorBoundary.jsx";

const Component = () => {
  const navigate = useNavigate();
  return <ErrorBoundary><Login navigate={navigate} login={login}/></ErrorBoundary>
}

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Component />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
