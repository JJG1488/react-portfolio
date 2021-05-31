import React from "react";
import { Card } from "react-bootstrap";
import electricMan from "../data/Assets/Images/electric-man.PNG";

const mainContainer = {
  backgroundColor: "grey",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  maxWidth: "100%",
  minHeight: "40rem",

}



const About = () => (
  <div>
    <h1>About Page</h1>
  
    <Card style={{width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", float: "left", minHeight: "40rem" }}>
      <Card.Img variant="top" src={electricMan} style={{ borderRadius: "25px", height: "38rem", width: "100%", minHeight: "40rem" }} />
  
    </Card>

    <Card style={mainContainer}>
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>

        <p>

                    I wear many hats in my everyday life. Whether its engineering a company's network, doing electrical
                    work for security systems, working wood
                    in my garage, learning and applying web development skills, or just being the
                    loving and caring father that I am everyday, I love what I do and I do it all with passion and
                    purpose. I had an ios application out in 2018, but
                    I didn't feel good about the project because I did not build the project myself and was not entirely
                    in control of the creative process. I love being creative and being able to express my creativity
                    even more. I am infatuated with the "click" moments that you get when things begin to
                    sink in and make sense. So naturally, I picked up every book that I could about coding and began to
                    read them.
                    There was this idea that I could build my own applications and submit them to the world to see that
                    became
                    a source for my drive to learn more about coding. Then I realized that this is a skill that can be
                    passed along, and
                    from that, purpose was added to my drive to learn.

                </p>

                <p>

                    Development in general is more than a hobby or skill to me. It is a tool that can be used to change
                    the lives of any and everyone. I equate developing to having a super power. To be able to work with
                    people or companies to help them make their dreams or products come to life is a big deal to me.
                    Just as
                    someone took the time out to help me bring my application to life, which was my dream at that
                    moment, I
                    want to do the same and help people to build and create tools and applications that can fulfill
                    their
                    dreams and help make the world a better place. I'm excited to hear about new ideas and helping to
                    come
                    up with ways to bring them to life.

                </p>
         
    </Card.Text>

      </Card.Body>
    </Card>

  </div>
);

export default About;
