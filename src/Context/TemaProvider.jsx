import { TemaContext } from "./TemaContext";
import { useState, useRef } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";

function TemaProvider({ children }) {
  const [Close, setClose] = useState(false);
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const Scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const X = () => {
    setClose(!Close);
  };
  const [Mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!Mode);
  };
  const opcion = () => {
    return (
      <>
        <section onClick={() => (Scroll(ref[0]), setClose(false))}>
          Inicio
        </section>
        <section onClick={() => (Scroll(ref[1]), setClose(false))}>
          Habilidades
        </section>
        <section onClick={() => (Scroll(ref[2]), setClose(false))}>
          Proyectos
        </section>
        <section onClick={() => (Scroll(ref[3]), setClose(false))}>
          Contacto
        </section>
        {Mode ? (
          <MdOutlineDarkMode onClick={changeMode} className="mode" />
        ) : (
          <LuSunMoon onClick={changeMode} className="mode" />
        )}
      </>
    );
  };
  return (
    <TemaContext.Provider value={{ Close, X, opcion, Mode, ref }}>
      {children}
    </TemaContext.Provider>
  );
}
export default TemaProvider;

//Si paso asi al llamarlo en el componente padre tipo app.jsx tengo que importarlo sin llaver "import name" es contrario si quiero solo exportear la funcion tipo "export funtion {name} " tengo que import en el app como import{name}
// Los values siempre tienen que ser constantes asi que si usas funciones es mejor hacer un arrow funtion para mandar datos
