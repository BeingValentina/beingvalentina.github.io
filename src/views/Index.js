import React from "react";

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
} from "reactstrap";
import Slick from "react-slick";

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

class Index extends React.Component {
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
      slideIndex: 0,
      reelOpen: false,
      resumeOpen: false,
      resumeWidth: width,
    };
  }

  componentDidMount() {
    document.body.classList.add("sections-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;


  }
  componentWillUnmount() {
    document.body.classList.remove("sections-page");
  }

  resumeToggle = () => {
    this.setState({resumeOpen: !this.state.resumeOpen})
  }

  reelToggle = () => {
    this.setState({reelOpen: !this.state.reelOpen})
  }

  render() {
    return (
      <>
        <ColorNavbar reelOpen={this.state.reelOpen} resumeOpen={this.state.resumeOpen}/>
        <div className="wrapper" ref="wrapper">
          <div className="cd-section" id="headers">
            <div className="header header-3">
              <div className="page-header header-filter">
                <div className="content-center">
                  <Row>
                    <Col
                      className="ml-auto mr-auto positioned"
                      lg="5"
                      md="8"
                      xs="12"
                    >
                      <Button
                        color="primary"
                        onClick={this.resumeToggle}
                        size="lg"
                      >
                        <i className="fas fa-file-alt"/> View Resume
                      </Button>
                      <br/><br/>
                      <Button
                        color="primary"
                        onClick={this.reelToggle}
                        size="lg"
                      >
                        <i className="fas fa-film"/> Play Reel
                      </Button>
                    </Col>
                    <Col md="12">
                      <Slick {...slickHeader3Settings}>
                        <div>
                          <img
                            alt="..."
                            height="500"
                            src={gallery1}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            alt="..."
                            height="500"
                            src={gallery2}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            alt="..."
                            height="500"
                            src={gallery3}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            alt="..."
                            height="500"
                            src={gallery4}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            alt="..."
                            height="500"
                            src={gallery5}
                            className="img-fluid"
                          />
                        </div>
                      </Slick>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
