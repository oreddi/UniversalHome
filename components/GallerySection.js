'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function GallerySection() {
  const { t } = useLanguage();

  const happinessPillars = [
    {
      icon: 'fa-tree',
      title: t('lp1Title'),
      text: t('lp1Desc')
    },
    {
      icon: 'fa-face-smile',
      title: t('lp2Title'),
      text: t('lp2Desc')
    },
    {
      icon: 'fa-hands-holding-child',
      title: t('lp3Title'),
      text: t('lp3Desc')
    },
    {
      icon: 'fa-heart',
      title: t('lp4Title'),
      text: t('lp4Desc')
    }
  ];

  return (
    <section id="gallery" className="section" style={{ background: '#fff', padding: '4rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle" style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {t('lifeSubtitle')}
          </span>
          <h2 className="section-title" style={{ fontSize: '2.4rem', color: 'var(--primary)', marginTop: '0.3rem' }}>
            {t('lifeTitle')}
          </h2>
          <p className="section-desc" style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '700px', margin: '0.5rem auto 0' }}>
            {t('lifeDesc')}
          </p>
        </div>

        {/* Single Park Image + 4 Happiness Points */}
        <div className="section-two-col-grid">
          {/* SINGLE OUTDOOR PARK RECREATION IMAGE */}
          <div className="mobile-img-container">
            <img 
              src="/images/outdoor_park_elderly.png" 
              alt="Joyful outdoor park moments at Universal Home" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '0.8rem 1rem', fontSize: '0.88rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <i className="fas fa-sun" style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }}></i> {t('lifeTag')}
            </div>
          </div>

          {/* 4 POINTS OF HAPPINESS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--dark)', marginBottom: '0.25rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.4rem' }}>
              {t('lifeHeader')}
            </h3>

            <div className="points-subgrid">
              {happinessPillars.map((item, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '1.1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className={`fas ${item.icon}`} style={{ color: 'var(--secondary)' }}></i> {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: 0, lineHeight: '1.5' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

