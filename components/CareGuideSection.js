'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CareGuideSection() {
  const { t } = useLanguage();

  return (
    <section className="section care-guide-section" id="care-guide" style={{ background: '#fff', padding: '4rem 0', borderTop: '2px solid var(--gray-200)', borderBottom: '2px solid var(--gray-200)' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-header" id="about" style={{ marginBottom: '2.5rem', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: 'bold', letterSpacing: '1px', fontSize: '0.9rem' }}>{t('wwdSubtitle')}</span>
          <h2 className="section-title" style={{ fontSize: '2.4rem', color: 'var(--primary)', marginTop: '0.3rem' }}>{t('wwdTitle')}</h2>
        </div>

        {/* Filled Layout: Single Image on Left + Rich Info Block on Right */}
        <div className="section-two-col-grid">

          {/* SINGLE IMAGE (ChildrensFood.jpeg) */}
          <div className="mobile-img-container">
            <img
              src="/realUploads/ChildrensFood.jpeg"
              alt="Food Distribution at Universal Home"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '0.8rem 1rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <i className="fas fa-heart" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> {t('wwdImageTag')}
            </div>
          </div>

          {/* CONSOLIDATED FULL INFO BLOCK ("WHAT IS WHAT") */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Overview */}
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--dark)', marginBottom: '0.75rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>
                {t('wwdHeader')}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '1rem', lineHeight: '1.6' }}>
                {t('wwdDesc')}
              </p>
            </div>

            {/* Structured Points */}
            <div className="points-subgrid">

              <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-hand-holding-heart" style={{ color: 'var(--secondary)' }}></i> {t('wwdNGO')}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: 0 }}>
                  {t('wwdNGODesc')}
                </p>
              </div>

              <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-user-friends" style={{ color: 'var(--secondary)' }}></i> {t('wwdCare')}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: 0 }}>
                  {t('wwdCareDesc')}
                </p>
              </div>

              <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-utensils" style={{ color: 'var(--secondary)' }}></i> {t('wwdFood')}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: 0 }}>
                  {t('wwdFoodDesc')}
                </p>
              </div>

              <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-bed" style={{ color: 'var(--secondary)' }}></i> {t('wwdBeds')}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: 0 }}>
                  {t('wwdBedsDesc')}
                </p>
              </div>

            </div>

            {/* Bottom Callout Bar */}
            <div style={{ background: 'var(--primary-light)', borderLeft: '4px solid var(--primary)', padding: '0.85rem 1.25rem', borderRadius: '4px', fontSize: '0.92rem', color: 'var(--dark)', marginTop: '1.25rem' }}>
              <strong>Community Supported:</strong> Every single meal, bed, medical care, and clothing item is provided through the generous support of our community.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

