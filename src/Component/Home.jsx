import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../Context/TemaContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Style/Home.css";
function Home() {
  const { Info } = useContext(InfoContext);
  const list = (item, i) => {
    return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
  };
  return (
    <>
      <div className="Info">
        <h1>Hola, soy Lucas</h1>
        <p>
          Soy alguien que busca aventurarse en el apasionante mundo de la
          tecnología, especialmente en el <strong>desarrollo frontend</strong>.
          Me encanta aprender nuevas herramientas y técnicas para crear
          interfaces web atractivas y funcionales.
        </p>
        <section className="Perfil"></section>
        <Card style={{ width: "18rem", maxHeight: "18rem" }}>
          <Card.Title>Frontend</Card.Title>
          <ListGroup>{Info.frontend.map(list)}</ListGroup>
        </Card>
      </div>
    </>
  );
}
export default Home;
