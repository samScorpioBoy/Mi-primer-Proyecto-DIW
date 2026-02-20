import { useLang } from "../context/LangContext";
import "../assets/css/EmpleoFormacion.css";
import heroImg from "../assets/empleoFormacion-hero.jpg";
import cardUno from "../assets/card1-empleoFormacion.png";
import cardDos from "../assets/card2-empleoFormacion.png";
import cardTres from "../assets/card3-empleoFormacion.png";

export default function EmpleoFormacion() {
  const { t } = useLang();

  const servicios = [
    {
      icon: cardUno,
      titulo: "Labora",
      subtitulo: "(Servicio público)",
      desc: "Ofertas de empleo, formación y orientación laboral",
      btnKey: "empleo.btn1",
      btnClass: "btn-empleo-dark",
      url: "https://www.labora.gva.es",
    },
    {
      icon: cardDos,
      titulo: "BECA MEC",
      subtitulo: "(Ministerio de Educación)",
      desc: "Ayudas para estudios Bachiller, Formación Profesional y Universitarios",
      btnKey: "empleo.btn2",
      btnClass: "btn-empleo-yellow",
      url: "https://www.becasmec.es",
    },
    {
      icon: cardTres,
      titulo: "TODO FP",
      subtitulo: "",
      desc: "Buscador oficial para encontrar tu ciclo de FP (Básico, Medio y Superior). Descubre todos los centros educativos públicos y privados homologados de forma segura.",
      btnKey: "empleo.btn3",
      btnClass: "btn-empleo-green",
      url: "https://www.todofp.es",
    },
  ];

  return (
    <div className="empleo-page">
      <div className="empleo-hero">
        <div className="empleo-hero-text">
          <h1>
            {t("empleo.heroTitle").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
        </div>
        <div className="empleo-hero-img">
          <img src={heroImg} alt="Empleo y formación" />
        </div>
      </div>

      <div className="empleo-intro">
        <p>{t("empleo.intro1")}</p>
        <p>{t("empleo.intro2")}</p>
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
              {t(s.btnKey)}
            </button>
          </div>
        ))}
      </div>

      <div className="empleo-footer-text">
        <p>{t("empleo.footer")}</p>
      </div>
      <div className="empleo-divider" />
    </div>
  );
}