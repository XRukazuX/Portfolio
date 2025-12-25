import { useContext } from "react";
import { InfoContext } from "../Context/TemaContext";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyects2 } = useContext(InfoContext);
  console.log(Proyects2);
  return (
    <>
      <div className="Proyect-conteiner">
        {Proyects2.map((proyect, key) => (
          <div key={key} className="Card">
            <section className="monitor">
              <span className="icon-wrapper">
                <FaMobileAlt className="screen" />
              </span>
              <span className="icon-wrapper active">
                <MdOutlineMonitor className="screen" />
              </span>
            </section>
            <img src={proyect.mobile} alt="Proyecto" className="Diseño" />
            <details className="scrol">
              <summary>{proyect.title}</summary>
              <span>
                <a href="a">
                  <SiNetlify />
                </a>
                <a href="a">
                  <FaGithub />
                </a>
              </span>
              <p className="text"> {proyect.description}</p>
            </details>
          </div>
        ))}
      </div>
    </>
  );
}
export default Proyect;
