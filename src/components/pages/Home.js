import React from "react";
import readingImage from "../data/Assets/Images/read.PNG";
import { Card } from 'react-bootstrap';

const mainContainer = {
  backgroundColor: "grey",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  maxWidth: "100%",
  minHeight: "40rem",

}

const Home = () => (
  <div>

    <h1>Thank You/ Home Page</h1>

    <div>


    <Card style={{width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", minHeight: "40rem" }}>
      <Card.Img variant="top" src={readingImage} style={{ borderRadius: "25px", height: "38rem", width: "100%", minHeight: "40rem" }} />
  
    </Card>


    <Card style={mainContainer}>
      <Card.Body>
        <Card.Text style={{ textAlign: "center", marginTop: "20%" }}>
          Thank you! Why am I saying thank you? You have taken time out of your busy schedule to have a look at my portfolio's home page. You could be reading anything in the world, yet, you've chosen to spend time looking through some of my material and I'm grateful. Please, if inspired by curiosity from any aspect of viewing my content, you can see more of my work via the github link on my contacts page. If you are looking for a direct (fast) response, the best place to reach me is linkedin. That link is also on my contact page. Good day to you and I hope that you find something that you like.
    </Card.Text>

      </Card.Body>
    </Card>

    </div>

  </div>
);

export default Home;
