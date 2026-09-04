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
          <li>
            <Link href="/" className="nav-link" onClick={closeMobileMenu}>
              {t('navHome')}
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link" onClick={closeMobileMenu}>
              {t('navServices')}
            </Link>
          </li>
          <li>
            <Link href="/facilities" className="nav-link" onClick={closeMobileMenu}>
              {t('navBoarding')}
            </Link>
          </li>
          <li>
            <Link href="/care-guide" className="nav-link" onClick={closeMobileMenu}>
              {t('navGuide')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
              {t('navContact')}
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
          
          <button className="btn btn-donate nav-donate-btn" onClick={onOpenDonateModal}>
            <i className="fas fa-heart"></i> {t('btnDonate')}
          </button>

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
