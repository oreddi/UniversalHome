'use client';

import { useState, useEffect } from 'react';

export default function FoodNutrition() {
  const [foodImage, setFoodImage] = useState('/images/nutritious-meals.png');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.foodImage) {
          setFoodImage(data.foodImage);
        }
      } catch (error) {
        console.error('Error fetching food image', error);
      }
    };
    fetchMedia();
  }, []);

  return (
    <section id="food-nutrition" className="section section-bg">
      <div className="container">
        <div className="feature-spotlight reverse">
          <div className="spotlight-img-wrap">
            <img src={foodImage} alt="Food & Nutrition" />
            <div className="spotlight-badge">
              <strong>Homely Food</strong>
              <span>Pure Vegetarian Meals</span>
            </div>
          </div>
          <div className="spotlight-text">
            <ul className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <span className="check">✓</span> 4 Meals a Day
              </li>
              <li>
                <span className="check">✓</span> Fresh Ingredients
              </li>
              <li>
                <span className="check">✓</span> Basic Diet Care
              </li>
              <li>
                <span className="check">✓</span> Purified Water
              </li>
            </ul>

            <a href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Contact Us for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
