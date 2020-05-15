import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col className="offset-xs-1 offset-md-4 text-center" xs="10" md="4">
              <div>
                <Button
                  className="btn-icon btn-round btn btn-twitter btn-lg"
                  color="default"
                  href="https://twitter.com/beingvalentina"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round btn btn-instagram btn-lg"
                  color="default"
                  href="https://twitter.com/beingvalentina"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <Button
                  className="btn-icon btn-round btn btn-imdb btn-lg"
                  color="default"
                  href="http://www.imdb.me/valentinaguerra"
                  target="_blank"
                >
                  <i className="fab fa-imdb" />
                </Button>
              </div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="offset-xs-1 offset-md-4 text-center" xs="10" md="4">
              ©2020 Valentina Guerra
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
