// Updated Component/Navbar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css"; // Import the style.css file

function Kavbar() {
  const userName = "Fares";
  const userIconUrl =
    "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={userIconUrl}
            alt="User Icon"
            style={{
              width: "65px",
              height: "70px",
              marginRight: "70px",
              borderRadius: "10%",
            }}
          />
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "1.8rem", color: "orange", marginLeft: "-50px" }}
          >
            Hello {userName}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Kavbar;
