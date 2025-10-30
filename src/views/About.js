import React, { useEffect, useRef } from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Col,
  Container,
  Row,
} from "reactstrap";

import headshot from "assets/img/headshots/about.jpg";

const About = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("sections-page", "about-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = 0;
    }

    return () => {
      document.body.classList.remove("sections-page", "about-page");
    };
  }, []);

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapperRef}>
        <div className="cd-section" id="about">
          <div className="about-section-modern">
            <Container>
              {/* Page Header */}
              <Row className="justify-content-center mb-5">
                <Col lg="10" className="text-center">
                  <h1 className="page-title">About Valentina</h1>
                  <div className="page-divider" />
                  <p className="page-subtitle">
                    From MIT Engineer to Full-Time Actor
                  </p>
                </Col>
              </Row>

              {/* Bio Content */}
              <Row className="align-items-center about-content">
                <Col lg="6" md="12" className="about-text-col">
                  <div className="about-text-wrapper">
                    <div className="about-label">
                      <i className="fas fa-quote-left mr-2" />
                      My Story
                    </div>
                    <p className="about-bio">
                      Valentina Guerra has always been an actor, even if acting hasn't always been
                      her profession. Born and raised in New York City, she performed in community
                      theater and school productions from a young age.
                    </p>
                    <p className="about-bio">
                      While her interests in math and science led her to graduate from the
                      <strong> Massachusetts Institute of Technology</strong> with a degree in
                      <strong> Aerospace Engineering</strong>, she was active in their theater program
                      and completed a Concentration in Theater Arts.
                    </p>
                    <p className="about-bio">
                      She briefly worked in the aerospace industry before returning to her true passion,
                      and has since been formally trained in the <strong>Meisner Technique</strong>,
                      become a full-time actor and has not looked back!
                    </p>

                    {/* Key Highlights */}
                    <div className="about-highlights mt-4">
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <i className="fas fa-graduation-cap" />
                        </div>
                        <div className="highlight-text">
                          <h6>Education</h6>
                          <p>MIT - Aerospace Engineering + Theater Arts</p>
                        </div>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <i className="fas fa-theater-masks" />
                        </div>
                        <div className="highlight-text">
                          <h6>Training</h6>
                          <p>Meisner Technique</p>
                        </div>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="highlight-text">
                          <h6>Based In</h6>
                          <p>New York City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="6" md="12" className="about-image-col">
                  <div className="about-image-wrapper">
                    <div className="image-frame">
                      <img
                        className="about-image"
                        src={headshot}
                        alt="Valentina Guerra"
                      />
                      <div className="image-overlay" />
                    </div>
                    <div className="image-decoration" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
