import React from 'react';
import Customratingcard from '../RatingCards/ratingCardData1';
import { Container, Row, Col } from 'react-bootstrap';

const Cardgrouprating = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Customratingcard title="(nombre)" content="(explicacion)" />
          <Customratingcard title="(nombre)" content="(explicacion)" />
        </Col>

        <Col>
          <Customratingcard title="(nombre)" content="(explicacion)" />
          <Customratingcard title="(nombre)" content="(explicacion)" />
        </Col>
      </Row>
    </Container>
  );
};

export default Cardgrouprating;
