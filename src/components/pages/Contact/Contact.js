import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = () => (
  <div>
    <div className="contact-container">
      <div className="container" id="project-container-data">
        {/* <div className="row">
        <div className="col"> */}

        <Card
          style={{ width: "75%", margin: "auto", border: "solid grey 10px" }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Contact Card
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              <div className="row" style={{ margin: "2%" }}>
                {/* <div className="col">
                  <p> Phone</p>
                </div> */}
                <div className="col">
                  <Button variant="primary" href="tel:586-571-0600">
                    {" "}
                    <span id="social-link-data">Phone: </span>{" "}
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
              <div className="row" style={{ margin: "2%" }}>
                {/* <div className="col">
                  <p> Email</p>
                </div> */}
                <div className="col">
                  <Button
                    variant="primary"
                    href="mailto:jgservicesllc14@gmail.com=My custom mail body"
                  >
                    <span id="social-link-data">Email: </span>{" "}
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
              <div className="row" style={{ margin: "2%" }}>
                {/* <div className="col">
                  <p> LinkedIn</p>
                </div> */}
                <div className="col">
                  <Button
                    variant="primary"
                    href="https://www.linkedin.com/in/jamesgault1488"
                  >
                    <span id="social-link-data">LinkedIn: </span>{" "}
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
              <div className="row" style={{ margin: "2%" }}>
                {/* <div className="col">
                  <p> GitHub</p>
                </div> */}
                <div className="col">
                  <Button variant="primary" href="https://github.com/JJG1488">
                    <span id="social-link-data">GitHub: </span>{" "}
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  // </div>
);

export default Contact;
