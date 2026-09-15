'use client';

export default function VideoTourModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-box" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            <i className="fas fa-play-circle"></i> Campus Life & Senior Living Video Tour
          </h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body" style={{ padding: '0' }}>
          <div className="video-player-container">
            {/* SVG Video Player Mockup / Interactive Presentation */}
            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#0f172a' }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1"
                title="Universal Home Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div style={{ padding: '1.5rem', textAlign: 'left', background: 'var(--light-bg)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>
              A Day in the Life at Universal Home, Kowkur
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
              See our peaceful garden lawn, morning yoga sessions, warm dining room, care station, and daily devotional prayers. We invite you to visit our facility in person!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
