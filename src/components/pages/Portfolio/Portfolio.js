import React from "react";
import wannaBurger from "../../data/Assets/Images/wannaBurger.png";
import workdayScheduler from "../../data/Assets/Images/workday-scheduler copy.png";
// import weatherDashboard from "../../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../../data/Assets/Images/password-gen-screenshot copy.png";
import offlineTracker from "../../data/Assets/Images/offline-tracker.png";
import workout from "../../data/Assets/Images/workout.png";
import proshop from "../../data/Assets/Images/proshop.png";
import fundamentalsofnetworking from "../../data/Assets/Images/fundamentalsofnetworking.png";
import "./styles.css";

const Portfolio = () => (
  <div className="main-portfolio-container">
    <div className="container" id="project-container-data">
      <br></br>
      <div>
        <picture>
          <img
            id="project-photo"
            src={proshop}
            alt="Proshop Ecommerce Store App"
            title="Proshop"
          />
        </picture>
        <a href="https://github.com/JJG1488/ProShopMaster.git">GitHub</a>
        <br />
        <p>Technologies Used: React, Redux, Axios, Express, MongoDB</p>
      </div>

      <div>
        <picture>
          <img
            id="project-photo"
            src={fundamentalsofnetworking}
            alt="Proshop Ecommerce Store App"
            title="Proshop"
          />
        </picture>
        <a href="https://gaultj978.macombserver.net/itwp1000/home.htm">
          Live Site
        </a>
        <br />
        <p>Technologies Used: SASS, JS, CSS, Webfonts</p>
      </div>

      <br></br>

      <div>
        <picture>
          <img
            id="project-photo"
            src={offlineTracker}
            alt="Proshop Ecommerce Store App"
            title="Proshop"
          />
        </picture>
        <a
          href="https://offline-tracker.herokuapp.com"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <br></br>
        <a
          href="https://jjg1488.github.io/online-offline-budget-tracker/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <br />
        <p>
          Technologies used: Compression, Express, Mongoose, MongoDB, Service
          Worker, JavaScript.
        </p>
        <p>
          This application was created to display offline capability by register
          service workers that persists data when on and offline.
        </p>
      </div>

      <br></br>

      <div>
        <picture>
          <img
            id="project-photo"
            src={workout}
            alt="Proshop Ecommerce Store App"
            title="Proshop"
          />
        </picture>

        <br></br>
        <a
          href="https://github.com/JJG1488/workout-tracker.git"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <br />
        <a
          href="https://jjg1488.github.io/workout-tracker/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <br></br>
        <p>
          Technologies used: Express, Mongoose, MongoDB, Service Worker,
          JavaScript.
        </p>
      </div>

      <br></br>

      <div>
        <picture>
          <img src={wannaBurger} id="project-photo" alt="" />
        </picture>

        <a
          href="https://damp-castle-88848.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <a
          href="https://github.com/JJG1488/burger.git"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. This application uses a database to store the information
            that the user enters. The user is able to add a item to whichever
            side of the application that the user decides, and based on the side
            selected, the information is stored in the database table and
            displayed to the appropriate column.
          </p>
        </span>
      </div>

      <br></br>

      <div>
        <picture>
          <img src={workdayScheduler} id="project-photo" alt="" />
        </picture>
        <a
          href="https://jjg1488.github.io/work-day-scheduler/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. This webpage displays a workday scheduler that can save the
            event or task to local storage. User input data can be used for
            myriad of things and used later.
          </p>
        </span>
      </div>

      <br></br>

      <div>
        <picture>
          <img src={passwordGen} id="project-photo" alt="" />
        </picture>

        <a
          href="https://jjg1488.github.io/password-generator/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. Need a password? No problem! This webpage displays an
            example of how JavaScript is used to compare different user inputs
            that can result in different outcomes based on those inputs.
          </p>
        </span>
      </div>
    </div>
  </div>
);

export default Portfolio;
