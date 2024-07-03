import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.ProductName} - ${item.Price}
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
