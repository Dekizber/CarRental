import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CarCatalogPage from "./pages/CarCatalogPage/CarCatalogPage";
import CarFavoritesPage from "./pages/CarFavoritesPage/CarFavoritesPage";
CarFavoritesPage;
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CarCatalogPage />} />
        <Route path="/favorites" element={<CarFavoritesPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
