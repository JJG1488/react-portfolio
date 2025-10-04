import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavTabs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="md"
      id="nav-data"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100vw",
        top: "0",
        left: "0",
      }}
      expanded={expanded}
    >
      <Navbar.Brand href="/">
        <span id="logo"> JGServicesLLC </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <div
        className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        id="basic-navbar-nav"
      >
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            <span id="nav-link-text">Home</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
            <span id="nav-link-text">Services</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
            <span id="nav-link-text">Contact</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/schedule" onClick={() => setExpanded(false)}>
            <span id="nav-link-text">Schedule</span>
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
            <span id="nav-link-text">About</span>
          </Nav.Link> */}
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavTabs;
