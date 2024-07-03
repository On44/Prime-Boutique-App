import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__banner">
        About Us
      </div>
      <div className="about-us__content container">
        <section className="about-us__section">
          <h2>Our Story</h2>
          <p>
            Welcome to Prime Boutique shop, where fashion meets passion! Our journey began in 2024, with a small yet ambitious team of fashion enthusiasts. Driven by a love for unique styles and high-quality clothing, we set out to create a boutique that offers a carefully curated selection of apparel and accessories for every fashion-forward individual.
          </p>
        </section>
        <section className="about-us__section"><br />
          <h2>Our Mission</h2>
          <p>
            At Prime Boutique, our mission is to provide our customers with a diverse range of stylish, high-quality, and affordable fashion items. We believe that everyone deserves to express their individuality through their wardrobe, and we are here to help make that possible. We strive to create a seamless shopping experience that inspires confidence and joy.
          </p>
        </section>
        <section className="about-us__section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We are committed to offering products that meet the highest standards of quality and craftsmanship.</li>
            <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We prioritize exceptional service and satisfaction.</li>
            <li><strong>Innovation:</strong> We embrace creativity and innovation, constantly seeking new trends and styles to bring to our boutique.</li>
            <li><strong>Sustainability:</strong> We are dedicated to sustainability and ethical practices in all aspects of our business.</li>
          </ul>
        </section>
        <section className="about-us__section">
          <h2>Why Choose Us?</h2>
          <p>
            We understand that fashion is more than just clothing; it's a form of self-expression. That’s why we offer:
          </p>
          <ul>
            <li><strong>Curated Collections:</strong> Our team handpicks each item to ensure it meets our standards of style and quality.</li>
            <li><strong>Exclusive Designs:</strong> Many of our products are exclusive to Prime Boutique Shop, providing you with unique pieces you won’t find elsewhere.</li>
            <li><strong>Exceptional Service:</strong> From easy online shopping to fast delivery and responsive customer support, we are here to make your shopping experience delightful.</li>
          </ul>
        </section>
        <section className="about-us__section">
          <h2>Get in Touch</h2>
          <p>
            We love hearing from our customers! If you have any questions, feedback, or just want to say hello, feel free to reach out to us at jackonyango54@gmail.com or follow us on our social media channels.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
