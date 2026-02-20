import "../assets/css/Vivienda.css";
import viviendaImg from "../assets/vivienda.png";
import casitaImg from "../assets/casita-vivienda.png";

export default function Vivienda() {
  const ayudas = [
    {
      icons: [casitaImg, "💲"],
      title: "Bono Alquiler Joven Estatal",
      desc: "Hasta 250€/mes para tu alquier. Ayuda directa del gobierno.",
      btnText: "Requisitos y Solitud",
      btnClass: "btn-dark",
    },
    {
      icons: ["📍", "❤️"],
      title: "Ayudas Municipales Burjassot",
      desc: "Apoyo específico del Ayuntamiento empadronados.",
      btnText: "Consultar en el Ayuntamiento",
      btnClass: "btn-yellow",
    },
    {
      icons: ["🔑", "📄"],
      title: "Guía de Emancipación",
      desc: "Aprende sobre contrato, fianzas y tus derechos.",
      btnText: "Descargar Guía PDF",
      btnClass: "btn-green",
    },
  ];

  return (
    <div className="vivienda-page">
      {/* HERO */}
      <div className="vivienda-hero">
        <div className="vivienda-hero-text">
          <h1>Tu Espacio Burjassot:<br />Guía de Vivienda Joven</h1>
        </div>
        <div className="vivienda-hero-img">
          <img src={viviendaImg} alt="Jóvenes con cajas de mudanza" />
        </div>
      </div>

      {/* AYUDAS */}
      <div className="vivienda-content">
        <h2 className="ayudas-title">Ayudas y Subvenciones Clave</h2>

        <div className="ayudas-grid">
          {ayudas.map((a, i) => (
            <div className="ayuda-card" key={i}>
              <div className="ayuda-icons">
                  {a.icons.map((icon, j) =>
                  icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".svg")
                    ? <img key={j} src={icon} alt="" className="ayuda-icon-img" />
                    : <span key={j} className="ayuda-icon">{icon}</span>
                  )}
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <button className={`ayuda-btn ${a.btnClass}`}>{a.btnText}</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}