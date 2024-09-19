import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  const [showFullName, setShowFullName] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setShowFullName((prevShowFullName) => !prevShowFullName);
        setFadeClass("fade-in");
      }, 1000); // Match the fade-out animation duration
    }, 4000); // Toggle every 4 seconds to allow time for both animations

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="mb-6">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <div className={`${fadeClass} gradient-text`}>
              <strong>
                {showFullName ? (
                  "Hindustaan Survillance "
                ) : (
                  <img
                    src="/images/logos/HSSLOGO.png"
                    alt="HSS"
                    height={30}
                    width={60}
                  />
                )}
              </strong>
            </div>

            {/* <span className="text-warning">A</span>W<span className="text-warning">H</span>S */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} href="/" className="gradient-text">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/company" className="gradient-text">
                Company
              </Nav.Link>

              <Nav.Link as={Link} href="/contact" className="gradient-text">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} href="/blog" className="gradient-text">
                Blog
              </Nav.Link>

              {/* <Nav.Link as={Link} to="/login" className="gradient-text">
              LOGIN
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
