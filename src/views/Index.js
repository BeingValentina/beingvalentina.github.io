import React, { useState, useEffect, useRef } from "react";

// Images
import gallery1 from "assets/img/headshots/gallery1.jpg";
import gallery2 from "assets/img/headshots/gallery2.jpg";
import gallery3 from "assets/img/headshots/gallery3.jpg";
import gallery4 from "assets/img/headshots/gallery4.jpg";
import gallery5 from "assets/img/headshots/gallery5.jpg";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Button,
  Col,
  Row,
  Container,
} from "reactstrap";
import Slick from "react-slick";

// custom previous button for the slick component
const PrevButton = ({ onClick }) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};

// custom next button for the slick component
const NextButton = ({ onClick }) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
      onClick={onClick}
    >
      <i className="tim-icons icon-minimal-right" />
    </Button>
  );
};

const Index = () => {
  const [reelOpen, setReelOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const wrapperRef = useRef(null);

  const slickSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    focusOnSelect: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    className: "modern-carousel",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  };

  useEffect(() => {
    document.body.classList.add("sections-page", "index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = 0;
    }

    return () => {
      document.body.classList.remove("sections-page", "index-page");
    };
  }, []);

  const handleResumeToggle = () => setResumeOpen(!resumeOpen);
  const handleReelToggle = () => setReelOpen(!reelOpen);

  return (
    <>
      <ColorNavbar reelOpen={reelOpen} resumeOpen={resumeOpen} />
      <div className="wrapper" ref={wrapperRef}>
        <div className="cd-section" id="headers">
          {/* Hero Section */}
          <div className="hero-modern">
            <div className="hero-overlay" />
            <div className="hero-content-wrapper">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="10" className="text-center">
                    <div className="hero-text">
                      <h1 className="hero-name">
                        <span className="name-highlight">Valentina Guerra</span>
                      </h1>
                      <div className="hero-divider" />
                      <h2 className="hero-tagline">Actor • SAG-AFTRA</h2>
                      <p className="hero-description">
                        MIT Aerospace Engineer turned full-time actor, trained in Meisner Technique
                      </p>
                      <div className="hero-cta">
                        <Button
                          color="primary"
                          onClick={handleResumeToggle}
                          size="lg"
                          className="btn-modern"
                        >
                          <i className="fas fa-file-download mr-2" />
                          View Resume
                        </Button>
                        <Button
                          color="info"
                          onClick={handleReelToggle}
                          size="lg"
                          className="btn-modern ml-3"
                        >
                          <i className="fas fa-play mr-2" />
                          Watch Reel
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="arrow">
                <span></span>
              </div>
            </div>
          </div>

          {/* Headshots Gallery Section */}
          <div className="gallery-section">
            <Container fluid>
              <Row className="justify-content-center mb-5">
                <Col lg="8" className="text-center">
                  <h2 className="section-title">Headshots</h2>
                  <div className="section-divider" />
                  <p className="section-description">
                    Professional headshots capturing versatility and range
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Slick {...slickSettings}>
                    {[gallery1, gallery2, gallery3, gallery4, gallery5].map((img, idx) => (
                      <div key={idx} className="carousel-slide">
                        <div className="carousel-image-wrapper">
                          <img
                            alt={`Valentina Guerra Headshot ${idx + 1}`}
                            src={img}
                            className="carousel-image"
                          />
                          <div className="carousel-overlay">
                            <div className="carousel-overlay-content">
                              <i className="fas fa-search-plus" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slick>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <Container>
              <Row className="text-center">
                <Col md="4" className="quick-link-col">
                  <a href="/#/about" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-user" />
                    </div>
                    <h4>About</h4>
                    <p>Learn more about my journey from MIT to acting</p>
                  </a>
                </Col>
                <Col md="4" className="quick-link-col">
                  <a href="/#/credits" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-film" />
                    </div>
                    <h4>Credits</h4>
                    <p>View my film, television, and theater work</p>
                  </a>
                </Col>
                <Col md="4" className="quick-link-col">
                  <a href="/#/contact" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <h4>Contact</h4>
                    <p>Get in touch with my representation</p>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
