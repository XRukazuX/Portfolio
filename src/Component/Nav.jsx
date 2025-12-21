import "../Style/Nav.css";
import logo from "../Icons/logo2.png";
import { useContext } from "react";
import { TemaContext } from "../Context/TemaContext";
function Nav() {
  const { Close, X, opcion } = useContext(TemaContext);
  const nav = document.querySelector(".Nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Bajar → ocultar
      nav.style.transform = "translateY(-100%)";
    } else {
      // Subir → mostrar
      nav.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });
  return (
    <>
      <div className="Nav">
        <div
          className="Logo"
          onClick={() => {
            X();
          }}
        >
          <img src={logo} alt="Logo" />
        </div>
        <div className="Opcion">{opcion()}</div>
      </div>
      <div className={Close ? "Open" : "Close"}>
        <div>
          <section
            className="Closer"
            onClick={() => {
              X();
            }}
          >
            X
          </section>
          <div className="Opcion-Open">{opcion()}</div>
        </div>
      </div>
    </>
  );
}
export default Nav;
