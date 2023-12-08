import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "./card.css"

const CustomCard = ({ cards }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };


  const handleButtonClick = (title) => {
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
      <div className="row d-flex justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-5 col-lg-3 mb-3 m-md-3">
            <Card
              style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
              onClick={() => handleCardClick(card.title)}
            >
              <Card.Img variant="top" src={card.image} className="card-image" />
              <Card.Body>
                <div className='texto-escondido'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick(card.title)}>
                  Ordenar
                </Button>  
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;


