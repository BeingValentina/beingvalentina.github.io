import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

// core components
import PagesNavbar from "components/Navbars/Navbar.js";

import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends React.Component {
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
            <Col className="offset-md-2 text-center align-self-center" md={8}>
              <Card className="card-resume card-plain">
                <CardHeader>
                  <Button className="btn-default" color="primary">
                    <FontAwesomeIcon icon={faDownload}/> Download
                  </Button>
                </CardHeader>
                <CardBody>
                  <Document file="/ValentinaGuerra.pdf">
                    <Page pageNumber={1}/>
                  </Document>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ResumePage;
