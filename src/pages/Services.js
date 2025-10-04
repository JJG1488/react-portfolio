import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Services = () => {
  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <h2 className="text-center">Our Custom Website Services</h2>
      <p className="text-center">
        We specialize in building custom websites that reflect your brand and
        vision.
      </p>
      {/* <Row className="mt-5"> */}
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="../../Assets/Images/portfolio_responsive_design.png"
            />
            <Card.Body>
              <Card.Title>Responsive Design</Card.Title>
              <Card.Text>
                Modern, mobile-friendly websites that look great on any device.
              </Card.Text>
              <Button variant="primary" as="a" href="#contact">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="../../Assets/Images/portfolio_custom_development.png"
            />
            <Card.Body>
              <Card.Title>Custom Development</Card.Title>
              <Card.Text>
                Tailored solutions built to your specific requirements and
                business needs.
              </Card.Text>
              <Button variant="primary" as="a" href="#contact">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="../../Assets/Images/portfolio_SEO_Optimization.png"
            />
            <Card.Body>
              <Card.Title>SEO Optimization</Card.Title>
              <Card.Text>
                Improve your online presence with our expert SEO strategies.
              </Card.Text>
              <Button variant="primary" as="a" href="#contact">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
