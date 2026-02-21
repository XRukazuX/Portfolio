import { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function ProyectCard({ proyect }) {
  const [Monitor, setMonitor] = useState(true);
  const changeMonitor = () => {
    setMonitor(!Monitor);
  };
  console.log("entras");
  return (
    <div className="Card">
      <section className="monitor">
        <span
          className={`icon-wrapper ${Monitor ? "Active" : ""}`}
          onClick={changeMonitor}
        >
          <FaMobileAlt className="screen" />
        </span>
        <span
          className={`icon-wrapper ${Monitor ? "" : "Active"}`}
          onClick={changeMonitor}
        >
          <MdOutlineMonitor className="screen" />
        </span>
      </section>
      <img
        src={Monitor ? proyect.mobile : proyect.fullscreen}
        alt="Proyecto"
        className="Diseño"
      />
      <details className="scrol">
        <summary>{proyect.title}</summary>
        <span>
          <a href={proyect.netlify} target="_blank" rel="noopener noreferrer">
            <SiNetlify />
          </a>
          <a href={proyect.git} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <p className="text"> {proyect.description}</p>
      </details>
    </div>
  );
}

export default ProyectCard;
