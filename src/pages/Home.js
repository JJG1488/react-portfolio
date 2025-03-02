import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero mt-5">
        <Container>
          <h1>Transforming Everyday Ideas into Digital Reality</h1>
          <p>
            At JGServicesLLC, we take your everyday ideas and turn them into
            custom web applications that work for your business.
          </p>
          <Button variant="primary" size="lg" href="#/services">
            Discover Our Services
          </Button>
        </Container>
      </section>

      {/* Process Section */}
      <section
        className="home-process"
        style={{
          padding: "50px 0",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container>
          <h2 className="text-center mb-4 ">Our Process</h2>
          <Row>
            <Col md={4} className="text-center">
              <img
                src="/Assets/Images/Abstract-Hexagon-Pattern-Artistic-HD-Wallpaper-Background-Image-20-1536x960.jpg"
                alt="Idea Generation"
                className="img-fluid mb-3"
              />
              <h4>Idea Generation</h4>
              <p>
                We begin by understanding your vision and turning everyday ideas
                into concrete project plans.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <img
                src="/Assets/Images/Abstract-Hexagon-Pattern-Artistic-HD-Wallpaper-Background-Image-20-1536x960.jpg"
                alt="Design & Development"
                className="img-fluid mb-3"
              />
              <h4>Design & Development</h4>
              <p>
                Our experts design intuitive interfaces and develop robust
                applications tailored to your needs.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <img
                src="/Assets/Images/Abstract-Hexagon-Pattern-Artistic-HD-Wallpaper-Background-Image-20-1536x960.jpg"
                alt="Launch & Support"
                className="img-fluid mb-3"
              />
              <h4>Launch & Support</h4>
              <p>
                We ensure a smooth launch and provide ongoing support to keep
                your application running at peak performance.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Custom Web Development Section */}
      <section className="home-development" style={{ padding: "50px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/Assets/Images/Abstract-Hexagon-Pattern-Artistic-HD-Wallpaper-Background-Image-20-1536x960.jpg"
                alt="Web Development In Action"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2>Custom Web Development</h2>
              <p>
                Our web development process integrates creative design,
                cutting-edge technology, and business insight to produce
                solutions that drive results. Whether you need a brand new
                website or an upgrade to an existing platform, we deliver a
                product that enhances your online presence and engages your
                customers.
              </p>
              <p>
                From responsive design to secure backend development, we handle
                every aspect with precision and care. Let us help you create a
                digital platform that not only looks great but also performs
                exceptionally.
              </p>
              <Button variant="primary" size="lg" href="#/contact">
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
