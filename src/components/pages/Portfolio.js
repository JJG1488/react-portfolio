import React from "react";
import { Card } from "react-bootstrap";
import travelLogger from "../data/Assets/Images/travel-logger.png";
import wannaBurger from "../data/Assets/Images/wannaBurger.png";
import findYourMovie from "../data/Assets/Images/find-your-movie.png";
import workdayScheduler from "../data/Assets/Images/workday-scheduler copy.png";
import weatherDashboard from "../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../data/Assets/Images/password-gen-screenshot copy.png";
import websiteAccessibility from "../data/Assets/Images/website-accessibility.png";

// const mainContainer = {
  
//   borderRadius: "25px",
//   border: "solid",
//   boxShadow: "10px 10px 5px black",
//   maxWidth: "100%",
//   minHeight: "40rem",
//   maxHeight: "40rem",
//   overflow: "auto",

// }

const Portfolio = () => (
  <div>
    <h1>Portfolio Page</h1>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto"}}>
    <Card.Body>
      <Card.Img variant="top" src={travelLogger} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://hidden-waters-17740.herokuapp.com/">Click Here To See!</a>
          <p>
          Have you every gone to a new location and had no idea of what indoor/ outdoor activities were around you? Well look no further, the travel logger application is here to assist you. Your own personal activity logger.
          </p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={wannaBurger} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://damp-castle-88848.herokuapp.com/">Click Here To See!</a>
          <p>The application uses a database to store the information that the user enters. The user is able to add a item
          to whichever side of the application that the user decides, and based on the side selected, the information is
          stored in the databases' table and displayed to the appropriate column or area.</p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={findYourMovie} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://jjg1488.github.io/find-your-movie/">Click Here To See!</a>
      <p>Have you ever search for a movie and had to switch movie platforms to find it? Well, this website solves that
          problem!</p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={workdayScheduler} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://jjg1488.github.io/work-day-scheduler/">Click Here To See!</a>
      <p>This webpage displays a workday scheduler that can save the event or task to local storage. User input data
          can be used for myriad of things.</p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={weatherDashboard} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://jjg1488.github.io/weather-dashboard/">Click Here To See!</a>
      <p>Have a look at the weather for multiple cities. This is for people that enjoy traveling.</p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={passwordGen} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://jjg1488.github.io/password-generator/">Click Here To See!</a>
      <p>Need a password? No problem! This webpage displays an example of how JavaScript is used to compare different
          user inputs that can result in different outcomes based on those inputs.</p>
        </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ backgroundColor: "grey", width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", maxHeight: "30rem", minHeight: "35rem", overflow: "auto" }}>
    <Card.Body>
      <Card.Img variant="top" src={websiteAccessibility} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
      <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
      <a href="https://jjg1488.github.io/web-accessibility-website/">Click Here To See!</a>
      <p>Website code displays proper structure of a webpage.</p>
        </Card.Text>
        </Card.Body>
    </Card>

      </div>

);

export default Portfolio;

