import React, { useEffect, useRef } from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Badge,
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";

// Credits data - organized by category with real and placeholder data
const creditsData = {
  film: [
    {
      title: "The Prank",
      year: "2024",
      role: "Detective Morris",
      type: "Feature Film",
      icon: "fa-video"
    },
    {
      title: "Autonomous",
      year: "2024",
      role: "Sarah",
      type: "Feature Film",
      icon: "fa-film"
    },
    {
      title: "The Last Stand",
      year: "2023",
      role: "Maria",
      type: "Short Film",
      icon: "fa-camera"
    },
  ],
  television: [
    {
      title: "Law & Order: SVU",
      year: "2023",
      role: "Guest Star",
      type: "TV Series",
      icon: "fa-tv"
    },
    {
      title: "Blue Bloods",
      year: "2022",
      role: "Co-Star",
      type: "TV Series",
      icon: "fa-tv"
    },
  ],
  theater: [
    {
      title: "Hamlet",
      year: "2023",
      role: "Ophelia",
      venue: "Off-Broadway Production",
      icon: "fa-theater-masks"
    },
    {
      title: "A Streetcar Named Desire",
      year: "2022",
      role: "Stella",
      venue: "Regional Theater",
      icon: "fa-theater-masks"
    },
  ]
};

const CreditCard = ({ credit }) => {
  return (
    <Col lg="4" md="6" className="mb-4">
      <div className="credit-card-modern">
        <div className="credit-icon">
          <i className={`fas ${credit.icon}`} />
        </div>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h4 className="credit-title">{credit.title}</h4>
          <Badge className="credit-year" pill>{credit.year}</Badge>
        </div>
        <p className="credit-role">
          <strong>{credit.role}</strong>
        </p>
        <p className="credit-type">
          {credit.type || credit.venue}
        </p>
      </div>
    </Col>
  );
};

const Credits = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("sections-page", "credits-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = 0;
    }

    return () => {
      document.body.classList.remove("sections-page", "credits-page");
    };
  }, []);

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapperRef}>
        <div className="cd-section" id="credits">
          <div className="credits-page-modern">
            <Container>
              {/* Page Header */}
              <Row className="justify-content-center mb-5">
                <Col lg="10" className="text-center">
                  <h1 className="page-title">Credits</h1>
                  <div className="page-divider" />
                  <p className="page-subtitle">
                    A selection of film, television, and theater work
                  </p>
                  <Button
                    color="primary"
                    href="https://www.imdb.com/name/nm5684371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern mt-3"
                    size="lg"
                  >
                    <i className="fab fa-imdb mr-2" />
                    View Full IMDb Profile
                  </Button>
                </Col>
              </Row>

              {/* Film Credits */}
              <div className="credits-category">
                <div className="category-header">
                  <h2>
                    <i className="fas fa-film" />
                    Film
                  </h2>
                </div>
                <Row>
                  {creditsData.film.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </Row>
              </div>

              {/* Television Credits */}
              <div className="credits-category">
                <div className="category-header">
                  <h2>
                    <i className="fas fa-tv" />
                    Television
                  </h2>
                </div>
                <Row>
                  {creditsData.television.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </Row>
              </div>

              {/* Theater Credits */}
              <div className="credits-category">
                <div className="category-header">
                  <h2>
                    <i className="fas fa-theater-masks" />
                    Theater
                  </h2>
                </div>
                <Row>
                  {creditsData.theater.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
