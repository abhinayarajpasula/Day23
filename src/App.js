// src/App.js
import React, { useState } from 'react';
import BannerCarousel from './components/BannerCarousel';
import ProductList from './components/ProductList';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent count from going negative
  };

  return (
    <div className="App">
      <NavBar cartCount={cartCount} />
      <BannerCarousel />
      <ProductList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;