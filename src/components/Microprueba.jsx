import "./microprueba.css";

export default function Microprueba() {
  return (
    <section className="microprueba">
      <div className="contenedor">
        <h2>🧠 Una muestra de lo que recibirás...</h2>
        <p className="subtexto">
          Usa este prompt ahora y ve cómo responde tu IA favorita.
        </p>

        <div className="tarjeta-prompt">
          <h3>🎯 Prompt #2</h3>

          <p className="texto-prompt">
            Actúa como un <strong>estratega de ventas emocional</strong> que
            transforma objeciones comunes en contenido que conecta.
            <br />
            <br />
            <strong>Contexto:</strong> Mi audiencia muchas veces no compra
            porque:&nbsp;
            <em>
              [ej. creen que es caro, sienten que no están listos, les da miedo
              mostrarse…]
            </em>
            .<br />
            Mi producto o mensaje es:&nbsp;
            <em>[ej. curso para creadores, mentoría de marca, etc.]</em>
            <br />
            <br />
            <strong>Tu tarea:</strong>
            <ol style={{ marginLeft: "1.25rem" }}>
              <li>
                Lista <strong>las 5 objeciones más frecuentes</strong> que
                escucho de mi audiencia.
              </li>
              <li>
                Por cada objeción, crea:
                <ul style={{ marginTop: "0.5rem" }}>
                  <li>
                    💡 1 <strong>Reel emocional</strong> (máx. 100 palabras) que
                    conecte desde la vulnerabilidad.
                  </li>
                  <li>
                    📝 1 <strong>historia personal</strong> breve que demuestre
                    lo contrario.
                  </li>
                  <li>
                    💬 1 <strong>frase corta</strong> (máx. 15 palabras) para
                    abrir conversación.
                  </li>
                </ul>
              </li>
              <li>
                Sugiere un <strong>formato de serie</strong> como{" "}
                <em>“Barreras Mentales Comunes”</em> o
                <em> “Lo que nadie te dice cuando…”</em>
              </li>
            </ol>
            <br />
            <strong>Objetivo:</strong> Empatizar primero, romper creencias
            después y abrir el camino a una venta sin presión.
          </p>

          {/* Incentivo de acción inmediata */}
          <p className="fomo-mini">
            ⚡ <strong>Haz que este prompt trabaje por ti hoy mismo.</strong>
          </p>

          {/* CTA principal */}
          <a
            href="https://t.me/tucanal"
            className="btn-ver-mas"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔎 Ver más prompts →
          </a>

          {/* Enlace pequeño a un ejemplo real */}
          <p className="ejemplo-real">
            <a
              href="https://tusitio.com/ejemplo-prompt.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Quieres ver cómo luce en la práctica? <u>Ver ejemplo real</u>
            </a>
          </p>

          {/* Enlace “oculto” de referencia interna */}
          <a
            href="https://tusitio.com/recurso-secreto"
            style={{ display: "none" }}
          >
            hidden-link
          </a>
        </div>

        {/* Testimonio social */}
        <div className="testimonio">
          <p>
            ✅ “Este tipo de contenido rompe barreras, genera conexión y hace
            que vender se sienta humano.”
          </p>
          <span>— Lukas, freelance copywriter</span>
        </div>
      </div>
    </section>
  );
}
