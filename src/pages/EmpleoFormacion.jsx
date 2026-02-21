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
      titulo: t("empleo.s1Title"),
      subtitulo: t("empleo.s1Sub"),
      desc: t("empleo.s1Desc"),
      btnKey: "empleo.btn1",
      btnClass: "btn-empleo-dark",
      url: "https://labora.gva.es/es/inici",
    },
    {
      icon: cardDos,
      titulo: t("empleo.s2Title"),
      subtitulo: t("empleo.s2Sub"),
      desc: t("empleo.s2Desc"),
      btnKey: "empleo.btn2",
      btnClass: "btn-empleo-yellow",
      url: "https://www.becaseducacion.gob.es/becas-y-ayudas.html",
    },
    {
      icon: cardTres,
      titulo: t("empleo.s3Title"),
      subtitulo: "",
      desc: t("empleo.s3Desc"),
      btnKey: "empleo.btn3",
      btnClass: "btn-empleo-green",
      url: "https://www.todofp.es",
    },
  ];

  const infoDetalle = [
    {
      numero: "01",
      acento: "btn-empleo-dark",
      color: "info-dark",
      emoji: "🏢",
      titulo: t("empleo.info1Title"),
      subtitulo: t("empleo.info1Sub"),
      cuerpo: t("empleo.info1Body"),
      url: "https://labora.gva.es/es/inici",
      btnKey: "empleo.btn1",
    },
    {
      numero: "02",
      acento: "btn-empleo-yellow",
      color: "info-yellow",
      emoji: "🎓",
      titulo: t("empleo.info2Title"),
      subtitulo: t("empleo.info2Sub"),
      cuerpo: t("empleo.info2Body"),
      url: "https://www.becaseducacion.gob.es/becas-y-ayudas.html",
      btnKey: "empleo.btn2",
    },
    {
      numero: "03",
      acento: "btn-empleo-green",
      color: "info-green",
      emoji: "⚙️",
      titulo: t("empleo.info3Title"),
      subtitulo: t("empleo.info3Sub"),
      cuerpo: t("empleo.info3Body"),
      url: "https://www.todofp.es",
      btnKey: "empleo.btn3",
    },
  ];

  return (
    <div className="empleo-page">

      {/* HERO */}
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

      {/* INTRO */}
      <div className="empleo-intro">
        <p>{t("empleo.intro1")}</p>
        <p>{t("empleo.intro2")}</p>
      </div>

      {/* CARDS RESUMEN */}
      <div className="empleo-servicios">
        {servicios.map((s, i) => (
          <div className="empleo-card" key={i}>
            <div className="empleo-card-icon">
              <img src={s.icon} alt={s.titulo} />
            </div>
            <h3>{s.titulo}</h3>
            {s.subtitulo && <h4>{s.subtitulo}</h4>}
            <p>{s.desc}</p>
            <button
              className={`btn-empleo ${s.btnClass}`}
              onClick={() => {
                const el = document.getElementById(`empleo-info-${i}`);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {t("empleo.masInfo")}
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <div className="empleo-footer-text">
        <p>{t("empleo.footer")}</p>
      </div>

      <div className="empleo-divider" />

      {/* SECCIÓN MÁS INFORMACIÓN */}
      <div className="empleo-info-section">
        <div className="empleo-info-header">
          <h2>{t("empleo.infoTitle")}</h2>
          <p>{t("empleo.infoSubtitle")}</p>
        </div>

        <div className="empleo-info-lista">
          {infoDetalle.map((item, i) => (
            <div className={`empleo-info-bloque empleo-info-bloque--${item.color}`} key={i} id={`empleo-info-${i}`}>
              <div className="empleo-info-numero">{item.numero}</div>
              <div className="empleo-info-contenido">
                <div className="empleo-info-head">
                  <span className="empleo-info-emoji">{item.emoji}</span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <span className="empleo-info-subtitulo">{item.subtitulo}</span>
                  </div>
                </div>
                <p>{item.cuerpo}</p>
                <button
                  className={`btn-empleo ${item.acento} empleo-info-btn`}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {t(item.btnKey)} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="empleo-divider" />
    </div>
  );
}