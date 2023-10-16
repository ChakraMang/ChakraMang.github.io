import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import './Works.css';
import forest from "../../Assets/forest.jpg";
import cart from "../../Assets/cart.jpg";
import shorturl from "../../Assets/shorturl.png";
import ai from "../../Assets/ai.png"
import email from "../../Assets/email.jpg";

function works() {
  return (
    <Container fluid className="work-section">
      <Container>
        <h1 className="work-heading">
          My Recent <strong className="txt-class">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few works I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="work-card">
            <WorkCards
              imgPath={forest}
              isBlog={false}
              title="Virtual Forest Breifs"
              description="A block-chain based game APIs of ZuraVerse to support the movement of Saving Environment."
              ghLink="https://github.com/ChakraMang/VirtualForestBrieif"
            />
          </Col>
          <Col md={4} className="work-card">
          <WorkCards
              imgPath={ai}
              isBlog={true}
              title="AI visual art"
              description="Visual content created on DallE-2, Midjourney using prompts"
              driveLink="https://drive.google.com/drive/folders/1C4xbd2a0a6kD7PuibSJGVc7GlIYvvIRS?usp=sharing"
            />
          </Col>
          <Col md={4} className="work-card">
          <WorkCards
              imgPath={email}
              isBlog={true}
              title="Best performing emails"
              description="Best performing emails with an open rate of 50+%s, "
              driveLink="https://drive.google.com/drive/folders/1RzCx08nZActT-9L6a-aXyS90au8YgSKl?usp=sharing"
            />
          </Col>
          <Col md={4} className="work-card">
          <WorkCards
              imgPath={cart}
              isBlog={false}
              title="Shopping cart"
              description="E-commerce website backend APIs, containing User, Product, Order, and Cart Models "
              ghLink="https://github.com/ChakraMang/work-shoppingCart"
            />
          </Col>
          <Col md={4} className="work-card">
          <WorkCards
              imgPath={shorturl}
              isBlog={false}
              title="URL shotner"
              description="Helping in creating a short url to share on various social medias which redirects to the original URL with Redis for reducing response time."
              ghLink="https://github.com/ChakraMang/workUrlShortner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default works;
