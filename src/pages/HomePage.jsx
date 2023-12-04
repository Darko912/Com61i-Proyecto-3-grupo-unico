import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CustomCard from '../components/cardMenu/card'; 
import Cards from "../components/cardMenu/cardData";
import "../css/HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from '../components/carousel/carousel';
import Cardgrouprating from '../components/RatingCards/ratingCard';
import Secciondeservicios from '../components/servicesCards/servicesCard';

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

      <h1 className='text-center'>Bienvenido a Curva del sabor!</h1>

      <br />
      
      <h1 className="text-center">Menu del Dia!</h1>

      <CustomCard cards={Cards} />

      <h1 className="text-center">Disfrute de su comida en el lugar mas Elegante de la Argentina</h1>

      <br />

      <div id="carousel" className="carouselContainer">
        <CarouselComponent />
      </div>


      <div id="MasDeNosotros" className="MasDeNosotros">
        <h2>Historia del Establecimiento</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia perspiciatis laborum hic voluptas expedita cumque molestiae facere quae, delectus ratione, doloremque, voluptatum veniam voluptate odit officiis? Minima, mollitia sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas recusandae, voluptate aliquam a facilis. Eum expedita labore quaerat officiis officia aliquid eligendi quos nemo odio quis, quam, omnis vitae?</p>
        <Container>
       <Cardgrouprating/>
       </Container>
      </div>

      <div>
        <h2 className='text-center'>Nuestro Servicio Incluye:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo quia. Rerum deleniti nihil quaerat labore consequatur neque inventore dicta, consequuntur ducimus sit eos quas, harum molestiae praesentium repellendus tempore?
        Perferendis laboriosam consequatur ullam quam facere incidunt nisi nulla molestias neque aliquid, alias, suscipit veniam sed adipisci illo facilis veritatis deleniti modi eum nihil nam. Nihil, aperiam quidem! Suscipit, soluta!</p>
      </div>
      <Secciondeservicios/>
    </div>
  );
}

export default HomePage