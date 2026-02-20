import "../assets/css/EmpleoFormacion.css";
import heroImg from "../assets/empleoFormacion-hero.jpg";
import cardUno from "../assets/card1-empleoFormacion.png";
import cardDos from "../assets/card2-empleoFormacion.png";
import cardTres from "../assets/card3-empleoFormacion.png";

const servicios = [
  {
    icon: cardUno,
    titulo: "Labora",
    subtitulo: "(Servicio público)",
    desc: "Ofertas de empleo, formación y orientación laboral",
    btnText: "Accede a Labora",
    btnClass: "btn-empleo-dark",
    url: "https://www.labora.gva.es",
  },
  {
    icon: cardDos,
    titulo: "BECA MEC",
    subtitulo: "(Ministerio de Educación)",
    desc: "Ayudas para estudios Bachiller, Formación Profesional y Universitarios",
    btnText: "Más Información",
    btnClass: "btn-empleo-yellow",
    url: "https://www.becasmec.es",
  },
  {
    icon: cardTres,
    titulo: "TODO FP",
    subtitulo: "",
    desc: "Buscador oficial para encontrar tu ciclo de FP (Básico, Medio y Superior). Descubre todos los centros educativos públicos y privados homologados de forma segura.",
    btnText: "Ver Recursos Locales",
    btnClass: "btn-empleo-green",
    url: "https://www.todofp.es",
  },
];

export default function EmpleoFormacion() {
  return (
    <div className="empleo-page">
      <div className="empleo-hero">
        <div className="empleo-hero-text">
          <h1>Tu futuro Laboral en Burjassot:<br />Empleo y Becas Joven</h1>
        </div>
        <div className="empleo-hero-img">
          <img src={heroImg} alt="Empleo y formación" />
        </div>
      </div>
      <div className="empleo-intro">
        <p>Creemos en tu talento y queremos impulsarte hacia el futuro que mereces.</p>
        <p>¿Qué lo económico no te frene? La Beca MEC es el impulso clave que necesitas para tu crecimiento profesional.</p>
      </div>
      <div className="empleo-servicios">
        {servicios.map((s, i) => (
          <div className="empleo-card" key={i}>
            <div className="empleo-card-icon">
              <img src={s.icon} alt={s.titulo} />
            </div>
            <h3>{s.titulo}</h3>
            {s.subtitulo && <h4>{s.subtitulo}</h4>}
            <p>{s.desc}</p>
            <button className={`btn-empleo ${s.btnClass}`} onClick={() => window.open(s.url, "_blank")}>
              {s.btnText}
            </button>
          </div>
        ))}
      </div>
      <div className="empleo-footer-text">
        <p>¿Te cuesta encontrar empleo? No estás solo en la búsqueda. Gracias a LABORA, multiplica tus probabilidades de acceder al mercado laboral.</p>
      </div>
      <div className="empleo-divider" />
    </div>
  );
}