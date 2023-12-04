import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CustomCard = ({ cards }) => {

  const handleCardClick = (title) => {
    Swal.fire({
      title: 'Confirmar Orden',
      text: `Quieres Ordenar ${title}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, ordernarlo!',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Orden Confirmada', 'Tu Orden fue confirmada.', 'success');
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
            <Card
              style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
              onClick={() => handleCardClick(card.title)}
            >
              <Card.Img variant="top" src={card.image} className="card-image" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" onClick={() => handleCardClick(card.title)}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;


