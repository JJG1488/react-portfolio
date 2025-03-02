import MessageForm from "../components/MessageForm";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => (
  <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
    <h2 className="text-center">Contact Me</h2>
    <Row className="mt-4">
      <Col md={6}>
        <p>
          Whether you have questions, ideas, or are ready to get started on your
          custom website, send me a message and I'll get back to you promptly.
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <Button variant="primary" href="tel:+15865710600">
            Call Me
          </Button>
        </p>
        <p>
          <strong>Email:</strong> jgservicesllc14@gmail.com
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/jamesgault1488"
            target="_blank"
            rel="noreferrer"
          >
            James Gault
          </a>
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <MessageForm />
      </Col>
    </Row>
  </Container>
);

export default Contact;
