import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

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
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Slick from "react-slick";
import ModalVideo from "react-modal-video";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "assets/docs/ValentinaGuerra.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [resumeWidth, setResumeWidth] = useState(700);
  const wrapperRef = useRef(null);

  const calculateResumeWidth = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      return windowWidth - 50;
    } else if (windowWidth < 992) {
      return 450;
    }
    return 700;
  }, []);

  const slickSettings = {
    dots: false,
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

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
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

  const handleResumeToggle = () => {
    setResumeOpen(!resumeOpen);
    setResumeWidth(calculateResumeWidth());
  };

  const handleReelToggle = () => setReelOpen(!reelOpen);

  return (
    <>
      <ColorNavbar
        reelOpen={reelOpen}
        resumeOpen={resumeOpen}
        onReelToggle={handleReelToggle}
        onResumeToggle={handleResumeToggle}
      />
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
                          <div className="carousel-overlay" onClick={() => openLightbox(img)}>
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
                  <Link to="/about" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-user" />
                    </div>
                    <h4>About</h4>
                    <p>Learn more about my journey from MIT to acting</p>
                  </Link>
                </Col>
                <Col md="4" className="quick-link-col">
                  <Link to="/credits" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-film" />
                    </div>
                    <h4>Credits</h4>
                    <p>View my film, television, and theater work</p>
                  </Link>
                </Col>
                <Col md="4" className="quick-link-col">
                  <Link to="/contact" className="quick-link-card">
                    <div className="quick-link-icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <h4>Contact</h4>
                    <p>Get in touch with my representation</p>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={lightboxOpen}
        toggle={closeLightbox}
        size="xl"
        centered={true}
        className="lightbox-modal"
      >
        <ModalBody className="p-0">
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
          {lightboxImage && (
            <img
              src={lightboxImage}
              alt="Headshot"
              className="lightbox-image"
            />
          )}
        </ModalBody>
      </Modal>

      {/* Resume Modal */}
      <Modal
        className="resume-modal"
        isOpen={resumeOpen}
        toggle={handleResumeToggle}
        size="xl"
        centered={true}
      >
        <ModalBody>
          <div className="container-fluid">
            <Row>
              <Document
                className="resume"
                file={resume}
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

export default Index;
