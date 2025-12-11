import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../Context/TemaContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Proyect from "./Proyect";
import { CiLinkedin } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import "../Style/Home.css";
function Home() {
  const { Info, Mode } = useContext(InfoContext);
  const list = (item, i) => {
    return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
  };
  return (
    <>
      <div className="Info">
        <div className="Show">
          <section className="Description">
            <h1>Hola, soy Lucas</h1>
            <p>
              Soy alguien que busca aventurarse en el apasionante mundo de la
              tecnología, especialmente en el
              <strong> desarrollo frontend</strong>. Me encanta aprender nuevas
              herramientas y técnicas para crear interfaces web atractivas y
              funcionales.
            </p>

            <section className="Links">
              <CiLinkedin className="icons" color={Mode ? "black" : "white"} />
              <IoIosMail className="icons" />
              <FaGithub className="icons" />
            </section>
            <hr />
          </section>
          <section className="Perfil"></section>
        </div>

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
      <Proyect />
    </>
  );
}
export default Home;
