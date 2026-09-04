'use client';

import { useState, useEffect } from 'react';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media?section=gallerySlides');
        const data = await res.json();
        if (data.gallerySlides) {
          setGalleryData(data.gallerySlides);
        }
      } catch (error) {
        console.error('Error fetching gallery slides', error);
      }
    };
    fetchMedia();
  }, []);

  const filteredItems = filter === 'all' ? galleryData : galleryData.filter((item) => item.category === filter);

  if (galleryData.length === 0) return null;

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CAMPUS GLIMPSE</span>
          <h2 className="section-title">Life at Universal Home</h2>
          <p className="section-desc">Explore moments of care, laughter, activity, and comfort.</p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Photos
          </button>
          <button
            className={`filter-btn ${filter === 'care' ? 'active' : ''}`}
            onClick={() => setFilter('care')}
          >
            Nursing & Doctors
          </button>
          <button
            className={`filter-btn ${filter === 'routine' ? 'active' : ''}`}
            onClick={() => setFilter('routine')}
          >
            Yoga & Routine
          </button>
          <button
            className={`filter-btn ${filter === 'dining' ? 'active' : ''}`}
            onClick={() => setFilter('dining')}
          >
            Food & Dining
          </button>
          <button
            className={`filter-btn ${filter === 'living' ? 'active' : ''}`}
            onClick={() => setFilter('living')}
          >
            Rooms & Campus
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div className="gallery-item" key={item.id} data-category={item.category}>
              <img src={item.image} alt={item.title || 'Gallery Image'} />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus gallery-icon"></i>
                <h4>{item.title || 'View'}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
