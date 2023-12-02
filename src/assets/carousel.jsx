import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/carousel.css'; 

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>primer slide</h3>
          <p>Textito</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Segundo lorem</h3>
          <p>Mas texto aqui</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
