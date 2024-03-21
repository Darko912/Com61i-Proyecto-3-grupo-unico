import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axiosClient from '../../config/axiosClient';
import "./shoppingmodal.css"
import Swal from 'sweetalert2';

const ShoppingModal = () => {
  const { state, removeFromShoppingCart, clearShoppingCart } = useContext(AuthContext);
  const shoppingCart = state?.shoppingCart || [];
  const [loading, setLoading] = useState(false);

  const handleRemoveFromCart = (index) => {
    removeFromShoppingCart(index);
  };

  const handleOrder = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.post('/api/orders/create', { shoppingCart });
      setLoading(false);
      Swal.fire({
        title: 'Order Placed',
        text: 'Your order has been submitted successfully.',
        icon: 'success',
      });
      clearShoppingCart();
    } catch (error) {
      setLoading(false);
      console.error('Error placing order:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to submit your order. Please try again later.',
        icon: 'error',
      });
    }
  };

  const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);


  return (
    <div>
      <h4>Carrito</h4>
      <ul>
        {shoppingCart.map((item, index) => (
          <li key={index}>
            <div className="image-container">
              <img src={item.icon} alt={item.tittle} />
            </div>
            <span>{item.tittle}</span>
            <span>${item.price}</span>
            <button onClick={() => handleRemoveFromCart(index)}>Remover</button>
          </li>
        ))}
      </ul>
      {shoppingCart.length === 0 && <p className='empty-shopping-cart'>Tu Carrito Esta Vacio.</p>}
      {shoppingCart.length > 0 && (
        <p className='empty-shopping-cart'>Total: ${totalPrice.toFixed(2)}</p>
      )}
      {shoppingCart.length > 0 && (
        <button className='empty-shopping-cart' onClick={handleOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      )}
    </div>
  );
}

export default ShoppingModal;

