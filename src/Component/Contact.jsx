import { CiLinkedin } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import "../Style/Contact.css";
import { InfoContext, TemaContext } from "../Context/TemaContext";

function Contact() {
  const { Link } = useContext(InfoContext);
  const { ref, Mode } = useContext(TemaContext);
  return (
    <>
      <div className={`Contact  ${Mode ? "" : "dark"}`} ref={ref[3]}>
        <div className="animation">
          <div className="Text">
            <h1 className="Title">Contactos</h1>
            <section>
              Siempre listo para aprender y crear experiencias web atractivas y
              funcionales. <br />
              <strong>
                ¿Tenés un proyecto en mente o querés trabajar conmigo?
              </strong>
              <br />
              No dudes en contactarme, estaré encantado de aportar valor a tu
              equipo o idea.
            </section>
          </div>
          <div>
            <section className="Links">
              <a href={Link.linkedin} target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="icons" />
              </a>
              <a
                href={`mailto:${Link.mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosMail className="icons" />
              </a>
              <a href={Link.git} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icons" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
