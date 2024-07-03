import React, { useState } from 'react';
import './Body.css';

const products = [
  {
    id: 1,
    name: 'Sport Shoes',
    oldPrice: 2000,
    newPrice: 1500,
    imgSrc: '/sport shoes.jpg',
  },
  {
    id: 2,
    name: 'Polabeer Shoes',
    oldPrice: 4599,
    newPrice: 3599,
    imgSrc: '/Polabeer Shoes.jpg',
  },
  {
    id: 3,
    name: 'HikeUp Shoes',
    oldPrice: 3999,
    newPrice: 2499,
    imgSrc: '/HikeUp Shoes.jpg',
  },
  {
    id: 4,
    name: 'Exe US sportshoes',
    oldPrice: 2999,
    newPrice: 2300,
    imgSrc: 'Exe US sportshoes.jpg',
  },
  {
    id: 5,
    name: 'Dula coac shoes',
    oldPrice: 3700,
    newPrice: 3000,
    imgSrc: '/Dula coac shoes.jpg',
  },
];

const Product = ({ product, addToCart }) => (
  <div className="product">
     <div className="product-image-container">
    <img src={product.imgSrc} alt={product.name} className="product-image" />
    </div>
    <p>{product.name}:</p>
    <p>
      <span className="price-was">Was Ksh. {product.oldPrice}</span>,{' '}
      <span className="price-now">Now Ksh. {product.newPrice}</span>
    </p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    <hr className="separator" />
  </div>
);

const Body = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="body-container">
      <h2>Prime Boutique - Online Shop across East Africa.</h2>
      <p>
        Prime is East Africa's leading online shopping mall. It was launched in June 2024 with the mission of "Enriching Lives for Africa".
      </p>
      <p>
        Prime serves a retail-customer base that continues to grow exponentially, offering products that span various categories including Outwears such as Men Shoes, Women Shoes, Accessories etc, Children Clothings, Fashion bag, Baby Products, makeup and much more. Prime continues to expand the mall, with the scope of offerings that will increase in variety, simplicity and convenience.
      </p>
      <p>
        The range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; order delivery-tracking, dedicated customer service support and many other premium services. The company is highly customer-centric and are committed towards finding innovative ways of improving the customers' shopping experience.
      </p>
      <p>
        Now, shopping with Prime App will bring you millions of cash rewards, best customer services, and track your order at anytime. We ship our products to all towns in Kenya including and Across East Africa: Juba Sudan, Kampala Uganda, Dar es Salaam Tanzania, Kigali Rwanda, Somalia. Prime Boutique shop will guarantee same-day working day shipping on all orders placed before 3:00pm Monday to Friday. Download Prime App APK and enjoy best services online in Kenya.
      </p>
      <hr className="separator" />
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <p key={index}>{item.name} - Ksh. {item.newPrice}</p>
            ))}
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
