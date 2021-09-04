import React from "react";
import readingImage from "../data/Assets/Images/FullStackDevCertificate.png";
import { Card } from 'react-bootstrap';

const mainContainer = {
  backgroundColor: "grey",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  minHeight: "40rem",
  maxHeight: "40rem",
  overflow: "auto",
  marginTop: "10%",
  marginLeft: "25%",
  marginRight: "25%",
  marginBottom: "15%",
  minWidth: "50%",
  maxWidth: "50%",

}

const Home = () => (
  <div>

    <h1 style={{ textShadow: "-1px 2px 2px #1C6EA4", textAlign: "center", color: "white"}}>Home</h1>
    <div>
 
    <Card style={mainContainer}>
      <Card.Body>
      <Card.Img variant="top" src={readingImage} style={{ borderRadius: "25px", height: "38rem", width: "100%", minHeight: "40rem", maxHeight: "40rem" }} />

        <Card.Text style={{ textAlign: "center", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>
        <hr></hr>
        Technologies Covered/Used: <br></br>
        <hr></hr>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQUERY</li>
        <li>Bootstrap</li>
        <li>SEO</li>
        <li>API's (Consuming)</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>Progressive Web Applications</li>
        <li>React.js</li>
        <li>Heroku</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Templating Engines</li>
        <li>Sessions</li>
        <li>Writing Tests</li>
        <li>Node.JS</li>
        <li>Express.js</li>
        <li>Creating APIs</li>
        <li>MVC</li>
        <li>User Authentication</li>
        <li>ORM (Object-relational mapping)</li>
        <li>Design Patterns</li>

        </ul>

        
        
          {/* Thank you! Why am I saying thank you? You have taken time out of your busy schedule to have a look at my portfolio's home page. You could be reading anything in the world, yet, you've chosen to spend time looking through some of my material and I'm grateful. Please, if inspired by curiosity from any aspect of viewing my content, you can see more of my work via the github link on my contacts page. If you are looking for a direct (fast) response, the best place to reach me is linkedin. That link is also on my contact page. Good day to you and I hope that you find something that you like. */}
    </Card.Text>
      </Card.Body>
    </Card>
    </div>

  </div>
);

export default Home;
