import React from 'react';
import Customratingcard from '../RatingCards/ratingCardData1';
import { Container, Row, Col } from 'react-bootstrap';

const Cardgrouprating = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Customratingcard title="Maximus" content="Lo Mejor de Lo mejor 5/5" />
          <Customratingcard title="William" content="Simplemente Exquisito 4/5" />
        </Col>

        <Col>
          <Customratingcard title="Gordon Ramsey" content="Un Servicio Impresionante 5/5" />
          <Customratingcard title="Gullet" content="Las Luces son parte decorativa o acaso son tan naturales? 3/5" />
        </Col>
      </Row>
    </Container>
  );
};

export default Cardgrouprating;
