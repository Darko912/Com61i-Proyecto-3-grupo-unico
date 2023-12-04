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
        <p>En 1892, nació "La Curva del Sabor" un acogedor rincón que se convertiría en el epicentro de la fusión italo-germana-Argenta. Desde el dia de su fundacion y gracias a los esfuerzos y cambios de epocas este restaurante lleva Años y años pasando la antorcha a las generaciones nuevas sobre cocina. este restaurante incorporó la precisión alemana y la innovación en la mezcla.</p>
        <Container>
        <h1>Nuestro Staff esta comprometido por estas personas</h1>
       <Cardgrouprating/>
       </Container>
      </div>

      <div>
        <h2 className='text-center'>Nuestro Servicio Incluye:</h2>
      </div>
      <Secciondeservicios/>
    </div>
  );
}

export default HomePage