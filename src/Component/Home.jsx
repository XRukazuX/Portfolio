import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../Context/TemaContext";
import "../Style/Home.css";
function Home() {
  const { Info } = useContext(InfoContext);

  return (
    <>
      <div className="Info">
        <h1>Hola, soy Lucas</h1>
        <p>
          Soy alguien que busca aventurarse en el apasionante mundo de la
          tecnología, especialmente en el <strong>desarrollo frontend</strong>.
          Me encanta aprender nuevas herramientas y técnicas para crear
          interfaces web atractivas y funcionales.
        </p>
        <section className="Perfil"></section>
        <section className="Skill">Mis Habilidades: </section>
        <div className="marquee">
          <span>
            HTML5 💻 - CSS 🎨 - JavaScript ⚡ - React ⚛️ - Node 🟢 - Express 🚀
          </span>
        </div>
      </div>
    </>
  );
}
export default Home;
