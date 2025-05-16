import React, { useState } from 'react';
import bag from '../assets/img/bag.svg';
import { API_URL } from '../config';
import { useCart } from './CartContext';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setError('Будь ласка введіть назву рослини');
      return;
    }

    setError(null);

    fetch(`${API_URL}&q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setSearchResults(data.data);
        } else {
          setSearchResults([]);
          setError('Нічого не знайдено');
        }
      })
      .catch((error) => {
        console.error('Помилка', error);
        setError('Виникла помилка при пошуку рослин');
        setSearchResults([]);
      });
  };

  const moneyRandom = () => {
    const min = 5;
    const max = 75;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section className="search">
      <h1>Search Plants</h1>
      <article className="search-block">
        <input
          type="text"
          id="searchQuery"
          placeholder="Enter plant name"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        {error && <p>{error}</p>}
      </article>
      <article className="search-container">
        {searchResults.map((plant) => (
          <article key={plant.id} className="plant">
            <img src={plant.default_image?.medium_url} alt={plant.common_name} />
            <div className="plant-info">
              <h2>{plant.common_name}</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus magni non pariatur dolorum optio quo?</p>
              <div>
                <h2>$ {moneyRandom()}</h2>
                <button
                  className="plant-btn buy-btn"
                  onClick={() => {
                    addToCart({
                      id: plant.id,
                      name: plant.common_name,
                      price: moneyRandom(),
                      image: plant.default_image?.medium_url,
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

export { Search };