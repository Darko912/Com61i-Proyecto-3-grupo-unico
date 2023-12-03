import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CustomCard from '../assets/card'; 
import Cards from "../assets/cardData";
import "../css/HomePage.css"
import CarouselComponent from '../assets/carousel';

const HomePage = () => {
  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div id="carousel" className="carouselContainer">
        <CarouselComponent />
      </div>

      <h1 class="text-center">Menu del Dia!</h1>

      <CustomCard cards={Cards} />

      <div id="MasDeNosotros" className="MasDeNosotros">
        <h2>Section que no se que poner XD</h2>
        <p>mas Info iria aqui.. nose.</p>
      </div>

      <div>
        <h1 className='text-center'>Nuestros Sponsors</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempora quisquam, natus praesentium, provident harum amet ut nesciunt autem itaque dolorum quod, quasi doloremque doloribus. Velit perspiciatis provident eligendi neque.</p>
      </div>
    </div>
  );
}

export default HomePage