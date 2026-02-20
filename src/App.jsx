import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

// Páginas
import Home from "./pages/Home";
import Cultura from "./pages/Cultura";
import Carne from "./pages/Carne";
import Cursos from "./pages/Cursos";
import Vivienda from "./pages/Vivienda";
import Footer from "./components/Footer";
import Salud from "./pages/Salud";
import EmpleoFormacion from "./pages/EmpleoFormacion";
import Admin from "./pages/Admin";

function AdminBadge() {
  const location = useLocation();
  if (location.pathname !== "/admin") return null;

  return (
    <div className="admin-badge">
      🔐 SESIÓN ADMIN
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ES");

  return (
    <Router>
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="Jove Burjassot" className="logo" />

          <nav className="menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>INICIO</NavLink>
            <NavLink to="/cultura" className={({ isActive }) => isActive ? "active" : ""}>CULTURA / OCIO</NavLink>
            <NavLink to="/carne" className={({ isActive }) => isActive ? "active" : ""}>CARNE JOVEN</NavLink>
            <NavLink to="/empleo" className={({ isActive }) => isActive ? "active" : ""}>EMPLEO Y FORMACIÓN</NavLink>
            <NavLink to="/descubre" className={({ isActive }) => isActive ? "active" : ""}>CURSOS</NavLink>
            <NavLink to="/vivienda" className={({ isActive }) => isActive ? "active" : ""}>VIVIENDA</NavLink>
            <NavLink to="/salud" className={({ isActive }) => isActive ? "active" : ""}>SALUD</NavLink>
          </nav>

          <div className="banderas">
            {["ES", "EN", "VAL"].map((l) => (
              <span
                key={l}
                className={`lang-text ${lang === l ? "active-lang" : ""}`}
                onClick={() => setLang(l)}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Badge flotante fixed — solo visible en /admin */}
      <AdminBadge />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/carne" element={<Carne />} />
        <Route path="/salud" element={<Salud />} />
        <Route path="/empleo" element={<EmpleoFormacion />} />
        <Route path="/descubre" element={<Cursos />} />
        <Route path="/vivienda" element={<Vivienda />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
}