import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TemaProvider from "./Context/TemaProvider";
import InfoProvider from "./Context/InfoProvider.jsx";
import "./Style/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <InfoProvider>
    <TemaProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </TemaProvider>
  </InfoProvider>
);
