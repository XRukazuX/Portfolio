import { useContext, useRef } from "react";
import { InfoContext, TemaContext } from "../Context/TemaContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Proyect from "./Proyect";

import "../Style/Home.css";
function Home() {
  const { Info } = useContext(InfoContext);
  const { ref, Mode } = useContext(TemaContext);
  const list = (item, i) => {
    return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
  };
  return (
    <>
      <div className={`Info ${Mode ? "" : "dark"}`}>
        <div className="Show">
          <section className="Description" ref={ref[0]}>
            <h1>Hola, soy Lucas</h1>
            <p>
              Soy desarrollador frontend en constante crecimiento, apasionado
              por crear{" "}
              <strong>
                interfaces web modernas, intuitivas y funcionales.
              </strong>{" "}
              Me especializo en transformar ideas en experiencias digitales bien
              diseñadas, combinando{" "}
              <strong>
                buenas prácticas, atención al detalle y tecnologías actuales.
              </strong>
              <br />
              Disfruto aprender nuevas herramientas y enfoques que me permitan
              construir products escalables y centrado en el usuario.
            </p>
            <hr />
          </section>
          <section className="Perfil"></section>
        </div>
        <div className="animation">
          <h1 className="Title" ref={ref[1]}>
            Habilidades
          </h1>
          <section className="Skill">
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
      </div>
      <Proyect />
    </>
  );
}
export default Home;
