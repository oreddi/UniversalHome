export default function FacilitiesSection() {
  const facilities = [
    {
      icon: 'fas fa-ambulance',
      title: '24/7 Ambulance Service',
      desc: 'Immediate emergency tie-ups with top multi-specialty hospitals nearby.',
    },
    {
      icon: 'fas fa-wheelchair',
      title: 'Wheelchair Accessible',
      desc: 'Ramps, wide doors, passenger lifts, and barrier-free pathways.',
    },
    {
      icon: 'fas fa-gopuram',
      title: 'In-Campus Temple',
      desc: 'Serene worship hall for daily prayers, rituals, and peaceful meditation.',
    },
    {
      icon: 'fas fa-tree',
      title: 'Walking Garden & Lawn',
      desc: 'Lush green walking trails with wooden park benches and shade.',
    },
    {
      icon: 'fas fa-video',
      title: 'CCTV & 24/7 Security',
      desc: 'Complete campus surveillance so families have total peace of mind.',
    },
    {
      icon: 'fas fa-wifi',
      title: 'WiFi & Video Call Setup',
      desc: 'High-speed internet and iPads for seniors to video talk with children abroad.',
    },
  ];

  return (
    <section id="facilities" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR INFRASTRUCTURE</span>
          <h2 className="section-title">World-Class Senior Facilities</h2>
          <p className="section-desc">Designed specifically for safety, ease of mobility, and medical preparedness.</p>
        </div>

        <div className="highlights-grid">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="highlight-item"
              style={{ background: 'var(--light-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}
            >
              <div className="highlight-icon">
                <i className={fac.icon}></i>
              </div>
              <div className="highlight-text">
                <h4>{fac.title}</h4>
                <p>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
