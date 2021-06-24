
import React from "react";
import {
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/DarkFooter.js";

export default function LandingPage() {
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
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Accomplishments
                </h1>
                <p className="text-white mb-3">
                  <p>University of Rio Grande (06/01/2018)</p>
                  <h4>AAS IT:Networking Systems</h4>

                  <p>Rowan College at Burlington County (06/01/2020)</p>
                  <h4>AAS Computer Science</h4>

                  <p>Rowan College (Expected 12/30/2021)</p>
                  <h4>BS Computer Science</h4>

                  <p>Successfully survived COVID-19</p>

                  <p>Once bowled a 200</p>

                  <p>Met Kanye West</p>
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
