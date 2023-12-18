import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../carousel/carousel.css"

const CarouselComponent = () => {
  return (
    <Carousel className='carouselMain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../img/ImgMainPage/CarruselImagenes.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../img/ImgMainPage/CarruselImg2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
