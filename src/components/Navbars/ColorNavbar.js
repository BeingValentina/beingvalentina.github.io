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

import ModalVideo from "react-modal-video";
import {Document, Page, pdfjs} from "react-pdf";
import resume from "assets/docs/ValentinaGuerra.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              <NavbarBrand to="/" tag={Link}>
                <span>Valentina Guerra • </span>
                SAG-AFTRA
              </NavbarBrand>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      Valentina Guerra • SAG-AFTRA
                    </Link>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <Link to="" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={this.resumeToggle}>
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={this.reelToggle}>
                    Reel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right ml-auto" navbar>
                <NavItem className="p-0">
                  <NavLink
                    href="https://www.instagram.com/beingvalentina/"
                    target="_blank"
                  >
                    <i className="fab fa-2x fa-instagram" />
                  </NavLink>
                </NavItem>
                <NavItem className="p-0">
                  <NavLink
                    href="https://twitter.com/beingvalentina"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </NavLink>
                </NavItem>
                <NavItem className="p-0">
                  <NavLink
                    href="http://www.imdb.me/valentinaguerra"
                    target="_blank"
                  >
                    <i className="fab fa-imdb" />
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
                <Document className="resume" file={resume} onClick={() => {window.open("/ValentinaGuerra.pdf", "_blank")}}>
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
