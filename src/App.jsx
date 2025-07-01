import React from "react";
import "./styles/global.css";

import Hero from "./components/Hero";
import Microprueba from "./components/Microprueba";
import IAFranja from "./components/IAFranja";
import SeccionTestimonioAutor from "./components/SeccionTestimonioAutor.jsx";
import CtaSeguirme from "./components/CtaSeguirme";

// import Beneficios from "./components/Beneficios";
// import PruebaSocial from "./components/PruebaSocial";
// import SobreLukas from "./components/SobreLukas";
// import CtaSocial from "./components/CtaSocial";
// import OfertaAnticipada from "./components/OfertaAnticipada";
// import MiniFAQ from "./components/MiniFAQ";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <IAFranja />
      <Microprueba />
      <SeccionTestimonioAutor />
      <CtaSeguirme />
      {/* Descomenta a medida que vayas creando:
      <Beneficios />
      <PruebaSocial />
      <SobreLukas />
      <CtaSocial />
      <OfertaAnticipada />
      <MiniFAQ />
      <Footer /> */}
    </div>
  );
}

export default App;
