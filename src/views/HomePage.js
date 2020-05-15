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
            <Col md="6" className="align-self-center">
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
            <Col md="6" className="align-self-center d-none d-md-block">
              <h1 className="profile-title text-left">Projects</h1>
              <h5 className="text-on-back">02</h5>
              <p className="profile-description text-left">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                performs and records all of his own music, giving it a warm,
                intimate feel with a solid groove structure. An artist of
                considerable range.
              </p>
              <div className="btn-wrapper pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-book-bookmark" /> Bookmark
                </Button>
                <Button
                  className="btn-simple"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-bulb-63" /> Check it!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;
