import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ✅ Estilos globales centralizados
import "./styles/global.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
