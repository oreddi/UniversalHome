'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HowWeHelpSection() {
  const { t } = useLanguage();

  const points = [
    {
      icon: 'fa-hands-helping',
      title: t('p1Title'),
      desc: t('p1Desc')
    },
    {
      icon: 'fa-bowl-food',
      title: t('p2Title'),
      desc: t('p2Desc')
    },
    {
      icon: 'fa-smile',
      title: t('p3Title'),
      desc: t('p3Desc')
    },
    {
      icon: 'fa-users',
      title: t('p4Title'),
      desc: t('p4Desc')
    }
  ];

  return (
    <section style={{ background: 'var(--light-bg)', padding: '3.5rem 0', borderBottom: '2px solid var(--gray-200)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            {t('hwtTag')}
          </span>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginTop: '0.3rem' }}>
            {t('hwtTitle')}
          </h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            {t('hwtSub')}
          </p>
        </div>

        {/* 4 Feature Points Grid - Mobile Friendly */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {points.map((pt, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#fff', 
                padding: '1.75rem', 
                borderRadius: '10px', 
                border: '1px solid var(--gray-200)', 
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'var(--primary-light)', 
                  color: 'var(--primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  border: '1px solid var(--primary-border)'
                }}
              >
                <i className={`fas ${pt.icon}`}></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--dark)', marginBottom: '0.5rem' }}>
                {pt.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.92rem', lineHeight: '1.5', margin: 0 }}>
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="sponsor-banner">
          <div>
            <h4 className="sponsor-title">{t('sponsorTag')}</h4>
            <p className="sponsor-desc">{t('sponsorSub')}</p>
          </div>
          <a href="tel:+919398861612" className="sponsor-btn">
            <i className="fas fa-phone-alt fa-flip-horizontal"></i> {t('btnSponsorCall')}
          </a>
        </div>

      </div>
    </section>
  );
}
