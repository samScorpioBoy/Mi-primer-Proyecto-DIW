import { useNavigate } from "react-router-dom";
import heroIcon from "../assets/hero-icon.png";
import homeBg from "../assets/home-bg.jpeg";
import formacionImg from "../assets/iconformacion-home.png";
import AyudasImg from "../assets/casita-vivienda.png";
import saludImg from "../assets/salud-icon.png"
import tallerImg from "../assets/taller-icon-home.png"
import "../assets/css/Home.css";

const categorias = [
  {
    icon: formacionImg, 
    label: "FORMACIÓN",
    path: "/empleo",
    clase: "cat-verde",
  },
  {
    icon: AyudasImg, 
    label: "AYUDAS ALQUILER\nY VIVIENDA",
    path: "/vivienda",
    clase: "cat-amarillo",
  },
  {
    icon: saludImg, 
    label: "SALUD Y\nBIENESTAR",
    path: "/salud",
    clase: "cat-verde",
  },
  {
    icon: tallerImg, 
    label: "CURSOS Y\nTALLERES",
    path: "/descubre",
    clase: "cat-verde",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-overlay">

        {/* HERO */}
        <section className="home-hero">
          <img src={heroIcon} alt="Icono" className="home-hero-icon" />
          <h1>Conecta con tu ciudad...</h1>
        </section>

        {/* TEXTO */}
        <section className="home-texto">
          <p>
            Sabemos que construir tu futuro no es una tarea sencilla, especialmente cuando tienes que hacer malabares
            con tantas responsabilidades a la vez: cuidar tu salud física y mental, descifrar cómo acceder a una vivienda
            o buscar las mejores oportunidades de estudio y formación. A veces, la información está demasiado dispersa y
            encontrar respuestas genera más estrés que soluciones.
          </p>
          <p>
            Por eso hemos creado esta plataforma: para ser tu central de recursos integral. Nuestro compromiso es simplificar
            esa búsqueda, reuniendo en un solo lugar herramientas confiables y actualizadas que cubren tus necesidades reales.
            Desde apoyo emocional y bienestar, hasta guías prácticas para ayudas de alquiler, becas y talleres en tu zona,
            este es tu espacio seguro para informarte, tomar impulso y sentir que tienes el respaldo necesario para dar el
            siguiente paso con confianza.
          </p>
        </section>

        {/* DIVIDER */}
        <div className="home-divider" />

        {/* CATEGORÍAS */}
        <section className="home-categorias">
          {categorias.map((c, i) => (
            <div
              key={i}
              className={`home-card ${c.clase}`}
              onClick={() => navigate(c.path)}
            >
              <img src={c.icon} alt={c.label} className="home-card-icon" />
              <p>{c.label.split("\n").map((line, j) => <span key={j}>{line}<br/></span>)}</p>
            </div>
          ))}
        </section>

        {/* DIVIDER */}
        <div className="home-divider" />

      </div>
    </div>
  );
}