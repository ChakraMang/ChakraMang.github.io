import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mine from '../../Assets/Mine.png'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './About.css';

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="txt-class"> INTRODUCE </span> MYSELF
            </h1>
            <p className="about-body">
            I'm skilled in designing and building web applications. With a strong background in <span className="txt-class"> JavaScript and TypeScript</span>. 
            My expertise lies in <span className="txt-class">Node.js, React.js, Nest.js, and Next.js </span>, Working with both <span className="txt-class">MongoDB and PostgreSQL databases</span>, ensuring efficient data management and robust back-end systems. 
          <br />
          <br />
            On the content creation front, I excel in both <span className="txt-class">short and long-form writing</span>, I've also achieved <span className="txt-class">email marketing</span> success with open rates consistently exceeding 50%, a testament to my ability to craft engaging and effective email campaigns.
            I understand the <span className="txt-class">Art of effective communication</span> and use it to captivate and inform my audience through written content. Whether it's tech-related content or more diverse subject matter, I'm up for the challenge.
            <br />
            <br />
            Additionally, I have a keen interest in emerging technologies like AI content generation and blockchain, and I'm enthusiastic about the potential of Web3. I'm always eager to explore and contribute to the ever-evolving world of web development and technology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Mine} className="img-fluid" alt="avatar" style={{borderRadius: '50%'}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="txt-class">connect </span>with me
            </p>
            <ul className="about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ChakraMang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  about-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ChakkraCreate"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  about-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Chakkrapaani-mangalyara/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  about-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
