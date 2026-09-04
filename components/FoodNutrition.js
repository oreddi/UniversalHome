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
              <strong>Dietitian Curated Menu</strong>
              <span>100% Pure Organic Vegetarian Meals</span>
            </div>
          </div>
          <div className="spotlight-text">
            <span className="section-subtitle">FOOD ITEMS & NUTRITION</span>
            <h3>Delicious, Hygienic & Doctor-Approved Nutrition</h3>
            <p>
              Proper nutrition accelerates recovery, boosts immunity, and brings joy to everyday life. All meals are prepared fresh in our modern commercial kitchen.
            </p>

            <ul className="feature-list">
              <li>
                <span className="check">✓</span> <strong>Custom Health Diets:</strong> Special diabetic, hypertension (low salt), soft pureed, and renal diets available.
              </li>
              <li>
                <span className="check">✓</span> <strong>Fresh Organic Vegetables:</strong> Sourced daily from local organic farms for max vitamins and minerals.
              </li>
              <li>
                <span className="check">✓</span> <strong>4 Meals a Day:</strong> Morning tea, rich breakfast, complete lunch thali, evening tea & snack, and light dinner.
              </li>
              <li>
                <span className="check">✓</span> <strong>Purified Drinking Water:</strong> 5-stage RO UV water filtration stations available across every floor.
              </li>
            </ul>

            <a href="/contact" className="btn btn-primary">
              Download Sample Diet Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
