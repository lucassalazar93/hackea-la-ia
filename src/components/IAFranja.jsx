import {
  FaInstagram,
  FaBolt,
  FaChartLine,
  FaBrain,
  FaCheckCircle,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";
import "./iafranja.css";

export default function IAFranja() {
  /* ——— Mensajes a mostrar ——— */
  const items = [
    {
      icon: <FaBolt className="icon-gold" />,
      text: "Crea contenido 10x más rápido con IA",
    },
    {
      icon: <FaChartLine className="icon-cyan" />,
      text: "Aumenta tu alcance sin pagar más",
    },
    {
      icon: <FaBrain className="icon-rose" />,
      text: "Aprende los prompts de los top marketers LATAM",
    },
    {
      icon: <FaCheckCircle className="icon-green" />,
      text: "100% gratuito. Sin tarjeta. Sin trucos",
    },
    {
      icon: <FaRocket className="icon-orange" />,
      text: "Domina la IA en 24 h – sin tecnicismos",
    },
    {
      icon: <FaEnvelope className="icon-pink" />,
      text: "Nuevo prompt cada viernes en tu inbox",
    },
  ];

  /* ——— Render ——— */
  return (
    <div className="ia-franja-container">
      <div className="ia-franja-wrapper">
        <div className="ia-franja-track">
          {/* Repetimos el bloque varias veces para efecto infinito */}
          {[...Array(12)].map((_, idx) => (
            <span key={idx} className="ia-franja-item">
              {items.map((item, i) => (
                <span key={`${idx}-${i}`} className="ia-franja-msg">
                  {item.icon}&nbsp;{item.text}&nbsp;•&nbsp;
                </span>
              ))}
              {/* Enlace a Instagram con icono */}
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
