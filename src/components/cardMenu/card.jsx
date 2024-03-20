import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axiosClient from '../../config/axiosClient';
import { AuthContext } from '../../context/AuthContext';



const CustomCard = () => {
  const [spotlightProducts, setSpotlightProducts] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchSpotlightProducts = async () => {
      try {
        const storedToken = localStorage.getItem('token');
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

  const { addToShoppingCart } = authContext;

  const handleAddToCart = (product) => {
    if (!authContext.state.isLogged) {
      Swal.fire({
        title: 'Necesitas iniciar sesión',
        text: 'Debes iniciar sesión para agregar productos al carrito de compras.',
        icon: 'info',
      });
      return;
    }
    addToShoppingCart(product); 
    Swal.fire({
      title: 'Producto agregado al carrito',
      text: 'El producto se ha añadido correctamente a tu carrito de compras.',
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
                  Agregar al carrito
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
