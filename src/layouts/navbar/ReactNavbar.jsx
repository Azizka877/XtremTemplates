import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#2862ff" }}>
      <Container style={{ backgroundColor: "bg-lightblue-100" }}>
        <Navbar.Brand className="text-white ms-1" href="#home">Starter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: "none", outline: "none" }} >
        <BsThreeDots color="white" size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <NavDropdown title="DDMenu" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;