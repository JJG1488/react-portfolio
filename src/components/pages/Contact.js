import React from "react";
import { Card } from "react-bootstrap";


const Contact = () => (
  <div>
    <h1 style={{ textShadow: "-1px 2px 2px #1C6EA4", textAlign: "center", color: "white"}}>Contact Information</h1>

    <Card style={{width: '50%', borderRadius: '25px', boxShadow: "10px 10px 5px black", border: "solid", marginLeft: "auto", marginRight: "auto", backgroundColor: "grey"}}>
      {/* <Card.Img variant="top" style={{ borderRadius: "25px", height: "38rem", width: "100%", minHeight: "40rem" }} /> */}

      <Card.Body>
        <Card.Text style={{ textAlign: "left", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>
        <span id="contact-info">

        Name: James J. Gault

        <br/>

        Email: 
        <a href="mailto:jamesgault1488@gmail.com=My custom mail body">  jamesgault1488@gmail.com</a>

        <br/>
        <a href="https://www.linkedin.com/in/jamesgault1488">  <span style={{ textAlign: "left", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>LinkedIn: </span>  <i className="fa fa-linkedin"
            aria-hidden="true"></i></a>

        <br/>
        <a href="https://github.com/JJG1488">  <span style={{ textAlign: "left", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>GitHub: </span>  <i className="fa fa-github" aria-hidden="true"></i></a>

        <br/>
        <a href="https://twitter.com/JamesJGault"> <span style={{ textAlign: "left", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>  Twitter: </span> <i className="fa fa-twitter-square" aria-hidden="true"></i></a>

        <br/>

        <a href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe?e=XDqvMB" rel="noreferrer" target="_blank"> <span style={{ textAlign: "left", overflow: "auto", textShadow: "-1px 2px 2px #1C6EA4", color: "white" }}>Open Resume in a PDF File </span>  <i className="fa fa-download" aria-hidden="true"></i></a>

        <br/>

        Phone: 586-229-6418

      </span>
          
    </Card.Text>
      </Card.Body>
    </Card>

  </div>
);

export default Contact;
