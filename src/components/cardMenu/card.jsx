import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axiosClient';
import { AuthContext } from '../../context/AuthContext';

const CustomCard = () => {
  const [spotlightProducts, setSpotlightProducts] = useState([]);
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const fetchSpotlightProducts = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
        const response = await axiosClient.get('/api/products//getSpotlightProducts', {
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

  // Update local storage when the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    if (!authContext.state.isLogged) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para agregar al carrito.',
      });
      return;
    }

    setCart([...cart, product]);
    Swal.fire({
      title: 'Producto Agregado',
      text: 'El producto se ha agregado al carrito.',
      icon: 'success',
    });
  };

  return (
    <div className="container text-center">
      <div className="row">
        {spotlightProducts.map((product, index) => (
          <div key={index} className="Center col-md-6 col-lg-3 mb-3">
            <Card className='cardsMain'
              style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
            >
              <Card.Img variant="top" src={product.icon} className="imgCards card-image" />
              <Card.Body>
                <Card.Title>{product.tittle}</Card.Title>
                <hr />
                <Card.Text>{product.description}</Card.Text>
                <hr />
                <Card.Text>${product.price}</Card.Text>
                <Button className='botonCardMain' onClick={() => handleAddToCart(product)}>
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