export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        '"Finding Universal Home was a blessing for my mother. Being in the US, I was worried about her post-stroke care. The 24/7 nurses and weekly doctor reports gave me complete peace of mind."',
      name: 'Ramesh Varma',
      relation: 'Son of Resident (USA)',
      initials: 'RV',
    },
    {
      quote:
        '"The food hygiene and beds are top-class. My father has mild dementia, and the staff treats him with so much patience and respect. Highly recommended old age home in Kukatpally!"',
      name: 'Kavitha Reddy',
      relation: 'Daughter of Resident (Hyderabad)',
      initials: 'KR',
    },
    {
      quote:
        '"The daily routine of yoga, morning tea, and evening bhajans keeps my grandfather cheerful and energetic. God bless the team at Universal Home!"',
      name: 'Srinivas Rao',
      relation: 'Grandson of Resident',
      initials: 'SR',
    },
  ];

  return (
    <section id="testimonials" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Families Say About Us</h2>
          <p className="section-desc">Heartfelt experiences shared by children and relatives of our residents.</p>
        </div>

        <div className="services-grid">
          {testimonials.map((item, idx) => (
            <div
              className="service-card"
              key={idx}
              style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}
            >
              <div style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.1rem' }}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p style={{ color: 'var(--gray-600)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                {item.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--dark)' }}>{item.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{item.relation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
