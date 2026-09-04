export default function RoomsSection() {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">ACCOMMODATION</span>
          <h2 className="section-title">Comfortable Rooms & Pricing Tiers</h2>
          <p className="section-desc">
            Transparent, affordable boarding plans with 24/7 nursing, meals, and laundry included.
          </p>
        </div>

        <div className="rooms-grid">
          {/* Room 1 */}
          <div className="room-card">
            <h3 className="room-title">Triple Sharing Room</h3>
            <div className="room-price">
              ₹12,000 <span>/ month</span>
            </div>
            <p className="room-desc">Ideal for social seniors who enjoy companionship in a spacious, well-ventilated room.</p>
            <ul className="room-features">
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Orthopedic Single Bed & Closet
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> 24/7 Nursing & Vitals Check
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> 4 Organic Veg Meals Daily
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Attached Bathroom with Hot Water
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Daily Housekeeping & Laundry
              </li>
            </ul>
            <a href="#contact" className="btn btn-outline">
              Book Room
            </a>
          </div>

          {/* Room 2: Featured */}
          <div className="room-card featured">
            <div className="featured-tag">MOST POPULAR</div>
            <h3 className="room-title">Twin Sharing Room</h3>
            <div className="room-price">
              ₹18,000 <span>/ month</span>
            </div>
            <p className="room-desc">Balanced privacy and social connection with personalized bedside assistance.</p>
            <ul className="room-features">
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Air Conditioned Room
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Medical Semi-Fowler Bed
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Dedicated Attendant Assistance
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> TV & High-Speed WiFi
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Doctor Visits Included
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary">
              Book Room
            </a>
          </div>

          {/* Room 3 */}
          <div className="room-card">
            <h3 className="room-title">Private Deluxe Suite</h3>
            <div className="room-price">
              ₹28,000 <span>/ month</span>
            </div>
            <p className="room-desc">Exclusive individual room for complete privacy, comfort, and personal nurse attendant.</p>
            <ul className="room-features">
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Private AC Deluxe Room & Balcony
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Motorized Electric Hospital Bed
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Dedicated 1-on-1 Caregiver Option
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Custom Gourmet Meal Selection
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Priority Doctor & Physio Visits
              </li>
            </ul>
            <a href="#contact" className="btn btn-outline">
              Book Suite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
