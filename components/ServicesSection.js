'use client';

import { useState, useEffect } from 'react';

export default function ServicesSection({ onOpenServiceModal }) {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media?section=servicesSlides');
        const data = await res.json();
        if (data.servicesSlides && data.servicesSlides.length > 0) {
          setServicesData(data.servicesSlides);
        }
      } catch (error) {
        console.error('Error fetching services slides', error);
      }
    };
    fetchMedia();
  }, []);

  if (servicesData.length === 0) return null;

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR CARE PILLARS</span>
          <h2 className="section-title">Comprehensive Geriatric Services</h2>
          <p className="section-desc">
            We don't just provide a bed; we provide a holistic healthcare ecosystem tailored for aging grace.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 style={{ margin: 0, marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ marginTop: 0 }}>{service.desc}</p>
                <button
                  className="btn-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenServiceModal) onOpenServiceModal(service.id);
                  }}
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
