import React from "react";
import "./styles.css";

const Contact = () => (
  <div>
    <div className="contact-container">
      {/* <div className="row">
        <div className="col"> */}
      <span className="contact-info">
        Name: James Gault
        <br />
        Email:
        <a href="mailto:jgservicesllc14@gmail.com=My custom mail body">
          {" "}
          jgservicesllc14@gmail.com
        </a>
        <br />
        <a href="https://www.linkedin.com/in/jamesgault1488">
          {" "}
          <span id="social-link-data">LinkedIn: </span>{" "}
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <br />
        <a href="https://github.com/JJG1488">
          {" "}
          <span id="social-link-data">GitHub: </span>{" "}
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <br />
        {/* <a href="https://twitter.com/JamesJGault">
          {" "}
          <span id="social-link-data"> Twitter: </span>{" "}
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a> */}
        <br />
        {/* <a
          href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <span id="social-link-data">Open Resume in a PDF File </span>{" "}
          <i className="fa fa-download" aria-hidden="true"></i>
        </a> */}
        <br />
        Phone: 586-571-0600
      </span>
    </div>
  </div>
  //   </div>
  // </div>
);

export default Contact;
