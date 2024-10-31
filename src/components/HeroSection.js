// HeroSection.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;