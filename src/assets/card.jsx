import React, { useState } from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../css/card.css';

const CustomCard = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, cards.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleCardClick = (title, description) => {
    Swal.fire({
      title: 'Confirm Order',
      text: `Do you want to order ${title}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, order it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Order Confirmed!', 'Your order has been placed.', 'success');
        // You can add further logic for handling the order confirmation here
      }
    });
  };

  return (
    <div className="card-container">
      <div className="card-slider">
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div className="card-wrapper" key={index}>
            <BootstrapCard
              style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
              onClick={() => handleCardClick(card.title, card.description)}
            >
              <BootstrapCard.Img variant="top" src={card.image} className="card-image" />
              <div className="card-info">
                <BootstrapCard.Title className="card-title">{card.title}</BootstrapCard.Title>
                <BootstrapCard.Text className="card-description">{card.description}</BootstrapCard.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
            </BootstrapCard>
          </div>
        ))};
      </div>
      <div className="navigation-arrows">
        <Button variant="secondary" onClick={handlePrev} disabled={currentIndex === 0}>
          &lt; 
        </Button>
        <Button variant="secondary" onClick={handleNext} disabled={currentIndex >= cards.length - 3}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default CustomCard;
