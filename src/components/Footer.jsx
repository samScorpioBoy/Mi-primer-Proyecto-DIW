import escudo from "../assets/logox.png";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-content">
        <p>© 2026 Burjassot Jove - Ayuntamiento de Burjassot. Todos los derechos reservados.</p>
        <img
          src={escudo}
          alt="Escudo Burjassot"
          className="footer-escudo"
        />
      </div>
    </footer>
  );
}