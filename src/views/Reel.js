import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Row
} from "reactstrap";

import ReactPlayer from 'react-player/vimeo'

class Reel extends React.Component {
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

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="cd-section" id="headers">
            <div className="header header-3">
              <div className="page-header header-filter">
                <div className="content-center">
                  <Row>
                    <div className="mx-auto">
                      <ReactPlayer url='https://vimeo.com/478244874' />
                    </div>
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

export default Reel;
