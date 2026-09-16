'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer({ onOpenDonateModal }) {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Universal Home</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              Registered non-profit old age home & orphanage in Kowkur, Hyderabad. Providing dedicated boarding, compassionate care, and nutritious food for destitute seniors since 2011.
            </p>
            <Link href="/donate" className="btn btn-donate">
              <i className="fas fa-heart"></i> {t('btnDonate')}
            </Link>
          </div>

          <div className="footer-links">
            <h4>{t('footQuick')}</h4>
            <ul>
              <li>
                <Link href="/">{t('navHome')}</Link>
              </li>
              <li>
                <Link href="#about">{t('navAbout')}</Link>
              </li>
              <li>
                <Link href="#care-guide">{t('navWhatWeDo')}</Link>
              </li>
              <li>
                <Link href="#gallery">{t('navGallery')}</Link>
              </li>
              <li>
                <button onClick={onOpenDonateModal} style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: 700, padding: 0, cursor: 'pointer' }}>
                  {t('navDonateQR')}
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Senior Care Services</h4>
            <ul>
              <li>24/7 Caregiver Support</li>
              <li>Safety & Emergency Care</li>
              <li>Daily Homely Meals</li>
              <li>Safe & Secure Environment</li>
              <li>Social Companionship</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', marginTop: '0.2rem' }}></i>
                <span>Flat no 5, Block no 3, RGK Bharathi nagar, Kowkur, Hyderabad - 500010</span>
              </li>
              <li>
                <i className="fas fa-phone-alt" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> +91 9398861612
              </li>
              <li>
                <i className="fas fa-envelope" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> info@universalhome.org
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Universal Home Old Age Home & Orphanage. 80G Tax Exempted NGO.</p>
          <p style={{ fontSize: '0.85rem' }}>Dignified Geriatric Care for Every Elder</p>
        </div>
      </div>
    </footer>
  );
}
