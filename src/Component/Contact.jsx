import { CiLinkedin } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import "../Style/Contact.css";

function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="Text">
          <h1>Contactos</h1>
          <section>
            Siempre listo para aprender y crear experiencias web atractivas y
            funcionales.
          </section>
        </div>
        <div>
          <section className="Links">
            <CiLinkedin className="icons" />
            <IoIosMail className="icons" />
            <FaGithub className="icons" />
          </section>
        </div>
      </div>
    </>
  );
}
export default Contact;
