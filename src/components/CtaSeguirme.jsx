import "./ctaSeguirme.css";
import preview1 from "../assets/post1.png";
import preview2 from "../assets/post1.png";
import preview3 from "../assets/post1.png";

export default function CtaSeguirme() {
  return (
    <section className="cta-social-container">
      <h3>
        🚀 ¿Quieres <span className="highlight">hacks diarios de IA</span>?
      </h3>
      <p>
        Sigue mi cuenta <strong>@hackealaIA</strong> en Instagram y desbloquea
        un <strong>prompt extra cada viernes</strong>.
      </p>

      <a
        className="cta-button"
        href="https://instagram.com/hackealaIA"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 Seguir en Instagram
      </a>

      <div className="post-preview-grid">
        <div className="post">
          <img src={preview1} alt="Carrusel IA" />
          <p>📌 3 Prompts para ventas</p>
        </div>

        <div className="post">
          <img src={preview2} alt="Resultado IA" />
          <p>💰 +4 ventas en 24h</p>
        </div>

        <div className="post locked">
          <img src={preview3} alt="Contenido exclusivo" />
          <div className="locked-overlay">🔒 Solo para seguidores</div>
          <p>🎥 Hack de voz IA</p>
        </div>
      </div>

      <p className="acceso-aviso">
        ⚠️ Contenidos exclusivos solo accesibles desde el perfil.
      </p>
    </section>
  );
}
