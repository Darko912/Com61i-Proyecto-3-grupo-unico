import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axiosClient';
import { AuthContext } from '../../context/AuthContext';

const CustomCard = () => {
  const [spotlightProducts, setSpotlightProducts] = useState([]);
  const [token, setToken] = useState('');

  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchSpotlightProducts = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
        const response = await axiosClient.get('/api/products/get-products', {
          headers: {
            'access-token': storedToken,
          },
        });
        setSpotlightProducts(response.data); 
      } catch (error) {
        console.error('Error fetching spotlight products:', error.message);
      }
    };

    fetchSpotlightProducts();
  }, []);

  const handleCardClick = (title) => {
    if (!authContext.state.isLogged) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para agregar al carrito.',
      });
      return;
    }

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
    <div className="container text-center">
      <div className="row">
        {spotlightProducts.map((product, index) => (
          <div key={index} className="Center col-md-6 col-lg-3 mb-3">
            <Card className='cardsMain'
              style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
              onClick={() => handleCardClick(product.tittle)}
            >
              <Card.Img variant="top" src={product.icon} className="imgCards card-image" />
              <Card.Body>
                <Card.Title>{product.tittle}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button className='botonCardMain' onClick={() => handleCardClick(product.title)}>
                  Añadir al Carrito
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


