import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  // MDBBtn,
  // MDBInput,
} from 'mdbreact';
import Resume from '../images/Resume_DanielAngulo.pdf';
import './style.css';
import Page from '../components/Page/Page';

class ContactPage extends React.Component {
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
      <Page title="Contact">
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Lets Connect...
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            My current projects.... link to my current
            <strong>
              <a href={Resume}> RESUME</a>
            </strong>
          </p>
          <MDBRow>
            <MDBCol md="9" className="md-0 mb-5">
              {/* <form>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-name"
                        label="Your name"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-email"
                        label="Your email"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-subject"
                        label="Subject"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="contact-message"
                        label="Your message"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </form> */}
              {/* <div className="text-center text-md-left">
                <MDBBtn color="primary" size="md">
                  Send
                </MDBBtn>
              </div> */}
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <MDBIcon
                    icon="map-marker-alt"
                    size="2x"
                    className="blue-text"
                  />
                  <p>San Diego, CA 92114, USA</p>
                </li>
                <li>
                  <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                  <p>(714) 422-4998</p>
                </li>
                <li>
                  <MDBIcon
                    icon="envelope"
                    size="2x"
                    className="blue-text mt-4"
                  />
                  <p>dangulo4@gmail.com</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Page>
    );
  }
}

export default ContactPage;
