import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useLang } from "../context/LangContext";
import "../assets/css/Cursos.css";
import cursosHero from "../assets/hero-cursos.jpg";
import img1 from "../assets/img1-cursos.jpg";
import img2 from "../assets/img2-cursos.jpg";
import img3 from "../assets/img3-cursos.png";
import img4 from "../assets/img4-cursos.jpg";
import img5 from "../assets/img5-cursos.webp";
import img6 from "../assets/img6-cursos.jpg";

const CATEGORIAS = ["CREATIVIDAD", "AUDIOVISUAL", "TECNOLOGÍA", "GASTRONOMÍA", "IDIOMAS", "MÚSICA"];

const CAT_CLASS = {
  "CREATIVIDAD": "cat-creatividad",
  "AUDIOVISUAL": "cat-audiovisual",
  "TECNOLOGÍA":  "cat-tecnologia",
  "GASTRONOMÍA": "cat-gastronomia",
  "IDIOMAS":     "cat-idiomas",
  "MÚSICA":      "cat-musica",
};

const CURSOS_ESTATICOS = [
  { id: "static-1", imagen_url: img1, categoria: "CREATIVIDAD", titulo: "Taller de Cerámica Artística", horario: "Lunes y Miércoles, 18h", lugar: "Centro Cultural",      tipo: "Gratuito",  activo: true },
  { id: "static-2", imagen_url: img2, categoria: "AUDIOVISUAL", titulo: "Fotografía Urbana con Móvil",  horario: "Sábado, 10h",            lugar: "Exterior",             tipo: "Gratuito",  activo: true },
  { id: "static-3", imagen_url: img3, categoria: "TECNOLOGÍA",  titulo: "Introducción a Python",        horario: "Martes, 17h",            lugar: "Online",               tipo: "Gratuito",  activo: true },
  { id: "static-4", imagen_url: img4, categoria: "GASTRONOMÍA", titulo: "Cocina Saludable y Rápida",    horario: "Viernes, 18h",           lugar: "Mercado Municipal",    tipo: "Gratuito",  activo: true },
  { id: "static-5", imagen_url: img5, categoria: "IDIOMAS",     titulo: "Club de Conversación Inglés",  horario: "Jueves, 18h",            lugar: "Casa de la Juventud",  tipo: "Gratuito",  activo: true },
  { id: "static-6", imagen_url: img6, categoria: "MÚSICA",      titulo: "Taller de Guitarra Flamenca",  horario: "Lunes, 17:30h",          lugar: "Casa de Música",       tipo: "De pago",   activo: true },
];

const PLACEHOLDER = "https://placehold.co/400x200?text=Sin+imagen";

export default function Cursos() {
  const { t } = useLang();
  const [cursosDB, setCursosDB] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  useEffect(() => { fetchCursos(); }, []);

  async function fetchCursos() {
    setCargando(true);
    const { data, error } = await supabase
      .from("cursos").select("*").eq("activo", true).order("created_at", { ascending: false });
    if (error) console.error("Error cargando cursos:", error);
    setCursosDB(data || []);
    setCargando(false);
  }

  const todosCursos = [...cursosDB, ...CURSOS_ESTATICOS];

  const cursosFiltrados = todosCursos.filter((c) => {
    const catOk  = filtroCategoria ? c.categoria === filtroCategoria : true;
    const tipoOk = filtroTipo      ? c.tipo === filtroTipo           : true;
    return catOk && tipoOk;
  });

  const hayFiltros = filtroCategoria || filtroTipo;

  function limpiarFiltros() {
    setFiltroCategoria("");
    setFiltroTipo("");
  }

  // El tipo mostrado en el badge se traduce
  function traducirTipo(tipo) {
    return tipo === "Gratuito" ? t("cursos.gratis") : t("cursos.pago");
  }

  return (
    <div className="cursos-page">

      {/* HERO */}
      <div className="cursos-hero">
        <div className="cursos-hero-text">
          <h1>
            {t("cursos.heroTitle").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p>{t("cursos.heroDesc")}</p>
        </div>
        <div className="cursos-hero-img">
          <img src={cursosHero} alt="Cursos y talleres" />
        </div>
      </div>

      {/* FILTROS */}
      <div className="cursos-filtros">
        <select className="filtro-select" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="">{t("cursos.filtCat")}</option>
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0) + cat.slice(1).toLowerCase()}</option>
          ))}
        </select>

        <select className="filtro-select" value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          <option value="">{t("cursos.filtTipo")}</option>
          <option value="Gratuito">{t("cursos.gratis")}</option>
          <option value="De pago">{t("cursos.pago")}</option>
        </select>

        {hayFiltros && (
          <button className="btn-limpiar" onClick={limpiarFiltros}>{t("cursos.limpiar")}</button>
        )}
      </div>

      {/* CARGANDO */}
      {cargando && <div className="cursos-estado"><p>{t("cursos.cargando")}</p></div>}

      {/* SIN RESULTADOS */}
      {!cargando && cursosFiltrados.length === 0 && (
        <div className="cursos-estado">
          <p>{t("cursos.sinResultados")}</p>
          <button className="btn-limpiar" onClick={limpiarFiltros}>{t("cursos.verTodos")}</button>
        </div>
      )}

      {/* GRID */}
      {!cargando && cursosFiltrados.length > 0 && (
        <>
          <p className="cursos-contador">
            {cursosFiltrados.length} {cursosFiltrados.length !== 1 ? t("cursos.cursos") : t("cursos.curso")} {t("cursos.disponibles")}
          </p>
          <div className="cursos-grid">
            {cursosFiltrados.map((c) => (
              <div className="curso-card" key={c.id}>
                <div className="curso-img">
                  <img src={c.imagen_url || PLACEHOLDER} alt={c.titulo} onError={(e) => { e.target.src = PLACEHOLDER; }} />
                </div>
                <div className="curso-info">
                  <div className="curso-top-badges">
                    <span className={`curso-categoria ${CAT_CLASS[c.categoria] || ""}`}>{c.categoria}</span>
                    <span className={`curso-tipo ${c.tipo === "Gratuito" ? "tipo-gratis" : "tipo-pago"}`}>
                      {traducirTipo(c.tipo)}
                    </span>
                  </div>
                  <h3>{c.titulo}</h3>
                  {c.horario && <p className="curso-horario">🕐 {c.horario}</p>}
                  {c.lugar   && <p className="curso-lugar">📍 {c.lugar}</p>}
                  <button className="btn-inscribete">{t("cursos.inscribete")}</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="cursos-divider" />
    </div>
  );
}