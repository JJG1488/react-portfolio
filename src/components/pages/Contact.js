import React from "react";
import { Card } from "react-bootstrap";


const Contact = () => (
  <div>
    <h1 style={{textShadow: "6px 1px 1px #1C6EA4"}}>Contact Page</h1>

    <Card style={{width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", marginLeft: "auto", marginRight: "auto", backgroundColor: "grey"}}>
      {/* <Card.Img variant="top" style={{ borderRadius: "25px", height: "38rem", width: "100%", minHeight: "40rem" }} /> */}

      <Card.Body>
        <Card.Text style={{ textAlign: "left", textShadow: "1px 1px 1px #1C6EA4" }}>

        <p id="contact-info">

        Name: James J. Gault

        <br/>

        Email: jamesgault1488@gmail.com

        <br/>
        
        <a href="https://www.linkedin.com/in/jamesgault1488"> LinkedIn: <i className="fa fa-linkedin"
            aria-hidden="true"></i></a>

        <br/>
        <a href="https://github.com/JJG1488"> GitHub: <i className="fa fa-github" aria-hidden="true"></i></a>

        <br/>
        <a href="https://twitter.com/JamesJGault"> Twitter: <i className="fa fa-twitter-square" aria-hidden="true"></i></a>

        <br/>

        <a href="https://1drv.ms/w/s!AhUoiYry11tJgUss8QE8mneiNqvk" rel="noreferrer" target="_blank">Open Resume in a PDF File <i className="fa fa-download" aria-hidden="true"></i></a>

        <br/>

        Phone: 586-229-6418

      </p>
          
    </Card.Text>

      </Card.Body>

      
  
    </Card>

  </div>
);

export default Contact;
