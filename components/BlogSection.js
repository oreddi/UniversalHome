export default function BlogSection() {
  const blogs = [
    {
      date: 'JUNE 24, 2026',
      title: 'Healthy Diet for Seniors: Essential Nutrition Tips',
      image: '/images/nutritious-meals.png',
      desc: 'Discover key nutrients needed by elders to retain bone density, boost immunity, and support heart health as they age.',
    },
    {
      date: 'JUNE 21, 2026',
      title: 'Celebrating International Yoga Day with Our Family',
      image: '/images/hero-2.png',
      desc: 'A deep dive into how simple morning pranayama and gentle joint stretches ward off arthritis stiffness and depression.',
    },
    {
      date: 'JUNE 15, 2026',
      title: "Understanding Early Signs of Alzheimer's & Dementia",
      image: '/images/dementia-care.png',
      desc: 'How structured daily routines and compassionate cognitive games can slow down memory loss in senior citizens.',
    },
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">HEALTH TIPS & GUIDES</span>
          <h2 className="section-title">Latest Senior Wellness Articles</h2>
          <p className="section-desc">Expert insights on geriatric care, dementia prevention, and elder nutrition.</p>
        </div>

        <div className="services-grid">
          {blogs.map((item, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="service-body">
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>
                  {item.date}
                </span>
                <h3 className="service-title" style={{ marginTop: '0.3rem' }}>
                  {item.title}
                </h3>
                <p className="service-desc">{item.desc}</p>
                <a href="#contact" className="service-link">
                  Read Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
