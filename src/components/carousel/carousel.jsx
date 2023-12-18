import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../carousel/carousel.css"

const CarouselComponent = () => {
  return (
    <Carousel className='carouselMain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudGVzfGVufDB8fDB8fHww"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://resizer.otstatic.com/v2/photos/wide-huge/1/31852776.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
