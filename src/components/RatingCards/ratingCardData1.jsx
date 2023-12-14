import React from 'react';
import { Card } from 'react-bootstrap';

const Customratingcard = ({ title, content }) => {
  return (
    <div className='divRatingCard'>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body className='button-86 cardRating'>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      <p>{content}</p>
    </div>
  );
};

export default Customratingcard;
