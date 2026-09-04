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
          <img src={aboutImage} alt="About Universal Home" />
        </div>
        <div className="about-content" style={{ flex: '1 1 400px' }}>
          <span className="section-subtitle">OUR STORY</span>
          <h2 className="section-title">Built on Empathy, Sustained by Trust</h2>
          <p className="section-desc" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Founded in 2021, Universal Home was born out of a stark realization: the elderly, often the pillars of our families, can sometimes find themselves vulnerable, lonely, or lacking specialized care in their twilight years.
          </p>
          <p className="section-desc" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Our mission is simple. <strong>No elder should feel abandoned.</strong> Whether they require intense post-surgery rehab, dementia support, or simply a warm, loving community to spend their days, we provide an environment that honors their dignity.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              Registered NGO ensuring transparency
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              100% free boarding for destitute seniors
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-800)', fontWeight: '500' }}>
              <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                <i className="fas fa-check"></i>
              </div>
              Certified medical & caregiving staff
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
