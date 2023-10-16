import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import './Home.css';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

      
        <Container className="home-content">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Chakkrapaani</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              <h3>Your go to</h3>
                <Type />
              </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
