export default function HighlightsBar() {
  return (
    <div className="container">
      <div className="highlights-bar">
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="highlight-text">
              <h4>24/7 Caregivers</h4>
              <p>Round-the-clock assistance</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="highlight-text">
              <h4>Safe & Secure</h4>
              <p>Constant monitoring</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <div className="highlight-text">
              <h4>Organic Veg Food</h4>
              <p>Customized healthy meals</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-walking"></i>
            </div>
            <div className="highlight-text">
              <h4>Active Lifestyle</h4>
              <p>Daily mobility & yoga sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
