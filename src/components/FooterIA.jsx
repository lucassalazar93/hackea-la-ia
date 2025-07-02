// src/components/FooterIA.jsx
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./FooterIA.css"; // ✔️ coincide con el nombre real del arc

export default function FooterIA() {
  return (
    <footer className="footer-ia">
      <div className="footer-contenido">
        <p className="footer-frase">
          “No estás hackeando la IA. Estás aprendiendo a pensar con ella.” 🧠⚡
        </p>

        <div className="footer-redes">
          <a
            href="https://www.instagram.com/lukasprompt/"
            target="_blank"
            rel="noreferrer"
            className="footer-btn instagram"
          >
            <FaInstagram className="icono-red" /> Instagram
          </a>
          <a
            href="https://wa.me/573150399322?text=Hola%20Lukas%2C%20quiero%20aprender%20a%20usar%20la%20IA%20🤖"
            target="_blank"
            rel="noreferrer"
            className="footer-btn whatsapp"
          >
            <FaWhatsapp className="icono-red" /> WhatsApp
          </a>
        </div>

        <small className="footer-copy">
          © {new Date().getFullYear()} Lukas Salazar. Con ❤️ y prompts desde
          Colombia.
        </small>
      </div>
    </footer>
  );
}
