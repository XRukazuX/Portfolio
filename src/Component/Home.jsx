import { useContext, useRef } from "react";
import { InfoContext, TemaContext } from "../Context/TemaContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Proyect from "./Proyect";

import "../Style/Home.css";
function Home() {
  const { Info } = useContext(InfoContext);
  const { ref } = useContext(TemaContext);
  const list = (item, i) => {
    return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
  };
  return (
    <>
      <div className="Info">
        <div className="Show" ref={ref[0]}>
          <section className="Description">
            <h1>Hola, soy Lucas</h1>
            <p>
              Soy alguien que busca aventurarse en el apasionante mundo de la
              tecnología, especialmente en el
              <strong> desarrollo frontend</strong>. Me encanta aprender nuevas
              herramientas y técnicas para crear interfaces web atractivas y
              funcionales.
            </p>

            <hr />
          </section>
          <section className="Perfil"></section>
        </div>
        <h1 className="Title">Habilidades</h1>
        <section className="Skill" ref={ref[1]}>
          <Card
            className="Card-origin"
            style={{ width: "18rem", minHeight: "14rem" }}
          >
            <Card.Title>Frontend</Card.Title>
            <ListGroup>{Info.frontend.map(list)}</ListGroup>
          </Card>
          <Card
            className="Card-origin"
            style={{ width: "18rem", minHeight: "14rem" }}
          >
            <Card.Title>Backend</Card.Title>
            <ListGroup style={{ color: "red" }}>
              {Info.backend.map(list)}
            </ListGroup>
          </Card>
          <Card
            className="Card-origin"
            style={{ width: "18rem", minHeight: "14rem" }}
          >
            <Card.Title>Tools</Card.Title>
            <ListGroup>{Info.tools.map(list)}</ListGroup>
          </Card>
        </section>
      </div>
      <Proyect />
    </>
  );
}
export default Home;
