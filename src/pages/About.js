import React from 'react';
import Hero from '../components/Hero';
import Row from '../components/Row';
import Col from '../components/Col';
import Cactus from '../images/cactus.jpg';
import Headshot from '../images/headshot.jpg';
import './style.css';
import Page from '../components/Page/Page';

class About extends React.Component {
  render() {
    return (
      <div id="parallaxintro">
        <Hero backgroundImage={Cactus}>
          <Col
            size="md-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 25,
            }}
          >
            <div className="portrait" size="md-5" background={Headshot}></div>
          </Col>

          <div className="icons">
            <a href="https://github.com/dangulo4">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/daniel-angulo-0b7a3781/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/deecoys51/">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
        </Hero>

        <Page title="About-Me">
          <Row>
            <Col size="md-12">
              <h1 className="lg-heading">
                My Journey as a
                <span className="text-secondary"> Full-Stack </span>
                Web Developer
              </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <div className="bio">
                <p>
                  I am an aspiring Web Developer eager to start my new career as
                  a web developer. My passion to problem solve and has lead me
                  to create clean content with simple structure and thoughtful
                  design.
                </p>
                <div className="journey">
                  <h6>December 2019 - current</h6>
                  <p>
                    As part of the web development cohort, I have created both
                    client and server applications. My projects are successfully
                    deployed using Git and Heroku using front-end and back-end
                    technologies such as MySQL, MongoDB, NodeJS, Express (MERN
                    Stack), React.
                  </p>

                  <ul>
                    <li>Wrote Node.js server code to serve static web pages</li>
                    <li>
                      Query large amounts of data by creating CLI from a MySQL
                      database
                    </li>
                    <li>
                      Used NoSQL database such as MongoDB as an alternative to
                      MySQL
                    </li>
                    <li>Improving the performance of applications</li>
                    <li>
                      Converting traditional web applications into progressive
                      web applications (PWA)
                    </li>
                    <li>Created single-page applications with React</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
      </div>
    );
  }
}
export default About;
