import React, { useState, useEffect } from "react";
import bag from "../assets/img/bag.svg";
import logo from "../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useCart } from './CartContext'; 

function Navigation({ onOpenCart }) {
  const location = useLocation();
  const [destination, setDestination] = useState('/search');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    if (location.pathname === '/') {
      setDestination('/search');
    } else if (location.pathname === '/search') {
      setDestination('/');
    }
  }, [location]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (onOpenCart) {
      onOpenCart(!isCartOpen);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Planto.</p>
      </div>

      <div className="burger-menu">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#type">Plants Type</a></li>
          <li><a href="#more">More</a></li>
          <li><a href="#contacts">Contact</a></li>
        </ul>
      </div>

      <div className="nav-icons">
        <Link to={destination} className="nav-home" />
        <div className="cart-icon-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={bag}
            alt="bag"
            className="cart-icon"
            onClick={toggleCart}
            style={{ cursor: 'pointer' }}
          />
          {cartCount > 0 && (
            <span
              className="cart-badge"
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '4px 6px',
                fontSize: '12px',
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
        <button className="show-eye">f</button>
      </div>
    </nav>
  );
}

export { Navigation };