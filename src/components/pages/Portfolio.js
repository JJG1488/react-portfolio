import React from "react";
import { Card } from "react-bootstrap";
import travelLogger from "../data/Assets/Images/travel-logger.png";
import wannaBurger from "../data/Assets/Images/wannaBurger.png";
import findYourMovie from "../data/Assets/Images/find-your-movie.png";
import workdayScheduler from "../data/Assets/Images/workday-scheduler copy.png";
import weatherDashboard from "../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../data/Assets/Images/password-gen-screenshot copy.png";
import websiteAccessibility from "../data/Assets/Images/website-accessibility.png";
import doggyDayCare from "../data/Assets/Images/dogDaycare.png";
import offlineTracker from "../data/Assets/Images/offline-tracker.png";

const mainContainer = {

  backgroundColor: "grey",
  width: "75vw",
  borderRadius: '25px',
  boxShadow: "10px 10px 5px black",
  border: "solid black", overflow: "auto",
  marginBottom: "2%",
  textAlign: "center", textShadow: "-1px 2px 2px #1C6EA4", color: "white",
  margin: "2% auto",



}

const Portfolio = () => (
  <div>

    <h1 style={{ textShadow: "-1px 2px 2px #1C6EA4", textAlign: "center", color: "white" }}>Portfolio</h1>

    <div className="container-fluid" >
      <div className="row justify-content-md-center">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={doggyDayCare} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://doggy-daycare-88.herokuapp.com" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>
                  Technologies used: React, Express, Node, Visual Studio Code, React Bootstrap, JavaScript.

                  This is a collaboration with a future dog daycare owner.
                  {/* The idea was to get the application set up enough to a point where the owner could just update the information that their clients/ future clients would need to see. There is a signup/login section for camera access (future development) so that dog moms and dog dads can keep an eye on their loved one while they handle other things. */}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={offlineTracker} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://offline-tracker.herokuapp.com" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>
                  Technologies used: Compression, Express, Mongoose, MongoDB, Service Worker, JavaScript.
                  This application was created to display offline capability by register service workers that persists data when on and offline.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={travelLogger} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://hidden-waters-17740.herokuapp.com/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>
                  Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                  our own personal activity logger.
                  {/* Have you ever gone to a new location and had no idea of what indoor/ outdoor activities were around you? Well look no further, the travel logger application is here to assist you. Your own personal activity logger. */}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={wannaBurger} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://damp-castle-88848.herokuapp.com/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>This application uses a database to store the information that the user enters. The user is able to add a item
                  to whichever side of the application that the user decides, and based on the side selected, the information is
                  stored in the database table and displayed to the appropriate column.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={findYourMovie} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://jjg1488.github.io/find-your-movie/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>Have you ever searched for a movie and had to switch movie platforms to find it? Well, this website solves that
                  problem!</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={workdayScheduler} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://jjg1488.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>This webpage displays a workday scheduler that can save the event or task to local storage. User input data
                  can be used for myriad of things and used later.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={weatherDashboard} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://jjg1488.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
                <span>Have a look at the weather for multiple cities. This is for people that enjoy traveling.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={passwordGen} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://jjg1488.github.io/password-generator/" target="_blank" rel="noreferrer">Click Here To See!</a>
                <br></br>
                <span>Need a password? No problem! This webpage displays an example of how JavaScript is used to compare different
                  user inputs that can result in different outcomes based on those inputs.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card style={mainContainer}>
            <Card.Body>
              <Card.Img variant="top" src={websiteAccessibility} style={{ borderRadius: "25px", height: "38rem", width: "100%", maxHeight: "20rem" }} />
              <Card.Text style={{ marginTop: "2%", textAlign: "center", overflow: "hidden", textShadow: "1px 2px 2px #1C6EA4" }}>
                <a href="https://jjg1488.github.io/web-accessibility-website/" target="_blank" rel="noreferrer">Click Here To See!</a>
                <br></br>
                <span>This website displays proper structure of a webpage.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  </div>

);

export default Portfolio;

