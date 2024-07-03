import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Body from './components/Body';
import Menu from './components/Menu';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router><br/>
    <center><strong>PRIME BOUTIQUE ONLINE SHOP</strong></center><br/>
    <center><p1><strong>Create Account</strong></p1></center>
      <center><Register/></center>
      <center><p1><strong>Already have Account</strong></p1></center>
      <center><Login/></center><br/>
      <Header />
      <Menu/><br/>
      <Body/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
