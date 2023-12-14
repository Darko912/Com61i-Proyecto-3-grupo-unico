import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../carousel/carousel.css"

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=2"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
