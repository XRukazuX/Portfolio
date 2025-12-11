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
    frontend: ["HTML5 💻", "CSS 🎨", "JavaScript ⚡", "React.js ⚛️"],
    backend: ["Node.js 🟢", "Express.js 🚀"],
    tools: [
      "Git & GitHub 🌐",
      "NPM / Yarn 📦",
      "Figma / Diseño UI 🎨",
      "VSCode ✏️",
    ],
  };
  const Proyect = {
    one: {
      title: "Eldritch Horror-Dado",
      fullscreen: screen1,
      mobile: mobile1,
      description:
        "Un simulador de los dados del famoso juego Eldritch Horror, cuanta con el estado normal y bendecido para jugar como tambien un control sobre la cantidad de dados a usar por tirada",
      git: "https://github.com/XRukazuX/Rick-Morty",
      netlify: "https://infiniterick.netlify.app/",
    },
    two: {
      title: "Calculadora",
      fullscreen: screen2,
      mobile: mobile2,
      description: "Prototipo de calculadora usando ",
      git: "https://github.com/XRukazuX/Calculadora",
      netlify: "https://calculadora-0v.netlify.app/",
    },
    three: {
      title: "Pics Waifu",
      fullscreen: screen3,
      mobile: mobile3,
      description:
        "Generador de imagenes por parte de una Api Publica, se pueden pedir individualmente o en grupo",
      git: "https://github.com/XRukazuX/image-generator",
      netlify: "https://waifupics-proyect.netlify.app/",
    },
    four: {
      title: "Dados-Eldritch Horror",
      fullscreen: screen4,
      mobile: mobile4,
      description:
        "Simulador de dados para el famoso juego de mesa de Eldritch Horror, cuenta con estado normal o bendecido estableciendo una cantidad de dados a especificar por el usuario",
      git: "https://github.com/XRukazuX/Dados-Eldritch",
      netlify: "https://dados-eldritch.netlify.app/",
    },
  };
  const [Mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!Mode);
  };
  return (
    <InfoContext.Provider value={{ Info, Proyect, Mode, changeMode }}>
      {children}
    </InfoContext.Provider>
  );
}
export default InfoProvider;
