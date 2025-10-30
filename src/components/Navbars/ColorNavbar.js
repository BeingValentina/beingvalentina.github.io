import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Col,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";

import ModalVideo from "react-modal-video";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "assets/docs/ValentinaGuerra.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ColorNavbar = ({ reelOpen: reelOpenProp, resumeOpen: resumeOpenProp }) => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [reelOpen, setReelOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeWidth, setResumeWidth] = useState(700);
  const location = useLocation();

  const calculateResumeWidth = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      return windowWidth - 50;
    } else if (windowWidth < 992) {
      return 450;
    }
    return 700;
  }, []);

  const changeNavbarColor = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
      setNavbarColor("bg-dark navbar-scrolled");
    } else {
      setNavbarColor("navbar-transparent");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [changeNavbarColor]);

  useEffect(() => {
    if (reelOpenProp !== undefined && reelOpenProp !== reelOpen) {
      setReelOpen(reelOpenProp);
    }
  }, [reelOpenProp, reelOpen]);

  useEffect(() => {
    if (resumeOpenProp !== undefined && resumeOpenProp !== resumeOpen) {
      setResumeOpen(resumeOpenProp);
      setResumeWidth(calculateResumeWidth());
    }
  }, [resumeOpenProp, resumeOpen, calculateResumeWidth]);

  const handleResumeToggle = () => {
    setResumeOpen(!resumeOpen);
    setResumeWidth(calculateResumeWidth());
  };

  const handleReelToggle = () => {
    setReelOpen(!reelOpen);
  };

  return (
    <>
      <Navbar className={`fixed-top modern-navbar ${navbarColor}`} expand="lg">
        <Container>
          <div className="navbar-translate">
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <NavbarBrand to="/" tag={Link} className="navbar-brand-modern">
              <span className="brand-name">Valentina Guerra</span>
              <span className="brand-subtitle">SAG-AFTRA</span>
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
            <Nav className="mx-auto modern-nav-links" navbar>
              <NavItem className={location.pathname === "/" ? "active" : ""}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={handleResumeToggle} className="nav-link-modern">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={handleReelToggle} className="nav-link-modern">
                  Reel
                </NavLink>
              </NavItem>
              <NavItem className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem className={location.pathname === "/credits" ? "active" : ""}>
                <Link to="/credits" className="nav-link">
                  Credits
                </Link>
              </NavItem>
              <NavItem className={location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </NavItem>
            </Nav>
            <Nav className="nav navbar-right ml-auto social-nav" navbar>
              <NavItem className="social-item">
                <NavLink
                  href="https://www.instagram.com/beingvalentina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-instagram" />
                </NavLink>
              </NavItem>
              <NavItem className="social-item">
                <NavLink
                  href="https://twitter.com/beingvalentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-twitter" />
                </NavLink>
              </NavItem>
              <NavItem className="social-item">
                <NavLink
                  href="http://www.imdb.me/valentinaguerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-imdb" />
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>

      {/* Resume Modal */}
      <Modal
        className="resume-modal"
        isOpen={resumeOpen}
        toggle={handleResumeToggle}
        size="lg"
        centered={false}
      >
        <ModalBody>
          <div className="container-fluid">
            <Row>
              <Document
                className="resume"
                file={resume}
                onClick={() => {
                  window.open("/ValentinaGuerra.pdf", "_blank");
                }}
              >
                <Page width={resumeWidth} pageNumber={1} />
              </Document>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" href="/ValentinaGuerra.pdf" target="_blank" download>
            <i className="fas fa-download mr-2" />
            Download Resume
          </Button>
          <Button color="secondary" onClick={handleResumeToggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      {/* Reel Modal */}
      <ModalVideo
        channel="vimeo"
        isOpen={reelOpen}
        videoId={478244874}
        onClose={handleReelToggle}
        autoplay={true}
      />
    </>
  );
};

export default ColorNavbar;
