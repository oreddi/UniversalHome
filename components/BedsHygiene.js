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
            <span className="section-subtitle">BEDS & CLEANLINESS</span>
            <h3>Clean Living Environments & Comfortable Beds</h3>
            <p>
              We believe cleanliness is the bedrock of senior health. Our facility maintains strict cleanliness standards to ensure a comfortable and healthy home.
            </p>

            <ul className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Comfortable Beds:</strong> Clean, comfortable mattresses ensuring a good night's sleep.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Daily Linen Change:</strong> Bedsheets, pillow covers, and blankets are laundered and changed regularly.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Daily Housekeeping:</strong> Floors and rooms are washed and swept daily to keep the environment fresh.
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                  <strong>Safe Washrooms:</strong> Safety handrails, non-slip tiles, and hot water in every washroom to prevent slips.
                </div>
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
