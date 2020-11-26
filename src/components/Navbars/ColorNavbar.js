import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col, ModalBody, ModalFooter, Modal,
} from "reactstrap";
import {Document, Page} from "react-pdf/dist/umd/entry.webpack";
import ModalVideo from "react-modal-video";

class ColorNavbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    let width = 700;
    let windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      width = windowWidth - 50
    } else if (windowWidth < 992) {
      width = 450
    }

    this.state = {
      navbarColor: "navbar-transparent",
      reelOpen: props.reelOpen,
      resumeOpen: props.resumeOpen,
      resumeWidth: width,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.reelOpen !== prevProps.reelOpen) {
      this.reelToggle()
    } else if (this.props.resumeOpen !== prevProps.resumeOpen) {
      this.resumeToggle()
    }
  }

  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-dark"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };

  resumeToggle = () => {
    let width = 700;
    let windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      width = windowWidth - 50
    } else if (windowWidth < 992) {
      width = 450
    }

    this.setState({
      resumeOpen: !this.state.resumeOpen,
      resumeWidth: width
    })
  };

  reelToggle = () => {
    this.setState({reelOpen: !this.state.reelOpen})
  }

  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link} id="tooltip6619950104">
                <span>Valentina Guerra • </span>
                SAG-AFTRA
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="/" onClick={e => e.preventDefault()}>
                      <span>Valentina Guerra • </span>
                      SAG-AFTRA
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mr-auto" navbar>
                <ul className="navbar-nav social-buttons">
                  <li>
                    <Button className="btn-icon" color="instagram"
                            href="https://www.instagram.com/beingvalentina/"
                            target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                  <li>
                    <Button className="btn-icon" color="twitter"
                            href="https://twitter.com/beingvalentina"
                            target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button className="btn-icon" color="imdb"
                            href="http://www.imdb.me/valentinaguerra"
                            target="_blank"
                    >
                      <img className="img-fluid" src={require("assets/img/icons/imdb.png")} alt="..."/>
                    </Button>
                  </li>
                </ul>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="#" onClick={this.resumeToggle}>
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="#" onClick={this.reelToggle}>
                    Reel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Modal style={{top: "-100px"}} isOpen={this.state.resumeOpen} toggle={this.resumeToggle} size="lg" centered={false}>
          <ModalBody>
            <div className="container-fluid">
              <Row>
                <Document className="resume" file={require("assets/docs/ValentinaGuerra.pdf")} onClick={() => {window.open("/ValentinaGuerra.pdf", "_blank")}}>
                  <Page width={this.state.resumeWidth} pageNumber={1} />
                </Document>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" href="/ValentinaGuerra.pdf" target="_blank">
              <i className="fas fa-download"/> Download
            </Button>
          </ModalFooter>
        </Modal>
        <ModalVideo channel="vimeo"
                    isOpen={this.state.reelOpen}
                    videoId={478244874}
                    onClose={this.reelToggle}
                    autoplay={true}
        />
      </>
    );
  }
}

export default ColorNavbar;
