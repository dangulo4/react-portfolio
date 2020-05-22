import React, { Component } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';
import PWA from '../images/pwa-budget-tracker.gif';
import ED from '../images/employeeDirectory.gif';
import MP from '../images/minute-page.gif';
import NT from '../images/notetaker.gif';
import WT from '../images/workouts-tracker.gif';
import RG from '../images/readme-generator.gif';
import EB from '../images/eatdaburger.gif';
import ET from '../images/employeeTracker.gif';
import TP from '../images/teamBuilder.gif';
import YC from '../images/yelpcamp.gif';
import BB from '../images/pic2.jpg';
import WA from '../images/weather.jpg';
import PG from '../images/pic5.jpg';
import Developer from '../images/developer.jpg';

class Portfolio extends Component {
  render() {
    return (
      <MDBContainer size="md" style={{ marginTop: '50px' }}>
        <h1 className="lg-heading">
          This is my <span className="text-secondary">Portfolio</span>
        </h1>

        <h2 className="sm-heading">Projects I have accomplished....</h2>

        <section backgroundimage={Developer}></section>
        <MDBRow top>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={ED} />
              <MDBCardBody cascade>
                <MDBCardTitle>Employee Directory React</MDBCardTitle>
                <MDBCardText>
                  Employee directory with React. This project was bootstrapped
                  with Create React App.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/react-employee-directory">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://infinite-reef-05716.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={PWA} />
              <MDBCardBody cascade>
                <MDBCardTitle>PWA Budget Tracker</MDBCardTitle>
                <MDBCardText>
                  Budget Tracker application to allow for offline access and
                  functionality.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/pwa-budget-tracker">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://thawing-sea-70484.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={MP} />
              <MDBCardBody cascade>
                <MDBCardTitle>Minute Page Project 2</MDBCardTitle>
                <MDBCardText>
                  Miutepage is an app where you can signup to create instant
                  context.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/minute-page">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://sheltered-waters-47621.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={NT} />
              <MDBCardBody cascade>
                <MDBCardTitle>Note Taker</MDBCardTitle>
                <MDBCardText>
                  This application uses express backend and save and retrieve
                  note data from a JSON file.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/Note-Taker">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://fierce-garden-68215.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br></br>
        <MDBRow middle>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={WT} />
              <MDBCardBody cascade>
                <MDBCardTitle>Workout Tracker</MDBCardTitle>
                <MDBCardText>
                  Ability to track the name, type, weight, sets, reps, and
                  duration of exercise.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/workout-tracker">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://tranquil-mountain-06924.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={RG} />
              <MDBCardBody cascade>
                <MDBCardTitle>ReadMe Generator</MDBCardTitle>
                <MDBCardText>
                  Ability to create a README file that contains information for
                  the user about the software program, utility, or game.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/ReadMe-Generator">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="#">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={EB} />
              <MDBCardBody cascade>
                <MDBCardTitle>Eat Da Burger</MDBCardTitle>
                <MDBCardText>
                  Following the MVC design pattern; Node and MySQL to query
                  data,Handlebars to generate your HTML.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/eat-da-burger">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://hidden-earth-57033.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={ET} />
              <MDBCardBody cascade>
                <MDBCardTitle>Employee Management System</MDBCardTitle>
                <MDBCardText>
                  Content Management Systemssolution for managing a company's
                  employees using node, inquirer, and MySQL.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/employee-tracker">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="#">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br></br>
        <MDBRow>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={TP} />
              <MDBCardBody cascade>
                <MDBCardTitle>Team Profile Generator</MDBCardTitle>
                <MDBCardText>
                  Application to prompt the user for information about the team
                  manager and team members.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/Team-Profile-Generator">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="#">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard wide>
              <MDBCardImage cascade className="img-fluid" src={YC} />
              <MDBCardBody cascade>
                <MDBCardTitle>Udemy Yelp Camp</MDBCardTitle>
                <MDBCardText>
                  Yelpcamp is a full RESTful api with authorization to make post
                  for favorite camp sites.
                </MDBCardText>
                <MDBBtn href="https://goor.me/QTkpr">
                  <i className="fas fa-campground"></i>
                  groomIDE
                </MDBBtn>
                <MDBBtn href="https://young-garden-98302.herokuapp.com/">
                  <i className="fas fa-eye"></i>
                  Heroku
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard cascade>
              <MDBCardImage cascade className="img-fluid" src={BB} />
              <MDBCardBody cascade>
                <MDBCardTitle>B2B App Finder Project 1</MDBCardTitle>
                <MDBCardText>
                  Using API calls that captures information for companies that
                  saving valuble research time for sales teams.
                </MDBCardText>
                <MDBBtn href="https://alexiachalita.github.io/project1/">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://alexiachalita.github.io/project1/">
                  <i className="fas fa-eye"></i>
                  Deployed
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard cascade>
              <MDBCardImage cascade className="img-fluid" src={WA} />
              <MDBCardBody cascade>
                <MDBCardTitle>Weather App</MDBCardTitle>
                <MDBCardText>
                  Weather dashboard to dynamically update using OpenWeather API
                  to retrieve weather data for cities.
                </MDBCardText>
                <MDBBtn href="https://alexiachalita.github.io/project1/">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://alexiachalita.github.io/project1/">
                  <i className="fas fa-eye"></i>
                  Deployed
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard cascade>
              <MDBCardImage cascade className="img-fluid" src={PG} />
              <MDBCardBody>
                <MDBCardTitle>Password Generator</MDBCardTitle>
                <MDBCardText>
                  Password app generates a random password based on
                  user-selected criteria. The user will be prompted to choose
                  password criteria.
                </MDBCardText>
                <MDBBtn href="https://github.com/dangulo4/PasswordGenerator">
                  <i className="fab fa-github"></i>
                  Github
                </MDBBtn>
                <MDBBtn href="https://dangulo4.github.io/PasswordGenerator/">
                  <i className="fas fa-eye"></i>
                  Deployed
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Portfolio;
