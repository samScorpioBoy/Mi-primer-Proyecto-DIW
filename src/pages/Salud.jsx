import { useLang } from "../context/LangContext";
import "../assets/css/Salud.css";
import saludHero from "../assets/salud-hero.png";

export default function Salud() {
  const { t } = useLang();

  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: "smooth" });

  const servicios = [
    { icon: "🧠", iconBg: "#6fcf97", title: t("salud.card1Title"), desc: t("salud.card1Desc"), btnText: t("salud.card1Btn"), btnClass: "btn-salud-yellow", scrollTo: "salud-mental" },
    { icon: "🏃", iconBg: "#f5a623", title: t("salud.card2Title"), desc: t("salud.card2Desc"), btnText: t("salud.card2Btn"), btnClass: "btn-salud-green", scrollTo: "actividades-saludables" },
    { icon: "👨‍👩‍👧", iconBg: "#1a4b8c", title: t("salud.card3Title"), desc: t("salud.card3Desc"), btnText: t("salud.card3Btn"), btnClass: "btn-salud-dark", scrollTo: "salud-sexual" },
  ];

  const articulos = [
    { title: t("salud.art1Title"), desc: t("salud.art1Desc") },
    { title: t("salud.art2Title"), desc: t("salud.art2Desc") },
    { title: t("salud.art3Title"), desc: t("salud.art3Desc") },
    { title: t("salud.art4Title"), desc: t("salud.art4Desc") },
  ];

  // 3 tarjetas principales 
  const saludSexualCards = [
    { icon: "🩺", titulo: t("salud.sex1Title"), contenido: [t("salud.sex1i1"), t("salud.sex1i2"), t("salud.sex1i3")] },
    { icon: "🎗️", titulo: t("salud.sex2Title"), contenido: [t("salud.sex2i1"), t("salud.sex2i2"), t("salud.sex2i3")] },
    { icon: "❤️",  titulo: t("salud.sex3Title"), contenido: [t("salud.sex3i1"), t("salud.sex3i2"), t("salud.sex3i3")] },
  ];

  // Nueva tarjeta Derechos
  const derechos = [
    { emoji: "🔒", titulo: t("salud.der1Title"), desc: t("salud.der1Desc") },
    { emoji: "✊", titulo: t("salud.der2Title"), desc: t("salud.der2Desc") },
    { emoji: "🏥", titulo: t("salud.der3Title"), desc: t("salud.der3Desc") },
  ];

  const saludMentalCards = [
    { icon: "🧑‍⚕️", titulo: t("salud.men1Title"), items: [t("salud.men1i1"), t("salud.men1i2"), t("salud.men1i3")] },
    { icon: "🤝",    titulo: t("salud.men2Title"), items: [t("salud.men2i1"), t("salud.men2i2"), t("salud.men2i3")] },
    { icon: "🎯",    titulo: t("salud.men3Title"), items: [t("salud.men3i1"), t("salud.men3i2"), t("salud.men3i3"), t("salud.men3i4")] },
  ];

  const actividadesCards = [
    { icon: "😊", titulo: t("salud.act1Title"), items: [t("salud.act1i1"), t("salud.act1i2"), t("salud.act1i3")] },
    { icon: "🎯", titulo: t("salud.act2Title"), items: [t("salud.act2i1"), t("salud.act2i2"), t("salud.act2i3")] },
    { icon: "🥗", titulo: t("salud.act3Title"), items: [t("salud.act3i1"), t("salud.act3i2"), t("salud.act3i3")] },
  ];

  return (
    <div className="salud-page">

      {/* HERO */}
      <div className="salud-hero">
        <div className="salud-hero-img">
          <img src={saludHero} alt="Jóvenes meditando" />
          <div className="salud-hero-overlay">
            <h1>
              {t("salud.heroTitle").split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
          </div>
        </div>
        <div className="salud-hero-text">
          <p>{t("salud.heroDesc")}</p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="salud-servicios">
        {servicios.map((s, i) => (
          <div className="salud-card" key={i}>
            <div className="salud-card-icon" style={{ background: s.iconBg }}><span>{s.icon}</span></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button className={`btn-salud ${s.btnClass}`} onClick={() => scrollTo(s.scrollTo)}>{s.btnText}</button>
          </div>
        ))}
      </div>

      <div className="salud-divider" />

      {/* ARTÍCULOS */}
      <div className="salud-articulos">
        {articulos.map((a, i) => (
          <div className="salud-articulo" key={i}>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="salud-divider" />

      {/* SALUD SEXUAL */}
      <div id="salud-sexual" className="salud-sexual-section">
        <h2>{t("salud.sexualTitle")}</h2>
        <p className="salud-sexual-intro">{t("salud.sexualIntro")}</p>

        <div className="salud-sexual-grid">
          {/* 3 tarjetas informativas */}
          {saludSexualCards.map((c, i) => (
            <div className="salud-sexual-card" key={i}>
              <div className="salud-sexual-icon">{c.icon}</div>
              <h3>{c.titulo}</h3>
              <ul>{c.contenido.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}

          {/* Tarjeta Derechos */}
          <div className="salud-sexual-card salud-derechos-card">
            <div className="salud-sexual-icon">⚖️</div>
            <h3>{t("salud.derechosTitle")}</h3>
            <ul>
              {derechos.map((d, i) => (
                <li key={i} className="derecho-item">
                  <span className="derecho-emoji">{d.emoji}</span>
                  <span><strong>{d.titulo}:</strong> {d.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AVACOS */}
        <div className="salud-avacos">
          <div className="salud-avacos-content">
            <h3>{t("salud.avacosTitle")}</h3>
            <div className="salud-avacos-cards">
              <div className="salud-avacos-card">
                <span className="salud-avacos-icon">🔬</span>
                <p>{t("salud.avacosDesc")}</p>
              </div>
              <div className="salud-avacos-card">
                <span className="salud-avacos-icon">🗺️</span>
                <p>{t("salud.avacosMapaDesc")}</p>
              </div>
            </div>
            <div className="salud-avacos-btns">
              <button className="btn-avacos btn-avacos-primary" onClick={() => window.open("https://avacos-h.org/", "_blank")}>
                {t("salud.avacosBtnAvacos")}
              </button>
              <button className="btn-avacos btn-avacos-secondary" onClick={() => window.open("https://www.sanidad.gob.es/ciudadanos/enfLesiones/enfTransmisibles/sida/docs/mapaCentrosComunitarios.htm", "_blank")}>
                {t("salud.avacosBtnMapa")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="salud-divider" />

      {/* SALUD MENTAL */}
      <div id="salud-mental" className="salud-mental-section">
        <h2>{t("salud.mentalTitle")}</h2>
        <p className="salud-mental-intro">{t("salud.mentalIntro")}</p>
        <div className="salud-mental-grid">
          {saludMentalCards.map((c, i) => (
            <div className="salud-mental-card" key={i}>
              <div className="salud-mental-icon">{c.icon}</div>
              <h3>{c.titulo}</h3>
              <ul>{c.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>

        {/* EMERGENCIAS */}
        <div className="salud-emergencias">
          <h3>{t("salud.emergenciasTitle")}</h3>
          <p>{t("salud.emergenciasDesc")}</p>
          <div className="emergencias-grid">
            <div className="emergencia-item">
              <span className="emergencia-num">024</span>
              <span>{t("salud.emergencia1")}</span>
            </div>
            <div className="emergencia-item">
              <span className="emergencia-num">717 003 717</span>
              <span>{t("salud.emergencia2")}</span>
            </div>
            <div className="emergencia-item">
              <span className="emergencia-num">112</span>
              <span>{t("salud.emergencia3")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="salud-divider" />

      {/* ACTIVIDADES SALUDABLES */}
      <div id="actividades-saludables" className="actividades-section">
        <h2>{t("salud.actTitle")}</h2>
        <p className="actividades-intro">{t("salud.actIntro")}</p>
        <div className="actividades-grid">
          {actividadesCards.map((c, i) => (
            <div className="actividades-card" key={i}>
              <div className="actividades-icon">{c.icon}</div>
              <h3>{c.titulo}</h3>
              <ul>{c.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>

        {/* POLIDEPORTIVO */}
        <div className="polideportivo-box">
          <div className="polideportivo-text">
            <h3>{t("salud.poliTitle")}</h3>
            <p>{t("salud.poliDesc")}</p>
            <ul>
              <li>{t("salud.polii1")}</li>
              <li>{t("salud.polii2")}</li>
              <li>{t("salud.polii3")}</li>
            </ul>
            <button
              className="btn-polideportivo"
              onClick={() => window.open("https://deportes.burjassot.org/instalaciones/polideportivo/", "_blank")}
            >
              {t("salud.polideportivo")}
            </button>
          </div>
        </div>
      </div>

      <div className="salud-divider" />
    </div>
  );
}