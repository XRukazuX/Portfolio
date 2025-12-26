import { TemaContext } from "./TemaContext";
import { useState, useRef } from "react";

function TemaProvider({ children }) {
  const [Close, setClose] = useState(false);
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const Scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  const X = () => {
    setClose(!Close);
  };
  const opcion = () => {
    return (
      <>
        <section onClick={() => Scroll(ref[0])}>Inicio</section>
        <section onClick={() => Scroll(ref[1])}>Habilidades</section>
        <section onClick={() => Scroll(ref[2])}>Proyectos</section>
        <section onClick={() => Scroll(ref[3])}>Contacto</section>
      </>
    );
  };
  return (
    <TemaContext.Provider value={{ Close, X, opcion, ref }}>
      {children}
    </TemaContext.Provider>
  );
}
export default TemaProvider;

//Si paso asi al llamarlo en el componente padre tipo app.jsx tengo que importarlo sin llaver "import name" es contrario si quiero solo exportear la funcion tipo "export funtion {name} " tengo que import en el app como import{name}
// Los values siempre tienen que ser constantes asi que si usas funciones es mejor hacer un arrow funtion para mandar datos
