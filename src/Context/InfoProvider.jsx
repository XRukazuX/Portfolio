import { InfoContext } from "./TemaContext";
import screen1 from "../Icons/fullscreen-Rick.png";
import mobile1 from "../Icons/Samsung Galaxy S8-Rick.png";
import screen2 from "../Icons/fullscreen-Calculadora.png";
import mobile2 from "../Icons/Samsung Galaxy S8-Calculadora.png";
import screen3 from "../Icons/fullscreen-Catapy.png";
import mobile3 from "../Icons/Samsung Galaxy S8-Catapy.png";
import screen4 from "../Icons/fullscreen-Dado.png";
import mobile4 from "../Icons/Samsung Galaxy S8-Dado.png";
import screen5 from "../Icons/fullscreen-Volt.png";
import mobile5 from "../Icons/Samsung Galaxy S8-Volt.png";
function InfoProvider({ children }) {
  const Link = {
    linkedin: "https://www.linkedin.com/in/lucas-ariel-mamani-pe%C3%B1a/",
    git: "https://github.com/XRukazuX",
    mail: "lucas.dev.codex@gmail.com",
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
    backend: ["Node.js 🟢", "Express.js 🚀", "MongoDB 🍃"],
    tools: [
      "Git & GitHub 🌐",
      "NPM / Yarn 📦",
      "Figma / Diseño UI 🎨",
      "VSCode ✏️",
      "Render ☁️",
      "Netlify ☁️",
      "IA/ ChatGPT 🤖 (soporte en código y UX)",
    ],
  };

  const Proyects2 = [
    {
      title: "Volt",
      fullscreen: screen5,
      mobile: mobile5,
      description:
        "Aplicación frontend de e-commerce desarrollada con React y Vite que consume una API REST propia. Implementa autenticación con JWT, rutas protegidas y carrito de compras, demostrando integración completa entre frontend y backend.",
      git: "https://github.com/XRukazuX/CommerseApi",
      netlify: "https://voltproyect.netlify.app/",
    },
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
      title: "Catapy",
      fullscreen: screen3,
      mobile: mobile3,
      description:
        "Catapy es un prototipo de tienda online desarrollado con React y Vite, diseñado para experimentar con un carrito de compras completo. Permite visualizar productos, agregar o eliminar ítems del carrito, guardar la selección para continuar la compra y enviar pedidos de prueba vía WhatsApp. Todo esto se realiza de forma gratuita y segura, sin pagos ni envíos reales.",
      git: "https://github.com/XRukazuX/E-Commerce",
      netlify: "https://catapy.netlify.app/",
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
