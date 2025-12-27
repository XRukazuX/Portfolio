import { InfoContext } from "./TemaContext";
import screen1 from "../Icons/fullscreen-Rick.png";
import mobile1 from "../Icons/Samsung Galaxy S8-Rick.png";
import screen2 from "../Icons/fullscreen-Calculadora.png";
import mobile2 from "../Icons/Samsung Galaxy S8-Calculadora.png";
import screen3 from "../Icons/fullscreen-Pics.png";
import mobile3 from "../Icons/Samsung Galaxy S8-Pics.png";
import screen4 from "../Icons/fullscreen-Dado.png";
import mobile4 from "../Icons/Samsung Galaxy S8-Dado.png";
import { useState } from "react";

function InfoProvider({ children }) {
  const Link = {
    linkedin:
      "https://www.linkedin.com/in/lucas-ariel-mamani-pe%C3%B1a-829082243/",
    git: "https://github.com/XRukazuX",
    mail: "lucas_mamani_12@hotmail.com",
  };
  const Info = {
    frontend: [
      "HTML5 💻",
      "CSS 🎨",
      "JavaScript ⚡",
      "React.js ⚛️",
      "Bootstrap 🅱️",
      "React Router 🛣️",
    ],
    backend: ["Node.js 🟢", "Express.js 🚀"],
    tools: [
      "Git & GitHub 🌐",
      "NPM / Yarn 📦",
      "Figma / Diseño UI 🎨",
      "VSCode ✏️",
      "Netlify ☁️",
      "IA/ ChatGPT 🤖 (soporte en código y UX)",
    ],
  };

  const Proyects2 = [
    {
      title: "Rick & Morty",
      fullscreen: screen1,
      mobile: mobile1,
      description:
        "Una página web interactiva que permite buscar personajes de Rick and Morty utilizando la API oficial. Al ingresar el nombre de un personaje, muestra información detallada como su especie, estado, género y ubicación, acompañada de la imagen correspondiente.",
      git: "https://github.com/XRukazuX/Rick-Morty",
      netlify: "https://infiniterick.netlify.app/",
    },
    {
      title: "Calculadora",
      fullscreen: screen2,
      mobile: mobile2,
      description: "Prototipo de calculadora usando dependencia Math.js.",
      git: "https://github.com/XRukazuX/Calculadora",
      netlify: "https://calculadora-0v.netlify.app/",
    },
    {
      title: "Pics Waifu",
      fullscreen: screen3,
      mobile: mobile3,
      description:
        "Una página web que permite obtener imágenes de estilo anime utilizando la API Waifu.pics. Los usuarios pueden elegir entre imágenes individuales o grupales, y el tipo de imagen que desean recibir.",
      git: "https://github.com/XRukazuX/image-generator",
      netlify: "https://waifupics-proyect.netlify.app/",
    },
    {
      title: "Dados-Eldritch Horror",
      fullscreen: screen4,
      mobile: mobile4,
      description:
        "Un simulador de dados para Eldritch Horror que permite lanzar tiradas normales o bendecidas, mostrando resultados de forma interactiva y clara.",
      git: "https://github.com/XRukazuX/Dados-Eldritch",
      netlify: "https://dados-eldritch.netlify.app/",
    },
  ];

  return (
    <InfoContext.Provider value={{ Info, Proyects2, Link }}>
      {children}
    </InfoContext.Provider>
  );
}
export default InfoProvider;
