import React from "react";
import wannaBurger from "../../data/Assets/Images/wannaBurger.png";
//import workdayScheduler from "../../data/Assets/Images/workday-scheduler copy.png";
// import weatherDashboard from "../../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../../data/Assets/Images/password-gen-screenshot copy.png";
import offlineTracker from "../../data/Assets/Images/offline-tracker.png";
import workout from "../../data/Assets/Images/workout.png";
import proshop from "../../data/Assets/Images/proshop.png";
import fundamentalsofnetworking from "../../data/Assets/Images/fundamentalsofnetworking.png";
import basicwebpages from "../../data/Assets/Images/basicwebprogramming.png";
import solanablockchain from "../../data/Assets/Images/solanablockchain.png";
import "./styles.css";

const Portfolio = (props) => (
  <div className="main-portfolio-container">
    <div className="container" id="project-container-data">
      <br></br>

      <br></br>

      <div>
        <picture>
          <img src={basicwebpages} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: HTML, CSS, JavaScript. This webpage displays
            static web pages. : &nbsp;{" "}
            <a
              href="https://gaultj978.macombserver.net/itwp1000/home.htm"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </p>
        </span>
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

        <br />
        <p>
          Technologies Used: SASS, JS, CSS, Webfonts : &nbsp;
          <a
            href="https://gaultj978.macombserver.net/itwp1000/project3/html5up-solid-state/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </p>
      </div>

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

        <br />
        <p>
          Technologies Used: React, Redux, Axios, Express, MongoDB : &nbsp;
          <a
            href="https://github.com/JJG1488/ProShopMaster.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
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

        <br></br>

        <br />
        <p>
          Technologies used: Compression, Express, Mongoose, MongoDB, Service
          Worker, JavaScript : &nbsp;
          {/* <a
            href="https://offline-tracker.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a> */}
        </p>
        <p>
          This application was created to display offline capability by register
          service workers that persists data when on and offline. &nbsp;{" "}
          <a
            href="https://jjg1488.github.io/online-offline-budget-tracker/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
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

        <br />

        <br></br>
        <p>
          Technologies used: Express, Mongoose, MongoDB, Service Worker,
          JavaScript : &nbsp;{" "}
          <a
            href="https://github.com/JJG1488/workout-tracker.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          /{" "}
          <a
            href="https://jjg1488.github.io/workout-tracker/"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </p>
      </div>

      <br></br>

      <div>
        <picture>
          <img src={solanablockchain} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: React, JavaScript, Solanablockchain : &nbsp;{" "}
            <a
              href="https://nft-drop-starter-project-gi2a2mk86-jjg1488.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            /
            <a
              href="https://github.com/JJG1488/nft-drop-starter-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Note: You will need to connect a ghost wallet to use the site to
            mint an NFT.
          </p>
        </span>
      </div>

      <br></br>

      <div>
        <picture>
          <img src={wannaBurger} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. This application uses a database to store the information
            that the user enters. The user is able to add a item to whichever
            side of the application that the user decides, and based on the side
            selected, the information is stored in the database table and
            displayed to the appropriate column. : &nbsp;{" "}
            {/* <a
              href="https://damp-castle-88848.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a> */}
            /
            <a
              href="https://github.com/JJG1488/burger.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </span>
      </div>

      {/* <br></br>

      <div>
        <picture>
          <img src={workdayScheduler} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. This webpage displays a workday scheduler that can save the
            event or task to local storage. User input data can be used for
            myriad of things and used later. : &nbsp;{" "}
            <a
              href="https://jjg1488.github.io/work-day-scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </p>
        </span>
      </div> */}

      <br></br>

      <div>
        <picture>
          <img src={passwordGen} id="project-photo" alt="" />
        </picture>

        <br></br>
        <span>
          <p>
            Technologies Used: Travis CLI, JavaScript, Passport, Handlebars,
            ESlint, Compression, MySQL, Sequelize our own personal activity
            logger. Need a password? No problem! This webpage displays an
            example of how JavaScript is used to compare different user inputs
            that can result in different outcomes based on those inputs. :
            &nbsp;{" "}
            <a
              href="https://jjg1488.github.io/password-generator/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </p>
        </span>
      </div>
    </div>
  </div>
);

export default Portfolio;
