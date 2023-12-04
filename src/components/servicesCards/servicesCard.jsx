import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Secciondeservicios = () => {
  const services = [
    {
      title: 'Servicio Rapido a Deliveries',
      description: 'Description for Service 1',
      image: 'https://picsum.photos/id/1018/200/300',
    },
    {
      title: 'Staff siempre activo para tomar mesas',
      description: 'Description for Service 2',
      image: 'https://picsum.photos/id/1020/200/300',
    },
    {
      title: 'Servicio impecables, limpieza estricta',
      description: 'Description for Service 3',
      image: 'https://picsum.photos/id/1035/200/300', 
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={service.image} className="card-image" />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secciondeservicios;
