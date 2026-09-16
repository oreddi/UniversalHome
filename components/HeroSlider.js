'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSlider({ onOpenDonateModal, onOpenVideoModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlides, setHeroSlides] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Fetch media from the server
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.heroSlides && data.heroSlides.length > 0) {
          setHeroSlides(data.heroSlides);
        } else {
          // Fallback static if no data
          setHeroSlides([
            { id: '0', image: '/images/hero-1.png' },
            { id: '1', image: '/images/hero-2.png' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching hero slides', error);
      }
    };
    fetchMedia();
  }, []);

  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  if (heroSlides.length === 0) return null;

  return (
    <section id="home" className="hero">
      {/* Background Image Slider (Optimized Static Photos on Mobile) */}
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-content" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 'bold', textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>{t('heroTitle')}</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{t('heroSubtitle')}</p>

        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/donate" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
            <i className="fas fa-heart"></i> Donate & Support Us
          </Link>
          
          <a href="/contact" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
            <i className="fas fa-phone"></i> Contact Us
          </a>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="slider-controls">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
