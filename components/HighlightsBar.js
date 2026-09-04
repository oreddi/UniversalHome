export default function HighlightsBar() {
  return (
    <div className="container">
      <div className="highlights-bar">
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-user-nurse"></i>
            </div>
            <div className="highlight-text">
              <h4>24/7 Nursing Staff</h4>
              <p>Round-the-clock medical care</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-user-md"></i>
            </div>
            <div className="highlight-text">
              <h4>In-House Doctors</h4>
              <p>Regular physician visits</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <div className="highlight-text">
              <h4>Organic Veg Food</h4>
              <p>Customized dietitian meals</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <div className="highlight-text">
              <h4>Physiotherapy & Rehab</h4>
              <p>Daily mobility & yoga sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
