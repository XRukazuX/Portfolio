import { useContext } from "react";
import { InfoContext } from "../Context/TemaContext";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyect } = useContext(InfoContext);
  console.log(Proyect);
  return (
    <>
      <div className="Card">
        <section className="monitor">
          <span className="icon-wrapper">
            <FaMobileAlt className="screen" />
          </span>
          <span className="icon-wrapper active">
            <MdOutlineMonitor className="screen" />
          </span>
        </section>
        <img src={Proyect.one.mobile} alt="Proyecto" className="Diseño" />
        <details className="scrol">
          <summary>{Proyect.one.title}</summary>
          <span>
            <a href="a">
              <SiNetlify />
            </a>
            <a href="a">
              <FaGithub />
            </a>
          </span>
          <div> {Proyect.one.description}</div>
        </details>
      </div>
      */
    </>
  );
}
export default Proyect;
