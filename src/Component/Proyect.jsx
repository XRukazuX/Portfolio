import { useContext } from "react";
import { InfoContext } from "../Context/TemaContext";
import "../Style/Proyect.css";
function Proyect() {
  const { Proyect } = useContext(InfoContext);
  console.log(Proyect);
  return <></>;
}
export default Proyect;
