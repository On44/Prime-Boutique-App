import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src="/prime.PNG" alt="Prime Boutique" />
          </Link><br/>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <Link to="/"></Link>
            <li className="header__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="header__returns">
          <Link to="/returns">
            <div className="returns$orders">
              <fashopingreturns size={24} />
            </div>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">Returns<br/>$ Orders</span>
          </Link>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search products..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="header__cart">
          <Link to="/cart">
          <div className="shopping-cart-icon">
      <fashopingCart size={24} />
    </div>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
