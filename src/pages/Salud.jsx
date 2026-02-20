import "../assets/css/Salud.css";
import saludHero from "../assets/salud-hero.png";

const servicios = [
  {
    icon: "🧠",
    iconBg: "#6fcf97",
    title: "Salud Mental Joven",
    desc: "Apoyo psicológico, talleres y grupos de ayuda",
    btnText: "Más Información",
    btnClass: "btn-salud-yellow",
    scrollTo: "salud-mental",
  },
  {
    icon: "🏃",
    iconBg: "#f5a623",
    title: "Actividades Saludables",
    desc: "Deporte, nutrición y hábitos de vida activa",
    btnText: "Ver Programa",
    btnClass: "btn-salud-green",
    scrollTo: "actividades-saludables",
  },
  {
    icon: "👨‍👩‍👧",
    iconBg: "#1a4b8c",
    title: "Salud Sexual y reproductiva",
    desc: "Información, asesoramiento y prevención.",
    btnText: "Más Información",
    btnClass: "btn-salud-dark",
    scrollTo: "salud-sexual",
  },
];

const articulos = [
  {
    title: "Prevención del VIH e ITS",
    desc: "La información veraz es tu mejor aliada. Conocer los métodos de transmisión y prevención del VIH y otras ITS es fundamental para tomar decisiones responsables.",
  },
  {
    title: "Bienestar Emocional y Gestión del Estrés",
    desc: "El estrés de los estudios o el trabajo puede afectar tu día a día. Te proporcionamos herramientas prácticas y talleres para gestionar la ansiedad y construir resiliencia.",
  },
  {
    title: "Adicciones y Nutrición",
    desc: "Ofrecemos talleres sobre prevención de adicciones y fomentamos una relación saludable con la comida a través de charlas sobre nutrición equilibrada.",
  },
  {
    title: "Talleres de Primeros Auxilios y RCP",
    desc: "Organizamos cursos básicos de primeros auxilios y RCP para que adquieras conocimientos esenciales en situaciones críticas.",
  },
];

const saludSexualCards = [
  {
    icon: "🩺",
    titulo: "Métodos Anticonceptivos",
    contenido: [
      "Preservativo: el único método que protege de embarazos Y de las ITS.",
      "Métodos hormonales (Píldora, Anillo, Parche, DIU, Implante): efectivos contra embarazos, pero no contra ITS.",
      "¿Dónde informarte? Acude al Centro de Salud de Burjassot. Gratuito y confidencial.",
    ],
  },
  {
    icon: "🎗️",
    titulo: "Prevención y Pruebas de ITS y VIH",
    contenido: [
      "Las ITS son comunes y muchas veces sin síntomas. La detección temprana es clave.",
      "¿Has tenido una práctica de riesgo? Hacerse las pruebas es un acto de responsabilidad.",
      "Pruebas gratuitas en tu Centro de Salud o en el CIPS más cercano.",
    ],
  },
  {
    icon: "❤️",
    titulo: "Consentimiento y Relaciones Sanas",
    contenido: [
      "El consentimiento debe ser libre, entusiasta y reversible en cualquier momento.",
      "Si hay control, chantaje o violencia en tu relación, no estás solo/a.",
      "Ayuda inmediata: llama al 016 (no deja rastro) o contacta con Servicios Sociales.",
    ],
  },
  {
    icon: "💬",
    titulo: "Asesoría Afectivo-Sexual en Burjassot",
    contenido: [
      "Servicio de Orientación Juvenil con psicólogos y sexólogos sin tabúes.",
      "Contacto directo por teléfono, WhatsApp o correo electrónico.",
      "Atención presencial en la Casa de la Juventud. 100% confidencial y gratuita.",
    ],
  },
];

const saludMentalCards = [
  {
    icon: "🧑‍⚕️",
    titulo: "Asesoría Psicológica Individual",
    items: [
      "Estrés por estudios, ansiedad, tristeza, autoestima, conflictos familiares y gestión emocional.",
      "Psicólogos/as especializados en juventud, atención individualizada y confidencial.",
      "Totalmente gratuito: recurso del ayuntamiento para ti.",
    ],
  },
  {
    icon: "🤝",
    titulo: "Grupos de Apoyo Mutuo",
    items: [
      "Espacios seguros donde expresarte libremente y compartir experiencias sin juicios.",
      "Pequeños grupos con jóvenes de Burjassot en situaciones similares.",
      "¡No estás solo/a! Muchas cosas que sientes son compartidas por otros.",
    ],
  },
  {
    icon: "🎯",
    titulo: "Talleres Prácticos y Actividades",
    items: [
      "Técnicas de relajación y control de la ansiedad.",
      "Gestión del tiempo y estrés frente a los exámenes.",
      "Inteligencia emocional y cómo poner límites sanos.",
      "Mejora de la autoestima en la era de las redes sociales.",
    ],
  },
];

const actividadesCards = [
  {
    icon: "😊",
    titulo: "Beneficios reales de estar activo",
    items: [
      "Libera endorfinas: el mejor antídoto natural contra el estrés y la ansiedad.",
      "Más energía y mejor descanso: el ejercicio te ayuda a dormir mejor por la noche.",
      "Prevención: evita dolores de espalda, mejora tu postura y fortalece huesos y músculos.",
    ],
  },
  {
    icon: "🎯",
    titulo: "Encuentra tu propio ritmo",
    items: [
      "Todo suma: caminar, ir en bici, patinar, bailar o echar un partido con los colegas.",
      "Hazlo divertido: prueba distintos deportes hasta encontrar el que realmente disfrutes.",
      "No necesitas ser atleta: lo importante es romper con el sedentarismo a tu manera.",
    ],
  },
  {
    icon: "🥗",
    titulo: "El combo ganador: Alimentación y Descanso",
    items: [
      "Nutrición consciente: come equilibrado, prioriza alimentos reales y mantente hidratado/a.",
      "Descanso reparador: respeta tus 7-8 horas de sueño, tu cuerpo y cerebro lo necesitan.",
      "Los tres pilares juntos (deporte, nutrición y descanso) te hacen sentir al 100%.",
    ],
  },
];

export default function Salud() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="salud-page">

      {/* HERO */}
      <div className="salud-hero">
        <div className="salud-hero-img">
          <img src={saludHero} alt="Jóvenes meditando" />
          <div className="salud-hero-overlay">
            <h1>Bienestar Joven en Burjassot:<br />Cuida tu Salud Física y Mental</h1>
          </div>
        </div>
        <div className="salud-hero-text">
          <p>El desarrollo integral de los jóvenes de Burjassot es nuestra prioridad. Una buena salud física y mental es la base para alcanzar tus metas.</p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="salud-servicios">
        {servicios.map((s, i) => (
          <div className="salud-card" key={i}>
            <div className="salud-card-icon" style={{ background: s.iconBg }}>
              <span>{s.icon}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button className={`btn-salud ${s.btnClass}`} onClick={() => scrollTo(s.scrollTo)}>
              {s.btnText}
            </button>
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
        <h2>🌿 Salud Sexual y Reproductiva: Cuídate y Decide con Información</h2>
        <p className="salud-sexual-intro">
          Tu bienestar sexual es parte fundamental de tu salud. Aquí tienes toda la información y los recursos que necesitas de forma directa, confidencial y segura.
        </p>
        <div className="salud-sexual-grid">
          {saludSexualCards.map((c, i) => (
            <div className="salud-sexual-card" key={i}>
              <div className="salud-sexual-icon">{c.icon}</div>
              <h3>{c.titulo}</h3>
              <ul>{c.contenido.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="salud-divider" />

      {/* SALUD MENTAL */}
      <div id="salud-mental" className="salud-mental-section">
        <h2>🧠 Salud Mental Joven: Tu bienestar emocional es nuestra prioridad</h2>
        <p className="salud-mental-intro">
          Sentirse abrumado, triste, con ansiedad o estrés es completamente normal. En Jove Burjassot te ofrecemos un espacio seguro, libre de juicios, 100% confidencial y gratuito.
        </p>
        <div className="salud-mental-grid">
          {saludMentalCards.map((c, i) => (
            <div className="salud-mental-card" key={i}>
              <div className="salud-mental-icon">{c.icon}</div>
              <h3>{c.titulo}</h3>
              <ul>{c.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="salud-emergencias">
          <h3>📞 Líneas de Ayuda Urgente — Disponibles 24/7</h3>
          <p>Si estás pasando por una crisis grave o tienes pensamientos oscuros, pide ayuda inmediata:</p>
          <div className="emergencias-grid">
            <div className="emergencia-item">
              <span className="emergencia-num">024</span>
              <span>Línea de atención a la conducta suicida — Gratuito y confidencial</span>
            </div>
            <div className="emergencia-item">
              <span className="emergencia-num">717 003 717</span>
              <span>Teléfono de la Esperanza — Apoyo emocional en crisis</span>
            </div>
            <div className="emergencia-item">
              <span className="emergencia-num">112</span>
              <span>Emergencias</span>
            </div>
          </div>
        </div>

        <div className="salud-cita">
          <h3>📅 ¿Cómo pedir tu cita en Jove Burjassot?</h3>
          <p>Dar el primer paso es de valientes. Para solicitar tu primera cita solo tienes que contactarnos:</p>
          <ul>
            <li>📍 <strong>Presencial:</strong> Pásate por la Casa de la Juventud de Burjassot.</li>
            <li>📱 <strong>WhatsApp/Teléfono:</strong> Escríbenos o llámanos al [número].</li>
            <li>✉️ <strong>Correo:</strong> [email o enlace a formulario web].</li>
          </ul>
          <p className="cita-nota">Tranquilo/a, todo lo que nos cuentes es confidencial.</p>
          <button className="btn-cita" onClick={() => window.open("https://wa.me/34000000000", "_blank")}>
            💬 Contactar por WhatsApp
          </button>
        </div>
      </div>

      <div className="salud-divider" />

      {/* ACTIVIDADES SALUDABLES */}
      <div id="actividades-saludables" className="actividades-section">
        <h2>🏃🏽‍♀️ Salud Física y Movimiento: Tu cuerpo es tu motor</h2>
        <p className="actividades-intro">
          Mover el cuerpo no se trata de conseguir un físico "perfecto" para las redes sociales, sino de cuidar la máquina que te permite disfrutar de la vida. La actividad física regular es el mejor antídoto natural contra el estrés del día a día.
        </p>

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
            <h3>📍 ¡Ponte en marcha en el Polideportivo de Burjassot!</h3>
            <p>El Polideportivo Municipal de Burjassot es el espacio ideal para ti. Cuenta con pistas de tenis, pádel, pabellón cubierto, campos de fútbol y piscina.</p>
            <ul>
              <li>Alquila pistas para jugar con tus amigos o ve a nadar a tu ritmo.</li>
              <li>Apúntate a los cursos y actividades dirigidas durante todo el año.</li>
              <li>Una forma genial de cuidarte y conocer a otros jóvenes del pueblo.</li>
            </ul>
            <button
              className="btn-polideportivo"
              onClick={() => window.open("https://deportes.burjassot.org/instalaciones/polideportivo/", "_blank")}
            >
              🏊 Ver Horarios y Pistas del Polideportivo
            </button>
          </div>
        </div>
      </div>

      <div className="salud-divider" />

    </div>
  );
}