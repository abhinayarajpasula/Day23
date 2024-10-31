// src/components/ProductList.js
import React, { useState } from 'react';
import { products as productList } from '../data/products';

const ProductList = ({ onAddToCart, onRemoveFromCart }) => {
  const [products, setProducts] = useState(productList);

  const handleAddToCart = (id) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, inCart: true } : product
    );
    setProducts(updatedProducts);
    onAddToCart(); // Call the parent's function to update cart count
  };

  const handleRemoveFromCart = (id) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, inCart: false } : product
    );
    setProducts(updatedProducts);
    onRemoveFromCart(); // Call the parent's function to update cart count
  };

  return (
    <div className="container">
      <h2>Available Products</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Company:</strong> {product.company}</p>
                  <p className="card-text"><strong>Rating:</strong> {product.rating} ⭐</p>
                  <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
                  {product.inCart ? (
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;