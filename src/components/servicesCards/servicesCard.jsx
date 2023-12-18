import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './servicesCard.css'

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
    {
      title: 'Gente',
      description: 'Description for Service 4',
      image: 'https://picsum.photos/id/1035/200/300', 
    },
  ];

  return (
    {services.map((service, index) => (
    <figure>
      <img src="https://picsum.photos/id/287/250/300" alt="" />
      <figcaption>
        ${service}
      </figcaption>
    </figure>
  ))}
  );
};

export default Secciondeservicios;

//{services.map((service, index) => (