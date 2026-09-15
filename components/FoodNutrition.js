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
            <span className="section-subtitle">FOOD ITEMS & NUTRITION</span>
            <h3>Fresh, Healthy & Hygienic Meals</h3>
            <p>
              We serve freshly prepared, homely vegetarian meals cooked in a clean and hygienic kitchen every day.
            </p>

            <ul className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>4 Meals a Day:</strong> Morning tea & breakfast, nutritious lunch, evening snacks & tea, and a light homely dinner.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Fresh Ingredients:</strong> Freshly sourced vegetables and wholesome grains used daily for cooking.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Basic Diet Care:</strong> We accommodate basic health needs like soft-cooked or diabetic-friendly food.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Purified Water:</strong> Clean RO purified drinking water available for all residents 24/7.
                </div>
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
