import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import swal from 'sweetalert2';
import "../css/card.css";



export const Card = ({ title, description }) => {
    const handlePedirClick= () => {
        swal.fire("pedido realizado con exito!");
    };

  return (
    <BootstrapCard className="customCard">
        <div className="imageContainer">
        <BootstrapCard.Img variant="top" src={`https://picsum.photos/200/300`} className="cardImage" />
            <div className="overlay">
        <BootstrapCard.Title>{title || "placerholder loco"}</BootstrapCard.Title>
        <BootstrapCard.Text>{description || "placer holder de texto jajaja"}</BootstrapCard.Text>
        <Button variant="success" onClick={handlePedirClick}>
          Pedir
        </Button>
            </div>
        </div>
    </BootstrapCard>
  )
};

export default Card
