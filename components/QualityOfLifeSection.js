export default function QualityOfLifeSection() {
  const pillarsOfBeing = [
    {
      icon: 'fas fa-smile-beam',
      title: 'Freedom from Isolation',
      desc: 'Seniors transition from lonely rooms into a vibrant community of peers, forming lifelong friendships and sharing daily laughter.',
    },
    {
      icon: 'fas fa-heart-pulse',
      title: 'Restored Health & Energy',
      desc: 'With 24/7 medication timeliness and organic nutrition, elders regain physical strength, joint flexibility, and vitality.',
    },
    {
      icon: 'fas fa-brain',
      title: 'Cognitive & Mental Stimulation',
      desc: 'Daily memory puzzles, art therapy, music sessions, and daily news discussions keep senior minds active and sharp.',
    },
    {
      icon: 'fas fa-hands-praying',
      title: 'Spiritual Fulfillment',
      desc: 'Daily temple prayers, devotional bhajans, and evening meditation give residents profound inner peace and purposeful living.',
    },
  ];

  return (
    <section className="section section-bg" id="quality-of-life">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">THE TRANSFORMATION</span>
          <h2 className="section-title">Developing Their Quality of Being</h2>
          <p className="section-desc">
            Care goes beyond medicine and food. We nourish the human spirit so every resident lives with dignity, joy, and emotional contentment.
          </p>
        </div>

        <div className="highlights-grid">
          {pillarsOfBeing.map((item, idx) => (
            <div
              key={idx}
              className="highlight-item"
              style={{
                background: 'var(--light-bg)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                className="highlight-icon"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem',
                  fontSize: '1.8rem',
                }}
              >
                <i className={item.icon}></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
