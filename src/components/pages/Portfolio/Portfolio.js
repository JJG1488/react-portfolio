import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import wannaBurger from "../../data/Assets/Images/wannaBurger.png";
//import workdayScheduler from "../../data/Assets/Images/workday-scheduler copy.png";
// import weatherDashboard from "../../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../../data/Assets/Images/password-gen-screenshot copy.png";
import offlineTracker from "../../data/Assets/Images/offline-tracker.png";
import workout from "../../data/Assets/Images/workout.png";
import proshop from "../../data/Assets/Images/proshop.png";
import fundamentalsofnetworking from "../../data/Assets/Images/fundamentalsofnetworking.png";
import basicwebpages from "../../data/Assets/Images/basicwebprogramming.png";
import solanablockchain from "../../data/Assets/Images/solanablockchain.png";

const Portfolio = (props) => (
  <div className="main-portfolio-container">
    <div className="container" id="project-container-data">
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={basicwebpages} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              Technologies Used: HTML, CSS, JavaScript. This webpage displays
              static web pages. : &nbsp;{" "}
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
      {/* CARD CONTENT START */}
      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={fundamentalsofnetworking} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>Technologies Used: SASS, JS, CSS, Webfonts :</p>
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
      {/* CARD CONTENT START */}
      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={proshop} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>Technologies Used: React, Redux, Axios, Express, MongoDB :</p>
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
      {/* CARD CONTENT START */}

      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={offlineTracker} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              Technologies used: Compression, Express, Mongoose, MongoDB,
              Service Worker, JavaScript : &nbsp;
            </p>
            <p>
              {" "}
              This application was created to display offline capability by
              register service workers that persists data when on and offline.{" "}
            </p>
          </Card.Text>
          <p>
            {/* <a
            href="https://offline-tracker.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a> */}
          </p>
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
      {/* CARD CONTENT START */}

      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={workout} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              Technologies used: Express, Mongoose, MongoDB, Service Worker,
              JavaScript :{" "}
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
      {/* CARD CONTENT START */}
      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={solanablockchain} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>Technologies Used: React, JavaScript, Solanablockchain :</p>
            <p>
              Note: You will need to connect a ghost wallet to use the site to
              mint an NFT.
            </p>
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
      {/* CARD CONTENT START */}

      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={wannaBurger} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              {" "}
              Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
              ESlint, Compression, MySQL, Sequelize our own personal activity
              logger. This application uses a database to store the information
              that the user enters. The user is able to add a item to whichever
              side of the application that the user decides, and based on the
              side selected, the information is stored in the database table and
              displayed to the appropriate column. :{" "}
            </p>
          </Card.Text>
          {/* <a
              href="https://damp-castle-88848.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a> */}
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
      {/* CARD CONTENT START */}

      <br></br>
      {/* CARD CONTENT START */}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={passwordGen} />
        <Card.Body>
          <hr></hr>
          <Card.Title>Basic Static Webpages</Card.Title>
          <Card.Text>
            <p>
              Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
              ESlint, Compression, MySQL, Sequelize our own personal activity
              logger. Need a password? No problem! This webpage displays an
              example of how JavaScript is used to compare different user inputs
              that can result in different outcomes based on those inputs. :
              &nbsp;{" "}
            </p>
          </Card.Text>
          {/* <a
              href="https://damp-castle-88848.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a> */}
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
      {/* CARD CONTENT START */}

      {/* <br></br>

      <div>
        <picture>
          <img src={workdayScheduler} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. This webpage displays a workday scheduler that can save the
            event or task to local storage. User input data can be used for
            myriad of things and used later. : &nbsp;{" "}
            <a
              href="https://jjg1488.github.io/work-day-scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </p>
        </span>
      </div> */}

      <br></br>
    </div>
  </div>
);

export default Portfolio;
