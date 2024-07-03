// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/today'sdeals">Today's Deals</Link></li>
        <li><Link to="/customerservice">Customer Service</Link></li>
        <li><Link to="/giftcards">Gift Cards</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

export default Menu;
