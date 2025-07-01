import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./seccionTestimonioAutor.css";

/* ---- assets ---- */
import avatarLaura from "../assets/laura-avatar.png";
import avatarCarlos from "../assets/avatarCarlos.png";
import avatarLukas from "../assets/lukas-avatar.png";
import firmaLukas from "../assets/firma-lukas.png"; // firma PNG sin fondo

/* ---------- helper card de testimonio ---------- */
function TestimonioCard({ avatar, texto, autor, dato, progreso }) {
  return (
    <div className="testimonio-flash">
      <img src={avatar} alt={autor} className="avatar halo-hover" />

      <div className="cita">
        {/* html semiseguro para negritas */}
        <p className="cita-texto" dangerouslySetInnerHTML={{ __html: texto }} />
        <p className="cita-autor manuscrita">— {autor}</p>
        <p className="cita-dato">{dato}</p>

        <div className="barra-tiempo">
          <span style={{ width: `${progreso}%` }} />
        </div>
      </div>

      <button className="validado-badge glow-pulse">
        ✔ VALIDADO&nbsp;CON&nbsp;RESULTADOS
      </button>
    </div>
  );
}

export default function SeccionTestimonioAutor() {
  /* -------- contadores y barras ---------- */
  const [contador, setContador] = useState(0);
  const [prog24, setProg24] = useState(0);
  const [prog48, setProg48] = useState(0);

  /* contador +8 000 */
  useEffect(() => {
    let c = 0;
    const id = setInterval(() => {
      c += 160;
      if (c >= 8000) {
        c = 8000;
        clearInterval(id);
      }
      setContador(c);
    }, 40);
    return () => clearInterval(id);
  }, []);

  /* barras progreso 24 h y 48 h */
  useEffect(() => {
    const id1 = setInterval(
      () => setProg24((p) => (p < 100 ? p + 2 : 100)),
      50
    );
    const id2 = setInterval(
      () => setProg48((p) => (p < 100 ? p + 1 : 100)),
      50
    );
    return () => {
      clearInterval(id1);
      clearInterval(id2);
    };
  }, []);

  /* -------------- render -------------- */
  return (
    <section className="testimonio-autor-wrapper">
      {/* Testimonio #1 – Laura */}
      <TestimonioCard
        avatar={avatarLaura}
        texto={`“Usé el prompt <strong>#3</strong> y <strong>cerré 4 ventas en 24 h</strong>. ¡Nunca había vendido tan rápido!”`}
        autor="Laura G. · Diseñadora freelance"
        dato="🟢 Aplicado vía WhatsApp | Resultado en 24 h"
        progreso={prog24}
      />

      {/* Testimonio #2 – Carlos */}
      <TestimonioCard
        avatar={avatarCarlos}
        texto={`“Apliqué el prompt <strong>#6</strong> y <strong>cerré una alianza con una marca</strong> en 48 h.”`}
        autor="Carlos D. · Creador de contenido"
        dato="🟢 Usado en campaña de Instagram | Impacto en 48 h"
        progreso={prog48}
      />

      {/* ------------ SOBRE EL AUTOR ------------ */}
      <div className="autor-card neon-breath">
        <img
          src={avatarLukas}
          alt="Lukas Prompt"
          className="avatar-lukas"
          data-tooltip-id="tt-lukas"
          data-tooltip-content="Hola, soy Lukas. Esto es IA con enfoque real."
        />
        <Tooltip id="tt-lukas" place="right" />

        <p className="micro-title">🤖 QUIÉN ESTÁ DETRÁS DE ESTOS PROMPTS</p>

        <h2 className="autor-nombre hover-underline-glow">
          👨‍💻 Lukas Prompt | Mentor IA para emprendedores
        </h2>

        <ul className="autor-bullets">
          <li>✅ Ayudo a creadores a usar la IA con enfoque estratégico.</li>
          <li>
            📊{" "}
            <span className="contador-resaltado">
              +{contador.toLocaleString()}
            </span>{" "}
            creadores entrenados en LATAM
          </li>
          <li>🎯 De freelancers a lanzamientos de alto ticket</li>
          <li>☕ Papá, dev y fan de la productividad con café</li>
        </ul>

        <p className="autor-siguiendo">
          Sígueme para más ideas:&nbsp;
          <a
            href="https://instagram.com/lukasprompt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline-glow"
          >
            @lukasprompt
          </a>
        </p>

        <p className="autor-microcopy">
          👉 Si llegaste hasta aquí, la IA ya te eligió… ¿te animas a probarla
          conmigo?
        </p>

        {/* 👉 Nuevo CTA extra */}
        <p className="autor-cta-extra">
          👉 <strong>Descarga los 7 Prompts GRATIS</strong> y comienza tu prueba
          ahora.
        </p>

        <img
          src={firmaLukas}
          alt="Firma Lukas Salazar"
          className="firma-lukas"
        />
      </div>
    </section>
  );
}
