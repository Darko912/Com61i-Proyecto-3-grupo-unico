import React from 'react';
import { Card } from 'react-bootstrap';

const Customratingcard = ({ title, content }) => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      <p>{content}</p>
    </div>
  );
};

export default Customratingcard;
