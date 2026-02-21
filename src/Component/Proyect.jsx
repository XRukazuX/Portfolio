import { useContext } from "react";
import { InfoContext, TemaContext } from "../Context/TemaContext";

import ProyectCard from "./Proyect-card";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyects2 } = useContext(InfoContext);
  const { ref, Mode } = useContext(TemaContext);
  return (
    <>
      <div className={`Proyect  ${Mode ? "" : "dark"}`}>
        <div className="animation">
          <h1 className="Title" ref={ref[2]}>
            Proyectos
          </h1>
          <div className="Proyect-conteiner">
            {Proyects2.map((proyect, key) => {
              return <ProyectCard key={key} proyect={proyect} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Proyect;
