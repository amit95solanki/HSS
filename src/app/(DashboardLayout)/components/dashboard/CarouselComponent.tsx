import React from "react";

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src="/images/logos/cctv3.jpeg" alt="Slide 1" />
        <Carousel.Caption>
          <h1>HINDUSTAN SURVEILLANCE SYSTEM</h1>
          <p>Secure Your World with Reliable CCTV Solutions</p>
          {/* <Link
            className="btn"
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
            to="/login"
          >
            Click Me
          </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage src="/images/logos/cctv2.jpeg" alt="Slide 2" />
        <Carousel.Caption>
          <h1>HINDUSTAN SURVEILLANCE SYSTEM</h1>
          <p>Secure Your World with Reliable CCTV Solutions</p>
          {/* <a
            href="#"
            className="btn "
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
          >
            Click Me
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/images/logos/cctv3.jpeg" alt="Slide 3" />
        <Carousel.Caption>
          <h1>HINDUSTAN SURVEILLANCE SYSTEM</h1>
          <p>Secure Your World with Reliable CCTV Solutions</p>
          {/* <a
            href="#"
            className="btn "
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
          >
            Learn more
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
