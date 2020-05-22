import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from 'mdbreact';
import Daylight from '../images/daylight.jpg';
import './style.css';

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    return (
      <div id="parallaxintro">
        <MDBView src={Daylight} fixed>
          <MDBMask className="rgba-white-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1
                  className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold"
                  style={{ color: 'white' }}
                >
                  Daniel
                  <span className="indigo-text font-weight-bold"> Angulo</span>
                </h1>
                <hr className="hr-light my-4" />
                <h2
                  className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold"
                  style={{ color: 'white' }}
                >
                  Full Stack Web Developer
                </h2>
                <MDBBtn
                  className="btn-info"
                  size="lg"
                  href="https://github.com/dangulo4"
                  target="_blank"
                  style={{ color: 'white' }}
                >
                  github
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <h1>Welcome to my Portfolio!</h1>{' '}
                <h2>
                  My name is Daniel Angulo, Full Stack Web Developer in San
                  Diego, CA
                </h2>
                <hr></hr>
                <p>
                  It has been my passion to learn and become an expert in
                  coding. I have a diverse set of programming skills in both web
                  application development as well as mobile app development. I
                  strive for clean content and simple structure with thoughtful
                  design.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Home;
