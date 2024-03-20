import React from 'react';
import { Container } from 'react-bootstrap';
import CustomCard from '../components/cardMenu/card'; 
import Cards from "../components/cardMenu/cardData";
import "../css/HomePage.css"

export const OrdersPage = () => {
  return (
    
    <div> 
        <h1 className='tituloMain text-center'>Bienvenido a nuestra Carta</h1>

        <hr />

        <CustomCard cards={Cards} />

    </div>
  )
}
