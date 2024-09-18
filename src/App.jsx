import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CarCatalogPage from "./pages/CarCatalogPage/CarCatalogPage";
import CarFavoritesPage from "./pages/CarFavoritesPage/CarFavoritesPage";
CarFavoritesPage;
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CarCatalogPage />} />
        <Route path="/favorites" element={<CarFavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
