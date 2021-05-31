import React from "react";

const Portfolio = () => (
  <div>
    <h1>Portfolio Page</h1>
    {/* <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p> */}

    <div className="container">

      <div className="row">

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/travel-logger.png" alt="travel-logger-application" className="img-fluid" />

          <p>Have you ever gone to a new location and had no idea of what indoor or outdoor activities were around you? Well look no further, the travel logger application is here to assist you. Your own personal activity logger.</p>

          <a href="https://hidden-waters-17740.herokuapp.com/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/wannaBurger.png" alt="burger-app" className="img-fluid" />

          <p>This application uses a database to store information that users enter. The user is able to add a item
          to whichever side of the application that the user decides, and based on the side selected, the information is
          stored in the databases' table and displayed to the appropriate column or area.</p>

          <a href="https://damp-castle-88848.herokuapp.com/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/find-your-movie.png" alt="find-your-movie-site" className="img-fluid" />

          <p>Have you ever searched for a movie and had to switch movie platforms to find it? Well, this website solves that
          problem!</p>

          <a href="https://jjg1488.github.io/find-your-movie/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/workday-scheduler copy.png" alt="workday-scheduler" className="img-fluid" />

          <p>This webpage displays a workday scheduler that can save an event or task to local storage. User input data
          can be used for myriad of things.</p>

          <a href="https://jjg1488.github.io/work-day-scheduler/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/weather-dashboard.png" alt="weather-dashboard" className="img-fluid" />

          <p>Have a look at the weather for multiple cities. This is for people that enjoy traveling.</p>

          <a href="https://jjg1488.github.io/weather-dashboard/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/password-gen-screenshot copy.png" alt="password-gen-screenshot" className="img-fluid" />

          <p>Need a password? No problem! This webpage displays an example of how JavaScript is used to compare different
          user inputs that can result in different outcomes based on those inputs.</p>


          <a href="https://jjg1488.github.io/password-generator/">Click Here To See!</a>

        </div>

        <hr />

        <div className="col-xs-12 col-md-6">

          <img src="./Assets/Images/website-accessibility.png" alt="website-accessibility" className="img-fluid" />

          <p>Website code displays proper structure of a webpage.</p>

          <a href="https://jjg1488.github.io/web-accessibility-website/">Click Here To See!</a>

        </div>

        <hr />

      </div>

    </div>

  </div>
);

export default Portfolio;

