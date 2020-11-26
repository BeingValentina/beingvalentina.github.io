import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Button,
  Row,
} from "reactstrap";

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

class Resume extends React.Component {
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
                      <Document className="resume" file={require("assets/docs/ValentinaGuerra.pdf")} onClick={() => {window.open("/ValentinaGuerra.pdf", "_blank")}}>
                        <Page width={this.state.resumeWidth} pageNumber={1} />
                      </Document>
                      <Button className="my-3" color="primary" href="/ValentinaGuerra.pdf" target="_blank">
                        <i className="fas fa-download"/> Download
                      </Button>
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

export default Resume;
