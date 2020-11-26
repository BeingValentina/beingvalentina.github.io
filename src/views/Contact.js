import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form, FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import classnames from "classnames";

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contactNameFocus: false,
      contactName: ''
    }
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
          <div className="cd-section" id="contactus">
            <div className="header header-3">
              <div className="page-header header-filter">
                <div className="content-center">
                  <div
                    className="contactus-1 section-image"
                    style={{
                      backgroundImage: "url(" + require("assets/img/contact.jpg") + ")"
                    }}
                  >
                    <Container>
                      <Row>
                        <Col md="5" className="text-left">
                          <h2 className="title">Representation</h2>
                          <div className="info info-horizontal">
                            <div className="icon icon-primary">
                              <i className="tim-icons icon-square-pin" />
                            </div>
                            <div className="description">
                              <h4 className="info-title">Los Angeles / New York</h4>
                              <p className="description">
                                <span className="font-weight-bold">Agent</span><br/>
                                90210 Talent Agency<br/>
                                <a href="mailto:agents@90210talent.com" target="_blank" rel="noopener noreferrer">
                                  agents@90210talent.com
                                </a><br/>
                                <a href="tel:818-928-5717">818.928.5717</a>
                              </p>
                              <p className="description">
                                <span className="font-weight-bold">Manager</span><br/>
                                Stein Entertainment Group<br/>
                                <a href="mailto:info@steinentertainment.com" target="_blank" rel="noopener noreferrer">
                                  info@steinentertainment.com
                                </a><br/>
                                <a href="tel:323-822-1400">323.822.1400</a>
                              </p>
                            </div>
                          </div>
                          <div className="info info-horizontal">
                            <div className="icon icon-primary">
                              <i className="tim-icons icon-square-pin" />
                            </div>
                            <div className="description">
                              <h4 className="info-title">San Francisco</h4>
                              <p className="description">
                                <span className="font-weight-bold">Agent</span><br/>
                                NYLO Model & Talent Agency<br/>
                                <a href="mailto:nicole@nylotalent.com" target="_blank" rel="noopener noreferrer">
                                  nicole@nylotalent.com
                                </a><br/>
                                <a href="tel:510-588-8762">510.588.8762</a>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col className="ml-auto mr-auto" md="5">
                          <Card className="card-contact card-raised">
                            <Form
                              action="https://formspree.io/f/mvovbkba"
                              method="POST"
                            >
                              <CardHeader className="text-center">
                                <CardTitle tag="h4">Contact Valentina</CardTitle>
                              </CardHeader>
                              <CardBody className="text-left">
                                <input type="hidden" name="_subject" value={"Website submission from: " + this.state.contactName} />
                                <FormGroup>
                                  <label>Name</label>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.contactNameFocus
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      aria-label="Name..."
                                      placeholder="Name..."
                                      value={this.state.contactName}
                                      type="text"
                                      onChange={e => this.setState({contactName: e.target.value})}
                                      onFocus={e =>
                                        this.setState({
                                          contactNameFocus: true
                                        })
                                      }
                                      onBlur={e =>
                                        this.setState({
                                          contactNameFocus: false
                                        })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <label>Email address</label>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.contactEmailFocus
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-email-85" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      name={"_replyto"}
                                      placeholder="Email Here..."
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ contactEmailFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ contactEmailFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <label>Your message</label>
                                  <Input
                                    id="message-2"
                                    name="message"
                                    rows="6"
                                    type="textarea"
                                  />
                                </FormGroup>
                                <Row>
                                  <Col md={{size: 6, offset: 6}}>
                                    <Button
                                      className="btn-round pull-right"
                                      color="primary"
                                      type="submit"
                                    >
                                      Send Message
                                    </Button>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Form>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
