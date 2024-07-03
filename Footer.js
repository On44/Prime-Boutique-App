// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img src="/payment.jpeg" alt="payment" style={{width: '500px', height: 'auto'}}/>
        <p>&copy; 2024 Prime Boutique Ecommerce. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
          <a href="https://whatsapp.com" target="_blank" rel
          ="noopener noreferrer">Whatsapp</a>
        </p>
        <p>For further inquiries contact:jackonyango54@gmail.com or Whatsapp: +254794536415</p>
      </div>
    </footer>
  );
};

export default Footer;
