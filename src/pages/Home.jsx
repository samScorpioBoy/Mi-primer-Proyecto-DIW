import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import heroIcon from "../assets/hero-icon.png";
import homeBg from "../assets/home-bg.jpeg";
import formacionImg from "../assets/iconformacion-home.png";
import AyudasImg from "../assets/casita-vivienda.png";
import saludImg from "../assets/salud-icon.png";
import tallerImg from "../assets/taller-icon-home.png";
import carneImg from "../assets/carnet-icon-home.png";
import "../assets/css/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLang();

  const categorias = [
    { icon: carneImg,     labelKey: "home.cats.carne",     path: "/carne",    clase: "cat-amarillo" },
    { icon: formacionImg, labelKey: "home.cats.formacion", path: "/empleo",   clase: "cat-verde" },
    { icon: AyudasImg,    labelKey: "home.cats.vivienda",  path: "/vivienda", clase: "cat-amarillo" },
    { icon: saludImg,     labelKey: "home.cats.salud",     path: "/salud",    clase: "cat-verde" },
    { icon: tallerImg,    labelKey: "home.cats.cursos",    path: "/cursos",   clase: "cat-verde" },
  ];

  return (
    <div className="home-page" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-overlay">

        <section className="home-hero">
          <img src={heroIcon} alt="Icono" className="home-hero-icon" />
          <h1>{t("home.hero")}</h1>
        </section>

        <section className="home-texto">
          <p>{t("home.p1")}</p>
          <p>{t("home.p2")}</p>
        </section>

        <div className="home-divider" />

        <section className="home-categorias">
          {categorias.map((c, i) => (
            <div key={i} className={`home-card ${c.clase}`} onClick={() => navigate(c.path)}>
              <img src={c.icon} alt={t(c.labelKey)} className="home-card-icon" />
              <p>
                {t(c.labelKey).split("\n").map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </section>

        <div className="home-divider" />
      </div>
    </div>
  );
}