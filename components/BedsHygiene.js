'use client';

import { useState, useEffect } from 'react';

export default function BedsHygiene() {
  const [bedsImage, setBedsImage] = useState('/images/clean-bedroom.png');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.bedsImage) {
          setBedsImage(data.bedsImage);
        }
      } catch (error) {
        console.error('Error fetching beds image', error);
      }
    };
    fetchMedia();
  }, []);

  return (
    <section id="beds-hygiene" className="section">
      <div className="container">
        <div className="feature-spotlight">
          <div className="spotlight-img-wrap">
            <img src={bedsImage} alt="Clean Beds & Rooms" />
            <div className="spotlight-badge">
              <strong>100% Hygienic Promise</strong>
              <span>Freshly washed & disinfected daily</span>
            </div>
          </div>
          <div className="spotlight-text">
            <ul className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <span className="check">✓</span> Comfortable Beds
              </li>
              <li>
                <span className="check">✓</span> Daily Linen Change
              </li>
              <li>
                <span className="check">✓</span> Daily Cleaning
              </li>
              <li>
                <span className="check">✓</span> Safe Washrooms
              </li>
            </ul>

            <a href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>
              Inspect Our Facilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
