import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import {BsPersonWorkspace} from "react-icons/bs"

import './Navbar.css'

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navbar, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
      updateExpanded(false);
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    };
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navbar ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} onClick={() => scrollToSection('home')}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => scrollToSection('works')}
              >
                <BsPersonWorkspace
                  style={{ marginBottom: "2px" }}
                />{" "}
                Works
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => scrollToSection('about')}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

          
            <Nav.Item className="calendly-btn">
              <Button
                href="https://calendly.com/chakkrapaani-mangalyara/30min"
                target="_blank"
                className="calendly-btn-inner"
              >
                {" "}
                Let's Work!
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
