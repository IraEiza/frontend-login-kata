import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Recipes } from "../pages/Recipes.jsx";
import { useNavigate } from "react-router-dom";


export const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login navigate={navigate}/>} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
