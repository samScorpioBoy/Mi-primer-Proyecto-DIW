import { useState, useEffect, useRef } from "react";
import { supabase } from "../services/supabaseClient";
import { useLang } from "../context/LangContext";
import "../assets/css/Cursos.css";
import cursosHero from "../assets/hero-cursos.jpg";
import { CATEGORIAS } from "../data/cursos";

const CAT_CLASS = {
  "CREATIVIDAD": "cat-creatividad",
  "AUDIOVISUAL": "cat-audiovisual",
  "TECNOLOGÍA":  "cat-tecnologia",
  "GASTRONOMÍA": "cat-gastronomia",
  "IDIOMAS":     "cat-idiomas",
  "MÚSICA":      "cat-musica",
};

const PLACEHOLDER = "https://placehold.co/400x200?text=Sin+imagen";
const FORM_VACIO  = { nombre: "", telefono: "", edad: "", email: "", curso: "", mensaje: "" };

//Validaciones
function validarFormulario(form) {
  const errores = {};

  // Nombre: solo letras y espacios, mínimo 2 caracteres
  if (!form.nombre.trim()) {
    errores.nombre = "El nombre es obligatorio.";
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,}$/.test(form.nombre.trim())) {
    errores.nombre = "Introduce un nombre válido (solo letras).";
  }

  // Teléfono: solo números, espacios y +, entre 9 y 15 dígitos
  if (!form.telefono.trim()) {
    errores.telefono = "El teléfono es obligatorio.";
  } else if (!/^[+\d\s]{9,15}$/.test(form.telefono.trim())) {
    errores.telefono = "Introduce un teléfono válido (9-15 dígitos).";
  }

  // Edad: número entre 14 y 35 
  if (form.edad !== "") {
    const edadNum = Number(form.edad);
    if (!Number.isInteger(edadNum) || edadNum < 14 || edadNum > 35) {
      errores.edad = "La edad debe ser un número entre 14 y 35.";
    }
  }

  // Email: formato válido, opcional pero si se rellena debe ser válido
  if (form.email.trim() !== "") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errores.email = "Introduce un correo electrónico válido.";
    }
  }

  // Curso obligatorio
  if (!form.curso) {
    errores.curso = "Selecciona un curso.";
  }

  return errores;
}

export default function Cursos() {
  const { t } = useLang();

  const [todosLosCursos, setTodosLosCursos] = useState([]);
  const [cargando, setCargando]             = useState(true);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroTipo, setFiltroTipo]           = useState("");

  const [form, setForm]         = useState(FORM_VACIO);
  const [errores, setErrores]   = useState({});
  const [enviando, setEnviando] = useState(false);
  const [formMsg, setFormMsg]   = useState(null);
  const formRef = useRef(null);

  useEffect(() => { fetchCursos(); }, []);

  async function fetchCursos() {
    setCargando(true);
    const { data, error } = await supabase
      .from("cursos")
      .select("*")
      .eq("activo", true)
      .order("created_at", { ascending: false });
    if (error) console.error("Error cargando cursos:", error);
    setTodosLosCursos(data || []);
    setCargando(false);
  }

  const cursosFiltrados = todosLosCursos.filter((c) => {
    const catOk  = filtroCategoria ? c.categoria === filtroCategoria : true;
    const tipoOk = filtroTipo      ? c.tipo === filtroTipo           : true;
    return catOk && tipoOk;
  });

  function limpiarFiltros() { setFiltroCategoria(""); setFiltroTipo(""); }

  function traducirTipo(tipo) {
    return tipo === "Gratuito" ? t("cursos.gratis") : t("cursos.pago");
  }

  function handleInscribirse(curso) {
    setForm((prev) => ({ ...prev, curso: curso.titulo }));
    setErrores({});
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleChange(e) {
    const { id, value } = e.target;
    const campo = id.replace("insc-", "");
    setForm((prev) => ({ ...prev, [campo]: value }));
    // Limpiar el error del campo en tiempo real
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: undefined }));
    }
  }

  async function handleEnviarInscripcion(e) {
    e.preventDefault();

    const nuevosErrores = validarFormulario(form);
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setEnviando(true);
    setFormMsg(null);
    setErrores({});

    const { error } = await supabase.from("inscripciones").insert([{
      nombre:   form.nombre.trim(),
      telefono: form.telefono.trim(),
      edad:     form.edad ? parseInt(form.edad) : null,
      email:    form.email.trim() || null,
      curso:    form.curso,
      mensaje:  form.mensaje.trim() || null,
      leida:    false,
    }]);

    if (!error) {
      setFormMsg({ tipo: "ok", texto: "✅ ¡Inscripción enviada! Nos pondremos en contacto contigo pronto." });
      setForm(FORM_VACIO);
    } else {
      console.error(error);
      setFormMsg({ tipo: "error", texto: "❌ Error al enviar. Inténtalo de nuevo." });
    }
    setEnviando(false);
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
        {(filtroCategoria || filtroTipo) && (
          <button className="btn-limpiar" onClick={limpiarFiltros}>{t("cursos.limpiar")}</button>
        )}
      </div>

      {/* GRID */}
      {cargando && <div className="cursos-estado"><p>{t("cursos.cargando")}</p></div>}

      {!cargando && cursosFiltrados.length === 0 && (
        <div className="cursos-estado">
          <p>{t("cursos.sinResultados")}</p>
          <button className="btn-limpiar" onClick={limpiarFiltros}>{t("cursos.verTodos")}</button>
        </div>
      )}

      {!cargando && cursosFiltrados.length > 0 && (
        <>
          <p className="cursos-contador">
            {cursosFiltrados.length} {cursosFiltrados.length !== 1 ? t("cursos.cursos") : t("cursos.curso")} {t("cursos.disponibles")}
          </p>
          <div className="cursos-grid">
            {cursosFiltrados.map((c) => (
              <div className="curso-card" key={c.id}>
                <div className="curso-img">
                  <img
                    src={c.imagen_url || PLACEHOLDER}
                    alt={c.titulo}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                  />
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
                  <button className="btn-inscribete" onClick={() => handleInscribirse(c)}>
                    {t("cursos.inscribete")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="cursos-divider" />

      {/* FORMULARIO DE INSCRIPCIÓN */}
      <div className="inscripcion-section" ref={formRef}>
        <div className="inscripcion-header">
          <h2>📝 Formulario de Solicitud de Inscripción</h2>
          <p>Rellena el formulario y nos pondremos en contacto contigo para confirmar tu plaza.</p>
        </div>

        <form className="inscripcion-form" onSubmit={handleEnviarInscripcion} noValidate>
          <div className="inscripcion-grid">

            {/* NOMBRE */}
            <div className={`inscripcion-field ${errores.nombre ? "field-error" : ""}`}>
              <label htmlFor="insc-nombre">Nombre completo *</label>
              <input
                id="insc-nombre"
                type="text"
                placeholder="Ej: María García López"
                value={form.nombre}
                onChange={handleChange}
              />
              {errores.nombre && <span className="error-msg">⚠ {errores.nombre}</span>}
            </div>

            {/* TELÉFONO */}
            <div className={`inscripcion-field ${errores.telefono ? "field-error" : ""}`}>
              <label htmlFor="insc-telefono">Teléfono *</label>
              <input
                id="insc-telefono"
                type="tel"
                placeholder="Ej: 612 345 678"
                value={form.telefono}
                onChange={handleChange}
              />
              {errores.telefono && <span className="error-msg">⚠ {errores.telefono}</span>}
            </div>

            {/* EDAD */}
            <div className={`inscripcion-field ${errores.edad ? "field-error" : ""}`}>
              <label htmlFor="insc-edad">Edad</label>
              <input
                id="insc-edad"
                type="number"
                min="14"
                max="35"
                placeholder="Ej: 22"
                value={form.edad}
                onChange={handleChange}
              />
              {errores.edad && <span className="error-msg">⚠ {errores.edad}</span>}
            </div>

            {/* EMAIL */}
            <div className={`inscripcion-field ${errores.email ? "field-error" : ""}`}>
              <label htmlFor="insc-email">Correo electrónico</label>
              <input
                id="insc-email"
                type="email"
                placeholder="Ej: maria@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errores.email && <span className="error-msg">⚠ {errores.email}</span>}
            </div>

            {/* CURSO */}
            <div className={`inscripcion-field inscripcion-field--full ${errores.curso ? "field-error" : ""}`}>
              <label htmlFor="insc-curso">Curso al que te quieres inscribir *</label>
              <select
                id="insc-curso"
                value={form.curso}
                onChange={handleChange}
                disabled={cargando}
              >
                <option value="">
                  {cargando ? "Cargando cursos..." : "Selecciona un curso"}
                </option>
                {todosLosCursos.map((c) => (
                  <option key={c.id} value={c.titulo}>{c.titulo}</option>
                ))}
              </select>
              {errores.curso && <span className="error-msg">⚠ {errores.curso}</span>}
            </div>

            {/* MENSAJE */}
            <div className="inscripcion-field inscripcion-field--full">
              <label htmlFor="insc-mensaje">Mensaje o comentario (opcional)</label>
              <textarea
                id="insc-mensaje"
                rows={3}
                placeholder="¿Tienes alguna pregunta o comentario sobre el curso?"
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>

          </div>

          {formMsg && (
            <div className={`inscripcion-msg ${formMsg.tipo === "ok" ? "inscripcion-msg--ok" : "inscripcion-msg--error"}`}>
              {formMsg.texto}
            </div>
          )}

          <button type="submit" className="btn-enviar-inscripcion" disabled={enviando || cargando}>
            {enviando ? "Enviando..." : "Enviar Inscripción →"}
          </button>
        </form>
      </div>

    </div>
  );
}