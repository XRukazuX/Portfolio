import { TemaContext } from "./TemaContext";
import { useState } from "react";

function TemaProvider({ children }) {
  const [name, Setname] = useState(1);
  const changeName = () => {
    Setname(name + 1);
  };
  return (
    <TemaContext.Provider value={{ name, changeName }}>
      {children}
    </TemaContext.Provider>
  );
}
export default TemaProvider;

//Si paso asi al llamarlo en el componente padre tipo app.jsx tengo que importarlo sin llaver "import name" es contrario si quiero solo exportear la funcion tipo "export funtion {name} " tengo que import en el app como import{name}
// Los values siempre tienen que ser constantes asi que si usas funciones es mejor hacer un arrow funtion para mandar datos
