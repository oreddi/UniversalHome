'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function DonationSection({ onOpenDonateModal }) {
  const { t } = useLanguage();

  return (
    <section id="donate" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#fff', padding: '4rem 0', textDecoration: 'none' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {t('supTag')}
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              {t('supTitle')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Your generous contribution helps provide nutritious food, secure shelter, clothing, and dignified care to abandoned seniors and children.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button 
              className="btn" 
              onClick={onOpenDonateModal} 
              style={{ background: 'var(--secondary)', color: '#fff', fontSize: '1.2rem', padding: '1rem 2.5rem', fontWeight: 'bold', boxShadow: '0 6px 20px rgba(234, 88, 12, 0.4)', borderRadius: '30px' }}
            >
              <i className="fas fa-heart" style={{ marginRight: '0.5rem' }}></i> {t('btnDonateQR')}
            </button>
            <a 
              href="tel:+919398861612" 
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', fontSize: '1.1rem', padding: '0.9rem 2rem', fontWeight: 'bold', borderRadius: '30px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <i className="fas fa-phone-alt"></i> {t('btnCallUs')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

