import React from "react";
import "./styles/global.css";

import Hero from "./components/Hero";
import Microprueba from "./components/Microprueba";
import IAFranja from "./components/IAFranja";
import SeccionTestimonioAutor from "./components/SeccionTestimonioAutor.jsx";
import CtaSeguirme from "./components/CtaSeguirme";
import FooterIA from "./components/FooterIA.jsx";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <IAFranja />
      <Microprueba />
      <SeccionTestimonioAutor />
      <CtaSeguirme />
      <FooterIA />
    </div>
  );
}

export default App;
