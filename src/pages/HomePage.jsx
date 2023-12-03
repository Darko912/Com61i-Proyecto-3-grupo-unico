import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CustomCard from '../components/card/card'; 
import Cards from "../components/card/cardData";
import "../css/HomePage.css"
import CarouselComponent from '../components/carousel/carousel';

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
        <h2>Historia del Establecimiento</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia perspiciatis laborum hic voluptas expedita cumque molestiae facere quae, delectus ratione, doloremque, voluptatum veniam voluptate odit officiis? Minima, mollitia sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas recusandae, voluptate aliquam a facilis. Eum expedita labore quaerat officiis officia aliquid eligendi quos nemo odio quis, quam, omnis vitae?</p>
      </div>

      <div>
        <h1 className='text-center'>Nuestros Sponsors</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempora quisquam, natus praesentium, provident harum amet ut nesciunt autem itaque dolorum quod, quasi doloremque doloribus. Velit perspiciatis provident eligendi neque.</p>
      </div>
    </div>
  );
}

export default HomePage