'use client';
import Link from 'next/link';
export default function FreeServiceSection({ onOpenDonateModal }) {
  const sponsorshipOptions = [
    {
      icon: 'fas fa-utensils',
      tag: 'ANNADANAM SEVA',
      title: 'Sponsor Daily Organic Meals',
      desc: 'Provide wholesome breakfast, lunch, tea, and dinner for our elderly residents. Every meal is cooked fresh in our organic kitchen.',
      actionText: 'Sponsor Meals via UPI',
      badgeColor: 'var(--primary)',
    },
    {
      icon: 'fas fa-pills',
      tag: 'HEALTHCARE SEVA',
      title: 'Sponsor Medicines & Doctor Care',
      desc: 'Fund monthly prescription medicines, diagnostic blood tests, physiotherapy, and emergency medical kits for destitute seniors.',
      actionText: 'Sponsor Healthcare',
      badgeColor: '#0284c7',
    },
    {
      icon: 'fas fa-house-heart',
      tag: '80G TAX EXEMPT',
      title: 'Sponsor Free Senior Boarding',
      desc: 'Support complete monthly shelter, 24/7 nursing care, fresh daily linen, and dignified living for an underprivileged elder.',
      actionText: 'Sponsor Boarding Care',
      badgeColor: '#e11d48',
    },
  ];

  return (
    <section className="section section-bg" id="free-boarding" style={{ padding: '5.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-subtitle">100% NON-PROFIT COMMITMENT</span>
          <h2 className="section-title">Free Boarding & Dignified Senior Care</h2>
          <p className="section-desc">
            Universal Home is a non-profit old age home. We provide dedicated boarding, medical supervision, and nutritious meals to destitute and needy elders supported by public donations.
          </p>
        </div>

        {/* Feature Spotlight Banner with Generous Inner Spacing & Layout Separation */}
        <div className="guide-banner" style={{ marginBottom: '4rem', padding: '3.5rem 3rem' }}>
          <div className="promise-banner-content">
            <div className="promise-text-block">
              <span className="promise-tag">
                <i className="fas fa-hand-holding-heart" style={{ marginRight: '0.4rem' }}></i> OUR PROMISE TO SOCIETY
              </span>
              <h3 className="promise-title">
                No Elder Left Behind Due to Lack of Funds
              </h3>
              <p className="promise-desc">
                Every elderly resident receives equal love, orthopedic bedding, 24/7 nurse monitoring, and dietitian-cooked meals — regardless of financial background.
              </p>
            </div>
            <div className="promise-action-block">
              <Link href="/donate" className="btn btn-donate promise-donate-btn">
                <i className="fas fa-qrcode"></i> Donate via UPI / QR
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsorship & Contribution Cards */}
        <div className="services-grid">
          {sponsorshipOptions.map((item, idx) => (
            <div className="service-card step-card-item" key={idx}>
              <div className="step-card-header">
                <span className="step-badge-text" style={{ color: item.badgeColor, fontSize: '0.8rem' }}>
                  {item.tag}
                </span>
                <div className="step-icon-badge" style={{ background: 'var(--primary-light)', color: item.badgeColor }}>
                  <i className={item.icon}></i>
                </div>
              </div>

              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.desc}</p>

              <button className="btn btn-primary step-btn" onClick={onOpenDonateModal}>
                <i className="fas fa-heart"></i> {item.actionText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
