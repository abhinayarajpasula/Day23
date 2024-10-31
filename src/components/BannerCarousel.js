// src/components/BannerCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BannerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./images/latestpic.jpg"
          alt="Latest Smartphones"
        />
        <Carousel.Caption>
          <h3>Latest Smartphones</h3>
          <p>Check out the latest models available now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./images/summer-sale.jpg"
          alt="Summer Sale"
        />
        <Carousel.Caption>
          <h3>Summer Sale</h3>
          <p>Get up to 50% off on selected items!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./images/new-arrivals.jpg"
          alt="New Arrivals"
        />
        <Carousel.Caption>
          <h3>New Arrivals</h3>
          <p>Explore the latest trends in fashion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./images/exclusive-sale.jpg"
          alt="Exclusive Deals"
        />
        <Carousel.Caption>
          <h3>Exclusive Deals</h3>
          <p>Don't miss out on these amazing deals!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;