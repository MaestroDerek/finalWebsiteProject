
import React from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/DarkFooter.js";

export default function LandingPage() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false); 
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="content-center">
                    
          <Col className="mb-lg-auto content-center" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png").default}
                />
                <CardTitle tag="h4">Contact</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                    })}
                  >
                    <Input
                      name="message"
                      placeholder="Message"
                      type="text"
                    />
                  </InputGroup>
                </Form>
                <Button name="submit" className="btn-round" color="primary" size="lg">
                  Send message
                </Button>
              </CardBody>
            </Card>
          </Col>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
