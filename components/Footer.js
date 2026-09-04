'use client';

import Link from 'next/link';

export default function Footer({ onOpenDonateModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Universal Home</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              Registered non-profit old age home & orphanage in Kowkoor, Secunderabad. Providing 100% free boarding, medical supervision, and organic food for destitute seniors since 2011.
            </p>
            <button className="btn btn-donate" onClick={onOpenDonateModal}>
              <i className="fas fa-heart"></i> Donate / Sponsor an Elder
            </button>
          </div>

          <div className="footer-links">
            <h4>Quick Navigation</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Care Services</Link>
              </li>
              <li>
                <Link href="/facilities">Free Boarding & Campus</Link>
              </li>
              <li>
                <Link href="/contact">Book a Visit</Link>
              </li>
              <li>
                <button onClick={onOpenDonateModal} style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: 700, padding: 0, cursor: 'pointer' }}>
                  Donate via UPI / QR
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Senior Care Services</h4>
            <ul>
              <li>24/7 Qualified Nursing</li>
              <li>In-House Physician Visits</li>
              <li>100% Organic Vegetarian Meals</li>
              <li>Dementia & Memory Support</li>
              <li>Post-Stroke Rehabilitation</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> Kowkoor, Secunderabad, TS
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
