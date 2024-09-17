import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about section-padding "
      style={{ marginBottom: "30px" }}
    >
      <Container>
        <Col md={12}>
          <div className="section-header text-center pb-5">
            <h2 className="gradient-text">
              <strong
                style={{
                  color: "#E35A00",
                }}
              >
                ABOUT
              </strong>
            </h2>
            {/* <p>
              Under our trusted banner, we offer a comprehensive range of services delivered by our skilled team and
              network of expert contractors.
            </p> */}
          </div>
        </Col>
        <Row>
          <Col lg={4} md={12} className="col-12">
            <div className="about-img">
              <img
                src="/images/logos/cctv2.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={8} md={12} className="ps-lg-5">
            <div className="">
              <h6 style={{ textAlign: "justify", fontFamily: "cursive" }}>
                I specialize in the installation of a wide range of security and
                monitoring solutions, including: <br />
                <ul>
                  <li>IP Cameras & HD Cameras</li>
                  <li>PTZ Cameras</li>
                  <li>Solar CCTV</li>
                  <li>Walkie Talkies</li>
                  <li>Biometric Attendance Machines</li>
                  <li>Fire Cylinder Refilling</li>
                  <li>Solar Panels</li>
                  <li>Fire Alarm Systems</li>
                  <li>GPS Vehicle Tracking</li>
                  <li>Biometric Fingerprint Systems</li>
                  <li>Metal Detectors</li>
                </ul>
              </h6>

              {/* <Button href="#" variant="warning">
                Learn more
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
