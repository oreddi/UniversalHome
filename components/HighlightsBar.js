'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HighlightsBar() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ margin: '-2.5rem auto 1rem auto', position: 'relative', zIndex: 10 }}>
      <div className="highlights-bar" style={{ background: '#fff', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '1.75rem 2rem', boxShadow: 'var(--shadow-lg)' }}>
        <div className="highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          <div className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="highlight-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0, border: '1px solid var(--primary-border)' }}>
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="highlight-text">
              <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--dark)' }}>{t('hlCaregiver')}</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)' }}>{t('hlCaregiverSub')}</span>
            </div>
          </div>

          <div className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="highlight-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0, border: '1px solid var(--primary-border)' }}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="highlight-text">
              <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--dark)' }}>100% Free Service</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)' }}>Zero charges for destitute</span>
            </div>
          </div>

          <div className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="highlight-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0, border: '1px solid var(--primary-border)' }}>
              <i className="fas fa-utensils"></i>
            </div>
            <div className="highlight-text">
              <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--dark)' }}>{t('hlMeals')}</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)' }}>{t('hlMealsSub')}</span>
            </div>
          </div>

          <div className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="highlight-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0, border: '1px solid var(--primary-border)' }}>
              <i className="fas fa-home"></i>
            </div>
            <div className="highlight-text">
              <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--dark)' }}>{t('hlRooms')}</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)' }}>{t('hlRoomsSub')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

