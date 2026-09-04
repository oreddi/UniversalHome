'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function TopBar() {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-info">
          <a href="tel:+919398861612" className="top-info-item" style={{ color: 'var(--white)', fontWeight: 700 }}>
            <i className="fas fa-phone-alt" style={{ color: 'var(--secondary)', marginRight: '0.4rem' }}></i>
            <span>Helpline: +91 9398861612</span>
          </a>
          <a href="https://maps.google.com/?q=Kowkoor,Secunderabad" target="_blank" rel="noreferrer" className="top-info-item" style={{ color: 'var(--white)', textDecoration: 'none' }}>
            <i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', marginRight: '0.4rem' }}></i>
            <span>Kowkoor, Secunderabad</span>
          </a>
        </div>

        <div className="top-actions">
          {/* Multi-Language Selector */}
          <div className="lang-switcher">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
              onClick={() => changeLanguage('te')}
            >
              తెలుగు
            </button>
            <button
              className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
