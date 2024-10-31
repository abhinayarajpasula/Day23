import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Shopping Cart</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" onClick={() => console.log('Home clicked')}>
                Home
              </button>
            </li>
            {/* Other nav items */}
          </ul>
        </div>
        <div className="cart-icon">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;