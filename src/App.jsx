import { useRef } from "react";
import "./Style/App.css";
import { useContext } from "react";
import { TemaContext } from "./Context/TemaContext";

function App() {
  const { name, changeName } = useContext(TemaContext);
  return (
    <>
      <div>
        <section>Logo</section>
        <section>Inicio</section>
        <section>Habilidades</section>
        <section>Proyectos</section>
      </div>
    </>
  );
}

export default App;
