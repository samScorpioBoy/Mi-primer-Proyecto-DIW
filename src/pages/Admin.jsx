import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import "../assets/css/Admin.css";
import { CATEGORIAS } from "../data/cursos";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const TABS = [
  { id: "cursos",        label: "📚 Cursos" },
  { id: "inscripciones", label: "📋 Solicitudes de Inscripción" },
];

export default function Admin() {
  const [autenticado, setAutenticado]   = useState(false);
  const [password, setPassword]         = useState("");
  const [loginError, setLoginError]     = useState("");
  const [tabActiva, setTabActiva]       = useState("cursos");

  // ── Estado: Cursos
  const [cursos, setCursos]             = useState([]);
  const [formulario, setFormulario]     = useState({
    titulo: "", categoria: "", horario: "", lugar: "", tipo: "Gratuito", imagen_url: "", activo: true,
  });
  const [imagenFile, setImagenFile]     = useState(null);
  const [imagenPreview, setImagenPreview] = useState("");
  const [editandoId, setEditandoId]     = useState(null);
  const [mensaje, setMensaje]           = useState("");
  const [subiendo, setSubiendo]         = useState(false);
  const [filtroCat, setFiltroCat]       = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  // ── Estado: Inscripciones
  const [inscripciones, setInscripciones]       = useState([]);
  const [cargandoInsc, setCargandoInsc]         = useState(false);
  const [filtroInscCurso, setFiltroInscCurso]   = useState("");
  const [inscSeleccionada, setInscSeleccionada] = useState(null);
  // IDs abiertos en esta sesión (para no depender de la columna leida en DB)
  const [abiertos, setAbiertos]                 = useState(() => {
    try { return new Set(JSON.parse(sessionStorage.getItem("insc_abiertas") || "[]")); }
    catch { return new Set(); }
  });

  useEffect(() => {
    if (!autenticado) return;
    fetchCursos();
    fetchInscripciones();
  }, [autenticado]);

  // ── Fetch cursos
  async function fetchCursos() {
    const { data, error } = await supabase
      .from("cursos").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    setCursos(data || []);
  }

  // ── Fetch inscripciones
  async function fetchInscripciones() {
    setCargandoInsc(true);
    const { data, error } = await supabase
      .from("inscripciones").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    setInscripciones(data || []);
    setCargandoInsc(false);
  }

  // ── Marcar como abierta localmente (sin depender de columna DB)
  function abrirInscripcion(insc) {
    setInscSeleccionada(insc);
    const nuevos = new Set(abiertos);
    nuevos.add(insc.id);
    setAbiertos(nuevos);
    try { sessionStorage.setItem("insc_abiertas", JSON.stringify([...nuevos])); } catch {}
    // Intentar actualizar en DB si existe la columna 
    if (!insc.leida) {
      supabase.from("inscripciones").update({ leida: true }).eq("id", insc.id).then(() => {});
    }
  }

  function mostrarMensaje(msg) {
    setMensaje(msg);
    setTimeout(() => setMensaje(""), 4000);
  }

  // Contadores — una inscripción es "vista" si está en abiertos (sesión) O si leida=true en DB
  const esVista = (insc) => abiertos.has(insc.id) || insc.leida === true;
  const totalInscripciones = inscripciones.length;
  const noLeidas = inscripciones.filter((i) => !esVista(i)).length;

  // ── Filtros cursos
  const cursosMostrados = cursos.filter((c) => {
    const catOk    = filtroCat    ? c.categoria === filtroCat : true;
    const estadoOk = filtroEstado === ""       ? true
                   : filtroEstado === "activo" ? c.activo : !c.activo;
    return catOk && estadoOk;
  });

  // ── Filtros inscripciones
  const inscFiltradas = inscripciones.filter((i) =>
    filtroInscCurso ? i.curso === filtroInscCurso : true
  );

  const cursosConInsc = [...new Set(inscripciones.map((i) => i.curso))].sort();

  // ── Login
  function handleLogin() {
    if (password === ADMIN_PASSWORD) { setAutenticado(true); setLoginError(""); }
    else setLoginError("Contraseña incorrecta");
  }

  // ── Formulario cursos
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormulario({ ...formulario, [name]: type === "checkbox" ? checked : value });
  }

  function handleImagenChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImagenFile(file);
    setImagenPreview(URL.createObjectURL(file));
  }

  async function subirImagen() {
    if (!imagenFile) return formulario.imagen_url;
    const ext = imagenFile.name.split(".").pop();
    const nombre = `curso_${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("cursos-imagenes").upload(nombre, imagenFile, { upsert: true });
    if (error) { mostrarMensaje("❌ Error al subir imagen: " + error.message); return null; }
    const { data } = supabase.storage.from("cursos-imagenes").getPublicUrl(nombre);
    return data.publicUrl;
  }

  async function handleGuardar() {
    if (!formulario.titulo || !formulario.categoria) {
      mostrarMensaje("⚠️ El título y la categoría son obligatorios."); return;
    }
    setSubiendo(true);
    const imagenUrl = await subirImagen();
    if (imagenUrl === null) { setSubiendo(false); return; }
    const datos = { ...formulario, imagen_url: imagenUrl || formulario.imagen_url };
    if (editandoId) {
      const { error } = await supabase.from("cursos").update(datos).eq("id", editandoId);
      if (!error) { mostrarMensaje("✅ Curso actualizado."); resetFormulario(); fetchCursos(); }
      else mostrarMensaje("❌ Error: " + error.message);
    } else {
      const { error } = await supabase.from("cursos").insert([datos]);
      if (!error) { mostrarMensaje("✅ Curso añadido."); resetFormulario(); fetchCursos(); }
      else mostrarMensaje("❌ Error: " + error.message);
    }
    setSubiendo(false);
  }

  function handleEditar(curso) {
    setFormulario({
      titulo: curso.titulo, categoria: curso.categoria, horario: curso.horario || "",
      lugar: curso.lugar || "", tipo: curso.tipo || "Gratuito",
      imagen_url: curso.imagen_url || "", activo: curso.activo,
    });
    setImagenPreview(curso.imagen_url || "");
    setImagenFile(null);
    setEditandoId(curso.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleToggleActivo(curso) {
    const { error } = await supabase.from("cursos").update({ activo: !curso.activo }).eq("id", curso.id);
    if (!error) fetchCursos();
  }

  async function handleEliminar(curso) {
    if (!window.confirm(`¿Eliminar "${curso.titulo}"?`)) return;
    const { error } = await supabase.from("cursos").delete().eq("id", curso.id);
    if (!error) { mostrarMensaje("🗑️ Curso eliminado."); fetchCursos(); }
    else mostrarMensaje("❌ Error: " + error.message);
  }

  function resetFormulario() {
    setFormulario({ titulo: "", categoria: "", horario: "", lugar: "", tipo: "Gratuito", imagen_url: "", activo: true });
    setEditandoId(null); setImagenFile(null); setImagenPreview("");
  }

  async function handleEliminarInsc(insc) {
    if (!window.confirm(`¿Eliminar la inscripción de "${insc.nombre}"?`)) return;
    const { error } = await supabase.from("inscripciones").delete().eq("id", insc.id);
    if (!error) { mostrarMensaje("🗑️ Inscripción eliminada."); fetchInscripciones(); setInscSeleccionada(null); }
    else mostrarMensaje("❌ Error: " + error.message);
  }

  function formatFecha(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  // ── LOGIN
  if (!autenticado) {
    return (
      <div className="admin-login">
        <div className="admin-login-box">
          <h2>🔐 Panel de Administración</h2>
          <p>Introduce la contraseña para acceder</p>
          <input type="password" placeholder="Contraseña" value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
          {loginError && <p className="admin-error">{loginError}</p>}
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    );
  }

  // ── PANEL
  return (
    <div className="admin-page">

      {/* HEADER */}
      <div className="admin-header">
        <h1>Panel de Administración</h1>
        <button className="btn-cerrar" onClick={() => setAutenticado(false)}>Cerrar sesión</button>
      </div>

      {/* MENSAJE GLOBAL */}
      {mensaje && (
        <div className={`admin-mensaje ${mensaje.startsWith("❌") ? "admin-mensaje-error" : ""}`}>
          {mensaje}
        </div>
      )}

      {/* TABS */}
      <div className="admin-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`admin-tab ${tabActiva === tab.id ? "admin-tab--activa" : ""}`}
            onClick={() => setTabActiva(tab.id)}
          >
            {tab.label}
            {tab.id === "inscripciones" && (
              <span className="admin-tab-counters">
                {noLeidas > 0 && (
                  <span className="admin-tab-badge" title="Nuevas sin leer">
                    {noLeidas} nueva{noLeidas !== 1 ? "s" : ""}
                  </span>
                )}
                {totalInscripciones > 0 && (
                  <span className="admin-tab-total" title="Total de solicitudes">
                    Total: {totalInscripciones}
                  </span>
                )}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── TAB: CURSOS */}
      {tabActiva === "cursos" && (
        <>
          <div className="admin-form">
            <h2>{editandoId ? "✏️ Editar Curso" : "➕ Añadir Nuevo Curso"}</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Título *</label>
                <input name="titulo" value={formulario.titulo} onChange={handleChange} placeholder="Ej: Taller de Cerámica" />
              </div>
              <div className="form-group">
                <label>Categoría *</label>
                <select name="categoria" value={formulario.categoria} onChange={handleChange}>
                  <option value="">Selecciona categoría</option>
                  {CATEGORIAS.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Horario</label>
                <input name="horario" value={formulario.horario} onChange={handleChange} placeholder="Ej: Lunes 18h" />
              </div>
              <div className="form-group">
                <label>Lugar</label>
                <input name="lugar" value={formulario.lugar} onChange={handleChange} placeholder="Ej: Centro Cultural" />
              </div>
              <div className="form-group">
                <label>Tipo</label>
                <select name="tipo" value={formulario.tipo} onChange={handleChange}>
                  <option value="Gratuito">Gratuito</option>
                  <option value="De pago">De pago</option>
                </select>
              </div>
              <div className="form-group">
                <label>Imagen del curso</label>
                <input type="file" accept="image/*" onChange={handleImagenChange} className="input-file" />
                {imagenPreview && <img src={imagenPreview} alt="Preview" className="imagen-preview" />}
              </div>
              <div className="form-group form-check">
                <label>
                  <input type="checkbox" name="activo" checked={formulario.activo} onChange={handleChange} />
                  Visible en la web
                </label>
              </div>
            </div>
            <div className="form-botones">
              <button className="btn-guardar" onClick={handleGuardar} disabled={subiendo}>
                {subiendo ? "Guardando..." : editandoId ? "Guardar Cambios" : "Añadir Curso"}
              </button>
              {editandoId && <button className="btn-cancelar" onClick={resetFormulario}>Cancelar</button>}
            </div>
          </div>

          <div className="admin-lista">
            <div className="admin-lista-header">
              <h2>📋 Todos los cursos ({cursosMostrados.length} / {cursos.length})</h2>
              <div className="admin-filtros">
                <select className="admin-filtro-select" value={filtroCat} onChange={(e) => setFiltroCat(e.target.value)}>
                  <option value="">Todas las categorías</option>
                  {CATEGORIAS.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <select className="admin-filtro-select" value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                  <option value="">Todos los estados</option>
                  <option value="activo">Visibles</option>
                  <option value="inactivo">Ocultos</option>
                </select>
                {(filtroCat || filtroEstado) && (
                  <button className="btn-limpiar-admin" onClick={() => { setFiltroCat(""); setFiltroEstado(""); }}>✕ Limpiar</button>
                )}
              </div>
            </div>

            {cursosMostrados.length === 0 ? (
              <p className="admin-vacio">No hay cursos con los filtros seleccionados.</p>
            ) : (
              <table className="admin-tabla">
                <thead>
                  <tr>
                    <th>Imagen</th><th>Título</th><th>Categoría</th>
                    <th>Horario</th><th>Lugar</th><th>Tipo</th>
                    <th>Visible</th><th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cursosMostrados.map((c) => (
                    <tr key={c.id} className={!c.activo ? "fila-inactiva" : ""}>
                      <td>{c.imagen_url ? <img src={c.imagen_url} alt={c.titulo} className="tabla-img" /> : <span className="tabla-sin-img">—</span>}</td>
                      <td><strong>{c.titulo}</strong></td>
                      <td>{c.categoria}</td>
                      <td>{c.horario || "—"}</td>
                      <td>{c.lugar || "—"}</td>
                      <td>{c.tipo}</td>
                      <td>
                        <button className={`btn-toggle ${c.activo ? "btn-toggle-on" : "btn-toggle-off"}`} onClick={() => handleToggleActivo(c)}>
                          {c.activo ? "✅ Sí" : "❌ No"}
                        </button>
                      </td>
                      <td>
                        <button className="btn-editar" onClick={() => handleEditar(c)}>✏️ Editar</button>
                        <button className="btn-eliminar" onClick={() => handleEliminar(c)}>🗑️ Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}

      {/* ── TAB: INSCRIPCIONES */}
      {tabActiva === "inscripciones" && (
        <div className="admin-lista">
          <div className="admin-lista-header">
            <h2>📋 Inscripciones recibidas ({inscFiltradas.length} / {totalInscripciones})</h2>
            <div className="admin-filtros">
              <select className="admin-filtro-select" value={filtroInscCurso} onChange={(e) => setFiltroInscCurso(e.target.value)}>
                <option value="">Todos los cursos</option>
                {cursosConInsc.map((nombre) => (
                  <option key={nombre} value={nombre}>{nombre}</option>
                ))}
              </select>
              {filtroInscCurso && (
                <button className="btn-limpiar-admin" onClick={() => setFiltroInscCurso("")}>✕ Limpiar</button>
              )}
              <button className="btn-refrescar" onClick={fetchInscripciones}>🔄 Actualizar</button>
            </div>
          </div>

          {cargandoInsc && <p className="admin-vacio">Cargando inscripciones...</p>}

          {!cargandoInsc && inscFiltradas.length === 0 && (
            <p className="admin-vacio">No hay inscripciones todavía.</p>
          )}

          {!cargandoInsc && inscFiltradas.length > 0 && (
            <table className="admin-tabla">
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Edad</th>
                  <th>Curso</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {inscFiltradas.map((insc) => (
                  <tr key={insc.id} className={!esVista(insc) ? "fila-no-leida" : ""}>
                    <td>
                      {esVista(insc)
                        ? <span className="badge-leida">✓ Vista</span>
                        : <span className="badge-nueva">🔵 Nueva</span>}
                    </td>
                    <td style={{ whiteSpace: "nowrap", fontSize: "12px" }}>{formatFecha(insc.created_at)}</td>
                    <td><strong>{insc.nombre}</strong></td>
                    <td><a href={`tel:${insc.telefono}`} className="insc-tel">{insc.telefono}</a></td>
                    <td>
                      {insc.email
                        ? <a href={`mailto:${insc.email}`} className="insc-tel">{insc.email}</a>
                        : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                    <td>{insc.edad || "—"}</td>
                    <td><span className="badge-curso-insc">{insc.curso}</span></td>
                    <td>
                      <button className="btn-ver-insc" onClick={() => abrirInscripcion(insc)}>👁 Ver</button>
                      <button className="btn-eliminar" onClick={() => handleEliminarInsc(insc)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* ── MODAL DETALLE INSCRIPCIÓN */}
      {inscSeleccionada && (
        <div className="modal-overlay" onClick={() => setInscSeleccionada(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={() => setInscSeleccionada(null)}>✕</button>
            <h3>Detalle de inscripción</h3>
            <div className="modal-campo"><span>📅 Fecha</span><strong>{formatFecha(inscSeleccionada.created_at)}</strong></div>
            <div className="modal-campo"><span>👤 Nombre</span><strong>{inscSeleccionada.nombre}</strong></div>
            <div className="modal-campo">
              <span>📞 Teléfono</span>
              <a href={`tel:${inscSeleccionada.telefono}`} className="insc-tel">{inscSeleccionada.telefono}</a>
            </div>
            {inscSeleccionada.email && (
              <div className="modal-campo">
                <span>✉️ Email</span>
                <a href={`mailto:${inscSeleccionada.email}`} className="insc-tel">{inscSeleccionada.email}</a>
              </div>
            )}
            <div className="modal-campo"><span>🎂 Edad</span><strong>{inscSeleccionada.edad || "No indicada"}</strong></div>
            <div className="modal-campo"><span>📚 Curso</span><strong>{inscSeleccionada.curso}</strong></div>
            {inscSeleccionada.mensaje && (
              <div className="modal-campo modal-campo--full">
                <span>💬 Mensaje</span>
                <p className="modal-mensaje">{inscSeleccionada.mensaje}</p>
              </div>
            )}
            <div className="modal-acciones">
              <button className="btn-eliminar" onClick={() => handleEliminarInsc(inscSeleccionada)}>🗑️ Eliminar inscripción</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}