import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TemaProvider from "./Context/TemaProvider";
import "./Style/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <TemaProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TemaProvider>
);
