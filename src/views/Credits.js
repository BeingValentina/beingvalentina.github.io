import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Badge,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";

// Credits data - organized by category
const creditsData = {
  film: [
    {
      title: "The Prank",
      year: "2024",
      role: "Detective Morris",
      type: "Feature Film"
    },
    {
      title: "Autonomous",
      year: "2024",
      role: "Sarah",
      type: "Feature Film"
    },
    {
      title: "The Last Stand",
      year: "2023",
      role: "Maria",
      type: "Short Film"
    },
  ],
  television: [
    {
      title: "Law & Order: SVU",
      year: "2023",
      role: "Guest Star",
      type: "TV Series"
    },
    {
      title: "Blue Bloods",
      year: "2022",
      role: "Co-Star",
      type: "TV Series"
    },
  ],
  theater: [
    {
      title: "Hamlet",
      year: "2023",
      role: "Ophelia",
      venue: "Off-Broadway Production"
    },
    {
      title: "A Streetcar Named Desire",
      year: "2022",
      role: "Stella",
      venue: "Regional Theater"
    },
  ]
};

class Credits extends React.Component {
  componentDidMount() {
    document.body.classList.add("sections-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
  }

  componentWillUnmount() {
    document.body.classList.remove("sections-page");
  }

  renderCreditCard = (credit, index, category) => {
    return (
      <Col lg="4" md="6" key={index} className="mb-4">
        <Card className="card-plain credit-card">
          <CardBody>
            <div className="credit-header">
              <h4 className="credit-title">{credit.title}</h4>
              <Badge color="primary" pill className="credit-year">
                {credit.year}
              </Badge>
            </div>
            <p className="credit-role">
              <strong>{credit.role}</strong>
            </p>
            <p className="text-muted credit-type">
              {credit.type || credit.venue}
            </p>
          </CardBody>
        </Card>
      </Col>
    );
  };

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="cd-section" id="credits">
            <div className="header header-3">
              <div className="page-header header-filter credits-page">
                <div className="content-center">
                  <Container>
                    <div className="credits-header text-center mb-5">
                      <h1 className="title">Credits</h1>
                      <p className="description">
                        A selection of film, television, and theater work
                      </p>
                      <a
                        href="https://www.imdb.com/name/nm5684371"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-round mt-3"
                      >
                        <i className="fab fa-imdb mr-2" />
                        View Full IMDb Profile
                      </a>
                    </div>

                    {/* Film Credits */}
                    <div className="credits-section">
                      <Row>
                        <Col md="12">
                          <h2 className="section-title">
                            <i className="fas fa-film mr-2" />
                            Film
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        {creditsData.film.map((credit, index) =>
                          this.renderCreditCard(credit, index, 'film')
                        )}
                      </Row>
                    </div>

                    {/* Television Credits */}
                    <div className="credits-section mt-5">
                      <Row>
                        <Col md="12">
                          <h2 className="section-title">
                            <i className="fas fa-tv mr-2" />
                            Television
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        {creditsData.television.map((credit, index) =>
                          this.renderCreditCard(credit, index, 'television')
                        )}
                      </Row>
                    </div>

                    {/* Theater Credits */}
                    <div className="credits-section mt-5">
                      <Row>
                        <Col md="12">
                          <h2 className="section-title">
                            <i className="fas fa-theater-masks mr-2" />
                            Theater
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        {creditsData.theater.map((credit, index) =>
                          this.renderCreditCard(credit, index, 'theater')
                        )}
                      </Row>
                    </div>
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

export default Credits;
