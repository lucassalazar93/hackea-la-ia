// src/components/Hero.jsx
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./hero.css";
import heroImg from "../assets/personaje-sin-fondo.png";

/* 🔑 Claves de EmailJS desde .env */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY); // opcional si también pasas la clave más abajo

export default function Hero() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [showOk, setShowOk] = useState(false);

  useEffect(() => {
    console.log("ENV →", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setShowOk(true);
        formRef.current.reset();
        setTimeout(() => window.open("/7-prompts.pdf", "_blank"), 400);
      })
      .catch((err) => {
        console.error("💥 EmailJS error:", err);
        setError(err?.text || "Error al enviar. Intenta de nuevo.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="hero-pro" id="inicio">
      {/* Fondo difuminado */}
      <div className="hero-bg" aria-hidden="true"></div>

      <div className="hero-inner">
        <img
          src={heroImg}
          alt="Lukas IA coach"
          className="hero-img-sobrepuesta"
        />

        <div className="hero-texto-solo">
          <h1>
            <span>DOMINA</span> LA IA
          </h1>
          <h2>EN 24 HORAS</h2>
          <p>
            “Haz que la IA trabaje para ti en solo 24 horas <br />
            <strong>– sin tecnicismos.</strong>”
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="formulario-lead"
          >
            <input name="name" type="text" placeholder="Tu nombre" required />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
            />
            <input name="whats" type="tel" placeholder="WhatsApp (opcional)" />

            <button type="submit" disabled={sending} className="btn-neon-pulse">
              {sending ? "Enviando…" : "📥 Descargar los 7 Prompts GRATIS"}
            </button>

            {error && <small className="error">{error}</small>}
            <small>Sin spam. Solo el recurso y un bonus semanal.</small>
          </form>
        </div>
      </div>

      {showOk && (
        <div className="modal-overlay" onClick={() => setShowOk(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>🎉 ¡Recurso enviado!</h3>
            <p>Revisa tu bandeja de entrada (o spam) y descarga el PDF.</p>
            <p>Cada viernes recibirás un prompt exclusivo en tu correo.</p>
            <div className="bonus">
              <p>
                🎁 <strong>¿Quieres más?</strong> Únete a mis canales y
                desbloquea <u>3 prompts extra</u> solo para miembros:
              </p>

              <a
                href="https://wa.me/message/C5INQAF6YAEAC1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-canal telegram"
              >
                🚀 Unirme al canal de Telegram
              </a>

              <a
                href="https://wa.me/573150399322"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-canal whatsapp"
              >
                💬 Recibir tips por WhatsApp
              </a>

              <a
                href="https://www.instagram.com/lukasprompt/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-canal instagram"
              >
                📸 Ver hacks en Instagram
              </a>

              <p className="fomo-text">
                ⏳ Solo disponible esta semana para nuevos suscriptores.
              </p>
            </div>
            <p className="social-proof">
              ✅ Ya somos +420 creadores usando IA con propósito.
            </p>
            // ajuste visual móvil
            <button className="modal-btn" onClick={() => setShowOk(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
