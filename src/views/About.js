import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Col,
  Container,
  Row,
} from "reactstrap";

class About extends React.Component {
  componentDidMount() {
    document.body.classList.add("sections-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;


  }
  componentWillUnmount() {
    document.body.classList.remove("sections-page");
  }

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="cd-section" id="headers">
            <div className="header header-3">
              <div className="page-header header-filter">
                <div className="content-center">
                  <Container>
                    <Row className="align-items-center">
                      <Col lg="6">
                        <Row className="justify-content-md-center">
                          <Col lg="9" md="6">
                            <h4 className="info-title text-left" style={{lineHeight: "2em"}}>
                              Valentina Guerra has always been an actor, even if acting hasn't always been
                              her profession. Born and raised in New York City, she performed in community
                              theater and school productions from a young age. While her interests in math
                              and science led her to graduate from the Massachusetts Institute of Technology
                              with a degree in Aerospace Engineering, she was active in their theater program
                              and completed a Concentration in Theater Arts. She briefly worked in the
                              aerospace industry before returning to her true passion, and has since been
                              formally trained in the Meisner Technique, become a full-time actor and has
                              not looked back!
                            </h4>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="6">
                        <Row className="justify-content-md-center">
                          <Col lg="9" md="6">
                            <img
                              className="img-fluid"
                              src={require("assets/img/headshots/about.jpg")}
                             alt="..."/>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
