'use client';

import { useState, useEffect } from 'react';
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

      <div className="container hero-content">
        <div className="badge-pill">
          <i className="fas fa-shield-alt"></i> {t('badgeHero')}
        </div>

        <h1 className="hero-title">{t('heroTitle')}</h1>
        <p className="hero-subtitle">{t('heroSubtitle')}</p>

        <div className="hero-btns">
          <a href="/care-guide" className="btn btn-primary">
            <i className="fas fa-compass"></i> {t('btnExploreGuide')}
          </a>

          <button className="video-preview-btn" onClick={onOpenVideoModal}>
            <span className="play-icon-circle">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span>{t('btnVideoTour')}</span>
          </button>

          <a href="/contact" className="btn btn-secondary">
            <i className="fas fa-list-ol"></i> {t('btnNextSteps')}
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
