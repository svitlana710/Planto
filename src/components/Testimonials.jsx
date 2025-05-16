import React, { useState, useEffect } from 'react';
import img_13 from '../assets/img/img-13.webp';
import img_12 from '../assets/img/img-12.webp';
import img_11 from '../assets/img/img-11.webp';
import img_10 from '../assets/img/img-10.webp';

function Testimonials() {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem('testimonials');
    return storedReviews ? JSON.parse(storedReviews) : [
      { id: 1, author: 'Maxn Raval', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', image: img_12, rating: 4 },
      { id: 2, author: 'Lii Thakur', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', image: img_11, rating: 5 },
      { id: 3, author: 'Alice Ward', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', image: img_10, rating: 5 },
    ];
  });

  const [newReview, setNewReview] = useState({ author: '', text: '', image: '', rating: 5 });
  const [isAddingReview, setIsAddingReview] = useState(false);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setNewReview(prevReview => ({ ...prevReview, rating }));
  };

  const handleAddReviewClick = () => {
    setIsAddingReview(true);
  };

  const handleSaveReview = () => {
    if (newReview.author && newReview.text) {
      setReviews(prevReviews => [...prevReviews, { id: Date.now(), ...newReview, image: newReview.image || img_13 }]);
      setNewReview({ author: '', text: '', image: '', rating: 5 });
      setIsAddingReview(false);
    } else {
      alert('Будь ласка введіть ім\'я та текст відгуку');
    }
  };

  const handleCancelAddReview = () => {
    setIsAddingReview(false);
    setNewReview({ author: '', text: '', image: '', rating: 5 });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < rating ? 'filled' : ''}>★</span>);
    }
    return stars;
  };

  const renderRatingSelector = () => (
    <div className="rating-selector">
      <label>Оцінка:</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={star <= newReview.rating ? 'filled' : ''}
            onClick={() => handleRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="testimonials">
      <article className="testimonials-title">
        <h2>Customer Review</h2>
      </article>
      <article className="testimonials-container">
        {reviews.map(review => (
          <article key={review.id} className="testimonials-block">
            <div className="testimonials-profile">
              <img src={review.image} alt="person" />
              <div>
                <h3>{review.author}</h3>
                {renderStars(review.rating)}
              </div>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </article>
      {!isAddingReview ? (
        <button className='testimonials-btn' onClick={handleAddReviewClick}>Додати відгук</button>
      ) : (
        <div className="testimonials-block">
          <h3>Додати відгук</h3>
          <input
            type="text"
            name="author"
            placeholder="Ваше ім'я"
            value={newReview.author}
            onChange={handleInputChange}
          />
          <textarea
            name="text"
            placeholder="Ваш відгук"
            value={newReview.text}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Посилання на фото (необов'язково)"
            value={newReview.image}
            onChange={handleInputChange}
          />
          <div className="form-actions">
            <button className='testimonials-btn' onClick={handleSaveReview}>Зберегти відгук</button>
            <button className='testimonials-btn' onClick={handleCancelAddReview}>Скасувати</button>
          </div>
        </div>
      )}
    </section>
  );
}

export { Testimonials };