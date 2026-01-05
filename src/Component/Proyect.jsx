import { useContext, useState } from "react";
import { InfoContext, TemaContext } from "../Context/TemaContext";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyects2 } = useContext(InfoContext);
  const { ref, Mode } = useContext(TemaContext);
  return (
    <>
      <div className={`Proyect  ${Mode ? "" : "dark"}`}>
        <div className="animation">
          <h1 className="Title" ref={ref[2]}>
            Proyectos
          </h1>
          <div className="Proyect-conteiner">
            {Proyects2.map((proyect, key) => {
              const [Monitor, setMonitor] = useState(true);
              const changeMonitor = () => {
                setMonitor(!Monitor);
              };
              return (
                <div key={key} className="Card">
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
                      <a
                        href={proyect.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiNetlify />
                      </a>
                      <a
                        href={proyect.git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </span>
                    <p className="text"> {proyect.description}</p>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Proyect;
