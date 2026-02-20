import { useState } from "react";
import "../assets/css/Post.css";

export default function Post({ imagen, banda = "Nombre Banda", fecha = "12/02/2026", hora = "20:00" }) {
  const [liked, setLiked] = useState(false);

  function darLike() {
    setLiked(!liked);
  }

  return (
    <div className="post">
      {/* Imagen del post */}
      <div className="imagen">
        <img src={imagen} alt={banda} />
      </div>

      {/* Nombre de la banda centrado */}
      <div className="post-banda">
        {banda}
      </div>

      {/* Footer: fecha y hora a la izquierda, corazón a la derecha */}
      <div className="post-footer">
        <div className="fecha-hora">
          <span className="fecha">{fecha}</span>
          <span className="hora">{hora}</span>
        </div>

        <button className="btn-like" onClick={darLike}>
          <img
            src={
              liked
                ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            }
            alt="like"
          />
        </button>
      </div>
    </div>
  );
}
