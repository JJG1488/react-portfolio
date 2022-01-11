import React from "react";
// import travelLogger from "../../data/Assets/Images/travel-logger.png";
import wannaBurger from "../../data/Assets/Images/wannaBurger.png";
import findYourMovie from "../../data/Assets/Images/find-your-movie.png";
import workdayScheduler from "../../data/Assets/Images/workday-scheduler copy.png";
// import weatherDashboard from "../../data/Assets/Images/weather-dashboard.png";
import passwordGen from "../../data/Assets/Images/password-gen-screenshot copy.png";
// import doggyDayCare from "../../data/Assets/Images/dogDaycare.png";
import offlineTracker from "../../data/Assets/Images/offline-tracker.png";
// import workout from "../../data/Assets/Images/workout.png";
import codeQuiz from '../../data/Assets/Images/code-quiz.png';
import goodPeeps from "../../data/Assets/Images/Screen Shot 2021-11-04 at 9.37.33 PM.png";
import './styles.css';

// https://jjg1488.github.io/jdphotography/



const Portfolio = () => (
  <div className="main-portfolio-container">

    <div className="container" id="project-container-data">
      {/* <div className="col" id="project-col-data"> */}
      {/* <div className="container" id="project-container-data"> */}
      {/* <picture> */}
      {/* <img src={doggyDayCare} id="project-photo" alt="" /> */}
      {/* </picture> */}
      {/* <div className="row" id="project-row-data"> */}
      {/* <a href="https://doggy-daycare-88.herokuapp.com" target="_blank" rel="noreferrer">Click Here To See!</a><br></br> */}
      {/* <span> */}
      {/* Under Construction */}
      {/* Technologies used: React, Express, Node, Visual Studio Code, React Bootstrap, JavaScript.
                This is a collaboration with a future dog daycare owner. */}
      {/* The idea was to get the application set up enough to a point where the owner could just update the information that their clients/ future clients would need to see. There is a signup/login section for camera access (future development) so that dog moms and dog dads can keep an eye on their loved one while they handle other things. */}
      {/* </span> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}



     

      <div className="col project-col-data">
        {/* <div className="container" id="project-container-data"> */}
        <picture>
          <img src={goodPeeps} id="project-photo" alt="E-Commerce Clothing Webpage" />
        </picture>
        <div className="row" id="project-row-data">
          {/* <a href="https://jjg1488.github.io/jdphotography/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br> */}
          <span>
            {/* Technologies used: Compression, Express, Mongoose, MongoDB, Service Worker, JavaScript.
                This application was created to display offline capability by register service workers that persists data when on and offline. */}
          </span>
        </div>
        {/* </div> */}
      </div>



      <div className="col project-col-data">
        {/* <div className="container" id="project-container-data"> */}
        <picture>
          <img src={codeQuiz} id="project-photo" alt="" />
        </picture>
        <div className="row" id="project-row-data">
          <a href=" https://jjg1488.github.io/code-quiz/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
          <span>
            {/* Under Construction */}
            {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}
            {/* Have you ever gone to a new location and had no idea of what indoor/ outdoor activities were around you? Well look no further, the travel logger application is here to assist you. Your own personal activity logger. */}
          </span>
        </div>
        {/* </div> */}
      </div>
      {/* https://jjg1488.github.io/online-offline-budget-tracker/ */}



      <div className="col project-col-data">
        {/* <div className="container" id="project-container-data"> */}
        <picture>
          <img src={wannaBurger} id="project-photo" alt="" />
        </picture>
        <div className="row" id="project-row-data">
          <a href="https://damp-castle-88848.herokuapp.com/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
          <span>
            {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}

            {/* This application uses a database to store the information that the user enters. The user is able to add a item
                to whichever side of the application that the user decides, and based on the side selected, the information is
                stored in the database table and displayed to the appropriate column. */}
          </span>
        </div>
      </div>
    

    <div className="col project-col-data">
      {/* <div className="container" id="project-container-data"> */}
      <picture>
        <img src={findYourMovie} id="project-photo" alt="" />
      </picture>
      <div className="row" id="project-row-data">
        <a href="https://jjg1488.github.io/find-your-movie/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
        <span>
          {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}
          {/* Have you ever searched for a movie and had to switch movie platforms to find it? Well, this website solves that
                problem! */}
        </span>
      </div>
      {/* </div> */}
    </div>



    <div className="col project-col-data">
      {/* <div className="container" id="project-container-data"> */}
      <picture>
        <img src={workdayScheduler} id="project-photo" alt="" />
      </picture>
      <div className="row" id="project-row-data">
        <a href="https://jjg1488.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
        <span>
          {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}
          {/* This webpage displays a workday scheduler that can save the event or task to local storage. User input data
                can be used for myriad of things and used later. */}
        </span>
      </div>
      {/* </div> */}
    </div>

    <div className="col project-col-data">
        {/* <div className="container" id="project-container-data"> */}
        <picture>
          <img src={offlineTracker} id="project-photo" alt="" style={{}}/>
        </picture>
        <div className="row" id="project-row-data">
          <a href="https://jjg1488.github.io/online-offline-budget-tracker/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br>
          <span>
            {/* Technologies used: Compression, Express, Mongoose, MongoDB, Service Worker, JavaScript.
                This application was created to display offline capability by register service workers that persists data when on and offline. */}
          </span>
        </div>
        {/* </div> */}
      </div>
    


    {/* <div className="col project-col-data"> */}
    {/* <div className="container" id="project-container-data"> */}
    {/* <picture> */}
    {/* <img src={weatherDashboard} id="project-photo" alt="" /> */}
    {/* </picture> */}
    {/* <div className="row" id="project-row-data"> */}
    {/* <a href="https://jjg1488.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Click Here To See!</a><br></br> */}
    {/* <span> */}
    {/* Under Construction */}
    {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}
    {/* Have a look at the weather for multiple cities. This is for people that enjoy traveling. */}
    {/* </span> */}
    {/* </div> */}
    {/* </div> */}
    {/* </div> */}


    <div className="col project-col-data">
      {/* <div className="container" id="project-container-data"> */}
      <picture>
        <img src={passwordGen} id="project-photo" alt="" />
      </picture>
      <div className="row" id="project-row-data">
        <a href="https://jjg1488.github.io/password-generator/" target="_blank" rel="noreferrer">Click Here To See!</a>
        <br></br>
        <span>
          {/* Technologies Used: Travis CLI, JavaScript, Passport, Handlebars, ESlint, Compression, MySQL, Sequelize
                our own personal activity logger. */}
          {/* Need a password? No problem! This webpage displays an example of how JavaScript is used to compare different
                user inputs that can result in different outcomes based on those inputs. */}
        </span>
      </div>
    </div>
  </div>
  </div>

);

export default Portfolio;

