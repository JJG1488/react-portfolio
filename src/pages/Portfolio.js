import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import wannaBurger from "../../components/data/Assets/Images/wannaBurger.png";
import passwordGen from "../../components/data/Assets/Images/password-gen-screenshot copy.png";
import offlineTracker from "../../components/data/Assets/Images/offline-tracker.png";
import workout from "../../components/data/Assets/Images/workout.png";
import proshop from "../../components/data/Assets/Images/proshop.png";
import fundamentalsofnetworking from "../../components/data/Assets/Images/fundamentalsofnetworking.png";
import basicwebpages from "../../components/data/Assets/Images/basicwebprogramming.png";
import solanablockchain from "../../components/data/Assets/Images/solanablockchain.png";

const Portfolio = () => (
  <div className="main-portfolio-container">
    <Container className="container" id="project-container-data">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={basicwebpages} />
        <Card.Body>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              Technologies Used: HTML, CSS, JavaScript. Built to show one or two
              specific features.
            </p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://gaultj978.macombserver.net/itwp1050/project3/css_project3.html"
            target="_blank"
            rel="noreferrer"
          >
            Static Site 1
          </Button>
          <Button
            variant="primary"
            href="https://gaultj978.macombserver.net/itwp1050/homework4/homework4.html"
            target="_blank"
            rel="noreferrer"
          >
            Static Site 2
          </Button>
          <Button
            variant="primary"
            href="https://gaultj978.macombserver.net/itwp1050/project4/css_project4.html"
            target="_blank"
            rel="noreferrer"
          >
            Static Site 3
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={fundamentalsofnetworking} />
        <Card.Body>
          <Card.Title>Static Webpage Example</Card.Title>
          <Card.Text>
            <p>Technologies Used: SASS, JS, CSS, Webfonts</p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://gaultj978.macombserver.net/itwp1000/project3/html5up-solid-state/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Static Site 1
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={proshop} />
        <Card.Body>
          <Card.Title>Proshop React Application</Card.Title>
          <Card.Text>
            <p>
              Technologies Used: React, Redux, Axios, Express, MongoDB, and
              more.
            </p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://github.com/JJG1488/ProShopMaster.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={offlineTracker} />
        <Card.Body>
          <Card.Title>Budget Tracker</Card.Title>
          <Card.Text>
            <p>
              Technologies: Compression, Express, Mongoose, MongoDB, Service
              Worker, JavaScript.
            </p>
            <p>Displays offline capability by registering service workers.</p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://jjg1488.github.io/online-offline-budget-tracker/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={workout} />
        <Card.Body>
          <Card.Title>Fitness Tracker</Card.Title>
          <Card.Text>
            <p>
              Technologies: Express, Mongoose, MongoDB, Service Worker,
              JavaScript.
            </p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://github.com/JJG1488/workout-tracker.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={solanablockchain} />
        <Card.Body>
          <Card.Title>Blockchain NFT Drop Project</Card.Title>
          <Card.Text>
            <p>Technologies: React, JavaScript, Solanablockchain.</p>
            <p>Note: Connect a ghost wallet to mint an NFT.</p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://nft-drop-starter-project-gi2a2mk86-jjg1488.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img variant="top" src={wannaBurger} />
        <Card.Body>
          <Card.Title>Database Storage and Retrieval Burger App</Card.Title>
          <Card.Text>
            <p>
              Technologies: Travis CLI, JavaScript, Passport, Handlebars,
              ESLint, Compression, MySQL, Sequelize.
            </p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://github.com/JJG1488/burger.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
        <Card.Img variant="top" src={passwordGen} />
        <Card.Body>
          <Card.Title>Random Password Generator</Card.Title>
          <Card.Text>
            <p>
              Demonstrates JavaScript functionality to generate a random
              password.
            </p>
          </Card.Text>
          <Button
            variant="primary"
            href="https://jjg1488.github.io/password-generator/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default Portfolio;
