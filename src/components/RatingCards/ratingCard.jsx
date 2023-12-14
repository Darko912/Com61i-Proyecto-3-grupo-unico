import React from 'react';
import Customratingcard from '../RatingCards/ratingCardData1';
import { Container, Row, Col } from 'react-bootstrap';

const Cardgrouprating = () => {
  return (
    <Container >
      <Row>
        <Col>
        <hr />
          <Customratingcard title="Cafeteria" content="Sabor a Café es mucho más que una simple cafetería, es un espacio acogedor diseñado para deleitar los sentidos de nuestros clientes y ofrecerles una experiencia única." />
          <Customratingcard title="Servicio al cliente" content="La atención al cliente es mucho más que un servicio; es un compromiso fundamental en cualquier negocio. Se trata de ofrecer una experiencia excepcional a cada persona que interactúa con nuestra empresa." />
        </Col>

        <Col>
        <hr />
          <Customratingcard title="Ambiente" content="Música en vivo, DJ o playlist variada para crear ambiente. Eventos temáticos, noches de karaoke, trivia u otros juegos. Zonas de descanso o áreas lounge para socializar." />
          <Customratingcard title="Servicio de Barra" content="Bartenders capacitados en la preparación de cócteles y bebidas. Atención y servicio amable y eficiente." />
        </Col>
      </Row>
    </Container>
  );
};

export default Cardgrouprating;
