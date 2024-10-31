// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.company}</h6>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          Rating: {product.rating} ★
        </p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;