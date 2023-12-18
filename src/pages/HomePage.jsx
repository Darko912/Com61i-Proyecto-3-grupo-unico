import React from 'react';
import { Container } from 'react-bootstrap';
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
      <div >


      </div>

      <h1 className='tituloMain text-center'>Bienvenido a Curva del sabor!</h1>

      <hr/>
      
      <CustomCard cards={Cards} />

      <h1 className="tituloMain text-center">Disfrute de su comida en el lugar mas Elegante de la Argentina</h1>

      <br />

      <div id="carousel" className="carouselContainer">
        <CarouselComponent />
      </div>


      <div id="MasDeNosotros" className="MasDeNosotros">
        <h2 className='tituloMain'>Historia del Establecimiento</h2>
        <hr />
        <p className='letrasMain'>En 1892, nació "La Curva del Sabor" un acogedor rincón que se convertiría en el epicentro de la fusión italo-germana-Argenta. Desde el dia de su fundacion y gracias a los esfuerzos y cambios de epocas este restaurante lleva Años y años pasando la antorcha a las generaciones nuevas sobre cocina. este restaurante incorporó la precisión alemana y la innovación en la mezcla.</p>
        <Container>
        <h1 className='letrasMain'>Prestamos los siguientes servicios</h1>
       <Cardgrouprating/>
       </Container>
      </div>

      <div className='tituloCardsSecundarias container'>

      </div>

      <h2 className='letrasMain text-center'>Nuestro Servicio Incluye</h2>
      
      <Secciondeservicios/>

      <div>


      </div>
    </div>
  );
}

export default HomePage