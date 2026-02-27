import { useLang } from "../context/LangContext";
import "../assets/css/Vivienda.css";
import viviendaImg from "../assets/vivienda.png";
import casitaImg from "../assets/casita-vivienda.png";

export default function Vivienda() {
  const { t } = useLang();

  const ayudas = [
    {
      icons: [casitaImg, "💲"],
      titleKey: "vivienda.card1Title",
      descKey:  "vivienda.card1Desc",
      btnKey:   "vivienda.card1Btn",
      btnClass: "btn-dark",
      url: "https://www.mivau.gob.es/vivienda/bono-alquiler-joven",
      infoId: "vivienda-info-0",
    },
    {
      icons: ["📍", "❤️"],
      titleKey: "vivienda.card2Title",
      descKey:  "vivienda.card2Desc",
      btnKey:   "vivienda.card2Btn",
      btnClass: "btn-yellow",
      url: "https://imv.seg-social.es/",
      infoId: "vivienda-info-1",
    },
    {
      icons: ["🔑", "📄"],
      titleKey: "vivienda.card3Title",
      descKey:  "vivienda.card3Desc",
      btnKey:   "vivienda.card3Btn",
      btnClass: "btn-green",
      url: "https://www.ico.es/avales-ico-para-la-compra-de-mi-primera-vivienda",
      infoId: "vivienda-info-2",
    },
  ];

  const infoDetalle = [
    {
      numero: "01",
      color: "info-dark",
      emoji: "🏠",
      titulo:    t("vivienda.info1Titulo"),
      subtitulo: t("vivienda.info1Sub"),
      cuerpo:    t("vivienda.info1Body"),
      url: "https://www.mivau.gob.es/vivienda/bono-alquiler-joven",
      btnClass: "btn-dark",
      btnText:   t("vivienda.info1Btn"),
    },
    {
      numero: "02",
      color: "info-yellow",
      emoji: "📍",
      titulo:    t("vivienda.info2Titulo"),
      subtitulo: t("vivienda.info2Sub"),
      cuerpo:    t("vivienda.info2Body"),
      url: "https://imv.seg-social.es/",
      btnClass: "btn-yellow",
      btnText:   t("vivienda.info2Btn"),
    },
    {
      numero: "03",
      color: "info-green",
      emoji: "🔑",
      titulo:    t("vivienda.info3Titulo"),
      subtitulo: t("vivienda.info3Sub"),
      cuerpo:    t("vivienda.info3Body"),
      url: "https://www.ico.es/avales-ico-para-la-compra-de-mi-primera-vivienda",
      btnClass: "btn-green",
      btnText:   t("vivienda.info3Btn"),
    },
  ];

  function scrollToInfo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="vivienda-page">
      {/* HERO */}
      <div className="vivienda-hero">
        <div className="vivienda-hero-text">
          <h1>
            {t("vivienda.heroTitle").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
        </div>
        <div className="vivienda-hero-img">
          <img src={viviendaImg} alt="Jóvenes con cajas de mudanza" />
        </div>
      </div>

      {/* CARDS RESUMEN */}
      <div className="vivienda-content">
        <h2 className="ayudas-title">{t("vivienda.ayudasTitle")}</h2>
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
              <h3>{t(a.titleKey)}</h3>
              <p>{t(a.descKey)}</p>
              <button
                className={`ayuda-btn ${a.btnClass}`}
                onClick={() => scrollToInfo(a.infoId)}
              >
                {t("vivienda.masInfo")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="vivienda-divider" />

      {/* GUÍA DETALLADA */}
      <div className="vivienda-info-section">
        <div className="vivienda-info-header">
          <h2>{t("vivienda.infoTitle")}</h2>
          <p>{t("vivienda.infoSubtitle")}</p>
        </div>

        <div className="vivienda-info-lista">
          {infoDetalle.map((item, i) => (
            <div
              className={`vivienda-info-bloque vivienda-info-bloque--${item.color}`}
              key={i}
              id={`vivienda-info-${i}`}
            >
              <div className="vivienda-info-numero">{item.numero}</div>
              <div className="vivienda-info-contenido">
                <div className="vivienda-info-head">
                  <span className="vivienda-info-emoji">{item.emoji}</span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <span className="vivienda-info-subtitulo">{item.subtitulo}</span>
                  </div>
                </div>
                <p>{item.cuerpo}</p>
                <button
                  className={`ayuda-btn ${item.btnClass} vivienda-info-btn`}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vivienda-divider" />
    </div>
  );
}