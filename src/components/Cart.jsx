import React from 'react';
import { useCart } from './CartContext';

function ShoppingCart({ onClose }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>
        <button className='header-btn' onClick={onClose}>Close</button>
      </div>
      {cartItems.length === 0 ? (
        <p className='empty-cart'>Your Cart is Empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className='price'>Price per 1: ${item.price}</p>
                {item.quantity > 1 && <p className='price'>Quantity: {item.quantity}</p>}
                <p className='price'>Full Price: ${item.price * item.quantity}</p>
              </div>

              <div className='cart-change__buttons'>
              <button className='cart-change' onClick={() => increaseQuantity(item.id)}>
                  +
              </button>

              <button className='cart-change' onClick={() => decreaseQuantity(item.id)}>
                  -
              </button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total Price of all Products: ${calculateTotal()}</strong>
      </div>
      {cartItems.length > 0 && (
      <form className='form'>
        <input type="text" id='name' placeholder="Enter your name" />
        <label htmlFor="name" id='for-name'></label>
        <input type="text" id='email' placeholder="Enter your email" />
        <label htmlFor="email" id='for-email'></label>
        <button type='submit' className="checkout-button">Make an order</button>
      </form>
      )}
    </div>
  );
}

export { ShoppingCart };