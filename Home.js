import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>Footwears</p>
      <div>
        {products.map((product) => (
          <div key={product.ProductID}>
            <Link to={`/product/${product.ProductID}`}>
              <h2>{product.ProductName}</h2>
            </Link>
            <p>{product.Description}</p>
            <p>${product.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
