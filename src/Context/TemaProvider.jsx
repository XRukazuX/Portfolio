import { TemaContext } from "./TemaContext";
import { useState } from "react";

function TemaProvider({ children }) {
  const [Close, setClose] = useState(false);
  const X = () => {
    setClose(!Close);
  };
  const opcion = () => {
    return (
      <>
        <section>Inicio</section>
        <section>Habilidades</section>
        <section>Proyectos</section>
        <section>Contacto</section>
      </>
    );
  };
  return (
    <TemaContext.Provider value={{ Close, X, opcion }}>
      {children}
    </TemaContext.Provider>
  );
}
export default TemaProvider;

//Si paso asi al llamarlo en el componente padre tipo app.jsx tengo que importarlo sin llaver "import name" es contrario si quiero solo exportear la funcion tipo "export funtion {name} " tengo que import en el app como import{name}
// Los values siempre tienen que ser constantes asi que si usas funciones es mejor hacer un arrow funtion para mandar datos
