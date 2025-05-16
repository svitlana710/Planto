import React from 'react';
import bag from '../assets/img/bag.svg';
import img_2 from '../assets/img/img-2.webp';
import img_3 from '../assets/img/img-3.webp';
import img_4 from '../assets/img/img-4.webp';
import img_5 from '../assets/img/img-5.webp';
import img_6 from '../assets/img/img-6.webp';
import img_7 from '../assets/img/img-7.webp';
import { useCart } from './CartContext';

const goodsData = [
  { id: 's0', name: 'Calathea', price: 30.2, image: img_7 },
  { id: 's1', name: 'Diffenbachia', price: 26.8, image: img_2 },
  { id: 's2', name: 'Caryophyllales', price: 14.5, image: img_6 },
  { id: 's3', name: 'Monstera', price: 15.7, image: img_3 },
  { id: 's4', name: 'Sansevieria', price: 5, image: img_4 },
  { id: 's5', name: 'Havorthia', price: 20.3, image: img_5 },
];

function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="selling" id="type">
      <article className="selling-title">
        <h2>Our Top Selling</h2>
      </article>
      <article className="selling-products">
        {goodsData.map((good) => (
          <article className="plant" key={good.id}>
            <img src={good.image} alt="plant" />
            <div className="plant-info">
              <h2>{good.name}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div>
                <h2>$ {good.price}</h2>
                <button
                  className="plant-btn buy-btn"
                  onClick={() => {
                    addToCart({
                      id: good.id,
                      name: good.name,
                      price: good.price,
                      image: good.image,
                      quantity: 1, 
                    });
                  }}
                >
                  <img src={bag} alt="bag" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
}

export { Shop };