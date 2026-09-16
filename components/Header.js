'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header({ onOpenDonateModal }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang, changeLanguage, t } = useLanguage();

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="header">
      <div className="container navbar">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-badge">U</div>
          <div className="logo-text-group">
            <span className="logo-title">Universal Home</span>
            <span className="logo-subtext">{t('subtext')}</span>
          </div>
        </Link>

        {/* Clean Navigation Links */}
        <ul className={`nav-menu ${isMobileOpen ? 'active' : ''}`} id="navMenu">
          {/* Mobile Drawer Close Button */}
          <li className="mobile-drawer-header">
            <button 
              onClick={closeMobileMenu}
              className="mobile-close-btn"
              aria-label="Close Menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </li>
          <li>
            <Link href="/" className="nav-link" onClick={closeMobileMenu}>
              {t('navHome')}
            </Link>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>
              {t('navAbout')}
            </a>
          </li>
          <li>
            <a href="#care-guide" className="nav-link" onClick={closeMobileMenu}>
              {t('navWhatWeDo')}
            </a>
          </li>
          <li>
            <Link href="/gallery" className="nav-link" onClick={closeMobileMenu}>
              {t('navGallery')}
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              className="nav-link"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'bold', color: 'var(--primary)' }}
              onClick={closeMobileMenu}
            >
              {t('navDonateQR')}
            </Link>
          </li>

          {/* Mobile Drawer Language Selector */}
          <li className="mobile-drawer-footer">
            <div className="mobile-drawer-lang">
              <span className="drawer-lang-label">Select Language:</span>
              <div className="lang-switcher">
                <button
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('en');
                    closeMobileMenu();
                  }}
                >
                  EN
                </button>
                <button
                  className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('te');
                    closeMobileMenu();
                  }}
                >
                  తెలుగు
                </button>
                <button
                  className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('hi');
                    closeMobileMenu();
                  }}
                >
                  हिंदी
                </button>
              </div>
            </div>

            <a href="tel:+919398861612" className="mobile-drawer-call-btn">
              <i className="fas fa-phone-alt"></i> Call Helpline (+91 9398861612)
            </a>
          </li>
        </ul>

        {/* Desktop & Mobile Actions */}
        <div className="nav-actions">
          <Link href="/contact" className="btn btn-secondary nav-visit-btn">
            <i className="fas fa-calendar-check"></i> {t('btnVisit')}
          </Link>

          <Link href="/donate" className="btn btn-donate nav-donate-btn">
            <i className="fas fa-heart"></i> {t('btnDonate')}
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle"
            id="mobileToggle"
            aria-label="Toggle Navigation Menu"
            onClick={toggleMobileMenu}
          >
            <i className={isMobileOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
