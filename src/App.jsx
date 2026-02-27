import { HashRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

import { LangProvider, useLang } from "./context/LangContext";

// Páginas
import Home from "./pages/Home";
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
  return <div className="admin-badge">🔐 SESIÓN ADMIN</div>;
}

function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Jove Burjassot" className="logo" />

        <nav className="menu">
          <NavLink to="/"         className={({ isActive }) => isActive ? "active" : ""}>{t("nav.inicio")}</NavLink>
          <NavLink to="/carne"    className={({ isActive }) => isActive ? "active" : ""}>{t("nav.carne")}</NavLink>
          <NavLink to="/empleo"   className={({ isActive }) => isActive ? "active" : ""}>{t("nav.empleo")}</NavLink>
          <NavLink to="/cursos"   className={({ isActive }) => isActive ? "active" : ""}>{t("nav.cursos")}</NavLink>
          <NavLink to="/vivienda" className={({ isActive }) => isActive ? "active" : ""}>{t("nav.vivienda")}</NavLink>
          <NavLink to="/salud"    className={({ isActive }) => isActive ? "active" : ""}>{t("nav.salud")}</NavLink>
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
  );
}

function AppContent() {
  return (
    <>
      <Header />
      <AdminBadge />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/carne"    element={<Carne />} />
        <Route path="/salud"    element={<Salud />} />
        <Route path="/empleo"   element={<EmpleoFormacion />} />
        <Route path="/cursos"   element={<Cursos />} />
        <Route path="/vivienda" element={<Vivienda />} />
        <Route path="/admin"    element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </Router>
  );
}
