import Post from "../components/Post";
import "../assets/css/Cultura.css";

// Importa las imágenes
import imgMusica1 from "../assets/cultura1.jpg";
import imgMusica2 from "../assets/cultura2.jpg";
import imgTeatro1 from "../assets/cultura3.jpg";
import imgTeatro2 from "../assets/cultura4.jpg";
import imgTaller1 from "../assets/cultura5.jpg";
import imgTaller2 from "../assets/cultura6.jpg";
import imgFiesta1 from "../assets/cultura7.jpg";
import imgFiesta2 from "../assets/cultura8.jpg";

export default function Cultura() {
  return (
    <div className="cultura-page">
      {/* Título */}
      <div className="cultura-header">
        <h1>Cultura y Ocio</h1>
        <p>El ocio y la cultura joven en Burjassot</p>
      </div>

      {/* Grid de posts */}
      <div className="cultura-grid">
        {/* Columna 1 */}
        <div className="columna">
          <button className="btn-columna">Música y conciertos</button>
          <Post imagen={imgMusica1} banda="The Rolling Stones" fecha="12/02/2026" hora="21:00" />
          <Post imagen={imgMusica2} banda="Queen" fecha="13/02/2026" hora="20:30" />
        </div>

        {/* Columna 2 */}
        <div className="columna">
          <button className="btn-columna">Teatro y cine</button>
          <Post imagen={imgTeatro1} banda="Compañía XYZ" fecha="14/02/2026" hora="18:00" />
          <Post imagen={imgTeatro2} banda="Teatro ABC" fecha="15/02/2026" hora="19:30" />
        </div>

        {/* Columna 3 */}
        <div className="columna">
          <button className="btn-columna">Talleres creativos</button>
          <Post imagen={imgTaller1} banda="Taller Creativo 1" fecha="16/02/2026" hora="17:00" />
          <Post imagen={imgTaller2} banda="Taller Creativo 2" fecha="17/02/2026" hora="16:30" />
        </div>

        {/* Columna 4 */}
        <div className="columna">
          <button className="btn-columna">Fiestas locales</button>
          <Post imagen={imgFiesta1} banda="Fiesta Local 1" fecha="18/02/2026" hora="22:00" />
          <Post imagen={imgFiesta2} banda="Fiesta Local 2" fecha="19/02/2026" hora="23:00" />
        </div>
      </div>
    </div>
  );
}
