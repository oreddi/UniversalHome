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
            <h3>Hygienic Living Environments & Orthopedic Bedding</h3>
            <p>
              We believe cleanliness is the bedrock of senior health. Our facility maintains hospital-grade hygiene standards with comfortable home-like aesthetics.
            </p>

            <ul className="feature-list">
              <li>
                <span className="check">✓</span> <strong>Orthopedic Mattresses:</strong> High-density memory foam and semi-fowler medical beds for bedridden support.
              </li>
              <li>
                <span className="check">✓</span> <strong>Daily Linen Change:</strong> Bedsheets, pillow covers, and blankets are laundered and sanitized every single day.
              </li>
              <li>
                <span className="check">✓</span> <strong>Anti-Bacterial Housekeeping:</strong> Floors washed twice daily with eco-friendly non-toxic disinfectants.
              </li>
              <li>
                <span className="check">✓</span> <strong>Anti-Skid Grab-Bar Bathrooms:</strong> Safety handrails, non-slip tiles, and hot water geysers in every attached washroom.
              </li>
            </ul>

            <a href="/contact" className="btn btn-outline">
              Inspect Our Facilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
