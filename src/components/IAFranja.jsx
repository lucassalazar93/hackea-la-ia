import { FaInstagram } from "react-icons/fa";
import "./iafranja.css";

export default function IAFranja() {
  const mensaje =
    "⚡ El futuro pertenece a quienes lo construyen. Deja que tu IA te acompañe desde hoy.";

  return (
    <div className="ia-franja-container">
      <div className="ia-franja-wrapper">
        <div className="ia-franja-track">
          {/* Repetimos la cinta 20 veces para un scroll infinito */}
          {[...Array(20)].map((_, idx) => (
            <span key={idx} className="ia-franja-item">
              {mensaje}&nbsp;
              {/* Enlace a Instagram con icono y hover */}
              <a
                className="ig-link"
                href="https://instagram.com/lukasprompt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="ig-icon" />{" "}
                <strong>@lukasprompt</strong>
              </a>
              &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
