import React from "react";
import readingImage from "../data/Assets/Images/FullStackDevCertificate.png";
import { Card } from 'react-bootstrap';
// import { Canvas } from '@react-three/fiber'
// import Box from "./three";

const mainContainer = {
  backgroundColor: "grey",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  overflow: "auto",
  marginTop: "10%",
  marginLeft: "25%",
  marginRight: "25%",
  marginBottom: "15%",

}

const Home = () => (
  <div>

    <h1 style={{ textShadow: "-1px 2px 2px #1C6EA4", textAlign: "center", color: "white" }}>Home</h1>
    <div>

      {/* <Canvas>
<ambientLight />
<pointLight position={[10, 10, 10]} />
<Box position={[-1.2, 0, 0]} />
<Box position={[1.2, 0, 0]} />
</Canvas> */}

      <Card style={mainContainer}>
        <Card.Body>
         

          <Card.Text style={{ textAlign: "center", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>
          
            Technologies Covered/Used: <br></br>
            <hr></hr>
            <div >
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
              </ul>
            </div>
            <hr></hr>
            <Card.Img variant="top" src={readingImage} style={{ borderRadius: "25px" }} />
            <hr></hr>
            <div >
              <ul>
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
            </div>

            <div>
              <hr></hr>
              <span>Currently Experimenting with different languages and their associated IDE's:</span> <br></br>
              <hr></hr>

              Certifications Pending in C++, C#, Python, Java

              <hr></hr>
              AAS Web Programming: <br></br> 2022
              <hr></hr>

            </div>


            {/* Thank you! Why am I saying thank you? You have taken time out of your busy schedule to have a look at my portfolio's home page. You could be reading anything in the world, yet, you've chosen to spend time looking through some of my material and I'm grateful. Please, if inspired by curiosity from any aspect of viewing my content, you can see more of my work via the github link on my contacts page. If you are looking for a direct (fast) response, the best place to reach me is linkedin. That link is also on my contact page. Good day to you and I hope that you find something that you like. */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  </div>
);

export default Home;
