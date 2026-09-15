'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [aboutImage, setAboutImage] = useState('/images/hero-1.png');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.aboutImage) {
          setAboutImage(data.aboutImage);
        }
      } catch (error) {
        console.error('Error fetching about image', error);
      }
    };
    fetchMedia();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="about-img-box" style={{ flex: '1 1 400px' }}>
          <img src={aboutImage} alt="About Universal Home" style={{ borderRadius: '4px' }} />
        </div>
        <div className="about-content" style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Who We Are</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              Registered NGO
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              Free Boarding & Food
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              Care Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
