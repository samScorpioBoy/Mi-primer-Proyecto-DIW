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
    },
    {
      icons: ["📍", "❤️"],
      titleKey: "vivienda.card2Title",
      descKey:  "vivienda.card2Desc",
      btnKey:   "vivienda.card2Btn",
      btnClass: "btn-yellow",
    },
    {
      icons: ["🔑", "📄"],
      titleKey: "vivienda.card3Title",
      descKey:  "vivienda.card3Desc",
      btnKey:   "vivienda.card3Btn",
      btnClass: "btn-green",
    },
  ];

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

      {/* AYUDAS */}
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
              <button className={`ayuda-btn ${a.btnClass}`}>{t(a.btnKey)}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}