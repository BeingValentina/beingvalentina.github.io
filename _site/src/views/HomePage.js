import React from "react";

import {
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

// core components
import PagesNavbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import ImageGallery from "react-image-gallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const galleryImages = [
  {
    original: require("assets/img/headshots/gallery1.jpg"),
    thumbnail: require("assets/img/headshots/gallery1-thumbnail.jpg"),
  },
  {
    original: require("assets/img/headshots/gallery2.jpg"),
    thumbnail: require("assets/img/headshots/gallery2-thumbnail.jpg"),
  },
  {
    original: require("assets/img/headshots/gallery3.jpg"),
    thumbnail: require("assets/img/headshots/gallery3-thumbnail.jpg"),
  },
  {
    original: require("assets/img/headshots/gallery4.jpg"),
    thumbnail: require("assets/img/headshots/gallery4-thumbnail.jpg"),
  },
  {
    original: require("assets/img/headshots/gallery5.jpg"),
    thumbnail: require("assets/img/headshots/gallery5-thumbnail.jpg"),
  },
];

class HomePage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <PagesNavbar />
        <Container>
          <Row className="page-header">
            <Col xs="12" className="align-self-center d-md-none">
              <Row className="justify-content-center">
                <ImageGallery
                  items={galleryImages}
                  showNav={false}
                  thumbnailPosition="right"
                  showPlayButton={false}
                  autoPlay={false}
                  slideOnThumbnailOver={true}
                />
              </Row>
              <Row className="justify-content-center pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  tag={Link} to="/reel"
                >
                  <FontAwesomeIcon icon={faVideo}/> View Reel
                </Button>
              </Row>
            </Col>
            <Col md="7" className="align-self-center d-none d-md-block">
              <Row className="justify-content-center">
                <ImageGallery
                  items={galleryImages}
                  showNav={false}
                  showPlayButton={false}
                  autoPlay={false}
                  slideOnThumbnailOver={true}
                />
              </Row>
            </Col>
            <Col md="5" className="align-self-center d-none d-md-block">
              <Row className="justify-content-center pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  tag={Link} to="/reel"
                >
                  <FontAwesomeIcon icon={faVideo}/> View Reel
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;
