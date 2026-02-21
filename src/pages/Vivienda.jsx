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
      titulo: "Bono Alquiler Joven: Impulsa tu independencia",
      subtitulo: "Ayuda Directa al Alquiler (250€ mensuales)",
      cuerpo: "El Bono Alquiler Joven es una ayuda estatal diseñada para facilitar que los jóvenes puedan emanciparse sin que el precio del alquiler consuma todos sus ingresos. Se trata de una cuantía fija de 250 euros al mes durante un periodo de dos años. Lo que debes saber: Esta ayuda es compatible con otros planes de vivienda de la Generalitat Valenciana, siempre que no se supere el límite de renta establecido. El objetivo es que el coste del alquiler no suponga más del 40% de tus ingresos. Es fundamental que el contrato de alquiler esté a tu nombre y que la vivienda sea tu residencia habitual y permanente.",
      url: "https://www.mivau.gob.es/vivienda/bono-alquiler-joven",
      btnClass: "btn-dark",
      btnText: "Solicitar Bono Alquiler Joven →",
    },
    {
      numero: "02",
      color: "info-yellow",
      emoji: "📍",
      titulo: "Ingreso Mínimo Vital (IMV): Una red de seguridad",
      subtitulo: "Garantía de Rentas de la Seguridad Social",
      cuerpo: "El Ingreso Mínimo Vital no es solo una ayuda económica, es un derecho que asegura un nivel básico de vida. Para los jóvenes que viven solos o en unidades de convivencia con recursos limitados, el IMV actúa como un soporte mensual para cubrir necesidades básicas mientras buscas mejorar tu situación laboral. Punto clave para jóvenes: Si tienes entre 23 y 29 años, puedes solicitarlo si acreditas que has vivido de forma independiente durante los últimos tres años. La cuantía varía según tus ingresos y las personas que vivan contigo. Además, el IMV incluye el 'Complemento de Ayuda a la Infancia' si tienes hijos a tu cargo, aumentando la protección económica de tu hogar.",
      url: "https://imv.seg-social.es/",
      btnClass: "btn-yellow",
      btnText: "Solicitar IMV →",
    },
    {
      numero: "03",
      color: "info-green",
      emoji: "🔑",
      titulo: "Avales ICO: Tu primera casa sin ahorros previos",
      subtitulo: "Aval del 20% para la Compra de Vivienda",
      cuerpo: "Uno de los mayores obstáculos para comprar una casa es el famoso '20% de entrada' que los bancos no suelen financiar. El Gobierno, a través del Instituto de Crédito Oficial (ICO), ha lanzado este programa de avales para que los jóvenes con empleo pero sin grandes ahorros puedan acceder a una hipoteca de hasta el 100% del valor del inmueble. Cómo funciona: El Estado no te regala el dinero, sino que se convierte en tu 'avalista' ante el banco por ese 20% inicial. Esto permite que el banco te preste la totalidad del precio de la vivienda. Es una oportunidad única para comprar en Burjassot o cualquier otra localidad si tienes estabilidad laboral pero te falta ese empujón inicial de capital.",
      url: "https://www.ico.es/avales-ico-para-la-compra-de-mi-primera-vivienda",
      btnClass: "btn-green",
      btnText: "Ver Avales ICO →",
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
                Más información
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
          <h2>🏠 Guía Detallada de Ayudas a la Vivienda</h2>
          <p>Conoce en detalle cada ayuda y descubre cuál se adapta mejor a tu situación.</p>
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