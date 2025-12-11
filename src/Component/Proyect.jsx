import { useContext } from "react";
import { InfoContext } from "../Context/TemaContext";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyect } = useContext(InfoContext);
  console.log(Proyect);
  return (
    <>
      <div className="Card">
        <img src={Proyect.one.mobile} alt="Proyecto" className="Diseño" />
        <details className="scrol">
          <summary>{Proyect.one.title}</summary>
          {Proyect.one.description}
        </details>
      </div>
    </>
  );
}
export default Proyect;
