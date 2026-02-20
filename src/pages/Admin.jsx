import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import "../assets/css/Admin.css";

// Imágenes de los cursos estáticos
import img1 from "../assets/img1-cursos.jpg";
import img2 from "../assets/img2-cursos.jpg";
import img3 from "../assets/img3-cursos.png";
import img4 from "../assets/img4-cursos.jpg";
import img5 from "../assets/img5-cursos.webp";
import img6 from "../assets/img6-cursos.jpg";

const ADMIN_PASSWORD = "burjassot2026";

const CATEGORIAS = [
  "CREATIVIDAD",
  "AUDIOVISUAL",
  "TECNOLOGÍA",
  "GASTRONOMÍA",
  "IDIOMAS",
  "MÚSICA",
];

// Cursos estáticos — misma estructura que los de Supabase
const CURSOS_ESTATICOS = [
  {
    id: "static-1",
    imagen_url: img1,
    categoria: "CREATIVIDAD",
    titulo: "Taller de Cerámica Artística",
    horario: "Lunes y Miércoles, 18h",
    lugar: "Centro Cultural",
    tipo: "Gratuito",
    activo: true,
    esEstatico: true,
  },
  {
    id: "static-2",
    imagen_url: img2,
    categoria: "AUDIOVISUAL",
    titulo: "Fotografía Urbana con Móvil",
    horario: "Sábado, 10h",
    lugar: "Exterior",
    tipo: "Gratuito",
    activo: true,
    esEstatico: true,
  },
  {
    id: "static-3",
    imagen_url: img3,
    categoria: "TECNOLOGÍA",
    titulo: "Introducción a Python",
    horario: "Martes, 17h",
    lugar: "Online",
    tipo: "Gratuito",
    activo: true,
    esEstatico: true,
  },
  {
    id: "static-4",
    imagen_url: img4,
    categoria: "GASTRONOMÍA",
    titulo: "Cocina Saludable y Rápida",
    horario: "Viernes, 18h",
    lugar: "Mercado Municipal",
    tipo: "Gratuito",
    activo: true,
    esEstatico: true,
  },
  {
    id: "static-5",
    imagen_url: img5,
    categoria: "IDIOMAS",
    titulo: "Club de Conversación Inglés",
    horario: "Jueves, 18h",
    lugar: "Casa de la Juventud",
    tipo: "Gratuito",
    activo: true,
    esEstatico: true,
  },
  {
    id: "static-6",
    imagen_url: img6,
    categoria: "MÚSICA",
    titulo: "Taller de Guitarra Flamenca",
    horario: "Lunes, 17:30h",
    lugar: "Casa de Música",
    tipo: "De pago",
    activo: true,
    esEstatico: true,
  },
];

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Cursos de Supabase
  const [cursosDB, setCursosDB] = useState([]);
  // Cursos estáticos con posibilidad de edición local
  const [cursosEstaticos, setCursosEstaticos] = useState(CURSOS_ESTATICOS);

  const [formulario, setFormulario] = useState({
    titulo: "", categoria: "", horario: "", lugar: "", tipo: "Gratuito", imagen_url: "", activo: true,
  });
  const [imagenFile, setImagenFile] = useState(null);
  const [imagenPreview, setImagenPreview] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [editandoEstatico, setEditandoEstatico] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [subiendo, setSubiendo] = useState(false);

  // Filtros
  const [filtroCat, setFiltroCat] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  useEffect(() => {
    if (autenticado) fetchCursos();
  }, [autenticado]);

  async function fetchCursos() {
    const { data, error } = await supabase
      .from("cursos")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error("Error cargando cursos:", error);
    setCursosDB(data || []);
  }

  // Todos los cursos combinados para la tabla
  const todosCursos = [...cursosDB, ...cursosEstaticos];

  const cursosMostrados = todosCursos.filter((c) => {
    const catOk    = filtroCat     ? c.categoria === filtroCat : true;
    const estadoOk = filtroEstado === ""       ? true
                   : filtroEstado === "activo" ? c.activo
                   : !c.activo;
    return catOk && estadoOk;
  });

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setAutenticado(true);
      setError("");
    } else {
      setError("Contraseña incorrecta");
    }
  }

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
    const extension = imagenFile.name.split(".").pop();
    const nombreArchivo = `curso_${Date.now()}.${extension}`;
    const { error } = await supabase.storage
      .from("cursos-imagenes")
      .upload(nombreArchivo, imagenFile, { upsert: true });
    if (error) {
      setMensaje("❌ Error al subir la imagen: " + error.message);
      return null;
    }
    const { data } = supabase.storage.from("cursos-imagenes").getPublicUrl(nombreArchivo);
    return data.publicUrl;
  }

  async function handleGuardar() {
    if (!formulario.titulo || !formulario.categoria) {
      setMensaje("⚠️ El título y la categoría son obligatorios.");
      return;
    }
    setSubiendo(true);
    setMensaje("");

    // Si estamos editando un curso estático, lo actualizamos localmente
    // y lo "promovemos" a Supabase para que persista
    if (editandoEstatico) {
      const imagenUrl = imagenFile ? await subirImagen() : formulario.imagen_url;
      if (imagenUrl === null) { setSubiendo(false); return; }

      const datosCurso = {
        titulo:     formulario.titulo,
        categoria:  formulario.categoria,
        horario:    formulario.horario,
        lugar:      formulario.lugar,
        tipo:       formulario.tipo,
        imagen_url: imagenUrl,
        activo:     formulario.activo,
      };

      // Guardamos en Supabase como nuevo registro
      const { error } = await supabase.from("cursos").insert([datosCurso]);
      if (!error) {
        // Eliminamos el estático localmente (ya está en Supabase)
        setCursosEstaticos((prev) => prev.filter((c) => c.id !== editandoId));
        setMensaje("✅ Curso guardado y actualizado correctamente.");
        resetFormulario();
        fetchCursos();
      } else {
        setMensaje("❌ Error al guardar: " + error.message);
      }
      setSubiendo(false);
      return;
    }

    // Curso de Supabase normal
    const imagenUrl = await subirImagen();
    if (imagenUrl === null) { setSubiendo(false); return; }
    const datos = { ...formulario, imagen_url: imagenUrl || formulario.imagen_url };

    if (editandoId) {
      const { error } = await supabase.from("cursos").update(datos).eq("id", editandoId);
      if (!error) { setMensaje("✅ Curso actualizado correctamente."); resetFormulario(); fetchCursos(); }
      else setMensaje("❌ Error al actualizar: " + error.message);
    } else {
      const { error } = await supabase.from("cursos").insert([datos]);
      if (!error) { setMensaje("✅ Curso añadido correctamente."); resetFormulario(); fetchCursos(); }
      else setMensaje("❌ Error al guardar: " + error.message);
    }
    setSubiendo(false);
  }

  function handleEditar(curso) {
    setFormulario({
      titulo:     curso.titulo,
      categoria:  curso.categoria,
      horario:    curso.horario  || "",
      lugar:      curso.lugar    || "",
      tipo:       curso.tipo     || "Gratuito",
      imagen_url: curso.esEstatico ? "" : (curso.imagen_url || ""),
      activo:     curso.activo,
    });
    setImagenPreview(curso.imagen_url || "");
    setImagenFile(null);
    setEditandoId(curso.id);
    setEditandoEstatico(curso.esEstatico || false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleToggleActivo(curso) {
    if (curso.esEstatico) {
      setCursosEstaticos((prev) =>
        prev.map((c) => c.id === curso.id ? { ...c, activo: !c.activo } : c)
      );
      return;
    }
    const { error } = await supabase
      .from("cursos")
      .update({ activo: !curso.activo })
      .eq("id", curso.id);
    if (!error) fetchCursos();
  }

  async function handleEliminar(curso) {
    if (!window.confirm(`¿Seguro que quieres eliminar "${curso.titulo}"?`)) return;

    if (curso.esEstatico) {
      setCursosEstaticos((prev) => prev.filter((c) => c.id !== curso.id));
      setMensaje("🗑️ Curso eliminado de la lista.");
      return;
    }

    const { error } = await supabase.from("cursos").delete().eq("id", curso.id);
    if (!error) { setMensaje("🗑️ Curso eliminado correctamente."); fetchCursos(); }
    else setMensaje("❌ Error al eliminar: " + error.message);
  }

  function resetFormulario() {
    setFormulario({ titulo: "", categoria: "", horario: "", lugar: "", tipo: "Gratuito", imagen_url: "", activo: true });
    setEditandoId(null);
    setEditandoEstatico(false);
    setImagenFile(null);
    setImagenPreview("");
  }

  // LOGIN
  if (!autenticado) {
    return (
      <div className="admin-login">
        <div className="admin-login-box">
          <h2>🔐 Panel de Administración</h2>
          <p>Introduce la contraseña para acceder</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {error && <p className="admin-error">{error}</p>}
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    );
  }

  // PANEL
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Panel de Administración — Cursos</h1>
        <button className="btn-cerrar" onClick={() => setAutenticado(false)}>Cerrar sesión</button>
      </div>

      {mensaje && (
        <div className={`admin-mensaje ${mensaje.startsWith("❌") ? "admin-mensaje-error" : ""}`}>
          {mensaje}
        </div>
      )}

      {/* FORMULARIO */}
      <div className="admin-form">
        <h2>
          {editandoEstatico
            ? "✏️ Editar Curso Base (se guardará en la base de datos)"
            : editandoId
            ? "✏️ Editar Curso"
            : "➕ Añadir Nuevo Curso"}
        </h2>
        {editandoEstatico && (
          <p className="admin-aviso-estatico">
            ⚠️ Estás editando un curso base. Al guardar, los cambios se guardarán en Supabase y el curso original se reemplazará.
          </p>
        )}
        <div className="form-grid">
          <div className="form-group">
            <label>Título *</label>
            <input name="titulo" value={formulario.titulo} onChange={handleChange} placeholder="Ej: Taller de Cerámica" />
          </div>
          <div className="form-group">
            <label>Categoría *</label>
            <select name="categoria" value={formulario.categoria} onChange={handleChange}>
              <option value="">Selecciona categoría</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
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

      {/* LISTA */}
      <div className="admin-lista">
        <div className="admin-lista-header">
          <h2>📋 Todos los cursos ({cursosMostrados.length} / {todosCursos.length})</h2>
          <div className="admin-filtros">
            <select
              className="admin-filtro-select"
              value={filtroCat}
              onChange={(e) => setFiltroCat(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              className="admin-filtro-select"
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
            >
              <option value="">Todos los estados</option>
              <option value="activo">Visibles</option>
              <option value="inactivo">Ocultos</option>
            </select>
            {(filtroCat || filtroEstado) && (
              <button
                className="btn-limpiar-admin"
                onClick={() => { setFiltroCat(""); setFiltroEstado(""); }}
              >
                ✕ Limpiar
              </button>
            )}
          </div>
        </div>

        {cursosMostrados.length === 0 ? (
          <p className="admin-vacio">No hay cursos con los filtros seleccionados.</p>
        ) : (
          <table className="admin-tabla">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Categoría</th>
                <th>Horario</th>
                <th>Lugar</th>
                <th>Tipo</th>
                <th>Origen</th>
                <th>Visible</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cursosMostrados.map((c) => (
                <tr key={c.id} className={!c.activo ? "fila-inactiva" : ""}>
                  <td>
                    {c.imagen_url
                      ? <img src={c.imagen_url} alt={c.titulo} className="tabla-img" />
                      : <span className="tabla-sin-img">—</span>}
                  </td>
                  <td><strong>{c.titulo}</strong></td>
                  <td>{c.categoria}</td>
                  <td>{c.horario || "—"}</td>
                  <td>{c.lugar || "—"}</td>
                  <td>{c.tipo}</td>
                  <td>
                    <span className={`badge-origen ${c.esEstatico ? "badge-base" : "badge-db"}`}>
                      {c.esEstatico ? "Base" : "BD"}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`btn-toggle ${c.activo ? "btn-toggle-on" : "btn-toggle-off"}`}
                      onClick={() => handleToggleActivo(c)}
                      title={c.activo ? "Ocultar en la web" : "Mostrar en la web"}
                    >
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
    </div>
  );
}